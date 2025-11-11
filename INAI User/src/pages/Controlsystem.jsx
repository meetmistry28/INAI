import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cpu, Code, Projector, Server, MemoryStick, Power, FileInput, FileOutput, Code2Icon } from 'lucide-react';
import { GiCpu } from 'react-icons/gi';
import '../styles/plc.css';
import { PiDeviceMobileCamera } from 'react-icons/pi';

const Controlsystem = () => {
    console.log('CAD component is mounting');
    const navigate = useNavigate();

    React.useEffect(() => {
        console.log('CAD component mounted');
        return () => console.log('CAD component unmounting');
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
                    <h1>Control System in Robotics</h1>
                    <p className="subtitle">Precision in Motion, Powered by Control Systems</p>
                </div>

                <div className="plc-content">
                    <section className="plc-overview ">
                        <h2>What is Control System in Robotics ?</h2>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                        A Control System in Robotics is the brain and backbone that manages how a robot behaves, moves, and interacts with its environment.
                        </h5>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                        It is responsible for controlling the robot’s actions, ensuring accuracy, stability, and coordination between different components like sensors, actuators, and motors.</h5>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                        In simple terms, a control system receives input signals (from sensors), processes them using algorithms or logic, and then sends output commands to perform specific actions.
                        </h5>
                    </section>



                    <section className="python-ai-section">
                        <h2>Types of Control Systems in Robotics
                        </h2>

                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>1. Open-Loop Control System:
                                </h3>
                                <p>
                                In an open-loop system, the output is not compared to the input — there is no feedback.
                                </p>
                                <p>
                                The controller sends signals to actuators directly without checking if the desired result is achieved.
                                </p>
                                <p>
                                It’s simple and inexpensive but less accurate, often used in basic robots or simple tasks like motor control.
                                </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Open-Loop.webp" alt="Open-Loop Control System" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>2.Closed-Loop Control System:
                                </h3>
                                <p>
                                In a closed-loop system, the output is constantly monitored and compared to the desired input.
                                </p>
                                <p>
                                Feedback from sensors helps the controller correct errors automatically.
                                </p>
                                <p>
                                It offers higher accuracy, stability, and adaptability, commonly used in industrial and autonomous robots.
                                </p>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/close_loop.webp" alt="Closed-Loop Control System" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>3. Linear Control System:</h3>
                                <p>
                                Assumes the relationship between input and output is linear and predictable.
                                </p>
                                <p>
                                Works best for systems with small variations and simple motion control.
                                </p>
                                <p>
                                Often used in automated conveyor belts and robotic arms.
                                </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/linear_control.webp" alt="Linear Control System" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>4.Nonlinear Control System:
                                </h3>
                                <p>
                                Used when the system behavior is complex and unpredictable, as in drones or humanoid robots.
                                </p>
                                <p>
                                It handles dynamic and uncertain environments, providing flexibility and adaptability.
                                </p>
                                <p>
                                Nonlinear control systems are the foundation for AI-driven and adaptive robotics
                                </p>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/nonlinear_control.webp" alt="Nonlinear Control System" />
                            </div>
                        </div>

                    </section>

                    <section className="importance-section">
                        <h2>Why Control Systems is important in robotics?</h2>
                        {/* <h3>Why CAD Matters</h3> */}

                        <div className="importance-grid">
                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Cpu size={24} />
                                </div>
                                <h4>Precision and Accuracy :</h4>
                                <p>- A control system ensures every robotic movement whether it’s picking an object or welding  happens with exact speed, distance, and angle.
                                </p><br/>
                                <p>- By continuously comparing actual performance with the desired output, it corrects even tiny errors in real time.
                                </p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Code size={24} />
                                </div>
                                <h4>Stability and Balance:</h4>
                                <p>- Robots often work in dynamic or unpredictable environments, and a control system helps them stay stable.</p><br/>
                                <p>- Through constant feedback from sensors, it maintains balance even when external forces or vibrations occur.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Projector size={24} />
                                </div>
                                <h4>Automation and Efficiency:</h4>
                                <p>- The control system acts as the automation brain, allowing robots to operate without human guidance.
                                </p><br/>
                                <p>- It manages timing, sequencing, and motion flow, ensuring tasks are completed faster and more consistently.
                                </p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Server size={24} />
                                </div>
                                <h4> Feedback and Self-Correction:</h4>
                                <p>- A key reason control systems are vital is their ability to learn and adapt in real-time through feedback.</p><br/>
                                <p>- When the robot detects any deviation from its target, it immediately adjusts its actions to correct it.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <MemoryStick size={24} />
                                </div>
                                <h4>Safety and Reliability :</h4>
                                <p>- Control systems constantly monitor parameters like speed, torque, and position to prevent unsafe actions.</p><br/>
                                <p>- They enable emergency stops, limit enforcement, and collision avoidance protecting both humans and the robot.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <FileInput size={24} />
                                </div>
                                <h4>Adaptability and Learning : </h4>
                                <p>- Modern control systems are designed to adapt to new environments and tasks.
                                </p><br/>
                                <p>- Through AI-based or adaptive control algorithms, robots can adjust their movements when facing new challenges.
                                </p><br/>

                            </div>
                        </div>
                    </section>
                </div>

                <div className="career-footer">
                    <p>&copy; {new Date().getFullYear()} Career. All rights reserved.</p>
                </div>
            </div >

        </>
    );
};

export default Controlsystem;