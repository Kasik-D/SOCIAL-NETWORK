import User from "./User/User";
import "./Users.css";
import axios from "axios";
import React from "react";

class Users extends React.Component {
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
      <div className="Users">
        <div className="Users__pages">
          {pages.map((p) => {
            return (
              <div
                className={
                  this.props.currentPage === p
                    ? "selectedPage Users__page"
                    : "Users__page"
                }
                onClick={() => this.onPageChanget(p)}
              >
                {p}
              </div>
            );
          })}
        </div>
        <div className="Users__container">
          {this.props.users.map((user) => {
            return (
              <User
                key={user.id}
                user={user}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Users;
