import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? { color: "red" } : { color: "blue" }
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) =>
              isActive ? { color: "red" } : { color: "blue" }
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) =>
              isActive ? { color: "red" } : { color: "blue" }
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
