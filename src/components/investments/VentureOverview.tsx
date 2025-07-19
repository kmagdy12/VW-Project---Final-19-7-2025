import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Globe, 
  Mail, 
  Users, 
  DollarSign,
  TrendingUp,
  Calendar,
  ExternalLink,
  User,
  Activity,
  Newspaper,
  ArrowLeft
} from 'lucide-react';

interface VentureOverviewProps {
  onSectionChange: (section: string) => void;
  selectedVentureId?: number; // Passed from PortfolioManagement
  onVentureSelect?: (ventureId: number | null) => void; // Passed from PortfolioManagement
  venturesData?: any[];
}

const VentureOverview: React.FC<VentureOverviewProps> = ({ 
  onSectionChange, 
  selectedVentureId,
  onVentureSelect,
  venturesData = []
}) => {

  // Find the selected venture from venturesData
  const selectedVenture = venturesData.find(v => v.id === selectedVentureId) || venturesData[0] || {
    id: 1,
    companyName: 'AgriTech Innovations',
    industry: 'AgriTech',
    location: 'Dubai, UAE',
    keyMetrics: {
      arr: '$180K',
      users: '750+',
    },
    stage: 'Series A',
    founders: [],
    recentActivity: []
  };

  console.log('VentureOverview - Selected venture:', {
    selectedVentureId,
    selectedVenture: selectedVenture ? { id: selectedVenture.id, name: selectedVenture.companyName } : 'using default',
    isDefault: !venturesData.find(v => v.id === selectedVentureId)
  });

  const relevantNews = [
    {
      id: 1,
      title: 'AgriTech Sector Shows Strong Growth Across MENA',
      subtitle: 'Agricultural technology investments up 60% as region focuses on food security and sustainable farming',
      date: '1 day ago'
    },
    {
      id: 2,
      title: 'UAE Launches $500M AgriTech Innovation Fund',
      subtitle: 'New government initiative aims to support agricultural technology startups',
      date: '3 days ago'
    },
    {
      id: 3,
      title: 'Water Scarcity Drives Innovation in Smart Farming',
      subtitle: 'MENA region leads in adoption of water-efficient agricultural technologies',
      date: '1 week ago'
    },
    {
      id: 4,
      title: 'AI in Agriculture Market Expected to Reach $15B by 2027',
      subtitle: 'Growing demand for precision agriculture solutions drives market expansion',
      date: '2 weeks ago'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Venture Overview</h1>
        <p className="text-gray-300">Individual venture monitoring interface with progress tracking</p>
      </div>
        
      {/* General Information */}
      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
              <Building2 className="w-5 h-5" />
              <span>General Information for {selectedVenture.companyName}</span>
            </h3>
            
            <div className="flex items-start space-x-6">
              <div className="text-6xl">🌱</div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-2">{selectedVenture.companyName}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <MapPin className="w-4 h-4" />
                    <span>{selectedVenture.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Building2 className="w-4 h-4" />
                    <span>{selectedVenture.industry}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Globe className="w-4 h-4" />
                    <a href={`https://${selectedVenture.companyName.toLowerCase().replace(/\s+/g, '-')}.com`} className="text-linkedin-light hover:text-linkedin">
                      {selectedVenture.companyName.toLowerCase().replace(/\s+/g, '-')}.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Mail className="w-4 h-4" />
                    <a href={`mailto:contact@${selectedVenture.companyName.toLowerCase().replace(/\s+/g, '-')}.com`} className="text-linkedin-light hover:text-linkedin">
                      contact@{selectedVenture.companyName.toLowerCase().replace(/\s+/g, '-')}.com
                    </a>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {selectedVenture.description || `${selectedVenture.companyName} is a leading company in the ${selectedVenture.industry} sector, based in ${selectedVenture.location}.`}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Key Highlights */}
            <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5" />
                <span>Key Highlights</span>
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-linkedin-card/50 rounded-lg">
                  <span className="text-gray-300">Total Revenue</span>
                  <span className="text-white font-semibold">{selectedVenture.keyMetrics?.arr || '$0'} ARR</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-linkedin-card/50 rounded-lg">
                  <span className="text-gray-300">Total Users/Customers</span>
                  <span className="text-white font-semibold">{selectedVenture.keyMetrics?.users || '0'} Active Users</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-linkedin-card/50 rounded-lg">
                  <span className="text-gray-300">Funding Stage</span>
                  <span className="text-linkedin-light font-semibold">{selectedVenture.stage}</span>
                </div>
              </div>
            </div>

            {/* People */}
            <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>People</span>
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-linkedin-light font-semibold mb-3">Founders</h4>
                  <div className="space-y-3">
                    {(selectedVenture.founders || []).map((founder: any) => (
                      <div key={founder.id} className="flex items-center space-x-3">
                        <img 
                          src={founder.image} 
                          alt={founder.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-linkedin"
                        />
                        <div className="flex-1">
                          <h5 className="text-white font-medium">{founder.name}</h5>
                          <p className="text-gray-400 text-sm">{founder.title}</p>
                        </div>
                        <button className="text-linkedin-light hover:text-linkedin">
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-3 border-t border-linkedin-border">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Headcount</span>
                    <span className="text-white font-semibold">{selectedVenture.keyMetrics?.teamSize || '0'} employees</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Recent Activity */}
            <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                <Activity className="w-5 h-5" />
                <span>Recent Activity</span>
              </h3>
              
              <div className="space-y-4">
                {(selectedVenture.recentActivity || []).map((activity: any) => (
                  <div key={activity.id} className="p-3 bg-linkedin-card/50 rounded-lg">
                    <h4 className="text-white font-medium text-sm mb-1">{activity.title}</h4>
                    <p className="text-gray-300 text-xs mb-2">{activity.subtitle}</p>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-3 h-3 text-gray-500" />
                      <span className="text-gray-500 text-xs">{activity.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Relevant News */}
            <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                <Newspaper className="w-5 h-5" />
                <span>Relevant News</span>
              </h3>
              
              <div className="space-y-4">
                {relevantNews.map((news) => (
                  <div key={news.id} className="p-3 bg-linkedin-card/50 rounded-lg hover:bg-linkedin-card/70 transition-colors cursor-pointer">
                    <h4 className="text-white font-medium text-sm mb-1">{news.title}</h4>
                    <p className="text-gray-300 text-xs mb-2">{news.subtitle}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-3 h-3 text-gray-500" />
                        <span className="text-gray-500 text-xs">{news.date}</span>
                      </div>
                      <ExternalLink className="w-3 h-3 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
  );
};

export default VentureOverview;