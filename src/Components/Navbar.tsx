import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/projects', label: 'PROJECTS' },
    { path: '/contact', label: 'RESUME' }
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        carsonSgit
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`navbar-right ${menuOpen ? 'active' : ''}`}>
        {links.map((link) => (
          <NavLink 
            key={link.path} 
            to={link.path} 
            className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
