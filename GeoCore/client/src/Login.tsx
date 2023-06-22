import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();

        // Here you would typically send the username and password to your server
        // For example:
        // const response = await axios.post('/api/login', { username, password });
        // Then handle the response...

        console.log(`Logging in with username: ${username} and password: ${password}`);
    };

    return (
        <div className="login-form">
            <form onSubmit={handleLogin}>
                <div className="cs-input">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="cs-input">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="button" type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;