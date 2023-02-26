import { Outlet, NavLink } from "react-router-dom";

import "./Manageconfig.css";

import Layout from "../Layout/Layout";

const Manageconfig = (props) => {
    const { getformData } = props

    const handleSave = (dta) => {
        localStorage.setItem("fdata", dta);
        localStorage.getItem("fdata");
        console.log("form data saved",dta)
    };

    return (
        <>
            <Layout />
            <nav>
                <h2 className="heading">
                    South Africa Configurations
                    <button type="file" className="upload">
                        ⬆ Upload Configuration
                    </button>
                    <button className="download">⬇ Download Configuration</button>
                    <button onClick={() => handleSave(getformData)} className="save">
                        💾 Save
                    </button>
                </h2>
                <ul className="nav2">
                    <li className="navitem">
                        <NavLink
                            to="yearrange"
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? "blue" : "",
                                    borderBottom: isActive ? "solid" : "",
                                    borderWidth: isActive ? "6px" : "",
                                    borderColor: isActive ? "blue" : "",
                                };
                            }}
                        >
                            Year Range
                        </NavLink>
                    </li>
                    <li className="navitem">
                        <NavLink
                            to="dimensions"
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? "blue" : "",
                                    borderBottom: isActive ? "solid" : "",
                                    borderWidth: isActive ? "6px" : "",
                                    borderColor: isActive ? "blue" : "",
                                };
                            }}
                        >
                            Dimensions
                        </NavLink>
                    </li>
                    <li className="navitem">
                        <NavLink
                            to="activityunits"
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? "blue" : "",
                                    borderBottom: isActive ? "solid" : "",
                                    borderWidth: isActive ? "6px" : "",
                                    borderColor: isActive ? "blue" : "",
                                };
                            }}
                        >
                            Activity Units
                        </NavLink>
                    </li>
                    <li className="navitem">
                        <NavLink
                            to="fuelblendings"
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? "blue" : "",
                                    borderBottom: isActive ? "solid" : "",
                                    borderWidth: isActive ? "6px" : "",
                                    borderColor: isActive ? "blue" : "",
                                };
                            }}
                        >
                            Fuel Blendings
                        </NavLink>
                    </li>
                    <button className="btn" type="submit">
                        Submit
                    </button>
                </ul>
                <hr className="hr2" />
            </nav>
            <Outlet />
        </>
    );
};

export default Manageconfig;
