import { AuthAPI } from "../API/API";
const setUserData = "setUserData";
const SetFetching = "SetFetching";

var _ = require("lodash");

let initialState = {
  userId: null,
  login: null,
  email: null,
  isFetching: false,
  isAuth: false,
};

const AuthReducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);
  switch (action.type) {
    case setUserData: {
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    }

    case SetFetching: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
  }
  return newState;
};

export const set_auth_user_data = (UserId, login, email) => ({
  type: setUserData,
  data: {
    UserId,
    login,
    email,
  },
});

export const Set_Fetching = (isFetching) => ({
  type: SetFetching,
  isFetching,
});

export const GetMeThunkAction = () => {
  return (dispatch) => {
    dispatch(Set_Fetching(true));
    AuthAPI.AuthMe().then((data) => {
      if (data.resultCode === 0) {
        dispatch(
          set_auth_user_data(data.data.id, data.data.login, data.data.email)
        );
      }
      dispatch(Set_Fetching(false));
    });
  };
};

export default AuthReducer;
