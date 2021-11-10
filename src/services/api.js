import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
// import Config from 'react-native-config';

const instance = axios.create({
  baseURL: 'https://ambulance-api.herokuapp.com/',
  // baseURL: 'http://localhost:3333', // para iOS
  // baseURL: 'http://10.0.2.2:3333', // para Android
  timeout: 5000,
});

instance.interceptors.request.use(async config => ({
  ...config,
  headers: {
    ...config.headers,
    Authorization: await AsyncStorage.getItem('access_token'),
  },
}));

export default instance;
