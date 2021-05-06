import { connect } from "react-redux";
import Chat from "./Chat";

let mapStateToProps = (state) => {
  return {
    massagesData: state.massagePage.massagesData,
  };
};

let ChatContainer = connect(mapStateToProps)(Chat);

export default ChatContainer;
