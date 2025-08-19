import React, { useState, useEffect } from 'react';
import FAQ from '../components/FAQ';
import './Services.css';
import './Web_scraping.css';
import '../components/CTA3.css';
import webscraping from "../assets/3D/webscraping.png";
import FAQ_Service from '../components/FAQ_Service';
import CTA_WEB from '../components/CTA_WEB';
import { Helmet } from 'react-helmet-async';

// Data arrays for stepper (keep as before)
const stepper = [
  'Define data needs product details, prices, news, reviews',
  'Find and collect URLs that have the target data',
  'Scrape ethically follow robots.txt and respect site policies',
  'Extract & clean turn messy HTML into structured tables or CSV files',
  'Use in AI load data into ML models, test, improve and analyze',
];

const BoostYourCareer = [
  "Master web scraping in Python a top skill for data engineers",
  "Apply best practices in data extraction using Python tools",
  "Build impactful Python web scraping projects for your portfolio",
  "Learn full data pipelines from scraping to AI model deployment",
  "Improve your job-readiness with one of the best AI/ML internships in India"
];

const standoutFeatures = [
  {
    icon: "⚡",
    text: "Real-time data scraping with Python on live websites"
  },
  {
    icon: "🛡️",
    text: "Ethical and compliant scraping practices built into training"
  },
  {
    icon: "💡",
    text: "Use cases from e-commerce, NLP, finance, and more"
  },
  {
    icon: "🎓",
    text: "Expert guidance from AI mentors with real-world experience"
  },
  {
    icon: "🏆",
    text: "One of India’s most trusted real-world AI/ML internship programs"
  }
];

const Service1 = () => {
  const [topRowItems, setTopRowItems] = useState([]);
  const [bottomRowItems, setBottomRowItems] = useState([]);

  useEffect(() => {
    const topItems = [
      { title: 'Collect fresh reviews', desc: 'for sentiment analysis' },
      { title: 'Monitor live pricing', desc: 'for dynamic prediction models' },
      { title: 'Build custom datasets', desc: 'where no APIs exist' },
      { title: 'Feed AI models', desc: 'with updated market data' },
      { title: 'Ethical scraping', desc: 'in live environments' }
    ];
    const bottomItems = [
      { title: 'Beautiful Soup', desc: 'Quick, efficient HTML parsing' },
      { title: 'Selenium', desc: 'Scrape dynamic and JS-heavy sites' },
      { title: 'Scrapy', desc: 'Scalable crawling & large pipelines' },
    ];
    setTopRowItems([...topItems, ...topItems]);
    setBottomRowItems([...bottomItems, ...bottomItems]);
  }, []);
  const internCards = [
    {
      icon: "🔎",
      title: "Evaluate and identify high-value data sources online",
    },
    {
      icon: "🐍",
      title: "Write Python web scraping projects using BeautifulSoup, Selenium & Scrapy",
    },
    {
      icon: "🧹",
      title: "Perform data extraction using Python and clean messy HTML into structured formats",
    },
    {
      icon: "🤖",
      title: "Integrate scraped data into ML workflows, boosting their practical knowledge",
    },
    {
      icon: "📁",
      title: "Build a verified portfolio with complete, working AI/ML pipelines",
    }
  ];

  return (
    <>
      <Helmet>
        <title>Web Scraping in Python for AI Model Building | INAI Worlds</title>
        <meta
          name="description"
          content="INAI Worlds uses web scraping in python to build AI modules and offers hands-on AI/ML internship for real-world learning and development."
        />
      </Helmet>
      <div className="service-detail-page webscraping-page">
        <div>
          <div className="flex flex-col md:flex-row items-center gap-8 sec_com">
            {/* Left: Content */}
            <div className="w-full md:w-1/2 sec_con web_scrap_per">
              <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-purple-500 text-white inline-block px-5 py-2 rounded-full shadow web_scrap_title">
                <p>Web Scraping </p>
                <span>in AI/ML Internship with Python</span>
              </h1>
              <br />
              <p className="scrap_text leading-relaxed mb-4">
                From scraping web data to real-time feeds, our web scraping solutions feed both <a href="/services/model-training" style={{ color: "skyblue" }}> model training</a> and internal learning. It’s all about data, accuracy data. Our hands-on internship in AI/ML with web scraping gives students direct experience with real-time data, ethical scraping practices, and live project building all using the best libraries for web scraping in Python.
              </p>
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-1/2">
              <img
                src={webscraping}
                alt="Web Scraping"
                className="w-full h-auto max-h-[400px] md:max-h-[500px] object-contain rounded-2xl shadow-md web_img"
              />
            </div>
          </div>
        </div>



        <div className="scrolling-section">
          <h2 className="gradient-heading">Why Web Scraping Is Essential <br /> in AI/ML Internships</h2>
          <p>Web scraping plays a critical role in AI development, enabling real-world data extraction that makes machine learning models smarter, faster, and more adaptable.</p>
          <div className="scrolling-row top-row">
            {topRowItems.map((item, index) => (
              <div className="scrolling-card" key={index}>
                <div className="card-icon">🧩</div>
                <div>
                  <h3>{item.title}</h3>
                  <span>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>




        <div className="scrolling-section">
          <h2 className="gradient-heading">Learn by Doing: Real Projects, Real Impact</h2>
          <p>Our real-world AI/ML internship emphasizes hands-on data collection and implementation. </p>
          <div className="standout-features-grid">
            {internCards.map((card, idx) => (
              <div className="standout-feature-card" key={idx}>
                <div className="standout-feature-icon">{card.icon}</div>
                <div className="standout-feature-title">{card.title}</div>
                <div className="standout-feature-desc">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>


        {/* Bottom Scrolling Row (Left to Right) */}
        <div className="scrolling-section">
          <h2 className="gradient-heading">Build Powerful Scraping <br /> Scripts with Python</h2>
          <p>Whether you're a beginner or intermediate Python user, our internship helps you become proficient in Python-based web scraping. You’ll gain experience with the most widely used and best libraries for web scraping in Python:</p>
          <div className="scrolling-row bottom-row">
            {bottomRowItems.map((item, index) => (
              <div className="scrolling-card" key={index}>
                <div className="card-badge">{item.title}</div>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Step-by-Step Process (static section) */}
        <div className="scrolling-section">
          <h2 className="gradient-heading">Step-by-Step Web Scraping Process for AI</h2>
          <div className="stepper-stairs">
            {stepper.map((step, i) => (
              <div
                className={`stepper-stair-card ${i % 2 === 0 ? "left" : "right"}`}
                key={i}
              >
                <div className="stepper-stair-content">
                  <div className="stepper-stair-number">{i + 1}</div>
                  <div className="stepper-stair-text">{step}</div>
                </div>
                {i < stepper.length - 1 && <div className="stepper-stair-connector"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Intern Cards Section */}

        <div className="scrolling-section">
          <h2 className="gradient-heading">What Makes INAI Worlds <br /> Internship Stand Out</h2>
          <div className="standout-features-grid">
            {standoutFeatures.map((f, i) => (
              <div className="standout-feature-card" key={i}>
                <span className="standout-feature-icon">{f.icon}</span>
                <span className="standout-feature-text">{f.text}</span>
              </div>
            ))}
          </div>
        </div>



        <div className="scrolling-section">
          {/* Right Column - Who Should Join */}
          <div className="audience-column">
            <h2 className="section-heading">Boost Your Career with Real-World Internship Experience</h2>
            <div className="audience-grid">
              {BoostYourCareer.map((item, index) => (
                <div className="contribution-card" key={index}>
                  <div className="audience-text">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className="real-data-section">
          <h2>
            Why Real Data &amp; Live Projects <span>Matter</span>
          </h2>
          <div className="real-data-stats-row">
            <div className="real-data-stat-v2">
              <div className="real-data-value">70%+</div>
              <div className="real-data-desc">of successful AI projects rely on updated datasets</div>
            </div>
            <div className="real-data-stat-v2">
              <div className="real-data-value">32%</div>
              <div className="real-data-desc">growth in web scraping skills demand in India</div>
            </div>
            <div className="real-data-stat-v2">
              <div className="real-data-value">50%+</div>
              <div className="real-data-desc">of future AI models will depend on third-party and scraped data</div>
            </div>

            <div className="real-data-stat-v2">
              <div className="real-data-value">28%</div>
              <div className="real-data-desc">rise in AI/Data Science job postings across India in 2024</div>
            </div>
          </div>
        </div>

        {/* <div className="cta-full-bg">
        <div className="cta-full-content">
          <h2 className="cta-heading">Ready to start?</h2>
          <h3 className="cta-subheading">Transform messy data into smarter AI.</h3>
          <p className="cta-supporting">
            Join our Data Manipulation in AI/ML Internship and build real skills in data manipulation for AI model building by working on live, real-world projects.
            Enroll now and become AI-ready!

          </p>
          <div className="cta-btn-row">
            <a href="#cta" className="cta-btn">Apply Now</a>
          </div>
        </div>
      </div> */}

      </div>
      <CTA_WEB />

      <div className="faq-full-width">
        <FAQ_Service />
      </div>
    </>
  );
};

export default Service1;