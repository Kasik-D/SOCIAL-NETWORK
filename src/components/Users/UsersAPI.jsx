import axios from "axios";
import React from "react";
import Users from "./Users";

class UsersAPI extends React.Component {

  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.SetTotalCount(response.data.totalCount);
      });
  }

  onPageChanget(pageNumber) {
    this.props.setPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
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
      />
    );
  }
}

export default UsersAPI;
