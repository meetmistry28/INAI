import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cpu, Code, Projector, Server, MemoryStick, Power, FileInput, FileOutput, Code2Icon } from 'lucide-react';
import { GiCpu } from 'react-icons/gi';
import '../styles/plc.css';
import { PiDeviceMobileCamera } from 'react-icons/pi';

const Nlp = () => {
    console.log('Natural Language Processing component is mounting');
    const navigate = useNavigate();

    React.useEffect(() => {
        console.log('Natural Language Processing component mounted');
        return () => console.log('Natural Language Processing component unmounting');
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
                    <h1>Natural Language Processing</h1>
                    <p className="subtitle">The Brain of AI/ML</p>
                </div>

                <div className="plc-content">
                    <section className="plc-overview">
                        <h2>What is Natural Language Processing?</h2>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            Natural Language Processing (NLP) is a subfield of Artificial Intelligence that enables computers to understand, interpret, and generate human language. It bridges the gap between human communication and machine understanding, allowing systems to analyze text and speech in meaningful ways.
                            From chatbots and translation tools to sentiment analysis and voice assistants, NLP powers the interaction between humans and machines across digital platforms.

                        </h5>

                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            Natural Language Processing integrates linguistics, computer science, and machine learning to make sense of human language data. Unlike structured data, natural language is ambiguous, context-dependent, and complex—making NLP a challenging but vital part of AI.
                            NLP involves several stages of language understanding, including tokenization, parsing, semantic analysis, and contextual modeling.
                            With advancements in deep learning, especially through Transformer-based architectures, modern NLP systems can now understand nuances, tone, and intent with near-human accuracy.

                        </h5>

                    </section>



                    <section className="python-ai-section">
                        <h2>Key Components of NLP</h2>

                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>1.Text Preprocessing
                                </h3>
                                Before analysis, raw text must be cleaned and structured. This involves:
                                <ul>
                                    <li><strong>Tokenization:</strong> Breaking text into words or tokens.</li>
                                    <li><strong>Stop Word Removal:</strong> Eliminating common, uninformative words (like "the", "is", "and").
                                    </li>
                                    <li><strong>Stemming and Lemmatization:</strong>Reducing words to their root forms.
                                    </li>
                                    <li><strong>Part-of-Speech (POS) Tagging</strong> Identifying grammatical categories (nouns, verbs, etc.).
                                    </li>
                                    <li><strong>Named Entity Recognition (NER):</strong> Detecting entities such as people, organizations, and locations.
                                    </li>
                                </ul>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Text Preprocessing.webp" alt="Text Preprocessing" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>2. Language Modeling
                                </h3>
                                <p>
                                    Language models predict and generate human-like text based on probability and context.
                                </p>
                                <ul>
                                    <li><strong>Traditional Models:</strong> N-grams, Hidden Markov Models (HMMs).</li>
                                    <li><strong>Modern Models:</strong> Transformers, BERT, GPT, and other neural architectures that capture semantic meaning and contextual relationships.
                                    </li>
                                </ul>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Language Modeling.webp" alt="Language Modeling" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>3. Sentiment and Emotion Analysis
                                </h3>
                                <p>
                                    Analyzes the emotional tone of text—positive, negative, or neutral—used for customer feedback, social media monitoring, and market insights.
                                </p>
                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Sentiment and Emotion Analysis.webp" alt="Sentiment and Emotion Analysis" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>4.Machine Translation</h3>
                                <p>Converts text from one language to another using bilingual datasets and contextual understanding.
                                    Recent Transformer-based systems have dramatically improved translation quality, enabling cross-lingual AI communication.
                                </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Machine Translation.webp" alt="Machine Translation" />
                            </div>
                        </div>
                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>5.Text Summarization</h3>
                                <p>Categorizes documents or sentences into predefined labels (e.g., spam detection, topic tagging, intent classification).

                                </p>
                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Text Summarization.webp" alt="Text Summarization" />
                            </div>
                        </div>
                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>6.Speech Processing
                                </h3>
                                <p>Includes Speech Recognition (converting voice to text) and Speech Synthesis (text-to-speech generation).
                                    These technologies make hands-free AI assistants and voice interfaces possible.

                                </p>
                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Speech Processing.webp" alt="Speech Processing" />
                            </div>
                        </div>
                    </section>

                    <section className="importance-section">
                        <h2>Importance and Usefulness</h2>
                        <h3>Why Natural Language Processing Matters
                        </h3>

                        <div className="importance-grid">
                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Cpu size={24} />
                                </div>
                                <h4>Enhancing Human-Computer Interaction
                                    v:</h4>
                                <p> Makes communication with machines natural and intuitive.
                                    Powers voice assistants like Siri, Alexa, and Google Assistant.
                                    Enables hands-free operations through voice commands and speech recognition.

                                </p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Code size={24} />
                                </div>
                                <h4>Business Intelligence:</h4>
                                <p>Automates document analysis and feedback categorization.
                                    Extracts insights from reviews, social media, and surveys.
                                    Detects public sentiment and market trends for better decision-making.

                                </p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Projector size={24} />
                                </div>
                                <h4>Accessibility and Inclusivity:</h4>
                                <p> Converts speech to text for the hearing impaired.
                                    Translates content to reach diverse linguistic audiences.
                                    Simplifies information for educational and assistive purposes.
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

export default Nlp;