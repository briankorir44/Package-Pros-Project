import React from 'react'
import '../components/styles/Navbar.css'

import Footer from '../pages/Footer'
export const Navbar = () => {
  return (
    <div className='sum'>
        <div className="logo">
            Package Pros Logistics Co.
        </div>
        {/* <nav className='item'>
            <ul className= 'ul'>
                <li>
                    <Link to ='/Admin'>Admin</Link>
                </li>
                <li>
                    <Link to ='/Login'>Login</Link>
                </li>
                <li>
                    <Link to ='/Register'>Register</Link>
                </li>
            </ul>
        </nav> */}
        <Footer/> 
    </div>
  )
             

}
