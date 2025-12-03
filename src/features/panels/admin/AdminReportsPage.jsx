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
  Settings
} from 'lucide-react';
import PanelLayout from '../PanelLayout.jsx';
import '../AdminPanelPage.css';

const AdminReportsPage = () => {
  const menuItems = [
    {
      label: 'Dashboard',
      icon: LayoutDashboard,
      path: '/panel/admin',
    },
    {
      label: 'Doctors',
      icon: Stethoscope,
      path: '/panel/admin/doctors',
      subItems: [
        { label: 'Doctors', icon: Users, path: '/panel/admin/doctors' },
        { label: 'Add Doctor', icon: UserCheck, path: '/panel/admin/doctors/add' },
      ],
    },
    {
      label: 'Patients',
      icon: Users,
      path: '/panel/admin/patients',
    },
    {
      label: 'Staff',
      icon: UserCheck,
      path: '/panel/admin/staff',
    },
    {
      label: 'Medicines',
      icon: Pill,
      path: '/panel/admin/medicines',
    },
    {
      label: 'Appointments',
      icon: Calendar,
      path: '/panel/admin/appointments',
    },
    {
      label: 'Reports',
      icon: BarChart3,
      path: '/panel/admin/reports',
    },
    {
      label: 'Settings',
      icon: Settings,
      path: '/panel/admin/settings',
    },
  ];

  const reports = [
    { id: 'RPT001', name: 'Monthly Patient Report', type: 'Patient Statistics', frequency: 'Monthly', lastRun: '2025-01-31', status: 'Generated' },
    { id: 'RPT002', name: 'Revenue Analysis', type: 'Financial', frequency: 'Weekly', lastRun: '2025-02-03', status: 'Generated' },
    { id: 'RPT003', name: 'Doctor Performance', type: 'Clinical', frequency: 'Monthly', lastRun: '2025-01-31', status: 'Pending' },
    { id: 'RPT004', name: 'Medicine Inventory', type: 'Inventory', frequency: 'Daily', lastRun: '2025-02-04', status: 'Generated' },
    { id: 'RPT005', name: 'Appointment Summary', type: 'Operational', frequency: 'Weekly', lastRun: '2025-02-03', status: 'Generated' },
  ];

  return (
    <PanelLayout menuItems={menuItems} title="Admin Dashboard - Reports">
      <div className="admin-panel-content">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search reports..." 
            className="search-input"
          />
          <button className="view-toggle">Generate Report</button>
        </div>

        <div className="doctors-table-container">
          <table className="doctors-table">
            <thead>
              <tr>
                <th>Report ID</th>
                <th>Report Name</th>
                <th>Type</th>
                <th>Frequency</th>
                <th>Last Run</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id}>
                  <td>{report.id}</td>
                  <td>{report.name}</td>
                  <td>{report.type}</td>
                  <td>{report.frequency}</td>
                  <td>{report.lastRun}</td>
                  <td><span className={`status-badge ${report.status.toLowerCase()}`}>{report.status}</span></td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-btn view" title="View">👁️</button>
                      <button className="action-btn edit" title="Download">📥</button>
                      <button className="action-btn delete" title="Schedule">⏰</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <button>Prev</button>
            <button>1</button>
            <button className="active">2</button>
            <button>3</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    </PanelLayout>
  );
};

export default AdminReportsPage;


