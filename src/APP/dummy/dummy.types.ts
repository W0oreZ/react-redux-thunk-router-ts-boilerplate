export interface DummyItem {
  id: number;
  label: string;
}

export interface DummyState {
  items: DummyItem[];
  hasErrored: boolean;
  isLoading: boolean;
}

export interface DummyProps {
  title: string;
}

export enum DummyActionTypes {
  ITEMS_FETCH_DATA_SUCCESS = "[Dummy] Item fetch data success",
  ITEMS_FETCH_DATA_LOADING = "[Dummy] Item fetch data loading",
  ITEMS_FETCH_DATA_ERROR = "[Dummy] Item fetch data error",
}

export interface FetchDataSuccessAction {
  type: DummyActionTypes.ITEMS_FETCH_DATA_SUCCESS;
  payload: DummyItem[];
}

export interface FetchDataLoadingAction {
  type: DummyActionTypes.ITEMS_FETCH_DATA_LOADING;
  payload: boolean;
}

export interface FetchDataErrorAction {
  type: DummyActionTypes.ITEMS_FETCH_DATA_ERROR;
  payload: boolean;
}

export type DummyActions =
  | FetchDataSuccessAction
  | FetchDataLoadingAction
  | FetchDataErrorAction;
