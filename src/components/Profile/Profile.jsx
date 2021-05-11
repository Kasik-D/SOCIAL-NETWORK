import "./Profile.css";
import My__posts from "./My__posts/My__posts";
import User from "./User/User";
import Preloader from "../../assets/Preloader/Preloader";
const Profile = (props) => {
  if (!props.profile) {
    return <Preloader isFetching={true} />;
  } else {
    return (
      <div>
        <User profile={props.profile} />
        <My__posts />
      </div>
    );
  }
};

export default Profile;
