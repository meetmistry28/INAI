import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './FAQ_Ser3.css';
import faqImage from '../assets/FAQ.png';

const faqData = [
    {
        question: '1. What will I actually build in the AI model training program?',
        answer: "You'll build real AI modules and projects: chatbots, text generators, sentiment analyzers, image classifiers, and recommendation engines using live data, not just demo datasets.",
    },
    {
        question: '2. Why is data manipulation important in AI?',
        answer: 'Because clean, structured data is what makes AI models accurate and reliable. Poor data leads to unpredictable, biased, or low-performing AI systems. That’s why our internship teaches data-driven AI training starting from data collection to cleaning.',
    },
    {
        question: '3. What makes this different from online AI tutorials?',
        answer: 'We don’t just teach concepts we teach how to build, train, and deploy real AI models. You’ll work with real-world data, use production-level tools (TensorFlow, Hugging Face, Pandas), and get expert feedback from AI engineers.',
    },
    {
        question: '4. How does AI model training help my career?',
        answer: 'Employers want proof you can build AI not just certificates. By the end of the program, you’ll have a portfolio of AI projects showing real skills in model training, deployment, and data manipulation exactly what hiring managers look for.',
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

const FAQ_Ser3 = () => {
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

export default FAQ_Ser3; 