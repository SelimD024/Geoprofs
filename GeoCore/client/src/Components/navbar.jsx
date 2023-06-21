import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/react.svg";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faBinoculars } from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  const [selectedFunction, setSelectedFunction] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleFunctionChange = (functionName) => {
    setSelectedFunction(functionName);
    setIsDropdownOpen(false);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutsideDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideDropdown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideDropdown);
    };
  }, []);

  return (
    <div className="cs-navbar">
      <div className="logo">
        <img src={Logo} alt="React Logo" />
        <h2>GeoProfs</h2>
      </div>
      <ul className="cs-menu">
        <a
          className={`cs-menu-item ${props.active === "dashboard" ? "selected" : ""}`}
          onClick={() => (window.location.href = "/")}
        >
          <FontAwesomeIcon icon={faHouse} />
          <li>Dashboard</li>
        </a>
        <a
          className={`cs-menu-item ${props.active === "bezetting" ? "selected" : ""}`}
          onClick={() => (window.location.href = "/bezetting")}
        >
          <FontAwesomeIcon icon={faBinoculars} />
          <li>Bezettings overzicht</li>
        </a>
        <a
          className={`cs-menu-item ${props.active === "Verlof" ? "selected" : ""}`}
          onClick={() => (window.location.href = "/Verlof")}
        >
          <FontAwesomeIcon icon={faChartPie} />
          <li>Verlof</li>
        </a>
        <div className="" ref={dropdownRef}>
          <a className="cs-menu-item" onClick={handleDropdownToggle}>
            <FontAwesomeIcon icon={faPen} />
            <li>Temporary Function</li>
          </a>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <a
                className={`dropdown-item ${selectedFunction === "manager" ? "selected" : ""}`}
                onClick={() => handleFunctionChange("manager")}
              >
                Manager
              </a>
              <a
                className={`dropdown-item ${selectedFunction === "employee" ? "selected" : ""}`}
                onClick={() => handleFunctionChange("employee")}
              >
                Employee
              </a>
              <a
                className={`dropdown-item ${selectedFunction === "supervisor" ? "selected" : ""}`}
                onClick={() => handleFunctionChange("supervisor")}
              >
                Supervisor
              </a>
            </div>
          )}
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
