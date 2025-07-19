import React, { useState } from 'react';
import { 
  Search, 
  ArrowRight, 
  BarChart3, 
  Users, 
  TrendingUp, 
  Target,
  Globe,
  Building2,
  ChevronDown,
  ChevronUp,
  Save,
  Play
} from 'lucide-react';

interface MarketTargetingInputsProps {
  targetMarket: {
    region: string;
    industry: string;
    subIndustry: string;
    topics: string;
  };
  onInputChange: (field: string, value: string) => void;
  onStartResearch: () => void;
  researchStarted: boolean;
  onContinue: () => void;
  onSkip: () => void;
  onSaveDraft: () => void;
}

const MarketTargetingInputs: React.FC<MarketTargetingInputsProps> = ({ 
  targetMarket, 
  onInputChange, 
  onStartResearch, 
  researchStarted,
  onContinue,
  onSkip,
  onSaveDraft
}) => {
  const [expandedSection, setExpandedSection] = useState<string | null>('market-overview');
  
  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  return (
    <div className="p-6 h-full overflow-y-auto space-y-6">
      {/* Target Market Inputs */}
      <div className="bg-linkedin-card/30 rounded-lg p-6">
        <h3 className="text-base font-semibold text-white mb-3">Target Market Definition</h3>
        <p className="text-gray-300 text-xs mb-3">
          Define the markets & topics to conduct research on. The AI has pre-filled some details based on your profile, but you can edit them to refine the research.
        </p>
        
        <div className="grid grid-cols-1 gap-4 mb-6">
          <div>
            <label className="block text-gray-300 text-xs mb-1">Region/Location</label>
            <select
              value={targetMarket.region}
              onChange={(e) => onInputChange('region', e.target.value)}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin"
            >
              <option value="MENA Region" className="bg-slate-800">MENA Region</option>
              <option value="GCC Countries" className="bg-slate-800">GCC Countries</option>
              <option value="UAE" className="bg-slate-800">UAE</option>
              <option value="Saudi Arabia" className="bg-slate-800">Saudi Arabia</option>
              <option value="Egypt" className="bg-slate-800">Egypt</option>
            </select>
          </div>
          
          <div>
            <label className="block text-gray-300 text-xs mb-1">Industry</label>
            <select
              value={targetMarket.industry}
              onChange={(e) => onInputChange('industry', e.target.value)}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin"
            >
              <option value="Fintech" className="bg-slate-800">Fintech</option>
              <option value="HealthTech" className="bg-slate-800">HealthTech</option>
              <option value="EdTech" className="bg-slate-800">EdTech</option>
              <option value="E-commerce" className="bg-slate-800">E-commerce</option>
              <option value="CleanTech" className="bg-slate-800">CleanTech</option>
            </select>
          </div>
          
          <div>
            <label className="block text-gray-300 text-xs mb-1">Sub-Industry</label>
            <select
              value={targetMarket.subIndustry}
              onChange={(e) => onInputChange('subIndustry', e.target.value)}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin"
            >
              <option value="Digital Payments" className="bg-slate-800">Digital Payments</option>
              <option value="Lending" className="bg-slate-800">Lending</option>
              <option value="Wealth Management" className="bg-slate-800">Wealth Management</option>
              <option value="InsurTech" className="bg-slate-800">InsurTech</option>
              <option value="RegTech" className="bg-slate-800">RegTech</option>
            </select>
          </div>
          
          <div>
            <label className="block text-gray-300 text-xs mb-1">Topics</label>
            <input
              type="text"
              value={targetMarket.topics}
              onChange={(e) => onInputChange('topics', e.target.value)}
              placeholder="Enter comma-separated topics"
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin"
            />
          </div>
        </div>
        
        <button
          onClick={onStartResearch}
          className="flex items-center space-x-2 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-6 py-3 rounded-lg font-medium transition-all"
        >
          <Play className="w-4 h-4" />
          <span>Start AI Research</span>
        </button>
      </div>
      
      {researchStarted && (
        <>
          {/* Market Overview */}
          <div className="bg-linkedin-card/30 rounded-lg overflow-hidden">
            <div 
              className="flex items-center justify-between p-4 cursor-pointer"
              onClick={() => toggleSection('market-overview')}
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-linkedin/20 rounded-lg flex items-center justify-center">
                  <Globe className="w-4 h-4 text-linkedin-light" />
                </div>
                <h3 className="text-base font-semibold text-white">Market Overview</h3>
              </div>
              {expandedSection === 'market-overview' ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </div>
            
            {expandedSection === 'market-overview' && (
              <div className="p-4 border-t border-linkedin-border">
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-linkedin-card/50 rounded-lg p-4">
                    <h4 className="text-linkedin-light font-medium text-xs mb-2">Market Segmentation</h4>
                    <ul className="space-y-1 text-gray-300 text-xs">
                      <li>• Consumer segment (65%)</li>
                      <li>• SME segment (25%)</li>
                      <li>• Enterprise segment (10%)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-linkedin-card/50 rounded-lg p-4">
                    <h4 className="text-linkedin-light font-medium mb-2">Market Size</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• TAM: $45.2B</li>
                      <li>• SAM: $12.8B</li>
                      <li>• SOM: $2.1B</li>
                    </ul>
                  </div>
                  
                  <div className="bg-linkedin-card/50 rounded-lg p-4">
                    <h4 className="text-linkedin-light font-medium mb-2">Target Audience</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Urban professionals (25-45)</li>
                      <li>• Tech-savvy consumers</li>
                      <li>• Underbanked population</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Market Behavior */}
          <div className="bg-linkedin-card/30 rounded-lg overflow-hidden">
            <div 
              className="flex items-center justify-between p-4 cursor-pointer"
              onClick={() => toggleSection('market-behavior')}
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-linkedin/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-linkedin-light" />
                </div>
                <h3 className="text-lg font-semibold text-white">Market Behavior</h3>
              </div>
              {expandedSection === 'market-behavior' ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </div>
            
            {expandedSection === 'market-behavior' && (
              <div className="p-4 border-t border-linkedin-border">
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-linkedin-card/50 rounded-lg p-4">
                    <h4 className="text-linkedin-light font-medium mb-2">Market Drivers</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Increasing smartphone penetration</li>
                      <li>• Government digital initiatives</li>
                      <li>• Shift towards cashless transactions</li>
                    </ul>
                  </div>
                  
                  <div className="bg-linkedin-card/50 rounded-lg p-4">
                    <h4 className="text-linkedin-light font-medium mb-2">Market Trends</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Rise of contactless payments</li>
                      <li>• Embedded finance integration</li>
                      <li>• Cross-border payment solutions</li>
                    </ul>
                  </div>
                  
                  <div className="bg-linkedin-card/50 rounded-lg p-4">
                    <h4 className="text-linkedin-light font-medium mb-2">Market Growth Rate</h4>
                    <div className="text-2xl font-bold text-green-400 mb-2">22.1% CAGR</div>
                    <p className="text-gray-300 text-sm">Projected annual growth rate (2024-2029)</p>
                  </div>
                  
                  <div className="bg-linkedin-card/50 rounded-lg p-4">
                    <h4 className="text-linkedin-light font-medium mb-2">Market Opportunities</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Financial inclusion for underbanked</li>
                      <li>• SME digital payment solutions</li>
                      <li>• Cross-border remittance optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Market Competition */}
          <div className="bg-linkedin-card/30 rounded-lg overflow-hidden">
            <div 
              className="flex items-center justify-between p-4 cursor-pointer"
              onClick={() => toggleSection('market-competition')}
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-linkedin/20 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-linkedin-light" />
                </div>
                <h3 className="text-lg font-semibold text-white">Market Competition</h3>
              </div>
              {expandedSection === 'market-competition' ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </div>
            
            {expandedSection === 'market-competition' && (
              <div className="p-4 border-t border-linkedin-border">
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-linkedin-card/50 rounded-lg p-4">
                    <h4 className="text-linkedin-light font-medium mb-2">Top Market Players</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• PayTabs (25% market share)</li>
                      <li>• Telr (18% market share)</li>
                      <li>• Checkout.com (15% market share)</li>
                      <li>• Tap Payments (12% market share)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-linkedin-card/50 rounded-lg p-4">
                    <h4 className="text-linkedin-light font-medium mb-2">Top Players Comparison Matrix</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-sm text-gray-300">
                        <thead>
                          <tr className="border-b border-linkedin-border">
                            <th className="text-left py-2">Company</th>
                            <th className="text-left py-2">Strengths</th>
                            <th className="text-left py-2">Weaknesses</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-linkedin-border/50">
                            <td className="py-2">PayTabs</td>
                            <td className="py-2">Regional presence, API integration</td>
                            <td className="py-2">High fees, limited features</td>
                          </tr>
                          <tr className="border-b border-linkedin-border/50">
                            <td className="py-2">Telr</td>
                            <td className="py-2">Multi-currency support, security</td>
                            <td className="py-2">Poor customer service, complex setup</td>
                          </tr>
                          <tr>
                            <td className="py-2">Checkout.com</td>
                            <td className="py-2">Global reach, advanced analytics</td>
                            <td className="py-2">High entry barriers for SMEs</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div className="bg-linkedin-card/50 rounded-lg p-4">
                    <h4 className="text-linkedin-light font-medium mb-2">Market Competitiveness</h4>
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl font-bold text-yellow-400">75%</div>
                      <div className="flex-1">
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-yellow-400 h-2 rounded-full"
                            style={{ width: '75%' }}
                          ></div>
                        </div>
                        <p className="text-gray-400 text-xs mt-1">Highly competitive market with established players</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Market Analysis */}
          <div className="bg-linkedin-card/30 rounded-lg overflow-hidden">
            <div 
              className="flex items-center justify-between p-4 cursor-pointer"
              onClick={() => toggleSection('market-analysis')}
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-linkedin/20 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-linkedin-light" />
                </div>
                <h3 className="text-lg font-semibold text-white">Market Analysis</h3>
              </div>
              {expandedSection === 'market-analysis' ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </div>
            
            {expandedSection === 'market-analysis' && (
              <div className="p-4 border-t border-linkedin-border">
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-linkedin-card/50 rounded-lg p-4">
                    <h4 className="text-linkedin-light font-medium mb-2">Desirability</h4>
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl font-bold text-green-400">85%</div>
                      <div className="flex-1">
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-green-400 h-2 rounded-full"
                            style={{ width: '85%' }}
                          ></div>
                        </div>
                        <p className="text-gray-400 text-xs mt-1">High customer demand and market need</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-linkedin-card/50 rounded-lg p-4">
                    <h4 className="text-linkedin-light font-medium mb-2">Viability</h4>
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl font-bold text-blue-400">78%</div>
                      <div className="flex-1">
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-blue-400 h-2 rounded-full"
                            style={{ width: '78%' }}
                          ></div>
                        </div>
                        <p className="text-gray-400 text-xs mt-1">Good business model potential</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-linkedin-card/50 rounded-lg p-4">
                    <h4 className="text-linkedin-light font-medium mb-2">Feasibility</h4>
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl font-bold text-purple-400">70%</div>
                      <div className="flex-1">
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-purple-400 h-2 rounded-full"
                            style={{ width: '70%' }}
                          ></div>
                        </div>
                        <p className="text-gray-400 text-xs mt-1">Technically achievable with some challenges</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
      
      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-linkedin-border">
        <div className="flex items-center space-x-3">
          <button
            onClick={onSkip}
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            Skip for now
          </button>
          <button
            onClick={onSaveDraft}
            className="flex items-center space-x-2 bg-linkedin-card hover:bg-linkedin-card/70 text-white px-4 py-2 rounded-lg transition-colors text-sm"
          >
            <Save className="w-4 h-4" />
            <span>Save draft</span>
          </button>
        </div>
        <button
          onClick={onContinue}
          className="flex items-center space-x-2 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-6 py-2 rounded-lg transition-all text-sm"
        >
          <span>Continue to Problem Definition</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default MarketTargetingInputs;