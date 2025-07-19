import React from 'react';
import { Brain, MessageSquare, Clock } from 'lucide-react';

interface AIChatHistoryProps {
  // No props needed for now
}

const AIChatHistory: React.FC<AIChatHistoryProps> = () => {
  // Mock data for chat history
  const chatHistory = [
    {
      id: 1,
      agentName: 'AI Agent',
      message: 'Welcome!',
      timestamp: '2 min ago'
    },
    {
      id: 2,
      agentName: 'AI Agent',
      message: 'Let me help you build your venture.',
      timestamp: '1 min ago'
    }
  ];

  return (
    <div className="p-4 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xs font-bold text-white">History</h3>
      </div>
      
      <div className="flex-1 overflow-y-auto space-y-4">
        {chatHistory.map((chat) => (
          <div key={chat.id} className="bg-linkedin-card/50 rounded-lg p-4">
            <div className="flex items-start space-x-3 mb-2">
              <div className="w-8 h-8 bg-gradient-to-r from-linkedin to-linkedin-light rounded-full flex items-center justify-center flex-shrink-0">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-medium text-xs">{chat.agentName}</h4>
                <p className="text-gray-300 text-xs mt-1 truncate">{chat.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-linkedin-border">
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-xs">Current:</span>
          <div className="flex items-center space-x-2">
            <span className="text-linkedin-light text-xs font-medium">AI Agent</span>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChatHistory;