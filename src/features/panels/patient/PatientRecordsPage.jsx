import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Stethoscope,
  FileText,
  Settings,
  Pill
} from 'lucide-react';
import PanelLayout from '../PanelLayout.jsx';
import '../PatientPanelPage.css';

const PatientRecordsPage = () => {
  const menuItems = [
    {
      label: 'Dashboard',
      icon: LayoutDashboard,
      path: '/panel/patient',
    },
    {
      label: 'Doctors',
      icon: Stethoscope,
      path: '/panel/patient/doctors',
    },
    {
      label: 'Appointments',
      icon: Calendar,
      path: '/panel/patient/appointments',
    },
    {
      label: 'Prescriptions',
      icon: Pill,
      path: '/panel/patient/prescriptions',
    },
    {
      label: 'Medical Records',
      icon: FileText,
      path: '/panel/patient/records',
    },
    {
      label: 'Settings',
      icon: Settings,
      path: '/panel/patient/settings',
    },
  ];

  const records = [
    {
      id: 'REC001',
      type: 'Lab Report',
      name: 'Complete Blood Count',
      date: '2025-01-28',
      doctor: 'Dr. Vinayak Arote',
      status: 'Available',
    },
    {
      id: 'REC002',
      type: 'Lab Report',
      name: 'Lipid Profile',
      date: '2025-01-28',
      doctor: 'Dr. Vinayak Arote',
      status: 'Available',
    },
    {
      id: 'REC003',
      type: 'Imaging',
      name: 'Chest X-Ray',
      date: '2025-01-20',
      doctor: 'Dr. Sarah Johnson',
      status: 'Available',
    },
    {
      id: 'REC004',
      type: 'Lab Report',
      name: 'Blood Glucose Test',
      date: '2025-01-15',
      doctor: 'Dr. Michael Chen',
      status: 'Pending',
    },
    {
      id: 'REC005',
      type: 'Consultation Note',
      name: 'Cardiology Consultation',
      date: '2025-01-10',
      doctor: 'Dr. Vinayak Arote',
      status: 'Available',
    },
  ];

  return (
    <PanelLayout menuItems={menuItems} title="Patient Dashboard - Medical Records">
      <div className="patient-panel-content">
        <div className="page-header">
          <h2>My Medical Records</h2>
          <p>Access your lab reports, imaging results, and consultation notes</p>
        </div>

        <div className="section-card">
          <div className="section-header">
            <h3>Medical Records</h3>
            <button className="view-all-btn">Download All</button>
          </div>
          <div className="appointments-list">
            {records.map((record) => (
              <div key={record.id} className="appointment-card">
                <div className="appointment-date">
                  <span className="date">{record.date}</span>
                  <span className="time">{record.type}</span>
                </div>
                <div className="appointment-details">
                  <h4>{record.name}</h4>
                  <p className="specialization">{record.doctor}</p>
                  <p className="type">Record ID: {record.id}</p>
                </div>
                <div className="appointment-status">
                  <span className={`status-badge ${record.status.toLowerCase()}`}>
                    {record.status}
                  </span>
                  <button className="btn-primary" style={{ marginTop: '0.5rem' }}>View</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PanelLayout>
  );
};

export default PatientRecordsPage;


