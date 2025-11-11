import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import heroVideo from '../assets/hero-video.mp4'; // You'll need to add a hero video
import profileImage from '../assets/profile.webp'; // Add your profile image
import '../styles/Home.css';

const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="video-container">
          <video autoPlay loop muted playsInline>
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay"></div>
        </div>
        
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm <span className="highlight">Your Name</span>
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I build digital experiences that matter
          </motion.p>
          <motion.div 
            className="cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#work" className="btn primary">View My Work</a>
            <a href="#contact" className="btn secondary">Get In Touch</a>
          </motion.div>
        </div>
        
        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="mouse"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <img src={profileImage} alt="Profile" />
            </div>
            <div className="about-text">
              <h2>About Me</h2>
              <p>
                I'm a passionate developer/designer with a keen eye for detail and a love for creating beautiful,
                functional digital experiences. With expertise in modern web technologies, I bring ideas to life
                through clean, efficient code and thoughtful design.
              </p>
              <div className="skills">
                <span>React</span>
                <span>Node.js</span>
                <span>UI/UX Design</span>
                <span>JavaScript</span>
                <span>CSS3</span>
                <span>HTML5</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="work-section">
        <div className="container">
          <h2>Featured Work</h2>
          <div className="work-grid">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="work-item">
                <div className="work-image">
                  <div className="overlay">
                    <h3>Project {item}</h3>
                    <p>Category</p>
                    <a href="#" className="btn">View Project</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Get In Touch</h2>
          <p>Have a project in mind or want to collaborate? I'd love to hear from you!</p>
          <div className="contact-methods">
            <a href="mailto:your.email@example.com" className="contact-method">
              <FaEnvelope />
              <span>your.email@example.com</span>
            </a>
            <div className="social-links">
              <a href="#" aria-label="GitHub"><FaGithub /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
