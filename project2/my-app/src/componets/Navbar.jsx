import React, { useState } from 'react';
import '../style.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='main-container'>
      <div className='container'>
        <div className='logo'>
          <h1>PAYAL PATEL</h1>
        </div>
        <div className={`nav-container ${isMenuOpen ? 'open' : ''}`}>
          <nav>
            <ul className='nav-list'>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Me</a></li>
              <li><a href="#">Skills</a></li>
              <li><a href="#">Personal Profile</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
          <div className='menu-icon' onClick={toggleMenu}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
