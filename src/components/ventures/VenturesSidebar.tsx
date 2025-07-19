import React from 'react';
import { 
  Building2, 
  DollarSign, 
  Users, 
  BarChart3,
  TrendingUp,
  Plus
} from 'lucide-react';

interface VenturesSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  onCreateNewVenture: () => void;
  isCollapsed?: boolean;
}

const VenturesSidebar: React.FC<VenturesSidebarProps> = ({ 
  activeSection, 
  onSectionChange, 
  onCreateNewVenture,
  isCollapsed = false 
}) => {
  const navigationTabs = [
    { id: 'portfolio-dashboard', label: 'Portfolio Dashboard', icon: BarChart3 },
    { id: 'my-ventures-list', label: 'My Ventures', icon: Building2 }
  ];

  const stats = [
    { label: 'Ventures', value: '5', icon: Building2 },
    { label: 'Funds Raised', value: '$3.8M', icon: DollarSign },
    { label: 'Active Fundraising', value: '2', icon: TrendingUp }
  ];

  return (
    <div className="space-y-6">
      {/* Profile Information */}
      <div className={`bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border ${isCollapsed ? 'p-3' : 'p-6'}`}>
        <div className={isCollapsed ? 'flex flex-col items-center' : 'text-center'}>
          <div className="relative inline-block mb-4">
            <img 
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150" 
              alt="Profile" 
              className={`${isCollapsed ? 'w-10 h-10' : 'w-20 h-20'} rounded-full object-cover border-4 border-linkedin`}
            />
            {!isCollapsed && (
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
            )}
          </div>
          
          {!isCollapsed && (
            <>
              <h3 className="text-lg font-semibold text-white mb-1">John Doe</h3>
              <p className="text-linkedin-light text-sm mb-3">Serial Entrepreneur & Investor</p>
              
              {/* Role Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-3">
                <span className="bg-linkedin/20 text-linkedin-light px-2 py-1 rounded-full text-xs">
                  Founder
                </span>
                <span className="bg-linkedin-light/20 text-linkedin-light px-2 py-1 rounded-full text-xs">
                  Investor
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Founder Stats - Hide when collapsed */}
      {!isCollapsed && (
        <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
          <h4 className="text-white font-semibold mb-4">Founder Stats</h4>
          <div className="grid grid-cols-1 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-linkedin/20 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-4 h-4 text-linkedin-light" />
                  </div>
                  <span className="text-gray-300">{stat.label}</span>
                </div>
                <span className="text-white font-semibold">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Navigation Tabs */}
      <div className={`bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border ${isCollapsed ? 'p-2' : 'p-4'}`}>
        <nav className="space-y-2">
          {navigationTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onSectionChange(tab.id)}
              className={`w-full flex items-center ${isCollapsed ? 'justify-center p-3' : 'space-x-3 px-3 py-2'} rounded-lg transition-all ${
                activeSection === tab.id
                 ? 'bg-linkedin text-white'
                 : 'text-gray-300 hover:text-white hover:bg-linkedin-card'
              }`}
              title={isCollapsed ? tab.label : undefined}
            >
              <tab.icon className="w-4 h-4" />
              {!isCollapsed && <span className="text-sm font-medium">{tab.label}</span>}
            </button>
          ))}
          
          <button
            onClick={onCreateNewVenture}
            className={`w-full flex items-center ${isCollapsed ? 'justify-center p-3' : 'space-x-3 px-3 py-2'} rounded-lg transition-all bg-gradient-to-r from-linkedin to-linkedin-light text-white`}
            title={isCollapsed ? "Create New Venture" : undefined}
          >
            <Plus className="w-4 h-4" />
            {!isCollapsed && <span className="text-sm font-medium">Create New Venture</span>}
          </button>
        </nav>
      </div>
    </div>
  );
};

export default VenturesSidebar;