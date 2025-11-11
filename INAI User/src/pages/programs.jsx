import { LiaPersonBoothSolid, LiaRobotSolid } from "react-icons/lia";
import { LuBrainCircuit } from "react-icons/lu";
import '../styles/Careers.css'; 

const Programs = () => {
    return (
        <>
            <section className="programs-section" id="apply-now-btn">
                <div className="container">
                    <div className="section-header" >
                        <h2>Join Our Programs</h2>
                        <p>Take the next step in your career with our specialized programs</p>
                    </div>
                    <div className="programs-grid">
                        <div className="program-card ai-ml">
                            <div className="program-content">
                                <div className="program-icon">
                                    <LuBrainCircuit size={40} color='#4a6cf7' />
                                </div>
                                <h3>AI/ML</h3>
                                <p>Dive into the world of AI and ML. Work on cutting-edge projects and develop intelligent solutions that shape the future.</p>
                                <ul className="program-features">
                                    <li>ML models development</li>
                                    <li>Deep Learning applications</li>
                                    <li>Neural networks and algorithms</li>
                                </ul>
                                <button className="program-button" onClick={() => handleNavigation('/careers/ai-ml-explore')}>
                                    Explore AI/ML
                                </button>
                            </div>
                        </div>

                        <div className="program-card automation">
                            <div className="program-content">
                                <div className="program-icon">
                                    <LiaRobotSolid size={40} color='#10b981' />
                                </div>
                                <h3>Automation</h3>
                                <p>Master the art of automation to streamline processes and increase efficiency across various domains and industries.</p>
                                <ul className="program-features">
                                    <li>Process automation</li>
                                    <li>RPA (Robotic Process Automation)</li>
                                    <li>Workflow optimization</li>
                                </ul>
                                <button className="program-button" onClick={() => handleNavigation('/careers/automation-explore')}>
                                    Explore Automation
                                </button>
                            </div>
                        </div>

                        <div className="program-card robotics">
                            <div className="program-content">
                                <div className="program-icon">
                                    <LiaPersonBoothSolid size={40} color='#f59e0b' />
                                </div>
                                <h3>Robotics</h3>
                                <p>Design and develop intelligent robotic systems that can interact with the physical world and perform complex tasks autonomously.</p>
                                <ul className="program-features">
                                    <li>Robotic systems design</li>
                                    <li>Computer vision integration</li>
                                    <li>Autonomous systems</li>
                                </ul>
                                <button className="program-button" onClick={() => handleNavigation('/careers/robotics-explore')}>
                                    Explore Robotics
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Programs;