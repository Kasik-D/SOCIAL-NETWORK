import { connect } from "react-redux";
import {
  followAC,
  setPageAC,
  SetTotalCountAC,
  setUserAC,
  unFollowAC,
} from "../../Redux/UsersReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
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
  };
};

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
