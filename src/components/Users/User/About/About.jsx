import "./About.css";
import Name__location from "./Name__location/Name__location";
import Status from "./Status/Status";

const About = (props) => {
  return <div className="About">
      <Name__location user={props.user}/>
      <Status user={props.user}/>
  </div>;
};

export default About;
