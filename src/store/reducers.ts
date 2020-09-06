import { combineReducers } from 'redux';
import { AppState } from './store';

import dummyReducer from '../APP/dummy/dummy.reducer';


export const RootReducer = combineReducers<AppState>({
  dummy: dummyReducer
})