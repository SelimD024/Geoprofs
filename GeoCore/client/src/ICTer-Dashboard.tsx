import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Components/navbar";
import "./App.css";

function ICTDashboard() {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [userId, setUserId] = useState(null); // Correcte naam voor userId

    useEffect(() => {
        // Fetch user data
        axios
            .get("http://localhost:5029/api/users")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error occurred", error);
            });
    }, []);

    

    const DeleteUser = (userId) => {
        // Maak een HTTP DELETE-verzoek om de gebruiker te verwijderen
        axios
            .delete(`http://localhost:5029/api/users/${userId}`)
            .then((response) => {
                console.log(`Gebruiker met ID ${userId} is verwijderd.`);
                // Na het verwijderen van de gebruiker, kun je de gebruikersgegevens opnieuw ophalen om de bijgewerkte lijst weer te geven.
                axios.get("http://localhost:5029/api/users")
                    .then((response) => {
                        setData(response.data);
                    })
                    .catch((error) => {
                        console.error("Error occurred", error);
                    });
            })
            .catch((error) => {
                console.error(`Fout bij het verwijderen van gebruiker met ID ${userId}`, error);
            });
    };

    return (
        <div className="body">
            <Navbar active="ICT Dashboard" />

            <div className="cs-body">
                <div className="cs-header">
                    <h1 className="fa-2x">Gebruikers</h1>
                </div>

                <div className="cs-form verlof">
                    <table className="cs-table">
                        <tbody>
                        <tr className="cs-table-head">
                            <th>Gebruiker</th>
                            <th>Rol</th>
                            <th>Email</th>
                            <th>Verwijder Gebruiker</th>
                        </tr>

                        {data.map((user, index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.role}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className="button-grey" onClick={() => DeleteUser(user.UserId)}>Verwijder</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <div className="custombutton">
                    <button className="custom-green-button" >
                        Maak Gebruiker
                    </button>
                </div>
                <div className="cs-header">
                    <h1 className="fa-2x">Backup</h1>
                </div>
                <div className="custombutton">
                    <button className="custom-green-button">
                        Maak Backup
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ICTDashboard;
