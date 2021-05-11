const addPost = "addPost";
const changeProfileInput = "changeProfileInput";
const SetProfileUser = "SetProfileUser";

var _ = require("lodash");

const initialState = {
  postsData: [
    {
      id: "1",
      massage: "Hello, my name Danil",
    },
    {
      id: "2",
      massage: "Hello everyone",
    },
    {
      id: "3",
      massage: "I learn react",
    },
  ],
  ProfileInput: "",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);
  switch (action.type) {
    case addPost: {
      newState.postsData.push({
        id: "5",
        massage: newState.ProfileInput,
      });
      newState.ProfileInput = "";
      break;
    }
    case changeProfileInput: {
      newState.ProfileInput = action.text;
      break;
    }
    case SetProfileUser: {
      newState = {
        ...state,
        profile: action.profile,
      };
      break;
    }
  }
  return newState;
};

export const addPostActionCreator = () => {
  return { type: addPost };
};

export const OnChangeProfileInputActionCreator = (text) => {
  return {
    type: changeProfileInput,
    text,
  };
};

export const SetProfile = (profile) => {
  return {
    type: SetProfileUser,
    profile,
  };
};

export default profileReducer;
