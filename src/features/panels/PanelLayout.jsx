import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.jsx';
import { 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  Stethoscope, 
  Calendar, 
  CreditCard, 
  Pill, 
  TestTube, 
  BarChart3, 
  Settings,
  ChevronLeft,
  ChevronRight,
  Building2,
  LogOut,
  HelpCircle
} from 'lucide-react';
import './PanelLayout.css';

const PanelLayout = ({ children, menuItems, title }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="panel-layout">
      {/* Sidebar */}
      <aside className={`panel-sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <Building2 size={24} />
            {!sidebarCollapsed && <span>H HMS</span>}
          </div>
          <button 
            className="sidebar-toggle"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            aria-label="Toggle sidebar"
          >
            {sidebarCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path || 
              (item.subItems && item.subItems.some(sub => location.pathname === sub.path));
            const Icon = item.icon;
            
            return (
              <div key={item.label} className="nav-group">
                <div className="nav-item-wrapper">
                  <Link 
                    to={item.path} 
                    className={`nav-item ${isActive ? 'active' : ''}`}
                    title={sidebarCollapsed ? item.label : ''}
                  >
                    <Icon size={20} />
                    {!sidebarCollapsed && <span>{item.label}</span>}
                  </Link>
                  {item.demoData && !sidebarCollapsed && (
                    <div className="nav-item-tooltip">
                      <div className="tooltip-content">
                        <strong>{item.label}</strong>
                        {item.demoData.map((data, idx) => (
                          <div key={idx} className="tooltip-item">
                            <span className="tooltip-label">{data.label}:</span>
                            <span className="tooltip-value">{data.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                {!sidebarCollapsed && item.subItems && (
                  <div className="nav-subitems">
                    {item.subItems.map((subItem) => {
                      const SubIcon = subItem.icon;
                      const isSubActive = location.pathname === subItem.path;
                      return (
                        <div key={subItem.label} className="nav-subitem-wrapper">
                          <Link
                            to={subItem.path}
                            className={`nav-subitem ${isSubActive ? 'active' : ''}`}
                          >
                            {SubIcon && <SubIcon size={16} />}
                            <span>{subItem.label}</span>
                          </Link>
                          {subItem.demoData && (
                            <div className="nav-item-tooltip">
                              <div className="tooltip-content">
                                <strong>{subItem.label}</strong>
                                {subItem.demoData.map((data, idx) => (
                                  <div key={idx} className="tooltip-item">
                                    <span className="tooltip-label">{data.label}:</span>
                                    <span className="tooltip-value">{data.value}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-help">
            <HelpCircle size={18} />
            {!sidebarCollapsed && <span>Need Help?</span>}
          </div>
          {!sidebarCollapsed && (
            <p className="sidebar-help-text">Check our documentation for support</p>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <div className="panel-main">
        {/* Top Header */}
        <header className="panel-top-header">
          <h1>{title}</h1>
          <div className="panel-header-actions">
            <div className="user-profile">
              <div className="user-avatar">{user?.name?.charAt(0) || 'U'}</div>
              <div className="user-details">
                <span className="user-name">{user?.name || 'User'}</span>
                <span className="user-role">{user?.role || 'Guest'}</span>
              </div>
            </div>
            <button className="logout-btn" onClick={handleLogout} title="Logout">
              <LogOut size={18} />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="panel-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default PanelLayout;

