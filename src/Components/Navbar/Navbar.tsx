import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { links } from '../Data/navbarLinks';
import './Navbar.scss';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">carsonSgit</div>
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`navbar-right ${menuOpen ? 'active' : ''}`}>
        {links.map((link, index) => (
          <a
            key={index}
            href={`#${link.id}`}
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
