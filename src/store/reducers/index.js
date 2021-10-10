import {combineReducers} from 'redux';
import auth from './auth';
import ambulance from './ambulance';
import procedure from './procedure';
import loader from './loader';

const reducers = combineReducers({
  auth,
  ambulance,
  procedure,
  loader,
});

export default reducers;
