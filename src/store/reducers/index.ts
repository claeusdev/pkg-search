import { combineReducers } from "redux";
import reducer from "./repositoriesReducer";
import repositoriesReducer from "./repositoriesReducer";

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducer>;
