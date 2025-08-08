import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './FAQ_Ser2.css';
import faqImage from '../assets/FAQ.png';

const faqData = [
    {
        question: '1. What is data manipulation in AI model building?',
        answer: "Data manipulation in AI model building involves cleaning, transforming, and organizing raw data to make it suitable for training. It enhances model accuracy and performance through steps like data cleaning, formatting, and feature engineering.",
    },
    {
        question: '2. Why is data manipulation important in AI?',
        answer: 'Because AI models rely on data quality as much as on algorithms. Without proper data preprocessing in Python or handling missing, inconsistent, and noisy data, even the best models won’t perform well in real-world applications. That’s why top innovators like INAI Worlds — recognized as the best AI company prioritize structured data pipelines in every AI system we build.',
    },
    {
        question: '3. What do I learn in the Data Manipulation in AI/ML internship?',
        answer: 'In our data manipulation in AI/ML internship, you get hands-on data cleaning internship experience. You’ll learn Python data manipulation internship techniques, build practical data pipelines internship projects, and practice structured data prep for AI models across real datasets like text, images, and logs.',
    },
    {
        question: '4. Do I need coding experience to join?',
        answer: 'Basic Python knowledge helps, but our program is designed to guide you from fundamentals to real-world data engineering in AI/ML internship skills, including Pandas, NumPy, and other industry-standard tools.',
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

const FAQ_Ser2 = () => {
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

export default FAQ_Ser2; 