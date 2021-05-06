import "./Dialog__photo.css";

const Dialog__photo = (props) => {
  return (
    <div className="dialog__photo">
      <img src={props.UserPhoto} alt="" />
    </div>
  );
};

export default Dialog__photo;
