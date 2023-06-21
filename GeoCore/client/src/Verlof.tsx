import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Components/navbar";
import "./App.css";
import axios from "axios";

function Verlof() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  
  
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


  // Get verlof
  
  useEffect(() => {
    axios.get("http://localhost:5029/api/verlof")
        .then(response => {
          setData(response.data); // Set the data in state
        })
        .catch(error => {
          console.error("Error occured", error);
        });
  }, []); 


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
            {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.startDate} -  <strong>{item.endDate}</strong> </td>
                  <td>{item.reden}</td>
                  {/*<td>{item.Positie}</td>*/}
                  <td className="checkbox-cell ">
                    <span className="custom-checkbox decline"></span>
                  </td>
                  <td className="checkbox-cell ">
                    <span className="custom-checkbox accept"></span>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Verlof;
