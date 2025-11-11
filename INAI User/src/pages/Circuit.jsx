import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cpu, Code, Projector, Server, MemoryStick, Power, FileInput, FileOutput, Code2Icon } from 'lucide-react';
import { GiCpu } from 'react-icons/gi';
import '../styles/plc.css';
import { PiDeviceMobileCamera } from 'react-icons/pi';

const Circuit = () => {
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
                <button onClick={handleBack} className="back-button">
                    Back to Robotics
                </button>

                <div className="plc-header">
                    <div className="plc-icon">
                        <Cpu size={48} />
                    </div>
                    <h1>Circuit</h1>
                    <p className="subtitle">the circuit acts as the nervous system of Robotics</p>
                </div>

                <div className="plc-content">
                    <section className="plc-overview ">
                        <h2>Introduction to Circuit</h2>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                        When the path of the circuit is complete and closed, electric current flows easily and the circuit is said to be a closed circuit. However, when the path is broken or disconnected, the flow of current stops, and it becomes an open circuit.
                        </h5>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                        Circuits can be designed in different ways, such as series circuits (where components are connected end-to-end) or parallel circuits (where components are connected across common points). Each type of circuit has its own applications and advantages.</h5>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                        In modern technology, circuits are not limited to simple wires and bulbs but are made of tiny electronic components like resistors, capacitors, transistors, and integrated chips, which control and process signals in advanced devices.
                        </h5>
                    </section>



                    <section className="python-ai-section">
                        <h2>Types of Circuit
                        </h2>

                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>1. Series Circuit:
                                </h3>
                                <p>
                                A series circuit connects components end to end, so the same current flows through all of them. It’s simple to design but if one component fails, the entire circuit stops working. Example: old string lights.
                                </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/SeriesCircuit.webp" alt="Series Circuit" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>2. Parallel Circuit:
                                </h3>
                                <p>
                                In this type, components are connected in multiple paths. Each path works independently, so if one fails, others keep working. Example: household wiring systems.
                                </p>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/ParallelCircuit.webp" alt="Parallel Circuit" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>3. Combination Circuit:</h3>
                                <p>
                                This circuit combines both series and parallel connections. It is used when some components need the same current and others need the same voltage. Example: circuits in electronic gadgets.
                                </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Combination Circuit.webp" alt="Combination Circuit" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>4. DC Circuit (Direct Current) :
                                </h3>
                                <p>
                                A DC circuit carries current in only one direction, supplied by batteries or DC power sources. It’s used in mobile phones, laptops, and electric vehicles.
                                </p>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/DCcircuit.webp" alt="DC Circuit" />
                            </div>
                        </div>

                    </section>

                    <section className="importance-section">
                        <h2>Why Circuit is Important ?</h2>
                        {/* <h3>Why CAD Matters</h3> */}

                        <div className="importance-grid">
                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Cpu size={24} />
                                </div>
                                <h4>Flow of Electric Current :</h4>
                                <p>A circuit provides a continuous and closed path for electric current to flow from the power source to different components and back. It ensures that electrical energy can travel where needed. Without a circuit, electricity cannot flow, and no electrical device can work.

                                </p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Code size={24} />
                                </div>
                                <h4>Conversion of Energy:</h4>
                                <p>Circuits help in transforming electrical energy into other forms of energy. For example, light bulbs convert it into light, heaters into heat, and motors into motion. This conversion allows electricity to serve multiple useful purposes in daily life.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Projector size={24} />
                                </div>
                                <h4>Control and Safety:</h4>
                                <p>Circuits are designed to control the flow of electricity and keep it safe for use. Components like switches, fuses, and circuit breakers help start, stop, or regulate current. This prevents accidents like short circuits, electric shocks, and damage to appliances.
                                </p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Server size={24} />
                                </div>
                                <h4> Foundation of Technology:</h4>
                                <p>All modern technologies rely on circuits for operation. Devices such as computers, mobile phones, televisions, and vehicles work through electrical and electronic circuits. They form the core of automation, communication, and digital systems in today’s world.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <MemoryStick size={24} />
                                </div>
                                <h4>Use in Daily Life :</h4>
                                <p>Circuits are used everywhere around us. In homes, they power lights, fans, and refrigerators; in schools and offices, they run computers and projectors; and in industries, they control machines and robots. Circuits make life more convenient and efficient.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <FileInput size={24} />
                                </div>
                                <h4>Safe Use of Electricity : </h4>
                                <p>A well-designed circuit ensures safe distribution of electricity without overloading or waste. It helps prevent energy loss, overheating, and fires. Proper electrical circuits make it possible to use electricity reliably and safely in homes and workplaces.
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

export default Circuit;