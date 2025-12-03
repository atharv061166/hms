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

const AdminMedicinesPage = () => {
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

  const medicines = [
    { id: 'MED001', name: 'Paracetamol 500mg', category: 'Pain Relief', stock: 1250, unit: 'Tablets', expiry: '2026-12-31', status: 'In Stock' },
    { id: 'MED002', name: 'Amoxicillin 250mg', category: 'Antibiotic', stock: 450, unit: 'Capsules', expiry: '2025-08-15', status: 'In Stock' },
    { id: 'MED003', name: 'Insulin Glargine', category: 'Diabetes', stock: 25, unit: 'Vials', expiry: '2025-06-20', status: 'Low Stock' },
    { id: 'MED004', name: 'Aspirin 100mg', category: 'Cardiac', stock: 890, unit: 'Tablets', expiry: '2026-03-10', status: 'In Stock' },
    { id: 'MED005', name: 'Metformin 500mg', category: 'Diabetes', stock: 15, unit: 'Tablets', expiry: '2025-05-05', status: 'Low Stock' },
  ];

  return (
    <PanelLayout menuItems={menuItems} title="Admin Dashboard - Medicines">
      <div className="admin-panel-content">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search medicine by name..." 
            className="search-input"
          />
          <button className="view-toggle">Add Medicine</button>
        </div>

        <div className="doctors-table-container">
          <table className="doctors-table">
            <thead>
              <tr>
                <th>Medicine ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Unit</th>
                <th>Expiry Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {medicines.map((medicine) => (
                <tr key={medicine.id}>
                  <td>{medicine.id}</td>
                  <td>{medicine.name}</td>
                  <td>{medicine.category}</td>
                  <td>{medicine.stock}</td>
                  <td>{medicine.unit}</td>
                  <td>{medicine.expiry}</td>
                  <td><span className={`status-badge ${medicine.status.toLowerCase().replace(' ', '-')}`}>{medicine.status}</span></td>
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
            <button className="active">2</button>
            <button>3</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    </PanelLayout>
  );
};

export default AdminMedicinesPage;


