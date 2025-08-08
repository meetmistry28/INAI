import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './FAQ.css';
import faqImage from '../assets/FAQ.png';

const faqData = [
  {
    question: '1. What is INAI Worlds, and what do you specialize in?',
    answer: "INAI Worlds is a leading Best AI company, specializing in real-world AI development, generative AI solutions, and machine learning hands-on training that equip students and businesses with industry-ready skills and intelligent technologies.",
  },
  {
    question: '2. Where is INAI World Pvt. Ltd. located?',
    answer: 'INAI World Pvt. Ltd is located in Surat, Gujarat. We offer our offline AI/ML internship with live projects at our Surat campus, providing hands-on training, real datasets, and industry-standard tools in a tech-driven environment.',
  },
  {
    question: '3. Why is INAI Worlds considered one of the Best AI Company?',
    answer: 'INAI Worlds is recognized as one of the best AI company for its innovative AI solutions, real-world product development, and industry-focused internship programs that prepare learners for successful careers in artificial intelligence.',
  },
  {
    question: '4. Do you provide job placement after the completion of internship?',
    answer: 'Yes, we offer job placement support after completing an internship. Based on performance, interns may receive direct placement opportunities within our own company, INAI World Pvt. Ltd, to kickstart their AI careers.',
  },
  {
    question: '5. Are you worried about your job?',
    answer: 'At INAI Worlds, our AI/ML internship trains you for real-world roles. After completing the internship, we offer job opportunities within our company to top performers. Start building your future with us today.',
  },
];

const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="faq-item">
      <div className="faq-question-wrapper" onClick={onClick}>
        <h3 className="faq-question-text">{item.question}</h3>
        <div className="faq-icon">{isOpen ? <FiMinus /> : <FiPlus />}</div>
      </div>
      {isOpen && (
        <div className="faq-answer">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* LEFT SIDE - IMAGE */}
        <div className="faq-left">
          <img src={faqImage} alt="FAQ Illustration" className="faq-image" />
        </div>

        {/* RIGHT SIDE - FEATURE BLOCKS */}
        <div className="faq-right">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-feature-list">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => handleItemClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 