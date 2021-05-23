import Profile from "./Profile";
import React from "react";
import { GetProfileThunkAction } from "../../Redux/profileReducer";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class ProfileContainerAPI extends React.Component {
  componentDidMount() {
    this.props.GetProfileThunkAction(this.props.match.params.userId);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

let ProfileContainer = connect(mapStateToProps, {
  GetProfileThunkAction,
})(withRouter(ProfileContainerAPI));

export default ProfileContainer;
