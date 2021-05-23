import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import AuthReducer from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import UsersReducer from "./UsersReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  massagePage: dialogsReducer,
  usersPage: UsersReducer,
  auth: AuthReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
