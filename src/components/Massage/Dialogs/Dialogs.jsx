import Dialog from "./Dialog/Dialog";
import "./Dialogs.css";

const Dialogs = (props) => {
  return (
    <div className="dialogs">
      <div className="dialogs__items">
        {props.dialogsData.map((el) => {
          return (
            <Dialog
              UserID={el.UserID}
              User__name={el.User__name}
              UserPhoto={el.UserPhoto}
              key={el.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dialogs;
