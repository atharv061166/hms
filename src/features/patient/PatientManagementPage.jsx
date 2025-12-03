import { Users, ClipboardList, CalendarDays, Stethoscope } from 'lucide-react';
import FeaturePage from '../../components/FeaturePage/FeaturePage.jsx';

const PatientManagementPage = () => {
  return (
    <FeaturePage
      title="Patient Management"
      subtitle="Care Coordination"
      overview="Centralize patient demographics, medical histories, active care plans, and visit timelines so every clinician stays aligned from intake to discharge."
      icon={<Users size={36} />}
      keyHighlights={[
        {
          title: 'Unified Patient Profile',
          description: 'Allergies, vitals, documents, and care notes consolidated in one secure profile.',
          icon: <ClipboardList size={20} />,
        },
        {
          title: 'Care Team Collaboration',
          description: 'Tag physicians, nurses, and specialists to streamline updates and critical alerts.',
          icon: <Stethoscope size={20} />,
        },
        {
          title: 'Integrated Scheduling',
          description: 'Link patient records with appointment journeys for better handoffs.',
          icon: <CalendarDays size={20} />,
        },
      ]}
      workflows={[
        {
          title: 'Intake & Verification',
          description: 'Digitized registration captures demographics, insurance, and consent in minutes.',
        },
        {
          title: 'Clinical Documentation',
          description: 'SOAP notes, prescriptions, and attachments synced across departments in real-time.',
        },
        {
          title: 'Follow-up Management',
          description: 'Automated reminders and outreach ensure continuity of care post-visit.',
        },
      ]}
      stats={[
        { label: 'Avg. Intake Time', value: '5 min' },
        { label: 'Data Accuracy', value: '99%' },
        { label: 'Provider Adoption', value: '92%' },
      ]}
    />
  );
};

export default PatientManagementPage;





