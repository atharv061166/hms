import { CreditCard, FileText, Wallet, TrendingUp } from 'lucide-react';
import FeaturePage from '../../components/FeaturePage/FeaturePage.jsx';

const BillingPaymentsPage = () => {
  return (
    <FeaturePage
      title="Billing & Payments"
      subtitle="Revenue Operations"
      overview="Automate charge capture, claims, and collections with transparent visibility into every invoice and payment touchpoint."
      icon={<CreditCard size={36} />}
      keyHighlights={[
        {
          title: 'Charge Automation',
          description: 'Translate clinical encounters into CPT/ICD codes with configurable rules.',
          icon: <FileText size={20} />,
        },
        {
          title: 'Flexible Payments',
          description: 'Support POS, online portals, payment plans, and insurance reimbursements.',
          icon: <Wallet size={20} />,
        },
        {
          title: 'Revenue Analytics',
          description: 'Track AR aging, denials, and cash flow through live dashboards.',
          icon: <TrendingUp size={20} />,
        },
      ]}
      workflows={[
        {
          title: 'Charge Review',
          description: 'Clinical documentation is validated before submissions leave the queue.',
        },
        {
          title: 'Claims Management',
          description: 'Batch submissions, track payer responses, and manage appeals centrally.',
        },
        {
          title: 'Patient Billing',
          description: 'Send branded statements with click-to-pay links and automated reminders.',
        },
      ]}
      stats={[
        { label: 'Claim First-Pass', value: '97%' },
        { label: 'AR Days', value: '18' },
        { label: 'Collections Lift', value: '+22%' },
      ]}
    />
  );
};

export default BillingPaymentsPage;





