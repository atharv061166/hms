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

const PatientDoctorsPage = () => {
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

  const doctors = [
    { 
      id: 1, 
      name: 'Dr. Vinayak Arote', 
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

  return (
    <PanelLayout menuItems={menuItems} title="Patient Dashboard - Doctors">
      <div className="patient-panel-content">
        <div className="page-header">
          <h2>Available Doctors</h2>
          <p>Browse doctors by specialization and book appointments</p>
        </div>

        <div className="doctors-grid">
          {doctors.map((doctor) => (
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
                <div className="detail-item">
                  <span className="detail-label">Contact:</span>
                  <span className="detail-value">{doctor.mobile}</span>
                </div>
              </div>

              <div className="doctor-actions">
                <button className="btn-primary">Book Appointment</button>
                <button className="btn-secondary">View Profile</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PanelLayout>
  );
};

export default PatientDoctorsPage;


