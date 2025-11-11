import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cpu, Code, Projector, Server, MemoryStick, Power, FileInput, FileOutput, Code2Icon } from 'lucide-react';
import { GiCpu } from 'react-icons/gi';
import '../styles/plc.css';
import { PiDeviceMobileCamera } from 'react-icons/pi';

const Mathematics = () => {
    console.log('Mathematics component is mounting');
    const navigate = useNavigate();

    React.useEffect(() => {
        console.log('Mathematics component mounted');
        return () => console.log('Mathematics component unmounting');
    }, []);

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <>
            <div className="plc-page">
                

                <div className="plc-header">
                    <div className="plc-icon">
                        <Cpu size={48} />
                    </div>
                    <h1>Mathematics for AI/ML</h1>
                    <p className="subtitle">The Brain of AI/ML</p>
                </div>

                <div className="plc-content">
                    <section className="plc-overview">
                        <h2>What is Mathematics?</h2>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            Mathematics and statistics are the backbone of Artificial Intelligence (AI) and Machine Learning (ML). They provide the logical framework, analytical tools, and theoretical understanding needed to design, train, and evaluate intelligent systems. Linear algebra powers data representation, calculus drives optimization and learning, probability manages uncertainty, and statistics ensures data-driven validation. A deep understanding of these subjects transforms a developer from simply using AI tools to truly mastering and innovating within the field.</h5>

                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            Mathematics and statistics form the core foundation of AI and ML, influencing every aspect of model design and performance. Understanding these areas allows engineers and data scientists to move beyond black-box implementations to create efficient, interpretable, and optimized systems.


                        </h5>
                    </section>



                    <section className="python-ai-section">
                        <h2>Key Points Explaining the Role of Mathematics & Statistics in AI/ML</h2>

                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>1.Mathematics as the Language of AI
                                </h3>
                                <ul>
                                    <li>Every AI model, from regression to neural networks, is fundamentally expressed in mathematical terms.</li>
                                    <li>Mathematical equations define how models process input data and optimize performance.</li>
                                </ul>
                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Mathematics as the Language of AI.webp" alt="Mathematics as the Language of AI" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>2.Bridging Theory and Implementation</h3>
                                <ul>
                                    <li>Math helps translate theoretical ideas into algorithms that computers can execute.
                                    </li>
                                    <li>Understanding gradients, optimization, and probability enables effective use of ML frameworks like TensorFlow and PyTorch.
                                    </li>

                                </ul>
                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Bridging Theory and Implementation.webp" alt="Bridging Theory and Implementation" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>3.Improved Interpretability and Debugging</h3>
                                <ul>
                                    <li>Mathematical literacy helps identify why a model behaves a certain way.</li>
                                    <li>Developers can troubleshoot overfitting, convergence issues, or numerical instability by analyzing mathematical properties.</li>

                                </ul>
                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Improved Interpretability and Debugging.webp" alt="Improved Interpretability and Debugging" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>4.Optimization and Model Learning</h3>
                                <ul>
                                    <li>Calculus and optimization theory describe how algorithms minimize loss functions to “learn” from data.</li>
                                    <li>Techniques such as gradient descent, momentum, and adaptive optimizers originate from mathematical concepts.</li>

                                </ul>
                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Optimization and Model Learning.webp" alt="Optimization and Model Learning" />
                            </div>
                        </div>
                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>5.Statistical Rigor and Model Validation</h3>
                                <ul>
                                    <li>Statistics ensures that AI/ML models are not only accurate but also reliable and generalizable.
                                    </li>
                                    <li>It provides tools for hypothesis testing, confidence intervals, and performance evaluation.</li>

                                </ul>
                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Statistical Rigor and Model Validation.webp" alt="Statistical Rigor and Model Validation" />
                            </div>
                        </div>
                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>6.The Foundation of Deep Learning</h3>
                                <ul>
                                    <li>Neural networks rely heavily on matrix operations (linear algebra) and gradient calculations (calculus).
                                    </li>
                                    <li>Understanding these principles clarifies how layers, activations, and backpropagation work.</li>
                                </ul>
                            </div>
                            <div className="zigzag-image">
                                <img src="/images/The Foundation of Deep Learning.webp" alt="The Foundation of Deep Learning" />
                            </div>
                        </div>
                    </section>

                    <section className="importance-section">
                        <h2>Importance and Usefulness</h2>
                        <h3>Why Mathematics & Statistics Matter</h3>

                        <div className="importance-grid">
                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Cpu size={24} />
                                </div>
                                <h4>Deep Understanding:</h4>
                                <p>Enables practitioners to move beyond using libraries to truly understanding models.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Code size={24} />
                                </div>
                                <h4>Better Model Selection:</h4>
                                <p>Choose algorithms that fit data properties and problem constraints.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Projector size={24} />
                                </div>
                                <h4>Effective Debugging:</h4>
                                <p> Identify learning issues through gradient flow and optimization analysis.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Server size={24} />
                                </div>
                                <h4>Innovation and Research:</h4>
                                <p>Design new models or architectures grounded in solid math.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <MemoryStick size={24} />
                                </div>
                                <h4>Optimization Mastery:</h4>
                                <p>Tune parameters and learning rates with mathematical reasoning.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <FileInput size={24} />
                                </div>
                                <h4>Rigorous Evaluation:</h4>
                                <p>Assess models statistically rather than relying solely on accuracy metrics.
                                </p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <FileOutput size={24} />
                                </div>
                                <h4>Enhanced Communication:</h4>
                                <p> Explain AI systems clearly to technical and non-technical stakeholders.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="career-footer">
                    <p>&copy; {new Date().getFullYear()} Career. All rights reserved.</p>
                </div>
            </div>

        </>
    );
};

export default Mathematics;