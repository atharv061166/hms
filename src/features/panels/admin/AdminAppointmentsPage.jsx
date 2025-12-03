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

const AdminAppointmentsPage = () => {
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

  const appointments = [
    { id: 'APT001', date: '2025-02-05', time: '10:30 AM', patient: 'John Doe', doctor: 'Dr. ', department: 'Cardiology', status: 'Confirmed' },
    { id: 'APT002', date: '2025-02-05', time: '02:00 PM', patient: 'Jane Smith', doctor: 'Dr. Sarah Johnson', department: 'Pediatrics', status: 'Scheduled' },
    { id: 'APT003', date: '2025-02-06', time: '09:00 AM', patient: 'Robert Johnson', doctor: 'Dr. Michael Chen', department: 'Neurology', status: 'Pending' },
    { id: 'APT004', date: '2025-02-06', time: '11:30 AM', patient: 'Emily Davis', doctor: 'Dr. Emily Rodriguez', department: 'Dermatology', status: 'Confirmed' },
    { id: 'APT005', date: '2025-02-07', time: '03:00 PM', patient: 'Michael Brown', doctor: 'Dr. James Wilson', department: 'Orthopedics', status: 'Scheduled' },
  ];

  return (
    <PanelLayout menuItems={menuItems} title="Admin Dashboard - Appointments">
      <div className="admin-panel-content">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search appointment by patient or doctor..." 
            className="search-input"
          />
          <button className="view-toggle">New Appointment</button>
        </div>

        <div className="doctors-table-container">
          <table className="doctors-table">
            <thead>
              <tr>
                <th>Appointment ID</th>
                <th>Date</th>
                <th>Time</th>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Department</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((apt) => (
                <tr key={apt.id}>
                  <td>{apt.id}</td>
                  <td>{apt.date}</td>
                  <td>{apt.time}</td>
                  <td>{apt.patient}</td>
                  <td>{apt.doctor}</td>
                  <td>{apt.department}</td>
                  <td><span className={`status-badge ${apt.status.toLowerCase()}`}>{apt.status}</span></td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-btn edit" title="Edit">✏️</button>
                      <button className="action-btn view" title="View">👁️</button>
                      <button className="action-btn delete" title="Cancel">🗑️</button>
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

export default AdminAppointmentsPage;


