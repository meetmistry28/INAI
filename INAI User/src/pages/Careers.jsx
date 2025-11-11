import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../styles/Careers.css";
import { LiaPersonBoothSolid, LiaRobotSolid } from "react-icons/lia";
import { LuBrainCircuit } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaPlay, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Import images
import AIMLImage from '../assets/Inai-Web-Image[1].webp';
import AutomationImage from '../assets/Aera1.webp';
import RoboticsImage from '../assets/Vinai.webp';

function Careers() {
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  const handleBoxClick = (path) => {
    navigate(path);
  };
  
  const slides = [
    {
      title: 'AI/ML Career Opportunities',
      description: 'Join our team of experts working on cutting-edge AI and Machine Learning solutions that are transforming industries worldwide.',
      cta: 'Explore AI/ML Careers',
      link: '/careers/ai-ml-explore',
      image: AIMLImage,
      stats: [
        { value: '50+', label: 'Open Positions' },
        { value: 'Global', label: 'Locations' },
        { value: 'Competitive', label: 'Salary' }
      ]
    },
    {
      title: 'Automation Specialists Wanted',
      description: 'Be part of the automation revolution. Work with the latest technologies to build intelligent automation solutions.',
      cta: 'View Automation Roles',
      link: '/careers/automation-explore',
      image: AutomationImage,
      stats: [
        { value: '30+', label: 'Open Positions' },
        { value: 'Flexible', label: 'Work Options' },
        { value: 'Fast-growing', label: 'Team' }
      ]
    },
    {
      title: 'Robotics Engineering',
      description: 'Shape the future of robotics with our innovative team. Work on projects that push the boundaries of what\'s possible.',
      cta: 'Discover Robotics Careers',
      link: '/careers/robotics-explore',
      image: RoboticsImage,
      stats: [
        { value: '25+', label: 'Open Positions' },
        { value: 'Cutting-edge', label: 'Technology' },
        { value: 'Innovation', label: 'Focused' }
      ]
    }
  ];

  return (
    <div className="career-page">
      {/* Hero Section with Swiper */}
      <section className="swiper-hero">
        <Swiper
          ref={swiperRef}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          effect="fade"
          speed={1000}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            renderBullet: (index, className) => {
              return `<span class="${className}">0${index + 1}</span>`;
            },
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className="swiper-container"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="slide-content">
                <div className="slide-image">
                  <img src={slide.image} alt={slide.title} />
                </div>
                <div className="slide-details">
                  <div className="content-wrapper">
                    <h1 className="slide-title">{slide.title}</h1>
                    <p className="slide-description">{slide.description}</p>
                    {/* <div className="stats-grid">
                      {slide.stats.map((stat, i) => (
                        <div key={i} className="stat-item">
                          <span className="stat-value">{stat.value}</span>
                          <span className="stat-label">{stat.label}</span>
                        </div>
                      ))}
                    </div> */}
                    <div className="slider-buttons">
                      <button className="btn-primary" onClick={() => handleBoxClick(slide.link)}>
                        {slide.cta} <FaArrowRight className="icon" />
                      </button>
                      {/* <button className="btn-outline">
                        <FaPlay className="icon" /> Watch Video
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev">
            <FaChevronLeft />
          </div>
          <div className="swiper-button-next">
            <FaChevronRight />
          </div>
          
          {/* Custom Pagination */}
          <div className="swiper-pagination"></div>
        </Swiper>
      </section>

      {/* Video and Testimonials Section */}
      <section className="video-testimonial-section">
        <div className="container">
          <div className="section-header" style={{
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 3rem',
            padding: '0 1rem'
          }}>
            <h2 className="section-title" style={{
              fontSize: '2.5rem',
              marginBottom: '1rem',
              color: '#fff'
            }}>Hear From Our Students</h2>
            <p className="section-subtitle" style={{
              fontSize: '1.1rem',
              color: '#a0aec0',
              lineHeight: '1.6',
              maxWidth: '600px',
              margin: '0 auto'
            }}>See what our students have to say about their learning experience</p>
          </div>
          
          <div className="video-testimonial-grid">
            {/* Video Section */}
            <div className="video-container">
              <div className="video-wrapper">
                <div className="play-button">
                  <FaPlay size={24} />
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Student Learning Experience"
                  className="video-thumbnail"
                />
              </div>
             
            </div>

            {/* Testimonials Section with Swiper */}
            <div className="testimonials-section" style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
              <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                pagination={{
                  clickable: true,
                  el: '.testimonial-pagination',
                  type: 'bullets',
                }}
                navigation={{
                  nextEl: '.testimonial-button-next',
                  prevEl: '.testimonial-button-prev',
                }}
                className="testimonials-swiper"
                style={{
                  padding: '20px 0 60px',
                  width: '100%',
                }}
              >
                {[
                  {
                    id: 1,
                    text: "The hands-on projects and industry-relevant curriculum helped me land my dream job at a top tech company. The instructors are incredibly supportive!",
                    name: "Sarah Johnson",
                    role: "AI Engineer at TechCorp",
                    image: "https://randomuser.me/api/portraits/women/43.jpg"
                  },
                  {
                    id: 2,
                    text: "The mentorship I received was exceptional. The practical approach to learning made all the difference in my career transition.",
                    name: "Michael Chen",
                    role: "Machine Learning Specialist",
                    image: "https://randomuser.me/api/portraits/men/32.jpg"
                  },
                  {
                    id: 3,
                    text: "The community and networking opportunities provided are invaluable. I've grown both personally and professionally through this program.",
                    name: "Priya Patel",
                    role: "Data Scientist",
                    image: "https://randomuser.me/api/portraits/women/65.jpg"
                  },
                  {
                    id: 4,
                    text: "The course structure and hands-on projects gave me the confidence to apply for senior positions. I got a 40% salary increase after completing the program!",
                    name: "David Kim",
                    role: "Senior ML Engineer",
                    image: "https://randomuser.me/api/portraits/men/45.jpg"
                  }
                ].map((testimonial) => (
                  <SwiperSlide key={testimonial.id} style={{ padding: '10px' }}>
                    <div className="testimonial-card" style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      padding: '2rem',
                      height: '100%',
                      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
                    }}>
                      <div className="testimonial-content" style={{ position: 'relative', marginBottom: '1.5rem' }}>
                        <div style={{
                          position: 'absolute',
                          top: '-10px',
                          left: '-5px',
                          fontSize: '4rem',
                          fontFamily: 'Georgia, serif',
                          color: 'rgba(255, 255, 255, 0.1)',
                          lineHeight: 1,
                          zIndex: 1
                        }}>"</div>
                        <p style={{
                          position: 'relative',
                          zIndex: 2,
                          fontSize: '1rem',
                          lineHeight: 1.7,
                          color: '#e5e7eb',
                          margin: 0,
                          paddingLeft: '1.5rem'
                        }}>{testimonial.text}</p>
                      </div>
                      <div className="testimonial-author" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        paddingTop: '1rem',
                        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                      }}>
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '2px solid rgba(59, 130, 246, 0.5)'
                          }}
                        />
                        <div>
                          <h4 style={{
                            margin: 0,
                            fontSize: '1rem',
                            color: '#fff',
                            fontWeight: 600
                          }}>{testimonial.name}</h4>
                          <p style={{
                            margin: '0.25rem 0 0',
                            fontSize: '0.85rem',
                            color: '#a0a0a0'
                          }}>{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.5rem',
                zIndex: 10,
                marginTop: '1rem',
                background: 'rgba(0, 0, 0, 0.3)',
                padding: '0.5rem 1rem',
                borderRadius: '30px',
                backdropFilter: 'blur(5px)'
              }}>
                <button style={{
                  width: '70px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }} className="testimonial-button-prev">
                  <FaChevronLeft />
                </button>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  margin: '0 1rem'
                }} className="testimonial-pagination"></div>
                <button style={{
                  width: '70px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }} className="testimonial-button-next">
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Boxes Section */}
      <section className="tech-section" id="careers" style={{ padding: '4rem 2rem' }}>
        <h2 className="section-title">Explore Career Paths</h2>
        <div className="tech-boxes">
          <div className="tech-box" onClick={() => handleBoxClick('/careers/ai-ml-explore')}>
            <div className="tech-icon">
              <LuBrainCircuit size={48} />
            </div>
            <h3>AI/ML</h3>
            <p>Explore careers in Artificial Intelligence and Machine Learning</p>
          </div>
          <div className="tech-box" onClick={() => handleBoxClick('/careers/automation-explore')}>
            <div className="tech-icon">
              <LiaPersonBoothSolid size={48} />
            </div>
            <h3>Automation</h3>
            <p>Transform industries with Automation technologies</p>
          </div>
          <div className="tech-box" onClick={() => handleBoxClick('/careers/robotics-explore')}>
            <div className="tech-icon">
              <LiaRobotSolid size={48} />
            </div>
            <h3>Robotics</h3>
            <p>Dive into the world of Robotics and Automation</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
