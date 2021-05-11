import "./User.css";
import UserContacts from "./UserContacts/UserContacts";
import User__information from "./User__information/User__information";
import User__photo from "./User__photo/User__photo";
const User = (props) => {
  return (
    <div>
      <div className="main__profile">
        <User__photo photos={props.profile.photos} />
        <User__information profile={props.profile} />
      </div>
      <UserContacts contacts={props.profile.contacts} />
    </div>
  );
};

export default User;
