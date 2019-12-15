import { createStore, combineReducers, applyMiddleware } from "redux";
import { save, load } from "redux-localstorage-simple";
import { routerMiddleware } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./reducers/userreducer";
import { createBrowserHistory } from "history";

const store = createStore(
  combineReducers({
    user: userReducer
  })
);

load({ state: ["user"] });
composeWithDevTools(
  applyMiddleware(routerMiddleware(createBrowserHistory())),
  applyMiddleware(save({ state: ["user"] }))
);

export default store;
