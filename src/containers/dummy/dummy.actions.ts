import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { fetchItems } from "../../api/dummy.api";
import {
  DummyItem,
  DummyActionTypes,
  DummyActions,
  FetchDataSuccessAction,
  FetchDataLoadingAction,
  FetchDataErrorAction,
} from "./dummy.types";

export function fetchDataSuccess(items: DummyItem[]): FetchDataSuccessAction {
  return {
    type: DummyActionTypes.ITEMS_FETCH_DATA_SUCCESS,
    payload: items,
  };
}

export function fetchDataLoading(loading: boolean): FetchDataLoadingAction {
  return {
    type: DummyActionTypes.ITEMS_FETCH_DATA_LOADING,
    payload: loading,
  };
}

export function fetchDataError(hasError: boolean): FetchDataErrorAction {
  return {
    type: DummyActionTypes.ITEMS_FETCH_DATA_ERROR,
    payload: hasError,
  };
}

export function itemsFetchData(): ThunkAction<
  Promise<void>,
  {},
  {},
  DummyActions
> {
  return async (dispatch: ThunkDispatch<{}, {}, DummyActions>) => {
    try {
      dispatch(fetchDataLoading(true));
      const data = await fetchItems();

      dispatch(fetchDataSuccess(data));
      dispatch(fetchDataLoading(false));
    } catch (error) {
      dispatch(fetchDataLoading(false));
      dispatch(fetchDataError(true));
      console.log("[DummyAction] " + error.message);
    }
  };
}
