import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cpu, Code, Projector, Server, MemoryStick, Power, FileInput, FileOutput, Code2Icon } from 'lucide-react';
import { GiCpu, GiSatelliteCommunication } from 'react-icons/gi';
import '../styles/plc.css';
import { PiDeviceMobileCamera, PiMonitorArrowUpFill } from 'react-icons/pi';
import { BiDevices } from 'react-icons/bi';
import { MdOutlineSensors } from 'react-icons/md';
import { TbAutomation } from 'react-icons/tb';


const HMI = () => {
    console.log('HMI component is mounting');
    const navigate = useNavigate();

    React.useEffect(() => {
        console.log('HMI component mounted');
        return () => console.log('HMI component unmounting');
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
                    <h1>HMI</h1>
                    <p className="subtitle">The Face and Voice of Automation</p>
                </div>

                <div className="plc-content">
                    <section className="plc-overview">
                        <h2>What is HMI?</h2>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            The Human Machine Interface (HMI) is a graphical interface — usually a touchscreen, monitor, or software dashboard — that enables operators to interact with machines, control systems, or processes.

                        </h5>

                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            It displays real-time data, such as temperature, pressure, motor speed, and production count, and allows operators to send commands like starting or stopping machines, changing setpoints, or acknowledging alarms.
                        </h5>

                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            In simple words, HMI is the visual control panel through which humans “communicate” with machines.
                        </h5>
                    </section>

                    <section className="key-concepts">
                        <h2>Components of an HMI System</h2>
                        <p style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            A typical HMI system consists of the following components:
                        </p>
                        <div className="concept-cards">
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <MdOutlineSensors size={24} />
                                </div>
                                <h3>Hardware</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                                    The hardware part includes touchscreen panels, industrial monitors, control keyboards, or even computers. These devices display process information and receive user input.

                                </h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <GiSatelliteCommunication size={24} />
                                </div>
                                <h3>Software</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                                    The software component runs inside the HMI hardware or a connected computer. It defines the layout of screens, buttons, alarms, and graphics.
                                </h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <PiMonitorArrowUpFill size={24} />
                                </div>
                                <h3>Communication Interface</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>HMI connects to controllers like PLCs (Programmable Logic Controllers) or SCADA systems via industrial communication protocols (e.g., Modbus, Profibus, Ethernet/IP).
                                </h5>
                            </div>
                        </div>
                    </section>

                    <section className="plc-usage">
                        <h2>Where HMI Is Used</h2>

                        <p>HMI systems are found in nearly every industrial and commercial automation environment.Below are the most common applications and examples:</p>


                         <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>1. Manufacturing Plants:
                                </h3>
                                <p>Used to monitor and control production lines, robotic arms, and conveyor systems.
                                    Operators can visualize the complete process, identify machine faults, and make real-time adjustments for better productivity.
                                </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Manufacturing Plants.webp" alt="Manufacturing Plants" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>2. Power Plants:
                                </h3>
                                <p>In power generation or distribution, HMIs display system parameters such as voltage, current, and turbine speed.</p>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Power Plants.webp" alt="Power Plants" />
                            </div>
                        </div>
                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>3. Water and Wastewater Treatment:
                                </h3>
                                <p>HMIs are used to monitor tank levels, control pumps, regulate flow rates, and adjust chemical dosing automatically.
                                </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Water and Wastewater Treatment.webp" alt="Water and Wastewater Treatment" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>4. Building Automation:
                                </h3>
                                <p>In large buildings, HMIs manage air conditioning, lighting, and elevator systems.
                                    Facility managers can monitor energy usage and control devices from a central dashboard.</p>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Building Automation.webp" alt="Building Automation" />
                            </div>
                        </div>

                    </section>
                </div>

                {/* <section className="plc-comparison">
                    <div className="comparison-container">
                        <div className="advantages-section">
                            <h2>Advantages of Using HMI</h2>

                            <div className="plc-advantage-item">
                                <h3>1.Improved Operator Efficiency:</h3>
                                <p>HMIs provide instant access to information, reducing the time needed for troubleshooting and decision-making.</p>
                            </div>

                            <div className="plc-advantage-item">
                                <h3>2.Simplified Monitoring:</h3>
                                <p>Complex system data is displayed graphically, making it easier for operators to understand process conditions.</p>
                            </div>

                            <div className="plc-advantage-item">
                                <h3>3.Remote Control and Safety:</h3>
                                <p>Operators can control dangerous or distant machines from a safe location, minimizing human risk.</p>
                            </div>

                            <div className="plc-advantage-item">
                                <h3>4.Error Reduction:</h3>
                                <p> With visual alerts, automatic notifications, and guided controls, HMIs significantly reduce human mistakes.</p>
                            </div>

                            <div className="plc-advantage-item">
                                <h3>5.Data-Driven Insights:</h3>
                                <p>Recorded trends and reports help management analyze performance and plan maintenance activities effectively.</p>
                            </div>

                            <div className="plc-advantage-item">
                                <h3>6.Cost and Time Saving:</h3>
                                <p>HMI reduces manual inspection and supervision, saving operational time and labor costs.</p>
                            </div>
                        </div>

                        <div className="disadvantages-section">
                            <h2>Disadvantages of Not Using PLCs</h2>

                            <div className="plc-disadvantage-item">
                                <h3>1.Difficult and Slow Monitoring</h3>
                                <p>Without an HMI, operators must manually check individual meters, lights, and gauges spread across panels or machines.
                                </p>
                            </div>

                            <div className="plc-disadvantage-item">
                                <h3>2.Low Operator Efficiency</h3>
                                <p>Manual systems require operators to physically move between machines to view parameters or make adjustments.</p>
                            </div>

                            <div className="plc-disadvantage-item">
                                <h3>3. No Remote Access or Control</h3>
                                <p>Without HMI technology, all control actions must be done on-site at the machine panel.</p>
                            </div>

                            <div className="plc-disadvantage-item">
                                <h3>4.Higher Chance of Human Error</h3>
                                <p>When processes rely on manual input or interpretation of readings, mistakes are more likely.</p>
                            </div>
                            <div className="plc-disadvantage-item">
                                <h3>5. No Data Logging or Trend Analysis</h3>
                                <p>Without HMI, there is no automatic recording of real-time data or process trends.
                                </p>
                            </div>
                            <div className="plc-disadvantage-item">
                                <h3>6.Increased Downtime</h3>
                                <p>When faults occur, operators must inspect multiple local panels to identify the problem.
                                </p>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section className="plc-programming-section">
                    <h2>HMI Programming</h2>

                    <div className="programming-grid">
                        <div className="programming-card">
                            <h3>Typical HMI Programming / Configuration Tools</h3>
                            <ul className="feature-list">
                                <li>
                                    <strong>Siemens WinCC / TIA Portal</strong>
                                    <p>Used for creating operator screens, alarms, and tag communication with Siemens PLCs.</p>
                                </li>
                                <li>
                                    <strong>Allen-Bradley FactoryTalk View (ME/SE)</strong>
                                    <p>Rockwell’s HMI software for designing interactive displays and process visualization.</p>
                                </li>
                                <li>
                                    <strong>Schneider Vijeo Designer / EcoStruxure Operator Terminal Expert</strong>
                                    <p>Used for Schneider Magelis and Harmony HMIs, providing control and monitoring interfaces</p>
                                </li>
                                <li>
                                    <strong>Mitsubishi GT Designer / GT Works</strong>
                                    <p>Software for Mitsubishi GOT HMIs, allowing screen design and PLC tag integration.</p>
                                </li>
                                <li>
                                    <strong>Delta DOPSoft</strong>
                                    <p>Simple interface software for Delta HMIs to configure screens and communication.</p>
                                </li>
                                <li>
                                    <strong>ABB Panel Builder / CP600 Series</strong>
                                    <p>Used for ABB’s industrial panels with flexible graphic configuration.</p>
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

export default HMI;