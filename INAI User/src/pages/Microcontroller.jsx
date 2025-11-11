import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cpu, Code, Projector, Server, MemoryStick, Power, FileInput, FileOutput, Code2Icon } from 'lucide-react';
import { GiCpu } from 'react-icons/gi';
import '../styles/plc.css';
import { PiDeviceMobileCamera } from 'react-icons/pi';

const Microcontroller = () => {
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
                    <h1>Microcontroller</h1>
                    <p className="subtitle">A microcontroller is the brain of an embedded system — it processes information, makes decisions, and controls every action of the device.</p>
                </div>

                <div className="plc-content">
                    <section className="plc-overview ">
                        <h2>Introduction to Microcontroller:</h2>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                        A microcontroller is a compact, integrated circuit designed to perform specific control tasks within an electronic system. It acts as the “brain” of many electronic devices, controlling their operations automatically based on programmed instructions.
                        </h5>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                        Unlike a general-purpose microprocessor, which requires external components to function, a microcontroller has all the essential parts—such as a central processing unit (CPU), memory (RAM and ROM), input/output (I/O) ports, and timers—built into a single chip. This makes it self-sufficient, cost-effective, and ideal for use in embedded systems.</h5>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                        The main role of a microcontroller is to sense inputs, process data, and control outputs. For example, in a washing machine, the microcontroller reads signals from sensors (like water level or temperature sensors), processes that information, and sends commands to control motors, valves, or displays.
                        </h5>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                        It operates according to the firmware — a set of programmed instructions stored in its memory that define how it should behave under certain conditions. This allows the device to respond intelligently to real-world inputs.
                        </h5>
                    </section>


                    <section className="python-ai-section">
                        <h2>Types of Microcontroller
                        </h2>

                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>1. By Bit Size:
                                </h3>
                                <p> <b>8-bit</b> - Simple, low-cost controllers for basic tasks (e.g., ATmega328, PIC16F, Intel 8051)
                                </p>
                                <p> <b>16-bit</b> - Mid-range performance (e.g., MSP430, PIC24)
                                </p>
                                <p> <b>32-bit</b> - High performance for complex applications (e.g., ARM Cortex-M series, ESP32, STM32)
                                </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/By Bit Size.webp" alt="By Bit Size" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>2. By Architecture:
                                </h3>
                                <p><b>Harvard Architecture</b> - Separate memory for instructions and data, faster execution
                                </p>
                                <p><b>Von Neumann Architecture</b> - Single memory space for both instructions and data
                                </p>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/By Architecture.webp" alt="By Architecture" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>3. By Memory Type :</h3>
                                <p><b>Embedded Memory</b> - Program memory built into the chip
                                </p>
                                <p><b>External Memory</b> - Requires external memory chips </p>
                                <p><b>Flash-based</b> - Reprogrammable non-volatile memory </p>
                                <p><b>ROM/EPROM/EEPROM</b> - Various permanent storage types
                                </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/By Memory Type.webp" alt="By Memory Type" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>4. By Application :
                                </h3>
                                <p><b>General Purpose</b> - Versatile for various applications (Arduino boards, PIC, AVR)
                                </p>
                                <p><b>Automotive</b> - Designed for vehicles (Infineon AURIX, NXP MPC5xx)
                                </p>
                                <p><b>IoT/Wireless</b> - Built-in connectivity (ESP8266, ESP32, nRF52)
                                </p>
                                <p><b>Industrial</b> - Ruggedized for harsh environments
                                </p>
                                <p><b>Low Power</b> - Optimized for battery operation (MSP430, STM32L series)
                                </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/By Application.webp" alt="By Application" />
                            </div>
                        </div>

                    </section>

                    <section className="importance-section">
                        <h2>Importance of Microcontrollers</h2>
                        {/* <h3>Why CAD Matters</h3> */}

                        <div className="importance-grid">
                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Cpu size={24} />
                                </div>
                                {/* <h4>Control and automation :</h4> */}
                                <p>Microcontrollers play a vital role in modern electronic systems because they act as the “brains” of embedded devices. They control the functioning of machines and systems by processing input data and generating the required output automatically.
                                </p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Code size={24} />
                                </div>
                                {/* <h4>Speed and accuracy:</h4> */}
                                <p> This makes them essential for building intelligent and self-operating devices. They help reduce the overall size, cost, and complexity of electronic products since a single microcontroller can perform multiple functions like sensing, processing, and controlling.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Projector size={24} />
                                </div>
                                {/* <h4>Reliability:</h4> */}
                                <p>Their ability to operate with low power and high efficiency makes them ideal for battery-powered and portable devices. This improves energy conservation and system performance.
                                </p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Server size={24} />
                                </div>
                                {/* <h4> Energy efficiency:</h4> */}
                                <p>In industries, microcontrollers are crucial for automation, robotics, and control systems, improving speed, precision, and reliability in various applications.
                                </p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <MemoryStick size={24} />
                                </div>
                                {/* <h4>Compact and low-cost design :</h4> */}
                                <p>They are also important in healthcare, communication, automotive systems, and home appliances — making daily life easier, safer, and more efficient.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <FileInput size={24} />
                                </div>
                                {/* <h4>Real-time response : </h4> */}
                                <p>Microcontrollers are the backbone of the embedded system world, enabling innovation and smart functionality in nearly every modern electronic device.
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

export default Microcontroller;