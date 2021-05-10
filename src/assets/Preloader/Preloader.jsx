import "./Preloader.css";
import PreloaderSVG from "./Rolling.svg";

let Preloader = (props) => {
  return (
    <div className="Preloader">
      {props.isFetching ? <img src={PreloaderSVG} /> : null}
    </div>
  );
};

export default Preloader;
