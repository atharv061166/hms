import { BarChart3, ActivitySquare, PieChart, Database } from 'lucide-react';
import FeaturePage from '../../components/FeaturePage/FeaturePage.jsx';

const AnalyticsReportsPage = () => {
  return (
    <FeaturePage
      title="Analytics & Reports"
      subtitle="Operational Intelligence"
      overview="Surface KPIs across departments with interactive dashboards that connect clinical, financial, and operational data."
      icon={<BarChart3 size={36} />}
      keyHighlights={[
        {
          title: 'Pre-built Dashboards',
          description: 'Patient flow, OR utilization, pharmacy spend, and revenue KPIs ready on day one.',
          icon: <ActivitySquare size={20} />,
        },
        {
          title: 'Self-service Reports',
          description: 'Drag-and-drop widgets let teams build ad-hoc views without IT tickets.',
          icon: <PieChart size={20} />,
        },
        {
          title: 'Data Lake Connectors',
          description: 'Sync HMS data with BI stacks and external data warehouses securely.',
          icon: <Database size={20} />,
        },
      ]}
      workflows={[
        {
          title: 'Metric Definition',
          description: 'Governed data models ensure every report uses consistent logic.',
        },
        {
          title: 'Alerting & SLAs',
          description: 'Threshold-based alerts notify stakeholders when KPIs breach limits.',
        },
        {
          title: 'Executive Briefings',
          description: 'Schedule PDF/Excel exports straight to leadership inboxes.',
        },
      ]}
      stats={[
        { label: 'Report Prep Time', value: '-65%' },
        { label: 'Data Sources', value: '25+' },
        { label: 'Adoption', value: '85%' },
      ]}
    />
  );
};

export default AnalyticsReportsPage;





