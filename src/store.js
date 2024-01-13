import { combineReducers } from 'redux';
import {formone, formTwoReducer, formFourReducer, formThreeReducer}from './redux/formReduce';

const rootReducer = combineReducers({
  formone: formone,
  formtwo: formTwoReducer,
  formthree: formThreeReducer,
  formfour: formFourReducer,
  // Add other reducers here if needed
});

export default rootReducer;