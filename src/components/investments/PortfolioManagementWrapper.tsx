import React, { useState } from 'react';
import PortfolioPerformanceDashboard from './PortfolioPerformanceDashboard';
import VentureOverview from './VentureOverview';
import VentureFunding from './VentureFunding';
import VenturePerformance from './VenturePerformance';
import VentureListing from './VentureListing';
import { 
  BarChart3, 
  Building2, 
  DollarSign, 
  TrendingUp, 
  Target
} from 'lucide-react';

interface PortfolioManagementWrapperProps {
  onSectionChange: (section: string) => void;
  selectedVentureId?: number | null;
  onVentureSelect?: (ventureId: number | null) => void;
  activeSubSection?: string;
  setActiveSubSection?: (section: string) => void;
  venturesData?: any[];
}

const PortfolioManagementWrapper: React.FC<PortfolioManagementWrapperProps> = ({ 
  onSectionChange,
  selectedVentureId,
  onVentureSelect,
  activeSubSection: propActiveSubSection,
  setActiveSubSection: setPropActiveSubSection,
  venturesData
}) => {
  const [localActiveSubSection, setLocalActiveSubSection] = useState(propActiveSubSection || 'portfolio-performance-dashboard');
  
  // Use either the prop state or local state
  const activeSubSection = propActiveSubSection || localActiveSubSection;
  const setActiveSubSection = (section: string) => {
    if (setPropActiveSubSection) {
      setPropActiveSubSection(section);
    } else {
      setLocalActiveSubSection(section);
    }
  };

  const subNavigationTabs = [
    { id: 'venture-overview', label: 'Venture Overview', icon: Building2 },
    { id: 'venture-funding', label: 'Venture Funding', icon: DollarSign },
    { id: 'venture-performance', label: 'Venture Performance', icon: TrendingUp },
    { id: 'venture-listing', label: 'Venture Listing', icon: Target }
  ];

  // Filter tabs based on whether a specific venture is selected
  const filteredTabs = selectedVentureId 
    ? subNavigationTabs // Show only venture-specific tabs when a venture is selected
    : [
        { id: 'portfolio-performance-dashboard', label: 'Portfolio Performance Dashboard', icon: BarChart3 },
        ...subNavigationTabs
      ]; // Show all tabs including dashboard when no specific venture is selected

  const renderContent = () => {
    switch (activeSubSection) {
      case 'portfolio-performance-dashboard':
        return <PortfolioPerformanceDashboard 
          onSectionChange={onSectionChange} 
        />;
      case 'venture-overview':
        console.log('PortfolioManagementWrapper - venture-overview case with selectedVentureId:', selectedVentureId);
        return <VentureOverview 
          onSectionChange={onSectionChange} 
          selectedVentureId={selectedVentureId || 1}
          onVentureSelect={onVentureSelect}
          venturesData={venturesData}
        />;
      case 'venture-funding':
        return <VentureFunding 
          onSectionChange={onSectionChange} 
          selectedVentureId={selectedVentureId || 1}
          venturesData={venturesData}
        />;
      case 'venture-performance':
        return <VenturePerformance 
          onSectionChange={onSectionChange} 
          selectedVentureId={selectedVentureId || 1}
          venturesData={venturesData}
        />;
      case 'venture-listing':
        return <VentureListing 
          onSectionChange={onSectionChange} 
          selectedVentureId={selectedVentureId || 1}
          venturesData={venturesData}
        />;
      default:
        return <PortfolioPerformanceDashboard 
          onSectionChange={onSectionChange} 
        />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Portfolio Management</h1>
        <p className="text-gray-300">Comprehensive portfolio management and venture tracking</p>
      </div>
      
      {/* Horizontal Navigation */}
      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
        <nav className="flex items-center space-x-3 overflow-x-auto">
          {filteredTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSubSection(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                activeSubSection === tab.id
                  ? 'bg-gradient-to-r from-linkedin to-linkedin-light text-white'
                  : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        {renderContent()}
      </div>
    </div>
  );
};

export default PortfolioManagementWrapper;