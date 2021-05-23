import "./Button.css";

const Button = (props) => {
  return (
    <div>
      {props.user.followed ? (
        <button
          disabled={props.isFollowing.some((id) => id === props.user.id)}
          onClick={() => {
            props.unFollowThunk(props.user.id);
          }}
          className="User__unFoll__button User__foll__unFoll__button"
        >
          Unfollow
        </button>
      ) : (
        <button
          disabled={props.isFollowing.some((id) => id === props.user.id)}
          className="User__foll__button User__foll__unFoll__button"
          onClick={() => {
            props.followThunk(props.user.id);
          }}
        >
          Follow
        </button>
      )}
    </div>
  );
};

export default Button;
