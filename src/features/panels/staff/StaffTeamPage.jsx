import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Briefcase,
  Settings
} from 'lucide-react';
import PanelLayout from '../PanelLayout.jsx';
import '../StaffPanelPage.css';

const StaffTeamPage = () => {
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

  const teamMembers = [
    { id: 'STF001', name: 'Sarah Johnson', role: 'Registered Nurse', department: 'Cardiology', extension: 'x2341', status: 'On Duty' },
    { id: 'STF002', name: 'Michael Chen', role: 'Lab Technician', department: 'Pathology', extension: 'x1892', status: 'On Duty' },
    { id: 'STF003', name: 'Emily Rodriguez', role: 'Pharmacist', department: 'Pharmacy', extension: 'x2156', status: 'On Duty' },
    { id: 'STF004', name: 'David Kim', role: 'Nurse', department: 'ICU', extension: 'x1987', status: 'On Leave' },
    { id: 'STF005', name: 'Lisa Wang', role: 'Radiology Tech', department: 'Radiology', extension: 'x2234', status: 'On Duty' },
  ];

  return (
    <PanelLayout menuItems={menuItems} title="Staff Dashboard - Team">
      <div className="staff-panel-content">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search team members..." 
            className="search-input"
          />
        </div>

        <div className="schedule-table-container">
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Staff ID</th>
                <th>Name</th>
                <th>Role</th>
                <th>Department</th>
                <th>Extension</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((member) => (
                <tr key={member.id}>
                  <td>{member.id}</td>
                  <td>{member.name}</td>
                  <td>{member.role}</td>
                  <td>{member.department}</td>
                  <td>{member.extension}</td>
                  <td><span className={`status-badge ${member.status.toLowerCase().replace(' ', '-')}`}>{member.status}</span></td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-btn view" title="View">👁️</button>
                      <button className="action-btn edit" title="Message">💬</button>
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

export default StaffTeamPage;


