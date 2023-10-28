import './Navbar.css';
import React from 'react'

const Navbar = ({usersLength}) => {
  return (
    <div className='navbar'>
        <div className="navbar-container container">
            <h1 className='navbar-logo'>Cusers</h1>
            <h3 className='navbar-counter'>
                {usersLength > 0 ? `You have ${usersLength}` : `No users :(`}
            </h3>
        </div>
    </div>
  )
}

export default Navbar;