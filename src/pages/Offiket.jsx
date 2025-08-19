import React, { useEffect } from 'react';
import './Inai_life.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from "../assets/portfolio/offiket.png";
import img2 from "../assets/portfolio/offiket_2.png";
import img3 from "../assets/portfolio/offiket_3.png";
import img4 from "../assets/portfolio/offiket_4.png";

const Offiket = () => {
  useEffect(() => {
    // Set document title
    document.title = "Offiket | Office Buying & Selling Platform | INAI Worlds";
    
    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Offiket by INAI Worlds is a marketplace for buying and selling office spaces, offering features to connect buyers and sellers in the dynamic office market.";
    
    // Set Open Graph tags
    const ogTags = {
      'og:title': "Offiket | Office Buying & Selling Platform | INAI Worlds",
      'og:description': "Offiket by INAI Worlds is a marketplace for buying and selling office spaces, offering features to connect buyers and sellers in the dynamic office market.",
      'og:type': 'website',
      'og:url': window.location.href,
      'twitter:card': 'summary_large_image',
      'twitter:title': "Offiket | Office Buying & Selling Platform | INAI Worlds",
      'twitter:description': "Offiket by INAI Worlds is a marketplace for buying and selling office spaces, offering features to connect buyers and sellers in the dynamic office market."
    };
    
    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    });
  }, []);
  
  return (
    <>
      {/* Meta tags are now set via JavaScript */}

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
              <SwiperSlide><img src={img2} alt="Slide 2" /></SwiperSlide>
              <SwiperSlide><img src={img3} alt="Slide 2" /></SwiperSlide>
              <SwiperSlide><img src={img4} alt="Slide 2" /></SwiperSlide>
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
                  <span className="info-value">Office solutions</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Model</span>
                  <span className="info-value">Buy and Sell solution with AI skills</span>
                </div>
                {/* <div className="info-item full-width">
                            <span className="info-label">Project URL</span>
                            <a href="https://www.instagram.com/influketworld/" target="_blank" rel="noopener noreferrer" className="info-link">
                            https://www.instagram.com/influketworld/
                            </a>
                          </div> */}
              </div>
            </div>

            <div className="project-description">
              <h3>What is OFFIKET?</h3>
            </div>
            <span className='project-description_span'>OFFIKET is project for buyer and seller. If anyone want to buy office or sell they can join this. There have also some features for other options. So in this project of INAI WORLDS PVT LTD office market will influence that’s why it’s called - OFFIKET .</span>
          </div>
        </div>
      </section>


    </>
  )
}

export default Offiket