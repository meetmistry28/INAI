import React, { useState } from 'react';
// import FAQ_Ser3 from '../components/FAQ_Ser3';
import serviceImg from '../assets/AI_Model_Training_The_Power_Core_of_Modern AI.png';
import './Model_training.css';
import './Web_scraping.css';
import './Data_manipulation.css';

import UpcomingProjectsSection1 from '../components/UpcomingProjectsSection1';
import FAQ_Ser3 from './FAQ_Ser3';

const Service3 = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Data for sections
  const whyMatters = [
    "Transform raw data into meaningful, structured knowledge",
    "Train AI models to recognize patterns and make decisions",
    "Test, refine, and improve models to work in the real world",
    " Avoid bias and make fair AI"
  ];

  const contributions = [
    "Generative AI chatbots that respond intelligently",
    "Recommendation systems that learn your preferences",
    "Predictive analytics tools for business decisions",
    "AI content generators that write and create"
  ];

  const internshipSteps = [
    {
      step: "You’ll scrape real data from the web using Python tools",
      // tools: "BeautifulSoup, Selenium, Scrapy",
      // desc: "Scrape real data from the web using Python tools"
    },
    {
      step: " Clean and prepare this data",
      // tools: "Pandas & NumPy",
      // desc: "Clean and prepare this data for model training"
    },
    {
      step: "Train models using TensorFlow, PyTorch, Kera",
      // tools: "TensorFlow, PyTorch, Keras",
      // desc: "Train models to generate text, predict outcomes, or see patterns"
    },
    {
      step: "Fine-tune models so they generate text, predict outcomes, or see patterns",
      // tools: "Hugging Face",
      // desc: "Fine-tune models for better performance"
    },
    {
      step: " Deploy your models into apps",
      // tools: "Streamlit, Gradio",
      // desc: "Deploy your models into real-world applications"
    }
  ];

  const projects = [
    {
      name: "INAI Virtual Model",
      desc: "AI avatars trained to interact naturally"
    },
    {
      name: "Influwket",
      desc: "Social AI that personalizes feeds using model predictions"
    },
    {
      name: "Offiket",
      desc: "AI predicting real estate trends and connecting buyers & sellers"
    },
    {
      name: "Veedket",
      desc: "AI-driven video recommendations and text generation"
    }
  ];

  const careerBenefits = [
    "Real skill employers want: 70% of AI teams say model training & data prep is the most important skill",
    "Better results: AI trained on clean, structured data performs 40–60% better",
    "Transferable skill: Once you master training, you can build anything chatbots, NLP models, or vision systems",
    "Proof you can build: Your portfolio shows not only you know AI you can create it."
  ];

  const whoShouldJoin = [
    "Students after 12th who want to start AI early",
    "Beginners in coding or Python who want real AI projects",
    "Data science enthusiasts wanting practical AI model building skills",
    "Career changers ready to build modern AI apps"
  ];

  const whyChoose = [
    "Project-first learning: Build real AI modules, not just theory",
    "Built by practitioners: Learn directly from AI engineers & data scientists",
    "Full-cycle: From data scraping to deployment understand the entire AI workflow",
  ];

  const faqs = [
    {
      q: "What will I actually build in the AI model training program?",
      a: "You'll build real AI modules and projects: chatbots, text generators, sentiment analyzers, image classifiers, and recommendation engines using live data, not just demo datasets."
    },
    {
      q: "Why is data cleaning so important before AI model training?",
      a: "Because clean, structured data is what makes AI models accurate and reliable. Poor data leads to unpredictable, biased, or low-performing AI systems. That's why our internship teaches data-driven AI training starting from data collection to cleaning."
    },
    {
      q: "What makes this different from online AI tutorials?",
      a: "We don't just teach concepts we teach how to build, train, and deploy real AI models. You'll work with real-world data, use production-level tools (TensorFlow, Hugging Face, Pandas), and get expert feedback from AI engineers."
    },
    {
      q: "Do I need to know advanced math or coding?",
      a: "No. We start from basics, and you learn through practical AI projects. Knowing basic Python helps, but we guide beginners step by step."
    },
    {
      q: "How does AI model training help my career?",
      a: "Employers want proof you can build AI not just certificates. By the end of the program, you'll have a portfolio of AI projects showing real skills in model training, deployment, and data manipulation exactly what hiring managers look for."
    },
    {
      q: "What tools and libraries will I learn?",
      a: "You'll learn industry-standard tools: Python, Pandas, NumPy, TensorFlow, Keras, PyTorch, Hugging Face, Scikit-learn, plus deployment tools like Streamlit and Gradio."
    },
    {
      q: "Can I join after 12th grade or as a beginner?",
      a: "Yes! Many of our interns join right after 12th, or as beginners in coding. Our step-by-step, project-focused training makes it beginner-friendly while still building expert-level practical skills."
    },
    {
      q: "Will I work with generative AI and LLMs?",
      a: "Yes you'll build generative AI projects: text generation, summarization, basic chatbots using libraries like Hugging Face and transformer models."
    }
  ];

  return (
    <>

      <div className="service-detail-page model-training-page">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 sec_com">
          {/* Left: Content */}
          <div className="w-full md:w-1/2 sec_con web_scrap_per">
            <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-purple-500 text-white inline-block px-5 py-2 rounded-full shadow web_scrap_title">
              <p>AI Model Training: </p>
              <span>The Power Core of Modern AI</span>
            </h1>
            <br />
            <p className="scrap_text leading-relaxed mb-4">
              At INAI Worlds, we do more than teach AI. We help you create it from scratch.
              Through our AI model training pathway and Generative AI internship, you’ll experience the real power of AI: turning messy data into smart, working AI modules.

              <br />
              <br />

              INAI Worlds is proud to be recognized as the best AI company where AI model training is at the core of every innovation we build.
            </p>
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



        {/* Why Model Training Matters */}
        <div className="section-container">
          <h2 className="section-heading">Why Model Training Matters</h2>

          <div className="analogy-container">
            <div className="analogy-card">
              <div className="analogy-header">
                <span className="analogy-emoji" role="img" aria-label="brain">🧠</span>
                <h3>Think of AI as a brain</h3>
              </div>
              <div className="analogy-content">
                <div className="analogy-item">
                  <div className="analogy-text">Data is its knowledge</div>
                </div>
                <div className="analogy-item">
                  <div className="analogy-text">Algorithms are its thinking rules</div>
                </div>
                <div className="analogy-item">
                  <div className="analogy-text">Model training is the process of making the AI actually learn</div>
                </div>
              </div>
              <div className="analogy-footer">
                <p>Without training, your AI can't answer questions, generate text, recognize images, or predict outcomes.</p>
              </div>
            </div>
          </div>

          <div className="whyMatter-grid">
            {whyMatters.map((item, index) => (
              <div className="contribution-card" key={index}>
                <div className="contribution-bullet"></div>
                <div className="contribution-text">{item}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Real Contribution */}
        <div className="section-container contribution-section">
          <h2 className="section-heading">From Data to AI Modules</h2>
          <p className="section-intro">
            Model training isn't just a step it's the engine that powers:
          </p>
          <div className="contribution-grid">
            {contributions.map((item, index) => (
              <div className="contribution-card" key={index}>
                <div className="contribution-bullet"></div>
                <div className="contribution-text">{item}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="features-cards why-web">
          <h2>As a top AI company in Gujarat, we ensure our model training aligns with industry demands and real-world applications.</h2>
        </div>

        {/* Internship Section */}
        <div className="section-container internship-section">
          <h2 className="section-heading">Our Generative AI Internship: <br /> Learn by Building</h2>
          <p className="section-intro">
            Our Generative AI internship is built around real-world AI model development:
          </p>

          <div className="timeline">
            {internshipSteps.map((step, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-marker">{index + 1}</div>
                <div className="timeline-content">
                  <div className="card">
                    <h3 className="card-title">{step.step}</h3>
                    {/* <div className="card-tools">{step.tools}</div> */}
                    <p className="card-desc">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="features-cards why-web">
          <h2>Want to get hands-on with real-world AI model development? Explore our <a href="/pages/aiml-internship-in-surat" style={{ color: "skyblue" }}>AI/ML internship in Surat</a> that’s designed around production-level AI training.</h2>
        </div>
      </div>
      {/* Projects Section */}
      <div className="section-container projects-section">
        <h2 className="section-heading">Our In-House Projects</h2>
        <p className="section-intro">
          We don't stop at teaching we build AI modules in-house, and you learn how:
        </p>
        <UpcomingProjectsSection1 />
      </div>

      <div className="service-detail-page model-training-page">
        {/* Career Benefits */}
        <section className="career-section">
          <h2 className="section-heading">Why Model Training is the Career Game-Changer ?</h2>
          <div className="benefits-grid">
            {careerBenefits.map((benefit, index) => {
              const icons = [
                '🚀', '💡', '📈', '🌏', '🤖', '🎯', '💼', '🌟'
              ];
              return (
                <div className="benefit-card" key={index}>
                  <div className="benefit-icon">{icons[index % icons.length]}</div>
                  <p className="benefit-text">{benefit}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Combined Section */}
        {/* <div className="combined-section"> */}
        <div className="combined-container">
          {/* Left Column - What You'll Use & Master */}
          <div className="tech-stack-column">
            <h2 className="section-heading">What You'll Use & Master</h2>
            <div className="tech-category">
              <ul className="tech-list">
                <li className="contribution-card" style={{ margin: '15px 0px' }}><span></span> Transformers</li>
                <li className="contribution-card" style={{ margin: '15px 0px' }}><span></span> Huggingface</li>
                <li className="contribution-card" style={{ margin: '15px 0px' }}><span></span> Keras</li>
                <li className="contribution-card" style={{ margin: '15px 0px' }}><span></span> PyTorch</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Who Should Join */}
          <div className="audience-column">
            <h2 className="section-heading">Who Should Join?</h2>
            <div className="audience-grid">
              {whoShouldJoin.map((item, index) => (
                <div className="contribution-card" key={index}>
                  {/* <div className="audience-bullet">●</div> */}
                  <div className="audience-text">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* </div> */}
        <div className="features-cards why-web">
          <h2>Before you train your model, mastering data manipulation techniques using Pandas and NumPy is essential for real-world AI performance.</h2>
        </div>

        {/* Why Choose INAI */}
        <section className="why-choose-section">
          <h2 className="section-heading">Why Choose INAI Worlds?</h2>
          <div className="reasons-grid">
            {whyChoose.map((reason, index) => {
              const icons = [
                '🚀', '💡', '🎯', '🤝', '🌐', '⚡'
              ];
              return (
                <div className="reason-card" key={index}>
                  <div className="reason-icon">{icons[index % icons.length]}</div>
                  <p className="reason-text">{reason}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <div className="cta-full-bg">
          <div className="cta-full-content">
            <h2 className="cta-heading">Ready to build AI that works?
            </h2>
            <p className="cta-supporting">
              Join our Generative AI internship or Machine Learning internship and master AI model training <br /> by creating projects you can actually show.
            </p>
            <div className="cta-btn-row">
              <a href="/contact" className="cta-btn">Start Your AI Journey</a>
            </div>
          </div>
        </div>

        <div className="faq-full-width">
          <FAQ_Ser3 className="container" />
        </div>
      </div>
    </>
  );
};

export default Service3;

{/* */ }