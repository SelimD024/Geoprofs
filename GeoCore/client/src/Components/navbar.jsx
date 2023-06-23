import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/react.svg";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faBinoculars } from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const user = JSON.parse(localStorage.getItem('user'));
  const handleFunctionChange = (functionName) => {
    setUserRole(functionName);
    setIsDropdownOpen(false);
    saveUserRole(functionName);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutsideDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  /*
    const saveUserRole = (role) => {
      localStorage.setItem("userRole", role);
    };
  */

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideDropdown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideDropdown);
    };
  }, []);

 /* useEffect(() => {
    const savedRole = localStorage.getItem("userRole");
    if (savedRole) {
      setUserRole(savedRole);
    }
  }, []);*/

  return (
    <div className="cs-navbar">
      <div className="logo">
        <img src={Logo} alt="React Logo" />
        <h2>GeoProfs</h2>
      </div>
      <ul className="cs-menu">
        <a
          className={`cs-menu-item ${
            props.active === "dashboard" ? "selected" : ""
          }`}
          onClick={() => (window.location.href = "/dashboard")}
        >
          <FontAwesomeIcon icon={faHouse} />
          <li>Dashboard</li>
        </a>
        {user.role === "manager" && (
          <React.Fragment>
            <a
              className={`cs-menu-item ${
                props.active === "bezetting" ? "selected" : ""
              }`}
              onClick={() => (window.location.href = "/bezetting")}
            >
              <FontAwesomeIcon icon={faBinoculars} />
              <li>Bezettings overzicht</li>
            </a>
            <a
              className={`cs-menu-item ${
                props.active === "Verlof" ? "selected" : ""
              }`}
              onClick={() => (window.location.href = "/Verlof")}
            >
              <FontAwesomeIcon icon={faChartPie} />
              <li>Verlof</li>
            </a>
          </React.Fragment>
        )}
        {/*<div className="" ref={dropdownRef}>
          <a className="cs-menu-item" onClick={handleDropdownToggle}>
            <FontAwesomeIcon icon={faPen} />
            <li>Temporary Function</li>
          </a>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <a
                className={`dropdown-item ${
                  userRole === "manager" ? "selected" : ""
                }`}
                onClick={() => handleFunctionChange("manager")}
              >
                Manager
              </a>
              <a
                className={`dropdown-item ${
                  userRole === "employee" ? "selected" : ""
                }`}
                onClick={() => handleFunctionChange("employee")}
              >
                Employee
              </a>
              <a
                className={`dropdown-item ${
                  userRole === "supervisor" ? "selected" : ""
                }`}
                onClick={() => handleFunctionChange("supervisor")}
              >
                Supervisor
              </a>
            </div>
          )}
        </div>*/}
      </ul>
    </div>
  );
}

export default Navbar;
