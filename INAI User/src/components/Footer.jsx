import { Link } from 'react-router-dom';
import './Footer.css';
import INAILogo from '../assets/INAI.png';
import { IoLogoInstagram } from 'react-icons/io5';
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="footer-container-main">

        <div className="footer-content-main">
          <div className="footer-grid">
            {/* Column 1: INAI WORLS Info */}
            <div className="footer-column">
              <img src={INAILogo} alt="INAI WORLDS Logo" className="footer-logo" />
              {/* <h3 className="footer-heading">INAI WORLDS</h3> */}
              <p className="footer-text">
                <strong>Address : </strong>
                Surat, Gujarat, India
              </p>

              <p className="footer-text">
                <strong>Email :</strong> career@inaiworlds.com
              </p>

            </div>

            {/* Column 2: Useful Links */}
            {/* <div className="footer-column">
              <h3 className="footer-heading">Useful Link</h3>
              <ul className="footer-links-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About US</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div> */}

            {/* Column 3: Our Services */}
            <div className="footer-column">
              <h3 className="footer-heading">Our Programs</h3>
              <ul className="footer-links-list">
                <li><Link to="/careers/ai-ml-explore">AI ML</Link></li>
                <li><Link to="/careers/automation-explore">Automation</Link></li>
                <li><Link to="/careers/robotics-explore">Robotics</Link></li>
              </ul>
            </div>

            {/* Column 4: Follow Us */}
            <div className="footer-column">
              <h3 className="footer-heading">Follow Us</h3>
              <p className="footer-text">
                We're glad you're here! If you'd like to stay connected and get the latest updates, feel free to follow us on these platforms.

              </p>
              <div className="footer-social-buttons">
                <a href="https://www.instagram.com/inai_worlds/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-btn">
                  <IoLogoInstagram style={{fontSize:"30px"}} />
                </a>
                <a href="https://www.linkedin.com/company/inai-worlds-pvt-ltd/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-btn">
                  <CiLinkedin style={{fontSize:"30px"}} />
                </a>
                <a href="https://www.youtube.com/@INAIWorldsPVTLTD" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer-social-btn">
                 <AiOutlineYoutube style={{fontSize:"30px"}} />
                </a>
              </div>
            </div>
          </div>
        </div>

      </footer>
      <div className="footer-bottom">
        <div className="footer-copyright">
          <p> All Rights Reserved © {new Date().getFullYear()} by INAI Worlds Pvt. Ltd.</p>
        </div>
        <div className="footer-legal-links">
          <span className="disabled-link">Privacy Policy</span>
          <span className="divider">|</span>
          <span className="disabled-link">Terms & Conditions</span>
        </div>
      </div>
    </>
  );
};

export default Footer; 