import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Components/navbar";
import "./App.css";

function ICTDashboard() {
    const [data, setData] = useState([]);
    const [name, setName] = useState(""); // Add name state
    const [role, setRole] = useState(""); // Add role state
    const [email, setEmail] = useState(""); // Add email state

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

    const deleteUser = (userId) => {
        // Delete req naar api
        axios
            .delete(`http://localhost:5029/api/users/${userId}`)
            .then((response) => {
                console.log(`User with ID ${userId} has been deleted.`);
            })
            .catch((error) => {
                console.error(`Error deleting user with ID ${userId}:`, error);
            });
    };

    const createUser = (event) => {
        event.preventDefault();
        // post req createuser
        axios
            .post("http://localhost:5029/api/users", {
                Name: name,
                Role: role,
                Email: email,
            })
            .then((response) => {
                console.log("User created:", response.data);
            })
            .catch((error) => {
                console.error("Error creating user:", error);
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
                                    <button
                                        className="button-grey"
                                        onClick={() => deleteUser(user.userId)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <form onSubmit={createUser}>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Role:</label>
                        <input
                            type="text"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <button type="submit">Create User</button>
                    </div>
                </form>


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
