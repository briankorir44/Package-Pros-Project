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
        // POST to create request to the server
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

          setUsername("");
          setEmail("");
          setPassword("");
    }



}


// export const Register = (props) => {
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');
//     const [name, setName] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email);
//     }
//     return (
//         <div className="container">
//             <form className="register-form" onSubmit={handleSubmit}>
//                 <label htmlFor="name">Full Name</label>
//                 <input value={name} name="name" id="name" placeholder="Full Name" />
//                 < label htmlFor="email">E-mail</label>
//                 <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
//                 < label htmlFor="password">Password</label>
//                 <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password" />
//                 <button type="submit">Register</button>
//             </form>
//             <button className='link-btn' onClick={() => props.onFormSwitch('login')}>Already have an accout? Log In Here</button>
//         </div>
//     )
// }

