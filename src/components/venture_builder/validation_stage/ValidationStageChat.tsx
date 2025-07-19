import React, { useState } from 'react';
import { 
  Users, 
  Brain, 
  MessageSquare, 
  BarChart3,
  Send,
  CheckCircle
} from 'lucide-react';

interface ValidationStageChatProps {
  onSendMessage: (message: string) => void;
  activeSubStage: string;
}

const ValidationStageChat: React.FC<ValidationStageChatProps> = ({ onSendMessage, activeSubStage }) => {
  const [message, setMessage] = useState('');
  
  const subStages = [
    { id: 'target-audience', label: 'Target Audience', icon: Users, description: 'Define target audience' },
    { id: 'ai-personas', label: 'AI Personas', icon: Brain, description: 'Generate AI personas' },
    { id: 'questionnaire', label: 'Questionnaire', icon: MessageSquare, description: 'Design validation questionnaire' },
    { id: 'ai-simulation', label: 'AI Simulation', icon: BarChart3, description: 'Run validation simulation' }
  ];

  const getStageStatus = (stageId: string) => {
    if (activeSubStage === stageId) return 'current';
    
    const stageIndex = subStages.findIndex(stage => stage.id === stageId);
    const currentIndex = subStages.findIndex(stage => stage.id === activeSubStage);
    
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
      {/* Validation Flow Progress */}
      <div className="p-4 border-b border-linkedin-border">
        <h3 className="text-lg font-bold text-white mb-4">Validation Flow Progress</h3>
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
                <p className="text-xs opacity-80">{stage.description}</p>
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
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <h4 className="text-white font-medium">Validation Agent</h4>
                <span className="bg-linkedin/20 text-linkedin-light px-2 py-0.5 rounded-full text-xs">
                  AI Agent
                </span>
              </div>
              <div className="text-gray-300 space-y-2">
                <p>
                  Welcome to the Validation stage! I'm your Validation Agent, and I'll help you validate your venture concept with AI-powered market simulation.
                </p>
                
                {activeSubStage === 'target-audience' && (
                  <>
                    <p>
                      Let's start by defining your target audience in detail. This information will help me generate realistic AI personas that represent your potential customers.
                    </p>
                    <p>
                      I've pre-filled some demographic and psychographic details based on your previous inputs, but please review and adjust them to ensure they accurately represent your target market.
                    </p>
                    <p>
                      What specific demographics are you targeting with your solution?
                    </p>
                  </>
                )}
                
                {activeSubStage === 'ai-personas' && (
                  <>
                    <p>
                      Great job defining your target audience! Now I'll generate AI personas based on this information.
                    </p>
                    <p>
                      These personas represent different segments of your target market, each with unique characteristics, pain points, and decision-making processes. They'll provide diverse perspectives during our validation simulation.
                    </p>
                    <p>
                      Take some time to review each persona. You can click on them to see their detailed profiles and edit if needed.
                    </p>
                    <p>
                      Do these personas accurately represent your target audience? Would you like me to adjust any of them?
                    </p>
                  </>
                )}
                
                {activeSubStage === 'questionnaire' && (
                  <>
                    <p>
                      Now let's design the questionnaire we'll use to interview our AI personas. This is a crucial step in validating your venture concept.
                    </p>
                    <p>
                      I've suggested some questions in three categories:
                    </p>
                    <ul className="space-y-1 pl-4 text-xs">
                      <li>• Problem Discovery: To validate the existence and severity of the problem</li>
                      <li>• Solution Validation: To test your proposed solution's appeal and value</li>
                      <li>• Behavioral & Contextual: To understand decision-making processes and context</li>
                    </ul>
                    <p className="mt-2">
                      You can add, edit, or remove questions to customize your validation approach. What specific aspects of your solution would you like to validate?
                    </p>
                  </>
                )}
                
                {activeSubStage === 'ai-simulation' && (
                  <>
                    <p>
                      We're ready to run the AI simulation! I'll conduct interviews with each persona using your questionnaire and provide detailed analysis of their responses.
                    </p>
                    <p>
                      The simulation will generate:
                    </p>
                    <ul className="space-y-1 pl-4 text-xs">
                      <li>• Individual persona responses to each question</li>
                      <li>• Analysis of each persona's perception of your solution</li>
                      <li>• Overall market validation analysis and recommendations</li>
                    </ul>
                    <p className="mt-2">
                      Click "Run Simulation" when you're ready to start. This process will take a few moments to complete.
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
                  activeSubStage === 'target-audience' ? 'defining your target audience' :
                  activeSubStage === 'ai-personas' ? 'AI personas' :
                  activeSubStage === 'questionnaire' ? 'designing your questionnaire' :
                  'the validation simulation'
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

export default ValidationStageChat;