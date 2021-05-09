import User from "./User/User";
import "./Users.css";
import axios from "axios";
import React from "react";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div className="Users">
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
