import { NavLink } from "react-router-dom";
import Preloader from "../../assets/Preloader/Preloader";
import "./Header.css";
const Header = (props) => {
  return (
    <header className="header">
      <div className="header__text">
        <h1>Social Network</h1>
      </div>
      <div className="login">
        {props.isFetching ? (
          <Preloader
            className="login__preloader"
            isFetching={props.isFetching}
            small={true}
          />
        ) : props.isAuth ? (
          props.login
        ) : (
          <NavLink to="/Login">Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
