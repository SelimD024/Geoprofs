import React, { useState } from 'react';
import axios from 'axios';
import { useHistory  } from 'react-router-dom';

function Login() {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const historyy = useHistory();
    const handleLogin = (event) => {
        event.preventDefault();
        localStorage.setItem("user", JSON.stringify({ name, role, }));

        // Redirect naar dashboard
        window.location.href = "/dashboard";
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            /> // | ROLLEN SELECTIE
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Select role</option>
                <option value="manager">Manager</option>
                <option value="employee">Employee</option>
            </select>
            <button type="submit">Log in</button>
        </form>
    );
}

export default Login;