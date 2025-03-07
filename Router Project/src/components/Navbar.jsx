import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="flex gap-10 mb-5 ">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? { color: "red" } : { color: "#646cff" }
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) =>
              isActive ? { color: "red" } : { color: "#646cff" }
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) =>
              isActive ? { color: "red" } : { color: "#646cff" }
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/students"
            style={({ isActive }) =>
              isActive ? { color: "red" } : { color: "#646cff" }
            }
          >
            Students
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
