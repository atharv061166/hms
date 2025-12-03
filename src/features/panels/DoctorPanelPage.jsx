import { Routes, Route, Navigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Stethoscope, 
  ClipboardSignature,
  Settings
} from 'lucide-react';
import PanelLayout from './PanelLayout.jsx';
import DoctorPatientsPage from './doctor/DoctorPatientsPage.jsx';
import DoctorAppointmentsPage from './doctor/DoctorAppointmentsPage.jsx';
import DoctorPrescriptionsPage from './doctor/DoctorPrescriptionsPage.jsx';
import './DoctorPanelPage.css';

const DoctorDashboardContent = () => {
  const menuItems = [
    {
      label: 'Dashboard',
      icon: LayoutDashboard,
      path: '/panel/doctor',
      demoData: [
        { label: "Today's Patients", value: '18' },
        { label: 'Critical Alerts', value: '3' },
        { label: 'Pending Orders', value: '7' },
      ],
    },
    {
      label: 'Patients',
      icon: Users,
      path: '/panel/doctor/patients',
      demoData: [
        { label: 'Total Patients', value: '245' },
        { label: 'Active Cases', value: '18' },
        { label: 'Follow-ups', value: '12' },
      ],
    },
    {
      label: 'Appointments',
      icon: Calendar,
      path: '/panel/doctor/appointments',
      demoData: [
        { label: 'Today', value: '8 appointments' },
        { label: 'Upcoming', value: '24 this week' },
        { label: 'Pending', value: '3' },
      ],
    },
    {
      label: 'Prescriptions',
      icon: ClipboardSignature,
      path: '/panel/doctor/prescriptions',
      demoData: [
        { label: 'Issued Today', value: '12' },
        { label: 'Pending Review', value: '5' },
        { label: 'This Month', value: '156' },
      ],
    },
    {
      label: 'Settings',
      icon: Settings,
      path: '/panel/doctor/settings',
    },
  ];

  const stats = [
    { label: "Today's Patients", value: '18', trend: '6 follow-ups' },
    { label: 'Critical Alerts', value: '3', trend: 'All acknowledged' },
    { label: 'Avg. Rounds Time', value: '11m', trend: '-1m vs last week' },
    { label: 'Pending Orders', value: '7', trend: '4 labs • 3 meds' },
  ];

  return (
    <PanelLayout menuItems={menuItems} title="Doctor Dashboard">
      <div className="doctor-panel-content">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <span className="stat-label">{stat.label}</span>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-trend">{stat.trend}</span>
            </div>
          ))}
        </div>

        <div className="appointments-section">
          <h2>Today's Appointments</h2>
          <div className="appointments-table-container">
            <table className="appointments-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Patient</th>
                  <th>Reason</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { time: '08:30', patient: 'Caroline James', reason: 'Post-op follow-up', status: 'Arrived' },
                  { time: '09:15', patient: 'Marcus Vega', reason: 'New consult - CHF', status: 'Room 4' },
                  { time: '10:00', patient: 'Telehealth', reason: 'Medication titration', status: 'Online' },
                  { time: '11:00', patient: 'Sarah Miller', reason: 'Annual checkup', status: 'Scheduled' },
                ].map((apt, idx) => (
                  <tr key={idx}>
                    <td>{apt.time}</td>
                    <td>{apt.patient}</td>
                    <td>{apt.reason}</td>
                    <td><span className={`status-badge ${apt.status.toLowerCase().replace(' ', '-')}`}>{apt.status}</span></td>
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

const DoctorPanelPage = () => {
  return (
    <Routes>
      <Route index element={<DoctorDashboardContent />} />
      <Route path="patients" element={<DoctorPatientsPage />} />
      <Route path="appointments" element={<DoctorAppointmentsPage />} />
      <Route path="prescriptions" element={<DoctorPrescriptionsPage />} />
      <Route path="*" element={<Navigate to="/panel/doctor" replace />} />
    </Routes>
  );
};

export default DoctorPanelPage;
