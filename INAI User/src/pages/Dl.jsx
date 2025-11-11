import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cpu, Code, Projector, Server, MemoryStick, Power, FileInput, FileOutput, Code2Icon } from 'lucide-react';
import { GiCpu } from 'react-icons/gi';
import '../styles/plc.css';
import { PiDeviceMobileCamera } from 'react-icons/pi';

const Dl = () => {
    console.log('Deep Learning component is mounting');
    const navigate = useNavigate();

    React.useEffect(() => {
        console.log('Deep Learning component mounted');
        return () => console.log('Deep Learning component unmounting');
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
                    <h1>Deep Learning</h1>
                    <p className="subtitle">The Brain of AI/ML</p>
                </div>

                <div className="plc-content">
                    <section className="plc-overview">
                        <h2>What is Deep Learning?</h2>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            Deep Learning (DL) represents the advanced frontier of Artificial Intelligence, leveraging multi-layered artificial neural networks to automatically learn data representations and make intelligent decisions. Unlike traditional machine learning methods that depend heavily on manual feature engineering, deep learning models learn hierarchical features directly from raw data—whether text, images, audio, or video. Through these powerful architectures, deep learning enables breakthroughs in computer vision, speech recognition, natural language processing, and autonomous systems. Using frameworks like TensorFlow and PyTorch, developers can train complex models capable of human-level or even superhuman performance in specific domains, revolutionizing industries such as healthcare, finance, robotics, and entertainment.</h5>

                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            Deep Learning is a subfield of Machine Learning inspired by the structure and function of the human brain. It utilizes artificial neural networks with multiple layers that progressively extract higher-level features from raw input data. The “deep” aspect refers to the presence of multiple hidden layers that enable the model to learn complex, non-linear patterns.
                            Deep learning became practically viable in the 2010s due to three main factors:




                        </h5>
                        <ul>
                            <li><strong>Availability of Big Data:</strong>Massive labeled datasets for training.</li>
                            <li><strong>Powerful Hardware:</strong>GPUs and TPUs enabling parallel computations.</li>
                            <li><strong>Algorithmic Innovations:</strong>Improved architectures and optimization methods.</li>
                        </ul>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            Today, deep learning powers most state-of-the-art AI systems—from image classification and voice assistants to self-driving cars and generative models like GPT.

                        </h5>
                    </section>



                    <section className="python-ai-section">
                        <h2>Key Points Explaining the Role of Mathematics & Statistics in AI/ML</h2>

                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>1.Neural Network Fundamentals
                                </h3>
                                <p>
                                    The foundational building block of deep learning systems.
                                </p>
                                Core Concepts:
                                <ul>
                                    <li><strong>Artificial Neurons (Perceptrons): </strong>Perform weighted summations of inputs with activation functions introducing non-linearity.
                                    </li>
                                    <li><strong>Network Architecture:</strong>Includes input, hidden, and output layers. Hidden layers extract abstract representations.</li>
                                    <li><strong>Activation Functions:</strong>
                                        <ul>
                                            <li>ReLU (Rectified Linear Unit) Default for deep models.
                                            </li>
                                            <li>

                                                Sigmoid Binary classification outputs.
                                            </li>
                                            <li>Tanh Zero-centered output.
                                            </li>
                                            <li>Softmax Converts logits into probabilities for multi-class tasks.
                                            </li>
                                        </ul>
                                    </li>
                                    <li><strong>Forward Propagation:</strong>Data flows through the network to generate predictions.
                                    </li>
                                    <li><strong>Backpropagation:</strong>Algorithm for updating weights by minimizing loss functions using gradients.</li>

                                </ul>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Neural Network Fundamentals.webp" alt="Neural Network Fundamentals" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>2.Convolutional Neural Networks (CNNs)
                                </h3>
                                <p>
                                    Specialized for image and spatial data processing.

                                </p>
                                Core Concepts:
                                <ul>
                                    <li><strong>Convolutional Layers:</strong>Detect patterns and visual features by applying learnable filters.

                                    </li>
                                    <li><strong>Pooling Layers: </strong>Reduce spatial dimensions and control overfitting (e.g., max pooling).</li>
                                    <li><strong>Normalization & Regularization:</strong>Batch normalization and dropout improve stability.
                                    </li>
                                    <li><strong>Popular Architectures:</strong>LeNet, AlexNet, VGG, ResNet, Inception, EfficientNet.
                                    </li>
                                    <li><strong>Transfer Learning: </strong>Using pre-trained CNNs to solve custom image tasks efficiently.
                                    </li>
                                </ul>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Convolutional Neural Networks.webp" alt="Convolutional Neural Networks" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>3. Recurrent Neural Networks (RNNs) & Transformers</h3>
                                <p>
                                    Designed for sequential and time-dependent data such as text, audio, or time series.

                                </p>
                                RNN Core Concepts:
                                <ul>
                                    <li>Maintain a hidden state across time steps to process sequences.
                                    </li>
                                    <li>Suffer from vanishing gradients, improved by LSTM and GRU architectures.</li>
                                    <li>Commonly used in speech recognition and predictive modeling.
                                    </li>

                                </ul>
                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Recurrent Neural Networks (RNNs) & Transformers.webp" alt="Recurrent Neural Networks" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>4.Regularization & Optimization Techniques</h3>
                                <p>Methods that improve model generalization and training performance.
                                </p>
                                Regularization Methods:


                                <ul>
                                    <li><strong>L1/L2 Regularization:</strong>Penalizes large weights to prevent overfitting.</li>
                                    <li><strong>Dropout:</strong>Randomly disables neurons to enhance robustness.</li>
                                    <li><strong>Data Augmentation:</strong>Increases dataset diversity.</li>
                                    <li><strong>Early Stopping:</strong>Stops training when validation loss stops improving</li>

                                </ul>
                                Optimization Enhancements:
                                <ul>
                                    <li>Learning rate scheduling and adaptive optimizers (Adam, RMSprop).</li>
                                    <li>Gradient clipping to prevent gradient explosions.
                                    </li>
                                    <li>Mixed precision and distributed training for speed and scalability.</li>
                                </ul>
                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Regularization & Optimization Techniques.webp" alt="Regularization & Optimization Techniques" />
                            </div>
                        </div>
                    </section>

                    <section className="importance-section">
                        <h2>Importance and Usefulness</h2>
                        <h3>Why Deep Learning Matters</h3>

                        <div className="importance-grid">
                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Cpu size={24} />
                                </div>
                                <h4>Automatic Feature Extraction:</h4>
                                <p> Learns complex features without manual engineering.
                                </p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Code size={24} />
                                </div>
                                <h4>Superior Accuracy:</h4>
                                <p>Achieves state-of-the-art performance across domains.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Projector size={24} />
                                </div>
                                <h4>Scalability:</h4>
                                <p> Improves performance with more data and computation.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Server size={24} />
                                </div>
                                <h4>Transfer Learning:</h4>
                                <p> Pre-trained models democratize AI capabilities.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <MemoryStick size={24} />
                                </div>
                                <h4>Cross-Domain Versatility:</h4>
                                <p>Used in vision, NLP, audio, robotics, and healthcare.
                                </p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <FileInput size={24} />
                                </div>
                                <h4>Continuous Innovation: </h4>
                                <p>Rapidly evolving field with new architectures emerging regularly.
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

export default Dl;