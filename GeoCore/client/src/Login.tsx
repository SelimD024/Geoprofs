import
    React, { useState } from 'react';
import axios from 'axios';
import { useHistory  } from 'react-router-dom';

function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    // const historyy = useHistory();
    const AuthHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5029/api/auth', {
            User: {
                Name: {name},
                Password: {password}
            }
        })
            .then (response => {console.log(response)});
    };

    return (
        <form onSubmit={AuthHandler}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}/>

            <input
            type="password"
            placeholder="Wachtwoord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Log in</button>
        </form>
    );
}

export default Login;
