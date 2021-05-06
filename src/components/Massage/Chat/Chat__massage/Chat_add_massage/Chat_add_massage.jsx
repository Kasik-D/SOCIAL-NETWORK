import "./Chat_add_massage.css";
import React from "react";

const Chat_add_massage = (props) => {
  const newMassageElement = React.createRef();

  const addMassage = () => {
    props.addMassage();
  };

  const OnChangeChatInput = () => {
    props.ChangeChatInput(newMassageElement.current.value);
  };

  return (
    <div className="Chat_add_massage">
      <div className="Chat_add_massage__input">
        <textarea
          name=""
          id=""
          cols="40"
          rows="5"
          ref={newMassageElement}
          onChange={OnChangeChatInput}
          value={props.ChatInput}
        ></textarea>
      </div>
      <div className="Chat_add_massage__button">
        <button>
          <a onClick={addMassage}>Add massage</a>
        </button>
      </div>
    </div>
  );
};

export default Chat_add_massage;
