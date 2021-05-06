import ChatContainer from "./Chat/ChatContainer";
import DialogsContainer from "./Dialogs/DialogsContainer";
import "./Massage.css";

const Massage = (props) => {
  return (
    <div className="Massage">
      <DialogsContainer />
      <ChatContainer />
    </div>
  );
};

export default Massage;
