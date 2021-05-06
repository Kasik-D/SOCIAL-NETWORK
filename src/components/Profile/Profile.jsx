import "./Profile.css";
import Main__photo from "./Main__photo/Main__photo";
import My__posts from "./My__posts/My__posts";
import User from "./User/User";
const Profile = (props) => {
  return (
    <div>
      <Main__photo />
      <User />
      <My__posts />
    </div>
  );
};

export default Profile;
