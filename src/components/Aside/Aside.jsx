import { NavLink } from "react-router-dom";
import "./Aside.css";

const Aside = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar__list">
        <li>
          <NavLink to="/Profile" className="sidebar__link">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/Massages" className="sidebar__link">
            Massages
          </NavLink>
        </li>
        <li>
          <NavLink to="/News" className="sidebar__link">
            News
          </NavLink>
        </li>
        <li>
          <NavLink to="/Music" className="sidebar__link">
            Music
          </NavLink>
        </li>
        <li>
          <NavLink to="/Settings" className="sidebar__link">
            Settings
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
