import React from 'react';
import { 
  Rocket, 
  Building2, 
  Brain, 
  Target, 
  FileText, 
  Zap, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

interface OrientationScreenProps {
  onSelectVentureType: (type: 'new' | 'existing') => void;
}

const OrientationScreen: React.FC<OrientationScreenProps> = ({ onSelectVentureType }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="w-20 h-20 bg-gradient-to-r from-linkedin to-linkedin-light rounded-full flex items-center justify-center mx-auto mb-6">
          <Rocket className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to Venture Builder</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Our AI-powered platform will guide you through every step of building a successful venture, from idea to investment readiness.
        </p>
      </div>

      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-8 mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Brain className="w-6 h-6 text-linkedin-light mr-3" />
          AI-Powered Venture Building
        </h2>
        
        <p className="text-gray-300 mb-8">
          Our AI companion will guide you through a comprehensive venture building process, providing personalized recommendations, generating professional documentation, and helping you make data-driven decisions at every step.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-linkedin-card/50 rounded-lg p-5">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-linkedin/20 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-linkedin-light" />
              </div>
              <h3 className="text-lg font-semibold text-white">Structured Process</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Follow a proven methodology that guides you through market targeting, problem definition, business planning, product development, and investment readiness.
            </p>
          </div>
          
          <div className="bg-linkedin-card/50 rounded-lg p-5">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-linkedin/20 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-linkedin-light" />
              </div>
              <h3 className="text-lg font-semibold text-white">Professional Documentation</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Generate high-quality business plans, pitch decks, financial models, and other essential documents with AI assistance.
            </p>
          </div>
          
          <div className="bg-linkedin-card/50 rounded-lg p-5">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-linkedin/20 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-linkedin-light" />
              </div>
              <h3 className="text-lg font-semibold text-white">Data-Driven Insights</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Leverage market data and AI analysis to make informed decisions about your target market, business model, and go-to-market strategy.
            </p>
          </div>
          
          <div className="bg-linkedin-card/50 rounded-lg p-5">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-linkedin/20 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-linkedin-light" />
              </div>
              <h3 className="text-lg font-semibold text-white">Comprehensive Scoring</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Receive detailed scoring and feedback on your venture's market fit, business model, team composition, and investment readiness.
            </p>
          </div>
        </div>
        
        <div className="bg-linkedin/10 border border-linkedin/20 rounded-lg p-5 mb-8">
          <p className="text-linkedin-light font-medium mb-2">Why details matter:</p>
          <p className="text-gray-300 text-sm">
            The more detailed and accurate information you provide throughout this process, the better our AI can assist you. Comprehensive data leads to more accurate scoring, better recommendations, and ultimately, a stronger venture.
          </p>
        </div>
      </div>

      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Let's Get Started</h2>
        <p className="text-gray-300 mb-8">
          Are you building a new venture from scratch, or would you like to add an existing venture to the platform?
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div 
            onClick={() => onSelectVentureType('new')}
            className="bg-linkedin-card/50 rounded-xl border border-linkedin-border p-6 hover:border-linkedin/50 transition-all cursor-pointer group"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-linkedin to-linkedin-light rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">New Venture</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Start from scratch and build your venture step-by-step with AI guidance.
            </p>
            <div className="flex justify-end">
              <ArrowRight className="w-5 h-5 text-linkedin-light group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
          
          <div 
            onClick={() => onSelectVentureType('existing')}
            className="bg-linkedin-card/50 rounded-xl border border-linkedin-border p-6 hover:border-linkedin/50 transition-all cursor-pointer group"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-linkedin to-linkedin-light rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Existing Venture</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Add your existing venture and enhance it with our structured process and AI insights.
            </p>
            <div className="flex justify-end">
              <ArrowRight className="w-5 h-5 text-linkedin-light group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrientationScreen;