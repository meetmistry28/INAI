import React from 'react';
import { VscLightbulbSparkle, VscPaintcan, VscCode, VscServer, VscEye, VscShield, VscRocket, VscGraphLine, VscGlobe } from 'react-icons/vsc';
import { BiSolidLeaf, BiBrain, BiCodeAlt, BiShield } from 'react-icons/bi';
import { FaRobot, FaBrain, FaLaptopCode } from 'react-icons/fa';
import '../styles/AIMLExplore.css';
import aiMlImage from '../assets/02.png'; // Make sure to add this image to your assets folder
import { PiHandshakeThin } from 'react-icons/pi';
import { GiArtificialIntelligence, GiPartyPopper } from 'react-icons/gi';
import { LuBrainCircuit } from 'react-icons/lu';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { useNavigate } from 'react-router-dom';

const AIMLExplore = () => {
    const navigate = useNavigate();
    // const navigate = useNavigate();
    return (
        <>
            {/* <div className="aiml-explore">
                <div className="aiml-explore-content">
                    <div className="aiml-explore-left">
                        <h1 className="aiml-explore-main-heading">
                            Where Ideas Become<span className="highlight">Intelligent Systems.</span>
                        </h1>
                    </div>
                </div>
            </div> */}

            {/* AI/ML Content Section */}
            <div className="aiml-overview" style={{ backgroundColor: '#000', color: '#fff', padding: '4rem 2rem' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div className="aiml-content-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div className="aiml-text-content">
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#fff' }}>AI ML</h2>
                            <div className="aiml-description" style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                                <p>
                                    <strong style={{ color: '#a5b4fc' }}>Artificial Intelligence (AI)</strong> is the science of creating machines that can think, learn, and make decisions like humans.
                                </p>
                                <p style={{ marginTop: '1rem' }}>
                                    <strong style={{ color: '#a5b4fc' }}>Machine Learning (ML)</strong> is a subset of AI that enables systems to learn from data and improve automatically. Together, AI and ML are transforming industries and redefining the way we live and work.
                                </p>
                            </div>
                            <div className="aiml-terms" style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
                                <div className="aiml-term" style={{ backgroundColor: '#111', padding: '1.5rem', borderRadius: '8px', flex: 1 }}>
                                    <h3 style={{ color: '#a5b4fc', fontSize: '1.5rem', marginBottom: '0.5rem' }}>AI</h3>
                                    <p style={{ color: '#e5e7eb' }}>Human-like intelligence in machines</p>
                                </div>
                                <div className="aiml-term" style={{ backgroundColor: '#111', padding: '1.5rem', borderRadius: '8px', flex: 1 }}>
                                    <h3 style={{ color: '#a5b4fc', fontSize: '1.5rem', marginBottom: '0.5rem' }}>ML</h3>
                                    <p style={{ color: '#e5e7eb' }}>Learning from data to make better predictions</p>
                                </div>
                            </div>
                        </div>
                        {/* Image removed as requested */}
                    </div>
                </div>
            </div>

            <section style={{ backgroundColor: '#000', color: '#fff', padding: '4rem 2rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#fff' }}>
                            Why Choose <span style={{ color: '#a5b4fc' }}>AI/ML</span>?
                        </h2>
                        <p style={{ color: '#d1d5db', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
                            Artificial Intelligence and Machine Learning are transforming industries and creating new possibilities across the globe.
                            Here's why you should consider a career in this exciting field.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem'
                    }}>
                        {[
                            {
                                icon: <VscLightbulbSparkle size={32} />,
                                title: "Future-Ready Skills",
                                description: "Master cutting-edge technologies that are shaping the future of every industry.",
                                color: "#a5b4fc"
                            },
                            {
                                icon: <BiSolidLeaf size={32} />,
                                title: "Global Impact",
                                description: "Solve real-world challenges and create solutions with worldwide significance.",
                                color: "#a5b4fc"
                            },
                            {
                                icon: <VscPaintcan size={32} />,
                                title: "High Demand",
                                description: "Join one of the fastest-growing and highest-paying career paths in tech.",
                                color: "#a5b4fc"
                            },
                            {
                                icon: <BiBrain size={32} />,
                                title: "Endless Possibilities",
                                description: "From healthcare to finance, AI/ML is revolutionizing every sector.",
                                color: "#a5b4fc"
                            }
                        ].map((benefit, index) => (
                            <div key={index} style={{
                                backgroundColor: '#111',
                                borderRadius: '8px',
                                padding: '2rem',
                                border: '1px solid #333',
                                transition: 'all 0.3s ease'
                            }}>
                                <div style={{
                                    color: benefit.color,
                                    marginBottom: '1rem',
                                    fontSize: '2rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    backgroundColor: 'rgba(165, 180, 252, 0.1)'
                                }}>
                                    {benefit.icon}
                                </div>
                                <h3 style={{
                                    color: '#fff',
                                    fontSize: '1.25rem',
                                    marginBottom: '1rem'
                                }}>
                                    {benefit.title}
                                </h3>
                                <p style={{
                                    color: '#d1d5db',
                                    lineHeight: '1.6',
                                    margin: 0
                                }}>
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Areas of Learning Section */}
            <section style={{ backgroundColor: '#000000', color: '#ffffff', padding: '4rem 2rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#ffffff' }}>
                        Key Areas of <span style={{ color: '#ffffffff' }}>AI/ML</span>
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                        gap: '2rem',
                        marginTop: '2rem'
                    }}>
                        {[
                            {
                                icon: <BiBrain size={32} />,
                                title: 'Python Programming for AI/ML',
                                desc: 'The Brain of AI/ML',
                                path: '/python'
                            },
                            {
                                icon: <FaLaptopCode size={32} />,
                                title: 'Mathematics for AI/ML',
                                desc: 'The Eyes and Ears of AI/ML',
                                path: '/mathematics '
                            },
                            {
                                icon: <LiaChalkboardTeacherSolid size={32} />,
                                title: 'Deep Learning (DL)',
                                desc: 'The Face and Voice of AI/ML',
                                path: '/dl'
                            },
                            {
                                icon: <LuBrainCircuit size={32} />,
                                title: 'Machine Learning (ML)',
                                desc: 'The Workforce of Digital Automation',
                                path: '/ml'
                            },
                            {
                                icon: <GiArtificialIntelligence size={32} />,
                                title: 'Natural Language Processing (NLP)',
                                desc: 'Intelligence of AI/ML',
                                path: '/nlp'
                            },
                            {
                                icon: <FaLaptopCode size={32} />,
                                title: 'Large Language Models (LLMs)',
                                desc: 'Heart of AI/ML',
                                path: '/llm'
                            },
                            {
                                icon: <BiBrain size={32} />,
                                title: 'Small Language Model',
                                desc: 'Heart of AI/ML',
                                path: '/small-lm'
                            },
                            // {
                            //     icon: <BiBrain size={32} />,
                            //     title: 'Masked Language Model (MLM)',
                            //     desc: 'Heart of AI/ML',
                            //     path: '/mlm'
                            // },
                            // {
                            //     icon: <BiBrain size={32} />,
                            //     title: 'Retrieval-Augmented Generation (RAG)',
                            //     desc: 'Heart of AI/ML',
                            //     path: '/rag'
                            // },
                            {
                                icon: <BiBrain size={32} />,
                                title: 'Computer Vision (CV)',
                                desc: 'Intelligence of AI/ML',
                                path: '/cv'
                            }
                        ].map((area, index) => (
                            <div
                                key={index}
                                onClick={() => navigate(area.path)}
                                style={{
                                    backgroundColor: '#111111',
                                    borderRadius: '8px',
                                    padding: '1.5rem',
                                    border: '1px solid #333',
                                    transition: 'all 0.3s ease',
                                    position: 'relative',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        borderColor: '#a5b4fc',
                                        boxShadow: '0 4px 12px rgba(165, 180, 252, 0.2)'
                                    }
                                }}
                            >
                                <div style={{
                                    fontSize: '2rem',
                                    marginBottom: '1rem',
                                    color: '#ffffffff'
                                }}>
                                    {area.icon}
                                </div>
                                <h3 style={{
                                    color: '#ffffff',
                                    fontSize: '1.25rem',
                                    marginBottom: '0.75rem'
                                }}>
                                    {area.title}
                                </h3>
                                <p style={{
                                    color: '#e5e7eb',
                                    lineHeight: '1.6',
                                    margin: '0 0 2.5rem 0',
                                    fontSize: '0.95rem',
                                    flexGrow: 1
                                }}>
                                    {area.desc}
                                </p>
                                <div style={{
                                    position: 'absolute',
                                    bottom: '1.5rem',
                                    right: '1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    <span style={{
                                        color: '#ffffff',
                                        fontSize: '0.9rem',
                                        opacity: 0.8,
                                        transition: 'opacity 0.3s ease'
                                    }}>
                                        Learn more
                                    </span>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            navigate(area.path);
                                        }}
                                        style={{
                                            backgroundColor: 'transparent',
                                            color: '#ffffffff',
                                            border: '1px solid #949494ff',
                                            borderRadius: '50%',
                                            width: '36px',
                                            height: '36px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            fontSize: '1.2rem',
                                            '&:hover': {
                                                backgroundColor: 'rgba(165, 180, 252, 0.1)',
                                                transform: 'scale(1.1)'
                                            }
                                        }}
                                        title="Learn more"
                                    >
                                        →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ backgroundColor: '#000', color: '#fff', padding: '4rem 2rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#fff' }}>
                            Career <span style={{ color: '#a5b4fc' }}>Opportunities</span>
                        </h2>
                        <p style={{ color: '#d1d5db', fontSize: '1.1rem' }}>
                            AI/ML graduates are highly sought-after across multiple industries
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                        gap: '2rem'
                    }}>
                        {[
                            {
                                icon: <GiArtificialIntelligence size={32} />,
                                title: 'AI Engineer',
                                desc: 'Design and implement AI models and systems'
                            },
                            {
                                icon: <BiSolidLeaf size={32} />,
                                title: 'ML Engineer',
                                desc: 'Optimize and deploy machine learning models'
                            },
                            {
                                icon: <VscPaintcan size={32} />,
                                title: 'Data Scientist',
                                desc: 'Extract insights from complex datasets'
                            },
                            {
                                icon: <FaRobot size={32} />,
                                title: 'NLP Specialist',
                                desc: 'Develop natural language processing solutions'
                            },
                            {
                                icon: <PiHandshakeThin size={32} />,
                                title: 'Computer Vision',
                                desc: 'Build systems that understand visual data'
                            },
                            {
                                icon: <GiPartyPopper size={32} />,
                                title: 'AI Research',
                                desc: 'Advance the frontiers of AI technology'
                            },
                        ].map((item, index) => (
                            <div key={index} style={{
                                backgroundColor: '#111',
                                borderRadius: '8px',
                                padding: '1.5rem',
                                border: '1px solid #333',
                                transition: 'all 0.3s ease'
                            }}>
                                <div style={{
                                    color: '#a5b4fc',
                                    marginBottom: '1rem',
                                    fontSize: '2rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    backgroundColor: 'rgba(165, 180, 252, 0.1)'
                                }}>
                                    {item.icon}
                                </div>
                                <h3 style={{
                                    color: '#fff',
                                    fontSize: '1.25rem',
                                    marginBottom: '0.75rem'
                                }}>
                                    {item.title}
                                </h3>
                                <p style={{
                                    color: '#d1d5db',
                                    margin: 0,
                                    lineHeight: '1.6'
                                }}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ backgroundColor: '#000', color: '#fff', padding: '4rem 2rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#fff' }}>
                            Why <span style={{ color: '#a5b4fc' }}>AI/ML Matters</span>
                        </h2>
                        <p style={{ color: '#d1d5db', fontSize: '1.1rem' }}>
                            AI/ML is not just about technology - it's about shaping the future.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        <div style={{
                            backgroundColor: '#111',
                            borderRadius: '8px',
                            padding: '2rem',
                            border: '1px solid #333',
                            transition: 'transform 0.2s ease',
                            cursor: 'default'
                        }}>
                            <div style={{
                                backgroundColor: 'rgba(165, 180, 252, 0.1)',
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem',
                                color: '#a5b4fc',
                                fontSize: '1.5rem'
                            }}>
                                <VscRocket />
                            </div>
                            <h3 style={{
                                color: '#fff',
                                fontSize: '1.5rem',
                                marginBottom: '1rem'
                            }}>
                                Driving Innovation
                            </h3>
                            <p style={{
                                color: '#d1d5db',
                                lineHeight: '1.6',
                                margin: 0
                            }}>
                                Revolutionizing industries with intelligent solutions that push the boundaries of what's possible.
                            </p>
                        </div>

                        <div style={{
                            backgroundColor: '#111',
                            borderRadius: '8px',
                            padding: '2rem',
                            border: '1px solid #333',
                            transition: 'transform 0.2s ease',
                            cursor: 'default'
                        }}>
                            <div style={{
                                backgroundColor: 'rgba(165, 180, 252, 0.1)',
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem',
                                color: '#a5b4fc',
                                fontSize: '1.5rem'
                            }}>
                                <VscGraphLine />
                            </div>
                            <h3 style={{
                                color: '#fff',
                                fontSize: '1.5rem',
                                marginBottom: '1rem'
                            }}>
                                Economic Impact
                            </h3>
                            <p style={{
                                color: '#d1d5db',
                                lineHeight: '1.6',
                                margin: 0
                            }}>
                                Creating new markets and opportunities through automation and intelligent systems.
                            </p>
                        </div>

                        <div style={{
                            backgroundColor: '#111',
                            borderRadius: '8px',
                            padding: '2rem',
                            border: '1px solid #333',
                            transition: 'transform 0.2s ease',
                            cursor: 'default'
                        }}>
                            <div style={{
                                backgroundColor: 'rgba(165, 180, 252, 0.1)',
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem',
                                color: '#a5b4fc',
                                fontSize: '1.5rem'
                            }}>
                                <VscGlobe />
                            </div>
                            <h3 style={{
                                color: '#fff',
                                fontSize: '1.5rem',
                                marginBottom: '1rem'
                            }}>
                                Global Solutions
                            </h3>
                            <p style={{
                                color: '#d1d5db',
                                lineHeight: '1.6',
                                margin: 0
                            }}>
                                Addressing critical challenges with AI-powered applications for a better future.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ backgroundColor: '#000000', color: '#ffffff', padding: '4rem 2rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                    <div style={{ marginTop: '4rem' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <h2 style={{
                                fontSize: '2.2rem',
                                marginBottom: '1rem',
                                color: '#ffffff'
                            }}>
                                Join Our Programs
                            </h2>
                            <p style={{
                                color: '#d1d5db',
                                fontSize: '1.1rem',
                                maxWidth: '600px',
                                margin: '0 auto'
                            }}>
                                Take the next step in your career with our specialized programs
                            </p>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '2rem',
                            marginTop: '2rem'
                        }}>
                            <div style={{
                                backgroundColor: '#111111',
                                borderRadius: '10px',
                                padding: '2rem',
                                border: '1px solid #333',
                                transition: 'all 0.3s ease',
                                ':hover': {
                                    transform: 'translateY(-5px)'
                                }
                            }}>
                                <div style={{
                                    backgroundColor: 'rgba(81, 215, 0, 0.1)',
                                    width: '70px',
                                    height: '70px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 1.5rem'
                                }}>
                                    <LuBrainCircuit size={32} color='#51d700' />
                                </div>
                                <h3 style={{
                                    fontSize: '1.5rem',
                                    marginBottom: '1rem',
                                    color: '#ffffff',
                                    textAlign: 'center'
                                }}>
                                    Internship Program
                                </h3>
                                <p style={{
                                    color: '#d1d5db',
                                    lineHeight: '1.7',
                                    marginBottom: '1.5rem',
                                    fontSize: '1rem'
                                }}>
                                    Gain hands-on experience working on real projects with our team of experts. Perfect for students and recent graduates looking to kickstart their careers in Next-Gen technology.
                                </p>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: '0 0 1.5rem 0',
                                    textAlign: 'left'
                                }}>
                                    {['Real-world projects', 'Mentorship from experts', 'Stipend available', 'Flexible duration'].map((item, i) => (
                                        <li key={i} style={{
                                            padding: '0.5rem 0',
                                            color: '#e5e7eb',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            fontSize: '0.95rem'
                                        }}>
                                            <span style={{ color: '#51d700' }}>✓</span> {item}
                                        </li>
                                    ))}
                                </ul>
                                <button style={{
                                    backgroundColor: '#51d700',
                                    color: '#000000',
                                    border: 'none',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '6px',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    width: '100%',
                                    fontSize: '1rem',
                                    transition: 'all 0.2s ease',
                                    ':hover': {
                                        backgroundColor: '#3da300',
                                        transform: 'translateY(-2px)'
                                    }
                                }} onClick={() => navigate('/box')}>
                                    Apply Now
                                </button>
                            </div>

                            <div style={{
                                backgroundColor: '#111111',
                                borderRadius: '10px',
                                padding: '2rem',
                                border: '1px solid #333',
                                transition: 'all 0.3s ease',
                                ':hover': {
                                    transform: 'translateY(-5px)'
                                }
                            }}>
                                <div style={{
                                    backgroundColor: 'rgba(79, 70, 229, 0.1)',
                                    width: '70px',
                                    height: '70px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 1.5rem'
                                }}>
                                    <LiaChalkboardTeacherSolid size={32} color='#a5b4fc' />
                                </div>
                                <h3 style={{
                                    fontSize: '1.5rem',
                                    marginBottom: '1rem',
                                    color: '#ffffff',
                                    textAlign: 'center'
                                }}>
                                    Full-time Positions
                                </h3>
                                <p style={{
                                    color: '#d1d5db',
                                    lineHeight: '1.7',
                                    marginBottom: '1.5rem',
                                    fontSize: '1rem'
                                }}>
                                    Join our team of experts and work on cutting-edge automation projects. We're looking for passionate individuals ready to make an impact in the world of technology.
                                </p>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: '0 0 1.5rem 0',
                                    textAlign: 'left'
                                }}>
                                    {['Competitive salary', 'Career growth', 'Flexible work', 'Latest tech'].map((item, i) => (
                                        <li key={i} style={{
                                            padding: '0.5rem 0',
                                            color: '#e5e7eb',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            fontSize: '0.95rem'
                                        }}>
                                            <span style={{ color: '#a5b4fc' }}>✓</span> {item}
                                        </li>
                                    ))}
                                </ul>
                                <button style={{
                                    backgroundColor: '#4f46e5',
                                    color: '#ffffff',
                                    border: 'none',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '6px',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    width: '100%',
                                    fontSize: '1rem',
                                    transition: 'all 0.2s ease',
                                    ':hover': {
                                        backgroundColor: '#4338ca',
                                        transform: 'translateY(-2px)'
                                    }
                                }} onClick={() => navigate('/box')}>
                                    View Openings
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};


export default AIMLExplore; 