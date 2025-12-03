import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.jsx';
import { 
  Building2, 
  Users, 
  Calendar, 
  CreditCard, 
  Pill, 
  Mail, 
  Lock, 
  User, 
  Phone,
  MapPin,
  Eye,
  EyeOff
} from 'lucide-react';
import Button from '../../components/Button/Button.jsx';
import Input from '../../components/Input/Input.jsx';
import './LoginPage.css';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    address: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const validateForm = () => {
    if (isLogin) {
      return credentials.email && credentials.password;
    } else {
      return credentials.name && credentials.email && credentials.password && 
             credentials.confirmPassword && credentials.phone && credentials.address &&
             credentials.password === credentials.confirmPassword;
    }
  };

  const resetForm = () => {
    setCredentials({
      email: '',
      password: '',
      name: '',
      phone: '',
      address: '',
      confirmPassword: ''
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!validateForm()) {
      setError(isLogin ? 'Please fill in all fields' : 'Please fill in all fields and ensure passwords match');
      setLoading(false);
      return;
    }

    try {
      if (isLogin) {
        const result = await login(credentials);
        if (result.success) {
          navigate('/dashboard');
        } else {
          setError(result.error || 'Login failed');
        }
      } else {
        // For now, simulate signup success and redirect to login
        setError('');
        alert('Registration successful! Please login with your credentials.');
        setIsLogin(true);
        resetForm();
      }
    } catch {
      setError(isLogin ? 'An error occurred during login' : 'An error occurred during registration');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      {/* Left Side - Branding */}
      <div className="auth-branding">
        <div className="branding-content">
          <div className="brand-logo">
            <Building2 size={64} style={{ color: 'black' }} />
          </div>
          <h1>Hospital Management System</h1>
          <p className="brand-subtitle">
            Streamline your healthcare operations with our comprehensive digital solution
          </p>
          
          <div className="feature-showcase">
            <div className="feature-item">
              <Users size={24} style={{ color: 'black' }} />
              <span style={{ color: 'black' }}>Patient Management</span>
            </div>
            <div className="feature-item">
              <Calendar size={24} style={{ color: 'black' }} />
              <span style={{ color: 'black' }}>Appointment Scheduling</span>
            </div>
            <div className="feature-item">
              <CreditCard style={{ color: 'black' }} size={24} />
              <span style={{ color: 'black' }}>Billing & Payments</span>
            </div>
            <div className="feature-item">
              <Pill size={24} style={{ color: 'black' }} />
              <span style={{ color: 'black' }}>Pharmacy Management</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="auth-form-section">
        <div className="auth-form-container">
          <div className="auth-tabs">
            <button 
              className={`tab-button ${isLogin ? 'active' : ''}`}
              onClick={() => {
                setIsLogin(true);
                resetForm();
              }}
              style={{ color: 'black' }}
            >
              Sign In
            </button>
            <button 
              className={`tab-button ${!isLogin ? 'active' : ''}`}
              onClick={() => {
                setIsLogin(false);
                resetForm();
              }}
              style={{ color: 'black' }}
            >
              Sign Up
            </button>
          </div>

          <div className="auth-form-content">
            <div className="form-header">
              <h2 style={{ color: 'black' }}>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
              <p style={{ color: 'black' }}>{isLogin ? 'Sign in to your account' : 'Sign up to get started'}</p>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              {!isLogin && (
                <div className="input-group">
                  <User size={20} style={{ marginTop: '17px' }} className="input-icon" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={credentials.name}
                    onChange={handleChange}
                    className="auth-input"
                    required
                  />
                </div>
              )}

              <div className="input-group">
                <Mail size={20} style={{ marginTop: '17px' }} className="input-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={credentials.email}
                  onChange={handleChange}
                  className="auth-input"
                  required
                />
              </div>

              {!isLogin && (
                <div className="input-group">
                  <Phone size={20} style={{ marginTop: '17px' }} className="input-icon" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={credentials.phone}
                    onChange={handleChange}
                    className="auth-input"
                    required
                  />
                </div>
              )}

              {!isLogin && (
                <div className="input-group">
                  <MapPin size={20} style={{ marginTop: '17px' }} className="input-icon" />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={credentials.address}
                    onChange={handleChange}
                    className="auth-input"
                    required
                  />
                </div>
              )}

              <div className="input-group">
                <Lock size={20} style={{ marginTop: '17px' }} className="input-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  value={credentials.password}
                  onChange={handleChange}
                  className="auth-input"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {!isLogin && (
                <div className="input-group">
                  <Lock size={20} style={{ marginTop: '17px' }} className="input-icon" />
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={credentials.confirmPassword}
                    onChange={handleChange}
                    className="auth-input"
                    required
                  />
                </div>
              )}

              {error && (
                <div className="error-message">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                loading={loading}
                disabled={!validateForm()}
                className="auth-button"
                size="large"
                style={{ color: 'black' }}
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </Button>
            </form>

            <div className="auth-footer">
              <a href="/" className="back-link">
                ← Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;