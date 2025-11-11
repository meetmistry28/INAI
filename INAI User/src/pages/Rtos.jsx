import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cpu, Code, Projector, Server, MemoryStick, Power, FileInput, FileOutput, Code2Icon } from 'lucide-react';
import { GiCpu } from 'react-icons/gi';
import '../styles/plc.css';
import { PiDeviceMobileCamera } from 'react-icons/pi';

const Rtos = () => {
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
                    <h1>RTOS (Real-Time Operating System)</h1>
                    <p className="subtitle">Precision in Every Millisecond Powered by RTOS.</p>
                </div>

                <div className="plc-content">
                    <section className="plc-overview ">
                        <h2>What is RTOS (Real-Time Operating System)?</h2>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                        RTOS stands for Real-Time Operating System, which is a specialized type of operating system designed to manage tasks that must be completed within a fixed and predictable time limit.
                        </h5>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                        Unlike normal operating systems like Windows or Android, RTOS focuses on timing, accuracy, and reliability instead of general performance.</h5>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                        It ensures that every task or process in the system runs exactly when it is needed, without any delay, making it ideal for time-critical applications.</h5>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                        RTOS is commonly used in robots, drones, medical instruments, automotive control systems, and industrial automation where timing is crucial.</h5>
                    </section>



                    <section className="python-ai-section">
                        <h2>Types of RTOS
                        </h2>

                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>1. Hard RTOS
                                </h3>
                                <p>
                                A Hard Real-Time Operating System is the most strict type of RTOS where every task must finish within a specific time limit.
                                </p>
                                <p>
                                Even a tiny delay in task execution can cause a system breakdown or failure, especially in safety-critical environments.
                                </p>
                                <p>
                                It is mainly used in aircraft control systems, medical devices, defense systems, and space missions, where timing accuracy is life-critical.
                                </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Hard RTOS.webp" alt="Hard RTOS" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>2.Soft RTOS
                                </h3>
                                <p>
                                A Soft RTOS allows tasks to be completed slightly after their deadline without major system failure.
                                </p>
                                <p>
                                Such systems are commonly used in multimedia, communication systems, and   industrial monitoring, where small delays are acceptable.
                                </p>
                                <p>
                                Soft RTOS focuses on high system throughput and smooth operation rather than absolute timing precision.
                                </p>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Soft RTOS.webp" alt="Soft RTOS" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>3. Firm RTOS</h3>
                                <p>
                                A Firm RTOS is a balance between Hard and Soft RTOS, where missing some deadlines does not cause total failure but can affect system quality.
                                </p>
                                <p>
                                It is used in robotics, automotive control, and automation where timing matters but a few delays can be tolerated.
                                </p>
                                <p>
                                Firm RTOS provides reliability and flexibility, making it suitable for semi-critical real-time applications.

                                </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Firm RTOS.webp" alt="Firm RTOS" />
                            </div>
                        </div>

                    </section>

                    <section className="importance-section">
                        <h2>Why RTOS is Important?</h2>
                        {/* <h3>Why CAD Matters</h3> */}

                        <div className="importance-grid">
                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Cpu size={24} />
                                </div>
                                <h4>Ensures Real-Time Performance and Accuracy :</h4>
                                <p>In time-sensitive applications, even a delay of a few milliseconds can cause major system failure. RTOS guarantees that every task executes within a fixed time frame, ensuring precise control and immediate response. This makes it vital for systems such as medical monitors, autonomous vehicles, and robotic arms where timing is critical.
                                </p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Code size={24} />
                                </div>
                                <h4>Improves System Stability and Reliability:</h4>
                                <p>RTOS ensures consistent and predictable behavior by using priority-based scheduling. High-priority tasks are always executed first, reducing system lag and preventing failures. This reliability is essential in safety-critical operations like aircraft navigation, industrial robots, or automated braking systems.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Projector size={24} />
                                </div>
                                <h4>Enables Efficient Multitasking:</h4>
                                <p>RTOS allows multiple processes like sensor data reading, motor control, and communication to run simultaneously without interference. By managing CPU time intelligently, it ensures that each task performs efficiently, leading to smoother and faster system operation even in resource-limited environments.
                                </p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Server size={24} />
                                </div>
                                <h4> Supports Safety-Critical Applications:</h4>
                                <p> RTOS is widely used in environments where safety cannot be compromised. From pacemakers and drones to defense and space systems, RTOS ensures flawless timing and quick recovery from system faults. Its deterministic behavior helps avoid errors that could lead to accidents or equipment failure.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <MemoryStick size={24} />
                                </div>
                                <h4>Enhances Resource Management and Optimization :</h4>
                                <p>RTOS manages hardware resources like memory, CPU, and I/O devices efficiently. By allocating just the right amount of time and resources to each task, it prevents system overload and ensures maximum performance even on low-power embedded devices.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <FileInput size={24} />
                                </div>
                                <h4> Foundation for Modern Embedded and Robotic Systems : </h4>
                                <p>Modern robotics, IoT devices, and automation systems depend on RTOS for synchronization, real-time data handling, and precise actuation. Without RTOS, these systems would face unpredictable delays and inconsistent responses, making advanced automation nearly impossible.
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

export default Rtos;