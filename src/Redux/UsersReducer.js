const follow = "follow";
const unFollow = "unFollow";
const SetUsers = "SetUsers";
var _ = require("lodash");

let initialState = {
  users: [],
};

const UsersReducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);
  switch (action.type) {
    case follow: {
      newState.users = newState.users.map((user) => {
        if (user.id == action.id) {
          user.followed = true;
          console.log(user.followed);
        }
        return user;
      });
      break;
    }
    case unFollow: {
      newState.users = newState.users.map((user) => {
        if (user.id == action.id) {
          user.followed = false;
        }
        return user;
      });
      break;
    }

    case SetUsers: {
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    }
  }
  return newState;
};

export const followAC = (id) => ({
  type: follow,
  id,
});

export const unFollowAC = (id) => ({
  type: unFollow,
  id,
});

export const setUserAC = (users) => ({
  type: SetUsers,
  users,
});

export default UsersReducer;
