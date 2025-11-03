import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { links } from '../../data/navbarLinks';
import '../../styles/components.scss';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(links[0].id);
  const tickingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          tickingRef.current = false;
          
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
            setActiveSection((prev) => prev !== currentSection.id ? currentSection.id : prev);
          }
        });
        tickingRef.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = useCallback((event: React.MouseEvent<HTMLAnchorElement>, id: string, index: number) => {
    event.preventDefault();
    if (index === 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

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
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px'
          }}
        >
          {link.label}
        </motion.a>
      ))}
    </nav>
  );
};

export default Navbar;

