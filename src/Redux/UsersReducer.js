const follow = "follow";
const unFollow = "unFollow";
const SetUsers = "SetUsers";
const SetPage = "SetPage";
const SetTotalCount = "SetTotalCount";

var _ = require("lodash");

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
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
        users: [...action.users],
      };
    }

    case SetPage: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }

    case SetTotalCount: {
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
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

export const setPageAC = (currentPage) => ({
  type: SetPage,
  currentPage,
});

export const SetTotalCountAC = (totalUsersCount) => ({
  type: SetTotalCount,
  totalUsersCount,
});

export default UsersReducer;
