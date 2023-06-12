import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Components/navbar";
import "./App.css";

function Verlof() {
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
      <Navbar active="Verlof" />

      <div className="cs-body">
        <div className="cs-header">
          <h1>Verlof aanvragen</h1>
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
        </div>

        <div className="cs-form verlof">
          <table className="cs-table">
            <tbody>
              <tr className="cs-table-head">
                <th>Gebruiker</th>
                <th>Datum verlof</th>
                <th>Beschrijving verlof</th>
                <th>Positie</th>
                <th>Afwijzen</th>
                <th>Toewijzen</th>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>nee</td>
                <td>1234567890</td>
                <td>Manager</td>
                <td className="checkbox-cell ">
                  <span className="custom-checkbox decline"></span>
                </td>
                <td className="checkbox-cell ">
                  <span className="custom-checkbox accept"></span>
                </td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>26/10/1992 - 28/10/1992</td>
                <td>9876543210</td>
                <td>Supervisor</td>
                <td className="checkbox-cell ">
                  <span className="custom-checkbox decline"></span>
                </td>
                <td className="checkbox-cell ">
                  <span className="custom-checkbox accept"></span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Verlof;
