import React, { useState } from "react";
import '../components/styles/Login.css'

export const Register = (props) =>{

    // state variables
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // localhost server variable for testing request
    const API = "http://localhost:3000";

    // submit_handler
    const handleSubmit = (e) =>{
        e.preventDefault();

        // POST: to create user request to the server
        fetch(`${API}/users`, {
            method: "POST",
            headers: {
              Accepts: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user: {
                email,
                password,
              },
            }),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));


          setEmail("");
          setPassword("");

    };
    // render jsx
    return(
        <div className="container">
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="Username">Full Name</label>
                {/* <input value={Username} onChange={(e)=>setUsername(e.target.value)} name="Username" id="Username" placeholder="Full Name" /> */}
                < label htmlFor="email">E-mail</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                < label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" id="password" name="password" />
                <button type="submit">Register</button>
            </form>
            <button className='link-btn' onClick={() => props.onFormSwitch('login')}>Already have an account? Log In Here</button>
        </div>
    )
}