import React from 'react';
import {
  DollarSign,
  TrendingUp,
  Users,
  BarChart3,
  Newspaper,
  Download,
  Target,
  Activity,
  Shield,
  ExternalLink
} from 'lucide-react';

interface VenturePerformanceDashboardProps {
  ventureData: any; // Replace 'any' with a more specific type if available
}

const VenturePerformanceDashboard: React.FC<VenturePerformanceDashboardProps> = ({ ventureData }) => {
  // Mock data for demonstration, replace with actual data from ventureData
  const financialHealth = {
    mrr: '$1.2M',
    burnRate: '$50K/month',
    runway: '18 months',
    cacClvRatio: '1:3'
  };

  const userGrowth = {
    totalActiveUsers: '15,000',
    userRetentionRate: '85%',
    crossStakeholderEngagement: '60%'
  };

  const transactionPerformance = {
    transactionSuccessRate: '99.8%',
    averageDealSize: '$25K',
    revenuePerUser: '$150',
    platformUtilization: '75%'
  };

  const marketPosition = {
    marketShare: '5%',
    netPromoterScore: '45',
    platformUptime: '99.9%'
  };

  const relevantNews = [
    {
      id: 1,
      title: `${ventureData.companyName} Secures Strategic Partnership`,
      subtitle: 'Partners with a leading regional player to expand market reach.',
      date: '2 days ago'
    },
    {
      id: 2,
      title: `Industry Report Highlights ${ventureData.industry} Growth`,
      subtitle: 'New report indicates significant growth opportunities in the sector.',
      date: '1 week ago'
    },
    {
      id: 3,
      title: `${ventureData.companyName} Featured in Tech Magazine`,
      subtitle: 'Recognized for innovative solutions in the latest tech publication.',
      date: '3 weeks ago'
    }
  ];

  const handleExportReport = () => {
    alert('Exporting report for ' + ventureData.companyName);
    // Implement actual PDF export logic here
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-4">Venture Performance Dashboard</h2>
      <p className="text-gray-300 mb-6">Real-time venture analytics interface for monitoring operational performance and growth metrics.</p>

      {/* Screen Tabs */}
      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-4">
        <div className="flex items-center space-x-2 overflow-x-auto">
          <button className="px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap bg-gradient-to-r from-linkedin to-linkedin-light text-white">
            Financial Health
          </button>
          <button className="px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70">
            User Growth
          </button>
          <button className="px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70">
            Transaction Performance
          </button>
          <button className="px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70">
            Market Position
          </button>
        </div>
      </div>

      {/* Financial Health */}
      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
          <DollarSign className="w-5 h-5 text-linkedin-light" />
          <span>Financial Health</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-linkedin-card/50 rounded-lg p-4">
              <p className="text-gray-400 text-sm">Monthly Recurring Revenue</p>
              <p className="text-white font-semibold text-lg">{financialHealth.mrr}</p>
            </div>
            <div className="bg-linkedin-card/50 rounded-lg p-4">
              <p className="text-gray-400 text-sm">Burn Rate</p>
              <p className="text-white font-semibold text-lg">{financialHealth.burnRate}</p>
            </div>
            <div className="bg-linkedin-card/50 rounded-lg p-4">
              <p className="text-gray-400 text-sm">Runway</p>
              <p className="text-white font-semibold text-lg">{financialHealth.runway}</p>
            </div>
            <div className="bg-linkedin-card/50 rounded-lg p-4">
              <p className="text-gray-400 text-sm">CAC/CLV Ratio</p>
              <p className="text-white font-semibold text-lg">{financialHealth.cacClvRatio}</p>
            </div>
          </div>
          <div className="h-64 flex items-center justify-center text-gray-500 bg-linkedin-card/50 rounded-lg">
            [Revenue growth trend (6-month view) Chart]
          </div>
        </div>
      </div>

      {/* User Growth */}
      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
          <Users className="w-5 h-5 text-linkedin-light" />
          <span>User Growth</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-linkedin-card/50 rounded-lg p-4">
              <p className="text-gray-400 text-sm">Total Active Users</p>
              <p className="text-white font-semibold text-lg">{userGrowth.totalActiveUsers}</p>
            </div>
            <div className="bg-linkedin-card/50 rounded-lg p-4">
              <p className="text-gray-400 text-sm">User Retention Rate</p>
              <p className="text-white font-semibold text-lg">{userGrowth.userRetentionRate}</p>
            </div>
            <div className="bg-linkedin-card/50 rounded-lg p-4">
              <p className="text-gray-400 text-sm">Cross-Stakeholder Engagement</p>
              <p className="text-white font-semibold text-lg">{userGrowth.crossStakeholderEngagement}</p>
            </div>
          </div>
          <div className="h-64 flex items-center justify-center text-gray-500 bg-linkedin-card/50 rounded-lg">
            [Monthly user acquisition by type Chart]
          </div>
        </div>
      </div>

      {/* Transaction Performance */}
      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
          <Activity className="w-5 h-5 text-linkedin-light" />
          <span>Transaction Performance</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-linkedin-card/50 rounded-lg p-4">
              <p className="text-gray-400 text-sm">Transaction Success Rate</p>
              <p className="text-white font-semibold text-lg">{transactionPerformance.transactionSuccessRate}</p>
            </div>
            <div className="bg-linkedin-card/50 rounded-lg p-4">
              <p className="text-gray-400 text-sm">Average Deal Size</p>
              <p className="text-white font-semibold text-lg">{transactionPerformance.averageDealSize}</p>
            </div>
            <div className="bg-linkedin-card/50 rounded-lg p-4">
              <p className="text-gray-400 text-sm">Revenue per User</p>
              <p className="text-white font-semibold text-lg">{transactionPerformance.revenuePerUser}</p>
            </div>
            <div className="bg-linkedin-card/50 rounded-lg p-4">
              <p className="text-gray-400 text-sm">Platform Utilization</p>
              <p className="text-white font-semibold text-lg">{transactionPerformance.platformUtilization}</p>
            </div>
          </div>
          <div className="h-64 flex items-center justify-center text-gray-500 bg-linkedin-card/50 rounded-lg">
            [Monthly transaction count and value Chart]
          </div>
        </div>
      </div>

      {/* Market Position */}
      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
          <Target className="w-5 h-5 text-linkedin-light" />
          <span>Market Position</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-linkedin-card/50 rounded-lg p-4">
              <p className="text-gray-400 text-sm">Market Share</p>
              <p className="text-white font-semibold text-lg">{marketPosition.marketShare}</p>
            </div>
            <div className="bg-linkedin-card/50 rounded-lg p-4">
              <p className="text-gray-400 text-sm">Net Promoter Score</p>
              <p className="text-white font-semibold text-lg">{marketPosition.netPromoterScore}</p>
            </div>
            <div className="bg-linkedin-card/50 rounded-lg p-4">
              <p className="text-gray-400 text-sm">Platform Uptime</p>
              <p className="text-white font-semibold text-lg">{marketPosition.platformUptime}</p>
            </div>
          </div>
          <div className="h-64 flex items-center justify-center text-gray-500 bg-linkedin-card/50 rounded-lg">
            [Competitive positioning vs key players Chart]
          </div>
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
                <span className="text-gray-500 text-xs">{news.date}</span>
                <ExternalLink className="w-3 h-3 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Export Report Button */}
      <div className="flex justify-end">
        <button
          onClick={handleExportReport}
          className="flex items-center space-x-2 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-6 py-3 rounded-lg font-medium transition-all"
        >
          <Download className="w-4 h-4" />
          <span>Export Report</span>
        </button>
      </div>
    </div>
  );
};

export default VenturePerformanceDashboard;