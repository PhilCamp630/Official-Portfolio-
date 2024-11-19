import React from 'react';
import "./header.css";

const Header = () => {
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className='nav__logo'>Campbell</a>
            <div className="nav_menu">
              <ul className="nav_list grid">
                  <li className="nav_item">
                    <a href="#home" className="nav_link">
                      <i className="uil uil-home nav_icon"></i> Home
                    </a>
                  </li>

                  <li className="nav_item">
                    <a href="#about" className="nav_link">
                      <i className="uil uil-user nav_icon"></i> About
                    </a>
                  </li>

                  <li className="nav_item">
                    <a href="#skills" className="nav_link">
                      <i className="uil uil-file-check-alt nav_icon"></i> Skills
                    </a>
                  </li>

                  <li className="nav_item">
                    <a href="portfolio" className="nav_link">
                      <i className="uil uil-scenery nav_icon"></i> Portfolio
                    </a>
                  </li>

                  <li className="nav_item">
                    <a href="#contact" className="nav_link">
                      <i className="uil uil-message nav_icon"></i> Contact
                    </a>
                  </li> 
              </ul>

              <i className="uil uil-times nav_close"></i>
            </div>

            <nav className="nav_toggle">
              <i className="uil uil-apps"></i>
            </nav>
        </nav>
    </header>
  )
}

export default Header