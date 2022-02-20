import axios from "axios";
import { Dispatch } from "redux";
import { Action } from "..";
import { ActionTypes } from "../types";

export const SearchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.SEARCH_REPOSITORIES,
    });

    try {
      const { data }: any = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );
      console.log({ data });
      const names = data.objects.map((result: any) => result.package.name);
      dispatch({
        type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.SEARCH_REPOSITORIES_ERROR,
        payload: error.message,
      });
    }
  };
};
