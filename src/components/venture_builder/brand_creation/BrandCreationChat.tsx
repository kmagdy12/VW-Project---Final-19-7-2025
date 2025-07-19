import React, { useState } from 'react';
import { 
  Send,
  Image, 
  Palette, 
  Type, 
  Layout, 
  Layers,
  CheckCircle,
  Brain
} from 'lucide-react';

interface BrandCreationChatProps {
  onSendMessage: (message: string) => void;
  currentSubStage: string;
}

const BrandCreationChat: React.FC<BrandCreationChatProps> = ({ onSendMessage, currentSubStage }) => {
  const [message, setMessage] = useState('');
  
  const subStages = [
    { id: 'logo_concept', label: 'Logo Concept', icon: Image, description: 'Define logo concept' },
    { id: 'logo_design', label: 'Logo Design', icon: Image, description: 'Create logo design & guidelines' },
    { id: 'color_palette', label: 'Color Palette', icon: Palette, description: 'Define brand colors' },
    { id: 'typography', label: 'Typography', icon: Type, description: 'Select brand typography' },
    { id: 'visual_styles', label: 'Visual Styles', icon: Layout, description: 'Create visual elements' },
    { id: 'brand_applications', label: 'Brand Applications', icon: Layers, description: 'Apply brand to materials' }
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

  return (
    <div className="h-full flex flex-col">
      {/* Brand Creation Flow Progress */}
      <div className="p-4 border-b border-linkedin-border">
        <h3 className="text-lg font-bold text-white mb-4">Brand Creation Flow</h3>
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
                <h4 className="text-white font-medium">Brand Designer Agent</h4>
                <span className="bg-linkedin/20 text-linkedin-light px-2 py-0.5 rounded-full text-xs">
                  AI Agent
                </span>
              </div>
              <p className="text-gray-400 text-xs mb-2">Pre-fills brand elements, optimizes brand strategy, explains brand positioning</p>
              <div className="text-gray-300 space-y-2">
                <p>
                  Welcome to the Brand Creation stage! I'm your Brand Designer Agent, and I'll help you develop a comprehensive brand identity for your venture.
                </p>
                
                {currentSubStage === 'logo_concept' && (
                  <>
                    <p>
                      Let's start with your logo concept. Based on your business model and target audience, I'll help you define the key elements of your logo.
                    </p>
                    <p>
                      Please share your preferences for visual style, key symbolism, emotional feeling, and logo type (wordmark, symbol, monogram, or a combination).
                    </p>
                  </>
                )}
                
                {currentSubStage === 'logo_design' && (
                  <>
                    <p>
                      Now let's create your logo design and guidelines. Based on your concept preferences, I'll help you develop a complete logo system.
                    </p>
                    <p>
                      We'll define your logotype, icon, measurements, variations, minimum size, placement guidelines, and usage rules.
                    </p>
                  </>
                )}
                
                {currentSubStage === 'color_palette' && (
                  <>
                    <p>
                      Let's define your brand's color palette. Colors play a crucial role in brand recognition and emotional connection.
                    </p>
                    <p>
                      We'll select primary, secondary, and accent colors, define their HEX codes, and specify usage contexts for each color.
                    </p>
                  </>
                )}
                
                {currentSubStage === 'typography' && (
                  <>
                    <p>
                      Now let's select your brand typography. The right fonts will reinforce your brand personality and ensure readability.
                    </p>
                    <p>
                      We'll choose primary and secondary typefaces, define available weights, and establish a typography hierarchy for different content types.
                    </p>
                  </>
                )}
                
                {currentSubStage === 'visual_styles' && (
                  <>
                    <p>
                      Let's create your brand's visual styles. These design elements will ensure consistency across all your brand touchpoints.
                    </p>
                    <p>
                      We'll define preferred shapes, patterns, icon styles, photography guidelines, illustration styles, and UI/digital elements.
                    </p>
                  </>
                )}
                
                {currentSubStage === 'brand_applications' && (
                  <>
                    <p>
                      Finally, let's apply your brand to digital and print materials. This will show how your brand comes to life across different touchpoints.
                    </p>
                    <p>
                      We'll create templates for website elements, mobile app assets, social media, email, digital advertising, and print materials.
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
                  currentSubStage === 'logo_concept' ? 'logo concepts and design principles' :
                  currentSubStage === 'logo_design' ? 'logo design and guidelines' :
                  currentSubStage === 'color_palette' ? 'color theory and brand colors' :
                  currentSubStage === 'typography' ? 'typography and font selection' :
                  currentSubStage === 'visual_styles' ? 'visual design elements and styles' :
                  'brand applications and templates'
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

export default BrandCreationChat;