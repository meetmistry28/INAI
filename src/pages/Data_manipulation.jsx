import React, { useState } from 'react';
import FAQ_Ser2 from './FAQ_Ser2.jsx';
import serviceImg from '../assets/Data_Manipulation_in_AI_Model_Building_&_AI-ML_Internships.png';
import './Data_manipulation.css';
import './Services.css';
import './Web_scraping.css';


const Service2 = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Icons for essentials
  const essentialIcons = {
    feature: '🔧',
    noise: '🧹',
    format: '📊',
    bias: '⚖️',
    automation: '🤖',
    Domain: '🧠'
  };

  // Data for sections
  const essentials = [
    {
      title: "Feature Engineering",
      description: "Creating variables that truly influence predictions",
      icon: essentialIcons.feature
    },
    {
      title: "Noise Reduction",
      description: "Removing duplicates or irrelevant data that can confuse models",
      icon: essentialIcons.noise
    },
    {
      title: "Data Formatting",
      description: "Structuring data for different ML models or deep learning frameworks",
      icon: essentialIcons.format
    },
    {
      title: "Bias Handling",
      description: "Balancing datasets so your AI doesn't learn unfair patterns",
      icon: essentialIcons.bias
    },
    {
      title: "Automation",
      description: "Building pipelines to keep data updated for retraining",
      icon: essentialIcons.automation
    },
    {
      title: "Domain Fit",
      description: "Shaping data to match the specific context or industry needs.",
      icon: essentialIcons.Domain
    }
  ];

  const learnByDoing = [
    "Work on raw real-world datasets, not just demos",
    "Learn Python data manipulation techniques with Pandas & NumPy",
    "Build practical data pipelines ",
    "Practice structured data prep for AI models",
    "Understand full AI workflows: from raw data to deployment"
  ];

  const toolIcons = {
    pandas: '🐼',
    numpy: '🧮',
    sklearn: '🔍',
    opencv: '📷',
    nlp: '🔤',
    sql: '☁️',

  };

  const tools = [
    {
      name: "Pandas",
      desc: "Filtering, reshaping, grouping, and merging data",
      icon: toolIcons.pandas
    },
    {
      name: "NumPy",
      desc: "Fast numerical operations and matrix handling",
      icon: toolIcons.numpy
    },
    {
      name: "Scikit-learn",
      desc: "Data scaling, encoding, and preprocessing",
      icon: toolIcons.sklearn
    },
    {
      name: "OpenCV",
      desc: "Preparing and cleaning image data",
      icon: toolIcons.opencv
    },
    {
      name: "Regex & NLP",
      desc: "Structuring and cleaning text data",
      icon: toolIcons.nlp
    },
    {
      name: "SQL",
      desc: "Querying and managing structured data from databases efficiently.",
      icon: toolIcons.sql
    }
  ];


  const contributions = [
    {
      text: "Create reusable, automated data pipelines & Design robust AI modules",
      icon: '⚙️'
    },
    {
      text: "Reduce errors caused by outliers, missing values, and duplicate records",
      icon: '📉'
    },
    {
      text: "Speed up retraining by keeping data well-organized",
      icon: '⚡'
    },
    {
      text: "Make models more explainable by selecting relevant features",
      icon: '🔍'
    }
  ];

  const whyLearn = [
    "Project-based learning: Work with real, messy datasets",
    "Mentorship: Learn from data scientists and AI engineers",
    "Diverse industry exposure: Finance, healthcare, retail, and more",
    "Portfolio: Build a verified collection of real AI data projects",
    "Job-ready: Focus on practical skills, not just theory"
  ];

  const BoostYourCareer = [
    "Project-based learning: Work with real, messy datasets",
    "Mentorship: Learn from data scientists and AI engineers",
    "Diverse industry exposure: Finance, healthcare, retail, and more",
    "Portfolio: Build a verified collection of real AI data projects",
    "Job-ready: Focus on practical skills, not just theory"
  ];

  const faqs = [
    {
      q: "1.	What is data manipulation in AI model building?",
      a: "Data manipulation in AI model building is the process of cleaning, transforming, and structuring raw data so that AI algorithms can learn effectively. It includes data cleaning for machine learning, formatting, feature engineering, and real-world data processing that directly improve model accuracy and performance."
    },
    {
      q: "Why is data manipulation important in AI?",
      a: "Because AI models rely on data quality as much as on algorithms. Without proper data preprocessing in Python or handling missing, inconsistent, and noisy data, even the best models won't perform well in real-world applications."
    },
    {
      q: "What do I learn in the Data Manipulation in AI/ML internship?",
      a: "In our data manipulation in AI/ML internship, you get hands-on data cleaning internship experience. You'll learn Python data manipulation internship techniques, build practical data pipelines internship projects, and practice structured data prep for AI models across real datasets like text, images, and logs."
    },
    {
      q: "Do I need coding experience to join?",
      a: "Basic Python knowledge helps, but our program is designed to guide you from fundamentals to real-world data engineering in AI/ML internship skills, including Pandas, NumPy, and other industry-standard tools."
    },
    {
      q: "What tools will I use for data preprocessing?",
      a: "You'll work with popular Python libraries like Pandas, NumPy, Scikit-learn, OpenCV, and NLP tools. These tools make data preprocessing in Python faster and help build structured data prep for AI models efficiently."
    },
    {
      q: "How does data manipulation help in AI module building?",
      a: "It turns messy, raw data into clean, structured, and usable datasets. This directly improves training speed, accuracy, and makes your AI modules more robust to real-world data challenges."
    },
    {
      q: "Will I work on real data or only demo projects?",
      a: "You'll work on real-world data processing challenges, from unstructured customer feedback to IoT logs, building practical data pipelines internship projects that reflect real industry tasks."
    }
  ];

  return (
    <>

      <div className="service-detail-page datamanipulation-page">


        {/* Hero Section */}
        <div className="service-hero">

          <div className="flex flex-col md:flex-row items-center gap-8 sec_com">
            {/* Left: Content */}
            <div className="w-full md:w-1/2 sec_con web_scrap_per">
              <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-purple-500 text-white inline-block px-5 py-2 rounded-full shadow web_scrap_title">
                <p>Data Manipulation </p>
                <span>in AI Model Building Internship with Python</span>
              </h1>
              <br />
              <p className="service-subtitle">
                At INAI Worlds, we know that data manipulation in AI model building is the foundation of every powerful AI system. From cleaning to transformation, this process ensures models learn from high-quality data, leading to:
              </p>
              <div className="impact-grid">
                <div className="impact-card"> Model accuracy and precision</div>
                <div className="impact-card"> Training speed and efficiency</div>
                <div className="impact-card"> Generalization to real-world scenarios</div>
                <div className="impact-card"> Scalability and future updates</div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-1/2">
              <img
                src={serviceImg}
                alt="Web Scraping"
                className="w-full h-auto max-h-[400px] md:max-h-[500px] object-contain rounded-2xl shadow-md web_img"
              />
            </div>
          </div>

        </div>

        {/* Why Essential Section */}
        <div className="section-container">
          <h2 className="section-heading">Why Data Manipulation Is Essential in AI Module Building</h2>
          <p className="section-intro">
            Data manipulation in AI model building isn't just about making data look neat — it shapes what your AI can actually learn.
          </p>
          <div className="essentials-grid">
            {essentials.map((item, index) => (
              <div className="essentials-card" key={index}>
                <h3 className="essentials-title">
                  <span className="essentials-icon">{item.icon}</span>
                  {item.title}
                </h3>
                <p className="essentials-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Learn By Doing Section */}
        <div className="section-container learn-by-doing">
          <h2 className="section-heading">Data Manipulation in AI/ML Internship: Learn by Doing</h2>
          <p className="section-intro">
            At INAI Worlds, we combine industry-focused training with a hands-on data cleaning internship.
          </p>
          <div className="timeline">
            {learnByDoing.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-marker">{index + 1}</div>
                <div className="timeline-content">
                  <div className="card">
                    <div className="card-icon"></div>
                    <div className="card-content">{item}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="section-container">
          <h2 className="section-heading">Tools & Techniques You'll Master</h2>
          <p className="section-intro">
            Master the essential tools and libraries used in data manipulation and AI model building.
          </p>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div className="tool-card" key={index}>
                <div className="tool-content">
                  <span className="tool-icon">{tool.icon}</span>
                  <h3 className="tool-name">{tool.name}</h3>
                  <p className="tool-desc">{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contributions Section */}
        <div className="section-container">
          <h2 className="section-heading">What You'll Contribute</h2>
          <p className="section-intro">
            Make a real impact by applying your data manipulation skills to solve meaningful problems.
          </p>
          <div className="contributions-grid">
            {contributions.map((item, index) => (
              <div className="contribution-card" key={index}>
                <div className="contribution-content">
                  <span className="contribution-icon">{item.icon}</span>
                  <p className="contribution-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="features-cards why-web">
          <h2> <a href="/services/web-scraping" style={{ color: "skyblue" }}>Web scraping</a> and preprocessing are vital for better <a href="/services/data-manipulation" style={{ color: "skyblue" }}> AI model training</a>, feeding your algorithms with high-quality structured data for higher performance.</h2>
        </div>

        {/* Why Learn Section */}

        <div className="scrolling-section">
          {/* Right Column - Who Should Join */}
          <div className="audience-column">
            <h2 className="section-heading">Why Learn With INAI Worlds . . .</h2>
            <div className="audience-grid">
              {BoostYourCareer.map((item, index) => (
                <div className="contribution-card" key={index}>
                  <div className="audience-text">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="features-cards why-web ">
          <h2>Our web scraping and data automation are part of what makes INAI Worlds a best AI company in Gujarat, enabling fast and ethical AI development for local startups and enterprises.</h2>
        </div>

        {/* CTA Section */}
        <div className="cta-full-bg">
          <div className="cta-full-content">
            <h2 className="cta-heading">Ready to start?</h2>
            <h3 className="cta-subheading">Transform messy data into smarter AI.</h3>
            <p className="cta-supporting">
              Join our Data Manipulation in AI/ML Internship and build real skills in data manipulation for  AI model <br /> building by working on live, real-world projects.
            </p>
            <div className="cta-btn-row">
              <a href="/contact" className="cta-btn">Apply Now</a>
            </div>
          </div>
        </div>

        <div className="faq-full-width">
          <FAQ_Ser2 className="container" />
        </div>
      </div>

    </>
  );
};


export default Service2;
