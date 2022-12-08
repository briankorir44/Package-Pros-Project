import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Footer from './Footer'
import {BrowserRouter as Router} from 'react-router-dom'
// import { Login } from './components/Login';

// import {Register} from './components/Register';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
      <App/>
      {/* <Footer/> */}
  </Router>
);




