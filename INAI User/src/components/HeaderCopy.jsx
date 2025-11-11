import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import logo1 from '../assets/INAI.png';
import { useEffect } from 'react';

const DropdownArrow = () => (
  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" style={{ marginLeft: 6, verticalAlign: 'middle' }}><path d="M6 8l4 4 4-4" stroke="#a084e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

const Dropdown = ({ label, to, links, isOpen, onToggle, dropdownKey, closeMenu }) => (
  <li
    className={`dropdown${isOpen ? ' open' : ''}`}
    onMouseEnter={() => !window.matchMedia('(max-width: 900px)').matches && onToggle(dropdownKey)}
    onMouseLeave={() => !window.matchMedia('(max-width: 900px)').matches && onToggle(null)}
    onClick={() =>
      window.matchMedia('(max-width: 900px)').matches &&
      onToggle(isOpen ? null : dropdownKey)
    }
  >
    <span
      className="dropdown-parent" services
      role="button"
      aria-haspopup="true"
      aria-expanded={isOpen}
      tabIndex="0"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onToggle(isOpen ? null : dropdownKey);
      }}
    >
      {to ? (
        <NavLink to={to} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          {label}
        </NavLink>
      ) : (
        <span className="nav-link">{label}</span>
      )}
      <DropdownArrow />
    </span>
    <ul className="dropdown-menu">
      {links.map((link) => (
        <li key={link.to}>
          <NavLink
            to={link.to}
            className="dropdown-link"
            onClick={() => {
              onToggle(null);
              closeMenu(); // Close burger menu
            }}
          >
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </li>
);

const HeaderCopy = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Dropdown data
  const serviceLinks = [
    { to: '/careers/ai-ml-explore', label: 'AI ML' },
    { to: '/careers/automation-explore', label: 'Automation' },
    { to: '/careers/robotics-explore', label: 'Robotics' },
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src={logo1} alt="INAI WORLDS" className="header-logo-img" />
          </Link>
        </div>

        <button 
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li>
              <NavLink 
                to="/careers" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Careers
              </NavLink>
            </li>

            <Dropdown
              label="Our Programs"
              to="/programs"
              links={serviceLinks}
              isOpen={openDropdown === 'service'}
              onToggle={setOpenDropdown}
              dropdownKey="service"
              closeMenu={closeMenu}
            />

            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="header-cta">
            <a 
              href="https://wa.link/d1i9gp" 
              className="btn-get-in-touch"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Let's Connect
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderCopy; 