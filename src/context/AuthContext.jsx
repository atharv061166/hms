import { useState, useEffect } from 'react';
import { storage, TOKEN_KEY, USER_KEY } from '../services/storage.js';
import { AuthContext } from './authContext.js';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedToken = storage.get(TOKEN_KEY);
    const savedUser = storage.get(USER_KEY);

    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(savedUser);
    }

    setLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      if (credentials.email === 'admin@hospital.com' && credentials.password === 'admin123') {
        const fakeUser = {
          id: 1,
          email: 'admin@hospital.com',
          name: 'Admin User',
          role: 'admin',
          department: 'Administration'
        };
        const fakeToken = 'fake-jwt-token-' + Date.now();

        setUser(fakeUser);
        setToken(fakeToken);
        storage.set(TOKEN_KEY, fakeToken);
        storage.set(USER_KEY, fakeUser);

        return { success: true };
      } else if (credentials.email === 'doctor@hospital.com' && credentials.password === 'doctor123') {
        const fakeUser = {
          id: 2,
          email: 'doctor@hospital.com',
          name: 'Dr. Smith',
          role: 'doctor',
          department: 'Cardiology'
        };
        const fakeToken = 'fake-jwt-token-doctor-' + Date.now();

        setUser(fakeUser);
        setToken(fakeToken);
        storage.set(TOKEN_KEY, fakeToken);
        storage.set(USER_KEY, fakeUser);

        return { success: true };
      } else if (credentials.email === 'staff@hospital.com' && credentials.password === 'staff123') {
        const fakeUser = {
          id: 3,
          email: 'staff@hospital.com',
          name: 'Sarah Johnson',
          role: 'staff',
          department: 'Emergency'
        };
        const fakeToken = 'fake-jwt-token-staff-' + Date.now();

        setUser(fakeUser);
        setToken(fakeToken);
        storage.set(TOKEN_KEY, fakeToken);
        storage.set(USER_KEY, fakeUser);

        return { success: true };
      } else if (credentials.email === 'patient@hospital.com' && credentials.password === 'patient123') {
        const fakeUser = {
          id: 4,
          email: 'patient@hospital.com',
          name: 'John Doe',
          role: 'patient',
          department: null
        };
        const fakeToken = 'fake-jwt-token-patient-' + Date.now();

        setUser(fakeUser);
        setToken(fakeToken);
        storage.set(TOKEN_KEY, fakeToken);
        storage.set(USER_KEY, fakeUser);

        return { success: true };
      } else {
        return { success: false, error: 'Invalid credentials' };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    storage.remove(TOKEN_KEY);
    storage.remove(USER_KEY);
  };

  const value = {
    user,
    token,
    login,
    logout,
    loading,
    isAuthenticated: !!token,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

