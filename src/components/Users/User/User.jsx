import About from "./About/About";
import Avatar__button from "./Avatar__button/Avatar__button";
import "./User.css";

const User = (props) => {
  return (
    <div className="User">
      <Avatar__button
        user={props.user}
        follow={props.follow}
        unFollow={props.unFollow}
        photos={props.user.photos}
      />
      <About user={props.user} />
    </div>
  );
};

export default User;
