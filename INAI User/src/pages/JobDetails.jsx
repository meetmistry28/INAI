import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import jobsData from '../data/jobs';
import '../styles/JobDetails.css';

const JobDetails = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [verificationError, setVerificationError] = useState('');
  
  // Form state for new fields
  const [formData, setFormData] = useState({
    dateOfBirth: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    highestQualification: '',
    yearOfPassing: '',
    currentCompany: '',
    currentPosition: '',
    totalExperience: '',
    currentSalary: '',
    expectedSalary: '',
    noticePeriod: '',
    linkedinProfile: '',
    githubProfile: '',
    portfolio: ''
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const jobCategories = {
    'ai-ml': {
      title: 'AI/ML',
      description: 'We are seeking a highly motivated AI/ML Engineer to design, develop, and deploy scalable machine learning and artificial intelligence solutions. The ideal candidate will work on building intelligent systems, applying state-of-the-art algorithms, and integrating them into real-world applications. ',
      responsibilities: [
        'Research, design, and implement machine learning models and AI-driven solutions. ',
        'Work with large, complex datasets to extract insights and improve decision-making. ',
        'Develop, train, test, and optimize ML/DL models (supervised, unsupervised, reinforcement learning). ',
        'Collaborate with cross-functional teams (data engineers, software developers, product managers).',
        'Deploy models into production using cloud services and MLOps pipelines. ',
        'Stay updated with the latest advancements in AI/ML, NLP, computer vision, and related fields. ',
        'Document processes, algorithms, and results for knowledge sharing. '
      ],
      requirements: [
        'Education: Bachelor’s or Master’s in Computer Science, Data Science, Artificial Intelligence, Machine Learning, or related field. ',
        'Strong programming skills in Python (NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch, Keras). ',
        'Knowledge of machine learning algorithms, deep learning architectures, NLP, and computer vision. ',
        'Experience with SQL/NoSQL databases, data preprocessing, and feature engineering. ',
        'Familiarity with cloud platforms (AWS, Azure, GCP) and containerization tools (Docker, Kubernetes).  ',
        'Understanding of MLOps, CI/CD pipelines, and model deployment is a plus. ',
        'Soft Skills: Analytical mindset, problem-solving skills, ability to work in teams, strong communication. '
      ]
    },
    'automation': {
      title: 'Automation',
      description: 'We are looking for a detail-oriented Automation Engineer to design, develop, and implement automation solutions that streamline processes, improve efficiency, and reduce human intervention. The role involves working with software automation, process automation, and testing automation depending on the project needs. ',
      responsibilities: [
        'Design, build, and maintain automation frameworks and scripts for business and technical processes. ',
        'Collaborate with development, QA, and operations teams to identify automation opportunities.',
        'Implement Robotic Process Automation (RPA), IT process automation, or testing automation as required. ',
        'Develop, maintain, and optimize CI/CD pipelines for faster deployments. ',
        'Monitor and troubleshoot automated workflows to ensure stability and efficiency. ',
        'Document automation processes, workflows, and standard operating procedures',
        'Research and adopt emerging automation technologies/tools. '
      ],
      requirements: [
        'Education: Bachelor’s degree in Computer Science, Information Technology, Electronics, or related field. ',
        'Proficiency in scripting/programming (Python, Java, Shell, PowerShell, etc.). ',
        'Experience with automation tools (UiPath, Automation Anywhere, Blue Prism, Selenium, Ansible, Jenkins, Puppet, Chef, etc.). ',
        'Knowledge of DevOps practices and cloud platforms (AWS, Azure, GCP). ',
        'Familiarity with databases (SQL/NoSQL) for automated workflows. ',
        'Understanding of API integration and orchestration. ',
        'Soft Skills: Problem-solving, analytical thinking, attention to detail, collaboration, and communication. '
      ]
    },
    'robotics': {
      title: 'Robotics',
      description: 'We are seeking a passionate and innovative Robotics Engineer to design, develop, and deploy robotic systems and solutions. The ideal candidate will have expertise in mechanical systems, electronics, and software integration, with a strong focus on automation, AI, and real-world applications of robotics. ',
      responsibilities: [
        'Design and develop robotic systems, components, and prototypes. ',
        'Work on mechanical structures, actuators, sensors, and control systems. ',
        'Program robots using C++, Python, ROS (Robot Operating System), or similar frameworks. ',
        'Collaborate with AI/ML teams to integrate computer vision, path planning, and autonomous navigation. ',
        'Conduct simulation, testing, troubleshooting, and optimization of robotic systems. ',
        'Implement safety protocols, calibration, and quality standards for robots. ',
        'Research and evaluate new robotics technologies and trends. ',
        'Document designs, processes, and testing results for knowledge sharing.'
      ],
      requirements: [
        'Education: Bachelor’s or Master’s in Robotics, Mechatronics, Mechanical Engineering, Electrical/Electronics, Computer Science, or related field. ',
        'Strong knowledge of mechanical design, kinematics, and dynamics of robots. ',
        'Proficiency in programming (C++, Python, MATLAB, ROS). ',
        'Experience with sensors, actuators, embedded systems, and microcontrollers (Arduino, Raspberry Pi, STM32, etc.). ',
        'Familiarity with robotics simulation tools (Gazebo, V-REP, Webots). ',
        'Understanding of control systems, path planning, and SLAM (Simultaneous Localization and Mapping). ',
        'Knowledge of AI, computer vision, and machine learning is a plus.',
        'Soft Skills: Creativity, problem-solving, teamwork, adaptability, and strong communication. '
      ]
    }
  };

  const job = jobCategories[categoryId] || jobCategories['ai-ml'];

  if (!job) {
    return (
      <div className="not-found">
        <h2>Job category not found</h2>
        <button onClick={() => navigate('/careers')} className="back-button">
          ← Back to Careers
        </button>
      </div>
    );
  }

  const verifyAadhaar = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!/^\d{12}$/.test(aadhaarNumber)) {
      setVerificationError('Please enter a valid 12-digit Aadhaar number');
      return;
    }
    
    setIsVerifying(true);
    setVerificationError('');
    
    try {
      // In a real application, you would call your backend API here
      // which would then call the UIDAI verification API
      // This is a mock implementation
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes, we'll randomly succeed or fail
      const isVerified = Math.random() > 0.5;
      
      if (isVerified) {
        setVerificationStatus('verified');
      } else {
        setVerificationStatus('failed');
        setVerificationError('Aadhaar verification failed. Please check the number and try again.');
      }
    } catch (error) {
      console.error('Verification error:', error);
      setVerificationStatus('error');
      setVerificationError('An error occurred during verification. Please try again.');
    } finally {
      setIsVerifying(false);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (verificationStatus !== 'verified') {
      alert('Please verify your Aadhaar number before submitting the application.');
      return;
    }
    
    // Handle form submission here
    alert('Application submitted successfully!');
  };

  return (
    <div className="job-details-page">
      <div className="job-content">
        <div className="job-header">
          <div>
            <button onClick={() => navigate('/careers')} className="back-button">
              Back to Careers
            </button>
            <h1>{job.title} Position</h1>
          </div>
        </div>

        <div className="job-description">
          <div className="job-section">
            <h2>Job Description</h2>
            <p className="job-overview">{job.description}</p>
          </div>

          <div className="job-section">
            <h2>Responsibilities:</h2>
            <ul>
              {job.responsibilities.map((item, index) => (
                <li key={`resp-${index}`}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="job-section">
            <h2>Requirements:</h2>
            <ul>
              {job.requirements.map((item, index) => (
                <li key={`req-${index}`}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="application-form">
          <h2>Apply for {job.title} Position</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-column">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input type="text" id="fullName" name="fullName"  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email"  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                     
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit phone number"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="dateOfBirth">Date of Birth</label>
                  <input 
                    type="date" 
                    id="dateOfBirth" 
                    name="dateOfBirth" 
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                     
                  />
                </div>
                
                <div className="form-group">
                  <label>Gender</label>
                  <div className="radio-group">
                    <label>
                      <input 
                        type="radio" 
                        name="gender" 
                        value="male" 
                        checked={formData.gender === 'male'}
                        onChange={handleInputChange}
                         
                      /> Male
                    </label>
                    <label>
                      <input 
                        type="radio" 
                        name="gender" 
                        value="female"
                        checked={formData.gender === 'female'}
                        onChange={handleInputChange}
                      /> Female
                    </label>
                    <label>
                      <input 
                        type="radio" 
                        name="gender" 
                        value="other"
                        checked={formData.gender === 'other'}
                        onChange={handleInputChange}
                      /> Other
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-column">
                <div className="form-group">
                  <label htmlFor="position">Position</label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={job.title}
                    readOnly
                    className="readonly-field"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="resume">Upload Resume (PDF, max 5MB)</label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="aadhaarNumber">Aadhaar Number</label>
                  <div className="aadhaar-verification">
                    <input
                      type="text"
                      id="aadhaarNumber"
                      name="aadhaarNumber"
                      value={aadhaarNumber}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '').slice(0, 12);
                        setAadhaarNumber(value);
                        // Reset verification status when number changes
                        if (verificationStatus) setVerificationStatus(null);
                      }}
                      placeholder="Enter 12-digit Aadhaar number"
                      pattern="\d{12}"
                      maxLength="12"
                      
                      disabled={isVerifying}
                      className={verificationStatus === 'verified' ? 'verified' : ''}
                    />
                    <button
                      type="button"
                      onClick={verifyAadhaar}
                      disabled={isVerifying || !aadhaarNumber || aadhaarNumber.length !== 12}
                      className="verify-button"
                    >
                      {isVerifying ? 'Verifying...' : 'Verify'}
                    </button>
                  </div>
                  {verificationStatus === 'verified' && (
                    <div className="verification-success">
                      <span className="verification-icon">✓</span> Aadhaar verified successfully
                    </div>
                  )}
                  {verificationError && (
                    <div className="verification-error">{verificationError}</div>
                  )}
                </div>
                
                <div className="aadhaar-consent">
                  <p>By providing your Aadhaar number, you consent to its verification as per the Aadhaar Act, 2016.</p>
                </div>
                
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <textarea 
                    id="address" 
                    name="address" 
                    value={formData.address}
                    onChange={handleInputChange}
                    rows="2"
                     
                  ></textarea>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input 
                      type="text" 
                      id="city" 
                      name="city" 
                      value={formData.city}
                      onChange={handleInputChange}
                       
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input 
                      type="text" 
                      id="state" 
                      name="state" 
                      value={formData.state}
                      onChange={handleInputChange}
                       
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pincode">Pincode</label>
                    <input 
                      type="text" 
                      id="pincode" 
                      name="pincode" 
                      value={formData.pincode}
                      onChange={handleInputChange}
                      pattern="[0-9]{6}"
                      title="Please enter a valid 6-digit pincode"
                       
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>Education Details</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="highestQualification">Highest Qualification</label>
                  <select 
                    id="highestQualification" 
                    name="highestQualification" 
                    value={formData.highestQualification}
                    onChange={handleInputChange}
                    
                  >
                    <option value="">Select Highest Qualification</option>
                    <option value="high_school">High School</option>
                    <option value="diploma">Diploma</option>
                    <option value="bachelors">Bachelor's Degree</option>
                    <option value="masters">Master's Degree</option>
                    <option value="phd">PhD/Doctorate</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="yearOfPassing">Name Of Degree</label>
                  <input 
                    type="text" 
                    id="yearOfPassing" 
                    name="yearOfPassing" 
                    min="1950" 
                    max={new Date().getFullYear()}
                    value={formData.yearOfPassing}
                    onChange={handleInputChange}
                     
                  />
                </div>
              </div>
            </div>
            
            <div className="form-section">
              <h3>Professional Details</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="currentCompany">Current Company</label>
                  <input 
                    type="text" 
                    id="currentCompany" 
                    name="currentCompany" 
                    value={formData.currentCompany}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="currentPosition">Current Position</label>
                  <input 
                    type="text" 
                    id="currentPosition" 
                    name="currentPosition" 
                    value={formData.currentPosition}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="totalExperience">Total Experience (Years)</label>
                  <input 
                    type="number" 
                    id="totalExperience" 
                    name="totalExperience" 
                    min="0" 
                    step="0.5"
                    value={formData.totalExperience}
                    onChange={handleInputChange}
                     
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="currentSalary">Current Salary (₹ per annum)</label>
                  <input 
                    type="number" 
                    id="currentSalary" 
                    name="currentSalary" 
                    min="0"
                    value={formData.currentSalary}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="expectedSalary">Expected Salary (₹ per annum)</label>
                  <input 
                    type="number" 
                    id="expectedSalary" 
                    name="expectedSalary" 
                    min="0"
                    value={formData.expectedSalary}
                    onChange={handleInputChange}
                     
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="noticePeriod">Notice Period (Days)</label>
                  <input 
                    type="number" 
                    id="noticePeriod" 
                    name="noticePeriod" 
                    min="0"
                    value={formData.noticePeriod}
                    onChange={handleInputChange}
                     
                  />
                </div>
              </div>
            </div>
            
            <div className="form-section">
              <h3>Online Presence</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="linkedinProfile">LinkedIn Profile</label>
                  <input 
                    type="url" 
                    id="linkedinProfile" 
                    name="linkedinProfile" 
                    placeholder="https://www.linkedin.com/in/your-profile"
                    value={formData.linkedinProfile}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="githubProfile">GitHub Profile</label>
                  <input 
                    type="url" 
                    id="githubProfile" 
                    name="githubProfile" 
                    placeholder="https://github.com/your-username"
                    value={formData.githubProfile}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="portfolio">Portfolio Website</label>
                  <input 
                    type="url" 
                    id="portfolio" 
                    name="portfolio" 
                    placeholder="https://yourportfolio.com"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            
            <div className="form-group full-width">
              <label htmlFor="coverLetter">Cover Letter</label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                rows="5"
                placeholder="Tell us why you'd be a great fit for this position..."
                
              ></textarea>
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-button">Submit Application</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
