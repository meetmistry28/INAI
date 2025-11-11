import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cpu, Code, Projector, Server, MemoryStick, Power, FileInput, FileOutput, Code2Icon } from 'lucide-react';
import { GiCpu } from 'react-icons/gi';
import '../styles/plc.css';
import { PiDeviceMobileCamera } from 'react-icons/pi';

const Python = () => {
    console.log('Python component is mounting');
    const navigate = useNavigate();

    React.useEffect(() => {
        console.log('Python component mounted');
        return () => console.log('Python component unmounting');
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
                    <h1>Python Programming for AI/ML</h1>
                    <p className="subtitle">The Brain of AI/ML</p>
                </div>

                <div className="plc-content">
                    <section className="plc-overview">
                        <h2>What is Python Programming?</h2>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            Python stands as the backbone of Artificial Intelligence (AI) and Machine Learning (ML) development. Its clean syntax, readability, and rich ecosystem of libraries allow developers to work efficiently across all stages from data collection and preprocessing to model training and deployment. With its flexibility and extensive community support, Python has become the global standard for AI and ML professionals, enabling innovation at both research and industrial scales.</h5>

                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            Python’s dominance in AI and ML stems from its balance of simplicity and power. It allows both beginners and experts to implement complex ideas with minimal code. The language’s design philosophy emphasizes readability and rapid prototyping, making it ideal for experimentation and production.

                        </h5>
                    </section>



                    <section className="python-ai-section">
                        <h2>Key Components of Python for AI/ML</h2>

                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>1. Essential Python Libraries</h3>
                                <ul>
                                    <li><strong>NumPy:</strong> For efficient numerical and matrix operations.</li>
                                    <li><strong>Pandas:</strong> For handling, cleaning, and transforming structured data.</li>
                                    <li><strong>Matplotlib & Seaborn:</strong> For data visualization and trend analysis.</li>
                                    <li><strong>Scikit-learn:</strong> For traditional ML algorithms like regression, classification, and clustering.</li>
                                    <li><strong>TensorFlow & PyTorch:</strong> For developing and training deep neural networks.</li>
                                    <li><strong>NLTK & spaCy:</strong> For language processing and text analytics.</li>
                                </ul>
                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Essential Python Libraries.webp" alt="Essential Python Libraries" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>2. Data Preprocessing</h3>
                                <p>Python simplifies data preparation tasks through:</p>
                                <ul>
                                    <li>Cleaning and managing missing or inconsistent data</li>
                                    <li>Performing feature selection and transformation</li>
                                    <li>Standardizing and normalizing datasets</li>
                                    <li>Creating train-test splits and cross-validation</li>
                                    <li>Managing large or imbalanced datasets efficiently</li>
                                </ul>
                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Data Preprocessing.webp" alt="Data Preprocessing" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>3. Model Development</h3>
                                <p>Python enables efficient model development through:</p>
                                <ul>
                                    <li>Built-in ML algorithms and reusable templates</li>
                                    <li>Hyperparameter optimization and model validation</li>
                                    <li>Easy-to-use performance metrics</li>
                                    <li>Model serialization, saving, and deployment tools</li>
                                </ul>
                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Model Development.webp" alt="Model Development" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>4. OOP in ML</h3>
                                <p>OOP in Python supports modular ML architecture by enabling:</p>
                                <ul>
                                    <li>Reusable preprocessing and training pipelines</li>
                                    <li>Custom model classes and evaluation methods</li>
                                    <li>Scalable, maintainable code structures</li>
                                </ul>
                            </div>
                            <div className="zigzag-image">
                                <img src="/images/OOP.webp" alt="OOP in Machine Learning" />
                            </div>
                        </div>
                    </section>

                    <section className="importance-section">
                        <h2>Importance and Usefulness</h2>
                        <h3>Why Python Matters for AI/ML</h3>

                        <div className="importance-grid">
                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Cpu size={24} />
                                </div>
                                <h4>Industry Standard</h4>
                                <p>Used by over 70% of data scientists and ML engineers globally.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Code size={24} />
                                </div>
                                <h4>Rich Ecosystem</h4>
                                <p>Thousands of specialized libraries speed up innovation.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Projector size={24} />
                                </div>
                                <h4>Community Support</h4>
                                <p>Extensive documentation and peer help ensure smooth learning.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Server size={24} />
                                </div>
                                <h4>Rapid Prototyping</h4>
                                <p>Enables fast development cycles and experimentation.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <MemoryStick size={24} />
                                </div>
                                <h4>Scalability</h4>
                                <p>Suitable for both research prototypes and large-scale deployments.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <FileInput size={24} />
                                </div>
                                <h4>Integration Power</h4>
                                <p>Works with databases, APIs, and cloud environments.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <FileOutput size={24} />
                                </div>
                                <h4>Research to Production</h4>
                                <p>The same tools can be used across the entire AI lifecycle.</p>
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

export default Python;