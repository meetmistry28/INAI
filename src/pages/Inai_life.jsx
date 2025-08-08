import React from 'react';
import './Inai_life.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from "../assets/portfolio/inai_post.jpg";
// import img2 from "../../assets/portfolio/INAI_WORLD.jpg";

function Inai_life() {
  return (
    <>
      <section className="project-detail-section">
        {/* <h1 className="page-title">INAI LIFE</h1> */}
        <div className="project-grid">
          {/* Left Side - Image Slider */}
          <div className="image-slider">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              modules={[Pagination]}
            >
              <SwiperSlide><img src={img1} alt="Slide 1" /></SwiperSlide>
              {/* <SwiperSlide><img src={img2} alt="Slide 2" /></SwiperSlide> */}
              {/* Add more images if needed */}
            </Swiper>
          </div>

          {/* Right Side - Info */}
          <div className="project-info-box">
            <div className="project-info">
              <div className="info-header">
                <h2>Project Information</h2>
                <div className="header-line"></div>
              </div>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Category</span>
                  <span className="info-value">AI Virtual Model</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Model</span>
                  <span className="info-value">CGI with Intelligence Skills</span>
                </div>
                <div className="info-item full-width">
                  <span className="info-label">Project URL</span>
                  <a href="https://www.instagram.com/inai_life/" target="_blank" rel="noopener noreferrer" className="info-link">
                    instagram.com/inai_life
                  </a>
                </div>
              </div>
            </div>

            <div className="project-description">
              <h3>What is INAI?</h3>
          </div>
              <span className='project-description_span'>INAI is India's own AI system where everyone can find their solutions. We are work on future tech like MLP and Gen-AI. We build developers and work with them. we just want to develop India's first AI company like Open AI and Deep Seek. so join with us and take part of this journey.</span>
            </div>
        </div>
      </section>
    </>
  );
}

export default Inai_life;
