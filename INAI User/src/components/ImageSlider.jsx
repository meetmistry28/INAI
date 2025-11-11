import React, { useState, useEffect } from 'react';
import '../styles/Careers.css';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: 'AI/ML Internship',
      description: 'Join our AI/ML team to work on cutting-edge machine learning projects.',
      image: require('../../assets/02.png'),
      link: '/careers/ai-ml-explore'
    },
    {
      title: 'Robotics Program',
      description: 'Develop innovative robotics solutions with our expert team.',
      image: require('../../assets/02.png'),
      link: '/careers/robotics-explore'
    },
    {
      title: 'Automation Specialist',
      description: 'Help businesses automate their processes with our automation solutions.',
      image: require('../../assets/02.png'),
      link: '/careers/automation-explore'
    },
    // Add more slides as needed
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-container">
      <div className="slider">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: `translateX(${100 * (index - currentSlide)}%)`
            }}
          >
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <a href={slide.link} className="explore-btn">Explore</a>
            </div>
          </div>
        ))}
      </div>
      <button className="slider-btn prev" onClick={prevSlide}>&#10094;</button>
      <button className="slider-btn next" onClick={nextSlide}>&#10095;</button>
      <div className="slider-dots">
        {slides.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
