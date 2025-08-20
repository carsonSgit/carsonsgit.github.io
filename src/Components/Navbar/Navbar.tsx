import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { links } from '../Data/navbarLinks';
import './Navbar.scss';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(links[0].id);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveSection(links[0].id);
        return;
      }

      const currentSection = links.find((link) => {
        const element = document.getElementById(link.id);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string, index: number) => {
    event.preventDefault();
    if (index === 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="navbar">
      {links.map((link, index) => (
        <motion.a
          key={index}
          href={`#${link.id}`}
          className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
          onClick={(event) => handleLinkClick(event, link.id, index)}
          initial={{ x: 10, opacity: 1 }}
          animate={{ x: activeSection === link.id ? 15 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          style={{ display: 'flex', alignItems: 'center', gap: '8px' , color: activeSection === link.id ? '#23aa7f' : '#333' }}
        >
          {link.label}
        </motion.a>
      ))}
    </nav>
  );
};

export default Navbar;
