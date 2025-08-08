import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import logo1 from '../assets/INAI.png';

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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null);
  };

  // Dropdown data
  const serviceLinks = [
    { to: '/services/web-scraping', label: 'Web Scrapping' },
    { to: '/services/data-manipulation', label: 'Data Manipulation' },
    { to: '/services/model-training', label: 'Model Training' },
  ];
  const portfolioLinks = [
    { to: '/portfoilo/inai-life', label: 'INAI_VERSE' },
    { to: '/portfoilo/influwket', label: 'INFLUWKET' },
    { to: '/portfoilo/veedket', label: 'VEEDKET' },
    { to: '/portfoilo/offiket', label: 'OFFIKET' },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
          <div className="logo">
            <Link to="/">
              <img src={logo1} alt="INAI WORLDS" className="header-logo-img" />
            </Link>
          </div>
          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              <li><NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={toggleMenu}>Home</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={toggleMenu}>About</NavLink></li>
              {/* <Dropdown label="Service" to="/services" links={serviceLinks} isOpen={openDropdown === 'service'} onToggle={setOpenDropdown} dropdownKey="service" />
               */}


              <Dropdown
                label="Service"
                to="/services"
                links={serviceLinks}
                isOpen={openDropdown === 'service'}
                onToggle={setOpenDropdown}
                dropdownKey="service"
                closeMenu={() => setIsMenuOpen(false)} // Pass this
              />

              <Dropdown label="Portfolios" to="/portfolio" links={portfolioLinks} isOpen={openDropdown === 'portfolio'} onToggle={setOpenDropdown} dropdownKey="portfolio" />
              <li><NavLink to="/blog" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={toggleMenu}>Blog</NavLink></li>
              <li><NavLink to="/team" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={toggleMenu}>Team</NavLink></li>
              <li><NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={toggleMenu}>Contact</NavLink></li>
            </ul>
          </nav>
          <div className="header-cta">
            <Link to="https://wa.link/d1i9gp" className="btn-get-in-touch">Lets Connect</Link>
          </div>
          <div className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 