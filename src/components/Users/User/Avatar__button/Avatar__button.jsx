import Avatar from "./Avatar/Avatar";
import "./Avatar__button.css";
import Button from "./Button/Button";

const Avatar__button = (props) => {
  return (
    <div className="Avatar__button">
      <Avatar photos={props.photos} id={props.id} />
      <Button
        user={props.user}
        isFollowing={props.isFollowing}
        unFollowThunk={props.unFollowThunk}
        followThunk={props.followThunk}
      />
    </div>
  );
};

export default Avatar__button;
