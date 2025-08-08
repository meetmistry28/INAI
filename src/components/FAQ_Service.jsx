import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './FAQ.css';
import faqImage from '../assets/FAQ.png';

const faqData = [
    {
        question: '1. Is web scraping legal?',
        answer: "Yes when done ethically. Our internship teaches legal, safe, and responsible scraping practices aligned with industry standards.",
    },
    {
        question: '2. Will I work on actual projects?',
        answer: 'Absolutely. Every intern writes real scripts, scrapes real data, and integrates it into machine learning models.',
    },
    {
        question: '3. Which tools will I learn?',
        answer: 'You’ll work with industry-standard scraping libraries: BeautifulSoup, Selenium, Scrapy, the best libraries for web scraping in Python.',
    },
    {
        question: '4. Ready to Build Smarter AI with Real Data?',
        answer: 'Don’t just learn about AI, experience it. Join INAI Worlds for a truly hands-on internship in AI/ML with web scraping.',
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

const FAQ_Service = () => {
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

export default FAQ_Service; 