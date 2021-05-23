import Header from "./Header";
import React from "react";
import { connect } from "react-redux";
import { GetMeThunkAction } from "../../Redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.GetMeThunkAction();
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
  GetMeThunkAction,
})(HeaderContainer);
