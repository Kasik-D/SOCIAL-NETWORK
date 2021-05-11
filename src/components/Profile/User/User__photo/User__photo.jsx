import "./User__photo.css";

const User__photo = (props) => {
  return (
    <div className="main__profile__logo">
      <img src={props.photos.large == null? "/static/media/default__avatar.679dc983.png" : props.photos.large}></img>
    </div>
  );
};

export default User__photo;
