import { BiBrain } from 'react-icons/bi';
import { FaLaptopCode } from 'react-icons/fa';
import '../styles/AutomationExplore.css';
import { PiHandshakeThin } from 'react-icons/pi';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { LuBrainCircuit } from 'react-icons/lu';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { useNavigate } from 'react-router-dom';


const AutomationExplore = () => {
    const navigate = useNavigate();
    return (
        <>
           
            {/* <div className="automation-explore">
                <div className="automation-explore-content">
                    <div className="automation-explore-left">
                        <h1 className="automation-explore-main-heading">
                            Where Efficiency<span className="highlight">Meets Innovation.</span>
                        </h1>
                    </div>
                </div>
            </div> */}

            <section className="automation-content-section" style={{ backgroundColor: '#000000', color: '#ffffff', padding: '4rem 2rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#ffffff' }}>
                        <span style={{ color: '#ffffffff' }}>Automation</span>
                    </h2>
                    <div style={{
                        backgroundColor: '#111111',
                        borderRadius: '8px',
                        padding: '2rem',
                        marginTop: '1rem'
                    }}>
                        <div style={{ color: '#a5b4fc', marginBottom: '1rem' }}>
                            <FaLaptopCode size={32} />
                        </div>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            Automation is the process of using technology, machines, or computer systems to perform tasks without direct human intervention. It is mainly designed to reduce manual effort and enable systems or machines to operate automatically according to pre-defined instructions, logic, or programming.

                        </h5>

                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            Automation works through the combined use of hardware and software components. The hardware part includes sensors, actuators, and controllers, while the software part includes programs, instructions, or algorithms that tell the system what actions to perform and when. These two elements work together to complete a task efficiently and accurately.

                        </h5>
                        <h5 style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.9', marginBottom: '15px' }}>
                            The main objective of automation is to increase efficiency, accuracy, and productivity, while at the same time reducing human errors and overall operational costs. It ensures that processes are done faster, with better quality, and with minimal need for human supervision.
                        </h5>
                    </div>
                </div>
            </section>


            <section style={{ backgroundColor: '#000000', color: '#ffffff', padding: '4rem 2rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#ffffff' }}>
                        Why <span style={{ color: '#a5b4fc' }}>Automation</span> Matters
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        <div style={{
                            backgroundColor: '#111111',
                            borderRadius: '8px',
                            padding: '2rem',
                            border: '1px solid #333'
                        }}>
                            <div style={{ color: '#ffffffff', marginBottom: '1rem' }}>
                                <GiArtificialIntelligence size={32} />
                            </div>
                            <h3 style={{ color: '#ffffff', marginBottom: '1rem' }}>Better Future</h3>
                            <p style={{ color: '#e5e7eb', lineHeight: '1.6', marginBottom: '1rem' }}>
                                Automation is the backbone of tomorrow's industries, from IT to manufacturing to smart homes.
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                <ul>
                                    <li>AI/ML</li>
                                    <li>IoT</li>
                                    <li>RPA</li>
                                </ul>
                            </div>
                        </div>

                        <div style={{
                            backgroundColor: '#111111',
                            borderRadius: '8px',
                            padding: '2rem',
                            border: '1px solid #333'
                        }}>
                            <div style={{ color: '#ffffffff', marginBottom: '1rem' }}>
                                <BiBrain size={32} />
                            </div>
                            <h3 style={{ color: '#ffffff', marginBottom: '1rem' }}>Your Growth</h3>
                            <p style={{ color: '#e5e7eb', lineHeight: '1.6', marginBottom: '1rem' }}>
                                Gain hands-on experience with modern tools and technologies that shape the future.
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                <ul>
                                    <li>Cloud</li>
                                    <li>AI</li>
                                    <li>Automation</li>
                                </ul>
                            </div>
                        </div>

                        <div style={{
                            backgroundColor: '#111111',
                            borderRadius: '8px',
                            padding: '2rem',
                            border: '1px solid #333'
                        }}>
                            <div style={{ color: '#ffffffff', marginBottom: '1rem' }}>
                                <PiHandshakeThin size={32} />
                            </div>
                            <h3 style={{ color: '#ffffff', marginBottom: '1rem' }}>Company Growth</h3>
                            <p style={{ color: '#e5e7eb', lineHeight: '1.6', marginBottom: '1rem' }}>
                                As we scale with automation, you'll impact businesses, communities, and everyday life.
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                <ul>
                                    <li>Impact</li>
                                    <li>Scale</li>
                                    <li>Innovate</li>
                                </ul>
                            </div>
                        </div>

                        <div style={{
                            backgroundColor: '#111111',
                            borderRadius: '8px',
                            padding: '2rem',
                            border: '1px solid #333'
                        }}>
                            <div style={{ color: '#ffffffff', marginBottom: '1rem' }}>
                                <LuBrainCircuit size={32} />
                            </div>
                            <h3 style={{ color: '#ffffff', marginBottom: '1rem' }}>Skill Expansion</h3>
                            <p style={{ color: '#e5e7eb', lineHeight: '1.6', marginBottom: '1rem' }}>
                                Master cross-functional skills in coding, data, robotics, and process automation.
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                <ul>
                                    <li>Code</li>
                                    <li>Data</li>
                                    <li>Robotics</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ backgroundColor: '#000000', color: '#ffffff', padding: '4rem 2rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#ffffff' }}>
                        Key Areas of <span style={{ color: '#a5b4fc' }}>Automation</span>
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
                                title: 'PLC (Programmable Logic Controller)',
                                desc: 'The Brain of Industrial Automation',
                                path: '/plc'
                            },
                            {
                                icon: <FaLaptopCode size={32} />,
                                title: 'SCADA (Supervisory Control and Data Acquisition)',
                                desc: 'The Eyes and Ears of Industrial Automation',
                                path: '/scada'
                            },
                            {
                                icon: <LiaChalkboardTeacherSolid size={32} />,
                                title: 'HMI (Human Machine Interface)',
                                desc: 'The Face and Voice of Automation',
                                path: '/hmi'
                            },
                            {
                                icon: <LuBrainCircuit size={32} />,
                                title: 'RPA (Robotic Process Automation)',
                                desc: 'The Workforce of Digital Automation',
                                path: '/rpa'
                            },
                            {
                                icon: <PiHandshakeThin size={32} />,
                                title: 'BPA (Business Process Automation)',
                                desc: 'Nervous System of Business Automation',
                                path: '/bpa'
                            },
                            {
                                icon: <GiArtificialIntelligence size={32} />,
                                title: 'IPA (Intelligent Process Automation)',
                                desc: 'Intelligence of Automation',
                                path: '/ipa'
                            },
                            {
                                icon: <FaLaptopCode size={32} />,
                                title: 'DCS (Distributed Control System)',
                                desc: 'Heart of Process Automation',
                                path: '/dcs'
                            },
                            {
                                icon: <BiBrain size={32} />,
                                title: 'ADAS (Advanced Driver Assistance System)',
                                desc: 'Eyes & Intelligence of Automotive Automation',
                                path: '/adas'
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


            <section style={{ backgroundColor: '#000000', color: '#ffffff', padding: '4rem 2rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{
                        textAlign: 'center',
                        fontSize: '2.5rem',
                        marginBottom: '2rem',
                        color: '#ffffff'
                    }}>
                        Why <span style={{ color: '#a5b4fc' }}>Automation</span> Matters?
                    </h2>

                    <div style={{
                        backgroundColor: '#111111',
                        borderRadius: '8px',
                        padding: '2.5rem',
                        border: '1px solid #333',
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}>
                        <p style={{
                            color: '#e5e7eb',
                            lineHeight: '1.8',
                            fontSize: '1.1rem',
                            margin: 0,
                            textAlign: 'center'
                        }}>
                            Automation matters because it enhances efficiency, accuracy, and productivity by minimizing manual effort and human error. It helps organizations save time and costs, maintain consistent quality, and ensure safety in operations. By integrating smart technologies like AI, robotics, and IoT, automation drives innovation, supports scalability, and prepares industries and professionals for a future-ready, digital world.
                        </p>
                    </div>
                </div>
            </section>

            {/* Career Growth & Opportunities Section */}
            <section style={{ backgroundColor: '#000000', color: '#ffffff', padding: '4rem 2rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{
                        textAlign: 'center',
                        fontSize: '2.5rem',
                        marginBottom: '3rem',
                        color: '#ffffff'
                    }}>
                        Career Growth & <span style={{ color: '#a5b4fc' }}>Opportunities</span>
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                        gap: '1.5rem',
                        marginTop: '2rem'
                    }}>
                        {[
                            { role: 'Automation Architect', icon: <GiArtificialIntelligence size={28} /> },
                            { role: 'RPA Consultant', icon: <LuBrainCircuit size={28} /> },
                            { role: 'System Integration Manager', icon: <PiHandshakeThin size={28} /> },
                            { role: 'Head of Smart Manufacturing', icon: <LiaChalkboardTeacherSolid size={28} /> },
                            { role: 'AI Automation Strategist', icon: <BiBrain size={28} /> }
                        ].map((item, index) => (
                            <div key={index} style={{
                                backgroundColor: '#111111',
                                borderRadius: '8px',
                                padding: '1.5rem',
                                border: '1px solid #333',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                transition: 'all 0.2s ease'
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
                                    color: '#ffffff',
                                    fontSize: '1.1rem',
                                    margin: '0.5rem 0 0',
                                    fontWeight: '500'
                                }}>
                                    {item.role}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ backgroundColor: '#000000', color: '#ffffff', padding: '4rem 2rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{
                            fontSize: '2.5rem',
                            marginBottom: '1rem',
                            color: '#ffffff'
                        }}>
                            Be Part of the <span style={{ color: '#a5b4fc' }}>Change</span>
                        </h2>
                    </div>

                    <div style={{
                        textAlign: 'center',
                        maxWidth: '800px',
                        margin: '0 auto 4rem'
                    }}>
                        <p style={{
                            fontSize: '1.5rem',
                            lineHeight: '1.6',
                            marginBottom: '1.5rem',
                            color: '#e5e7eb'
                        }}>
                            Here, you won't just learn about automation you'll build it, shape it, and lead it.
                        </p>
                        <p style={{
                            fontSize: '1.1rem',
                            lineHeight: '1.7',
                            color: '#d1d5db',
                            marginBottom: '2rem'
                        }}>
                            From smart factories to intelligent apps, from robotic process automation to cloud systems - you'll work on technologies that make the world faster, safer, and smarter.
                        </p>
                    </div>

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

export default AutomationExplore; 