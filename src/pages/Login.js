import React, { useState } from 'react'
import '../components/styles/Login.css'

export const Login = (props) => {

    //state variables
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

     // backend API variable
     const API = "https://package-pros.onrender.com";

    // submit_handler
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

        //POST: to login user request to the server
        fetch(`${API}/login`, {
            method: "POST",
            headers: {
              Accepts: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user: {
                email: email,
                password: password,
              },
            }),
              })
            .then((res) => res.json())
            .then((data) => localStorage.setItem("token", data.jwt));

              setEmail("");
              setPassword("");
    };

    // jsx
    return (
        <div className="container">
            <form className="login-form" onSubmit={handleSubmit} >
                < label htmlFor="email">E-mail</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                < label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*******" id="password" name="password" />
                <button type="submit" onSubmit={handleSubmit}>Log In</button>
            </form>
            <button className='link-btn' onClick={() => props.onFormSwitch('register')}>Don't have an accout? Register Here</button>
        </div>
    )
}
