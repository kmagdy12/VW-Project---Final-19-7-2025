import React, { useState } from 'react';
import { useEffect } from 'react';
import { 
  Building2, 
  TrendingUp, 
  DollarSign, 
  Users, 
  BarChart3,
  AlertTriangle,
  Star,
  Calendar,
  ExternalLink,
  PieChart,
  Activity,
  Target,
  Award,
  Briefcase,
  Eye,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Newspaper,
  Plus,
  ChevronRight,
  Filter,
  Search,
  ArrowLeft,
  MapPin,
} from 'lucide-react';
import VenturesSidebar from './VenturesSidebar';
import VentureDetailWrapper from './VentureDetailWrapper';

interface MyVenturesProps {
  onBack: () => void;
  onCreateNewVenture: () => void;
}

const MyVentures: React.FC<MyVenturesProps> = ({ onBack, onCreateNewVenture }) => {
  const [selectedDuration, setSelectedDuration] = useState('1y'); 
  const [dealFilter, setDealFilter] = useState('all');
  const [industryFilter, setIndustryFilter] = useState('all');
  const [geoFilter, setGeoFilter] = useState('all');
  const [activeSection, setActiveSection] = useState('my-ventures-list');

  const [selectedVenture, setSelectedVenture] = useState<any | null>(null);
  const [portfolioGrowthChartData, setPortfolioGrowthChartData] = useState<
    { date: string; value: number; portfolioValue: string }[]
  >([]);

  // Generate portfolio growth data based on selected duration
  useEffect(() => {
    let data: { date: string; value: number; portfolioValue: string }[] = [];

    switch (selectedDuration) {
      case '1m':
        data = [
          { date: 'Nov 15', value: 100, portfolioValue: '$12.2M' },
          { date: 'Nov 22', value: 102, portfolioValue: '$12.4M' },
          { date: 'Nov 29', value: 105, portfolioValue: '$12.8M' },
          { date: 'Dec 6', value: 103, portfolioValue: '$12.6M' },
          { date: 'Dec 13', value: 106, portfolioValue: '$12.9M' },
        ];
        break;
      case '3m':
        data = [
          { date: 'Oct 1', value: 95, portfolioValue: '$11.6M' },
          { date: 'Oct 15', value: 98, portfolioValue: '$12.0M' },
          { date: 'Nov 1', value: 100, portfolioValue: '$12.2M' },
          { date: 'Nov 15', value: 105, portfolioValue: '$12.8M' },
          { date: 'Dec 1', value: 108, portfolioValue: '$13.2M' },
        ];
        break;
      case '6m':
        data = [
          { date: 'Jul 1', value: 85, portfolioValue: '$10.4M' },
          { date: 'Aug 1', value: 88, portfolioValue: '$10.8M' },
          { date: 'Sep 1', value: 92, portfolioValue: '$11.2M' },
          { date: 'Oct 1', value: 95, portfolioValue: '$11.6M' },
          { date: 'Nov 1', value: 100, portfolioValue: '$12.2M' },
          { date: 'Dec 1', value: 106, portfolioValue: '$12.9M' },
        ];
        break;
      case '1y':
        data = [
          { date: 'Jan 2024', value: 70, portfolioValue: '$8.5M' },
          { date: 'Mar 2024', value: 75, portfolioValue: '$9.1M' },
          { date: 'May 2024', value: 80, portfolioValue: '$9.8M' },
          { date: 'Jul 2024', value: 85, portfolioValue: '$10.4M' },
          { date: 'Sep 2024', value: 92, portfolioValue: '$11.2M' },
          { date: 'Nov 2024', value: 100, portfolioValue: '$12.2M' },
          { date: 'Dec 2024', value: 106, portfolioValue: '$12.9M' },
        ];
        break;
      case 'all':
        data = [
          { date: 'Jan 2023', value: 60, portfolioValue: '$7.3M' },
          { date: 'Apr 2023', value: 65, portfolioValue: '$7.9M' },
          { date: 'Jul 2023', value: 70, portfolioValue: '$8.5M' },
          { date: 'Oct 2023', value: 75, portfolioValue: '$9.1M' },
          { date: 'Jan 2024', value: 80, portfolioValue: '$9.8M' },
          { date: 'Apr 2024', value: 85, portfolioValue: '$10.4M' },
          { date: 'Jul 2024', value: 90, portfolioValue: '$11.0M' },
          { date: 'Oct 2024', value: 95, portfolioValue: '$11.6M' },
          { date: 'Dec 2024', value: 106, portfolioValue: '$12.9M' },
        ];
        break;
      default:
        data = [];
    }
    setPortfolioGrowthChartData(data);
  }, [selectedDuration]);

  const durationOptions = [
    { id: '1m', label: '1M' },
    { id: '3m', label: '3M' },
    { id: '6m', label: '6M' },
    { id: '1y', label: '1Y' },
    { id: 'all', label: 'All' }
  ];

  const portfolioOverview = {
    totalValue: '$12.5M',
    totalVentures: 5,
    totalFundsRaised: '$3.8M',
    totalExits: 1,
    totalGainFromExits: '$1.2M'
  };

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
      id: 4,
      companyName: 'RetailTech Pro',
      industry: 'RetailTech',
      location: 'Kuwait City, Kuwait',
      investmentDate: '2022-11-15',
      investmentAmount: '$200K',
      currentValuation: '$0',
      originalValuation: '$6M',
      equityOwned: '3.3%',
      currentValue: '$0',
      unrealizedGain: '-$200K',
      returnMultiple: '0.00x',
      status: 'Exited',
      stage: 'Closed',
      lastUpdate: '6 months ago',
      keyMetrics: {
        arr: '$0',
        growth: '0%',
        users: '0',
        teamSize: '0'
      },
      recentNews: 'Company ceased operations due to market challenges',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100'
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

  const industrySegmentation = [
    { industry: 'Fintech', percentage: 40, value: '$5M', color: 'bg-blue-500' },
    { industry: 'HealthTech', percentage: 25, value: '$3.1M', color: 'bg-green-500' },
    { industry: 'EdTech', percentage: 15, value: '$1.9M', color: 'bg-yellow-500' },
    { industry: 'CleanTech', percentage: 12, value: '$1.5M', color: 'bg-purple-500' },
    { industry: 'AgriTech', percentage: 8, value: '$1M', color: 'bg-pink-500' }
  ];

  const stageSegmentation = [
    { stage: 'Idea', percentage: 20, count: 1, color: 'bg-gray-500' },
    { stage: 'MVP', percentage: 20, count: 1, color: 'bg-orange-500' },
    { stage: 'Traction', percentage: 40, count: 2, color: 'bg-blue-500' },
    { stage: 'Scaling', percentage: 20, count: 1, color: 'bg-green-500' }
  ];

  const performanceSegmentation = [
    { performance: 'High Performers', percentage: 40, count: 2, color: 'bg-green-500' },
    { performance: 'Stable', percentage: 40, count: 2, color: 'bg-blue-500' },
    { performance: 'Underperforming', percentage: 20, count: 1, color: 'bg-red-500' }
  ];

  const alerts = [
    {
      id: 1,
      title: 'FinPay: 30% revenue decline',
      description: 'Quarterly revenue dropped significantly due to increased competition',
      severity: 'high',
      date: '2 hours ago'
    },
    {
      id: 2,
      title: 'EduSpark: 1 month delay in product release',
      description: 'Product launch postponed due to technical challenges',
      severity: 'medium',
      date: '1 day ago'
    },
    {
      id: 3,
      title: 'HealthFlow: New partnership announced',
      description: 'Strategic partnership with major healthcare provider',
      severity: 'low',
      date: '3 days ago'
    }
  ];

  const topPerformers = [
    {
      id: 1,
      name: 'FinPay',
      logo: '💳',
      growthRate: '+180%',
      currentValue: '$5M',
      industry: 'Fintech'
    },
    {
      id: 2,
      name: 'HealthFlow',
      logo: '🏥',
      growthRate: '+120%',
      currentValue: '$3.1M',
      industry: 'HealthTech'
    },
    {
      id: 3,
      name: 'EduSpark',
      logo: '📚',
      growthRate: '+90%',
      currentValue: '$1.9M',
      industry: 'EdTech'
    },
    {
      id: 4,
      name: 'CleanEnergy',
      logo: '☀️',
      growthRate: '+75%',
      currentValue: '$1.5M',
      industry: 'CleanTech'
    },
    {
      id: 5,
      name: 'AgriTech',
      logo: '🌱',
      growthRate: '+60%',
      currentValue: '$1M',
      industry: 'AgriTech'
    }
  ];

  const marketUpdates = [
    {
      id: 1,
      title: 'MENA Fintech Investment Reaches Record High in Q4 2024',
      intro: 'Regional fintech startups raised $1.2B in the fourth quarter, marking a 45% increase from the previous year',
      date: '2 hours ago'
    },
    {
      id: 2,
      title: 'Saudi Arabia Launches $2B Innovation Fund',
      intro: 'New government initiative aims to support early-stage startups across technology sectors',
      date: '6 hours ago'
    },
    {
      id: 3,
      title: 'UAE Central Bank Updates Fintech Regulations',
      intro: 'New regulatory framework provides clearer guidelines for digital payment platforms',
      date: '1 day ago'
    },
    {
      id: 4,
      title: 'HealthTech Sector Shows Strong Growth Across MENA',
      intro: 'Healthcare technology investments up 60% as region focuses on digital health solutions',
      date: '2 days ago'
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

  const renderContent = () => {
    switch (activeSection) {
      case 'portfolio-dashboard':
        return (
          <>
            {/* Portfolio Value Overview */}
            <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                <DollarSign className="w-5 h-5" />
                <span>Portfolio Value Overview</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-linkedin-light mb-2">{portfolioOverview.totalValue}</div>
                  <div className="text-gray-400 text-sm">Total Portfolio Value</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{portfolioOverview.totalVentures}</div>
                  <div className="text-gray-400 text-sm"># Ventures</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{portfolioOverview.totalFundsRaised}</div>
                  <div className="text-gray-400 text-sm">Total Funds Raised</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{portfolioOverview.totalExits}</div>
                  <div className="text-gray-400 text-sm"># of Exits</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">{portfolioOverview.totalGainFromExits}</div>
                  <div className="text-gray-400 text-sm">Total Gain (Exit Value)</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Portfolio Performance Growth */}
                <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5" />
                      <span>Portfolio Performance Growth</span>
                    </h3>
                    <div className="flex items-center space-x-2">
                      {durationOptions.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => setSelectedDuration(option.id)}
                          className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                            selectedDuration === option.id
                              ? 'bg-linkedin text-white'
                              : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="h-64 bg-linkedin-card/30 rounded-lg p-4">
                    {portfolioGrowthChartData.length > 0 ? (
                      <div className="h-full flex flex-col">
                        <div className="text-center mb-4">
                          <h4 className="text-white font-medium text-sm">Portfolio Value Growth - {selectedDuration.toUpperCase()}</h4>
                          <p className="text-gray-400 text-xs">Performance over selected time period</p>
                        </div>
                        
                        {/* Simple data visualization */}
                        <div className="flex-1 flex items-end justify-between space-x-2">
                          {portfolioGrowthChartData.map((dataPoint, index) => (
                            <div key={index} className="flex-1 flex flex-col items-center">
                              <div 
                                className="w-full bg-gradient-to-t from-linkedin to-linkedin-light rounded-t-sm transition-all hover:opacity-80"
                                style={{ 
                                  height: `${(dataPoint.value / Math.max(...portfolioGrowthChartData.map(d => d.value))) * 100}%`,
                                  minHeight: '20px'
                                }}
                                title={`${dataPoint.date}: ${dataPoint.portfolioValue} (${dataPoint.value}% of baseline)`}
                              ></div>
                              <div className="text-xs text-gray-400 mt-2 transform -rotate-45 origin-left">
                                {dataPoint.date}
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Chart legend */}
                        <div className="mt-4 flex justify-between text-xs text-gray-400">
                          <span>Start: {portfolioGrowthChartData[0]?.portfolioValue}</span>
                          <span>Current: {portfolioGrowthChartData[portfolioGrowthChartData.length - 1]?.portfolioValue}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="h-full flex items-center justify-center text-gray-500">
                        <span>No data available for {selectedDuration.toUpperCase()}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Portfolio Breakdown */}
                <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                    <PieChart className="w-5 h-5" />
                    <span>Portfolio Breakdown</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Industry Segmentation */}
                    <div>
                      <h4 className="text-lg font-semibold text-linkedin-light mb-4">Industry Segmentation</h4>
                      <div className="space-y-3">
                        {industrySegmentation.map((item, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                              <span className="text-gray-300 text-sm">{item.industry}</span>
                            </div>
                            <div className="text-right">
                              <div className="text-white font-semibold text-sm">{item.percentage}%</div>
                              <div className="text-gray-400 text-xs">{item.value}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stage Segmentation */}
                    <div>
                      <h4 className="text-lg font-semibold text-linkedin-light mb-4">Stage Segmentation</h4>
                      <div className="space-y-3">
                        {stageSegmentation.map((item, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                              <span className="text-gray-300 text-sm">{item.stage}</span>
                            </div>
                            <div className="text-right">
                              <div className="text-white font-semibold text-sm">{item.percentage}%</div>
                              <div className="text-gray-400 text-xs">{item.count} ventures</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Performance Segmentation */}
                    <div>
                      <h4 className="text-lg font-semibold text-linkedin-light mb-4">Performance Segmentation</h4>
                      <div className="space-y-3">
                        {performanceSegmentation.map((item, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                              <span className="text-gray-300 text-sm">{item.performance}</span>
                            </div>
                            <div className="text-right">
                              <div className="text-white font-semibold text-sm">{item.percentage}%</div>
                              <div className="text-gray-400 text-xs">{item.count} ventures</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="space-y-6">
                {/* Alerts */}
                <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5" />
                    <span>Alerts</span>
                  </h3>
                  
                  <div className="space-y-3">
                    {alerts.map((alert) => (
                      <div key={alert.id} className={`p-3 rounded-lg border ${getSeverityColor(alert.severity)}`}>
                        <h4 className="font-medium text-sm mb-1">{alert.title}</h4>
                        <p className="text-xs mb-2 opacity-80">{alert.description}</p>
                        <span className="text-xs opacity-60">{alert.date}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top Performers */}
                <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
                    <Star className="w-5 h-5" />
                    <span>Top Performers</span>
                  </h3>
                  
                  <div className="space-y-3">
                    {topPerformers.map((performer, index) => (
                      <div key={performer.id} className="flex items-center space-x-3 p-3 bg-linkedin-card/50 rounded-lg hover:bg-linkedin-card/70 transition-colors cursor-pointer">
                        <div className="text-2xl">{performer.logo}</div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-medium text-sm truncate">{performer.name}</h4>
                          <p className="text-gray-400 text-xs">{performer.industry}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-green-400 font-semibold text-sm">{performer.growthRate}</div>
                          <div className="text-gray-400 text-xs">{performer.currentValue}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Market Updates */}
                <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
                    <Newspaper className="w-5 h-5" />
                    <span>Market Updates</span>
                  </h3>
                  
                  <div className="space-y-4">
                    {marketUpdates.map((update) => (
                      <div key={update.id} className="p-3 bg-linkedin-card/50 rounded-lg hover:bg-linkedin-card/70 transition-colors cursor-pointer">
                        <h4 className="text-white font-medium text-sm mb-2">{update.title}</h4>
                        <p className="text-gray-300 text-xs mb-2">{update.intro}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-500 text-xs">{update.date}</span>
                          <ExternalLink className="w-3 h-3 text-gray-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case 'my-ventures-list':
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">My Ventures</h1>
              <p className="text-gray-300">All ventures you've built or invested in</p>
            </div>
            
            {/* Ventures List */}
            <div className="space-y-6">
              {venturesData.map((venture) => (
                <div key={venture.id} className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-3 hover:border-linkedin/50 transition-all">
                  {/* Company Header */}
                  <div className="flex items-start space-x-2 mb-2">
                    <img 
                      src={venture.image} 
                      alt={venture.companyName}
                      className="w-10 h-10 rounded-lg object-cover border-2 border-linkedin"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-sm font-semibold text-white">{venture.companyName}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(venture.status)}`}>
                          {venture.status}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3 text-xs text-gray-400">
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
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <div className="bg-linkedin-card/50 rounded-lg p-2">
                      <p className="text-gray-400 text-xs">Investment Amount</p>
                      <p className="text-white font-semibold text-sm">{venture.investmentAmount}</p>
                    </div>
                    <div className="bg-linkedin-card/50 rounded-lg p-2">
                      <p className="text-gray-400 text-xs">Current Value</p>
                      <p className="text-white font-semibold text-sm">{venture.currentValue}</p>
                    </div>
                    <div className="bg-linkedin-card/50 rounded-lg p-2">
                      <p className="text-gray-400 text-xs">Unrealized Gain</p>
                      <p className={`font-semibold text-sm ${getReturnColor(venture.returnMultiple)}`}>
                        {venture.unrealizedGain}
                      </p>
                    </div>
                    <div className="bg-linkedin-card/50 rounded-lg p-2">
                      <p className="text-gray-400 text-xs">Return Multiple</p>
                      <p className={`font-semibold text-sm ${getReturnColor(venture.returnMultiple)}`}>
                        {venture.returnMultiple}
                      </p>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="bg-linkedin-card/50 rounded-lg p-2 mb-2">
                    <h4 className="text-white font-semibold mb-1 text-sm">Key Metrics</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <p className="text-gray-400 text-xs">ARR</p>
                        <p className="text-white font-semibold text-sm">{venture.keyMetrics.arr}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs">Growth</p>
                        <p className="text-white font-semibold text-sm">{venture.keyMetrics.growth}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs">Users</p>
                        <p className="text-white font-semibold text-sm">{venture.keyMetrics.users}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs">Team Size</p>
                        <p className="text-white font-semibold text-sm">{venture.keyMetrics.teamSize}</p>
                      </div>
                    </div>
                  </div>

                  {/* Recent News */}
                  <div className="bg-linkedin-card/50 rounded-lg p-2 mb-2">
                    <h4 className="text-white font-semibold mb-1 text-sm">Recent News</h4>
                    <p className="text-gray-300 text-sm">{venture.recentNews}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-1">
                    <button
                      onClick={() => setSelectedVenture(venture)}
                      className="flex-1 bg-linkedin hover:bg-linkedin/80 text-white px-2 py-1 rounded-lg font-semibold transition-colors text-sm"
                    >
                      View Details
                    </button>
                    <button className="px-2 py-1 border border-linkedin-border text-gray-300 rounded-lg hover:bg-linkedin-card/50 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Section Not Found</h1>
            <p className="text-gray-300">The requested section could not be found.</p>
          </div>
        );
    }
  };

  if (selectedVenture) {
    return <VentureDetailWrapper ventureData={selectedVenture} onBack={() => setSelectedVenture(null)} />;
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'text-red-400 bg-red-500/20 border-red-500/30';
      case 'medium':
        return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'low':
        return 'text-green-400 bg-green-500/20 border-green-500/30';
      default:
        return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-linkedin-background via-linkedin-dark to-linkedin-background">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <button 
              onClick={onBack}
              className="p-2 bg-linkedin-card hover:bg-linkedin-card/70 text-white rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-white">My Ventures</h1>
              <p className="text-gray-300">Manage and track your venture portfolio</p>
            </div>
          </div>
          <button 
            onClick={onCreateNewVenture}
            className="flex items-center space-x-2 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-6 py-3 rounded-lg font-medium transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Create New Venture</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="space-y-6">
            <VenturesSidebar 
              activeSection={activeSection}
              onSectionChange={setActiveSection}
              onCreateNewVenture={onCreateNewVenture}
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyVentures;