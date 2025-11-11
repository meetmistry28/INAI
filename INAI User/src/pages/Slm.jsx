import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cpu, Code, Projector, Server, MemoryStick, Power, FileInput, FileOutput, Code2Icon } from 'lucide-react';
import { GiCpu } from 'react-icons/gi';
import '../styles/plc.css';
import { PiDeviceMobileCamera } from 'react-icons/pi';

const Slm = () => {
    console.log('Small Language Model component is mounting');
    const navigate = useNavigate();

    React.useEffect(() => {
        console.log('Small Language Model component mounted');
        return () => console.log('Small Language Model component unmounting');
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
                    <h1>Small Language Model</h1>
                    <p className="subtitle">The Brain of AI/ML</p>
                </div>

                <div className="plc-content">
                    <section className="plc-overview">
                        <h2>What is Small Language Model?</h2>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            Small Language Models (SLMs) are compact and efficient versions of Large Language Models (LLMs), designed to deliver strong language understanding and generation capabilities using far fewer parameters — typically in the range of millions to a few billion.
                            Unlike massive LLMs that require powerful GPUs and cloud infrastructure, SLMs are optimized for lightweight deployment on everyday devices such as smartphones, tablets, laptops, and IoT systems. This makes artificial intelligence more accessible, affordable, and private, even in offline environments.</h5>

                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            SLMs are engineered through advanced optimization methods that balance performance with efficiency.
                            They rely on several techniques to reduce computational load while maintaining accuracy and fluency in understanding and generating natural language.
                        </h5>

                    </section>



                    <section className="python-ai-section">
                        <h2>Key Components of SLM</h2>

                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>1.Model Compression Techniques

                                </h3>

                                <ul>
                                    <li><strong>Pruning:</strong>Removes redundant parameters that have minimal impact on performance.
                                    </li>
                                    <li><strong>Quantization:</strong>  Reduces numerical precision (e.g., from 32-bit to 8-bit) to save memory and speed up inference.
                                    </li>
                                    <li><strong>Knowledge Distillation:</strong> Smaller “student” models learn from larger “teacher” models, inheriting their linguistic knowledge.</li>
                                    <li><strong>Low-Rank Factorization:</strong>Decomposes large weight matrices into smaller, efficient components.
                                    </li>
                                </ul>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Model Compression Techniques.webp" alt="Model Compression Techniques" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>2.Edge AI and On-Device Deployment

                                </h3>

                                <ul>
                                    <li>Designed to run locally on mobile and embedded systems.</li>
                                    <li>Enables full offline functionality without relying on cloud APIs.
                                    </li>
                                    <li>SReduces latency with immediate response times.
                                    </li>
                                    <li>Ensures user data stays private by avoiding transmission to remote servers.</li>
                                </ul>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Edge AI and On-Device Deployment.webp" alt="Edge AI and On-Device Deployment" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>3. Domain-Specific Optimization


                                </h3>
                                <ul>
                                    <li>Trained on focused, high-quality datasets for specialized tasks.
                                    </li>
                                    <li>Adaptable for industries such as healthcare, law, finance, or education.
                                    </li>
                                    <li>Delivers superior performance within targeted domains compared to general-purpose large models.</li>
                                </ul>
                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Domain-Specific Optimization.webp" alt="Domain-Specific Optimization" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>4.Efficient Architecture Design

                                </h3>
                                <ul>
                                    <li>Uses streamlined attention mechanisms and parameter-sharing strategies.</li>
                                    <li>Employs Mixture of Experts (MoE) to activate only relevant subnetworks during inference.</li>
                                    <li>Optimized for multi-task learning and reduced power consumption.</li>
                                    <li>Compatible with efficient inference engines for real-time performance.</li>
                                </ul>
                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Efficient Architecture Design.webp" alt="Efficient Architecture Design" />
                            </div>
                        </div>

                    </section>

                    <section className="importance-section">
                        <h2>Importance and Usefulness</h2>
                        <h3>Why SLM Matter
                        </h3>

                        <div className="importance-grid">
                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Cpu size={24} />
                                </div>
                                <h4> Efficiency and Accessibility</h4>
                                <p> SLMs require significantly less computational power, making AI accessible to organizations and developers without massive infrastructure. They can run on consumer-grade hardware, edge devices, and even smartphones, democratizing AI capabilities.

                                </p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Code size={24} />
                                </div>
                                <h4>Cost-Effectiveness</h4>
                                <p>Lower training and inference costs mean reduced expenses for deployment and operation. This makes AI applications economically viable for smaller businesses and enables cost-effective scaling.

                                </p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Projector size={24} />
                                </div>
                                <h4>Speed and Latency
                                </h4>
                                <p>Smaller models process requests faster, providing near-instantaneous responses crucial for real-time applications like voice assistants, robotics, and interactive systems.
                                </p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Projector size={24} />
                                </div>
                                <h4>Privacy and Security</h4>
                                <p>SLMs can operate entirely on-device without sending data to the cloud, addressing privacy concerns and enabling secure applications in healthcare, finance, and other sensitive domains.

                                </p>
                            </div>

                        </div>
                    </section>
                </div >

                <div className="career-footer">
                    <p>&copy; {new Date().getFullYear()} Career. All rights reserved.</p>
                </div>
            </div >

        </>
    );
};

export default Slm;