import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./Components/navbar";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { faBarsProgress } from "@fortawesome/free-solid-svg-icons";
import profilePicture from "../src/assets/person.jpeg"
import {PostVerlof} from "./services/api.ts";
import axios from "axios";
function Dashboard() {
  const [count, setCount] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState('');
  const [reden, setReden] = useState("");
  
  useEffect(() => {
    const buttonsContainer = document.querySelector(".cs-buttons");
    const popUp = document.querySelector(".cs-pop-up");
    const popUpContents = Array.from(
      popUp.querySelectorAll(".cs-pop-up .inner > *")
    );

    const handleButtonClick = (event) => {
      const button = event.target.closest(".button");
      if (button) {
        const popupName = button.classList[1];
        const popupContent = popUp.querySelector(`.${popupName}`);

        if (popupContent) {
          popUp.classList.remove("cs-hidden");
          popupContent.classList.remove("cs-hidden");
        }
      }
    };

    const handlePopupClick = (event) => {
      if (event.target.classList.contains("cs-cancel")) {
        popUp.classList.add("cs-hidden");
        popUpContents.forEach((content) => {
          content.classList.add("cs-hidden");
        });
      }
    };

    buttonsContainer.addEventListener("click", handleButtonClick);
    popUp.addEventListener("click", handlePopupClick);

    return () => {
      buttonsContainer.removeEventListener("click", handleButtonClick);
      popUp.removeEventListener("click", handlePopupClick);
    };
  }, []);

  // POST VOOR VERLOF
   const  PostVerlof = event  => {
    event.preventDefault();
    axios.post("http://localhost:5029/api/verlof", {
      StartDate: startDate,
      EndDate: endDate,
      Reden: reden,
    })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error("Error occured", error);
        });
  }
  
  
  return (
    <>
      <div className="body">

       <Navbar active="dashboard" />

        <div className="cs-body">
          <div className="cs-header">
            <div className="profile-picture">
              <img src={profilePicture} alt="" width="100" height="50"/>
              <div className="fa fa-camera fa-3x"></div>
            </div>
            <div className="username">
              <h1>Stijn</h1>
              <div className="fa fa-pen"></div>
            </div>
          </div>
          <div className="cs-buttons">
            <a className="button cs-verlofaanvraag">Verlof aanvragen</a>
            <a className="button cs-verlofplanning">Verlofplanning</a>
          </div>
          <div className="cs-cards">
            <div className="cs-card">
              <div className="cs-card-header">
                <p>Status verlof aanvraag</p>
                <FontAwesomeIcon icon={faBarsProgress} />
              </div>
              <h1>In behandeling</h1>
              <p>Dec 21, 2022 t/m Januari 10, 2023</p>
              <p>Vakantie</p>
            </div>
            <div className="cs-card">
              <div className="cs-card-header">
                <p>Status verlof aanvraag</p>
                <FontAwesomeIcon icon={faChartPie} />
              </div>
              <h1>In behandeling</h1>
              <p>Dec 21, 2022 t/m Januari 10, 2023</p>
              <p>Vakantie</p>
            </div>
          </div>
          <div className="cs-pop-up cs-hidden">
            <div className="inner">
              <div className="cs-verlofaanvraag cs-hidden">
                <h1 className="cs-head">Verlof aanvragen</h1>
                <div className="cs-numbers">
                  <div className="cs-number">
                    <h1>40</h1>
                    <p>uur opgenomen</p>
                  </div>
                  <div className="cs-line"></div>
                  <div className="cs-number">
                    <h1>-40</h1>
                    <p>uur baschikbaar</p>
                  </div>
                </div>
                <div className="cs-input-forms">
                  <form onSubmit={PostVerlof}>
                    <div className="cs-input">
                      <p>Startdatum</p>
                      <input
                        type="date"
                        className="cs-searchbar"
                        placeholder="Startdatum"
                        value={startDate}
                        onChange={e => setStartDate(e.target.value)}
                      />
                    </div>
                    <div className="cs-input">
                      <p>Einddatum</p>
                      <input
                        type="date"
                        className="cs-searchbar"
                        placeholder="Startdatum"
                        value={endDate}
                        onChange={e => setEndDate(e.target.value)}
                      />
                    </div>
                    <div className="cs-input">
                      <p>Beschrijving</p>
                      <input
                        type="text"
                        className="cs-searchbar"
                        placeholder="Beschrijving aanvraag"
                        value={reden}
                        onChange={e => setReden(e.target.value)}
                      />
                    </div>
                    <div className="cs-input-buttons">
                      <a className="button button-grey cs-cancel">Annuleren</a>
                      <button type="submit" className="button" >Versturen</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="cs-verlofopgeven cs-hidden">
                <h1 className="cs-head">Verlof opgeven</h1>

                <div className="cs-input-forms">
                  <form action="POST">
                    <div className="cs-input">
                      <p>Startdatum</p>
                      <input
                        type="date"
                        className="cs-searchbar"
                        placeholder="Startdatum"
                      />
                    </div>
                    <div className="cs-input">
                      <p>Einddatum</p>
                      <input
                        type="date"
                        className="cs-searchbar"
                        placeholder="Startdatum"
                      />
                    </div>
                    <div className="cs-input">
                      <p>Beschrijving</p>
                      <input
                        type="text"
                        className="cs-searchbar"
                        placeholder="Beschrijving aanvraag"
                      />
                    </div>
                    <div className="cs-input-buttons">
                      <a className="button button-grey cs-cancel">Annuleren</a>
                      <a className="button">Versturen</a>
                    </div>
                  </form>
                </div>
              </div>
              <div className="cs-verlofplanning cs-hidden">
                <h1 className="cs-head">Verlofplanning</h1>

                <div className="cs-input-forms">
                  <div className="cs-verlofplanningbox">
                    <p>Beschrijving verlof</p>
                    <p>Sun 16 Jul - Mon 17 Jul 2023</p>
                    <div className="cs-label cs-approved">Approved</div>
                    <div className="cs-input-buttons">
                      <a className="button button-grey cs-cancel">Annuleren</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
