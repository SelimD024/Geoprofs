import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Components/navbar";
import "./App.css";

function Bezetting() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const customCheckboxes = document.querySelectorAll(".custom-checkbox");

    const toggleCheckbox = (event) => {
      event.target.classList.toggle("checked");
    };

    customCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("click", toggleCheckbox);
    });

    return () => {
      customCheckboxes.forEach((checkbox) => {
        checkbox.removeEventListener("click", toggleCheckbox);
      });
    };
  }, []);

  let activeDropdown = null;

  const toggleDropdown = (dropdownId) => {
    const dropdown = document.getElementById(dropdownId);

    if (activeDropdown && activeDropdown !== dropdown) {
      activeDropdown.classList.remove("show");
    }

    dropdown.classList.toggle("show");

    if (dropdown.classList.contains("show")) {
      activeDropdown = dropdown;
    } else {
      activeDropdown = null;
    }
  };

  return (
    <div className="body">
      <Navbar active="bezetting" />

      <div className="cs-body">
        <div className="cs-numbers">
          <div className="cs-number">
            <h1>40</h1>
            <p>Beschikbare uren</p>
          </div>
          <div className="cs-line"></div>
          <div className="cs-number">
            <h1>40</h1>
            <p>Beschikbare uren</p>
          </div>
          <div className="cs-line"></div>
          <div className="cs-number">
            <h1>40</h1>
            <p>Beschikbare uren</p>
          </div>
        </div>
        <div className="cs-search">
          <input type="text" className="cs-searchbar" />
          <a className="button">
            <img
              src="icon-user.svg"
              alt="My Happy SVG"
              width="15"
              height="15"
            />
            Toevoegen
          </a>
          <a className="button button-grey">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </a>
        </div>
        <div className="cs-filters">
          <div className="dropdown" onClick={() => toggleDropdown("dropdown1")}>
            <div className="cs-top">
              <p>Alles</p>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <ul id="dropdown1" className="dropdown-menu">
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          </div>
          <div className="dropdown" onClick={() => toggleDropdown("dropdown2")}>
            <div className="cs-top">
              <p>Alle afdelingen</p>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <ul id="dropdown2" className="dropdown-menu">
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          </div>
          <div className="dropdown" onClick={() => toggleDropdown("dropdown3")}>
            <div className="cs-top">
              <p>Datum</p>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <ul id="dropdown3" className="dropdown-menu">
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          </div>
        </div>

        <div className="cs-form">
          <table className="cs-table">
            <tbody>
              <tr className="cs-table-head">
                <th className="checkbox-cell">
                  <span className="custom-checkbox"></span>
                </th>
                <th>Gebruiker</th>
                <th>Aanwezig</th>
                <th>Telefoonnummer</th>
                <th>Positie</th>
                <th>Ingeplande uren</th>
                <th>Beschikbare uren</th>
              </tr>
              <tr>
                <td className="checkbox-cell">
                  <span className="custom-checkbox"></span>
                </td>
                <td>John Doe</td>
                <td>nee</td>
                <td>1234567890</td>
                <td>Manager</td>
                <td>40</td>
                <td>168</td>
              </tr>
              <tr>
                <td className="checkbox-cell">
                  <span className="custom-checkbox"></span>
                </td>
                <td>Jane Smith</td>
                <td>Ja</td>
                <td>9876543210</td>
                <td>Supervisor</td>
                <td>32</td>
                <td>168</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Bezetting;
