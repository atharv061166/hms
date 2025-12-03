import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Briefcase,
  Settings
} from 'lucide-react';
import PanelLayout from '../PanelLayout.jsx';
import '../StaffPanelPage.css';

const StaffSchedulePage = () => {
  const menuItems = [
    {
      label: 'Dashboard',
      icon: LayoutDashboard,
      path: '/panel/staff',
    },
    {
      label: 'Schedule',
      icon: Calendar,
      path: '/panel/staff/schedule',
    },
    {
      label: 'Team',
      icon: Users,
      path: '/panel/staff/team',
    },
    {
      label: 'Training',
      icon: Briefcase,
      path: '/panel/staff/training',
    },
    {
      label: 'Settings',
      icon: Settings,
      path: '/panel/staff/settings',
    },
  ];

  const schedules = [
    { id: 'SCH001', date: '2025-02-05', shift: 'Morning (07:00-15:00)', department: 'Emergency', status: 'Confirmed' },
    { id: 'SCH002', date: '2025-02-06', shift: 'Evening (15:00-23:00)', department: 'ICU', status: 'Confirmed' },
    { id: 'SCH003', date: '2025-02-07', shift: 'Night (23:00-07:00)', department: 'Emergency', status: 'Pending approval' },
    { id: 'SCH004', date: '2025-02-08', shift: 'Morning (07:00-15:00)', department: 'Cardiology', status: 'Confirmed' },
    { id: 'SCH005', date: '2025-02-09', shift: 'Evening (15:00-23:00)', department: 'Emergency', status: 'Scheduled' },
  ];

  return (
    <PanelLayout menuItems={menuItems} title="Staff Dashboard - Schedule">
      <div className="staff-panel-content">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search schedule..." 
            className="search-input"
          />
          <button className="view-toggle">Request Change</button>
        </div>

        <div className="schedule-table-container">
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Shift</th>
                <th>Department</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {schedules.map((schedule) => (
                <tr key={schedule.id}>
                  <td>{schedule.date}</td>
                  <td>{schedule.shift}</td>
                  <td>{schedule.department}</td>
                  <td><span className={`status-badge ${schedule.status.toLowerCase().replace(' ', '-')}`}>{schedule.status}</span></td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-btn view" title="View">👁️</button>
                      <button className="action-btn edit" title="Request Swap">🔄</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PanelLayout>
  );
};

export default StaffSchedulePage;


