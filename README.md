# Hospital Management System (HMS) - Frontend

A React-based frontend for a Hospital Management System with authentication and basic dashboard functionality.

## Features

- **Authentication**: Login with fake credentials for testing
- **Dashboard**: Simple home page with user information
- **Responsive Design**: Works on desktop and mobile devices
- **Clean UI**: Modern, accessible interface

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

## Test Credentials

Use these credentials to test the login functionality:

- **Admin User:**
  - Email: `admin@hospital.com`
  - Password: `admin123`

- **Doctor User:**
  - Email: `doctor@hospital.com`
  - Password: `doctor123`

- **Staff User:**
  - Email: `staff@hospital.com`
  - Password: `staff123`

- **Patient User:**
  - Email: `patient@hospital.com`
  - Password: `patient123`

## Project Structure

```
src/
  components/          # Reusable UI components
    Button/           # Button component with variants
    Input/            # Input component with validation
  features/           # Page-specific modules
    auth/            # Login page
    dashboard/       # Dashboard/home page
  hooks/             # Custom React hooks
    useAuth.js       # Authentication context and logic
    useFetch.js      # Data fetching hook
  routes/            # Application routing
  services/          # API and storage services
  App.jsx           # Main application component
```

## Environment Variables

Create a `.env` file in the root directory:

```
VITE_API_BASE_URL=http://localhost:8000/api
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technology Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **CSS Modules** - Component-scoped styling
- **Context API** - State management

## Development Notes

- The app uses fake authentication for testing purposes
- All API calls are prepared but will need backend integration
- Components are designed to be reusable and accessible
- The project follows a feature-based folder structure

## Next Steps

1. Connect to a real backend API
2. Add more pages (Patients, Appointments, etc.)
3. Implement proper error handling
4. Add unit tests
5. Set up CI/CD pipeline