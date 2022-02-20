import { ActionTypes } from "./types";

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;

export interface SearchRepositoriesAction {
  type: ActionTypes.SEARCH_REPOSITORIES;
}

export interface SearchRepositoriesSuccessAction {
  type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

export interface SearchRepositoriesErrorAction {
  type: ActionTypes.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}
