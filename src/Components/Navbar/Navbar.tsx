import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { links } from '../Data/navbarLinks';
import './Navbar.scss';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <div className="navbar-left" aria-label="Brand name">carsonSgit</div>
      <div 
        className="hamburger" 
        onClick={toggleMenu} 
        role="button" 
        tabIndex={0} 
        aria-expanded={menuOpen} 
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onKeyDown={(event) => event.key === 'Enter' && toggleMenu()}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`navbar-right ${menuOpen ? 'active' : ''}`} role="menu">
        {links.map((link, index) => (
          <a
            key={index}
            href={`#${link.id}`}
            className="nav-link"
            onClick={(event) => handleLinkClick(event, link.id)}
            role="menuitem"
            aria-label={`Navigate to ${link.label}`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
