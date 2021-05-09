import "./Avatar.css";
import userDefaultPhoto from "../../../../../assets/img/default__avatar.png";

const Avatar = (props) => {
  return (
    <div className="User__Avatar">
      <img
        className="User__Avatar__img"
        src={props.photos.small != null ? props.photos.small : userDefaultPhoto}
        alt=""
        srcset=""
      />
    </div>
  );
};

export default Avatar;
