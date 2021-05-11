import "./Avatar.css";
import userDefaultPhoto from "../../../../../assets/img/default__avatar.png";
import { NavLink } from "react-router-dom";

const Avatar = (props) => {
  return (
    <div className="User__Avatar">
      <NavLink to={"/profile/user" + props.id}>
        <img
          className="User__Avatar__img"
          src={
            props.photos.small != null ? props.photos.small : userDefaultPhoto
          }
          alt=""
          srcset=""
        />
      </NavLink>
    </div>
  );
};

export default Avatar;
