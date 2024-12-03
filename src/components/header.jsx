// src/components/Header.jsx
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const Header = ({ theme, toggleTheme }) => {
  const headerRef = useRef(null);
  const logoRef = useRef(null);

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' });
      gsap.fromTo(logoRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1.2, ease: 'power2.out' });
    });
    return () => ctx.revert();
  }, []);

  return (
    <header ref={headerRef} className="header">
      <Link to="/" ref={logoRef} className="logo">Comp UI</Link>
      
      <nav className="nav-links">
        {['Home', 'About', 'Components', 'Contact'].map((link, index) => (
          <Link key={index} to={`/${link.toLowerCase()}`}>
            {link}
          </Link>
        ))}
      </nav>
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </header>
  );
};

export default Header;
