import React, { useState } from 'react';
import { 
  Brain, 
  Send
} from 'lucide-react';

interface KnowledgeBaseChatProps {
  onSendMessage: (message: string) => void;
}

const KnowledgeBaseChat: React.FC<KnowledgeBaseChatProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="h-full flex flex-col">
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
                <h4 className="text-white font-medium">Knowledge Navigator</h4>
                <span className="bg-linkedin/20 text-linkedin-light px-2 py-0.5 rounded-full text-xs">
                  AI Agent
                </span>
              </div>
              <div className="text-gray-300 space-y-2">
                <p>
                  Welcome to the Knowledge Base stage! I'm your Knowledge Navigator, and I'll help you build a strong foundation for your venture.
                </p>
                <p>
                  To provide you with the most accurate guidance, I'll need some information about your market and venture. You can upload relevant documents like market research reports, business plans, or any other materials that will help me understand your venture better.
                </p>
                <p>
                  What kind of documents would you like to upload today?
                </p>
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
                placeholder="Ask me anything about the knowledge base..."
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

export default KnowledgeBaseChat;