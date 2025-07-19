import React, { useState } from 'react';
import { 
  Send,
  Layers, 
  Code, 
  Package,
  CheckCircle,
  Brain
} from 'lucide-react';

interface ProductCreationChatProps {
  onSendMessage: (message: string) => void;
  currentSubStage: string;
}

const ProductCreationChat: React.FC<ProductCreationChatProps> = ({ onSendMessage, currentSubStage }) => {
  const [message, setMessage] = useState('');
  
  const subStages = [
    { id: 'ux', label: 'UX', icon: Layers, description: 'User experience design' },
    { id: 'prototype', label: 'Prototype', icon: Code, description: 'Interactive prototype' },
    { id: 'mvp', label: 'MVP', icon: Package, description: 'Minimum viable product' }
  ];

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

  const getAgentName = () => {
    switch (currentSubStage) {
      case 'ux':
        return 'UX Designer Agent';
      case 'prototype':
        return 'Prototype Developer Agent';
      case 'mvp':
        return 'MVP Builder Agent';
      default:
        return 'Product Creation Agent';
    }
  };

  const getAgentFunction = () => {
    switch (currentSubStage) {
      case 'ux':
        return 'Pre-fills UX templates, optimizes user flows, explains design principles';
      case 'prototype':
        return 'Creates interactive prototypes, optimizes user interactions, explains prototype features';
      case 'mvp':
        return 'Builds minimum viable product, optimizes core features, explains technical implementation';
      default:
        return 'Assists with product development';
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Product Creation Flow Progress */}
      <div className="p-4 border-b border-linkedin-border">
        <h3 className="text-lg font-bold text-white mb-4">Product Creation Flow</h3>
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
                <h4 className="text-white font-medium">{getAgentName()}</h4>
                <span className="bg-linkedin/20 text-linkedin-light px-2 py-0.5 rounded-full text-xs">
                  AI Agent
                </span>
              </div>
              <p className="text-gray-400 text-xs mb-2">{getAgentFunction()}</p>
              <div className="text-gray-300 space-y-2">
                <p>
                  Welcome to the Product Creation stage! I'm your {getAgentName()}, and I'll help you develop a comprehensive product for your venture.
                </p>
                
                {currentSubStage === 'ux' && (
                  <>
                    <p>
                      Let's start with designing the user experience for your product. We'll define the user journey, platform sections, navigation, and screen elements.
                    </p>
                    <p>
                      Based on your business model and target audience, I'll help you create a user-centered design that aligns with your brand and meets your users' needs.
                    </p>
                  </>
                )}
                
                {currentSubStage === 'prototype' && (
                  <>
                    <p>
                      Now let's create an interactive prototype based on your UX design. This will allow you to test and validate your product concept before full development.
                    </p>
                    <p>
                      We'll define the key user flows, interactions, and feedback mechanisms to ensure a seamless user experience.
                    </p>
                  </>
                )}
                
                {currentSubStage === 'mvp' && (
                  <>
                    <p>
                      Let's define your Minimum Viable Product (MVP). This will be the first version of your product with just enough features to satisfy early users.
                    </p>
                    <p>
                      We'll prioritize features, define technical requirements, and create a development roadmap to bring your product to market quickly.
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
                  currentSubStage === 'ux' ? 'user experience design and user journeys' :
                  currentSubStage === 'prototype' ? 'prototyping and user testing' :
                  'MVP development and feature prioritization'
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

export default ProductCreationChat;