import { connect } from "react-redux";
import {
  addPostActionCreator,
  OnChangeProfileInputActionCreator,
} from "../../../../Redux/profileReducer";
import Add__post from "./Add__post";

let mapStateToProps = (state) => {
  return {
    ProfileInput: state.profilePage.ProfileInput,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },

    ChangeProfileInput: (text) => {
      dispatch(OnChangeProfileInputActionCreator(text));
    },
  };
};

let Add__postContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Add__post);

export default Add__postContainer;
