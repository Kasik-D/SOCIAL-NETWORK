import React from "react";
import Users from "./Users";

class UsersAPI extends React.Component {
  componentDidMount() {
    this.props.GetUsersThunk(this.props.pageSize, this.props.currentPage);
  }

  onPageChanget(pageNumber) {
    this.props.setPage(pageNumber);
    this.props.GetUsersThunk(this.props.pageSize, this.props.currentPage);
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
        isFetching={this.props.isFetching}
        isFollowing={this.props.isFollowing}
        unFollowThunk={this.props.unFollowThunk}
        followThunk={this.props.followThunk}
      />
    );
  }
}

export default UsersAPI;
