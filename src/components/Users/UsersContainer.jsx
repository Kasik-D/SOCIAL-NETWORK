import { connect } from "react-redux";
import {
  followAC,
  SetFetchingAC,
  setPageAC,
  SetTotalCountAC,
  setUserAC,
  unFollowAC,
} from "../../Redux/UsersReducer";
import UsersAPI from "./UsersAPI";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unFollow: (userId) => {
      dispatch(unFollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUserAC(users));
    },
    setPage: (currentPage) => {
      dispatch(setPageAC(currentPage));
    },
    SetTotalCount: (totalUsersCount) => {
      dispatch(SetTotalCountAC(totalUsersCount));
    },
    SetFetching: (SetFetching) => {
      dispatch(SetFetchingAC(SetFetching));
    },
  };
};

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);

export default UsersContainer;
