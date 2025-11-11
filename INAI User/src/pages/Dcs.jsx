import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cpu, Code, Projector, Server, MemoryStick, Power, FileInput, FileOutput, Code2Icon } from 'lucide-react';
import { GiCpu, GiSatelliteCommunication } from 'react-icons/gi';
import '../styles/plc.css';
import { PiDeviceMobileCamera, PiMonitorArrowUpFill } from 'react-icons/pi';
import { BiDevices } from 'react-icons/bi';
import { MdOutlineSensors } from 'react-icons/md';
import { TbAutomation } from 'react-icons/tb';


const DCS = () => {
    console.log('DCS component is mounting');
    const navigate = useNavigate();

    React.useEffect(() => {
        console.log('DCS component mounted');
        return () => console.log('DCS component unmounting');
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
                    <h1>DCS (Decentralized Control System)</h1>
                    <p className="subtitle">Heart of Process Automation</p>
                </div>

                <div className="plc-content">
                    <section className="plc-overview">
                        <h2>What is DCS?</h2>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            A Distributed Control System (DCS) can be defined as a control system architecture that distributes control functions across multiple local controllers while providing centralized monitoring and engineering. In simpler terms, it is a network of interconnected controllers, sensors, actuators, and operator interfaces that collectively manage industrial processes. Each local controller operates independently, executing its assigned control loops, but all controllers work together through a process control network, ensuring coordinated and optimized plant operation.

                        </h5>

                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            DCS is primarily used for continuous and batch processes requiring tight feedback control, such as chemical reactions, thermal energy management in power plants, or multi-step batch processing in food and pharmaceutical industries. It ensures high reliability, real-time monitoring, and the ability to handle complex interdependencies among various process variables.

                        </h5>


                    </section>

                    <section className="key-concepts">
                        <h2>Components of DCS</h2>
                        <p style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            A Distributed Control System (DCS) is built on several integrated components that together enable automation, intelligence, and continuous learning:
                        </p>
                        <div className="concept-cards">
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <PiMonitorArrowUpFill size={24} />
                                </div>
                                <h3>Field Devices:
                                </h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}> Sensors (temperature, pressure, flow, level) measure process variables, and actuators (valves, pumps, motors) execute control commands. These devices form the physical foundation of process control.
                                </h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <MdOutlineSensors size={24} />
                                </div>
                                <h3>Local Controllers / I/O Racks:</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                                    Distributed controllers located near field devices execute PID loops, logic, and batch sequences. I/O modules convert analog and digital signals for the controllers to process.

                                </h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <GiSatelliteCommunication size={24} />
                                </div>
                                <h3>Process Control Network:
                                </h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                                    Connects all controllers, HMIs, and engineering stations, allowing seamless communication and coordination among distributed elements.
                                </h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <PiMonitorArrowUpFill size={24} />
                                </div>
                                <h3>Operator Workstations / HMIs:</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}> Provide real-time graphical displays, trend charts, and alarm notifications, allowing operators to monitor and intervene in plant processes.
                                </h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <PiMonitorArrowUpFill size={24} />
                                </div>
                                <h3>Engineering Station:</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}> Enables configuration, tuning, and deployment of control strategies. Engineers design control loops, configure displays, and update parameters centrally.</h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <PiMonitorArrowUpFill size={24} />
                                </div>
                                <h3>Historian / Database:
                                </h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>Stores time-series process data, alarms, and events for analysis, reporting, and regulatory compliance.</h5>
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
                        <h2>Where DCS Is Used</h2>

                        <p>DCS is used in various industries and applications to automate repetitive and rule-based tasks. Below are the most common applications and examples:</p>

                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>1. Chemical Plants:
                                </h3>
                                <p>Controls complex reactions, temperature, flow, and pressure across multiple reactors and pipelines.
                                </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Chemical Plants.webp" alt="Chemical Plant" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>2. Oil Refineries:
                                </h3>
                                <p>Coordinates distillation columns, pumps, compressors, and heat exchangers to ensure smooth refining processes.</p>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Oil Refineries.webp" alt="Oil Refinery" />
                            </div>
                        </div>
                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>3. Power Stations:
                                </h3>
                                <p> Monitors boilers, turbines, generators, and auxiliary systems to maintain energy production with precise control.
                                </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Power Station.webp" alt="Power Station" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>4. Water Treatment & Utilities:
                                </h3>
                                <p>Controls water purification, treatment, and distribution processes to ensure clean and safe drinking water.</p>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Water Treatment & Utilities.webp" alt="Water Treatment" />
                            </div>
                        </div>

                    </section>
                </div>

                {/* <section className="plc-comparison">
                    <div className="comparison-container">
                        <div className="advantages-section">
                            <h2>Advantages of Using DCS</h2>

                            <div className="plc-advantage-item">
                                <h3>1.Centralized Monitoring with Distributed Control</h3>
                                <p>DCS allows centralized supervision of the entire plant while distributing control tasks to local controllers.</p>
                            </div>

                            <div className="plc-advantage-item">
                                <h3>2.High System Reliability and Availability</h3>
                                <p>DCS provides redundancy in hardware, communication, and power supply, ensuring uninterrupted operation.</p>
                            </div>

                            <div className="plc-advantage-item">
                                <h3>3.Scalability and Flexibility</h3>
                                <p>DCS systems are modular and can be expanded easily by adding more I/O modules or controllers.
                                </p>
                            </div>

                            <div className="plc-advantage-item">
                                <h3>4.Improved Process Control and Accuracy</h3>
                                <p>Each local controller in a DCS uses advanced control algorithms like PID for stable and accurate process management.</p>
                            </div>

                            <div className="plc-advantage-item">
                                <h3>5.Efficient Data Handling and Analysis</h3>
                                <p>DCS continuously collects, processes, and stores process data from all plant areas.
                                </p>
                            </div>

                            <div className="plc-advantage-item">
                                <h3>6.Enhanced Safety and Security</h3>
                                <p>Built-in interlocks, alarms, and emergency shutdown functions ensure safe operation.
                                </p>
                            </div>
                        </div>

                        <div className="disadvantages-section">
                            <h2>Disadvantages of Not Using DCS</h2>

                            <div className="plc-disadvantage-item">
                                <h3>1.Lack of Centralized Control</h3>
                                <p>Without a DCS, every section must be controlled separately using local panels or PLCs.
                                </p>
                            </div>

                            <div className="plc-disadvantage-item">
                                <h3>2.Lower System Reliability
                                </h3>
                                <p>Traditional systems without redundancy are more prone to total shutdowns during equipment failure.
                                </p>
                            </div>

                            <div className="plc-disadvantage-item">
                                <h3>3.Difficult Data Collection and Analysis
                                </h3>
                                <p>Without DCS, process data must be manually collected or extracted from separate systems.

                                </p>
                            </div>

                            <div className="plc-disadvantage-item">
                                <h3>4.Limited Scalability</h3>
                                <p>Expanding or modifying a manual or PLC based system requires significant rewiring and reprogramming.
                                </p>
                            </div>
                            <div className="plc-disadvantage-item">
                                <h3>5.Reduced Safety and Alarm Management</h3>
                                <p>Without DCS, industries lack centralized alarms and safety interlocks.
                                    Critical failures or abnormal conditions may go unnoticed until damage occurs.


                                </p>
                            </div>
                            <div className="plc-disadvantage-item">
                                <h3>6.Poor Process Optimization

                                </h3>
                                <p>Expanding or modifying a manual or PLC based system requires significant rewiring and reprogramming.

                                </p>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section className="plc-programming-section">
                    <h2>DCS Programming</h2>

                    <div className="programming-grid">
                        <div className="programming-card">
                            <h3>Typical DCS Systems and Configuration Languages</h3>
                            <ul className="feature-list">
                                <li>
                                    <strong>Siemens PCS 7</strong>
                                    <p>Uses CFC (Continuous Function Chart) and SFC (Sequential Function Chart) under SIMATIC Manager for process control and automation logic.</p>
                                </li>
                                <li>
                                    <strong>ABB 800xA / Freelance DCS
                                    </strong>
                                    <p>Programmed using Function Block Diagrams (FBD), Sequential Logic, and Control Modules with integrated graphics.</p>
                                </li>
                                <li>
                                    <strong>Honeywell Experion PKS</strong>
                                    <p>Uses Control Builder and Function Blocks for process strategies and logic implementation.</p>
                                </li>
                                <li>
                                    <strong>Emerson DeltaV</strong>
                                    <p>Employs Function Blocks, SFC, and graphical control modules for batch and continuous processes.</p>
                                </li>
                                <li>
                                    <strong>Yokogawa CENTUM VP</strong>
                                    <p>Uses Function Block programming and sequential control language (SFC/SL) for advanced process automation.</p>
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

export default DCS;