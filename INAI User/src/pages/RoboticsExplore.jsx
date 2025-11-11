import '../styles/RoboticsExplore.css';
import { useNavigate } from 'react-router-dom';

const RoboticsExplore = () => {
    const navigate = useNavigate();
    return (
        <>
            {/* Overview Section */}
            <div className="overview-section" style={{ margin: '4rem 0rem 0rem 0rem', backgroundColor: '#000000' }}>
                <div className="container">
                    <div className="overview-content-wrapper">
                        <div className="overlay-content">
                            <div className="overview-content" style={{ color: '#ffffff' }}>
                                <h2 className="section-title" style={{ color: '#ffffff' }}>
                                    Robotics Innovation for the Future
                                </h2>

                                <p className="overview-text" style={{ color: '#ffffff' }}>
                                    Robotics is an interdisciplinary field that integrates engineering, computer science, and artificial intelligence to design, build, and operate intelligent machines. These systems are capable of sensing their environment, making decisions, and performing actions with precision and efficiency. From industrial automation to healthcare, defense, logistics, and space exploration, robotics is transforming the way we live and work.
                                </p>

                                <div className="application-areas">
                                    {['Industrial Automation', 'Healthcare', 'Space Exploration', 'Defense'].map((tag, i) => (
                                        <div
                                            key={i}
                                            className="application-tag"
                                            style={{
                                                backgroundColor: '#1a1a1a',
                                                color: '#ffffff',
                                                padding: '8px 16px',
                                                borderRadius: '20px',
                                                margin: '5px',
                                                display: 'inline-block'
                                            }}
                                        >
                                            <span className="tag-icon">{['🏭', '🏥', '🚀', '🛡️'][i]}</span>
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>

            {/* Why Robotics Section */}
            <div className="why-robotics-section" style={{ backgroundColor: '#000000', color: '#ffffff', padding: '60px 0' }}>
                <div className="container">
                    <div className="why-robotics-content">
                        <div className="section-header">
                            <h2 className="section-title" style={{ color: '#ffffff' }}>
                                Why Choose Robotics?
                            </h2>
                        </div>

                        <p className="why-robotics-text" style={{ color: '#e0e0e0', maxWidth: '800px', margin: '0 auto 40px' }}>
                            Step into the future of technology with our robotics program. Gain the skills that will shape tomorrow's innovations and become a pioneer in this rapidly evolving field.
                        </p>

                        <div className="robotics-benefits" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '20px',
                            marginTop: '40px'
                        }}>
                            {[
                                {
                                    icon: '🤖',
                                    title: 'Robotic Programming',
                                    desc: 'Master the art of programming intelligent machines',
                                    color: '#565656'
                                },
                                {
                                    icon: '🧠',
                                    title: 'AI / ML Integration',
                                    desc: 'Combine AI with robotics for smart automation',
                                    color: '#00bfff'
                                },
                                {
                                    icon: '⚡',
                                    title: 'Control Systems',
                                    desc: 'Design advanced control mechanisms',
                                    color: '#ff6b6b'
                                },
                                {
                                    icon: '🔌',
                                    title: 'Embedded Systems',
                                    desc: 'Work with cutting-edge sensor technology',
                                    color: '#20c997'
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    style={{
                                        backgroundColor: '#1a1a1a',
                                        borderRadius: '10px',
                                        padding: '25px',
                                        transition: 'transform 0.3s ease',
                                        border: '1px solid #333'
                                    }}
                                >
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '15px'
                                    }}>
                                        <span style={{
                                            fontSize: '24px',
                                            marginRight: '15px',
                                            color: item.color
                                        }}>{item.icon}</span>
                                        <h3 style={{
                                            margin: 0,
                                            color: '#ffffff',
                                            fontSize: '18px'
                                        }}>{item.title}</h3>
                                    </div>
                                    <p style={{
                                        margin: '10px 0 0',
                                        color: '#b0b0b0',
                                        fontSize: '14px',
                                        lineHeight: '1.5'
                                    }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Areas of Robotics Section */}
            <section style={{ backgroundColor: '#000000', color: '#ffffff', padding: '4rem 2rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#ffffff' }}>
                        Key Areas of <span style={{ color: '#ffffffff' }}>Robotics</span>
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                        gap: '2rem',
                        marginTop: '2rem'
                    }}>
                        {[
                            {
                                // icon: <BiBrain size={32} />,
                                title: 'CAD ',
                                desc: 'The student will learn to design and simulate robots using CAD software.',
                                path: '/cad'
                            },
                            {
                                // icon: <FaLaptopCode size={32} />,
                                title: 'PCB',
                                desc: 'The student will learn to design printed circuit boards using EDA tools.',
                                path: '/pcb '
                            },
                            {
                                // icon: <LiaChalkboardTeacherSolid size={32} />,
                                title: 'ROS',
                                desc: 'The student will learn to program and control robots using the Robot Operating System (ROS).',
                                path: '/ros'
                            },
                            {
                                // icon: <LuBrainCircuit size={32} />,
                                title: 'RTOS',
                                desc: 'The student will learn to develop and manage real-time tasks using a Real-Time Operating System.',
                                path: '/rtos'
                            },
                            {
                                // icon: <GiArtificialIntelligence size={32} />,
                                title: 'Control System in Robotics',
                                desc: 'The student will learn to analyze and design control systems for robotic applications.',
                                path: '/controlsystem'
                            },
                            {
                                // icon: <FaLaptopCode size={32} />,
                                title: 'Circuit',
                                desc: 'The student will learn to design and analyze basic electrical and electronic circuits.',
                                path: '/circuit'
                            },
                            {
                                // icon: <BiBrain size={32} />,
                                title: 'Embedded System',
                                desc: 'The student will learn to design and program embedded systems for real-time applications.',
                                path: '/embeddedsystem'
                            },
                            {
                                // icon: <BiBrain size={32} />,
                                title: 'Microcontroller',
                                desc: 'The student will learn to program and interface microcontrollers for embedded applications.',
                                path: '/microcontroller'
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

            {/* Career Opportunities Section */}
            <section className="career-opportunities-section" style={{ backgroundColor: '#000', color: '#fff', padding: '80px 0' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                    <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 className="section-title" style={{
                            fontSize: '2.5rem',
                            margin: '0 0 15px',
                            color: '#fff'
                        }}>
                            <span style={{ color: '#fff' }}>Career <span style={{ color: '#8b5cf6' }}>Opportunities</span></span>
                        </h2>
                        <p className="section-subtitle" style={{
                            color: '#bbb',
                            fontSize: '1.1rem',
                            maxWidth: '700px',
                            margin: '0 auto',
                            lineHeight: '1.6'
                        }}>
                            Graduates in robotics are well-positioned for diverse and high-demand career paths, including:
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '20px',
                        marginTop: '30px'
                    }}>
                        {[
                            { title: 'Robotics Engineer', icon: '🤖' },
                            { title: 'Automation and Control Specialist', icon: '⚙️' },
                            { title: 'AI & Machine Learning Engineer', icon: '🧠' },
                            { title: 'Embedded Systems Developer', icon: '💻' },
                            { title: 'Research and Development Scientist', icon: '🔬' },
                            { title: 'Autonomous Vehicle and Drone Designer', icon: '🚁' }
                        ].map((role, index) => (
                            <div
                                key={index}
                                style={{
                                    backgroundColor: '#1a1a1a',
                                    borderRadius: '8px',
                                    padding: '25px',
                                    textAlign: 'center',
                                    border: '1px solid #333',
                                    transition: 'all 0.2s ease',
                                    cursor: 'default'
                                }}
                            >
                                <div style={{
                                    fontSize: '2.5rem',
                                    marginBottom: '15px'
                                }}>
                                    {role.icon}
                                </div>
                                <h3 style={{
                                    margin: '0',
                                    color: '#fff',
                                    fontSize: '1.2rem',
                                    fontWeight: '500'
                                }}>
                                    {role.title}
                                </h3>
                            </div>
                        ))}
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
                                    {/* <LuAArrowDown size={32} color='#51d700' /> */}
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
                                }}>
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
                                    {/* <LuALargeSmall size={32} color='#a5b4fc' /> */}
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

export default RoboticsExplore;