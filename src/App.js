import { Route, Routes,  } from "react-router-dom";
import React, { useState } from "react";
import { Navbar } from './pages/Navbar';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
// import '.com/styles/Navbar.css'
import './components/styles/Navbar.css'
import Sidebar from './pages/Sidebar';
import Dashboard from './pages/Dashboard.js';
import About from './pages/About.js';
import Orders from './pages/Orders.js';

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
       currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
<Routes>
      <Route
          exact path="/" element={<Navbar/>}></Route>
       
      </Routes>
      <Sidebar>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/About" element={<About />} />
          <Route path="/Orders" element={<Orders />} />
          
        </Routes>
      </Sidebar>
    </div>
  );
}

export default App;
