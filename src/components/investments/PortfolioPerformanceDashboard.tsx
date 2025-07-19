import React, { useState } from 'react';
import { useEffect } from 'react';
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Building2, 
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
  Newspaper
} from 'lucide-react';

interface PortfolioPerformanceDashboardProps {
  onSectionChange: (section: string) => void;
}

const PortfolioPerformanceDashboard: React.FC<PortfolioPerformanceDashboardProps> = ({ onSectionChange }) => {
  const [selectedDuration, setSelectedDuration] = useState('1y');
  const [portfolioGrowthChartData, setPortfolioGrowthChartData] = useState<
    { date: string; value: number; portfolioValue: string }[]
  >([]);

  const durationOptions = [
    { id: '1m', label: '1M' },
    { id: '3m', label: '3M' },
    { id: '6m', label: '6M' },
    { id: '1y', label: '1Y' },
    { id: 'all', label: 'All' }
  ];

  // Generate portfolio growth data based on selected duration
  useEffect(() => {
    let data: { date: string; value: number; portfolioValue: string }[] = [];

    switch (selectedDuration) {
      case '1m':
        data = [
          { date: 'Nov 15', value: 100, portfolioValue: '$3.6M' },
          { date: 'Nov 22', value: 102, portfolioValue: '$3.67M' },
          { date: 'Nov 29', value: 105, portfolioValue: '$3.78M' },
          { date: 'Dec 6', value: 103, portfolioValue: '$3.71M' },
          { date: 'Dec 13', value: 106, portfolioValue: '$3.82M' },
        ];
        break;
      case '3m':
        data = [
          { date: 'Oct 1', value: 95, portfolioValue: '$3.42M' },
          { date: 'Oct 15', value: 98, portfolioValue: '$3.53M' },
          { date: 'Nov 1', value: 100, portfolioValue: '$3.6M' },
          { date: 'Nov 15', value: 105, portfolioValue: '$3.78M' },
          { date: 'Dec 1', value: 108, portfolioValue: '$3.89M' },
        ];
        break;
      case '6m':
        data = [
          { date: 'Jul 1', value: 85, portfolioValue: '$3.06M' },
          { date: 'Aug 1', value: 88, portfolioValue: '$3.17M' },
          { date: 'Sep 1', value: 92, portfolioValue: '$3.31M' },
          { date: 'Oct 1', value: 95, portfolioValue: '$3.42M' },
          { date: 'Nov 1', value: 100, portfolioValue: '$3.6M' },
          { date: 'Dec 1', value: 106, portfolioValue: '$3.82M' },
        ];
        break;
      case '1y':
        data = [
          { date: 'Jan 2024', value: 70, portfolioValue: '$2.52M' },
          { date: 'Mar 2024', value: 75, portfolioValue: '$2.7M' },
          { date: 'May 2024', value: 80, portfolioValue: '$2.88M' },
          { date: 'Jul 2024', value: 85, portfolioValue: '$3.06M' },
          { date: 'Sep 2024', value: 92, portfolioValue: '$3.31M' },
          { date: 'Nov 2024', value: 100, portfolioValue: '$3.6M' },
          { date: 'Dec 2024', value: 106, portfolioValue: '$3.82M' },
        ];
        break;
      case 'all':
        data = [
          { date: 'Jan 2023', value: 60, portfolioValue: '$2.16M' },
          { date: 'Apr 2023', value: 65, portfolioValue: '$2.34M' },
          { date: 'Jul 2023', value: 70, portfolioValue: '$2.52M' },
          { date: 'Oct 2023', value: 75, portfolioValue: '$2.7M' },
          { date: 'Jan 2024', value: 80, portfolioValue: '$2.88M' },
          { date: 'Apr 2024', value: 85, portfolioValue: '$3.06M' },
          { date: 'Jul 2024', value: 90, portfolioValue: '$3.24M' },
          { date: 'Oct 2024', value: 95, portfolioValue: '$3.42M' },
          { date: 'Dec 2024', value: 106, portfolioValue: '$3.82M' },
        ];
        break;
      default:
        data = [];
    }
    setPortfolioGrowthChartData(data);
  }, [selectedDuration]);

  const portfolioOverview = {
    totalValue: '$3.8M',
    totalInvestments: 12,
    totalInvested: '$2.5M',
    totalExits: 3,
    totalGainFromExits: '$450K',
    totalReturn: '52%'
  };

  const industrySegmentation = [
    { industry: 'Fintech', percentage: 28.9, value: '$1.1M', color: 'bg-blue-500' },
    { industry: 'HealthTech', percentage: 21.1, value: '$800K', color: 'bg-green-500' },
    { industry: 'AgriTech', percentage: 18.4, value: '$700K', color: 'bg-yellow-500' },
    { industry: 'EdTech', percentage: 15.8, value: '$600K', color: 'bg-purple-500' },
    { industry: 'CleanTech', percentage: 13.2, value: '$500K', color: 'bg-pink-500' },
    { industry: 'RetailTech', percentage: 2.6, value: '$100K', color: 'bg-gray-500' }
  ];

  const stageSegmentation = [
    { stage: 'Seed', percentage: 31.6, count: 5, color: 'bg-orange-500' },
    { stage: 'Series A', percentage: 47.4, count: 4, color: 'bg-blue-500' },
    { stage: 'Series B', percentage: 15.8, count: 2, color: 'bg-green-500' },
    { stage: 'Exited', percentage: 5.3, count: 1, color: 'bg-gray-500' }
  ];

  const performanceSegmentation = [
    { performance: 'High Performers', percentage: 33.3, count: 4, color: 'bg-green-500' },
    { performance: 'Stable', percentage: 50.0, count: 6, color: 'bg-blue-500' },
    { performance: 'Underperforming', percentage: 16.7, count: 2, color: 'bg-red-500' }
  ];

  const alerts = [
    {
      id: 1,
      title: 'AgriTech Innovations: 30% revenue decline',
      description: 'Quarterly revenue dropped significantly due to seasonal factors',
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
      title: 'HealthFlow Solutions: New partnership announced',
      description: 'Strategic partnership with major healthcare provider',
      severity: 'low',
      date: '3 days ago'
    }
  ];

  const topPerformers = [
    {
      id: 1,
      name: 'AgriTech Innovations',
      logo: '🌱',
      growthRate: '+180%',
      currentValue: '$372K',
      industry: 'AgriTech'
    },
    {
      id: 2,
      name: 'HealthFlow Solutions',
      logo: '🏥',
      growthRate: '+120%',
      currentValue: '$180K',
      industry: 'HealthTech'
    },
    {
      id: 3,
      name: 'EduSpark',
      logo: '📚',
      growthRate: '+150%',
      currentValue: '$150K',
      industry: 'EdTech'
    },
    {
      id: 4,
      name: 'CleanEnergy MENA',
      logo: '☀️',
      growthRate: '+140%',
      currentValue: '$420K',
      industry: 'CleanTech'
    },
    {
      id: 5,
      name: 'LogiChain',
      logo: '🔗',
      growthRate: '+95%',
      currentValue: '$285K',
      industry: 'Logistics'
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
      title: 'AgriTech Sector Shows Strong Growth Across MENA',
      intro: 'Agricultural technology investments up 60% as region focuses on food security',
      date: '2 days ago'
    }
  ];

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
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Portfolio Summary Dashboard</h1>
        <p className="text-gray-300">Real-time portfolio performance tracking with comprehensive metrics and analytics</p>
      </div>

      {/* Portfolio Value Overview */}
      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
          <DollarSign className="w-5 h-5" />
          <span>Portfolio Value Overview</span>
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-linkedin-light mb-2">{portfolioOverview.totalValue}</div>
            <div className="text-gray-400 text-sm">Total Portfolio Value</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">{portfolioOverview.totalInvestments}</div>
            <div className="text-gray-400 text-sm"># Investments</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">{portfolioOverview.totalInvested}</div>
            <div className="text-gray-400 text-sm">Total Invested</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">{portfolioOverview.totalExits}</div>
            <div className="text-gray-400 text-sm"># of Exits</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">{portfolioOverview.totalGainFromExits}</div>
            <div className="text-gray-400 text-sm">Total Gain (Exit Value)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">{portfolioOverview.totalReturn}</div>
            <div className="text-gray-400 text-sm">Total Return</div>
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
                        <div className="text-gray-400 text-xs">{item.count} companies</div>
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
                        <div className="text-gray-400 text-xs">{item.count} companies</div>
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
    </div>
  );
};

export default PortfolioPerformanceDashboard;