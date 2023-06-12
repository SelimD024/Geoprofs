import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/react.svg";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faBinoculars } from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
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
          onClick={() => (window.location.href = "/Dashboard")}
        >
          <FontAwesomeIcon icon={faHouse} />
          <li>Dashboard</li>
        </a>
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
        <a
          className={`cs-menu-item ${
            props.active === "meldingen" ? "selected" : ""
          }`}
        >
          <FontAwesomeIcon icon={faChartPie} />
          <li>Meldingen</li>
        </a>
      </ul>
    </div>
  );
}

export default Navbar;
