import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/INAICAREER.png';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Careers', path: '/careerspath' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target) && 
          !event.target.closest('.hamburger')) {
        closeMenu();
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [location]);

  // Disable scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo" onClick={closeMenu}>
            <img
              src={logo}
              alt="Company Logo"
              className="logo-img"
              width="120"
              height="auto"
            />
          </Link>
        </div>

        <div 
          ref={menuRef}
          className={`nav-container ${isMenuOpen ? 'active' : ''}`}
          aria-hidden={!isMenuOpen}
        >
          <nav className="nav">
            <ul className="nav-list">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path ||
                  (item.path !== '/' && location.pathname.startsWith(item.path));
                return (
                  <li key={item.name} className="nav-item">
                    <Link
                      to={item.path}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                      onClick={closeMenu}
                      tabIndex={isMenuOpen ? 0 : -1}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="cta-container">
            <Link 
              to="/login" 
              className="cta-button" 
              onClick={closeMenu}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              Login
            </Link>
          </div>
        </div>

        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;