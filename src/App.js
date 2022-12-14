import { Route, Routes,  } from "react-router-dom";
import React, { useState } from "react";
import { Navbar } from './pages/Navbar';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
// import '.com/styles/Navbar.css'
import './components/styles/Navbar.css'
import Dashboard from "./pages/Dashboard";

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
          <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
      
    </div>
  );
}

export default App;
