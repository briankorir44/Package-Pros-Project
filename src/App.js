import { Route, Routes,  } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import { Navbar } from './pages/Navbar';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
// import '.com/styles/Navbar.css'
import './components/styles/Navbar.css'

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
        {/* <Route exact path="/Admin" element={<Admin />}></Route> */}
          {/* { <Route exact path="/Login" element={<Login />}></Route> }
        <Route exact path="/Register" element={<Register />}></Route> */}
        {/* <Route exact path="/Footer" element={<Footer />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
