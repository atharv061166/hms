import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Stethoscope, 
  ClipboardSignature,
  Settings
} from 'lucide-react';
import PanelLayout from '../PanelLayout.jsx';
import '../DoctorPanelPage.css';

const DoctorPatientsPage = () => {
  const menuItems = [
    {
      label: 'Dashboard',
      icon: LayoutDashboard,
      path: '/panel/doctor',
    },
    {
      label: 'Patients',
      icon: Users,
      path: '/panel/doctor/patients',
    },
    {
      label: 'Appointments',
      icon: Calendar,
      path: '/panel/doctor/appointments',
    },
    {
      label: 'Prescriptions',
      icon: ClipboardSignature,
      path: '/panel/doctor/prescriptions',
    },
    {
      label: 'Settings',
      icon: Settings,
      path: '/panel/doctor/settings',
    },
  ];

  const patients = [
    { id: 'MRN001', name: 'John Doe', age: 45, condition: 'Hypertension', lastVisit: '2025-02-01', status: 'Active' },
    { id: 'MRN002', name: 'Jane Smith', age: 32, condition: 'Diabetes Type 2', lastVisit: '2025-02-02', status: 'Active' },
    { id: 'MRN003', name: 'Robert Johnson', age: 58, condition: 'CHF', lastVisit: '2025-01-15', status: 'Follow-up' },
    { id: 'MRN004', name: 'Emily Davis', age: 28, condition: 'Asthma', lastVisit: '2025-02-03', status: 'Active' },
    { id: 'MRN005', name: 'Michael Brown', age: 50, condition: 'Arthritis', lastVisit: '2025-01-30', status: 'Active' },
  ];

  return (
    <PanelLayout menuItems={menuItems} title="Doctor Dashboard - Patients">
      <div className="doctor-panel-content">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search patient by name or MRN..." 
            className="search-input"
          />
        </div>

        <div className="appointments-table-container">
          <table className="appointments-table">
            <thead>
              <tr>
                <th>MRN</th>
                <th>Name</th>
                <th>Age</th>
                <th>Condition</th>
                <th>Last Visit</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id}>
                  <td>{patient.id}</td>
                  <td>{patient.name}</td>
                  <td>{patient.age}</td>
                  <td>{patient.condition}</td>
                  <td>{patient.lastVisit}</td>
                  <td><span className={`status-badge ${patient.status.toLowerCase().replace(' ', '-')}`}>{patient.status}</span></td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-btn view" title="View">👁️</button>
                      <button className="action-btn edit" title="Prescribe">💊</button>
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

export default DoctorPatientsPage;


