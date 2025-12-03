import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Briefcase,
  Settings
} from 'lucide-react';
import PanelLayout from '../PanelLayout.jsx';
import '../StaffPanelPage.css';

const StaffTrainingPage = () => {
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

  const trainings = [
    { id: 'TRN001', name: 'HIPAA Compliance 2025', category: 'Compliance', dueDate: '2025-02-20', status: 'Pending', progress: '0%' },
    { id: 'TRN002', name: 'CPR Certification', category: 'Clinical', dueDate: '2025-03-15', status: 'In Progress', progress: '60%' },
    { id: 'TRN003', name: 'Medication Safety', category: 'Safety', dueDate: '2025-02-10', status: 'Completed', progress: '100%' },
    { id: 'TRN004', name: 'Emergency Response', category: 'Safety', dueDate: '2025-04-01', status: 'Not Started', progress: '0%' },
    { id: 'TRN005', name: 'Patient Communication', category: 'Professional', dueDate: '2025-02-28', status: 'Completed', progress: '100%' },
  ];

  return (
    <PanelLayout menuItems={menuItems} title="Staff Dashboard - Training">
      <div className="staff-panel-content">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search training modules..." 
            className="search-input"
          />
        </div>

        <div className="schedule-table-container">
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Training ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Due Date</th>
                <th>Progress</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {trainings.map((training) => (
                <tr key={training.id}>
                  <td>{training.id}</td>
                  <td>{training.name}</td>
                  <td>{training.category}</td>
                  <td>{training.dueDate}</td>
                  <td>{training.progress}</td>
                  <td><span className={`status-badge ${training.status.toLowerCase().replace(' ', '-')}`}>{training.status}</span></td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-btn view" title="View">👁️</button>
                      <button className="action-btn edit" title="Start">▶️</button>
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

export default StaffTrainingPage;


