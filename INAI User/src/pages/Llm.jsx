import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cpu, Code, Projector, Server, MemoryStick, Power, FileInput, FileOutput, Code2Icon } from 'lucide-react';
import { GiCpu } from 'react-icons/gi';
import '../styles/plc.css';
import { PiDeviceMobileCamera } from 'react-icons/pi';

const Llm = () => {
    console.log('Large Language Model component is mounting');
    const navigate = useNavigate();

    React.useEffect(() => {
        console.log('Large Language Model component mounted');
        return () => console.log('Large Language Model component unmounting');
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
                    <h1>Large Language Model</h1>
                    <p className="subtitle">The Brain of AI/ML</p>
                </div>

                <div className="plc-content">
                    <section className="plc-overview">
                        <h2>What is Large Language Model?</h2>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            Large Language Models (LLMs) are advanced artificial intelligence systems designed to understand, generate, and process human language at scale. They are trained on massive text datasets containing trillions of words from diverse sources such as books, websites, and articles. Using transformer-based deep learning architectures, these models capture intricate linguistic patterns, enabling them to perform various tasks — from answering questions and summarizing documents to writing code and conducting intelligent conversations.
                            LLMs represent a major leap in AI evolution due to their few-shot and zero-shot learning capabilities, allowing them to perform new tasks without extensive retraining. Popular examples include GPT, Claude, PaLM, and LLaMA, which power chatbots, virtual assistants, coding tools, and content creation platforms.


                        </h5>

                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            Natural Language Processing integrates linguistics, computer science, and machine learning to make sense of human language data. Unlike structured data, natural language is ambiguous, context-dependent, and complex—making NLP a challenging but vital part of AI.
                            NLP involves several stages of language understanding, including tokenization, parsing, semantic analysis, and contextual modeling.
                            With advancements in deep learning, especially through Transformer-based architectures, modern NLP systems can now understand nuances, tone, and intent with near-human accuracy.

                        </h5>

                    </section>



                    <section className="python-ai-section">
                        <h2>Key Components of LLM</h2>

                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>1.Core Concept
                                </h3>

                                <ul>
                                    <li>Built using Transformer architecture, which processes sequences of text using self-attention.</li>
                                    <li>Trained with billions of parameters that capture context, tone, and meaning.
                                    </li>
                                    <li>
                                        Scalable learning — the larger the model and dataset, the more sophisticated its reasoning and understanding.
                                    </li>
                                </ul>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/LLM.webp" alt="Core Concept" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>2. Training Process
                                </h3>
                                <p>
                                    LLMs undergo two main phases:

                                </p>
                                <ul>
                                    <li>Pre-training
                                        <ul>
                                            <li>Exposed to vast text datasets for general language understanding.</li>
                                            <li>Learns grammar, semantics, and world knowledge through unsupervised learning.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>Fine-tuning
                                        <ul>
                                            <li>Adapted for specific tasks or industries using smaller labeled datasets.</li>
                                            <li>Aligned with human intent through Reinforcement Learning from Human Feedback (RLHF) for safety and accuracy.</li>
                                        </ul>
                                    </li>
                                </ul>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Training Process.webp" alt="Training Process" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>3. Transformer Architecture

                                </h3>
                                <ul>
                                    <li>Foundation of all modern LLMs.</li>
                                    <li>Uses self-attention to understand relationships between distant words.
                                    </li>
                                    <li>Enables models to maintain context and coherence over long passages.</li>
                                </ul>
                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Transformer Architecture.webp" alt="Transformer Architecture" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>4.Prompt Engineering
                                </h3>
                                <ul>
                                    <li>Technique to guide model behavior through structured input.</li>
                                    <li>Involves few-shot, zero-shot, and chain-of-thought prompting.</li>
                                    <li>Used to improve reasoning and task accuracy.</li>
                                </ul>
                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Prompt Engineering.webp" alt="Prompt Engineering" />
                            </div>
                        </div>

                    </section>

                    <section className="importance-section">
                        <h2>Importance and Usefulness</h2>
                        <h3>Why LLMs Matter
                        </h3>

                        <div className="importance-grid">
                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Cpu size={24} />
                                </div>
                                <h4> Democratization of AI</h4>
                                <p> Makes AI accessible without technical expertise.
                                    Enables individuals and small businesses to use advanced tools.
                                    Reduces development barriers and fosters innovation.
                                </p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Code size={24} />
                                </div>
                                <h4>Versatility</h4>
                                <p>One model performs multiple tasks — translation, writing, analysis, coding, etc.


                                    Eliminates the need for building multiple specialized models.


                                    Adaptable to new applications through prompting or fine-tuning.
                                </p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Projector size={24} />
                                </div>
                                <h4>Productivity Amplification
                                </h4>
                                <p>Automates repetitive tasks in writing, coding, and research.
                                    Acts as a creative and analytical assistant.
                                    Accelerates workflow and shortens project delivery times.

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

export default Llm;