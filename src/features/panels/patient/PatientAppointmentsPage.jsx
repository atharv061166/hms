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

const PatientAppointmentsPage = () => {
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

  const appointments = [
    {
      id: 1,
      date: 'Feb 05, 2025',
      time: '10:30 AM',
      doctor: 'Dr. Vinakay Arote',
      specialization: 'Cardiologist',
      type: 'Follow-up',
      status: 'Confirmed',
    },
    {
      id: 2,
      date: 'Feb 07, 2025',
      time: '02:00 PM',
      doctor: 'Dr. Sarah Johnson',
      specialization: 'Pediatrician',
      type: 'Consultation',
      status: 'Scheduled',
    },
    {
      id: 3,
      date: 'Feb 10, 2025',
      time: '11:00 AM',
      doctor: 'Dr. Michael Chen',
      specialization: 'Neurologist',
      type: 'Review',
      status: 'Pending',
    },
    {
      id: 4,
      date: 'Feb 12, 2025',
      time: '03:30 PM',
      doctor: 'Dr. Emily Rodriguez',
      specialization: 'Dermatologist',
      type: 'Consultation',
      status: 'Scheduled',
    },
  ];

  return (
    <PanelLayout menuItems={menuItems} title="Patient Dashboard - Appointments">
      <div className="patient-panel-content">
        <div className="page-header">
          <h2>My Appointments</h2>
          <p>View and manage your upcoming appointments</p>
        </div>

        <div className="section-card">
          <div className="section-header">
            <h3>Upcoming Appointments</h3>
            <button className="view-all-btn">Book New</button>
          </div>
          <div className="appointments-list">
            {appointments.map((apt) => (
              <div key={apt.id} className="appointment-card">
                <div className="appointment-date">
                  <span className="date">{apt.date}</span>
                  <span className="time">{apt.time}</span>
                </div>
                <div className="appointment-details">
                  <h4>{apt.doctor}</h4>
                  <p className="specialization">{apt.specialization}</p>
                  <p className="type">{apt.type}</p>
                </div>
                <div className="appointment-status">
                  <span className={`status-badge ${apt.status.toLowerCase()}`}>
                    {apt.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PanelLayout>
  );
};

export default PatientAppointmentsPage;


