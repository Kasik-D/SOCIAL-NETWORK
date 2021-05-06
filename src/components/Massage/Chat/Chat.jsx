import "./Chat.css";
import Chat_add_massageContainer from "./Chat__massage/Chat_add_massage/Chat_add_massageContainer";
import Chat__massage from "./Chat__massage/Chat__massage";

const Chat = (props) => {
  return (
    <div className="chat">
      <div className="chat__main">
        {props.massagesData.map((el) => {
          return <Chat__massage massage={el.massage} id={el.id} key={el.id} />;
        })}
        <Chat_add_massageContainer />
      </div>
    </div>
  );
};

export default Chat;
