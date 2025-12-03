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

const AdminDoctorsPage = () => {
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

  const doctors = [
    { name: 'Dr. Sarah Johnson', specialization: 'Pediatrician', experience: '8 yrs', fee: '₹4,500', mobile: '09876543210' },
    { name: 'Dr. Michael Chen', specialization: 'Neurologist', experience: '12 yrs', fee: '₹6,000', mobile: '09123456789' },
    { name: 'Dr. Emily Rodriguez', specialization: 'Dermatologist', experience: '6 yrs', fee: '₹4,000', mobile: '09765432109' },
    { name: 'Dr. James Wilson', specialization: 'Orthopedic Surgeon', experience: '15 yrs', fee: '₹7,500', mobile: '09654321098' },
    { name: 'Dr. Priya Sharma', specialization: 'Gynecologist', experience: '9 yrs', fee: '₹5,000', mobile: '09543210987' },
  ];

  return (
    <PanelLayout menuItems={menuItems} title="Admin Dashboard - Doctors">
      <div className="admin-panel-content">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search doctor by name..." 
            className="search-input"
          />
          <button className="view-toggle">Card View</button>
        </div>

        <div className="doctors-table-container">
          <table className="doctors-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Specialization</th>
                <th>Experience</th>
                <th>Fee</th>
                <th>Mobile</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor, idx) => (
                <tr key={idx}>
                  <td>
                    <div className="doctor-avatar">
                      {doctor.name.charAt(0)}
                    </div>
                  </td>
                  <td>{doctor.name}</td>
                  <td>{doctor.specialization}</td>
                  <td>{doctor.experience}</td>
                  <td>{doctor.fee}</td>
                  <td>{doctor.mobile}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-btn edit" title="Edit">✏️</button>
                      <button className="action-btn view" title="View">👁️</button>
                      <button className="action-btn delete" title="Delete">🗑️</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <button>Prev</button>
            <button>1</button>
            <button>2</button>
            <button className="active">3</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    </PanelLayout>
  );
};

export default AdminDoctorsPage;

