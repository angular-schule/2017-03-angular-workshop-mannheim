import { combineReducers } from 'redux-seamless-immutable';
import { counterReducer } from './counter.reducer';
import { IAppState } from './types';

// rootReducer of IAppState
export const rootReducer = combineReducers({
  counter: counterReducer
});
