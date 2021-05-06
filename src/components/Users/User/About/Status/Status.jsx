import "./Status.css";

const Status = (props) => {
  return <div className="Status">{props.user.status}</div>;
};

export default Status;
