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

const DoctorPrescriptionsPage = () => {
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

  const prescriptions = [
    { id: 'PRES001', date: '2025-02-04', patient: 'John Doe', medication: 'Metoprolol 50mg', dosage: 'Twice daily', status: 'Active' },
    { id: 'PRES002', date: '2025-02-03', patient: 'Jane Smith', medication: 'Metformin 500mg', dosage: 'Once daily', status: 'Active' },
    { id: 'PRES003', date: '2025-02-02', patient: 'Robert Johnson', medication: 'Lisinopril 10mg', dosage: 'Once daily', status: 'Pending Review' },
    { id: 'PRES004', date: '2025-02-01', patient: 'Emily Davis', medication: 'Albuterol Inhaler', dosage: 'As needed', status: 'Active' },
    { id: 'PRES005', date: '2025-01-30', patient: 'Michael Brown', medication: 'Ibuprofen 400mg', dosage: 'Three times daily', status: 'Completed' },
  ];

  return (
    <PanelLayout menuItems={menuItems} title="Doctor Dashboard - Prescriptions">
      <div className="doctor-panel-content">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search prescriptions..." 
            className="search-input"
          />
          <button className="view-toggle">New Prescription</button>
        </div>

        <div className="appointments-table-container">
          <table className="appointments-table">
            <thead>
              <tr>
                <th>Prescription ID</th>
                <th>Date</th>
                <th>Patient</th>
                <th>Medication</th>
                <th>Dosage</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {prescriptions.map((pres) => (
                <tr key={pres.id}>
                  <td>{pres.id}</td>
                  <td>{pres.date}</td>
                  <td>{pres.patient}</td>
                  <td>{pres.medication}</td>
                  <td>{pres.dosage}</td>
                  <td><span className={`status-badge ${pres.status.toLowerCase().replace(' ', '-')}`}>{pres.status}</span></td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-btn view" title="View">👁️</button>
                      <button className="action-btn edit" title="Edit">✏️</button>
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

export default DoctorPrescriptionsPage;


