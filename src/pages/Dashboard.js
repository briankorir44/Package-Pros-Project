import { Route, Routes,  } from "react-router-dom";
import React from 'react'
import '../components/styles/Main.css'
import Sidebar from './Sidebar';
import About from './About.js';
import Orders from './Orders.js';

function Dashboard() {
  return (
    <div>
      <Sidebar>
        <Routes>
          
          <Route path="/About" element={<About />} />
          <Route path="/Orders" element={<Orders />} />
          
        </Routes>
      </Sidebar>
      <h1>Dashboard Page</h1>
    </div>
  )
}

export default Dashboard