import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav-bar">
      <div className="logo">
        <NavLink to="/">From Nov Photo</NavLink>
      </div>

      <div className="nav">
        <NavLink to="/">
          <button>home</button>
        </NavLink>
        <NavLink to="/portfolio">
          <button>portfolio</button>
        </NavLink>
        <NavLink to="/about">
          <button>about me</button>
        </NavLink>
        <NavLink to="/book">
          <button>book</button>
        </NavLink>
      </div>
    </div>
  );
}
