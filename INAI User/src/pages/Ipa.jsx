import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cpu, Code, Projector, Server, MemoryStick, Power, FileInput, FileOutput, Code2Icon } from 'lucide-react';
import { GiCpu, GiSatelliteCommunication } from 'react-icons/gi';
import '../styles/plc.css';
import { PiDeviceMobileCamera, PiMonitorArrowUpFill } from 'react-icons/pi';
import { BiDevices } from 'react-icons/bi';
import { MdOutlineSensors } from 'react-icons/md';
import { TbAutomation } from 'react-icons/tb';


const IPA = () => {
    console.log('IPA component is mounting');
    const navigate = useNavigate();

    React.useEffect(() => {
        console.log('IPA component mounted');
        return () => console.log('IPA component unmounting');
    }, []);

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <>
            <div className="plc-page">
                

                <div className="plc-header">
                    <div className="plc-icon">
                        <TbAutomation size={48} />
                    </div>
                    <h1>Intelligent Process Automation (IPA)</h1>
                    <p className="subtitle">Intelligence of Automation</p>
                </div>

                <div className="plc-content">
                    <section className="plc-overview">
                        <h2>What is IPA?</h2>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            Intelligent Process Automation (IPA) can be defined as an advanced form of process automation that combines AI technologies  such as natural language processing (NLP), computer vision, and machine learning  with RPA and BPA (Business Process Automation) frameworks to automate complex, data-driven business processes. It allows software systems not only to perform repetitive tasks but also to analyze, interpret, and make decisions based on data much like a human would, but with greater speed and consistency.

                        </h5>

                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            IPA differs from traditional automation in that it can handle both structured and unstructured data. For instance, while RPA might process a structured spreadsheet, IPA can read emails, invoices, or scanned documents, extract the relevant information using AI-powered text recognition, and act on it automatically. This ability to deal with unstructured data makes IPA suitable for industries like banking, healthcare, insurance, and telecommunications, where information is often diverse and complex.
                        </h5>

                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            Furthermore, IPA systems are self-learning. Over time, they analyze patterns and feedback to continuously refine their performance. For example, an IPA system used in customer service can learn from human agent responses to improve future ticket classifications or chatbot interactions. This continuous learning capability enables organizations to evolve toward autonomous operations, where human intervention is only required for exceptions or strategic decision-making.

                        </h5>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            In essence, IPA is not just automation  it is intelligent automation. It extends the limits of what can be automated, reduces human workload in decision-based processes, and ensures that business operations become faster, more accurate, and data-driven.

                        </h5>
                    </section>

                    <section className="key-concepts">
                        <h2>Components of IPA</h2>
                        <p style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            Intelligent Process Automation is built on several integrated components that together enable automation, intelligence, and continuous learning:
                        </p>
                        <div className="concept-cards">
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <PiMonitorArrowUpFill size={24} />
                                </div>
                                <h3>Workflow Orchestration Engine:</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>The orchestration engine is the backbone of IPA. It manages the overall flow of processes, defining task sequences, dependencies, retries, and escalation paths. It ensures that every activity from data input to final output happens in the correct order without manual intervention.
                                </h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <MdOutlineSensors size={24} />
                                </div>
                                <h3>Robotic Process Automation (RPA) Layer:</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                                    This layer handles repetitive, rule-based tasks that involve user interface interactions, such as data entry, copying information between systems, or generating reports. RPA bots execute these tasks efficiently, freeing human employees for more complex work.

                                </h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <GiSatelliteCommunication size={24} />
                                </div>
                                <h3>Artificial Intelligence and Machine Learning Models:</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                                    These are the “brains” of IPA. AI and ML enable the system to recognize patterns, classify data, and make predictions. Natural Language Processing (NLP) helps interpret text, speech, and language-based data, while Computer Vision allows the system to understand images and documents.
                                </h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <PiMonitorArrowUpFill size={24} />
                                </div>
                                <h3>Document Capture and OCR (Optical Character Recognition):</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}> This component allows IPA to read and digitize printed or handwritten text from scanned documents. It converts visual information into structured data that can be further processed by AI and RPA systems.
                                </h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <PiMonitorArrowUpFill size={24} />
                                </div>
                                <h3>Integration Connectors and APIs:</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}> IPA platforms rely on connectors and APIs to integrate with external applications such as ERP, CRM, HRMS, and databases. This allows seamless data flow between systems, ensuring that automation can execute across departments without human involvement.</h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <PiMonitorArrowUpFill size={24} />
                                </div>
                                <h3>Decisioning and Rules Engine:</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}> The decision engine combines pre-defined business rules with AI predictions to determine the best course of action. For example, it might approve a transaction if all compliance conditions are met or escalate it for manual review if anomalies are detected.</h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <PiMonitorArrowUpFill size={24} />
                                </div>
                                <h3>Human-in-the-Loop Interface:</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}> A user interface (dashboard) allows humans to interact with the IPA system, review exceptions, approve tasks, or provide corrective feedback. This feedback loop helps improve model accuracy and builds trust between humans and automation.</h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <PiMonitorArrowUpFill size={24} />
                                </div>
                                <h3>Monitoring and Analytics:</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>This component continuously measures process performance through dashboards and reports. It tracks execution speed, model accuracy, and compliance to help organizations identify bottlenecks and improve workflows.</h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <PiMonitorArrowUpFill size={24} />
                                </div>
                                <h3>Security and Governance:</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}> Since IPA handles sensitive business data, security controls are critical. Features like user authentication, data encryption, role-based access, and audit trails ensure data privacy and compliance with regulations such as GDPR and HIPAA</h5>
                            </div>


                        </div>
                    </section>

                    <section className="plc-usage">
                        <h2>How IPA Is Used</h2>

                        <p>The student will learn to use the International Phonetic Alphabet (IPA) for accurate pronunciation and speech analysis.</p>

                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>1. Intelligent Document Processing:
                                </h3>
                                <p>IPA extracts relevant information from structured and unstructured documents such as invoices, contracts, forms, and receipts. Using OCR and NLP technologies, it validates extracted fields against business rules and automatically routes documents for approvals, payment processing, or record updates. This significantly reduces manual data entry, accelerates document workflows, and ensures accurate compliance.
                                </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Intelligent Document Processing.webp" alt="Intelligent Document Processing" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>2. Smart Case Managemen:
                                </h3>
                                <p>IPA consolidates data from multiple sources into a single case file, evaluates the severity or priority of cases, and automates routing or escalation to appropriate personnel or automated actions. For example, in insurance or banking, a claim or application is automatically classified, verified, and processed according to predefined rules, reducing handling time and improving customer satisfaction.</p>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Smart Case Management.webp" alt="Smart Case Management" />
                            </div>
                        </div>
                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>3. Predictive Automation:
                                </h3>
                                <p>  Using historical data and machine learning models, IPA predicts outcomes such as customer churn, equipment failure, or supply chain delays. These predictions trigger automated preventive actions, such as customer outreach, scheduling maintenance, or adjusting production schedules, allowing organizations to act proactively rather than reactively. </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Predictive Automation.webp" alt="Predictive Automation" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>4. Conversational Interfaces + Back-end Actions:
                                </h3>
                                <p>  IPA integrates chatbots or voice assistants with backend workflows to handle customer service requests or internal inquiries. When a user asks a question or submits a request, the system interprets the input, retrieves relevant data, triggers automated actions, and provides responses in real-time, reducing human workload and enhancing user experience.</p>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Conversational Interfaces + Back-end Actions.webp" alt="Conversational Interfaces" />
                            </div>
                        </div>
                    </section>
                </div>

              

                <section className="plc-programming-section">
                    <h2>IPA Programming</h2>

                    <div className="programming-grid">
                        <div className="programming-card">
                            <h3>Typical IPA Tools and Technologies</h3>
                            <ul className="feature-list">
                                <li>
                                    <strong>UiPath AI Center</strong>
                                    <p>Combines RPA with AI/ML models for intelligent decision-making and document understanding.</p>
                                </li>
                                <li>
                                    <strong>Automation Anywhere AARI / IQ Bot</strong>
                                    <p>Uses machine learning and natural language processing to handle unstructured data and cognitive tasks.
                                    </p>
                                </li>
                                <li>
                                    <strong>Blue Prism Intelligent Automation</strong>
                                    <p>Integrates RPA, AI, and analytics to create digital workers capable of learning and adapting.</p>
                                </li>
                                <li>
                                    <strong>Microsoft Power Automate with AI Builder</strong>
                                    <p>Adds AI-driven insights, form processing, and predictive models to business workflows.</p>
                                </li>
                                <li>
                                    <strong>Appian AI Process Platform</strong>
                                    <p>Low-code platform combining process automation with AI and data intelligence.</p>
                                </li>
                            </ul>
                        </div>

                    </div>
                </section>

                <div className="career-footer">
                    <p>&copy; {new Date().getFullYear()} Career. All rights reserved.</p>
                </div>
            </div>

        </>
    );
};

export default IPA;