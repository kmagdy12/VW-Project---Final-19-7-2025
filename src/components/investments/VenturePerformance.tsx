import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign,
  ArrowLeft,
  Activity,
  Target,
  Globe,
  Award
} from 'lucide-react';

interface VenturePerformanceProps {
  onSectionChange: (section: string) => void;
  selectedVentureId?: number; // Passed from PortfolioManagement
  venturesData?: any[];
}

const VenturePerformance: React.FC<VenturePerformanceProps> = ({ 
  onSectionChange, 
  selectedVentureId,
  venturesData = []
}) => {
  const [activePerformanceTab, setActivePerformanceTab] = useState('financial');

  // Find the selected venture from venturesData
  const selectedVenture = venturesData.find(v => v.id === selectedVentureId) || venturesData[0] || {
    id: 1,
    companyName: 'Default Company',
    performanceMetrics: {
      financial: {
        revenue: {
          mrr: '$0',
          arr: '$0',
          revenueGrowth: '0%',
          arpu: '$0'
        },
        profitability: {
          grossMargin: '0%',
          ebitda: '$0',
          cashBurnRate: '$0/month'
        }
      },
      business: {
        customer: {
          totalActiveCustomers: '0',
          newCustomerAcquisitions: '0/month',
          customerGrowthRate: '0%',
          cac: '$0',
          cltv: '$0',
          churnRate: '0%',
          customerSatisfactionScore: '0/5'
        },
        product: {
          dailyActiveUsers: '0',
          monthlyActiveUsers: '0',
          averageSessionDuration: '0 min',
          featureAdoptionRate: '0%'
        }
      },
      market: {
        marketShare: '0%',
        brandAwareness: '0%',
        marketPenetrationRate: '0%'
      }
    }
  };

  const performanceTabs = [
    { id: 'financial', label: 'Financial' },
    { id: 'business', label: 'Business' },
    { id: 'market', label: 'Market' }
  ];

  // Get performance metrics from selected venture
  const financialMetrics = selectedVenture.performanceMetrics?.financial || {};
  const businessMetrics = selectedVenture.performanceMetrics?.business || {};
  const marketMetrics = selectedVenture.performanceMetrics?.market || {};
  const operationalMetrics = selectedVenture.performanceMetrics?.business?.operational || {};

  const renderFinancialPerformance = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Revenue Metrics */}
        <div className="bg-linkedin-card/50 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-linkedin-light mb-4">Revenue Metrics</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">{financialMetrics.revenue?.mrr || '$0'}</div>
              <div className="text-gray-400 text-sm">MRR</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">{financialMetrics.revenue?.arr || '$0'}</div>
              <div className="text-gray-400 text-sm">ARR</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">{financialMetrics.revenue?.revenueGrowth || '0%'}</div>
              <div className="text-gray-400 text-sm">Revenue Growth %</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">{financialMetrics.revenue?.arpu || '$0'}</div>
              <div className="text-gray-400 text-sm">ARPU</div>
            </div>
          </div>
        </div>

        {/* Profitability & Cash Flow */}
        <div className="bg-linkedin-card/50 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-linkedin-light mb-4">Profitability & Cash Flow</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Gross Margin</span>
              <span className="text-white font-semibold">{financialMetrics.profitability?.grossMargin || '0%'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">EBITDA</span>
              <span className="text-red-400 font-semibold">{financialMetrics.profitability?.ebitda || '$0'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Cash Burn Rate</span>
              <span className="text-yellow-400 font-semibold">{financialMetrics.profitability?.cashBurnRate || '$0/month'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBusinessPerformance = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Customer Analytics */}
        <div className="bg-linkedin-card/50 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-linkedin-light mb-4">Customer Analytics</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm">Total Active Customers</span>
              <span className="text-white font-semibold">{businessMetrics.customer?.totalActiveCustomers || '0'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm">New Customer Acquisitions</span>
              <span className="text-white font-semibold">{businessMetrics.customer?.newCustomerAcquisitions || '0/month'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm">Customer Growth Rate</span>
              <span className="text-green-400 font-semibold">{businessMetrics.customer?.customerGrowthRate || '0%'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm">CAC</span>
              <span className="text-white font-semibold">{businessMetrics.customer?.cac || '$0'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm">CLTV</span>
              <span className="text-white font-semibold">{businessMetrics.customer?.cltv || '$0'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm">Churn Rate</span>
              <span className="text-yellow-400 font-semibold">{businessMetrics.customer?.churnRate || '0%'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm">Customer Satisfaction Score</span>
              <span className="text-green-400 font-semibold">{businessMetrics.customer?.customerSatisfactionScore || '0/5'}</span>
            </div>
          </div>
        </div>

        {/* Product Usage */}
        <div className="bg-linkedin-card/50 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-linkedin-light mb-4">Product Usage</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm">Daily Active Users</span>
              <span className="text-white font-semibold">{businessMetrics.product?.dailyActiveUsers || '0'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm">Monthly Active Users</span>
              <span className="text-white font-semibold">{businessMetrics.product?.monthlyActiveUsers || '0'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm">Average Session Duration</span>
              <span className="text-white font-semibold">{businessMetrics.product?.averageSessionDuration || '0 min'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm">Feature Adoption Rate</span>
              <span className="text-green-400 font-semibold">{businessMetrics.product?.featureAdoptionRate || '0%'}</span>
            </div>
          </div>
        </div>

        {/* Operational Efficiency */}
        <div className="bg-linkedin-card/50 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-linkedin-light mb-4">Operational Efficiency</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm">Platform Uptime</span>
              <span className="text-green-400 font-semibold">{businessMetrics.operational?.platformUptime || '99.9%'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm">Average Response Time</span>
              <span className="text-green-400 font-semibold">{businessMetrics.operational?.averageResponseTime || '< 200ms'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm">Transaction Success Rate</span>
              <span className="text-green-400 font-semibold">{businessMetrics.operational?.transactionSuccessRate || '99.9%'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm">Customer Support Resolution Time</span>
              <span className="text-white font-semibold">{businessMetrics.operational?.customerSupportResolutionTime || '< 24h'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMarketPerformance = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Market Metrics */}
        <div className="bg-linkedin-card/50 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-linkedin-light mb-4">Market Metrics</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Market Share</span>
              <span className="text-white font-semibold">{marketMetrics.market?.marketShare || '0%'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Brand Awareness %</span>
              <span className="text-white font-semibold">{marketMetrics.market?.brandAwareness || '0%'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Market Penetration Rate</span>
              <span className="text-white font-semibold">{marketMetrics.market?.marketPenetrationRate || '0%'}</span>
            </div>
          </div>
        </div>

        {/* Competitive Analysis */}
        <div className="bg-linkedin-card/50 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-linkedin-light mb-4">Competitive Analysis</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Competitive Position</span>
              <span className="text-green-400 font-semibold">{marketMetrics.competitive?.competitivePosition || 'Strong'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Feature Differentiation</span>
              <span className="text-green-400 font-semibold">{marketMetrics.competitive?.featureDifferentiation || 'High'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPerformanceContent = () => {
    switch (activePerformanceTab) {
      case 'financial':
        return renderFinancialPerformance();
      case 'business':
        return renderBusinessPerformance();
      case 'market':
        return renderMarketPerformance();
      default:
        return renderFinancialPerformance();
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Venture Performance</h1>
        <p className="text-gray-300">Performance analytics for {selectedVenture.companyName}</p>
      </div>
        
      {/* Performance Tabs */}
      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
              <BarChart3 className="w-5 h-5" />
              <span>Performance Analytics</span>
            </h3>
            
            <div className="flex items-center space-x-2 mb-6">
              {performanceTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActivePerformanceTab(tab.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activePerformanceTab === tab.id
                      ? 'bg-gradient-to-r from-linkedin to-linkedin-light text-white'
                      : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {renderPerformanceContent()}
          </div>
        </div>
  );
};

export default VenturePerformance;