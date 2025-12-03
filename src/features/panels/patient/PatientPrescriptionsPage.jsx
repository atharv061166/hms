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

const PatientPrescriptionsPage = () => {
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

  const prescriptions = [
    {
      id: 1,
      medication: 'Metoprolol',
      dosage: '50mg',
      frequency: 'Twice daily',
      doctor: 'Dr. Vinayak Arote',
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
      doctor: 'Dr. Vinayak Arote',
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
    {
      id: 4,
      medication: 'Aspirin',
      dosage: '100mg',
      frequency: 'Once daily',
      doctor: 'Dr. DE',
      startDate: 'Jan 10, 2025',
      endDate: 'Ongoing',
      refills: '3 remaining',
      status: 'Active',
    },
  ];

  return (
    <PanelLayout menuItems={menuItems} title="Patient Dashboard - Prescriptions">
      <div className="patient-panel-content">
        <div className="page-header">
          <h2>My Prescriptions</h2>
          <p>View your active medications and prescription history</p>
        </div>

        <div className="section-card">
          <div className="section-header">
            <h3>Active Prescriptions</h3>
            <button className="view-all-btn">Request Refill</button>
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
      </div>
    </PanelLayout>
  );
};

export default PatientPrescriptionsPage;


