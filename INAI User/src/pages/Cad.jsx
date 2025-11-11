import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cpu, Code, Projector, Server, MemoryStick, Power, FileInput, FileOutput, Code2Icon } from 'lucide-react';
import { GiCpu } from 'react-icons/gi';
import '../styles/plc.css';
import { PiDeviceMobileCamera } from 'react-icons/pi';

const Cad = () => {
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
                    <h1>CAD (Computer-Aided Design)</h1>
                    <p className="subtitle">Design the Future with Precision Powered by CAD</p>
                </div>

                <div className="plc-content">
                    <section className="plc-overview ">
                        <h2>What is CAD?</h2>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            CAD stands for Computer-Aided Design, which is a technology used to design and develop products using computer software instead of paper drawings.
                            It helps engineers, architects, and designers create precise and accurate 2D drawings and 3D models.
                        </h5>

                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            CAD, or Computer-Aided Design, is a digital design technology that helps engineers and designers create accurate drawings and 3D models on a computer.</h5>
                    </section>



                    <section className="python-ai-section">
                        <h2>Popular CAD Software
                        </h2>

                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>1.AutoCAD
                                </h3>
                                <p>
                                    Developed by Autodesk, AutoCAD is used for 2D drafting and 3D design in mechanical, civil, and architectural fields. It’s known for its precision and simple interface.
                                </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/AutoCad.webp" alt="AutoCAD" />
                            </div>
                            
                        </div>
                        
                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>2.SolidWorks
                                </h3>
                                <p>
                                    This software is widely used in mechanical and robotics industries to design machine parts and assemblies. It supports motion simulation, stress testing, and 3D visualization.

                                </p>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/SolidWorks.webp" alt="SolidWorks" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>3. CATIA</h3>
                                <p>
                                    CATIA is powerful software used in aerospace and automobile industries. It allows engineers to design complex shapes like airplane wings and car bodies with exact measurements.

                                </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Catia.webp" alt="CATIA" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>4.Fusion 360</h3>
                                <p>Fusion 360 combines CAD, CAM, and CAE features in one platform. It’s popular among product designers, robotic hobbyists, and engineers for its cloud-based collaboration.
                                </p>
                            </div>
                            <div className="zigzag-image">
                                <img src="/images/fusion_360.webp" alt="Fusion 360" />
                            </div>
                        </div>
                    </section>

                    <section className="importance-section">
                        <h2>Importance of CAD</h2>
                        <h3>Why CAD Matters</h3>

                        <div className="importance-grid">
                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Cpu size={24} />
                                </div>
                                <h4>High Precision & Accuracy:</h4>
                                <p>CAD provides exact dimensions and perfect geometric designs, reducing chances of human error that commonly occur in manual drafting. This accuracy ensures that every part fits correctly during manufacturing.
                                </p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Code size={24} />
                                </div>
                                <h4>Easy Modifications & Updates:</h4>
                                <p>CAD allows designers to test product performance digitally such as movement, stress, heat, and material strength which helps identify and solve problems before creating a physical prototype.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Projector size={24} />
                                </div>
                                <h4>Saves Time & Cost:</h4>
                                <p>  By detecting errors early and reducing the need for repeated physical prototypes, CAD makes the development process faster and reduces material waste, leading to lower overall production cost.
                                </p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Server size={24} />
                                </div>
                                <h4>Supports Both 2D & 3D Models:</h4>
                                <p> CAD enables creation of simple 2D drawings for documentation and advanced 3D models for realistic visualization. This helps designers and manufacturers understand the product structure clearly.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <MemoryStick size={24} />
                                </div>
                                <h4>Improved Communication & Collaboration:</h4>
                                <p> Designs can be shared digitally across different departments or even countries, making teamwork easier. Everyone can view the same model and give feedback, improving decision-making.</p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <FileInput size={24} />
                                </div>
                                <h4>Better Quality of Products: </h4>
                                <p>CAD helps maintain high standards by analyzing every small detail in the design phase. This leads to durable, reliable, and better-functioning products reaching the market.
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

export default Cad;