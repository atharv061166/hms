import { Link } from 'react-router-dom';
import { 
  Building2, 
  Users, 
  Calendar, 
  CreditCard, 
  Pill, 
  TestTube, 
  BarChart3,
  UserCheck,
  Stethoscope,
  Heart
} from 'lucide-react';
import Button from '../../components/Button/Button.jsx';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <h2><Building2 size={24} /> HMS</h2>
          </div>
          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#features" className="nav-link">Features</a>
            <Link to="/login" className="nav-link login-btn">
              <Button variant="primary" size="small" style={{ color: 'black', }}>Login</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hospital Management System</h1>
            <p className="hero-subtitle">
              Streamline your healthcare operations with our comprehensive digital solution. 
              Manage patients, appointments, billing, and more with ease.
            </p>
            <div className="hero-buttons">
              <Link to="/login">
                <Button variant="primary" size="large" style={{ color: 'black', }}>Get Started</Button>
              </Link>
            </div>
          </div>
          <div className="hero-illustration">
            <div className="medical-icon">
              <Building2 size={120} />
            </div>
            <div className="floating-elements">
              <div className="floating-icon"><UserCheck size={32} /></div>
              <div className="floating-icon"><Stethoscope size={32} /></div>
              <div className="floating-icon"><Pill size={32} /></div>
              <div className="floating-icon"><Heart size={32} /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            {[
              {
                title: 'Patient Management',
                description: 'Comprehensive patient records, medical history, and appointment scheduling.',
                icon: <Users size={48} />,
                path: '/patient-management',
              },
              {
                title: 'Appointment System',
                description: 'Easy booking, rescheduling, and management of patient appointments.',
                icon: <Calendar size={48} />,
                path: '/appointment-system',
              },
              {
                title: 'Billing & Payments',
                description: 'Integrated billing system with payment tracking and invoice generation.',
                icon: <CreditCard size={48} />,
                path: '/billing-payments',
              },
              {
                title: 'Pharmacy Management',
                description: 'Inventory tracking, prescription management, and medication dispensing.',
                icon: <Pill size={48} />,
                path: '/pharmacy-management',
              },
              {
                title: 'Lab Integration',
                description: 'Lab test requests, result management, and report generation.',
                icon: <TestTube size={48} />,
                path: '/lab-integration',
              },
              {
                title: 'Analytics & Reports',
                description: 'Comprehensive reporting and analytics for better decision making.',
                icon: <BarChart3 size={48} />,
                path: '/analytics-reports',
              },
            ].map((feature) => (
              <Link to={feature.path} key={feature.title} className="feature-card-link">
            <div className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
            </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About HMS</h2>
              <p>
                Our Hospital Management System is designed to modernize healthcare operations 
                and improve patient care delivery. Built with cutting-edge technology, our 
                platform provides healthcare professionals with the tools they need to deliver 
                exceptional patient care.
              </p>
              <p>
                From patient registration to discharge, our system covers every aspect of 
                hospital operations, ensuring seamless workflow and improved efficiency.
              </p>
              <div className="stats">
                <div className="stat">
                  <h3>1000+</h3>
                  <p>Patients Served</p>
                </div>
                <div className="stat">
                  <h3>50+</h3>
                  <p>Healthcare Providers</p>
                </div>
                <div className="stat">
                  <h3>99.9%</h3>
                  <p>Uptime</p>
                </div>
              </div>
            </div>
            <div className="about-illustration">
              <div className="illustration-container">
                <div className="hospital-building">
                  <Building2 size={120} />
                </div>
                <div className="surrounding-elements">
                  <div className="element"><Heart size={32} /></div>
                  <div className="element"><UserCheck size={32} /></div>
                  <div className="element"><Stethoscope size={32} /></div>
                  <div className="element"><Pill size={32} /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3><Building2 size={20} /> HMS</h3>
              <p>Modernizing healthcare through technology</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#features">Features</a></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>✉️ support@hms.com</p>
              <p>📞 +1 (555) 123-4567</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Hospital Management System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
