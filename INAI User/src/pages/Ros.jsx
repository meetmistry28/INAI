import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cpu, Code, Projector, Server, MemoryStick, Power, FileInput, FileOutput, Code2Icon } from 'lucide-react';
import { GiCpu } from 'react-icons/gi';
import '../styles/plc.css';
import { PiDeviceMobileCamera } from 'react-icons/pi';

const Ros = () => {
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
                    <h1> ROS (Robot Operating System)</h1>
                    <p className="subtitle">Empowering Robots with Intelligence Driven by ROS</p>
                </div>

                <div className="plc-content">
                    <section className="plc-overview ">
                        <h2>What is ROS (Robot Operating System) ?</h2>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                        ROS stands for Robot Operating System, which is an open-source framework designed to help in building, controlling, and managing robotic systems.
                        </h5>

                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                        It is not a real operating system like Windows or Linux, but a set of software tools, libraries, and programs that make robot development faster and easier.</h5>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                        ROS allows different parts of a robot such as sensors, motors, and controllers  to communicate and work together in a smooth, organized way.</h5>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                        It acts as the central brain of the robot, managing how data is shared and how the robot performs actions in real time.</h5>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                        Developers use ROS to perform advanced robotic functions like path planning, image processing, motion control, and mapping.</h5>


                    </section>



                    <section className="python-ai-section">
                        <h2>Popular CAD Software
                        </h2>

                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>1.ROS 1 (Robot Operating System 1)
                                </h3>
                                <p>
                                ROS 1 is the first and classic version of the Robot Operating System, mainly designed for Linux (Ubuntu) platforms.
                                </p>
                                <p>
                                It provides thousands of open-source packages, tools, and libraries for robot control, simulation, and data communication.
                                </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/ROS1.webp" alt="ROS 1" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>2.ROS 2 (Robot Operating System 2)
                                </h3>
                                <p>
                                ROS 2 is the upgraded and modern version developed to overcome the limits of ROS 1.
                                </p>
                                <p>
                                It supports multiple operating systems like Windows, Linux, and macOS and offers better speed, security, and real-time control.
                                </p>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/ROS2.webp" alt="ROS 2" />
                            </div>
                        </div>

                        
                    </section>

                    <section className="importance-section">
                        <h2>Why ROS is Important ?</h2>
                        {/* <h3>Why CAD Matters</h3> */}

                        <div className="importance-grid">
                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Cpu size={24} />
                                </div>
                                <h4>Simplifies Complex Robotics Development:</h4>
                                <p>ROS provides pre-built tools, libraries, and communication systems that remove the need to start coding from scratch. This allows developers to focus on creativity and functionality instead of low-level hardware integration. With ROS, building a robot becomes faster, more efficient, and less error-prone.
                                </p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Code size={24} />
                                </div>
                                <h4>Enables Communication Between All Robot Parts:</h4>
                                <p>ROS ensures that every part of the robot sensors, cameras, motors, and processors can share data in real time. This seamless communication allows robots to make intelligent decisions based on multiple inputs, improving coordination and performance during complex tasks.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Projector size={24} />
                                </div>
                                <h4>Accelerates Research and Innovation:</h4>
                                <p>Because ROS is open-source, students, researchers, and industries worldwide can experiment, share, and improve existing robotic solutions. This collaborative environment speeds up innovation and allows even small teams to build advanced robots using global knowledge resources.
                                </p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Server size={24} />
                                </div>
                                <h4>Supports Real-Time Simulation and Testing:</h4>
                                <p>ROS includes powerful simulation tools like Gazebo and RViz, which allow testing of robot behavior in a virtual environment before implementation. This reduces the cost and risk of hardware damage while ensuring accurate motion control, object detection, and environment interaction.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <MemoryStick size={24} />
                                </div>
                                <h4>Powers Automation and Intelligent Systems:</h4>
                                <p> ROS is the driving force behind autonomous vehicles, drones, and smart robots that can sense, plan, and act independently. It connects hardware and AI algorithms efficiently, enabling automation that improves productivity and safety in industries, research labs, and daily life.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <FileInput size={24} />
                                </div>
                                <h4>Scalable and Future-Ready Platform: </h4>
                                <p>Whether you’re building a small educational robot or a large industrial robot fleet, ROS can scale effortlessly. With the introduction of ROS 2, it now supports multi-robot coordination, real-time performance, and cross-platform compatibility  making it the future of robotics development
                                </p>
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

export default Ros;