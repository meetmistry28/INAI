import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cpu, Code, Projector, Server, MemoryStick, Power, FileInput, FileOutput, Code2Icon } from 'lucide-react';
import { GiCpu } from 'react-icons/gi';
import '../styles/plc.css';
import { PiDeviceMobileCamera } from 'react-icons/pi';

const PLC = () => {
    console.log('PLC component is mounting');
    const navigate = useNavigate();

    React.useEffect(() => {
        console.log('PLC component mounted');
        return () => console.log('PLC component unmounting');
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
                    <h1>PLC Programming & Automation</h1>
                    <p className="subtitle">The Brain of Industrial Automation</p>
                </div>

                <div className="plc-content">
                    <section className="plc-overview">
                        <h2>What is PLC Programming?</h2>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            A Programmable Logic Controller (PLC) is a specialized industrial digital       computer designed to automate and control machines, processes, or production lines in real-time. It is often referred to as the “brain of industrial automation” because it executes control logic, manages inputs and outputs, and ensures reliable operation in harsh industrial environments.

                        </h5>

                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            PLCs are widely used in industries like manufacturing, oil and gas, water treatment, chemical plants, power plants, automotive assembly, and even smart home systems. Unlike a general-purpose computer, a PLC is designed to operate continuously, handle electrical noise, vibrations, and extreme temperatures, making it ideal for industrial environments.
                        </h5>
                    </section>

                    <section className="key-concepts">
                        <h2>Major Components of PLC</h2>
                        <p style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            A PLC system is made up of several important components that work together to control an industrial process:

                        </p>
                        <div className="concept-cards">
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <GiCpu size={24} />
                                </div>
                                <h3>Central Processing Unit (CPU)</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                                    The CPU is the brain of the PLC, responsible for executing instructions and managing the overall operation of the system.
                                </h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <MemoryStick size={24} />
                                </div>
                                <h3>Memory</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                                    Memory stores the control program (written by engineers), input/output data, and operational parameters.
                                </h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <Power size={24} />
                                </div>
                                <h3>Power Supply</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>The power supply provides the necessary electrical power for the PLC and its components.</h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <FileInput size={24} />
                                </div>
                                <h3>Input Modules</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>Input modules are the eyes and ears of the PLC. They receive signals from sensors or switches and convert them into a form understandable by the CPU.</h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <FileOutput size={24} />
                                </div>
                                <h3>Output Modules</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>Output modules are the hands and legs of the PLC. They send electrical signals to devices such as motors, solenoids, relays, and valves to perform physical actions.</h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <PiDeviceMobileCamera size={24} />
                                </div>
                                <h3>Programming Device</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>This is used to write and load the logic program into the PLC. It can be a computer or a handheld device. The program is usually written in Ladder Logic, which resembles electrical circuit diagrams and is easy for engineers to understand.
                                </h5>
                            </div>
                        </div>
                    </section>

                    <section className="plc-usage">
                        <h2>How PLCs Are Used</h2>



                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>1. Machine Automation:
                                </h3>
                                <p> PLCs control individual machines such as lathes, milling machines, and packaging systems. They manage operations like speed control, sequence of actions, safety interlocks, and alarms.
                                </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Machine Automation.webp" alt="Machine Automation" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>2. Process Automation:
                                </h3>
                                <p>In industries like chemical, oil & gas, or water treatment, PLCs maintain continuous processes.They regulate temperature, flow rate, pressure, and chemical dosing automatically.</p>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Process Automation.webp" alt="Process Automation" />
                            </div>
                        </div>
                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>3. Sequential Control Systems:
                                </h3>
                                <p>In production lines, PLCs control step-by-step operations for example, in an automobile assembly line, each car passes through stages such as welding, painting, and inspection, all controlled by PLCs.
                                </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Sequential Control Systems.webp" alt="Sequential Control Systems" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>4. Integrated Systems:
                                </h3>
                                <p>PLCs often work together with SCADA or HMI systems for real-time monitoring and remote control.Operators can see live data, alarms, and graphs on a display screen while PLCs handle the physical control.</p>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Integrated Systems.webp" alt="Integrated Systems" />
                            </div>
                        </div>

                        
                    </section>
                </div>

                {/* <section className="plc-comparison">
                    <div className="comparison-container">
                        <div className="advantages-section">
                            <h2>Advantages of Using PLCs</h2>

                            <div className="plc-advantage-item">
                                <h3>1. Reliability</h3>
                                <p>PLCs are engineered for continuous, long-term operation in industrial environments — they use hardened electronics, robust enclosures, and industrial-grade power supplies to tolerate vibration, dust, moisture, and electrical noise. Their firmware and deterministic scan cycles are designed to fail-safe or safe-state when faults occur, and built-in diagnostics detect module failures early (e.g., power loss, I/O faults, communications drop).</p>
                            </div>

                            <div className="plc-advantage-item">
                                <h3>2. Flexibility</h3>
                                <p>A PLC's behavior is defined entirely by its user program, so changing how a machine operates usually requires only editing and downloading new code rather than rewiring physical relays or replacing hardware. Modern PLCs support multiple programming languages (Ladder Logic, Function Block, Structured Text), reusable libraries, and modular I/O.</p>
                            </div>

                            <div className="plc-advantage-item">
                                <h3>3. Compact Size</h3>
                                <p>PLCs condense the functionality of many electromechanical relays, timers, counters, and discrete controllers into a single rack or compact chassis with modular I/O cards. This reduces physical panel space, wiring complexity, and cabling costs.</p>
                            </div>

                            <div className="plc-advantage-item">
                                <h3>4. Accuracy</h3>
                                <p>PLCs execute deterministic scan cycles with millisecond-level responsiveness and precise timing primitives. Digital sampling and signal conditioning yield consistent, repeatable control actions, enabling tight synchronization between machines.</p>
                            </div>
                            <div className="plc-advantage-item">
                                <h3>5. Low Maintenance</h3>
                                <p>Compared with relay logic or mechanically actuated control systems, PLCs have fewer moving parts and rely on solid-state electronics, which significantly reduces wear and the need for routine mechanical servicing. Predictive diagnostics (e.g., memory checks, I/O health, watchdog timers) and easy access to error logs let technicians proactively replace failing modules before catastrophic failure. Firmware updates and modular replacements are quicker and cheaper than rewiring or rebuilding legacy panels.
                                </p>
                            </div>
                        </div>

                        <div className="disadvantages-section">
                            <h2>Disadvantages of Not Using PLCs</h2>

                            <div className="plc-disadvantage-item">
                                <h3>1. Low Reliability</h3>
                                <p>Without PLCs, control systems often depend on mechanical relays, switches, and wiring, which wear out over time due to moving contacts and arcing.
                                    Frequent failures and downtime occur in harsh industrial conditions (dust, vibration, heat).
                                    No built-in fault detection or diagnostics, so issues take longer to locate and fix.
                                    Systems may malfunction or stop unexpectedly during continuous 24/7 operations.</p>
                            </div>

                            <div className="plc-disadvantage-item">
                                <h3>2. Inflexibility</h3>
                                <p>Traditional control systems are hard-wired, so even a small process change needs:
                                    Rewiring of relays and switches
                                    Rebuilding or replacing panels
                                    Manual recalibration of timers or counters
                                    This makes process updates slow, costly, and error-prone, while PLCs can be reprogrammed instantly with software changes.
                                </p>
                            </div>

                            <div className="plc-disadvantage-item">
                                <h3>3. Complex Wiring</h3>
                                <p>Without PLCs, you need separate relay banks, timers, and counters for each control function.
                                    This increases panel size and wiring complexity.
                                    Maintenance becomes harder because tracing a single wire fault among hundreds is time-consuming.
                                    More space, materials, and installation time are required, raising project costs.

                                </p>
                            </div>

                            <div className="plc-disadvantage-item">
                                <h3>4. Poor Timing Control</h3>
                                <p>Manual or relay-based systems depend on mechanical timing and operator precision.
                                    No microsecond-level control → poor synchronization between machines.
                                    Timing drift occurs due to mechanical wear or temperature variations.
                                    Unsuitable for applications needing precise sequencing, like robotics, servo control, or packaging.</p>
                            </div>
                            <div className="plc-disadvantage-item">
                                <h3>5. High Maintenance Cost</h3>
                                <p>Mechanical relays and switches need frequent inspection, replacement, and cleaning.
                                    Contacts burn or stick due to arcing.
                                    Troubleshooting faults takes longer without digital diagnostics.
                                    Spare parts and technician labor costs increase over time.
                                    Result: Higher downtime and operational expenses.
                                </p>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section className="plc-programming-section">
                    <h2>PLC Programming</h2>
                    
                    <div className="programming-grid">
                        <div className="programming-card">
                            <h3>Typical PLC Programming Languages</h3>
                            <ul className="feature-list">
                                <li>
                                    <strong>Ladder Logic (LD)</strong>
                                    <p>Looks like electrical relay diagrams. Very common and easy to learn.</p>
                                </li>
                                <li>
                                    <strong>Function Block Diagram (FBD)</strong>
                                    <p>Uses blocks that represent functions like timers and counters.</p>
                                </li>
                                <li>
                                    <strong>Structured Text (ST)</strong>
                                    <p>High-level language similar to Pascal/C, ideal for complex math operations.</p>
                                </li>
                                <li>
                                    <strong>Sequential Function Chart (SFC)</strong>
                                    <p>Designed for step-by-step sequences and process flows.</p>
                                </li>
                                <li>
                                    <strong>Instruction List (IL)</strong>
                                    <p>Low-level language similar to assembly (less common in modern systems).</p>
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

export default PLC;