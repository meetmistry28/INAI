import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cpu, Code, Projector, Server, MemoryStick, Power, FileInput, FileOutput, Code2Icon } from 'lucide-react';
import { GiCpu } from 'react-icons/gi';
import '../styles/plc.css';
import { PiDeviceMobileCamera } from 'react-icons/pi';

const Pcb = () => {
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
                    <h1>PCB ( Printed Circuit Board)</h1>
                    <p className="subtitle">Powering Innovation — One Circuit at a Time.</p>
                </div>

                <div className="plc-content">
                    <section className="plc-overview ">
                        <h2>What is PCB Design?</h2>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                        PCB stands for Printed Circuit Board.
                        </h5>

                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                        A PCB Design is the process of creating the layout and electrical connections of a circuit on a flat board using conductive pathways, pads, and tracks made of copper.</h5>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                        These boards hold and connect electronic components such as resistors, capacitors, ICs (Integrated Circuits), sensors, and microcontrollers in a compact and organized way.</h5>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                        In simple words, PCB design is like creating a roadmap for electricity — it decides how current will flow between components in an electronic device.</h5>
                    </section>



                    <section className="python-ai-section">
                        <h2>Types of PCB
                        </h2>

                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>1.Single-Sided PCB
                                </h3>
                                <p>
                                This type has only one layer of copper on one side of the board. It is used for simple circuits like LED lamps or small power supplies.
                                </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Single-Sided.webp" alt="Single-Sided PCB" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>2.Double-Sided PCB
                                </h3>
                                <p>
                                Copper layers exist on both sides of the board. It allows more complex circuit designs, like in amplifiers or small robot controllers.

                                </p>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/double_sided.webp" alt="Double-Sided PCB" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>3. Multi-Layer PCB</h3>
                                <p>
                                Contains three or more copper layers stacked together with insulation in between. Used in high-speed and advanced electronics like computers, smartphones, and robotic systems.engineers to design complex shapes like airplane wings and car bodies with exact measurements.

                                </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Multi-Layer.webp" alt="Multi-Layer PCB" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>4.Rigid PCB</h3>
                                <p>Made from a solid substrate (like fiberglass), it cannot bend. Common in desktop computers, TVs, and heavy machinery.
                                </p>
                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Rigid.webp" alt="Rigid PCB" />
                            </div>
                        </div>
                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>5. Flexible PCB</h3>
                                <p>
                                Made from flexible materials, these boards can bend or fold, used in wearable devices, cameras, and robotics where space is tight.

                                </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Flexible_PCB.webp" alt="Flexible PCB" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>6. Rigid-Flex PCB</h3>
                                <p>Combination of rigid and flexible PCBs. Used in advanced military, aerospace, and robotic systems where flexibility and durability are needed.
                                </p>
                            </div>
                            <div className="zigzag-image">
                                <img src="/images/rigid_Flex.webp" alt="Rigid-Flex PCB" />
                            </div>
                        </div>
                    </section>

                    <section className="importance-section">
                        <h2>Why PCB is Important?</h2>
                        {/* <h3>Why CAD Matters</h3> */}

                        <div className="importance-grid">
                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Cpu size={24} />
                                </div>
                                <h4>Foundation of Every Electronic Device:</h4>
                                <p>Every electronic device from your smartphone and smartwatch to industrial robots and satellites depends on PCBs to function. They act as the structural base that holds all components in one place, ensuring stability, organization, and continuous electrical connectivity. Without a PCB, connecting and maintaining complex circuits would be nearly impossible.
                                </p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Code size={24} />
                                </div>
                                <h4>Ensures Electrical Accuracy:</h4>
                                <p>PCBs are designed with precision-engineered copper pathways that control how current flows between components. This ensures consistent voltage levels, reduces signal loss, and prevents short circuits. As a result, PCBs help maintain the accuracy, timing, and performance of sensitive electronics like sensors, processors, and controllers.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Projector size={24} />
                                </div>
                                <h4>Supports Miniaturization:</h4>
                                <p>In today’s world, devices are getting smaller but more powerful and that’s possible only because of PCB technology. Multi-layer PCBs allow engineers to stack multiple circuits within tiny spaces, optimizing performance without increasing size. This is what makes modern gadgets like smartphones, wearables, and compact robots possible.
                                </p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Server size={24} />
                                </div>
                                <h4>Improves Performance and Reliability:</h4>
                                <p> Well-designed PCBs use optimized layouts that minimize electrical noise, heat generation, and interference. This not only ensures smoother signal transmission but also improves the overall reliability and lifespan of the device. Components remain securely fixed, reducing the risk of loose connections or breakdowns over time.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <MemoryStick size={24} />
                                </div>
                                <h4>Simplifies Assembly and Maintenance:</h4>
                                <p>PCBs make circuit building systematic every component has a defined place, label, and connection path. This simplifies the assembly process and makes troubleshooting much easier. Engineers can quickly identify faulty parts, replace them, and restore the circuit’s functionality with minimal effort and time.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <FileInput size={24} />
                                </div>
                                <h4>Enables Automation and Innovation: </h4>
                                <p>From industrial automation to smart robotics and IoT devices, PCBs enable intelligent control and data communication between sensors, processors, and actuators. They form the backbone of innovation by integrating hardware and software efficiently, helping machines think, act, and respond automatically.
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

export default Pcb;