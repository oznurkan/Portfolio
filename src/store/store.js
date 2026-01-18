import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { dataReducer } from "./reducers/dataReducer";

const rootReducer = combineReducers({
  data: dataReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));