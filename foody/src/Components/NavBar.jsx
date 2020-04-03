import React from 'react';

import '../App.css';


const NavBar = () => {
    return (
        <nav>
            {/* <div> */}
            <span>Foody.</span>
            {/* </div> */}

            <div>

           <button> Buy Now </button>

            <a className="navbar-item" href="#contact">
                Contact
            </a>

            <a className="navbar-item" href="#menu">
                Menu
            </a>

            <a className="navbar-item" href="#services">
                Services
            </a>

            <a className="navbar-item" href="#about">
                About
            </a>

            <a className="navbar-item" href="#home">
                Home
            </a>
            </div>

        </nav>
    );
}

export default NavBar;
