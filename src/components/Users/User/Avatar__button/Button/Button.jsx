import "./Button.css";
import { UserAPI } from "../../../../../API/API";

const Button = (props) => {
  return (
    <div>
      {props.user.followed ? (
        <button
          onClick={() => {
            UserAPI.unFollowToUser(props.user.id).then((data) => {
              if (data.resultCode === 0) {
                props.unFollow(props.user.id);
              }
            });
          }}
          className="User__unFoll__button User__foll__unFoll__button"
        >
          Unfollow
        </button>
      ) : (
        <button
          className="User__foll__button User__foll__unFoll__button"
          onClick={() => {
            UserAPI.followToUser(props.user.id).then((data) => {
              if (data.resultCode === 0) {
                props.follow(props.user.id);
              }
            });
          }}
        >
          Follow
        </button>
      )}
    </div>
  );
};

export default Button;
