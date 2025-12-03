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

const AdminPatientsPage = () => {
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

  const patients = [
    { id: 'MRN001', name: 'John Doe', age: 45, gender: 'Male', department: 'Cardiology', status: 'Active', lastVisit: '2025-02-01' },
    { id: 'MRN002', name: 'Jane Smith', age: 32, gender: 'Female', department: 'Pediatrics', status: 'Active', lastVisit: '2025-02-02' },
    { id: 'MRN003', name: 'Robert Johnson', age: 58, gender: 'Male', department: 'Neurology', status: 'Inactive', lastVisit: '2025-01-15' },
    { id: 'MRN004', name: 'Emily Davis', age: 28, gender: 'Female', department: 'Dermatology', status: 'Active', lastVisit: '2025-02-03' },
    { id: 'MRN005', name: 'Michael Brown', age: 50, gender: 'Male', department: 'Orthopedics', status: 'Active', lastVisit: '2025-01-30' },
  ];

  return (
    <PanelLayout menuItems={menuItems} title="Admin Dashboard - Patients">
      <div className="admin-panel-content">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search patient by name or MRN..." 
            className="search-input"
          />
          <button className="view-toggle">Add Patient</button>
        </div>

        <div className="doctors-table-container">
          <table className="doctors-table">
            <thead>
              <tr>
                <th>MRN</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Department</th>
                <th>Status</th>
                <th>Last Visit</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id}>
                  <td>{patient.id}</td>
                  <td>{patient.name}</td>
                  <td>{patient.age}</td>
                  <td>{patient.gender}</td>
                  <td>{patient.department}</td>
                  <td><span className={`status-badge ${patient.status.toLowerCase()}`}>{patient.status}</span></td>
                  <td>{patient.lastVisit}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-btn edit" title="Edit">✏️</button>
                      <button className="action-btn view" title="View">👁️</button>
                      <button className="action-btn delete" title="Delete">🗑️</button>
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

export default AdminPatientsPage;


