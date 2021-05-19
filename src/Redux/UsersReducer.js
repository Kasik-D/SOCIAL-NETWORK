const follow = "follow";
const unFollow = "unFollow";
const SetUsers = "SetUsers";
const SetPage = "SetPage";
const SetTotalCount = "SetTotalCount";
const SetFetching = "SetFetching";

var _ = require("lodash");

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
};

const UsersReducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);
  switch (action.type) {
    case follow: {
      newState.users = newState.users.map((user) => {
        if (user.id == action.id) {
          user.followed = true;
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

    case SetFetching: {
      return {
        ...state,
        isFetching: action.isFetching,
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

export const SetFetchingAC = (isFetching) => ({
  type: SetFetching,
  isFetching,
});

export default UsersReducer;
