import React, { useState } from 'react';
import { 
  Lightbulb, 
  Target, 
  MessageSquare, 
  CheckCircle,
  Send,
  Brain
} from 'lucide-react';

interface IdeaStageChatProps {
  onSendMessage: (message: string) => void;
  activeSubStage: string;
}

const IdeaStageChat: React.FC<IdeaStageChatProps> = ({ onSendMessage, activeSubStage }) => {
  const [message, setMessage] = useState('');
  
  const subStages = [
    { id: 'market-targeting', label: 'Market Targeting', icon: Target, description: 'Define the target markets' },
    { id: 'problem-definition', label: 'Problem Definition', icon: MessageSquare, description: 'Define the market problems' },
    { id: 'ideation', label: 'Ideation', icon: Lightbulb, description: 'Develop the solution concept' },
    { id: 'validation', label: 'Validation', icon: CheckCircle, description: 'Validate with AI personas' }
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
      {/* Idea Flow Progress */}
      <div className="p-4 border-b border-linkedin-border">
        <h3 className="text-lg font-bold text-white mb-4">Idea Flow Progress</h3>
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
                <h4 className="text-white font-medium">Idea Development Agent</h4>
                <span className="bg-linkedin/20 text-linkedin-light px-2 py-0.5 rounded-full text-xs">
                  AI Agent
                </span>
              </div>
              <div className="text-gray-300 space-y-2">
                <p>
                  Welcome to the Idea stage! I'm your Idea Development Agent, and I'll help you develop and validate your venture concept.
                </p>
                {activeSubStage === 'market-targeting' && (
                  <>
                    <p>
                      Let's start with Market Targeting. Based on your profile and the documents you've uploaded, I've pre-filled some information about potential target markets. You can review and adjust these details, and then we'll conduct market research to validate your choices.
                    </p>
                    <p>
                      What specific markets or industries are you interested in targeting with your venture?
                    </p>
                  </>
                )}
                
                {activeSubStage === 'problem-definition' && (
                  <>
                    <p>
                      Now that we've defined our target market, let's identify the key problems in this market that your venture could solve. Based on the market research, I've pre-filled some potential problems.
                    </p>
                    <p>
                      You can review these problems, edit them, or add new ones. For each problem, we'll define:
                    </p>
                    <ul className="space-y-1 pl-4 text-xs">
                      <li>• A clear problem statement</li>
                      <li>• The problem size (% of market affected)</li>
                      <li>• Impact level (high/medium/low)</li>
                      <li>• Validation points (evidence that supports the problem's existence)</li>
                    </ul>
                    <p className="mt-2">
                      What specific problems do you see in the {activeSubStage === 'market-targeting' ? 'selected market' : 'digital payments market in MENA'}?
                    </p>
                  </>
                )}
                
                {activeSubStage === 'ideation' && (
                  <>
                    <p>
                      Great job defining the key market problems! Now let's move to the exciting part - developing solutions to address these problems.
                    </p>
                    <p>
                      Based on the problems you've identified, I've suggested some initial solutions. For each problem, you can:
                    </p>
                    <ul className="space-y-1 pl-4 text-xs">
                      <li>• Define a specific solution that addresses the problem</li>
                      <li>• Craft an elevator pitch that summarizes your overall solution</li>
                      <li>• Outline your initial business model using the WHO-WHAT-HOW-WHY framework</li>
                    </ul>
                    <p className="mt-2">
                      Let's start with the solutions. What specific approaches would you like to take to solve the problems you've identified?
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
                placeholder="Ask me anything about market targeting..."
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

export default IdeaStageChat;