import "./User__information.css";
const User_information = (props) => {
  return (
    <div className="main__profile__information">
      <h2>
        {props.profile.fullName == null ? "No name" : props.profile.fullName}
      </h2>
      <ul className="main__profile__information__list">
        <li className="main__profile__information__link">
          {" "}
          {props.profile.aboutMe == null
            ? "About :  no information"
            : "About : " + props.profile.aboutMe}
        </li>
        <li className="main__profile__information__link">
          {props.profile.lookingForAJob == null
            ? "Looking for a job : no information"
            : props.profile.lookingForAJob === true
            ? "Looking for a job : Yes"
            : "Looking for a job : No"}
        </li>
        <li className="main__profile__information__link">
          {props.profile.lookingForAJobDescription == null
            ? "Looking for a job description : no information"
            : "Looking for a job description : " +
              props.profile.lookingForAJobDescription}
        </li>
      </ul>
    </div>
  );
};

export default User_information;
