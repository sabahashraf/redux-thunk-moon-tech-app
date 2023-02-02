import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./reducers/rootReducer";
import cartCounter from "./middlewares/cartCounter";
//composeWithDevTools()
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(cartCounter, thunk, logger))
);

export default store;
