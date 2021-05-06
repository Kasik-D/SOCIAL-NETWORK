import "./Profile.css";
import My__posts from "./My__posts/My__posts";
import User from "./User/User";
const Profile = (props) => {
  return (
    <div>
      <User />
      <My__posts />
    </div>
  );
};

export default Profile;
