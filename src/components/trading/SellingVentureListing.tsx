import React from 'react';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  DollarSign,
  TrendingUp,
  Eye,
  ExternalLink
} from 'lucide-react';

interface SellingVentureListingProps {
  onSectionChange: (section: string) => void;
  setSelectedVentureId: (ventureId: number) => void;
  setMyInvestmentsActiveSubSection: (section: string) => void;
}

const SellingVentureListing: React.FC<SellingVentureListingProps> = ({ 
  onSectionChange, 
  setSelectedVentureId, 
  setMyInvestmentsActiveSubSection 
}) => {
  // Mock data for ventures available for listing (only active ventures)
  const venturesData = [
    {
      id: 1,
      companyName: 'AgriTech Innovations',
      industry: 'AgriTech',
      location: 'Dubai, UAE',
      investmentDate: '2023-06-15',
      investmentAmount: '$250K',
      currentValuation: '$12M',
      originalValuation: '$8M',
      equityOwned: '3.1%',
      currentValue: '$372K',
      unrealizedGain: '$122K',
      returnMultiple: '1.49x',
      status: 'Active',
      stage: 'Series A',
      lastUpdate: '2 weeks ago',
      keyMetrics: {
        arr: '$180K',
        growth: '25%',
        users: '750+',
        teamSize: '15'
      },
      recentNews: 'Secured major partnership with regional agricultural cooperative',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 2,
      companyName: 'HealthFlow Solutions',
      industry: 'HealthTech',
      location: 'Riyadh, KSA',
      investmentDate: '2023-03-20',
      investmentAmount: '$150K',
      currentValuation: '$18M',
      originalValuation: '$15M',
      equityOwned: '1.0%',
      currentValue: '$180K',
      unrealizedGain: '$30K',
      returnMultiple: '1.20x',
      status: 'Active',
      stage: 'Series A',
      lastUpdate: '1 week ago',
      keyMetrics: {
        arr: '$95K',
        growth: '18%',
        users: '1200+',
        teamSize: '20'
      },
      recentNews: 'Launched new AI-powered diagnostic feature',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 3,
      companyName: 'EduSpark',
      industry: 'EdTech',
      location: 'Cairo, Egypt',
      investmentDate: '2023-09-10',
      investmentAmount: '$100K',
      currentValuation: '$6M',
      originalValuation: '$4M',
      equityOwned: '2.5%',
      currentValue: '$150K',
      unrealizedGain: '$50K',
      returnMultiple: '1.50x',
      status: 'Active',
      stage: 'Seed',
      lastUpdate: '3 days ago',
      keyMetrics: {
        arr: '$25K',
        growth: '40%',
        users: '500+',
        teamSize: '8'
      },
      recentNews: 'Expanded to 3 new countries in MENA region',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 5,
      companyName: 'CleanEnergy MENA',
      industry: 'CleanTech',
      location: 'Doha, Qatar',
      investmentDate: '2022-08-05',
      investmentAmount: '$300K',
      currentValuation: '$35M',
      originalValuation: '$25M',
      equityOwned: '1.2%',
      currentValue: '$420K',
      unrealizedGain: '$120K',
      returnMultiple: '1.40x',
      status: 'Active',
      stage: 'Series B',
      lastUpdate: '1 month ago',
      keyMetrics: {
        arr: '$2.1M',
        growth: '35%',
        users: '50+',
        teamSize: '45'
      },
      recentNews: 'Raised $15M Series B led by international climate fund',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'text-green-400 bg-green-500/20';
      case 'Exited':
        return 'text-gray-400 bg-gray-500/20';
      default:
        return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getReturnColor = (returnMultiple: string) => {
    const value = parseFloat(returnMultiple.replace('x', ''));
    if (value > 1) return 'text-green-400';
    if (value === 1) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Selling (Venture Listing)</h1>
        <p className="text-gray-300">Select a venture from your portfolio to manage its listing for secondary market sales</p>
      </div>
      
      {/* Ventures List for Selling */}
      <div className="space-y-6">
        {venturesData.map((venture) => (
          <div key={venture.id} className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6 hover:border-linkedin/50 transition-all">
            {/* Company Header */}
            <div className="flex items-start space-x-4 mb-4">
              <img 
                src={venture.image} 
                alt={venture.companyName}
                className="w-16 h-16 rounded-lg object-cover border-2 border-linkedin"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white">{venture.companyName}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(venture.status)}`}>
                    {venture.status}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Building2 className="w-4 h-4" />
                    <span>{venture.industry}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{venture.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{venture.stage}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment Details */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <p className="text-gray-400 text-xs mb-1">Your Investment</p>
                <p className="text-white font-semibold">{venture.investmentAmount}</p>
              </div>
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <p className="text-gray-400 text-xs mb-1">Current Value</p>
                <p className="text-white font-semibold">{venture.currentValue}</p>
              </div>
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <p className="text-gray-400 text-xs mb-1">Equity Owned</p>
                <p className="text-white font-semibold">{venture.equityOwned}</p>
              </div>
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <p className="text-gray-400 text-xs mb-1">Return Multiple</p>
                <p className={`font-semibold ${getReturnColor(venture.returnMultiple)}`}>
                  {venture.returnMultiple}
                </p>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="bg-linkedin-card/50 rounded-lg p-4 mb-4">
              <h4 className="text-white font-semibold mb-3">Key Metrics</h4>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-gray-400 text-xs">ARR</p>
                  <p className="text-white font-semibold">{venture.keyMetrics.arr}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Growth</p>
                  <p className="text-white font-semibold">{venture.keyMetrics.growth}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Users</p>
                  <p className="text-white font-semibold">{venture.keyMetrics.users}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Team Size</p>
                  <p className="text-white font-semibold">{venture.keyMetrics.teamSize}</p>
                </div>
              </div>
            </div>

            {/* Recent News */}
            <div className="bg-linkedin-card/50 rounded-lg p-4 mb-4">
              <h4 className="text-white font-semibold mb-2">Recent News</h4>
              <p className="text-gray-300 text-sm">{venture.recentNews}</p>
            </div>

            {/* Actions */}
            <div className="flex space-x-3">
              <button 
                onClick={() => {
                  setSelectedVentureId(venture.id);
                  setMyInvestmentsActiveSubSection('venture-listing');
                  onSectionChange('portfolio-management');
                }}
                className="flex-1 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-4 py-2 rounded-lg font-semibold transition-all"
              >
                Manage Listing
              </button>
              <button 
                onClick={() => {
                  setSelectedVentureId(venture.id);
                  setMyInvestmentsActiveSubSection('venture-overview');
                  onSectionChange('portfolio-management');
                }}
                className="px-4 py-2 border border-linkedin-border text-gray-300 rounded-lg hover:bg-linkedin-card/50 transition-colors"
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellingVentureListing;