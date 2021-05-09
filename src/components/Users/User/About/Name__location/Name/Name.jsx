import "./Name.css";

const Name = (props) => {
  return <div className="Name">{props.user.name}</div>;
};

export default Name;
