import React from "react";
import { UserAPI } from "../../API/API";
import Users from "./Users";

class UsersAPI extends React.Component {
  componentDidMount() {
    this.props.SetFetching(true);
    UserAPI.getUser(this.props.pageSize, this.props.currentPage).then((data) => {
      this.props.SetFetching(false);
      this.props.setUsers(data.items);
      this.props.SetTotalCount(data.totalCount);
    });
  }

  onPageChanget(pageNumber) {
    this.props.setPage(pageNumber);
    this.props.SetFetching(true);
    UserAPI.getUser(this.props.pageSize, this.props.currentPage).then((data) => {
      this.props.SetFetching(false);
      this.props.setUsers(data.items);
    });
  }

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

    let pages = [];

    for (let index = 1; index <= pagesCount; index++) {
      pages.push(index);
    }

    return (
      <Users
        currentPage={this.props.currentPage}
        users={this.props.users}
        pages={pages}
        onPageChanget={this.onPageChanget.bind(this)}
        follow={this.props.follow}
        unFollow={this.props.unFollow}
        isFetching={this.props.isFetching}
      />
    );
  }
}

export default UsersAPI;
