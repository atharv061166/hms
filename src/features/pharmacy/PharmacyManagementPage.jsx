import { Pill, PackageSearch, ClipboardCheck, Truck } from 'lucide-react';
import FeaturePage from '../../components/FeaturePage/FeaturePage.jsx';

const PharmacyManagementPage = () => {
  return (
    <FeaturePage
      title="Pharmacy Management"
      subtitle="Medication Safety"
      overview="Keep formularies, prescriptions, and dispensing workflows aligned so clinicians and pharmacists operate from the same source of truth."
      icon={<Pill size={36} />}
      keyHighlights={[
        {
          title: 'Inventory Visibility',
          description: 'Track stock levels, expirations, and controlled substance logs in real-time.',
          icon: <PackageSearch size={20} />,
        },
        {
          title: 'E-Prescription Approval',
          description: 'Clinical orders route to pharmacy queues with allergy and interaction checks.',
          icon: <ClipboardCheck size={20} />,
        },
        {
          title: 'Fulfillment & Delivery',
          description: 'Support bedside dispensing, pick-up counters, and courier integrations.',
          icon: <Truck size={20} />,
        },
      ]}
      workflows={[
        {
          title: 'Formulary Management',
          description: 'Maintain dosage guidelines, substitutes, and prior-authorization rules centrally.',
        },
        {
          title: 'Dispensing Log',
          description: 'Barcode verification ensures the right patient receives the right medication.',
        },
        {
          title: 'Reorder Automation',
          description: 'Threshold alerts trigger purchase orders with approved suppliers.',
        },
      ]}
      stats={[
        { label: 'Stock-outs', value: '-70%' },
        { label: 'Dispense Accuracy', value: '99.5%' },
        { label: 'Manual Calls', value: '-45%' },
      ]}
    />
  );
};

export default PharmacyManagementPage;








