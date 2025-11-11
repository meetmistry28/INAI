import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cpu, Code, Projector, Server, MemoryStick, Power, FileInput, FileOutput, Code2Icon } from 'lucide-react';
import { GiCpu, GiSatelliteCommunication } from 'react-icons/gi';
import '../styles/plc.css';
import { PiDeviceMobileCamera, PiMonitorArrowUpFill } from 'react-icons/pi';
import { BiDevices } from 'react-icons/bi';
import { MdOutlineSensors } from 'react-icons/md';
import { TbAutomation } from 'react-icons/tb';


const RPA = () => {
    console.log('RPA component is mounting');
    const navigate = useNavigate();

    React.useEffect(() => {
        console.log('RPA component mounted');
        return () => console.log('RPA component unmounting');
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
                    <h1>RPA</h1>
                    <p className="subtitle">The Workforce of Digital Automation</p>
                </div>

                <div className="plc-content">
                    <section className="plc-overview">
                        <h2>What is RPA?</h2>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            Robotic Process Automation (RPA) can be defined as the use of specialized software programs (bots) that emulate human interactions with digital systems to perform business processes automatically. These bots follow predefined rules, logic, and workflows to complete structured tasks  such as moving files, entering data, processing transactions, or responding to emails  without human intervention.
                        </h5>

                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            RPA is rule-based and deterministic, meaning it works best on processes that are repetitive, structured, and predictable. When combined with artificial intelligence (AI) or machine learning (ML), RPA evolves into Intelligent Process Automation (IPA) capable of handling complex tasks like understanding language, analyzing data, and making smart decisions.
                        </h5>

                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            In summary, RPA is a digital technology that replaces manual, repetitive computer tasks with automated workflows, ensuring faster results, fewer errors, and higher efficiency. It acts as a bridge between human intelligence and machine execution, forming the backbone of modern automation strategies used across industries worldwide.

                        </h5>
                    </section>

                    <section className="key-concepts">
                        <h2>Components of RPA</h2>
                        <p style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            A typical RPA system consists of the following components:
                        </p>
                        <div className="concept-cards">
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <PiMonitorArrowUpFill size={24} />
                                </div>
                                <h3>Bot: </h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>Represents an automated process that performs specific tasks based on predefined rules and workflows.</h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <MdOutlineSensors size={24} />
                                </div>
                                <h3>Bot Creator:</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                                    This is the development environment where automation scripts and workflows are designed.
                                    It allows users to create bots visually, define triggers, and record actions to replicate human tasks efficiently.


                                </h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <GiSatelliteCommunication size={24} />
                                </div>
                                <h3>Bot Runner:</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                                    Once a bot is developed, the Bot Runner executes it on machines or servers.
                                    It performs the assigned tasks automatically, working silently in the background without human input.

                                </h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <PiMonitorArrowUpFill size={24} />
                                </div>
                                <h3>Control Room:</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>A centralized management hub where all bots are scheduled, deployed, and monitored in real-time.It ensures coordinated execution, manages licenses, and maintains security controls.
                                </h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <PiMonitorArrowUpFill size={24} />
                                </div>
                                <h3>Recorder:</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>Captures every action performed by a human user on the screen and converts them into automation steps.
                                    This feature helps create workflows quickly and ensures high accuracy during task replication.

                                </h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <PiMonitorArrowUpFill size={24} />
                                </div>
                                <h3>Analytics Dashboard: </h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>Displays key metrics such as bot uptime, error rates, and task performance.Managers use these insights to optimize efficiency and identify areas for improvement.</h5>
                            </div>

                        </div>
                    </section>

                    <section className="plc-usage">
                        <h2>How RPA Is Used</h2>

                        <p>RPA is used in various industries and applications to automate repetitive and rule-based tasks. Below are the most common applications and examples:</p>

                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>1. Data Entry & Migration:
                                </h3>
                                <p>Bots extract and transfer data between multiple systems, ensuring error-free data synchronization.
                                    It eliminates manual entry work in fields like banking, healthcare, and logistics.
                                </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Data Entry & Migration.webp" alt="Data Migration" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>2. Invoice Processing:
                                </h3>
                                <p>RPA reads invoices, verifies details, matches them with purchase orders, and updates accounting systems.
                                    This process saves time, minimizes errors, and improves financial control.</p>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Invoice Processing.webp" alt="Invoice Processing" />
                            </div>
                        </div>
                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>3. Payroll Processing:
                                </h3>
                                <p>Automates salary calculations, tax deductions, and record updates, ensuring accurate and timely payrolls.
                                    It reduces administrative workload and ensures compliance with company policies.
                                </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Payroll Processing.webp" alt="Payroll Processing" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>4. Report Generation:
                                </h3>
                                <p>Bots gather data from various databases and generate periodic reports without human input.
                                    This improves accuracy and speeds up decision-making processes.</p>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Report Generation.webp" alt="Report Generation" />
                            </div>
                        </div>







        
                    </section>
                </div>

                {/* <section className="plc-comparison">
                    <div className="comparison-container">
                        <div className="advantages-section">
                            <h2>Advantages of Using RPA</h2>

                            <div className="plc-advantage-item">
                                <h3>1.Increased Efficiency and Speed</h3>
                                <p>RPA bots can work 24/7 without breaks, processing repetitive tasks much faster than humans.</p>
                            </div>

                            <div className="plc-advantage-item">
                                <h3>2.Cost Reduction</h3>
                                <p>Once deployed, RPA bots significantly reduce labor costs.</p>
                            </div>

                            <div className="plc-advantage-item">
                                <h3>3.Improved Accuracy</h3>
                                <p>RPA performs tasks exactly as programmed, eliminating human mistakes.</p>
                            </div>

                            <div className="plc-advantage-item">
                                <h3>4.Better Compliance and Auditability</h3>
                                <p>RPA bots automatically record every action, making it easy to track and audit.</p>
                            </div>

                            <div className="plc-advantage-item">
                                <h3>5.Scalability and Flexibility</h3>
                                <p>RPA systems can easily scale up to handle more tasks or processes as the business grows.
                                </p>
                            </div>

                            <div className="plc-advantage-item">
                                <h3>6.Employee Productivity and Satisfaction</h3>
                                <p>By automating repetitive work, RPA frees employees to focus on creative, decision based, or customer-focused tasks.</p>
                            </div>
                        </div>

                        <div className="disadvantages-section">
                            <h2>Disadvantages of Not Using PLCs</h2>

                            <div className="plc-disadvantage-item">
                                <h3>1.Low Efficiency and Slow Operations</h3>
                                <p>Without RPA, repetitive tasks like data entry, report generation, and form filling are done manually.

                                </p>
                            </div>

                            <div className="plc-disadvantage-item">
                                <h3>2.Higher Error Rates</h3>
                                <p>Manual data handling increases the chance of typing errors, miscalculations, or missed entries</p>
                            </div>

                            <div className="plc-disadvantage-item">
                                <h3>3.Increased Labor Costs</h3>
                                <p>Without automation, organizations must hire more employees to handle large workloads.</p>
                            </div>

                            <div className="plc-disadvantage-item">
                                <h3>4.Limited Scalability</h3>
                                <p>Manual systems can’t easily scale during busy periods.</p>
                            </div>
                            <div className="plc-disadvantage-item">
                                <h3>5.Inconsistent Output and Quality</h3>
                                <p>Manual processes often lack automated records or audit trails.</p>
                            </div>
                            <div className="plc-disadvantage-item">
                                <h3>6.Poor Compliance and Traceability</h3>
                                <p>Manual processes often lack automated records or audit trails.
                                </p>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section className="plc-programming-section">
                    <h2>RPA Programming</h2>

                    <div className="programming-grid">
                        <div className="programming-card">
                            <h3>Manual processes often lack automated records or audit trails.</h3>
                            <ul className="feature-list">
                                <li>
                                    <strong>UiPath</strong>
                                    <p>Uses VB.NET, C#, and Python for workflow automation, scripting, and integrations.</p>
                                </li>
                                <li>
                                    <strong>Automation Anywhere</strong>
                                    <p>Supports Bot Scripts, JavaScript, Python, and inbuilt commands for process automation.</p>
                                </li>
                                <li>
                                    <strong>Blue Prism</strong>
                                    <p>Uses Visual Process Diagrams with support for VB, C#, and .NET integration for custom logic.</p>
                                </li>
                                <li>
                                    <strong>Microsoft Power Automate</strong>
                                    <p>Integrates with Power Fx, Python, and JavaScript for low-code automation and AI-based workflows.</p>
                                </li>
                                <li>
                                    <strong>Kofax RPA</strong>
                                    <p>Uses Kofax Scripting Language (VB-based) and integrates with Python and Java for automation logic.</p>
                                </li>
                                <li>
                                    <strong>NICE Robotic Automation</strong>
                                    <p>Provides workflow-based automation with .NET and VBScript customization.</p>
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

export default RPA;