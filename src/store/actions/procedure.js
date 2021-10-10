import * as actionTypes from './actionTypes';

export const initProcedure = procedure => {
  return {
    type: actionTypes.INIT_PROCEDURE,
    procedure,
  };
};

export const endProcedure = () => {
  return {
    type: actionTypes.END_PROCEDURE,
  };
};
