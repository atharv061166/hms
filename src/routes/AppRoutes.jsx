import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';
import ProtectedRoute from '../components/ProtectedRoute.jsx';
import LandingPage from '../features/landing/LandingPage.jsx';
import LoginPage from '../features/auth/LoginPage.jsx';
import DashboardPage from '../features/dashboard/DashboardPage.jsx';
import PatientManagementPage from '../features/patient/PatientManagementPage.jsx';
import AppointmentSystemPage from '../features/appointments/AppointmentSystemPage.jsx';
import BillingPaymentsPage from '../features/billing/BillingPaymentsPage.jsx';
import PharmacyManagementPage from '../features/pharmacy/PharmacyManagementPage.jsx';
import LabIntegrationPage from '../features/lab/LabIntegrationPage.jsx';
import AnalyticsReportsPage from '../features/analytics/AnalyticsReportsPage.jsx';
import AdminPanelPage from '../features/panels/AdminPanelPage.jsx';
import DoctorPanelPage from '../features/panels/DoctorPanelPage.jsx';
import PatientPanelPage from '../features/panels/PatientPanelPage.jsx';
import StaffPanelPage from '../features/panels/StaffPanelPage.jsx';

const AppRoutes = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '18px',
        color: '#6b7280'
      }}>
        Loading...
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route 
        path="/login" 
        element={
          isAuthenticated ? <Navigate to="/dashboard" replace /> : <LoginPage />
        } 
      />
      <Route 
        path="/dashboard" 
        element={
          isAuthenticated ? <DashboardPage /> : <Navigate to="/login" replace />
        } 
      />
      <Route 
        path="/panel/admin/*" 
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminPanelPage />
          </ProtectedRoute>
        }
      />
      <Route 
        path="/panel/doctor/*" 
        element={
          <ProtectedRoute allowedRoles={['admin', 'doctor']}>
            <DoctorPanelPage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/panel/patient/*" 
        element={
          <ProtectedRoute allowedRoles={['admin', 'doctor', 'patient']}>
            <PatientPanelPage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/panel/staff/*" 
        element={
          <ProtectedRoute allowedRoles={['staff']}>
            <StaffPanelPage />
          </ProtectedRoute>
        } 
      />
      <Route path="/patient-management" element={<PatientManagementPage />} />
      <Route path="/appointment-system" element={<AppointmentSystemPage />} />
      <Route path="/billing-payments" element={<BillingPaymentsPage />} />
      <Route path="/pharmacy-management" element={<PharmacyManagementPage />} />
      <Route path="/lab-integration" element={<LabIntegrationPage />} />
      <Route path="/analytics-reports" element={<AnalyticsReportsPage />} />
    </Routes>
  );
};

export default AppRoutes;