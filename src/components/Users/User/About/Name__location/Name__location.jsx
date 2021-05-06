import Location from "./Location/Lacation";
import Name from "./Name/Name";
import "./Name__location.css";

const Name__location = (props) => {
  return (
    <div className="Name__location">
      <Name user={props.user}/>
      <Location user={props.user}/>
    </div>
  );
};

export default Name__location;
