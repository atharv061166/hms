import { Routes, Route, Navigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Briefcase,
  Settings
} from 'lucide-react';
import PanelLayout from './PanelLayout.jsx';
import StaffSchedulePage from './staff/StaffSchedulePage.jsx';
import StaffTeamPage from './staff/StaffTeamPage.jsx';
import StaffTrainingPage from './staff/StaffTrainingPage.jsx';
import './StaffPanelPage.css';

const StaffDashboardContent = () => {
  const menuItems = [
    {
      label: 'Dashboard',
      icon: LayoutDashboard,
      path: '/panel/staff',
      demoData: [
        { label: 'Total Staff', value: '245' },
        { label: 'On Duty Today', value: '187' },
        { label: 'Pending Requests', value: '8' },
      ],
    },
    {
      label: 'Schedule',
      icon: Calendar,
      path: '/panel/staff/schedule',
      demoData: [
        { label: 'This Week', value: '5 shifts' },
        { label: 'Upcoming', value: '3 scheduled' },
        { label: 'Hours This Month', value: '160 hrs' },
      ],
    },
    {
      label: 'Team',
      icon: Users,
      path: '/panel/staff/team',
      demoData: [
        { label: 'Team Members', value: '24' },
        { label: 'On Duty', value: '18' },
        { label: 'Departments', value: '5' },
      ],
    },
    {
      label: 'Training',
      icon: Briefcase,
      path: '/panel/staff/training',
      demoData: [
        { label: 'Completed', value: '92%' },
        { label: 'Pending', value: '2 modules' },
        { label: 'Certifications', value: '5 active' },
      ],
    },
    {
      label: 'Settings',
      icon: Settings,
      path: '/panel/staff/settings',
    },
  ];

  const stats = [
    { label: 'Total Staff', value: '245', trend: '+12 this month' },
    { label: 'On Duty Today', value: '187', trend: '87% coverage' },
    { label: 'Pending Requests', value: '8', trend: 'Leave & shift swaps' },
    { label: 'Training Completed', value: '92%', trend: 'This quarter' },
  ];

  return (
    <PanelLayout menuItems={menuItems} title="Staff Dashboard">
      <div className="staff-panel-content">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <span className="stat-label">{stat.label}</span>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-trend">{stat.trend}</span>
            </div>
          ))}
        </div>

        <div className="schedule-section">
          <h2>My Schedule</h2>
          <div className="schedule-table-container">
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Shift</th>
                  <th>Department</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { date: 'Feb 05', shift: 'Morning (07:00-15:00)', department: 'Emergency', status: 'Confirmed' },
                  { date: 'Feb 06', shift: 'Evening (15:00-23:00)', department: 'ICU', status: 'Confirmed' },
                  { date: 'Feb 07', shift: 'Night (23:00-07:00)', department: 'Emergency', status: 'Pending approval' },
                ].map((schedule, idx) => (
                  <tr key={idx}>
                    <td>{schedule.date}</td>
                    <td>{schedule.shift}</td>
                    <td>{schedule.department}</td>
                    <td><span className={`status-badge ${schedule.status.toLowerCase().replace(' ', '-')}`}>{schedule.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PanelLayout>
  );
};

const StaffPanelPage = () => {
  return (
    <Routes>
      <Route index element={<StaffDashboardContent />} />
      <Route path="schedule" element={<StaffSchedulePage />} />
      <Route path="team" element={<StaffTeamPage />} />
      <Route path="training" element={<StaffTrainingPage />} />
      <Route path="*" element={<Navigate to="/panel/staff" replace />} />
    </Routes>
  );
};

export default StaffPanelPage;
