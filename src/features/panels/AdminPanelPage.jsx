import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
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
  Settings,
  Shield,
  Briefcase,
  Activity,
  AlertTriangle
} from 'lucide-react';
import PanelLayout from './PanelLayout.jsx';
import AdminDoctorsPage from './admin/AdminDoctorsPage.jsx';
import AdminPatientsPage from './admin/AdminPatientsPage.jsx';
import AdminMedicinesPage from './admin/AdminMedicinesPage.jsx';
import AdminAppointmentsPage from './admin/AdminAppointmentsPage.jsx';
import AdminReportsPage from './admin/AdminReportsPage.jsx';
import './AdminPanelPage.css';

const AdminDashboardContent = () => {
  const menuItems = [
    {
      label: 'Dashboard',
      icon: LayoutDashboard,
      path: '/panel/admin',
      demoData: [
        { label: 'Active Staff', value: '135' },
        { label: 'Open Tickets', value: '12' },
        { label: 'Utilization', value: '87%' },
      ],
    },
    {
      label: 'Doctors',
      icon: Stethoscope,
      path: '/panel/admin/doctors',
      demoData: [
        { label: 'Total Doctors', value: '24' },
        { label: 'Available', value: '18' },
        { label: 'On Leave', value: '6' },
      ],
      subItems: [
        { 
          label: 'Doctors', 
          icon: Users, 
          path: '/panel/admin/doctors',
          demoData: [
            { label: 'Active', value: '18 doctors' },
            { label: 'Specializations', value: '12 types' },
          ],
        },
        { 
          label: 'Add Doctor', 
          icon: UserCheck, 
          path: '/panel/admin/doctors/add',
        },
      ],
    },
    {
      label: 'Patients',
      icon: Users,
      path: '/panel/admin/patients',
      demoData: [
        { label: 'Total Patients', value: '1,245' },
        { label: 'Active', value: '892' },
        { label: 'New Today', value: '12' },
      ],
    },
    {
      label: 'Staff',
      icon: UserCheck,
      path: '/panel/admin/staff',
      demoData: [
        { label: 'Total Staff', value: '245' },
        { label: 'On Duty', value: '187' },
        { label: 'On Leave', value: '8' },
      ],
    },
    {
      label: 'Medicines',
      icon: Pill,
      path: '/panel/admin/medicines',
      demoData: [
        { label: 'Total Stock', value: '1,234 items' },
        { label: 'Low Stock', value: '23 items' },
        { label: 'Expiring Soon', value: '5 items' },
      ],
    },
    {
      label: 'Appointments',
      icon: Calendar,
      path: '/panel/admin/appointments',
      demoData: [
        { label: 'Today', value: '45 appointments' },
        { label: 'Pending', value: '12' },
        { label: 'Completed', value: '33' },
      ],
    },
    {
      label: 'Reports',
      icon: BarChart3,
      path: '/panel/admin/reports',
      demoData: [
        { label: 'Monthly Reports', value: '8 generated' },
        { label: 'Pending', value: '2' },
      ],
    },
    {
      label: 'Settings',
      icon: Settings,
      path: '/panel/admin/settings',
    },
  ];

  const stats = [
    { label: 'Active Staff', value: '135', trend: '+8 this week' },
    { label: 'Open Tickets', value: '12', trend: '-4 resolved' },
    { label: 'Utilization', value: '87%', trend: '+3% vs last week' },
    { label: 'Avg. Wait Time', value: '12m', trend: '-2m improvement' },
  ];

  return (
    <PanelLayout menuItems={menuItems} title="Admin Dashboard">
      <div className="admin-panel-content">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search doctor by name..." 
            className="search-input"
          />
          <button className="view-toggle">Card View</button>
        </div>

        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <span className="stat-label">{stat.label}</span>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-trend">{stat.trend}</span>
            </div>
          ))}
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
              {[
                { name: 'Dr. Damodar Sant ', specialization: 'Cardiologist', experience: '10 yrs', fee: '₹5200', mobile: '09370146299' },
                { name: 'Dr. Sarah Johnson', specialization: 'Pediatrician', experience: '8 yrs', fee: '₹4500', mobile: '09876543210' },
                { name: 'Dr. Michael Chen', specialization: 'Neurologist', experience: '12 yrs', fee: '₹6000', mobile: '09123456789' },
                { name: 'Dr. Emily Rodriguez', specialization: 'Dermatologist', experience: '6 yrs', fee: '₹4000', mobile: '09765432109' },
              ].map((doctor, idx) => (
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

const AdminPanelPage = () => {
  return (
    <Routes>
      <Route index element={<AdminDashboardContent />} />
      <Route path="doctors" element={<AdminDoctorsPage />} />
      <Route path="patients" element={<AdminPatientsPage />} />
      <Route path="medicines" element={<AdminMedicinesPage />} />
      <Route path="appointments" element={<AdminAppointmentsPage />} />
      <Route path="reports" element={<AdminReportsPage />} />
      <Route path="*" element={<Navigate to="/panel/admin" replace />} />
    </Routes>
  );
};

export default AdminPanelPage;
