import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cpu, Code, Projector, Server, MemoryStick, Power, FileInput, FileOutput, Code2Icon } from 'lucide-react';
import { GiCpu, GiSatelliteCommunication } from 'react-icons/gi';
import '../styles/plc.css';
import { PiDeviceMobileCamera, PiMonitorArrowUpFill } from 'react-icons/pi';
import { BiDevices } from 'react-icons/bi';
import { MdOutlineSensors } from 'react-icons/md';
import { TbAutomation } from 'react-icons/tb';


const BPA = () => {
    console.log('BPA component is mounting');
    const navigate = useNavigate();

    React.useEffect(() => {
        console.log('BPA component mounted');
        return () => console.log('BPA component unmounting');
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
                    <h1>BPA</h1>
                    <p className="subtitle">Nervous System of Business Automation</p>
                </div>

                <div className="plc-content">
                    <section className="plc-overview">
                        <h2>What is BPA?</h2>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            Business Process Automation (BPA) can be defined as the use of software applications and digital systems to automate complex, repetitive, and rule-based business processes across an organization. It involves designing, implementing, and managing workflows that connect various systems, people, and data sources to achieve maximum efficiency and accuracy. BPA ensures that every step of a process  from data entry to approval and reporting  is executed automatically based on predefined business logic, eliminating the need for constant human supervision.
                        </h5>

                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            In a BPA system, workflows are created using process design tools that define the logic, sequence, and conditions of each task. For example, when an employee submits a leave request, BPA software automatically routes the application to the relevant manager, checks for remaining leave balance, sends approval notifications, and updates HR records  all without manual effort. This not only speeds up the process but also ensures that company policies and rules are applied consistently.</h5>

                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            BPA operates on the principle of integration and orchestration meaning it links different applications such as CRM (Customer Relationship Management), ERP (Enterprise Resource Planning), HRMS (Human Resource Management System), and accounting tools to work together in harmony. Data automatically moves between systems, ensuring there are no delays or data mismatches. This integration provides real-time visibility into business performance and allows managers to make faster, more informed decisions.
                        </h5>
                    </section>

                    <section className="key-concepts">
                        <h2>Components of BPA</h2>
                        <p style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            A typical BPA system consists of the following components:
                        </p>
                        <div className="concept-cards">
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <PiMonitorArrowUpFill size={24} />
                                </div>
                                <h3>Workflow Engine:</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>Acts as the brain of BPA. It controls task sequences, manages dependencies, and ensures that each process step follows the correct order automatically.</h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <MdOutlineSensors size={24} />
                                </div>
                                <h3>Integrations & Connectors:</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                                    BPA tools integrate with other enterprise applications through APIs, enabling data sharing between HR, finance, CRM, and production systems without manual entry.

                                </h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <GiSatelliteCommunication size={24} />
                                </div>
                                <h3>User Interfaces / Portals:</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                                    Employees and managers use web dashboards or mobile portals to view task progress, provide approvals, and handle exceptions directly within the workflow.

                                </h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <PiMonitorArrowUpFill size={24} />
                                </div>
                                <h3>Monitoring & Analytics:
                                </h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}> Built-in analytics track process completion rates, turnaround times, and errors, providing valuable metrics to evaluate automation success and identify improvements.
                                </h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <PiMonitorArrowUpFill size={24} />
                                </div>
                                <h3>Security & Governance:</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>Ensures process integrity through user access control, role-based permissions, audit trails, and encryption to protect sensitive business data.

                                </h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <PiMonitorArrowUpFill size={24} />
                                </div>
                                <h3>Business Rules Engine:</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>This component stores and executes business rules  such as approval conditions or pricing logic  ensuring consistent decisions and policy compliance every time.
                                </h5>
                            </div>

                        </div>
                    </section>

                    <section className="plc-usage">
                        <h2>Where BPA Is Used</h2>

                        <p>Business Process Automation (BPA) is used in various industries and applications to automate repetitive and rule-based tasks. Below are the most common applications and examples:</p>

                         <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>1. Banking & Finance:
                                </h3>
                                <p>Used to automate account opening, loan approvals, payment reconciliation, and compliance reporting  reducing human errors and ensuring regulatory accuracy.
                                </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Banking & Finance.webp" alt="Banking and Finance" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>2. Healthcare:
                                </h3>
                                <p>Automates patient registration, insurance claims processing, and medical record management to enhance efficiency and patient care.</p>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Healthcare.webp" alt="Healthcare" />
                            </div>
                        </div>
                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>3. Retail & eCommerce:
                                </h3>
                                <p>Manages order fulfillment, return processing, inventory tracking, and supplier communication, improving accuracy and reducing order delays.
                                </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Retail & eCommerce.webp" alt="Retail and eCommerce" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>4. Manufacturing & Supply Chain:
                                </h3>
                                <p> Coordinates inventory management, purchase order generation, and shipment tracking, ensuring smoother operations and timely deliveries.</p>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Manufacturing & Supply Chain.webp" alt="Manufacturing and Supply Chain" />
                            </div>
                        </div>


                    </section>
                </div>

                {/* <section className="plc-comparison">
                    <div className="comparison-container">
                        <div className="advantages-section">
                            <h2>Advantages of Using BPA</h2>

                            <div className="plc-advantage-item">
                                <h3>1.Increased Efficiency and Productivity</h3>
                                <p>BPA automates repetitive and time-consuming tasks like approvals, data transfers, or report generation.</p>
                            </div>

                            <div className="plc-advantage-item">
                                <h3>2.Cost Reduction</h3>
                                <p>Automation reduces dependency on manual labor.</p>
                            </div>

                            <div className="plc-advantage-item">
                                <h3>3.Improved Accuracy and Reduced Human Error</h3>
                                <p>BPA systems perform tasks exactly as configured, without fatigue or distraction.</p>
                            </div>

                            <div className="plc-advantage-item">
                                <h3>4.Better Visibility and Tracking</h3>
                                <p>Automated systems provide real-time dashboards, logs, and reports.</p>
                            </div>

                            <div className="plc-advantage-item">
                                <h3>5.Enhanced Customer Experience</h3>
                                <p>By automating processes like order tracking, billing, and support, BPA ensures faster response times.

                                </p>
                            </div>

                            <div className="plc-advantage-item">
                                <h3>6.Scalability and Flexibility</h3>
                                <p>BPA can handle increasing workloads without hiring additional staff.</p>
                            </div>
                        </div>

                        <div className="disadvantages-section">
                            <h2>Disadvantages of Not Using BPA</h2>

                            <div className="plc-disadvantage-item">
                                <h3>1.Slow and Inefficient Operations</h3>
                                <p>Without BPA, every task (like data entry, approvals, or order processing) must be done manually.
                                </p>
                            </div>

                            <div className="plc-disadvantage-item">
                                <h3>2.Higher Error Rates</h3>
                                <p>Manual operations rely heavily on human accuracy.</p>
                            </div>

                            <div className="plc-disadvantage-item">
                                <h3>3. Increased Operational Costs</h3>
                                <p>Manual work requires more staff, more supervision, and more time.</p>
                            </div>

                            <div className="plc-disadvantage-item">
                                <h3>4.Lack of Real-Time Data and Visibility</h3>
                                <p>Without BPA, management has limited insight into process performance.</p>
                            </div>
                            <div className="plc-disadvantage-item">
                                <h3>5.Poor Customer Experience</h3>
                                <p>Manual delays lead to slower response times, late deliveries, or inaccurate information.
                                </p>
                            </div>
                            <div className="plc-disadvantage-item">
                                <h3>6.Difficulty in Scaling Operations</h3>
                                <p>When workload increases, manual processes cannot keep up
                                </p>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section className="plc-programming-section">
                    <h2>BPA Programming</h2>

                    <div className="programming-grid">
                        <div className="programming-card">
                            <h3>Types of Processes Suited for BPA</h3>
                            <ul className="feature-list">
                                <li>
                                    <strong>Structured, Multi-step Processes:</strong>
                                    <p>Highly repetitive and rule-driven workflows like procurement, payroll, and billing are ideal for BPA because they follow clear, predictable patterns.</p>
                                </li>
                                <li>
                                    <strong>Cross-system Processes:</strong>
                                    <p>Processes that require data to move between multiple systems (like ERP to CRM) benefit from BPA as it automates data transfer and synchronization.
                                    </p>
                                </li>
                                <li>
                                    <strong>Approval & Compliance Flows:</strong>
                                    <p>Approval-based tasks such as contract reviews, purchase order authorization, or financial auditing are automated to ensure traceability and reduce approval delays.</p>
                                </li>
                                <li>
                                    <strong>Customer-facing Journeys:</strong>
                                    <p>Customer onboarding, complaint handling, and feedback collection are automated to enhance service quality and reduce waiting times.</p>
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

export default BPA;