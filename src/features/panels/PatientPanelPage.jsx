import { Routes, Route, Navigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Stethoscope,
  FileText,
  Settings,
  Pill
} from 'lucide-react';
import PanelLayout from './PanelLayout.jsx';
import PatientDoctorsPage from './patient/PatientDoctorsPage.jsx';
import PatientAppointmentsPage from './patient/PatientAppointmentsPage.jsx';
import PatientPrescriptionsPage from './patient/PatientPrescriptionsPage.jsx';
import PatientRecordsPage from './patient/PatientRecordsPage.jsx';
import './PatientPanelPage.css';

const PatientDashboardContent = () => {
  const menuItems = [
    {
      label: 'Dashboard',
      icon: LayoutDashboard,
      path: '/panel/patient',
      demoData: [
        { label: 'Next Appointment', value: 'Feb 05, 10:30 AM' },
        { label: 'Active Prescriptions', value: '3' },
        { label: 'Pending Tests', value: '2' },
      ],
    },
    {
      label: 'Doctors',
      icon: Stethoscope,
      path: '/panel/patient/doctors',
      demoData: [
        { label: 'Available', value: '12 doctors' },
        { label: 'Specializations', value: '8 types' },
        { label: 'Avg. Fee', value: '₹5,200' },
      ],
    },
    {
      label: 'Appointments',
      icon: Calendar,
      path: '/panel/patient/appointments',
      demoData: [
        { label: 'Upcoming', value: '3 appointments' },
        { label: 'Today', value: '1 scheduled' },
        { label: 'History', value: '15 completed' },
      ],
    },
    {
      label: 'Prescriptions',
      icon: Pill,
      path: '/panel/patient/prescriptions',
      demoData: [
        { label: 'Active', value: '3 medications' },
        { label: 'Refills Due', value: '1 pending' },
        { label: 'Total', value: '8 prescriptions' },
      ],
    },
    {
      label: 'Medical Records',
      icon: FileText,
      path: '/panel/patient/records',
      demoData: [
        { label: 'Reports', value: '12 files' },
        { label: 'Lab Results', value: '5 pending' },
        { label: 'Last Update', value: '2 days ago' },
      ],
    },
    {
      label: 'Settings',
      icon: Settings,
      path: '/panel/patient/settings',
    },
  ];

  // Demo doctors data with specializations and fees
  const doctors = [
    { 
      id: 1, 
      name: 'Dr. Damodar Sant', 
      specialization: 'Cardiologist', 
      experience: '10 years',
      fee: '₹5,200',
      mobile: '09370146299',
      image: 'V'
    },
    { 
      id: 2, 
      name: 'Dr. Sarah Johnson', 
      specialization: 'Pediatrician', 
      experience: '8 years',
      fee: '₹4,500',
      mobile: '09876543210',
      image: 'S'
    },
    { 
      id: 3, 
      name: 'Dr. Michael Chen', 
      specialization: 'Neurologist', 
      experience: '12 years',
      fee: '₹6,000',
      mobile: '09123456789',
      image: 'M'
    },
    { 
      id: 4, 
      name: 'Dr. Emily Rodriguez', 
      specialization: 'Dermatologist', 
      experience: '6 years',
      fee: '₹4,000',
      mobile: '09765432109',
      image: 'E'
    },
    { 
      id: 5, 
      name: 'Dr. James Wilson', 
      specialization: 'Orthopedic Surgeon', 
      experience: '15 years',
      fee: '₹7,500',
      mobile: '09654321098',
      image: 'J'
    },
    { 
      id: 6, 
      name: 'Dr. Priya Sharma', 
      specialization: 'Gynecologist', 
      experience: '9 years',
      fee: '₹5,000',
      mobile: '09543210987',
      image: 'P'
    },
  ];

  const appointments = [
    {
      id: 1,
      date: 'Feb 05, 2025',
      time: '10:30 AM',
      doctor: 'Dr. Damodar Sant',
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
  ];

  const prescriptions = [
    {
      id: 1,
      medication: 'Metoprolol',
      dosage: '50mg',
      frequency: 'Twice daily',
      doctor: 'Dr. Damodar Sant',
      startDate: 'Jan 15, 2025',
      endDate: 'Feb 15, 2025',
      refills: '2 remaining',
      status: 'Active',
    },
    {
      id: 2,
      medication: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Once daily',
      doctor: 'Dr. Damodar Sant',
      startDate: 'Jan 20, 2025',
      endDate: 'Feb 20, 2025',
      refills: '1 remaining',
      status: 'Active',
    },
    {
      id: 3,
      medication: 'Atorvastatin',
      dosage: '20mg',
      frequency: 'Once daily',
      doctor: 'Dr. Michael Chen',
      startDate: 'Jan 25, 2025',
      endDate: 'Feb 25, 2025',
      refills: '0 remaining',
      status: 'Refill Needed',
    },
  ];

  return (
    <PanelLayout menuItems={menuItems} title="Patient Dashboard">
      <div className="patient-panel-content">
        <div className="page-header">
          <h2>My Dashboard</h2>
          <p>Manage your appointments, prescriptions, and medical records</p>
        </div>

        {/* Appointments Section */}
        <div className="section-card">
          <div className="section-header">
            <h3>Upcoming Appointments</h3>
            <button className="view-all-btn">View All</button>
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

        {/* Prescriptions Section */}
        <div className="section-card">
          <div className="section-header">
            <h3>Active Prescriptions</h3>
            <button className="view-all-btn">View All</button>
          </div>
          <div className="prescriptions-list">
            {prescriptions.map((prescription) => (
              <div key={prescription.id} className="prescription-card">
                <div className="prescription-header">
                  <h4>{prescription.medication}</h4>
                  <span className={`status-badge ${prescription.status.toLowerCase().replace(' ', '-')}`}>
                    {prescription.status}
                  </span>
                </div>
                <div className="prescription-details">
                  <div className="detail-row">
                    <span className="detail-label">Dosage:</span>
                    <span className="detail-value">{prescription.dosage} - {prescription.frequency}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Prescribed by:</span>
                    <span className="detail-value">{prescription.doctor}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">{prescription.startDate} to {prescription.endDate}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Refills:</span>
                    <span className="detail-value">{prescription.refills}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Doctors Section */}
        <div className="section-card">
          <div className="section-header">
            <h3>Available Doctors</h3>
            <button className="view-all-btn">View All</button>
          </div>
          <div className="doctors-grid">
            {doctors.slice(0, 3).map((doctor) => (
              <div key={doctor.id} className="doctor-card">
                <div className="doctor-card-header">
                  <div className="doctor-avatar-large">
                    {doctor.image}
                  </div>
                  <div className="doctor-info">
                    <h3>{doctor.name}</h3>
                    <p className="specialization">{doctor.specialization}</p>
                  </div>
                </div>
                
                <div className="doctor-details">
                  <div className="detail-item">
                    <span className="detail-label">Experience:</span>
                    <span className="detail-value">{doctor.experience}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Consultation Fee:</span>
                    <span className="detail-value fee">{doctor.fee}</span>
                  </div>
                </div>

                <div className="doctor-actions">
                  <button className="btn-primary">Book Appointment</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PanelLayout>
  );
};

const PatientPanelPage = () => {
  return (
    <Routes>
      <Route index element={<PatientDashboardContent />} />
      <Route path="doctors" element={<PatientDoctorsPage />} />
      <Route path="appointments" element={<PatientAppointmentsPage />} />
      <Route path="prescriptions" element={<PatientPrescriptionsPage />} />
      <Route path="records" element={<PatientRecordsPage />} />
      <Route path="*" element={<Navigate to="/panel/patient" replace />} />
    </Routes>
  );
};

export default PatientPanelPage;
