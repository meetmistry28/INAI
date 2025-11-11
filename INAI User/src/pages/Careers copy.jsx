import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Careers.css';
import womanVideo from '../assets/woman1.mp4';
import teamImage from '../assets/bechange.webp';
import teamWorkingImage from '../assets/team-working.webp';
import careerGrowthImage from '../assets/business.webp';
import cultureBgImage from '../assets/carrierIMAG2.webp';
import personalityDevImage from '../assets/personality.webp';
import { VscGlobe, VscLightbulbSparkle, VscPaintcan } from "react-icons/vsc";
import { BiSolidLeaf } from "react-icons/bi";
import { PiHandshakeThin } from "react-icons/pi";
import { GiLifeInTheBalance, GiPartyPopper } from "react-icons/gi";
import { IoEarthSharp } from "react-icons/io5";
import { FaPeopleCarryBox, FaPeopleRobbery } from "react-icons/fa6";
import { GiStarsStack } from "react-icons/gi";
import { GiButterflyFlower } from "react-icons/gi";
import { LuBrainCircuit } from "react-icons/lu";
import { LiaChalkboardTeacherSolid, LiaPersonBoothSolid, LiaRobotSolid } from "react-icons/lia";
import { LuLightbulb } from "react-icons/lu";
import { FaHandshake, FaRocket } from "react-icons/fa";

const Careers = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Only scroll to top if we're coming from a navigation
    if (location.state?.fromNavigation) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Clear the state to prevent scrolling on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const handleNavigation = (path) => {
    navigate(path, { state: { fromNavigation: true } });
  };

  const handleApplyNow = () => {
    const jobSection = document.getElementById('job-listings');
    if (jobSection) {
      jobSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategoryClick = (categoryId) => {
    navigate(`/careers/${categoryId}`);
  };

  return (
    <>
      <section >

        <div className="careers-container" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${careerGrowthImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative'
        }}>
          <div className="careers-content" style={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '2rem'
          }}>
            <div className="careers-left">
              <div className="careers-tag">INAI Careers</div>
              <h1 className="careers-main-heading">
                Turn Possibilities<span className="highlight">Into Your Reality</span>
              </h1>
              <p className="careers-description">
                Unlock your potential and shape the future you dream of because every idea you dare to pursue can become real
              </p>
              <button className="apply-now-btn" onClick={handleApplyNow}>
                <a className='apply' href="#apply-now-btn">Apply Now</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="future-section">
        <div className="container">
          <div className="future-container">
            <div className="future-content">
              <h2 className="future-title">
                <span className="title-line">Be the Change,</span>
                <span className="title-line accent">Lead the Future</span>
              </h2>
              <p className="future-description">
                At INAI Worlds Pvt. Ltd., we believe the future isn’t something we wait for it’s something we create.
              </p>
              <p>
                At INAI Worlds Pvt. Ltd., our strength lies in our people. We are a team driven by curiosity, collaboration, and a shared vision of building a better tomorrow. Our culture inspires innovation, nurtures talent, and empowers every individual to make a meaningful impact.
              </p>
            </div>
            <div className="future-visual">
              <div className="floating-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
              </div>
              <motion.div
                className="future-visual"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.8,
                    delay: 0.4,
                    type: 'spring',
                    stiffness: 100,
                    damping: 15
                  }
                }}
                viewport={{ once: true }}
              >
                <div className="floating-shapes">
                  <div className="shape shape-1"></div>
                  <div className="shape shape-2"></div>
                  <div className="shape shape-3"></div>
                </div>
                <div className="image-container">
                  <motion.img
                    src={teamImage}
                    alt="Advanced Robotics Technology"
                    className="future-image"
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{
                      scale: 1,
                      opacity: 1,
                      transition: {
                        delay: 0.6,
                        duration: 0.8
                      }
                    }}
                    viewport={{ once: true }}
                  />
                  <div className="image-overlay"></div>
                </div>
                <div className="floating-cards">
                  <motion.div
                    className="card card-1"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.7,
                        duration: 0.5
                      }
                    }}
                    viewport={{ once: true }}
                  >
                  </motion.div>
                  <motion.div
                    className="card card-2"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.8,
                        duration: 0.5
                      }
                    }}
                    viewport={{ once: true }}
                  >
                  </motion.div>
                  <motion.div
                    className="card card-3"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.9,
                        duration: 0.5
                      }
                    }}
                    viewport={{ once: true }}
                  >
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="who-we-are-section">
        <div className="container">
          <div className="who-we-are-wrapper">
            <div className="who-we-are-image">
              <div className="image-container-career">
                <img
                  src={teamWorkingImage}
                  alt="Our team working together"
                  className="team-working-img"
                />
                <div className="image-overlay"></div>
                <div className="floating-shapes">
                  <div className="shape shape-1"></div>
                  <div className="shape shape-2"></div>
                  <div className="shape shape-3"></div>
                </div>
              </div>
            </div>
            <div className="who-we-are-content">
              <h2 className="section-title">Who We Are</h2>
              <p className="section-description">At INAI WORLDS Pvt. Ltd., our strength lies in our people. We are a team driven by curiosity, collaboration, and a shared vision of building a better tomorrow. Our culture inspires innovation, nurtures talent, and empowers every individual to make a meaningful impact.</p>
              <div className="stats-container">
                <div className="stat-item">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Experts</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">11+</div>
                  <div className="stat-label">Projects</div>
                </div>
              </div>
            </div>
          </div>

          <div className="who-we-are-grid">
            <div className="who-we-are-item" data-aos="fade-up" data-aos-delay="100">
              <div className="item-icon">
                <LuLightbulb size={32} />
              </div>
              <h3>Visionaries</h3>
              <p>We imagine what’s possible and then make it happen. Our team continually pushes boundaries to create solutions that truly matter.</p>
              <div className="item-hover-effect"></div>
            </div>

            <div className="who-we-are-item" data-aos="fade-up" data-aos-delay="200">
              <div className="item-icon">
                <FaHandshake size={28} />
              </div>
              <h3>Collaborators</h3>
              <p>We believe great teamwork creates great solutions.
                We believe in the power of collaboration to solve complex challenges.
              </p>
              <div className="item-hover-effect"></div>
            </div>

            <div className="who-we-are-item" data-aos="fade-up" data-aos-delay="300">
              <div className="item-icon">
                <FaRocket size={28} />
              </div>
              <h3>Innovators</h3>
              <p>We challenge the status quo with creativity and bold thinking.
                Our culture encourages experimentation and creative problem-solving.
              </p>
              <div className="item-hover-effect"></div>
            </div>
          </div>
        </div>

        <div className="floating-elements">
          <div className="floating-element el-1"></div>
          <div className="floating-element el-2"></div>
          <div className="floating-element el-3"></div>
        </div>
      </section>



      <section className="company-culture" style={{ backgroundColor: '#ffffff', padding: '80px 0', overflow: 'hidden' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <motion.div
            className="culture-header"
            style={{ textAlign: 'center', marginBottom: '60px' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              style={{
                fontSize: '2.5rem',
                marginBottom: '20px',
                background: 'linear-gradient(45deg, #6a11cb 0%, #2575fc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'white',
                display: 'inline-block'
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Life With Us
            </motion.h2>
            <motion.p
              className="culture-subtitle"
              style={{
                fontSize: '1.1rem',
                color: '#ffffff',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Life here is about more than just work it's about growth, balance, and belonging. We foster an inclusive environment where everyone's voice matters, and creativity is celebrated.
            </motion.p>
          </motion.div>

          <div className="culture-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            marginBottom: '60px'
          }}>
            {[
              {
                icon: <VscLightbulbSparkle style={{ fontSize: '40px', color: '#fbed2b' }} />,
                title: 'Innovation First',
                text: 'Work on cutting-edge projects that challenge the boundaries of technology and make a real impact.'
              },
              {
                icon: <BiSolidLeaf style={{ fontSize: '40px', color: 'rgb(0 193 43)' }} />,
                title: 'Growth Mindset',
                text: 'Continuous learning opportunities, mentorship programs, and clear career progression paths.'
              },
              {
                icon: <VscPaintcan style={{ fontSize: '40px', color: '#ff6b6b' }} />,
                title: 'Creative Freedom',
                text: 'We encourage out-of-the-box thinking and give you the autonomy to explore new ideas.'
              },
              {
                icon: <VscGlobe style={{ fontSize: '40px', color: 'rgb(43 251 157)' }} />,
                title: 'Diverse & Inclusive',
                text: 'Join a global team that celebrates diversity and fosters an inclusive environment.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="culture-card"
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '30px',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 1
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                }}
              >
                <div className="card-content" style={{ position: 'relative', zIndex: 2 }}>
                  <motion.div
                    className="card-icon"
                    animate={{ rotateY: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: 'linear-gradient(145deg, #f0f0f0, #ffffff)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                      boxShadow: '8px 8px 16px #d9d9d9, -8px -8px 16px #ffffff'
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    marginBottom: '15px',
                    color: '#333',
                    textAlign: 'center'
                  }}>{item.title}</h3>
                  <p style={{
                    color: '#666',
                    lineHeight: '1.6',
                    textAlign: 'center',
                    margin: 0
                  }}>{item.text}</p>
                </div>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                  zIndex: 1,
                  borderRadius: '20px',
                  pointerEvents: 'none'
                }}></div>
              </motion.div>
            ))}
          </div>

          <div className="culture-features" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '25px',
            marginTop: '40px'
          }}>
            {[
              {
                icon: <PiHandshakeThin style={{ fontSize: '30px', color: 'rgb(251 43 156)' }} />,
                title: 'Collaborative Culture',
                text: 'Teamwork and open communication are at our core.'
              },
              {
                icon: <GiLifeInTheBalance style={{ fontSize: '30px', color: 'rgb(43 251 243)' }} />,
                title: 'Work-Life Balance',
                text: 'Flexible arrangements that support your well-being.'
              },
              {
                icon: <GiPartyPopper style={{ fontSize: '30px', color: 'rgb(221 43 251)' }} />,
                title: 'Fun & Engagement',
                text: 'Regular team activities and celebrations.'
              },
              {
                icon: <IoEarthSharp style={{ fontSize: '30px', color: 'rgb(251 43 156)' }} />,
                title: 'Global Impact',
                text: 'Work that creates meaningful change worldwide.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="feature"
                style={{
                  background: 'white',
                  padding: '25px',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(0,0,0,0.03)'
                }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                whileHover={{
                  transform: 'translateY(-5px)',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.1)'
                }}
              >
                <div className="feature-icon" style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'linear-gradient(145deg, #f0f0f0, #ffffff)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '8px 8px 16px #e0e0e0, -8px -8px 16px #ffffff'
                }}>
                  {item.icon}
                </div>
                <div>
                  <h4 style={{
                    margin: '0 0 5px 0',
                    color: '#333',
                    fontSize: '1.1rem'
                  }}>{item.title}</h4>
                  <p style={{
                    margin: 0,
                    color: '#666',
                    fontSize: '0.95rem',
                    lineHeight: '1.5'
                  }}>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="join-us-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Why Join <span className="highlight">Our Team?</span></h2>
            <p className="section-subtitle">At INAI Worlds Pvt. Ltd., we believe that a fulfilling career is built on more than just the work you do it’s about the people you work with, the opportunities you get, and the environment that helps you grow. When you join us, you become part of a community that values your potential and invests in your future.</p>
          </motion.div>

          <div className="benefits-grid">
            <motion.div
              className="benefit-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="card-icon">
                <FaRocket className="icon" />
              </div>
              <h3>Career Growth</h3>
              <p>Continuous learning opportunities and clear paths for advancement in your career journey.</p>
              <div className="card-hover-effect"></div>
            </motion.div>

            <motion.div
              className="benefit-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="card-icon">
                <FaPeopleCarryBox className="icon" />
              </div>
              <h3>Team Culture</h3>
              <p>Join a supportive, diverse team that values collaboration and celebrates success together.</p>
              <div className="card-hover-effect"></div>
            </motion.div>

            <motion.div
              className="benefit-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10 }}
            >
              <div className="card-icon">
                <LuLightbulb className="icon" />
              </div>
              <h3>Innovation</h3>
              <p>Work on cutting-edge projects that challenge you to think differently and push boundaries.</p>
              <div className="card-hover-effect"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .join-us-section {
          padding: 6rem 0;
          background: linear-gradient(135deg,rgb(255, 255, 255) 0%,rgb(255, 255, 255) 100%);
          position: relative;
          overflow: hidden;
        }

        .section-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 4rem;
        }

        .section-header h2 {
          font-size: 2.8rem;
          color: #1a1a2e;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #565656;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .highlight {
          background: linear-gradient(#ffffff,rgb(255, 255, 255));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .benefit-card {
          background: white;
          border-radius: 16px;
          padding: 2.5rem 2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          z-index: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .benefit-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .benefit-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .benefit-card:hover::before {
          opacity: 0.05;
        }

        .card-icon {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          background: linear-gradient(135deg,rgb(255, 255, 255),rgb(0, 0, 0));
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          color: white;
          font-size: 1.5rem;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }

        .benefit-card h3 {
          font-size: 1.4rem;
          color: #1a1a2e;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .benefit-card p {
          color: #4b5563;
          line-height: 1.7;
          margin-bottom: 0;
          flex-grow: 1;
        }

        .card-hover-effect {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .benefit-card:hover .card-hover-effect {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .section-header h2 {
            font-size: 2.2rem;
          }
          
          .benefits-grid {
            grid-template-columns: 1fr;
            padding: 0 1rem;
          }
          
          .benefit-card {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>

      <motion.section>
        <div className="container">
          <div className="section-header">
            <motion.div
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ scale: 1.02, rotateY: 5 }}
            >
              <motion.div
                className="image-wrapper"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <div className="image-overlay"></div>
              </motion.div>
            </motion.div>
          </div>
        </div >
      </motion.section >

      <section className="our-culture-section">
        <div className="container">
          <div className="future-container">
            <div className="future-content">
              <h2 className="future-title">
                <span className="title-line">Our Culture</span>
              </h2>
              <p className="future-description">
                At INAI WORLDS Pvt. Ltd. our culture is the foundation of our success. We've built an environment that fosters innovation, collaboration, and growth, where every team member can thrive and make a meaningful impact.
              </p>
            </div>
            <div className="future-visual">
              <div className="floating-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
              </div>

              <motion.div
                className="future-visual"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.8,
                    delay: 0.4,
                    type: 'spring',
                    stiffness: 100,
                    damping: 15
                  }
                }}
                viewport={{ once: true }}
              >
                <div className="floating-shapes">
                  <div className="shape shape-1"></div>
                  <div className="shape shape-2"></div>
                  <div className="shape shape-3"></div>
                </div>
                <div className="image-container">
                  <motion.img
                    src={cultureBgImage}
                    alt="Advanced Robotics Technology"
                    className="future-image"
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{
                      scale: 1,
                      opacity: 1,
                      transition: {
                        delay: 0.6,
                        duration: 0.8
                      }
                    }}
                    viewport={{ once: true }}
                  />
                  <div className="image-overlay"></div>
                </div>
                <div className="floating-cards">
                  <motion.div
                    className="card card-1"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.7,
                        duration: 0.5
                      }
                    }}
                    viewport={{ once: true }}
                  >
                    <FaPeopleRobbery size={20} color='rgb(0 213 215)' />
                    <span>Inclusive</span>
                  </motion.div>
                  <motion.div
                    className="card card-2"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.8,
                        duration: 0.5
                      }
                    }}
                    viewport={{ once: true }}
                  >
                    <FaPeopleCarryBox size={20} color='rgb(46 243 81)' />
                    <span>Collaborative</span>
                  </motion.div>
                  <motion.div
                    className="card card-3"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.9,
                        duration: 0.5
                      }
                    }}
                    viewport={{ once: true }}
                  >
                    <GiStarsStack size={20} color='rgb(255 236 89)' />
                    <span>Innovative</span>
                  </motion.div>
                  <motion.div
                    className='card card-4'
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.9,
                        duration: 0.5
                      }
                    }}
                    viewport={{ once: true }}
                  >
                    <GiButterflyFlower size={20} color='rgb(229 25 164)' />
                    <span>Empowering</span>
                  </motion.div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      <section className="career-growth-section">
        <div className="container">
          <motion.div
            className="career-growth-card"
            initial={{ opacity: 0, y: 30, rotateY: -30 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="career-growth-inner">
              <div className="career-growth-front">
                <div className="who-we-are-image">
                  <div className="image-overlay"></div>
                  <img
                    src={careerGrowthImage}
                    alt="Career Growth at INAI"
                    className="team-working-img"
                  />
                  <div className="floating-shapes">
                    <div className="floating-shape shape-1"></div>
                    <div className="floating-shape shape-2"></div>
                    <div className="floating-shape shape-3"></div>
                  </div>
                </div>
                <div className="who-we-are-content">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    Career Growth
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    We champion your evolution at every turn. From structured learning paths and mentorship programs to leadership development and cross-functional opportunities, you'll always find space to learn, experiment, and thrive. Here, growth is not just vertical it's about expanding your skills, broadening your perspective, and creating your own unique journey.
                  </motion.p>
                </div>
              </div>
              <section className="career-growth-back">
                <div className="growth-features">
                  <div className="growth-feature">
                    <div className="feature-icon-wrapper">
                      <FaRocket className="feature-icon" />
                    </div>
                    <h4>Structured Learning Paths</h4>
                  </div>
                  <div className="growth-feature">
                    <div className="feature-icon-wrapper">
                      <LiaChalkboardTeacherSolid className="feature-icon" />
                    </div>
                    <h4>Mentorship Programs</h4>
                  </div>
                  <div className="growth-feature">
                    <div className="feature-icon-wrapper">
                      <LuLightbulb className="feature-icon" />
                    </div>
                    <h4>Innovation Labs</h4>
                  </div>
                  <div className="growth-feature">
                    <div className="feature-icon-wrapper">
                      <FaHandshake className="feature-icon" />
                    </div>
                    <h4>Cross-functional Projects</h4>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        className="personality-dev-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage: `url(${personalityDevImage})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          position: 'relative',
          padding: '6rem 0',
          overflow: 'hidden'
        }}
      >
        <div className="personality-dev-overlay"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>

        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="section-title">Personality Development</h2>
            <p className="section-subtitle">We believe in nurturing well-rounded professionals who excel both technically and personally</p>
          </motion.div>

          <div className="personality-dev-grid">
            <motion.div
              className="personality-dev-card"
              initial={{ opacity: 0, y: 50, rotateY: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              whileHover={{ y: -15, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="card-content">
                <div className="dev-icon">
                  <LuBrainCircuit size={42} color="#00d5d7" />
                </div>
                <h3>Communication Excellence</h3>
                <p>Master the art of effective communication through our specialized workshops and practical training sessions.</p>
                <ul>
                  <li>Public speaking training</li>
                  <li>Business writing skills</li>
                  <li>Active listening techniques</li>
                </ul>
              </div>
              <div className="card-glow"></div>
            </motion.div>

            <motion.div
              className="personality-dev-card"
              initial={{ opacity: 0, y: 50, rotateY: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              whileHover={{ y: -15, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="card-content">
                <div className="dev-icon">
                  <GiStarsStack size={42} color="#ffec59" />
                </div>
                <h3>Leadership Development</h3>
                <p>Unlock your leadership potential with our comprehensive development programs.</p>
                <ul>
                  <li>Team management skills</li>
                  <li>Decision-making strategies</li>
                  <li>Emotional intelligence</li>
                </ul>
              </div>
              <div className="card-glow"></div>
            </motion.div>

            <motion.div
              className="personality-dev-card"
              initial={{ opacity: 0, y: 50, rotateY: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              whileHover={{ y: -15, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="card-content">
                <div className="dev-icon">
                  <GiButterflyFlower size={42} color="#e519a4" />
                </div>
                <h3>Personal Branding</h3>
                <p>Stand out with a strong personal brand that reflects your unique strengths and values.</p>
                <ul>
                  <li>Online presence optimization</li>
                  <li>Networking strategies</li>
                  <li>Professional image building</li>
                </ul>
              </div>
              <div className="card-glow"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="programs-section" id="apply-now-btn">
        <div className="container">
          <div className="section-header" >
            <h2>Join Our Programs</h2>
            <p>Take the next step in your career with our specialized programs</p>
          </div>
          <div className="programs-grid">
            <div className="program-card ai-ml">
              <div className="program-content">
                <div className="program-icon">
                  <LuBrainCircuit size={40} color='#4a6cf7' />
                </div>
                <h3>AI/ML</h3>
                <p>Dive into the world of AI and ML. Work on cutting-edge projects and develop intelligent solutions that shape the future.</p>
                <ul className="program-features">
                  <li>ML models development</li>
                  <li>Deep Learning applications</li>
                  <li>Neural networks and algorithms</li>
                </ul>
                <button className="program-button" onClick={() => handleNavigation('/careers/ai-ml-explore')}>
                  Explore AI/ML
                </button>
              </div>
            </div>

            <div className="program-card automation">
              <div className="program-content">
                <div className="program-icon">
                  <LiaRobotSolid size={40} color='#10b981' />
                </div>
                <h3>Automation</h3>
                <p>Master the art of automation to streamline processes and increase efficiency across various domains and industries.</p>
                <ul className="program-features">
                  <li>Process automation</li>
                  <li>RPA (Robotic Process Automation)</li>
                  <li>Workflow optimization</li>
                </ul>
                <button className="program-button" onClick={() => handleNavigation('/careers/automation-explore')}>
                  Explore Automation
                </button>
              </div>
            </div>

            <div className="program-card robotics">
              <div className="program-content">
                <div className="program-icon">
                  <LiaPersonBoothSolid size={40} color='#f59e0b' />
                </div>
                <h3>Robotics</h3>
                <p>Design and develop intelligent robotic systems that can interact with the physical world and perform complex tasks autonomously.</p>
                <ul className="program-features">
                  <li>Robotic systems design</li>
                  <li>Computer vision integration</li>
                  <li>Autonomous systems</li>
                </ul>
                <button className="program-button" onClick={() => handleNavigation('/careers/robotics-explore')}>
                  Explore Robotics
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
       */}
    </>
  );
};

export default Careers;
