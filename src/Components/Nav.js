import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = (props) => {
  

  return (
    <nav className="navbar">
      <div className="nav-left">
        <ul className="nav-links">
          <li><Link to="/home">Task List</Link></li>
        </ul>
      </div>
      <div className="nav-right">
        <input
          type="text"
          placeholder="Search.."
       
        />
      </div>
    </nav>
  );
};

export default Nav;
