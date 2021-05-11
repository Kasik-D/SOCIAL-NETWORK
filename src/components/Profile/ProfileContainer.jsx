import Profile from "./Profile";
import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { SetProfile } from "../../Redux/profileReducer";

class ProfileContainerAPI extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        this.props.SetProfile(response.data);
      });
  }

  render() {
    console.log({ ...this.props });
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
})(ProfileContainerAPI);

export default ProfileContainer;
