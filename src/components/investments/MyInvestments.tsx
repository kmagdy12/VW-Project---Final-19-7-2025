import React, { useEffect, useState } from 'react';
import InvestmentPipeline from './InvestmentPipeline';
import PortfolioPerformanceDashboard from './PortfolioPerformanceDashboard'; 
import VentureOverview from './VentureOverview';
import VentureFunding from './VentureFunding';
import VenturePerformance from './VenturePerformance';
import VentureListing from './VentureListing';
import PortfolioManagementWrapper from './PortfolioManagementWrapper';
import SavedOpportunities from '../trading/SavedOpportunities';
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Building2, 
  MapPin, 
  Calendar, 
  Users, 
  BarChart3,
  Target,
  Award,
  Eye,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Briefcase,
  Star,
  PieChart,
  Newspaper,
  Wallet,
  Clock,
  ExternalLink,
  Globe,
  TrendingDown as TrendingDownIcon
} from 'lucide-react';

interface MyInvestmentsProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isSocialAICompanionOpen?: boolean;
  setIsSocialAICompanionOpen?: (open: boolean) => void;
  selectedVentureId?: number | null;
  setSelectedVentureId?: (id: number | null) => void;
  activeSubSection?: string;
  setActiveSubSection?: (section: string) => void;
}

const MyInvestments: React.FC<MyInvestmentsProps> = ({ 
  activeSection, 
  onSectionChange,
  isSocialAICompanionOpen,
  setIsSocialAICompanionOpen,
  selectedVentureId,
  setSelectedVentureId,
  activeSubSection,
  setActiveSubSection
}) => {
  // Scroll to top whenever the active section changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);
  
  // Mock data for portfolio summary
  const portfolioSummaryData = {
    totalInvested: '$2.5M',
    totalValue: '$3.8M',
    unrealizedGains: '$1.3M',
    realizedGains: '$450K',
    totalReturn: '52%',
    numberOfInvestments: 12,
    activeInvestments: 9,
    exitedInvestments: 3,
    averageInvestment: '$208K',
    topPerformer: 'AgriTech Innovations',
    topPerformerReturn: '180%',
    bottomPerformer: 'RetailTech Pro',
    bottomPerformerReturn: '-100%',
    overallPortfolioReturnIRR: '28.5%',
    overallPortfolioReturnMultiple: '1.52x',
    performanceVsBenchmarks: '+12.3% vs MENA Index',
    timeWeightedPerformanceTrends: '+15.2% YTD',
    cashVsInvestedCapital: {
      cash: '$500K',
      invested: '$2.5M',
      cashPercentage: 16.7,
      investedPercentage: 83.3
    },
    assetAllocation: {
      byStage: [
        { stage: 'Seed', count: 5, value: '$1.2M', percentage: 31.6 },
        { stage: 'Series A', count: 4, value: '$1.8M', percentage: 47.4 },
        { stage: 'Series B', count: 2, value: '$600K', percentage: 15.8 },
        { stage: 'Exited', count: 1, value: '$200K', percentage: 5.3 }
      ],
      bySector: [
        { sector: 'Fintech', count: 3, value: '$1.1M', percentage: 28.9 },
        { sector: 'HealthTech', count: 2, value: '$800K', percentage: 21.1 },
        { sector: 'AgriTech', count: 2, value: '$700K', percentage: 18.4 },
        { sector: 'EdTech', count: 2, value: '$600K', percentage: 15.8 },
        { sector: 'CleanTech', count: 2, value: '$500K', percentage: 13.2 },
        { sector: 'RetailTech', count: 1, value: '$100K', percentage: 2.6 }
      ],
      byGeography: [
        { country: 'UAE', count: 4, value: '$1.5M', percentage: 39.5 },
        { country: 'Saudi Arabia', count: 3, value: '$1.0M', percentage: 26.3 },
        { country: 'Egypt', count: 2, value: '$700K', percentage: 18.4 },
        { country: 'Qatar', count: 2, value: '$500K', percentage: 13.2 },
        { country: 'Kuwait', count: 1, value: '$100K', percentage: 2.6 }
      ]
    },
    recentTransactions: [
      { date: '2024-12-10', type: 'Investment', company: 'AgriTech Innovations', amount: '+$250K' },
      { date: '2024-12-05', type: 'Follow-on', company: 'HealthFlow Solutions', amount: '+$150K' },
      { date: '2024-11-28', type: 'Exit', company: 'RetailTech Pro', amount: '-$200K' },
      { date: '2024-11-15', type: 'Investment', company: 'CleanEnergy MENA', amount: '+$300K' }
    ]
  };

  const portfolioMarketNews = [
    {
      id: 1,
      title: 'MENA Fintech Investment Reaches Record High in Q4 2024',
      subtitle: 'Regional fintech startups raised $1.2B in the fourth quarter, marking a 45% increase from the previous year',
      date: '2 hours ago'
    },
    {
      id: 2,
      title: 'Saudi Arabia Launches $2B Innovation Fund',
      subtitle: 'New government initiative aims to support early-stage startups across technology sectors',
      date: '6 hours ago'
    },
    {
      id: 3,
      title: 'UAE Central Bank Updates Fintech Regulations',
      subtitle: 'New regulatory framework provides clearer guidelines for digital payment platforms and cryptocurrency exchanges',
      date: '1 day ago'
    },
    {
      id: 4,
      title: 'AgriTech Sector Shows Strong Growth Across MENA',
      subtitle: 'Agricultural technology investments up 60% as region focuses on food security and sustainable farming',
      date: '2 days ago'
    },
    {
      id: 5,
      title: 'HealthTech Adoption Accelerates Post-Pandemic',
      subtitle: 'Digital health solutions see increased adoption rates across Gulf countries, driving investor interest',
      date: '3 days ago'
    }
  ];

  const portfolioPerformanceMetrics = [
    { label: 'Total Invested', value: portfolioSummaryData.totalInvested, icon: DollarSign, trend: null },
    { label: 'Current Portfolio Value', value: portfolioSummaryData.totalValue, icon: TrendingUp, trend: 'up' },
    { label: 'Unrealized Gains', value: portfolioSummaryData.unrealizedGains, icon: ArrowUpRight, trend: 'up' },
    { label: 'Realized Gains', value: portfolioSummaryData.realizedGains, icon: Target, trend: 'up' },
    { label: 'Total Return', value: portfolioSummaryData.totalReturn, icon: BarChart3, trend: 'up' },
    { label: 'Number of Investments', value: portfolioSummaryData.numberOfInvestments.toString(), icon: Briefcase, trend: null }
  ];

  const portfolioBreakdown = [
    { category: 'Active Investments', value: portfolioSummaryData.activeInvestments, total: portfolioSummaryData.numberOfInvestments },
    { category: 'Exited Investments', value: portfolioSummaryData.exitedInvestments, total: portfolioSummaryData.numberOfInvestments }
  ];

  // Mock data for portfolio exploration
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
        teamSize: '15',
        dailyActiveUsers: '450',
        monthlyActiveUsers: '750',
        averageSessionDuration: '12 min',
        featureAdoptionRate: '78%',
        platformUptime: '99.8%',
        averageResponseTime: '120ms',
        transactionSuccessRate: '99.5%',
        customerSupportResolutionTime: '2.5 hours',
        customerAcquisitionCost: '$45',
        customerLifetimeValue: '$380',
        churnRate: '5%',
        customerSatisfactionScore: '4.2/5'
      },
      recentNews: 'Secured major partnership with regional agricultural cooperative',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100',
      founders: [
        {
          id: 1,
          name: 'Ahmed Al-Rashid',
          title: 'CEO & Co-founder',
          image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100',
          profileLink: '#'
        },
        {
          id: 2,
          name: 'Sarah Khalil',
          title: 'CTO & Co-founder',
          image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100',
          profileLink: '#'
        }
      ],
      recentActivity: [
        {
          id: 1,
          title: 'Series A Funding Round Completed',
          subtitle: 'Successfully raised $2.5M in Series A funding led by MENA Ventures',
          date: '2 weeks ago'
        },
        {
          id: 2,
          title: 'New Partnership with Agricultural Cooperative',
          subtitle: 'Signed strategic partnership with largest agricultural cooperative in UAE',
          date: '1 month ago'
        },
        {
          id: 3,
          title: 'Product Launch: AI-Powered Irrigation System',
          subtitle: 'Launched new automated irrigation control system with 95% accuracy',
          date: '2 months ago'
        }
      ],
      fundingDetails: {
        totalRaised: '$3.95M',
        currentValuation: '$15M',
        fundraisingStage: 'Series A',
        lastRound: 'Series A - $2.5M',
        fundraisingStatus: 'Active',
        currentRound: 'Series B - $5M Target',
        myInvestment: {
          investmentAmount: '$250K',
          round: 'Seed',
          investmentDate: '2023-06-15',
          currentOwnership: '3.1%',
          currentValue: '$372K'
        },
        fundingHistory: [
          {
            date: '2024-01-15',
            investor: 'MENA Ventures',
            leadInvestor: true,
            round: 'Series A',
            amount: '$2.5M'
          },
          {
            date: '2023-06-15',
            investor: 'You',
            leadInvestor: false,
            round: 'Seed',
            amount: '$250K'
          },
          {
            date: '2023-06-15',
            investor: 'Angel Investor Group',
            leadInvestor: true,
            round: 'Seed',
            amount: '$1.2M'
          }
        ]
      },
      performanceMetrics: {
        financial: {
          revenue: {
            mrr: '$15K',
            arr: '$180K',
            revenueGrowth: '25%',
            arpu: '$240'
          },
          profitability: {
            grossMargin: '68%',
            ebitda: '-$45K',
            cashBurnRate: '$12K/month'
          }
        },
        business: {
          customer: {
            totalActiveCustomers: '750',
            newCustomerAcquisitions: '85/month',
            customerGrowthRate: '20%',
            cac: '$45',
            cltv: '$380',
            churnRate: '5%',
            customerSatisfactionScore: '4.2/5'
          },
          product: {
            dailyActiveUsers: '450',
            monthlyActiveUsers: '750',
            averageSessionDuration: '12 min',
            featureAdoptionRate: '78%'
          }
        },
        market: {
          marketShare: '2.1%',
          brandAwareness: '15%',
          marketPenetrationRate: '8.5%'
        }
      },
      listingDetails: {
        numberOfShares: '1000',
        askingPrice: '$25.00',
        minimumPrice: '$22.50',
        saleType: 'all-or-nothing',
        priceType: 'fixed',
        saleTimeline: '30 days',
        minimumPurchase: '250 shares',
        preferredBuyerType: 'Institutional Investor',
        infoSharingLevel: 'Standard',
        confidentialityPreference: 'NDA Required'
      }
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
        teamSize: '20',
        dailyActiveUsers: '350',
        monthlyActiveUsers: '1200',
        averageSessionDuration: '8 min',
        featureAdoptionRate: '65%'
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
      case 'investment-pipeline':
        return <InvestmentPipeline 
          onSectionChange={onSectionChange} 
        />;
      
      case 'portfolio-summary':
        return <PortfolioPerformanceDashboard 
          onSectionChange={onSectionChange} 
        />;

      case 'venture-overview':
        return <VentureOverview 
          onSectionChange={onSectionChange} 
          selectedVentureId={selectedVentureId || 1}
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
      
      case 'explore-portfolio':
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Explore Portfolio</h1>
              <p className="text-gray-300">Detailed view of your portfolio companies and investments</p>
            </div>
            
            {/* Portfolio Companies */}
            <div className="space-y-6">
              {venturesData.map((investment) => (
                <div key={investment.id} className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6 hover:border-linkedin/50 transition-all">
                  {/* Company Header */}
                  <div className="flex items-start space-x-4 mb-4">
                    <img 
                      src={investment.image} 
                      alt={investment.companyName}
                      className="w-16 h-16 rounded-lg object-cover border-2 border-linkedin"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white">{investment.companyName}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(investment.status)}`}>
                          {investment.status}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Building2 className="w-4 h-4" />
                          <span>{investment.industry}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{investment.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{investment.stage}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Investment Details */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-linkedin-card/50 rounded-lg p-3">
                      <p className="text-gray-400 text-xs mb-1">Investment Amount</p>
                      <p className="text-white font-semibold">{investment.investmentAmount}</p>
                    </div>
                    <div className="bg-linkedin-card/50 rounded-lg p-3">
                      <p className="text-gray-400 text-xs mb-1">Current Value</p>
                      <p className="text-white font-semibold">{investment.currentValue}</p>
                    </div>
                    <div className="bg-linkedin-card/50 rounded-lg p-3">
                      <p className="text-gray-400 text-xs mb-1">Unrealized Gain</p>
                      <p className={`font-semibold ${getReturnColor(investment.returnMultiple)}`}>
                        {investment.unrealizedGain}
                      </p>
                    </div>
                    <div className="bg-linkedin-card/50 rounded-lg p-3">
                      <p className="text-gray-400 text-xs mb-1">Return Multiple</p>
                      <p className={`font-semibold ${getReturnColor(investment.returnMultiple)}`}>
                        {investment.returnMultiple}
                      </p>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="bg-linkedin-card/50 rounded-lg p-4 mb-4">
                    <h4 className="text-white font-semibold mb-3">Key Metrics</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-gray-400 text-xs">ARR</p>
                        <p className="text-white font-semibold">{investment.keyMetrics.arr}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs">Growth</p>
                        <p className="text-white font-semibold">{investment.keyMetrics.growth}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs">Users</p>
                        <p className="text-white font-semibold">{investment.keyMetrics.users}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs">Team Size</p>
                        <p className="text-white font-semibold">{investment.keyMetrics.teamSize}</p>
                      </div>
                    </div>
                  </div>

                  {/* Recent News */}
                  <div className="bg-linkedin-card/50 rounded-lg p-4 mb-4">
                    <h4 className="text-white font-semibold mb-2">Recent News</h4>
                    <p className="text-gray-300 text-sm">{investment.recentNews}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => {
                        setSelectedVentureId(investment.id);
                        setActiveSubSection('venture-overview');
                        onSectionChange('portfolio-management');
                      }}
                      className="flex-1 bg-linkedin hover:bg-linkedin/80 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                    >
                      View Details
                    </button>
                    <button className="px-4 py-2 border border-linkedin-border text-gray-300 rounded-lg hover:bg-linkedin-card/50 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'selling-venture-listing':
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Selling (Venture Listing)</h1>
              <p className="text-gray-300">Select a venture from your portfolio to manage its listing for secondary market sales</p>
            </div>
            
            {/* Ventures List for Selling */}
            <div className="space-y-6">
              {venturesData.filter(venture => venture.status === 'Active').map((venture) => (
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
                      onClick={() => onSectionChange('venture-listing')}
                      className="flex-1 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-4 py-2 rounded-lg font-semibold transition-all"
                    >
                      Manage Listing
                    </button>
                    <button 
                      onClick={() => onSectionChange('venture-overview')}
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
        
      case 'portfolio-management':
        console.log('MyInvestments - portfolio-management case with:', {
          activeSubSection,
          selectedVentureId,
          venturesDataLength: venturesData.length
        });
        return <PortfolioManagementWrapper 
          onSectionChange={onSectionChange} 
          selectedVentureId={selectedVentureId}
          onVentureSelect={setSelectedVentureId}
          activeSubSection={activeSubSection}
          setActiveSubSection={setActiveSubSection}
          venturesData={venturesData}
        />;
        
      case 'saved-investment-opportunities':
        return (
          <SavedOpportunities onSectionChange={onSectionChange} />
        );
        
      default:
        return <PortfolioPerformanceDashboard 
          onSectionChange={onSectionChange} 
        />;
    }
  };

  return (
    <div className="space-y-6">
      {renderContent()}
    </div>
  );
};

export default MyInvestments;