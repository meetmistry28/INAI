import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cpu, Code, Projector, Server, MemoryStick, Power, FileInput, FileOutput, Code2Icon } from 'lucide-react';
import { GiCpu, GiSatelliteCommunication } from 'react-icons/gi';
import '../styles/plc.css';
import { PiDeviceMobileCamera, PiMonitorArrowUpFill } from 'react-icons/pi';
import { BiDevices } from 'react-icons/bi';
import { MdOutlineSensors } from 'react-icons/md';
import { TbAutomation } from 'react-icons/tb';


const ADAS = () => {
    console.log('ADAS component is mounting');
    const navigate = useNavigate();

    React.useEffect(() => {
        console.log('ADAS component mounted');
        return () => console.log('ADAS component unmounting');
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
                    <h1>ADAS (Advanced Driver Assistance System)</h1>
                    <p className="subtitle">Eyes & Intelligence of Automotive Automation</p>
                </div>

                <div className="plc-content">
                    <section className="plc-overview">
                        <h2>What is ADAS?</h2>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            ADAS (Advanced Driver Assistance System) can be defined as a collection of electronic systems and intelligent algorithms integrated into vehicles to assist the driver in making safer and more informed decisions. The system monitors the environment around the vehicle, processes real-time data, and provides warnings, control assistance, or autonomous intervention depending on the situation.
                        </h5>

                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            The primary goal of ADAS is accident prevention and safety enhancement. Unlike traditional safety systems such as seat belts or airbags, which react after an incident, ADAS is proactive, detecting potential hazards before they occur and either alerting the driver or taking preventive measures automatically.

                        </h5>

                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            ADAS covers a broad range of features, including collision avoidance, lane departure warning, adaptive cruise control, parking assistance, pedestrian detection, traffic sign recognition, and emergency braking systems. By integrating sensor fusion, machine learning, and control algorithms, ADAS enables vehicles to respond intelligently to complex and dynamic driving environments.
                        </h5>


                    </section>

                    <section className="key-concepts">
                        <h2>Components of ADAS</h2>
                        <p style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            ADAS is built on several integrated components that together enable automation, intelligence, and continuous learning:
                        </p>
                        <div className="concept-cards">
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <PiMonitorArrowUpFill size={24} />
                                </div>
                                <h3>Sensors:
                                </h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                                    <ul>
                                        <li>Cameras: Detects lanes, traffic signs, vehicles, and pedestrians.</li>
                                        <li>Radar: Measures the distance and speed of nearby objects, essential for adaptive cruise control and collision avoidance.</li>
                                        <li>LiDAR: Provides precise 3D mapping of the environment, critical for autonomous navigation.</li>
                                        <li>

                                            Ultrasonic Sensors: Detect close range obstacles for parking assistance and low-speed maneuvers.</li>
                                    </ul>
                                </h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <MdOutlineSensors size={24} />
                                </div>
                                <h3>Electronic Control Units (ECUs):</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                                    ECUs are the “brains” of ADAS, processing sensor data, running algorithms, and sending commands to actuators for real-time vehicle control.

                                </h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <GiSatelliteCommunication size={24} />
                                </div>
                                <h3>Actuators:
                                </h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                                    Mechanisms that control steering, braking, acceleration, or haptic feedback in the steering wheel or pedals, enabling partial or full intervention when necessary.
                                </h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <PiMonitorArrowUpFill size={24} />
                                </div>
                                <h3>Human-Machine Interface (HMI):</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}> Provides driver alerts through visual displays, dashboard indicators, sound alerts, or vibrations, ensuring the driver is informed and can respond appropriately.</h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <PiMonitorArrowUpFill size={24} />
                                </div>
                                <h3>Software & Algorithms:</h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>Include machine learning models, sensor fusion algorithms, image processing, and decision-making logic that enable real-time hazard detection and intervention.</h5>
                            </div>
                            <div className="concept-card">
                                <div className="concept-icon">
                                    <PiMonitorArrowUpFill size={24} />
                                </div>
                                <h3>Connectivity Modules :
                                </h3>
                                <h5 style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}> Some ADAS systems connect to GPS, cloud platforms, or vehicle-to-vehicle (V2V) networks for additional data like traffic updates, road hazards, or cooperative driving insights.
                                </h5>
                            </div>


                        </div>
                    </section>

                    <section className="plc-usage">
                        <h2>Where ADAS Is Used</h2>

                        <p>ADAS is used in various industries and applications to automate repetitive and rule-based tasks. Below are the most common applications and examples:</p>


                          <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>1. Passenger Vehicles:
                                </h3>
                                <p>Most modern cars include ADAS features like lane departure warning, adaptive cruise control, automatic emergency braking, and parking assistance.
                                </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Passenger Vehicles.webp" alt="Passenger Vehicles" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>2. Commercial Vehicles:
                                </h3>
                                <p>Trucks and buses use ADAS for collision mitigation, blind-spot monitoring, fatigue detection, and stability control to reduce accidents and improve fleet safety.</p>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Commercial Vehicles.webp" alt="Commercial Vehicles" />
                            </div>
                        </div>
                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>3. Public Transportation & Ride-Sharing:
                                </h3>
                                <p> Buses, taxis, and ride-sharing vehicles integrate ADAS to enhance passenger safety and optimize route management.
                                </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Public Transportation & Ride-Sharing.webp" alt="Public Transportation & Ride-Sharing" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>4. Autonomous Vehicle Prototypes:
                                </h3>
                                <p> ADAS forms the foundation of Level 2-4 semi autonomous vehicles, providing critical environmental awareness and control assistance.</p>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Autonomous Vehicle Prototypes.webp" alt="Autonomous Vehicle Prototypes" />
                            </div>
                        </div>



                    </section>
                </div>

                {/* <section className="plc-comparison">
                    <div className="comparison-container">
                        <div className="advantages-section">
                            <h2>Advantages of Using ADAS</h2>

                            <div className="plc-advantage-item">
                                <h3>1.Enhanced Safety</h3>
                                <p>ADAS continuously monitors the vehicle’s surroundings and warns the driver of potential dangers.</p>
                            </div>

                            <div className="plc-advantage-item">
                                <h3>2. Reduced Human Error</h3>
                                <p>Since most road accidents occur due to driver mistakes, ADAS minimizes reliance on human reaction time.</p>
                            </div>

                            <div className="plc-advantage-item">
                                <h3>3.Improved Driving Comfort</h3>
                                <p>ADAS features like adaptive cruise control and lane centering assist make long drives less tiring.
                                </p>
                            </div>

                            <div className="plc-advantage-item">
                                <h3>4. Better Traffic Management</h3>
                                <p>With features like automatic speed regulation, stop-and-go assist, and smart navigation, ADAS helps maintain smoother traffic flow.</p>
                            </div>

                            <div className="plc-advantage-item">
                                <h3>5. Lower Maintenance and Operational Costs</h3>
                                <p>ADAS helps prevent minor collisions and wear on brakes or tires by promoting smoother driving.
                                    Fewer accidents mean lower insurance costs and less frequent repairs.

                                </p>
                            </div>

                            <div className="plc-advantage-item">
                                <h3>6.Support for Autonomous Driving</h3>
                                <p>ADAS is the foundation for fully autonomous vehicles.
                                    Each level of automation builds upon ADAS technologies like object detection, sensor fusion, and decision-making algorithms.

                                </p>
                            </div>
                            <div className="plc-advantage-item">
                                <h3>7. Driver Awareness and Training</h3>
                                <p>ADAS improves the driver’s awareness of the vehicle’s surroundings through visual and audio alerts.
                                </p>
                            </div>
                        </div>

                        <div className="disadvantages-section">
                            <h2>Disadvantages of Not Using ADAS</h2>

                            <div className="plc-disadvantage-item">
                                <h3>1.Increased Accident Risk</h3>
                                <p>Without ADAS, drivers have no automatic assistance to avoid collisions or stay in their lane.
                                    Human reaction times are slower compared to machine detection systems.

                                </p>
                            </div>

                            <div className="plc-disadvantage-item">
                                <h3>2.Higher Human Error and Fatigue</h3>
                                <p>Manual driving puts full responsibility on the driver for every decision.
                                    Fatigue, distraction, or inexperience can easily lead to mistakes such as delayed braking or missed blind spots.
                                </p>
                            </div>

                            <div className="plc-disadvantage-item">
                                <h3>3.Reduced Comfort and Convenience
                                </h3>
                                <p>In vehicles without ADAS, drivers must manually manage speed, distance, and lane positioning at all times.</p>
                            </div>

                            <div className="plc-disadvantage-item">
                                <h3>4.Poor Traffic Flow and Fuel Inefficiency</h3>
                                <p>Manual drivers often brake or accelerate unpredictably, disrupting traffic rhythm.
                                    Without smart systems to manage speed or spacing, congestion increases and fuel is wasted.
                                </p>
                            </div>
                            <div className="plc-disadvantage-item">
                                <h3>5.Higher Accident and Insurance Costs</h3>
                                <p>Without preventive systems, vehicles are more likely to be involved in collisions.
                                    Even minor accidents lead to expensive repairs, higher insurance premiums, and lost time.
                                </p>
                            </div>
                            <div className="plc-disadvantage-item">
                                <h3>6.No Transition Toward Automation

                                </h3>
                                <p>Without ADAS, vehicles remain fully manual and cannot adapt to future autonomous or connected vehicle networks.
                                </p>
                            </div>
                            <div className="plc-disadvantage-item">
                                <h3>7.Lower Situational Awareness</h3>
                                <p>Drivers without ADAS assistance may miss hidden hazards or objects outside their view.
                                    Without camera, radar, or sensor alerts, blind spots and rear collisions become more likely.
                                </p>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section className="plc-programming-section">
                    <h2>ADAS Programming</h2>

                    <div className="programming-grid">
                        <div className="programming-card">
                            <h3>Typical ADAS Development Tools and Technologies</h3>
                            <ul className="feature-list">
                                <li>
                                    <strong>MATLAB / Simulink</strong>
                                    <p>Used for model-based design, simulation, and algorithm development for perception, control, and sensor fusion.</p>
                                </li>
                                <li>
                                    <strong>C / C++
                                    </strong>
                                    <p>Core programming languages used in embedded software development for real-time systems in vehicles.</p>
                                </li>
                                <li>
                                    <strong>Python</strong>
                                    <p>Used for AI model training, sensor data analysis, and simulation environments.</p>
                                </li>
                                <li>
                                    <strong>AUTOSAR (Classic / Adaptive)</strong>
                                    <p>A standardized automotive software architecture framework for developing modular and safe ADAS components.</p>
                                </li>
                                <li>
                                    <strong>ROS / ROS2 (Robot Operating System)</strong>
                                    <p>Used for sensor integration, path planning, and autonomous driving simulations.</p>
                                </li>
                                <li>
                                    <strong>OpenCV</strong>
                                    <p>Computer vision library used for object detection, lane tracking, and image processing.</p>
                                </li>
                                <li>
                                    <strong>CarSim / PreScan / dSPACE / CANalyzer</strong>
                                    <p>Simulation and testing tools for vehicle dynamics, sensor modeling, and real-time data validation.</p>
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

export default ADAS;