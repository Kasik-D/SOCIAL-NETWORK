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

export default AuthReducer;
