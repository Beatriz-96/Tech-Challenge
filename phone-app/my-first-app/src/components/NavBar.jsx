import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <NavLink className="nav-links" to="/">
        <b>Home</b>
      </NavLink>
      <NavLink className="nav-links" to="/phones">
        <b>Phones</b>
      </NavLink>
    </nav>
  );
};
