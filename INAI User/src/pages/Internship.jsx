import React from 'react';
import '../styles/Internship.css';
import womanVideo from '../assets/intern.mp4';
import { useNavigate } from 'react-router-dom';

const Internship = () => {
    const navigate = useNavigate();
    const handleApplyNow = () => {
        navigate('/box');
    };
    return (
        <>
            <div className="careers-container">
                {/* Background Video */}
                <div className="video-background">
                    <video autoPlay loop muted playsInline>
                        <source src={womanVideo} type="video/mp4" />
                        Your Careerdoes not support the video tag.
                    </video>
                    <div className="video-overlay"></div>
                </div>

                <div className="careers-content">
                    <div className="careers-left">
                        <div className="careers-tag">INAI Careers</div>
                        <h1 className="careers-main-heading">
                            Your Career<span className="highlight-intern">Pathway to Excellence</span>
                        </h1>
                        <p className="careers-description">
                            At INAI, we're building the future with cutting-edge AI, automation, and robotics solutions.
                            Join us in shaping tomorrow's technology today.
                        </p>
                        <button className="apply-now-btn" onClick={handleApplyNow}>
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Internship;