import React from 'react';
import IntelligenceDashboard from './IntelligenceDashboard';
import AIReports from './AIReports';

interface MarketIntelligenceProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const MarketIntelligence: React.FC<MarketIntelligenceProps> = ({ 
  activeSection, 
  onSectionChange 
}) => {
  const renderContent = () => {
    switch (activeSection) {
      case 'intelligence-dashboard':
        return <IntelligenceDashboard onSectionChange={onSectionChange} />;
      case 'ai-reports':
        return <AIReports onSectionChange={onSectionChange} />;
      default:
        return <IntelligenceDashboard onSectionChange={onSectionChange} />;
    }
  };

  return (
    <div className="space-y-6">
      {renderContent()}
    </div>
  );
};

export default MarketIntelligence;