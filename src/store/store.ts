import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { RootReducer } from "./reducers";
import { DummyState } from "../APP/dummy/dummy.types";
import { initialDummyState } from "../APP/dummy/dummy.reducer";

export interface AppState {
  dummy: DummyState;
}

const initialAppState: AppState = {
  dummy: initialDummyState,
};

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(
  initialState: AppState = initialAppState
) {
  return createStore(
    RootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
