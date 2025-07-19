import React from 'react';
import MyServicesSidebar from './MyServicesSidebar';
import ServicesOverview from './ServicesOverview';
import CreateNewService from './CreateNewService';
import CreateNewWorkshop from './CreateNewWorkshop';
import SessionManagement from './SessionManagement';
import ClientManagement from './ClientManagement';

interface MyServicesMainProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const MyServicesMain: React.FC<MyServicesMainProps> = ({ activeSection, onSectionChange }) => {
  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <ServicesOverview />;
      case 'create-service':
        return <CreateNewService />;
      case 'create-workshop':
        return <CreateNewWorkshop />;
      case 'client-management':
        return <ClientManagement />;
      case 'session-management':
        return <SessionManagement />;
      default:
        return <ServicesOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-linkedin-background via-linkedin-dark to-linkedin-background">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <MyServicesSidebar activeSection={activeSection} onSectionChange={onSectionChange} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServicesMain;