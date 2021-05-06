import "./Name.css";

const Name = (props) => {
  return <div className="Name">{props.user.fullname}</div>;
};

export default Name;
