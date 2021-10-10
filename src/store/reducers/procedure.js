import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  name: '',
  description: '',
  type: '',
  time: '',
  steps: [],
  id: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.INIT_PROCEDURE:
      return {...state, ...action.procedure};
    case actionTypes.END_PROCEDURE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
