import { useNavigate } from 'react-router-dom';
import { LuBrainCircuit } from 'react-icons/lu';
import { LiaPersonBoothSolid } from 'react-icons/lia';
import { LiaRobotSolid } from 'react-icons/lia';
import '../styles/Careers.css';

const CareerPath = () => {
    const navigate = useNavigate();

    const handleBoxClick = (path) => {
        navigate(path);
    };


    return (
        <>
            <section className="tech-section" id="careers" style={{ padding: '4rem 2rem' }}>
                <h2 className="section-title">Explore Career Paths</h2>
                <div className="tech-boxes">
                    <div className="tech-box" onClick={() => handleBoxClick('/careers/ai-ml-explore')}>
                        <div className="tech-icon">
                            <LuBrainCircuit size={48} />
                        </div>
                        <h3>AI/ML</h3>
                        <p>Explore careers in Artificial Intelligence and Machine Learning</p>
                    </div>
                    <div className="tech-box" onClick={() => handleBoxClick('/careers/automation-explore')}>
                        <div className="tech-icon">
                            <LiaPersonBoothSolid size={48} />
                        </div>
                        <h3>Automation</h3>
                        <p>Transform industries with Automation technologies</p>
                    </div>
                    <div className="tech-box" onClick={() => handleBoxClick('/careers/robotics-explore')}>
                        <div className="tech-icon">
                            <LiaRobotSolid size={48} />
                        </div>
                        <h3>Robotics</h3>
                        <p>Dive into the world of Robotics and Automation</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CareerPath
