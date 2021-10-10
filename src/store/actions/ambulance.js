import * as actionTypes from './actionTypes';

export const selectAmbulance = ambulance => {
  return {
    type: actionTypes.SELECT_AMBULANCE,
    ambulance,
  };
};

export const clearAmbulance = () => {
  return {
    type: actionTypes.CLEAR_AMBULANCE,
  };
};
