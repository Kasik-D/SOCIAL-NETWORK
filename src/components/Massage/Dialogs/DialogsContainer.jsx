import { connect } from "react-redux";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsData: state.massagePage.dialogsData,
  };
};

let DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer;
