import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cpu, Code, Projector, Server, MemoryStick, Power, FileInput, FileOutput, Code2Icon } from 'lucide-react';
import { GiCpu, GiSatelliteCommunication } from 'react-icons/gi';
import '../styles/plc.css';
import { PiDeviceMobileCamera, PiMonitorArrowUpFill } from 'react-icons/pi';
import { BiDevices } from 'react-icons/bi';
import { MdOutlineSensors } from 'react-icons/md';
import { TbAutomation } from 'react-icons/tb';


const SCADA = () => {
    console.log('SCADA component is mounting');
    const navigate = useNavigate();

    React.useEffect(() => {
        console.log('SCADA component mounted');
        return () => console.log('SCADA component unmounting');
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
                    <h1>SCADA Programming & Automation</h1>
                    <p className="subtitle">The Eyes and Ears of Industrial Automation</p>
                </div>

                <div className="plc-content">
                    <section className="plc-overview">
                        <h2>What is SCADA Programming?</h2>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            SCADA (Supervisory Control and Data Acquisition) is a system used to monitor, control, and analyze industrial operations remotely.
                        </h5>

                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            It collects real-time data from field devices (such as sensors and PLCs), processes and displays that data on a central computer or HMI, and allows operators to control the process using commands from the control center.
                        </h5>

                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            In simple terms, SCADA acts as the “supervisor” of the entire automation system keeping an eye on every component and making sure everything operates smoothly and safely.
                        </h5>
                    </section>

                    <section className="key-concepts">
                        <h2>Main Components of a SCADA System</h2>
                        <p style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            A complete SCADA architecture consists of four major components that work together to perform monitoring and control functions:
                        </p>
                        <div className="concept-cards">
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <MdOutlineSensors size={24} />
                                </div>
                                <h3>Field Devices (Sensors & Actuators)</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                                    These are the physical devices installed in the field that measure parameters such as temperature, flow, pressure, and voltage.

                                </h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <GiSatelliteCommunication size={24} />
                                </div>
                                <h3> Communication Network</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                                    This forms the backbone of SCADA. It connects the remote field devices to the control center using wired (Ethernet, fiber optics) or wireless (radio, satellite, cellular) communication
                                </h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <PiMonitorArrowUpFill size={24} />
                                </div>
                                <h3>Central Monitoring Station (HMI/SCADA Software)</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>This is the human-interface part of the system, usually located in a control room.
                                    Operators use large screens or computers to visualize live data, monitor alarms, view historical trends, and issue commands to control field devices.
                                </h5>
                            </div>
                        </div>
                    </section>

                    <section className="plc-usage">
                        <h2>Where SCADA Is Used</h2>

                        <p>SCADA systems are used wherever processes need continuous monitoring, remote control, and automatic data collection. These systems are designed for industries and infrastructures that run 24/7 and require accuracy, reliability, and safety. Below are some key sectors and how SCADA functions in each:</p>


                        
                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>1. Power Generation and Distribution:
                                </h3>
                                <p> In the power sector, SCADA plays a vital role in monitoring and controlling electrical grids, substations, and transformers.
                                It collects data such as voltage, current, frequency, and load from remote substations through RTUs or PLCs. Operators in a control room can monitor the health of every transformer or circuit breaker and can isolate faulty lines instantly during a power fault.
                                </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Power Generation and Distribution.webp" alt="Power Generation and Distribution" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>2. Water and Wastewater Treatment Plants:
                                </h3>
                                <p>In water management systems, SCADA ensures that clean water is supplied efficiently and wastewater is treated properly. Sensors measure tank levels, flow rates, and chemical concentrations while actuators control valves and pumps.</p>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Water and Wastewater Treatment Plants.webp" alt="Water and Wastewater Treatment Plants" />
                            </div>
                        </div>
                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>3. Oil and Gas Industry:
                                </h3>
                                <p>The oil and gas sector spans thousands of kilometers of pipelines and remote drilling sites. SCADA provides real-time visibility and control over this massive network.
                                </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Oil and Gas Industry.webp" alt="Oil and Gas Industry" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>4. Manufacturing and Production Lines:
                                </h3>
                                <p>In factories, SCADA is integrated with PLCs and HMIs to monitor production speed, machine status, and quality parameters.</p>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Manufacturing and Production Lines.webp" alt="Manufacturing and Production Lines" />
                            </div>
                        </div>

                        





                        
                    </section>
                </div>

                {/* <section className="plc-comparison">
                    <div className="comparison-container">
                        <div className="advantages-section">
                            <h2>Advantages of Using PLCs</h2>

                            <div className="plc-advantage-item">
                                <h3>1.Centralized Control and Visibility:</h3>
                                <p>SCADA allows operators to manage hundreds of remote sites from one location. This centralized visibility improves coordination and eliminates the need for multiple field visits.</p>
                            </div>

                            <div className="plc-advantage-item">
                                <h3>2.Increased Efficiency and Productivity:</h3>
                                <p>By automating monitoring and control, SCADA minimizes human error, reduces energy consumption, and optimizes production rates. It keeps machines running smoothly and continuously.</p>
                            </div>

                            <div className="plc-advantage-item">
                                <h3>3.Faster Fault Detection and Response:</h3>
                                <p> The alarm system instantly alerts operators to faults like equipment failure, leaks, or power loss. Quick detection minimizes damage, reduces repair time, and prevents costly shutdowns.</p>
                            </div>

                            <div className="plc-advantage-item">
                                <h3>4.Improved Safety:</h3>
                                <p> In hazardous industries, SCADA reduces the need for human presence in dangerous areas. It allows remote supervision and automatic emergency shutdowns, protecting workers and assets.</p>
                            </div>

                            <div className="plc-advantage-item">
                                <h3>5.Data-Driven Decision Making:</h3>
                                <p>With continuous data collection and analysis, SCADA helps engineers and managers make smarter operational and maintenance decisions based on real evidence rather than guesswork.</p>
                            </div>

                            <div className="plc-advantage-item">
                                <h3>6.Cost Saving and Scalability:</h3>
                                <p>Once installed, SCADA significantly reduces operational costs by automating manual processes. Its modular design allows easy expansion as the industry grows, making it a future-ready solution.</p>
                            </div>
                        </div>

                        <div className="disadvantages-section">
                            <h2>Disadvantages of Not Using PLCs</h2>

                            <div className="plc-disadvantage-item">
                                <h3>1.Lack of Centralized Control</h3>
                                <p>Without SCADA, operators must physically visit each site or machine to monitor and control processes.
                                    This causes delays in coordination and inconsistent supervision across multiple locations.
                                    Managing multiple remote sites becomes time-consuming and manpower-intensive.
                                    There is no unified control room to view the entire operation in real time.
                                </p>
                            </div>

                            <div className="plc-disadvantage-item">
                                <h3>2.Reduced Operational Efficiency</h3>
                                <p>Manual monitoring and control are slower and prone to human error.
                                    Processes may run inefficiently due to delayed decisions or miscommunication.
                                    Equipment might stay ON longer than needed, leading to energy waste.
                                    Operators can’t instantly adjust setpoints or parameters during process changes, reducing productivity.

                                </p>
                            </div>

                            <div className="plc-disadvantage-item">
                                <h3>3.Slow Fault Detection and Delayed Response</h3>
                                <p>Without SCADA’s automated alarms and trend analysis:
                                    Equipment faults, leaks, or failures often go unnoticed until major damage occurs.
                                    Maintenance teams react late, increasing repair costs and downtime.
                                    Unplanned shutdowns can occur because there’s no early warning system.</p>
                            </div>

                            <div className="plc-disadvantage-item">
                                <h3>4. Poor Safety Control</h3>
                                <p>Without SCADA’s remote monitoring and automatic emergency functions:
                                    Operators must enter hazardous areas to perform inspections or shutdowns.
                                    In emergencies, manual response is slower, increasing accident risks.
                                    No system automatically isolates or stops dangerous equipment during abnormal conditions.
                                </p>
                            </div>
                            <div className="plc-disadvantage-item">
                                <h3>5.No Real-Time Data or Historical Analysis</h3>
                                <p>Without SCADA, data collection is manual and often incomplete.
                                    There’s no continuous logging of parameters like temperature, pressure, or flow.
                                    Engineers can’t analyze trends or predict failures, leading to reactive maintenance.
                                    Decision-making relies on guesswork instead of data insights.
                                </p>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section className="plc-programming-section">
                    <h2>SCADA Programming</h2>

                    <div className="programming-grid">
                        <div className="programming-card">
                            <h3>Typical SCADA Programming Languages</h3>
                            <ul className="feature-list">
                                <li>
                                    <strong>Siemens WinCC / WinCC OA</strong>
                                    <p>Uses VBScript, C, ANSI C for automation logic, tag manipulation, and dynamic display control.</p>
                                </li>
                                <li>
                                    <strong>Wonderware (AVEVA System Platform)</strong>
                                    <p>Uses VBScript, ArchestrA Script for event handling, alarm management, and process control.</p>
                                </li>
                                <li>
                                    <strong>Ignition SCADA</strong>
                                    <p>Uses Python (Jython) for flexible scripting, database access, and API integration.</p>
                                </li>
                                <li>
                                    <strong>GE iFIX / Cimplicity</strong>
                                    <p>Uses VBScript, C for object-based scripting and custom functionality.</p>
                                </li>
                                <li>
                                    <strong>Schneider EcoStruxure / Vijeo Citect</strong>
                                    <p>Uses Cicode (C-like language) for advanced automation and logic scripting.</p>
                                </li>
                                <li>
                                    <strong>InduSoft Web Studio / Studio 2020</strong>
                                    <p>Uses VBScript, Built-in Expressions for display logic and process automation.</p>
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

export default SCADA;