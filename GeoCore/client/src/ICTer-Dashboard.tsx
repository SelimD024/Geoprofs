import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Components/navbar";
import "./App.css";

function ICTDashboard() {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState([]);
    const [userid, setUser] = useState(null);

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
    const  CreateUser = event  => {
        // Create user
        event.preventDefault();
        axios.post("http://localhost:5029/api/users", {
            UserID: userid,
            Name: name,
            Role: role,
            Email: email,
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error("Error occured", error);
            });
    }

   

    return (
        <div className="body">
            <Navbar active="Verlof" />

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
                                <td> <button className="button-grey">Delete</button> </td>
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
                    <button className="custom-green-button" >
                        Maak Backup
                    </button>
                </div>
                

            </div>
        </div>
    );
}

export default ICTDashboard;
