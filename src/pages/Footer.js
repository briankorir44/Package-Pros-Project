import React from 'react'
import '../components/styles/Footer.css'

export default function Footer() {
  return (
    <div>
      <div className='footer'>
        <div>
          <h1 className='h'>Contact</h1>
          <p>Address:343 Kanairo</p>
          <p>Phone: +2540000456</p>
          <p>Hours:8am-10pm</p>
          <p>@All Rights Reserved</p>
        </div>
        <div>
          <h1 className='i'>About</h1>
          <p>About Us</p>
          <p>Delivery Information</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
          <p>Contact Us</p>
        </div>
        <div>
          <h1>My Account</h1>
          <p>Sign up</p>
          <p>Log In</p>
          <p>Administrator</p>
          <p>Help?</p>
        </div>
        <div>
          <h1>Support</h1>
          <p>FAQ</p>
          <p>Help Desk</p>
          <p>Forums</p>
        </div>
      </div>
      {/* <p className='copy'>@All Rights Reserved, Terms and Condition Apply.</p> */}
    </div>

  )
}
