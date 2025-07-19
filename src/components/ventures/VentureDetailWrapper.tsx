import React, { useState } from 'react';
import {
  ArrowLeft,
  Building2,
  DollarSign,
  TrendingUp,
  FileText,
  Users,
  BarChart3,
  MessageSquare
} from 'lucide-react';
import VentureOverview from '../investments/VentureOverview';
import VentureFunding from '../investments/VentureFunding';
import VenturePerformance from '../investments/VenturePerformance';
import VentureListing from '../investments/VentureListing';
import VenturePerformanceDashboard from './VenturePerformanceDashboard';
import VentureInvestorRelations from './VentureInvestorRelations';

interface VentureDetailWrapperProps {
  ventureData: any; // Replace 'any' with a more specific type if available
  onBack: () => void;
}

const VentureDetailWrapper: React.FC<VentureDetailWrapperProps> = ({ ventureData, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const navigationTabs = [
    { id: 'overview', label: 'Overview', icon: Building2 },
    { id: 'performance', label: 'Performance', icon: BarChart3 },
    { id: 'funding', label: 'Funding', icon: DollarSign },
    { id: 'investor-relations', label: 'Investor Relations', icon: Users },
    { id: 'listing', label: 'Listing', icon: FileText },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <VentureOverview ventureData={ventureData} onSectionChange={() => {}} />;
      case 'performance':
        return <VenturePerformanceDashboard ventureData={ventureData} />;
      case 'funding':
        return <VentureFunding ventureData={ventureData} onSectionChange={() => {}} />;
      case 'investor-relations':
        return <VentureInvestorRelations ventureData={ventureData} />;
      case 'listing':
        return <VentureListing ventureData={ventureData} onSectionChange={() => {}} />;
      default:
        return <VentureOverview ventureData={ventureData} onSectionChange={() => {}} />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <button
          onClick={onBack}
          className="p-2 bg-linkedin-card hover:bg-linkedin-card/70 text-white rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-white">{ventureData.companyName}</h1>
          <p className="text-gray-300">{ventureData.industry} | {ventureData.location}</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-4">
        <nav className="flex items-center space-x-2 overflow-x-auto">
          {navigationTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-linkedin to-linkedin-light text-white'
                  : 'text-gray-300 hover:text-white hover:bg-linkedin-card'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Content Area */}
      <div className="space-y-6">
        {renderContent()}
      </div>
    </div>
  );
};

export default VentureDetailWrapper;