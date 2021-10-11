import {BleManager} from 'react-native-ble-plx';

const TIMEOUT = 10000;

const promiseTimeout = (timeout, promise) => {
  return Promise.race([
    promise,
    new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(Error('Não foi possível se comunicar com o dispositivo'));
      }, timeout);
    }),
  ]);
};

export default class BluetoothManager {
  constructor() {
    this.manager = new BleManager();
  }

  startScanning() {
    this.subscription = this.manager.onStateChange(state => {
      if (state === 'PoweredOn') {
        this.scanAndConnect();
        this.subscription.remove();
      }
    }, true);
  }

  scanAndConnect() {
    this.manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        // Handle error (scanning will be stopped automatically)
        return;
      }

      // Check if it is the device based on advertisement data
      // or other criteria.
      if (device.name === 'THROUGHPUT_DEMO') {
        // Stop scanning as it's not necessary to continue.
        this.manager.stopDeviceScan();

        // Proceed with connection.
        device
          .connect()
          .then(connectedDevice => {
            return connectedDevice.discoverAllServicesAndCharacteristics();
          })
          .then(connectedDevice => {
            // Do work on (connectedDevice) with services and characteristics
            this.connectedDevice = connectedDevice;
          })
          .catch(error => {
            // Handle errors
          });
      }
    });
  }

  async sendCommand(procedureCommand) {
    const serviceUUID = this.connectedDevice.serviceUUIDs[0];
    const characteristics =
      await this.connectedDevice.characteristicsForService(serviceUUID);

    const characteristicUUID = characteristics[0];

    const response =
      await this.connectedDevice.writeCharacteristicWithResponseForService(
        serviceUUID,
        characteristicUUID,
        procedureCommand,
      );

    return response;
  }

  async tryEndProcedure() {
    await promiseTimeout(
      TIMEOUT,
      new Promise((resolve, reject) => {
        // m => finish command
        const response = this.sendCommand('m');
        if (response.value === 'ok') {
          this.success = true;
          resolve(true);
        } else {
          reject();
        }
      }),
    );
  }

  endProcedure() {
    this.intervalSubscription = setInterval(async () => {
      try {
        await this.tryEndProcedure();
        if (this.success) {
          this.success = false;
          clearInterval(this.intervalSubscription);
        }
      } catch (error) {
        // Do nothing
      }
    }, 5000);
  }
}
