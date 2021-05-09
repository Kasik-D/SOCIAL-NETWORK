import Avatar from "./Avatar/Avatar";
import "./Avatar__button.css";
import Button from "./Button/Button";

const Avatar__button = (props) => {
  return (
    <div className="Avatar__button">
      <Avatar photos={props.photos} />
      <Button
        user={props.user}
        follow={props.follow}
        unFollow={props.unFollow}
      />
    </div>
  );
};

export default Avatar__button;
