import About from "./About/About";
import Avatar__button from "./Avatar__button/Avatar__button";
import "./User.css";

const User = (props) => {
  return (
    <div className="User">
      <Avatar__button
        user={props.user}
        photos={props.user.photos}
        id={props.user.id}
        isFollowing={props.isFollowing}
        unFollowThunk={props.unFollowThunk}
        followThunk={props.followThunk}
      />
      <About user={props.user} />
    </div>
  );
};

export default User;
