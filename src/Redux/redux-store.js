import { createStore, combineReducers } from "redux";

import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  massagePage: dialogsReducer,
});

let store = createStore(reducers);

export default store;
