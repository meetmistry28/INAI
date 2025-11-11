import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cpu, Code, Projector, Server, MemoryStick, Power, FileInput, FileOutput, Code2Icon } from 'lucide-react';
import { GiCpu } from 'react-icons/gi';
import '../styles/plc.css';
import { PiDeviceMobileCamera } from 'react-icons/pi';

const Ml = () => {
    console.log('Machine Learning component is mounting');
    const navigate = useNavigate();

    React.useEffect(() => {
        console.log('Machine Learning component mounted');
        return () => console.log('Machine Learning component unmounting');
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
                    <h1>Machine Learning</h1>
                    <p className="subtitle">The Brain of AI/ML</p>
                </div>

                <div className="plc-content">
                    <section className="plc-overview">
                        <h2>What is Machine Learning?</h2>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            Machine Learning (ML) is a branch of artificial intelligence that enables computers to learn from data and improve their performance on tasks without being explicitly programmed. Instead of following rigid instructions, ML systems identify patterns, make predictions, and adapt their behavior based on experience, much like humans learn from observation and practice.
                        </h5>

                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            Machine Learning is a transformative technology that has revolutionized how computers solve complex problems. At its core, ML involves training algorithms on large datasets to recognize patterns, make decisions, and generate predictions. Unlike traditional programming where developers write specific rules for every scenario, machine learning systems automatically discover the underlying structure in data and create their own rules.




                        </h5>

                    </section>



                    <section className="python-ai-section">
                        <h2>Key Components of Machine Learning in AI/ML</h2>

                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>1.Supervised Learning
                                </h3>
                                <p>
                                    In supervised learning, algorithms learn from labeled training data where each example includes both input features and the correct output. The system learns to map inputs to outputs by identifying patterns in the labeled examples. This approach is ideal when you have historical data with known outcomes.
                                </p>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Supervised Learning.webp" alt="Supervised Learning" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>2.Unsupervised Learning

                                </h3>
                                <p>
                                    Unsupervised learning works with unlabeled data, where the algorithm must discover hidden patterns or structures without predefined categories. It's particularly useful for exploratory data analysis and discovering unknown groupings in data.
                                    Common algorithms: K-Means Clustering, Hierarchical Clustering, Principal Component Analysis (PCA), Association Rules


                                </p>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Unsupervised Learning.webp" alt="Unsupervised Learning" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>3. Reinforcement Learning</h3>
                                <p>
                                    This approach involves training agents to make sequences of decisions by rewarding desired behaviors and punishing undesired ones. The agent learns optimal strategies through trial and error, making it perfect for dynamic environments.
                                    Common algorithms: Q-Learning, Deep Q-Networks (DQN), Policy Gradients, Actor-Critic Methods.
                                </p>
                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Reinforcement Learning.webp" alt="Reinforcement Learning" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>4.Deep Learning</h3>
                                <p>A subset of machine learning using artificial neural networks with multiple layers. Deep learning excels at processing complex, high-dimensional data like images, audio, and text, automatically extracting hierarchical features.
                                    Common architectures: Convolutional Neural Networks (CNNs), Recurrent Neural Networks (RNNs), Transformers, Autoencoders

                                </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Deep Learning.webp" alt="Deep Learning" />
                            </div>
                        </div>
                    </section>

                    <section className="importance-section">
                        <h2>Importance and Usefulness</h2>
                        <h3>Why Machine Learning Matters
                        </h3>

                        <div className="importance-grid">
                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Cpu size={24} />
                                </div>
                                <h4> Automation of Complex Tasks:</h4>
                                <p> ML automates decisions that previously required human expertise, from credit scoring to medical diagnosis, freeing professionals to focus on higher-level analysis and strategy.

                                </p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Code size={24} />
                                </div>
                                <h4>Handling Big Data:</h4>
                                <p>In the era of massive data generation, ML algorithms can process and extract insights from datasets too large and complex for traditional analysis methods.
                                </p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Projector size={24} />
                                </div>
                                <h4>Continuous Improvement:</h4>
                                <p> Unlike static programs, ML systems improve over time as they're exposed to more data, adapting to changing patterns and new scenarios automatically.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Server size={24} />
                                </div>
                                <h4>Pattern Recognition Beyond Human Capability:</h4>
                                <p>ML can identify subtle patterns across millions of variables that humans would never detect, leading to breakthroughs in fields like drug discovery and climate modeling.
                                </p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <MemoryStick size={24} />
                                </div>
                                <h4>Personalization at Scale:</h4>
                                <p>ML enables individualized experiences for millions of users simultaneously, from personalized recommendations to customized healthcare treatments.
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

export default Ml;