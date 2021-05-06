import { createStore, combineReducers } from "redux";

import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import UsersReducer from "./UsersReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  massagePage: dialogsReducer,
  usersPage: UsersReducer,
});

let store = createStore(reducers);

export default store;
