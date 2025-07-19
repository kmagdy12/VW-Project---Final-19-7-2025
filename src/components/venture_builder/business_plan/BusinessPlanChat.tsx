import React, { useState } from 'react';
import { 
  Brain, 
  Send,
  BarChart3,
  Briefcase,
  Target,
  Calendar,
  DollarSign,
  CheckCircle
} from 'lucide-react';

interface BusinessPlanChatProps {
  onSendMessage: (message: string) => void;
  currentSubStage: string;
}

interface AICompanionInfo {
  name: string;
  function: string;
  icon: React.ElementType;
}

const BusinessPlanChat: React.FC<BusinessPlanChatProps> = ({ onSendMessage, currentSubStage }) => {
  const [message, setMessage] = useState('');
  
  const subStages = [
    { id: 'market_assessment', label: 'Market Assessment', icon: BarChart3 },
    { id: 'business_model', label: 'Business Model', icon: Briefcase },
    { id: 'strategy_roadmap', label: 'Strategy Roadmap', icon: Target },
    { id: 'tactical_plan', label: 'Tactical Plan', icon: Calendar },
    { id: 'financial_plan', label: 'Financial Plan', icon: DollarSign }
  ];

  const getAICompanionInfo = (subStage: string): AICompanionInfo => {
    switch (subStage) {
      case 'market_assessment':
        return {
          name: 'Market Research Agent',
          function: 'Pre-fills market data, analyzes competition, explains market dynamics',
          icon: BarChart3
        };
      case 'business_model':
        return {
          name: 'Business Model Agent',
          function: 'Pre-fills model templates, optimizes revenue streams, explains model viability',
          icon: Briefcase
        };
      case 'strategy_roadmap':
        return {
          name: 'Strategy Planner Agent',
          function: 'Pre-fills strategic frameworks, optimizes roadmap priorities, explains strategic choices',
          icon: Target
        };
      case 'tactical_plan':
        return {
          name: 'Execution Planner Agent',
          function: 'Pre-fills tactical templates, optimizes resource allocation, explains implementation steps',
          icon: Calendar
        };
      case 'financial_plan':
        return {
          name: 'Financial Modeler Agent',
          function: 'Pre-fills financial templates, optimizes projections, explains financial assumptions',
          icon: DollarSign
        };
      default:
        return {
          name: 'Business Plan Agent',
          function: 'Guides you through the business planning process',
          icon: Brain
        };
    }
  };

  const aiCompanion = getAICompanionInfo(currentSubStage);

  const getStageStatus = (stageId: string) => {
    if (currentSubStage === stageId) return 'current';
    
    const stageIndex = subStages.findIndex(stage => stage.id === stageId);
    const currentIndex = subStages.findIndex(stage => stage.id === currentSubStage);
    
    if (stageIndex < currentIndex) return 'completed';
    return 'upcoming';
  };

  const getStageColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-400 bg-green-500/20';
      case 'current':
        return 'text-linkedin-light bg-linkedin/20';
      default:
        return 'text-gray-400 bg-gray-700/50';
    }
  };
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Business Plan Flow Progress */}
      <div className="p-4 border-b border-linkedin-border">
        <h3 className="text-lg font-bold text-white mb-4">Business Plan Progress</h3>
        <div className="flex items-center space-x-2 overflow-x-auto pb-2">
          {subStages.map((stage, index) => (
            <div 
              key={stage.id}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${getStageColor(getStageStatus(stage.id))}`}
            >
              {getStageStatus(stage.id) === 'completed' ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <stage.icon className="w-5 h-5" />
              )}
              <div>
                <span className="text-sm font-medium">{stage.label}</span>
              </div>
              
              {/* Connector line (except after the last stage) */}
              {index < subStages.length - 1 && (
                <div className="w-6 h-px bg-gray-700"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* AI Welcome Message */}
        <div className="bg-linkedin-card/50 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-linkedin to-linkedin-light rounded-full flex items-center justify-center flex-shrink-0">
              <aiCompanion.icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <h4 className="text-white font-medium">{aiCompanion.name}</h4>
                <span className="bg-linkedin/20 text-linkedin-light px-2 py-0.5 rounded-full text-xs">
                  AI Agent
                </span>
              </div>
              <p className="text-gray-400 text-xs mb-2">{aiCompanion.function}</p>
              <div className="text-gray-300 space-y-2">
                <p>
                  Welcome to the Business Plan stage! I'm your {aiCompanion.name}, and I'll help you develop a comprehensive business plan for your venture.
                </p>
                
                {currentSubStage === 'market_assessment' && (
                  <>
                    <p>
                      Let's start with the Market Assessment. Based on your previous inputs and our market research, I've pre-filled some information about your target market segments, market size, market behavior, and competitive landscape.
                    </p>
                    <p>
                      You can review and adjust these details to ensure they accurately represent your market understanding. This assessment will serve as the foundation for your business model and strategy.
                    </p>
                    <p>
                      What specific aspects of the market would you like to explore further?
                    </p>
                  </>
                )}
                
                {currentSubStage === 'business_model' && (
                  <>
                    <p>
                      Let's define your Business Model. This will outline how your venture creates, delivers, and captures value.
                    </p>
                    <p>
                      Based on your market assessment, I'll help you develop a comprehensive business model that includes your value proposition, customer segments, channels, customer relationships, revenue streams, key resources, key activities, key partnerships, and cost structure.
                    </p>
                    <p>
                      What specific aspects of your business model would you like to discuss?
                    </p>
                  </>
                )}
                
                {currentSubStage === 'strategy_roadmap' && (
                  <>
                    <p>
                      Now let's develop your Strategy Roadmap. This will outline your venture's strategic direction and goals over time.
                    </p>
                    <p>
                      Based on your market assessment and business model, I'll help you define your vision, mission, strategic objectives, key performance indicators, and strategic initiatives.
                    </p>
                    <p>
                      What specific aspects of your strategy would you like to explore?
                    </p>
                  </>
                )}
                
                {currentSubStage === 'tactical_plan' && (
                  <>
                    <p>
                      Let's create your Tactical Plan. This will outline the specific actions and implementation details for your business.
                    </p>
                    <p>
                      Based on your strategy roadmap, I'll help you define your brand infrastructure, product design, commercial services, operational excellence, marketing & growth tactics, and legal structure.
                    </p>
                    <p>
                      What specific aspects of your tactical plan would you like to discuss?
                    </p>
                  </>
                )}
                
                {currentSubStage === 'financial_plan' && (
                  <>
                    <p>
                      Let's develop your Financial Plan. This will outline your venture's financial projections and requirements.
                    </p>
                    <p>
                      Based on your business model and tactical plan, I'll help you create financial projections, including revenue models, expenses, revenue build-up, financial analysis, and financial controls.
                    </p>
                    <p>
                      What specific aspects of your financial plan would you like to explore?
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Message Input */}
      <div className="p-4 border-t border-linkedin-border">
        <form onSubmit={handleSendMessage} className="flex items-end space-x-3">
          <div className="flex-1">
            <div className="bg-linkedin-card border border-linkedin-border rounded-lg p-3">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={`Ask me anything about ${
                  currentSubStage === 'market_assessment' ? 'market assessment' :
                  currentSubStage === 'business_model' ? 'business models' :
                  currentSubStage === 'strategy_roadmap' ? 'strategy development' :
                  currentSubStage === 'tactical_plan' ? 'tactical planning and implementation' :
                  currentSubStage === 'financial_plan' ? 'financial planning and projections' :
                  'business planning'
                }...`}
                className="w-full bg-transparent text-white placeholder-gray-400 resize-none focus:outline-none"
                rows={2}
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={!message.trim()}
            className="bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white p-3 rounded-lg transition-all"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default BusinessPlanChat;