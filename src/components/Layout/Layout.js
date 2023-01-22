import { NavLink} from "react-router-dom";

import "./Layout.css";

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="navbar">
          <li className="navitem">
            <NavLink style={({ isActive }) => {
                return {
                  color: isActive ? "blue" : "",
                  borderBottom: isActive ? "solid" : "",
                  borderWidth: isActive ? "6px" : "",
                  borderColor: isActive ? "blue" : "",
                };
              }} to="manageconfig">Manage configurations</NavLink>
          </li>
          <li className="navitem">
            <NavLink style={({ isActive }) => {
                return {
                  color: isActive ? "blue" : "",
                  borderBottom: isActive ? "solid" : "",
                  borderWidth: isActive ? "6px" : "",
                  borderColor: isActive ? "blue" : "",
                };
              }} to="manageassump">Manage assumptions</NavLink>
          </li>
          <li className="navitem">
            <NavLink style={({ isActive }) => {
                return {
                    borderBottom: isActive ? "solid" : "",
                  borderWidth: isActive ? "6px" : "",
                  borderColor: isActive ? "blue" : "",
                };
              }} to="explorescenario">Explore scenarios</NavLink>
          </li>
        </ul>

        <hr className="hr" />
        <h4 className="h">
          Models<span> > </span> Africa<span> > </span> South Africa
        </h4>
      </nav>
    </>
  );
};

export default Layout;
