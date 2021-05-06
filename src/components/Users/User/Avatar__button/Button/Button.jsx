import "./Button.css";

const Button = (props) => {
  return (
    <div>
      {props.user.followed ? (
        <button
          onClick={() => {
            props.unFollow(props.user.id);
          }}
          className="User__unFoll__button User__foll__unFoll__button"
        >
          Unfollow
        </button>
      ) : (
        <button
          className="User__foll__button User__foll__unFoll__button"
          onClick={() => {
            props.follow(props.user.id);
          }}
        >
          Follow
        </button>
      )}
    </div>
  );
};

export default Button;
