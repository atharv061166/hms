import { useAuth } from '../../hooks/useAuth.jsx';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Calendar, 
  CreditCard, 
  BarChart3, 
  Building2, 
  Activity,
  Database,
  Clock,
  ShieldCheck,
  Stethoscope,
  UserRound
} from 'lucide-react';
import Button from '../../components/Button/Button.jsx';
import './DashboardPage.css';

const DashboardPage = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <h1 style={{ color: 'black' }}><Building2 size={24} style={{ color: 'black' }} /> Hospital Management System</h1>
          <div className="user-info">
            <span style={{ color: 'black' }}>Welcome, {user?.name}</span>
            <span className="user-role" style={{ color: 'black' }}>({user?.role})</span>
            <Button variant="outline" size="small" onClick={handleLogout} style={{ color: 'black', borderColor: 'black' }}>
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="dashboard-content">
          <div className="welcome-section">
            <h2 style={{ color: 'black' }}>Welcome to HMS Dashboard</h2>
            <p style={{ color: 'black' }}>You are logged in as <strong>{user?.name}</strong> with role <strong>{user?.role}</strong></p>
            {user?.department && <p style={{ color: 'black' }}>Department: <strong>{user.department}</strong></p>}
          </div>

          <div className="quick-actions">
            <h3 style={{ color: 'black' }}>Quick Actions</h3>
            <div className="action-grid">
              {(() => {
                // Define all possible panels
                const allPanels = [
                  {
                    icon: <ShieldCheck size={32} style={{ color: 'black' }} />,
                    title: 'Admin Panel',
                    description: 'Staffing, compliance, and uptime.',
                    link: '/panel/admin',
                    allowedRoles: ['admin'],
                  },
                  {
                    icon: <Stethoscope size={32} style={{ color: 'black' }} />,
                    title: 'Doctor Panel',
                    description: 'Rounds, orders, and alerts.',
                    link: '/panel/doctor',
                    allowedRoles: ['admin', 'doctor'],
                  },
                  {
                    icon: <UserRound size={32} style={{ color: 'black' }} />,
                    title: 'Patient Panel',
                    description: 'Care plans and appointments.',
                    link: '/panel/patient',
                    allowedRoles: ['admin', 'doctor', 'patient'],
                  },
                  {
                    icon: <Users size={32} style={{ color: 'black' }} />,
                    title: 'Staff Panel',
                    description: 'Schedule and team management.',
                    link: '/panel/staff',
                    allowedRoles: ['admin', 'staff'],
                  },
                  {
                    icon: <Users size={32} style={{ color: 'black' }} />,
                    title: 'Patient Management',
                    description: 'Records and history.',
                    link: '/patient-management',
                    allowedRoles: ['admin'],
                  },
                  {
                    icon: <Calendar size={32} style={{ color: 'black' }} />,
                    title: 'Appointments',
                    description: 'Schedule and manage.',
                    link: '/appointment-system',
                    allowedRoles: ['admin'],
                  },
                  {
                    icon: <CreditCard size={32} style={{ color: 'black' }} />,
                    title: 'Billing & Payments',
                    description: 'Invoices and payments.',
                    link: '/billing-payments',
                    allowedRoles: ['admin'],
                  },
                  {
                    icon: <BarChart3 size={32} style={{ color: 'black' }} />,
                    title: 'Analytics',
                    description: 'Reports and insights.',
                    link: '/analytics-reports',
                    allowedRoles: ['admin'],
                  },
                ];

                // Filter panels based on user role
                const userRole = user?.role;
                const accessiblePanels = allPanels.filter(panel => 
                  panel.allowedRoles.includes(userRole)
                );

                return accessiblePanels.map((card) => (
                  <div className="action-card" key={card.title}>
                    <div className="action-icon">{card.icon}</div>
                    <h4 style={{ color: 'black' }}>{card.title}</h4>
                    <p style={{ color: 'black' }}>{card.description}</p>
                    <Link to={card.link}>
                      <Button variant="primary" style={{ color: 'black' }}>Open</Button>
                    </Link>
              </div>
                ));
              })()}
            </div>
          </div>

          <div className="system-info">
            <h3 style={{ color: 'black' }}>System Status</h3>
            <div className="status-grid">
              <div className="status-item">
                <Activity size={16} style={{ color: 'black' }} />
                <span className="status-label" style={{ color: 'black' }}>Server Status:</span>
                <span className="status-value status-online" style={{ color: 'black' }}>Online</span>
              </div>
              <div className="status-item">
                <Database size={16} style={{ color: 'black' }} />
                <span className="status-label" style={{ color: 'black' }}>Database:</span>
                <span className="status-value status-online" style={{ color: 'black' }}>Connected</span>
              </div>
              <div className="status-item">
                <Clock size={16} style={{ color: 'black' }} />
                <span className="status-label" style={{ color: 'black' }}>Last Login:</span>
                <span className="status-value" style={{ color: 'black' }}>{new Date().toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;