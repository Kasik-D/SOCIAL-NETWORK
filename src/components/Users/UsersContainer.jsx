import { connect } from "react-redux";
import {
  setPageAC,
  SetTotalCountAC,
  GetUsersThunkCreator,
  unFollowThunkCreator,
  followThunkCreator,
} from "../../Redux/UsersReducer";
import UsersAPI from "./UsersAPI";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isFollowing: state.usersPage.isFollowing,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setPage: (currentPage) => {
      dispatch(setPageAC(currentPage));
    },
    SetTotalCount: (totalUsersCount) => {
      dispatch(SetTotalCountAC(totalUsersCount));
    },
    GetUsersThunk: (pageSize, currentPage) => {
      dispatch(GetUsersThunkCreator(pageSize, currentPage));
    },
    unFollowThunk: (userId) => {
      dispatch(unFollowThunkCreator(userId));
    },
    followThunk: (userId) => {
      dispatch(followThunkCreator(userId));
    },
  };
};

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);

export default UsersContainer;
