import { connect } from "react-redux";
import {
  addChatActionCreator,
  OnChangeChatInputActionCreator,
} from "../../../../../Redux/dialogsReducer";

import Chat_add_massage from "./Chat_add_massage";

let mapStateToProps = (state) => {
  return {
    ChatInput: state.massagePage.ChatInput,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMassage: () => {
      dispatch(addChatActionCreator());
    },
    ChangeChatInput: (text) => {
      dispatch(OnChangeChatInputActionCreator(text));
    },
  };
};

let Chat__add__massageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat_add_massage);

export default Chat__add__massageContainer;
