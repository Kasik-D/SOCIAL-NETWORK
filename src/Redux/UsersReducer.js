import { UserAPI } from "../API/API";

const follow = "follow";
const unFollow = "unFollow";
const SetUsers = "SetUsers";
const SetPage = "SetPage";
const SetTotalCount = "SetTotalCount";
const SetFetching = "SetFetching";
const SetFollowing = "SetFollowing";

var _ = require("lodash");

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isFollowing: [],
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

    case SetFollowing: {
      return {
        ...state,
        isFollowing: action.isFetching
          ? [...state.isFollowing, action.userId]
          : state.isFollowing.filter((id) => id != action.userId),
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

export const SetFollowingAC = (isFetching, userId) => ({
  type: SetFollowing,
  isFetching,
  userId,
});

export const GetUsersThunkCreator = (pageSize, currentPage) => {
  return (dispatch) => {
    dispatch(SetFetchingAC(true));
    UserAPI.getUser(pageSize, currentPage).then((data) => {
      dispatch(SetFetchingAC(false));
      dispatch(setUserAC(data.items));
      dispatch(SetTotalCountAC(data.totalCount));
    });
  };
};

export const unFollowThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(SetFollowingAC(true, userId));
    UserAPI.unFollowToUser(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unFollowAC(userId));
      }
      dispatch(SetFollowingAC(false, userId));
    });
  };
};

export const followThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(SetFollowingAC(true, userId));
    UserAPI.followToUser(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followAC(userId));
      }
      dispatch(SetFollowingAC(false, userId));
    });
  };
};

export default UsersReducer;
