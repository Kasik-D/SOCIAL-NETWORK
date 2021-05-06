import "./User.css";
import User__information from "./User__information/User__information";
import User__photo from "./User__photo/User__photo";
const User = () => {
  return (
    <div className="main__profile">
      <User__photo />
      <User__information />
    </div>
  );
};

export default User;
