import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cpu, Code, Projector, Server, MemoryStick, Power, FileInput, FileOutput, Code2Icon } from 'lucide-react';
import { GiCpu } from 'react-icons/gi';
import '../styles/plc.css';
import { PiDeviceMobileCamera } from 'react-icons/pi';

const Embeddedsystem = () => {
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
                    <h1>Embedded System</h1>
                    <p className="subtitle">An embedded system acts as the brain of an electronic device — it senses, thinks, and controls how the machine behaves.</p>
                </div>

                <div className="plc-content">
                    <section className="plc-overview ">
                        <h2>Introduction</h2>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                        An embedded system is a special type of computer system designed to perform a specific task or function within a larger device. It combines both hardware and software to control and manage how a device operates.
                        </h5>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                        These systems are found in everyday machines like washing machines, cars, mobile phones, traffic lights, and medical equipment. Unlike general-purpose computers, embedded systems are built for one main job and work continuously and efficiently.</h5>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                        They are designed to be fast, reliable, and power-efficient, often running in real time to respond quickly to inputs. Embedded systems play a major role in making modern devices smart, automatic, and user-friendly.
                        </h5>
                    </section>



                    <section className="python-ai-section">
                        <h2>Types of Embedded Systems
                        </h2>

                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>1. Real-Time Embedded Systems:
                                </h3>
                                <p>- Real-time embedded systems are designed to respond instantly and accurately to inputs within a fixed time limit.
                                </p>
                                <p>- They are used in applications where timing is critical such as airbag deployment, medical devices, and flight control systems.
                                </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/real_time.webp" alt="Real-Time Embedded Systems" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>2. Standalone Embedded Systems:
                                </h3>
                                <p>- Standalone systems work independently without needing any external control or connection to other devices.
                                </p>
                                <p>- They take inputs, process data, and produce outputs on their own like washing machines, calculators, or microwave ovens.
                                </p>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Standalone.webp" alt="Standalone Embedded Systems" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>3. Networked Embedded Systems:</h3>
                                <p>- Networked embedded systems are connected to a network (wired or wireless) to exchange data and commands with other systems.
                                </p>
                                <p>- They are widely used in IoT devices, smart homes, industrial automation, and communication equipment.
                                </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Networked.webp" alt="Networked Embedded Systems" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>4. Mobile Embedded Systems :
                                </h3>
                                <p>- Mobile embedded systems are found in portable and handheld devices that move with the user.
                                </p>
                                <p>- Examples include smartphones, digital cameras, smartwatches, and GPS devices, all of which use embedded controllers for specific tasks.
                                </p>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/mobile.webp" alt="Mobile Embedded Systems" />
                            </div>
                        </div>

                    </section>

                    <section className="importance-section">
                        <h2>Why Embedded system is important ?</h2>
                        {/* <h3>Why CAD Matters</h3> */}

                        <div className="importance-grid">
                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Cpu size={24} />
                                </div>
                                <h4>Control and automation :</h4>
                                <p>They help machines work automatically without human effort — for example, in washing machines, cars, or traffic lights.


                                </p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Code size={24} />
                                </div>
                                <h4>Speed and accuracy:</h4>
                                <p> Embedded systems perform tasks very quickly and with high precision, which is essential in devices like medical machines or industrial robots..</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Projector size={24} />
                                </div>
                                <h4>Reliability:</h4>
                                <p>They are designed to work continuously for years without failure, ensuring consistent performance in critical systems such as airplanes, cars, and hospitals.
                                </p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Server size={24} />
                                </div>
                                <h4> Energy efficiency:</h4>
                                <p>Embedded systems consume very little power, making them suitable for battery-powered and portable devices.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <MemoryStick size={24} />
                                </div>
                                <h4>Compact and low-cost design :</h4>
                                <p>They make devices smaller, lighter, and cheaper to produce, helping technology reach more people.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <FileInput size={24} />
                                </div>
                                <h4>Real-time response : </h4>
                                <p>They react immediately to inputs, which is vital for systems like airbags, braking systems, and medical monitors.
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

export default Embeddedsystem;