import "./Lacation.css";

const Location = (props) => {
  return (
    <div className="Location">
      {props.user.location.city}, {props.user.location.country}
    </div>
  );
};

export default Location;
