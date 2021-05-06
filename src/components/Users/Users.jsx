import User from "./User/User";
import "./Users.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        fullname: "Danil K.",
        status:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, pariatur!",
        location: {
          city: "Sumy",
          country: "Ukraine",
        },
        followed: true,
      },
      {
        id: 2,
        fullname: "Artem S.",
        status:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, pariatur! Dolor, pariatur!",
        location: {
          city: "Sumy",
          country: "Ukraine",
        },
        followed: true,
      },
      {
        id: 3,
        fullname: "Egor S.",
        status: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        location: {
          city: "Sumy",
          country: "Ukraine",
        },
        followed: false,
      },
    ]);
  }

  return (
    <div className="Users">
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
    </div>
  );
};

export default Users;
