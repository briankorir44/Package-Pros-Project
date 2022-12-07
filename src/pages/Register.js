import React, { useState } from "react";
import '../components/styles/Login.css'


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [number, setNumber] = useState('');
    const [name,setName] = useState('');
  
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
    <div className="auth-form container">
        <h2>Sign Up</h2>
    <form className= "register-form" onSubmit={handleSubmit}>
        <label htmlFor= "name">Full Name</label>
        <input value={name} name="name" id = "name" placeholder="Full Name"/>
     < label htmlFor= "email">E-mail</label>
     <input value={email} onChange ={(e)=> setEmail(e.target.value)} type= "email" placeholder= "youremail@gmail.com" id = "email" name = "email"/>
     < label htmlFor= "password">Password</label>
     <input value={pass} onChange ={(e)=> setPass(e.target.value)} type= "password" placeholder= "*******" id = "password" name = "password"/>
     < label htmlFor= "Phone Number">Phone Number</label>
     <input value={number} onChange ={(e)=> setNumber(e.target.value)} type= "number" placeholder= "phone Number" id = "number" name = "number"/>
    <button type= "submit">Register</button>
    </form>
    <button className='link-btn'onClick={()=>props.onFormSwitch('login')}>Already have an accout? Log In Here</button>
    </div>
  )
}
