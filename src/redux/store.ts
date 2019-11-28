import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { reducers, initialState } from "./reducers";

const middleware = applyMiddleware(thunkMiddleware, logger);

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(middleware)
);
