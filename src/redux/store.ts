import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { user } from "./reducer/user";
import { photos } from "./reducer/posts";

const middleware = applyMiddleware(thunkMiddleware, logger);
const rootReducer = combineReducers({ user, photos });

export const store = createStore(rootReducer, composeWithDevTools(middleware));
