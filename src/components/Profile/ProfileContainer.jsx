import Profile from "./Profile";
import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { SetProfile } from "../../Redux/profileReducer";
import { withRouter } from "react-router";

class ProfileContainerAPI extends React.Component {
  componentDidMount() {
    if (!this.props.match.params.userId) {
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
        .then((response) => {
          this.props.SetProfile(response.data);
        });
    } else {
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/profile/` +
            this.props.match.params.userId.replace(/[^\d]/g, "")
        )
        .then((response) => {
          this.props.SetProfile(response.data);
        });
    }
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
  SetProfile,
})(withRouter(ProfileContainerAPI));

export default ProfileContainer;
