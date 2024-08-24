import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { links } from '../Data/navbarLinks';
import './Navbar.scss';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 60; 
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
          <a
            href={`#hero`}
            onClick={event => handleLinkClick(event, 'hero')}
          >
            carsonSgit
          </a>
          </div>
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`navbar-right ${menuOpen ? 'active' : ''}`}>
        {links.map((link, index) => (
          <a
            key={index}
            href={`#${link.id}`}
            className="nav-link"
            onClick={event => handleLinkClick(event, link.id)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
