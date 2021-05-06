import "./Dialog.css";
import Dialog__photo from "./Dialog__photo/Dialog__photo";
import Dialog__userName from "./Dialog__userName/Dialog__userName";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
  return (
    <NavLink to={props.UserID} className="dialogs-items__lint">
      <div className="dialog">
        <Dialog__photo UserPhoto={props.UserPhoto} />
        <Dialog__userName User__name={props.User__name} />
      </div>
    </NavLink>
  );
};

export default Dialog;
