import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cpu, Code, Projector, Server, MemoryStick, Power, FileInput, FileOutput, Code2Icon } from 'lucide-react';
import { GiCpu } from 'react-icons/gi';
import '../styles/plc.css';
import { PiDeviceMobileCamera } from 'react-icons/pi';

const Cv = () => {
    console.log('CV component is mounting');
    const navigate = useNavigate();

    React.useEffect(() => {
        console.log('CV component mounted');
        return () => console.log('CV component unmounting');
    }, []);

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <>
            <div className="plc-page">
                

                <div className="plc-header">
                    <div className="plc-icon">
                        <PiDeviceMobileCamera size={48} />
                    </div>
                    <h1>CV</h1>
                    <p className="subtitle">The Brain of AI/ML</p>
                </div>

                <div className="plc-content">
                    <section className="plc-overview">
                        <h2>What is CV?</h2>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            Computer Vision (CV) is a specialized field of Artificial Intelligence that enables machines to interpret and understand visual information such as images, videos, and real-time camera feeds.
                            By replicating human visual perception, CV empowers systems to identify objects, recognize faces, read text, detect motion, and analyze patterns in visual data.
                            This technology drives numerous innovations—from autonomous vehicles and healthcare diagnostics to retail analytics, agriculture monitoring, and smart surveillance systems—making it one of the most powerful domains of modern AI.

                        </h5>

                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            Computer Vision focuses on allowing machines to extract meaningful insights from visual inputs and make intelligent decisions based on them.
                            It combines image processing, pattern recognition, machine learning, and deep learning to convert raw pixel data into structured understanding.</h5>

                    </section>



                    <section className="python-ai-section">
                        <h2>Key Components of CV in AI/ML</h2>

                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>1.Image Processing and Feature Extraction
                                </h3>
                                <p>
                                    Basic foundation of CV involving filtering, edge detection, and color correction.


                                    Extracts key visual patterns like shapes, corners, and textures.


                                    Enables systems to identify and differentiate objects in complex scenes.

                                </p>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Image Processing and Feature Extraction.webp" alt="Image Processing and Feature Extraction" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>2.Object Detection and Recognition
                                </h3>
                                <p>
                                    Detects and locates multiple objects within an image or video frame.


                                    Uses bounding boxes and classification algorithms to identify each object.


                                    Essential for applications such as security monitoring, product detection, and autonomous vehicles.
                                </p>


                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Object Detection and Recognition.webp" alt="Object Detection and Recognition" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>3.  Image Segmentation</h3>
                                <p>
                                    Divides an image into distinct, meaningful regions for analysis.


                                    Semantic segmentation: Labels each pixel by category (e.g., road, car, sky).


                                    Instance segmentation: Differentiates between multiple objects of the same type.


                                    Widely used in medical imaging and autonomous navigation.

                                </p>
                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Image Segmentation.webp" alt="Segmentation" />
                            </div>
                        </div>

                        <div className="ai-component zigzag-container reverse">
                            <div className="zigzag-content">
                                <h3>4. Facial Recognition and Analysis
                                </h3>
                                <p>Detects and identifies human faces using biometric features.


                                    Used in authentication systems, surveillance, emotion analysis, and marketing research.


                                    Enables user verification and behavior analysis in secure and commercial environments.
                                </p>

                            </div>
                            <div className="zigzag-image">
                                <img src="/images/Facial Recognition and Analysis.webp" alt="Facial Recognition and Analysis" />
                            </div>
                        </div>
                        <div className="ai-component zigzag-container">
                            <div className="zigzag-content">
                                <h3>5. 3D Vision and Depth Estimation
                                </h3>
                                <p>Creates 3D understanding from 2D images using depth sensors or stereo vision.


                                    Enables accurate spatial awareness for robotics, AR/VR, and industrial automation.


                                    Essential for realistic object placement and navigation systems.
                                </p>
                            </div>
                            <div className="zigzag-image">
                                <img src="/images/3D Vision and Depth Estimation.webp" alt="3D Vision and Depth Estimation" />
                            </div>
                        </div>
                    </section>

                    <section className="importance-section">
                        <h2>Importance and Usefulness</h2>
                        <h3>Why CV Matters
                        </h3>

                        <div className="importance-grid">
                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Cpu size={24} />
                                </div>
                                <h4> Healthcare Transformation:</h4>
                                <p>Detects diseases using medical images like X-rays, MRIs, and CT scans.


                                    Enables early diagnosis, automated analysis, and AI-assisted surgeries.


                                    Improves accuracy and reduces diagnostic costs.
                                </p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Code size={24} />
                                </div>
                                <h4>Autonomous Systems and Industrial Safety:</h4>
                                <p>Enables vehicles and robots to perceive and respond to surroundings.


                                    Detects obstacles, reads traffic signs, and ensures operational safety.


                                    Enhances manufacturing quality control and predictive maintenance.

                                </p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Projector size={24} />
                                </div>
                                <h4>Accessibility and Assistive Technology:</h4>
                                <p>Supports visually impaired users by describing environments and reading text aloud.


                                    Powers accessibility tools in mobile and wearable devices.


                                    Promotes inclusive technology experiences.
                                </p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <Server size={24} />
                                </div>
                                <h4>Business Intelligence and Retail:</h4>
                                <p>Automates shelf management, stock analysis, and customer behavior tracking.


                                    Provides visual data for marketing insights and operational optimization.


                                    Enhances customer experience through intelligent in-store analytics.

                                </p>
                            </div>

                            <div className="importance-card">
                                <div className="importance-icon">
                                    <MemoryStick size={24} />
                                </div>
                                <h4>Business Intelligence and Retail
                                    :</h4>
                                <p>Automates shelf management, stock analysis, and customer behavior tracking.


                                    Provides visual data for marketing insights and operational optimization.


                                    Enhances customer experience through intelligent in-store analytics.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="career-footer">
                    <p>&copy; {new Date().getFullYear()} Career. All rights reserved.</p>
                </div>
            </div>

        </>
    );
};

export default Cv;