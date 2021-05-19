import Header from "./Header";
import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { set_auth_user_data, Set_Fetching } from "../../Redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.Set_Fetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          this.props.set_auth_user_data(
            response.data.data.id,
            response.data.data.login,
            response.data.data.email
          );
        }
        this.props.Set_Fetching(false);
      });
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    isFetching: state.usersPage.isFetching,
  };
};

export default connect(mapStateToProps, {
  set_auth_user_data,
  Set_Fetching,
})(HeaderContainer);
