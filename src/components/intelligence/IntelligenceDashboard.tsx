import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  Globe, 
  Building2, 
  Users, 
  DollarSign,
  Calendar,
  Filter,
  ChevronDown,
  ExternalLink,
  Brain,
  Target,
  BarChart3,
  Activity,
  Shield,
  Zap
} from 'lucide-react';

interface IntelligenceDashboardProps {
  onSectionChange: (section: string) => void;
}

const IntelligenceDashboard: React.FC<IntelligenceDashboardProps> = ({ onSectionChange }) => {
  const [selectedGeography, setSelectedGeography] = useState('mena');
  const [selectedIndustry, setSelectedIndustry] = useState('fintech');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [selectedDataSource, setSelectedDataSource] = useState('all');
  const [updateFrequency, setUpdateFrequency] = useState('daily');

  const macroIntelligence = {
    economic: {
      stabilityIndex: 7.2,
      gdpGrowth: 3.8,
      inflation: 2.1,
      currencyStability: 8.5
    },
    political: {
      riskBarometer: 6.8,
      stabilityScore: 7.5,
      policyConsistency: 8.2
    },
    regulatory: {
      recentChanges: 3,
      upcomingShifts: 2,
      complianceComplexity: 6.5
    },
    market: {
      accessibilityScore: 8.1,
      entryComplexity: 5.2,
      infrastructureReadiness: 7.8
    }
  };

  const microIntelligence = {
    marketSize: {
      tam: '$45.2B',
      sam: '$12.8B',
      som: '$2.1B',
      growth: 15.3
    },
    behavior: {
      adoptionRate: 68,
      customerSatisfaction: 7.8,
      retentionRate: 82
    },
    competition: {
      intensity: 7.2,
      concentration: 'Medium',
      newEntrants: 12
    },
    growth: {
      historicalGrowth: 18.5,
      projectedGrowth: 22.1,
      lifecycle: 'Growth',
      confidence: 85
    }
  };

  const strategicIntelligence = {
    opportunities: [
      { area: 'Digital Payments', impact: 'High', competition: 'Medium' },
      { area: 'SME Lending', impact: 'High', competition: 'Low' },
      { area: 'Wealth Management', impact: 'Medium', competition: 'Low' }
    ],
    challenges: [
      { challenge: 'Regulatory Compliance', severity: 'High', probability: 85 },
      { challenge: 'Talent Acquisition', severity: 'Medium', probability: 70 },
      { challenge: 'Market Education', severity: 'Medium', probability: 60 }
    ],
    timing: {
      entryWindow: 'Optimal',
      expansionWindow: 'Good',
      confidence: 78
    }
  };

  const aiSummary = {
    overview: "MENA fintech market shows strong growth momentum with favorable regulatory developments and increasing digital adoption.",
    insights: [
      "Digital payment adoption accelerating 40% YoY across key markets",
      "Regulatory sandboxes expanding in UAE, Saudi Arabia, and Egypt",
      "SME lending gap presents $8.2B opportunity with limited competition",
      "Consumer trust in digital financial services reaching 68% acceptance",
      "Cross-border payment infrastructure improvements reducing costs by 25%"
    ],
    sentiment: 'Positive',
    confidence: 87,
    lastUpdated: '2 hours ago'
  };

  const marketAlerts = [
    {
      id: 1,
      title: 'New Regulatory Framework Announced',
      description: 'UAE Central Bank releases updated fintech licensing guidelines',
      date: '2 hours ago',
      severity: 'high'
    },
    {
      id: 2,
      title: 'Major Competitor Funding Round',
      description: 'Regional fintech raises $50M Series B, expanding to 3 new markets',
      date: '6 hours ago',
      severity: 'medium'
    },
    {
      id: 3,
      title: 'Market Opportunity Identified',
      description: 'SME digital banking adoption surges 35% in Saudi Arabia',
      date: '1 day ago',
      severity: 'low'
    }
  ];

  const marketNews = [
    {
      id: 1,
      title: 'MENA Fintech Investment Reaches Record High',
      subtitle: 'Q4 2024 sees $1.2B in fintech investments across the region',
      date: '3 hours ago'
    },
    {
      id: 2,
      title: 'Digital Banking Adoption Accelerates',
      subtitle: 'Consumer adoption of digital banking services grows 45% YoY',
      date: '5 hours ago'
    },
    {
      id: 3,
      title: 'Cross-Border Payment Innovation',
      subtitle: 'New blockchain-based payment corridors reduce transfer costs',
      date: '8 hours ago'
    },
    {
      id: 4,
      title: 'Regulatory Sandbox Expansion',
      subtitle: 'Egypt launches comprehensive fintech regulatory framework',
      date: '1 day ago'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'text-red-400 bg-red-500/20';
      case 'medium':
        return 'text-yellow-400 bg-yellow-500/20';
      case 'low':
        return 'text-green-400 bg-green-500/20';
      default:
        return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Market Intelligence Dashboard</h1>
        <p className="text-gray-300">Comprehensive market insights and trend analysis for data-driven decisions</p>
      </div>

      {/* Filter Panel */}
      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Filter className="w-5 h-5 text-linkedin-light" />
          <h3 className="text-lg font-bold text-white">Intelligence Filters</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div>
            <label className="block text-gray-300 text-sm mb-2">Geographic Scope</label>
            <select
              value={selectedGeography}
              onChange={(e) => setSelectedGeography(e.target.value)}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin"
            >
              <option value="mena" className="bg-slate-800">MENA Region</option>
              <option value="gcc" className="bg-slate-800">GCC Countries</option>
              <option value="uae" className="bg-slate-800">UAE</option>
              <option value="saudi" className="bg-slate-800">Saudi Arabia</option>
              <option value="egypt" className="bg-slate-800">Egypt</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-2">Industry Focus</label>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin"
            >
              <option value="fintech" className="bg-slate-800">Fintech</option>
              <option value="healthtech" className="bg-slate-800">HealthTech</option>
              <option value="ecommerce" className="bg-slate-800">E-commerce</option>
              <option value="edtech" className="bg-slate-800">EdTech</option>
              <option value="proptech" className="bg-slate-800">PropTech</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-2">Topic Focus</label>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin"
            >
              <option value="all" className="bg-slate-800">All Topics</option>
              <option value="regulatory" className="bg-slate-800">Regulatory</option>
              <option value="technology" className="bg-slate-800">Technology</option>
              <option value="market-dynamics" className="bg-slate-800">Market Dynamics</option>
              <option value="consumer-behavior" className="bg-slate-800">Consumer Behavior</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-2">Data Sources</label>
            <select
              value={selectedDataSource}
              onChange={(e) => setSelectedDataSource(e.target.value)}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin"
            >
              <option value="all" className="bg-slate-800">All Sources</option>
              <option value="government" className="bg-slate-800">Government</option>
              <option value="private" className="bg-slate-800">Private Research</option>
              <option value="platform" className="bg-slate-800">Platform Data</option>
              <option value="third-party" className="bg-slate-800">Third-party</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-2">Update Frequency</label>
            <select
              value={updateFrequency}
              onChange={(e) => setUpdateFrequency(e.target.value)}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin"
            >
              <option value="realtime" className="bg-slate-800">Real-time</option>
              <option value="daily" className="bg-slate-800">Daily</option>
              <option value="weekly" className="bg-slate-800">Weekly</option>
              <option value="monthly" className="bg-slate-800">Monthly</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Intelligence Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Macro Intelligence */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
              <Globe className="w-5 h-5" />
              <span>Macro Intelligence</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Economic Environment */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-linkedin-light">Economic Environment</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-linkedin-card/50 rounded-lg">
                    <span className="text-gray-300">Economic Stability Index</span>
                    <span className="text-white font-semibold">{macroIntelligence.economic.stabilityIndex}/10</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-linkedin-card/50 rounded-lg">
                    <span className="text-gray-300">GDP Growth</span>
                    <span className="text-green-400 font-semibold">+{macroIntelligence.economic.gdpGrowth}%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-linkedin-card/50 rounded-lg">
                    <span className="text-gray-300">Currency Stability</span>
                    <span className="text-white font-semibold">{macroIntelligence.economic.currencyStability}/10</span>
                  </div>
                </div>
              </div>

              {/* Market Context */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-linkedin-light">Market Context</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-linkedin-card/50 rounded-lg">
                    <span className="text-gray-300">Market Accessibility</span>
                    <span className="text-white font-semibold">{macroIntelligence.market.accessibilityScore}/10</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-linkedin-card/50 rounded-lg">
                    <span className="text-gray-300">Infrastructure Readiness</span>
                    <span className="text-white font-semibold">{macroIntelligence.market.infrastructureReadiness}/10</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-linkedin-card/50 rounded-lg">
                    <span className="text-gray-300">Political Risk</span>
                    <span className="text-yellow-400 font-semibold">{macroIntelligence.political.riskBarometer}/10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Micro Intelligence */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Market Fundamentals */}
            <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
                <BarChart3 className="w-5 h-5" />
                <span>Market Fundamentals</span>
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-linkedin-light mb-2">Market Size</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300 text-sm">TAM</span>
                      <span className="text-white font-semibold">{microIntelligence.marketSize.tam}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300 text-sm">SAM</span>
                      <span className="text-white font-semibold">{microIntelligence.marketSize.sam}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300 text-sm">SOM</span>
                      <span className="text-white font-semibold">{microIntelligence.marketSize.som}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-linkedin-light mb-2">Customer Behavior</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300 text-sm">Adoption Rate</span>
                      <span className="text-green-400 font-semibold">{microIntelligence.behavior.adoptionRate}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300 text-sm">Retention Rate</span>
                      <span className="text-green-400 font-semibold">{microIntelligence.behavior.retentionRate}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Growth & Forecast */}
            <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5" />
                <span>Growth & Forecast</span>
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-linkedin-light mb-2">Growth Trends</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300 text-sm">Historical Growth</span>
                      <span className="text-green-400 font-semibold">+{microIntelligence.growth.historicalGrowth}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300 text-sm">Projected Growth</span>
                      <span className="text-green-400 font-semibold">+{microIntelligence.growth.projectedGrowth}%</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-linkedin-light mb-2">Market Position</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300 text-sm">Lifecycle Stage</span>
                      <span className="text-blue-400 font-semibold">{microIntelligence.growth.lifecycle}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300 text-sm">Forecast Confidence</span>
                      <span className="text-white font-semibold">{microIntelligence.growth.confidence}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Strategic Intelligence */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
              <Target className="w-5 h-5" />
              <span>Strategic Intelligence</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Opportunities */}
              <div>
                <h4 className="text-lg font-semibold text-linkedin-light mb-4">Opportunity Matrix</h4>
                <div className="space-y-3">
                  {strategicIntelligence.opportunities.map((opp, index) => (
                    <div key={index} className="p-3 bg-linkedin-card/50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">{opp.area}</span>
                        <div className="flex space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            opp.impact === 'High' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {opp.impact} Impact
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            opp.competition === 'Low' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {opp.competition} Competition
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div>
                <h4 className="text-lg font-semibold text-linkedin-light mb-4">Challenge Assessment</h4>
                <div className="space-y-3">
                  {strategicIntelligence.challenges.map((challenge, index) => (
                    <div key={index} className="p-3 bg-linkedin-card/50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">{challenge.challenge}</span>
                        <div className="flex space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            challenge.severity === 'High' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {challenge.severity}
                          </span>
                          <span className="text-gray-400 text-xs">{challenge.probability}%</span>
                        </div>
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
          {/* AI Market Summary */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
              <Brain className="w-5 h-5" />
              <span>AI Market Summary</span>
            </h3>
            
            <div className="space-y-4">
              <p className="text-gray-300 text-sm leading-relaxed">{aiSummary.overview}</p>
              
              <div>
                <h4 className="text-sm font-semibold text-linkedin-light mb-2">Key Insights</h4>
                <div className="space-y-2">
                  {aiSummary.insights.map((insight, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-1 h-1 bg-linkedin-light rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-xs">{insight}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-linkedin-border">
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    aiSummary.sentiment === 'Positive' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {aiSummary.sentiment}
                  </span>
                  <span className="text-gray-400 text-xs">{aiSummary.confidence}% confidence</span>
                </div>
                <span className="text-gray-500 text-xs">{aiSummary.lastUpdated}</span>
              </div>

              <button 
                onClick={() => onSectionChange('ai-reports')}
                className="w-full bg-linkedin hover:bg-linkedin-dark text-white py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Generate Detailed Report
              </button>
            </div>
          </div>

          {/* Market Alerts */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5" />
              <span>Market Alerts</span>
            </h3>
            
            <div className="space-y-3">
              {marketAlerts.map((alert) => (
                <div key={alert.id} className="p-3 bg-linkedin-card/50 rounded-lg border-l-4 border-linkedin">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-white font-medium text-sm">{alert.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs ${getSeverityColor(alert.severity)}`}>
                      {alert.severity}
                    </span>
                  </div>
                  <p className="text-gray-300 text-xs mb-2">{alert.description}</p>
                  <span className="text-gray-500 text-xs">{alert.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Market News */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
              <Activity className="w-5 h-5" />
              <span>Market News & Updates</span>
            </h3>
            
            <div className="space-y-4">
              {marketNews.map((news) => (
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
        </div>
      </div>
    </div>
  );
};

export default IntelligenceDashboard;