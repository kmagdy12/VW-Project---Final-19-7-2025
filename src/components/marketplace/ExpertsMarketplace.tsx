import React from 'react';
import ExpertDiscovery from './ExpertDiscovery';
import ServiceDiscovery from './ServiceDiscovery';
import WorkshopDiscovery from './WorkshopDiscovery';
import ExpertProfile from './ExpertProfile';
import ServiceDetails from './ServiceDetails';
import WorkshopDetails from './WorkshopDetails';
import Sessions from './Sessions';
import SavedItems from './SavedItems';

interface ExpertsMarketplaceProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const ExpertsMarketplace: React.FC<ExpertsMarketplaceProps> = ({ 
  activeSection, 
  onSectionChange 
}) => {
  const renderContent = () => {
    switch (activeSection) {
      case 'discover-experts':
        return <ExpertDiscovery onSectionChange={onSectionChange} />;
      case 'discover-services':
        return <ServiceDiscovery onSectionChange={onSectionChange} />;
      case 'discover-workshops':
        return <WorkshopDiscovery onSectionChange={onSectionChange} />;
      case 'expert-profile':
        return <ExpertProfile onSectionChange={onSectionChange} />;
      case 'service-details':
        return <ServiceDetails onSectionChange={onSectionChange} />;
      case 'workshop-details':
        return <WorkshopDetails onSectionChange={onSectionChange} />;
      case 'sessions':
        return <Sessions onSectionChange={onSectionChange} />;
      case 'saved-items':
        return <SavedItems onSectionChange={onSectionChange} />;
      default:
        return <ExpertDiscovery onSectionChange={onSectionChange} />;
    }
  };

  return (
    <div className="space-y-6">
      {renderContent()}
    </div>
  );
};

export default ExpertsMarketplace;