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

const DoctorAppointmentsPage = () => {
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

  const appointments = [
    { id: 'APT001', date: '2025-02-05', time: '08:30', patient: 'Caroline James', reason: 'Post-op follow-up', status: 'Arrived' },
    { id: 'APT002', date: '2025-02-05', time: '09:15', patient: 'Marcus Vega', reason: 'New consult - CHF', status: 'Room 4' },
    { id: 'APT003', date: '2025-02-05', time: '10:00', patient: 'Telehealth', reason: 'Medication titration', status: 'Online' },
    { id: 'APT004', date: '2025-02-05', time: '11:00', patient: 'Sarah Miller', reason: 'Annual checkup', status: 'Scheduled' },
    { id: 'APT005', date: '2025-02-06', time: '09:00', patient: 'David Wilson', reason: 'Follow-up', status: 'Confirmed' },
  ];

  return (
    <PanelLayout menuItems={menuItems} title="Doctor Dashboard - Appointments">
      <div className="doctor-panel-content">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search appointments..." 
            className="search-input"
          />
        </div>

        <div className="appointments-table-container">
          <table className="appointments-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Patient</th>
                <th>Reason</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((apt) => (
                <tr key={apt.id}>
                  <td>{apt.date}</td>
                  <td>{apt.time}</td>
                  <td>{apt.patient}</td>
                  <td>{apt.reason}</td>
                  <td><span className={`status-badge ${apt.status.toLowerCase().replace(' ', '-')}`}>{apt.status}</span></td>
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

export default DoctorAppointmentsPage;


