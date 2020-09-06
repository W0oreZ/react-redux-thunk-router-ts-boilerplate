import { combineReducers } from 'redux';
import { AppState } from './store';

import dummyReducer from './../containers/dummy/dummy.reducer';


export const RootReducer = combineReducers<AppState>({
  dummy: dummyReducer
})