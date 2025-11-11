import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';
import './Login.css';
import { FaUser, FaLock, FaEnvelope, FaSignInAlt, FaUserPlus, FaExclamationCircle } from 'react-icons/fa';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState('');
  const navigate = useNavigate();
  // const { login, signup } = useAuth();

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!isLogin) {
      if (!formData.name) {
        newErrors.name = 'Name is required';
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setAuthError('');

    try {
      if (isLogin) {
        // Handle login
        await login(formData.email, formData.password);
        navigate('/dashboard');
      } else {
        // Handle signup
        await signup(formData.email, formData.password, formData.name);
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Authentication error:', error);
      setAuthError(error.message || 'Failed to authenticate. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setErrors({});
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  // Add floating particles effect
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random size between 2px and 6px
      const size = Math.random() * 4 + 2;
      
      // Random position
      const posX = Math.random() * window.innerWidth;
      
      // Random animation duration between 10s and 20s
      const duration = Math.random() * 10 + 10;
      
      // Apply styles
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}px`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.opacity = Math.random() * 0.5 + 0.1;
      
      document.querySelector('.auth-container').appendChild(particle);
      
      // Remove particle after animation completes
      setTimeout(() => {
        particle.remove();
      }, duration * 1000);
    };
    
    // Create initial particles
    for (let i = 0; i < 20; i++) {
      createParticle();
    }
    
    // Create new particles at intervals
    const interval = setInterval(createParticle, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h2>
          {isLogin ? (
            <>
              <FaSignInAlt style={{ marginRight: '10px' }} />
              Login
            </>
          ) : (
            <>
              <FaUserPlus style={{ marginRight: '10px' }} />
              Create Account
            </>
          )}
        </h2>
        <form onSubmit={handleSubmit} className={`auth-form ${!isLogin ? 'signup-form' : ''}`}>
          {!isLogin && (
            <div className="form-group">
              <label><FaUser style={{ marginRight: '8px' }} />Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
          )}
          
          <div className="form-group">
            <label><FaEnvelope style={{ marginRight: '8px' }} />Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          
          <div className="form-group">
            <label><FaLock style={{ marginRight: '8px' }} />Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className={errors.password ? 'error' : ''}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          
          {!isLogin && (
            <div className="form-group">
              <label><FaLock style={{ marginRight: '8px' }} />Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className={errors.confirmPassword ? 'error' : ''}
              />
              {errors.confirmPassword && (
                <span className="error-message">{errors.confirmPassword}</span>
              )}
            </div>
          )}
          
          <button type="submit" className="auth-button">
            {isLogin ? 'Login' : 'Create Account'} {isLogin ? <FaSignInAlt /> : <FaUserPlus />}
          </button>
          
          <p className="toggle-form">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button type="button" onClick={toggleForm} className="toggle-button">
              {isLogin ? 'Sign up' : 'Login'}
            </button>
          </p>
        </form>
      </div>
      
      {/* Decorative elements */}
      <div className="decorative-shape shape-1"></div>
      <div className="decorative-shape shape-2"></div>
      <div className="decorative-shape shape-3"></div>
    </div>
  );
};

export default Login;