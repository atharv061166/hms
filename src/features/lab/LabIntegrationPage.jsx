import { TestTube, Microscope, Share2, ClipboardSignature } from 'lucide-react';
import FeaturePage from '../../components/FeaturePage/FeaturePage.jsx';

const LabIntegrationPage = () => {
  return (
    <FeaturePage
      title="Lab Integration"
      subtitle="Diagnostics Workflow"
      overview="Submit, track, and reconcile every lab order without leaving the HMS—results flow straight back into the patient record."
      icon={<TestTube size={36} />}
      keyHighlights={[
        {
          title: 'Order Routing',
          description: 'Send tests to on-site or partner labs with standardized requisitions.',
          icon: <ClipboardSignature size={20} />,
        },
        {
          title: 'Analyzer Connectivity',
          description: 'HL7-ready interfaces push instrument readings directly into results.',
          icon: <Microscope size={20} />,
        },
        {
          title: 'Result Distribution',
          description: 'Notify physicians and patients instantly with structured interpretations.',
          icon: <Share2 size={20} />,
        },
      ]}
      workflows={[
        {
          title: 'Specimen Tracking',
          description: 'Chain-of-custody logs track sample pick-up, processing, and storage.',
        },
        {
          title: 'Quality Controls',
          description: 'Built-in review queues allow pathologists to approve or reject results.',
        },
        {
          title: 'Result Publishing',
          description: 'Approved results sync to the patient chart and trigger follow-up tasks.',
        },
      ]}
      stats={[
        { label: 'Order Errors', value: '-55%' },
        { label: 'Turnaround', value: '-30%' },
        { label: 'Digital Delivery', value: '100%' },
      ]}
    />
  );
};

export default LabIntegrationPage;








