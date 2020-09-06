import { DummyState, DummyActionTypes, DummyActions } from "./dummy.types";

export const initialDummyState: DummyState = {
  items: [],
  isLoading: false,
  hasErrored: false,
};

const dummyReducer = (
  state: DummyState = initialDummyState,
  action: DummyActions
): DummyState => {
  switch (action.type) {
    case DummyActionTypes.ITEMS_FETCH_DATA_SUCCESS:
      return { ...state, items: action.payload };
    case DummyActionTypes.ITEMS_FETCH_DATA_LOADING:
      return { ...state, isLoading: action.payload };
    case DummyActionTypes.ITEMS_FETCH_DATA_ERROR:
      return { ...state, hasErrored: action.payload };
    default:
      return state;
  }
};

export default dummyReducer;
