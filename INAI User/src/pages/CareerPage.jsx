import React from 'react';
import { motion } from 'framer-motion';
import { VscLightbulbSparkle, VscCode, VscRocket, VscGraphLine } from 'react-icons/vsc';
import { BiSolidLeaf, BiBrain, BiCodeAlt } from 'react-icons/bi';
import { FaRobot, FaLaptopCode } from 'react-icons/fa';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { LuBrainCircuit } from 'react-icons/lu';
import '../styles/CareerPage.css';
import aiMlImage from '../assets/02.png';

const CareerPage = () => {
    const benefits = [
        {
            icon: <VscLightbulbSparkle className="benefit-icon" />,
            title: "Future-Ready Skills",
            description: "Master cutting-edge technologies that are shaping the future of every industry.",
            color: "#6366f1"
        },
        {
            icon: <BiSolidLeaf className="benefit-icon" />,
            title: "Global Impact",
            description: "Solve real-world challenges and create solutions with worldwide significance.",
            color: "#10b981"
        },
        {
            icon: <VscRocket className="benefit-icon" />,
            title: "High Demand",
            description: "Join one of the fastest-growing and highest-paying career paths in tech.",
            color: "#f59e0b"
        },
        {
            icon: <BiBrain className="benefit-icon" />,
            title: "Endless Possibilities",
            description: "From healthcare to finance, AI/ML is revolutionizing every sector.",
            color: "#ec4899"
        }
    ];

    const careerPaths = [
        {
            title: "AI Research Scientist",
            description: "Push the boundaries of AI through innovative research and development.",
            icon: <GiArtificialIntelligence className="career-icon" />
        },
        {
            title: "Machine Learning Engineer",
            description: "Build and deploy scalable machine learning models and systems.",
            icon: <LuBrainCircuit className="career-icon" />
        },
        {
            title: "Data Scientist",
            description: "Extract insights and build data-driven solutions for complex problems.",
            icon: <VscGraphLine className="career-icon" />
        },
        {
            title: "AI Software Developer",
            description: "Create intelligent applications that leverage AI/ML capabilities.",
            icon: <FaLaptopCode className="career-icon" />
        }
    ];

    return (
        <div className="career-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-title"
                    >
                        Shape the Future with <span className="gradient-text">AI/ML</span>
                    </motion.h1>
                    <motion.p 
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Join the revolution in artificial intelligence and machine learning. 
                        Build intelligent systems that transform industries and improve lives.
                    </motion.p>
                    <motion.div 
                        className="cta-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <button className="primary-button">Explore Careers</button>
                        <button className="secondary-button">Learn More</button>
                    </motion.div>
                </div>
                <div className="hero-image">
                    <img src={aiMlImage} alt="AI/ML Career" />
                </div>
            </section>

            {/* Why AI/ML Section */}
            <section className="why-aiml-section">
                <div className="section-header">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        Why Choose <span className="gradient-text">AI/ML</span>?
                    </motion.h2>
                    <motion.p 
                        className="section-description"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.2 }}
                    >
                        Artificial Intelligence and Machine Learning are transforming industries and creating 
                        new possibilities across the globe.
                    </motion.p>
                </div>

                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <motion.div 
                            key={index}
                            className="benefit-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="benefit-icon-container" style={{ backgroundColor: `${benefit.color}20` }}>
                                {benefit.icon}
                            </div>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Career Paths Section */}
            <section className="career-paths-section">
                <div className="section-header">
                    <motion.h2 
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Explore <span className="gradient-text">Career Paths</span>
                    </motion.h2>
                </div>

                <div className="career-paths-grid">
                    {careerPaths.map((path, index) => (
                        <motion.div 
                            key={index}
                            className="career-path-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                        >
                            <div className="career-icon-container">
                                {path.icon}
                            </div>
                            <h3>{path.title}</h3>
                            <p>{path.description}</p>
                            <button className="learn-more-button">Learn More →</button>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <motion.div 
                    className="cta-content"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>Ready to Start Your AI/ML Journey?</h2>
                    <p>Join thousands of professionals building the future with artificial intelligence.</p>
                    <button className="cta-button">Get Started Today</button>
                </motion.div>
            </section>
        </div>
    );
};

export default CareerPage;
