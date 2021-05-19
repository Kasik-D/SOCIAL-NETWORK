import "./Preloader.css";
import PreloaderSVG from "./Rolling.svg";

let Preloader = (props) => {
  return (
    <div className={props.small ? "Preloader__small" : "Preloader"}>
      {props.isFetching ? <img src={PreloaderSVG} /> : null}
    </div>
  );
};

export default Preloader;
