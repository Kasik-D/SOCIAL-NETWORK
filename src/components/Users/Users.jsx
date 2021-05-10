import "./Users.css";
import User from "./User/User";
import Preloader from "../../assets/Preloader/Preloader";

let Users = (props) => {
  return (
    <div className="Users">
      <div className="Users__pages">
        {props.pages.map((p) => {
          return (
            <div
              className={
                props.currentPage === p
                  ? "selectedPage Users__page"
                  : "Users__page"
              }
              onClick={() => props.onPageChanget(p)}
            >
              {p}
            </div>
          );
        })}
      </div>
      <Preloader isFetching={props.isFetching} />
      {props.isFetching ? (
        <div className="isFetching"></div>
      ) : (
        <div className="Users__container">
          {props.users.map((user) => {
            return (
              <User
                key={user.id}
                user={user}
                follow={props.follow}
                unFollow={props.unFollow}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Users;
