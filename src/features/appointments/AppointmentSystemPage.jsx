import { CalendarCheck, AlarmClock, BellRing, Clock } from 'lucide-react';
import FeaturePage from '../../components/FeaturePage/FeaturePage.jsx';

const AppointmentSystemPage = () => {
  return (
    <FeaturePage
      title="Appointment System"
      subtitle="Smart Scheduling"
      overview="Give patients and staff a single calendar to book, reschedule, and route appointments without double-booking or manual spreadsheets."
      icon={<CalendarCheck size={36} />}
      keyHighlights={[
        {
          title: 'Multi-Channel Booking',
          description: 'Front desk, patient portal, and IVR bookings flow into the same calendar.',
          icon: <BellRing size={20} />,
        },
        {
          title: 'Resource Allocation',
          description: 'Automatically match slots with the right provider, room, and equipment.',
          icon: <Clock size={20} />,
        },
        {
          title: 'Real-time Updates',
          description: 'Instant notifications for status changes, cancellations, and walk-ins.',
          icon: <AlarmClock size={20} />,
        },
      ]}
      workflows={[
        {
          title: 'Smart Slot Search',
          description: 'Patients pick specialties, urgency, or preferred clinicians and see live availability.',
        },
        {
          title: 'Waitlist Automation',
          description: 'Cancelled slots trigger automatic outreach to patients on standby.',
        },
        {
          title: 'Daily Handover',
          description: 'Printable and digital rosters keep care teams synced on the day’s caseload.',
        },
      ]}
      stats={[
        { label: 'No-show Reduction', value: '34%' },
        { label: 'Scheduling Time', value: '-60%' },
        { label: 'Utilization', value: '88%' },
      ]}
    />
  );
};

export default AppointmentSystemPage;





