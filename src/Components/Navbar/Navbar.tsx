import React from 'react';
import { links } from '../Data/navbarLinks';
import './Navbar.scss';

const Navbar: React.FC = () => {
  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 60;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="navbar">
      {links.map((link, index) => (
        <a
          key={index}
          href={`#${link.id}`}
          className="nav-link"
          onClick={(event) => handleLinkClick(event, link.id)}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
