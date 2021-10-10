import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  name: '',
  description: '',
  id: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SELECT_AMBULANCE:
      return {...state, ...action.ambulance};
    case actionTypes.CLEAR_AMBULANCE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
