import React, { useState } from 'react';
import { useEffect } from 'react';
import { 
  Play, 
  ArrowRight, 
  Users, 
  TrendingUp, 
  MessageSquare, 
  Search,
  Building2,
  Target,
  BarChart3,
  Globe,
  CheckCircle,
  Zap
} from 'lucide-react';

interface WelcomeScreenProps {
  profileCompleted: boolean;
  onEnterPlatform: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ profileCompleted, onEnterPlatform }) => {
  const [currentStep, setCurrentStep] = useState(0);

  // Scroll to top when component mounts or step changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  const tutorialSteps = [
    {
      title: "Welcome to Venture Weavers",
      description: "Your gateway to the MENA startup ecosystem",
      icon: Building2,
      content: "Venture Weavers connects founders, investors, and mentors across the Middle East and North Africa region. Our AI-powered platform helps you discover opportunities, build relationships, and scale your venture.",
      screenshot: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "AI-powered matching system",
        "Regional market insights",
        "Secure networking platform",
        "Real-time collaboration tools"
      ]
    },
    {
      title: "Social Network",
      description: "Connect with the venture ecosystem",
      icon: Users,
      content: "Build meaningful relationships with verified founders, investors, and industry experts. Our social network facilitates authentic connections and helps you expand your professional network across the MENA region.",
      screenshot: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Verified user profiles",
        "Industry-specific networking",
        "Event and meetup integration",
        "Mentorship connections"
      ]
    },
    {
      title: "Equity Trading Marketplace",
      description: "Trade equity stakes and investments",
      icon: TrendingUp,
      content: "Access a secure marketplace for trading equity stakes in startups and growth companies. Discover investment opportunities, manage your portfolio, and connect with other investors in a transparent environment.",
      screenshot: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Secure equity trading",
        "Real-time market data",
        "Portfolio management tools",
        "Due diligence resources"
      ]
    },
    {
      title: "Expert Marketplace",
      description: "Access industry expertise on-demand",
      icon: MessageSquare,
      content: "Connect with seasoned professionals, advisors, and consultants who can provide strategic guidance, technical expertise, and industry insights to accelerate your venture's growth.",
      screenshot: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Expert verification system",
        "Flexible engagement models",
        "Specialized industry knowledge",
        "Project-based consulting"
      ]
    }
  ];

  const nextStep = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const skipTutorial = () => {
    onEnterPlatform();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-linkedin-background via-linkedin-dark to-linkedin-background">
      {/* Header */}
      <header className="px-6 py-4 border-b border-linkedin-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-linkedin to-linkedin-light rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Venture Weavers</span>
          </div>
          <div className="flex items-center space-x-4">
            {profileCompleted && (
              <div className="flex items-center space-x-2 bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>Profile Complete</span>
              </div>
            )}
            <button
              onClick={skipTutorial}
              className="text-gray-400 hover:text-white transition-colors text-sm underline"
            >
              Skip Tutorial
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Welcome Message */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-linkedin to-linkedin-light rounded-full flex items-center justify-center mx-auto mb-6">
            <Play className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            {profileCompleted ? "Welcome back!" : "Welcome to Venture Weavers!"}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {profileCompleted 
              ? "Your profile is complete and you're ready to explore the platform. Let's take a quick tour of what you can do."
              : "Let's take a quick tour of the platform to help you get started and make the most of your VentureHub experience."
            }
          </p>
        </div>

        {/* Tutorial Steps */}
        <div className="bg-linkedin-card backdrop-blur-lg rounded-2xl border border-linkedin-border overflow-hidden">
          {/* Progress Bar */}
          <div className="p-6 border-b border-linkedin-border">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">Platform Tutorial</h2>
              <span className="text-gray-400">
                {currentStep + 1} of {tutorialSteps.length}
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-linkedin to-linkedin-light h-2 rounded-full transition-all duration-500"
                style={{ width: `${((currentStep + 1) / tutorialSteps.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Current Step Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-linkedin to-linkedin-light rounded-lg flex items-center justify-center">
                    {React.createElement(tutorialSteps[currentStep].icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{tutorialSteps[currentStep].title}</h3>
                    <p className="text-linkedin-light">{tutorialSteps[currentStep].description}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  {tutorialSteps[currentStep].content}
                </p>

                {/* Navigation Buttons */}
                <div className="flex items-center space-x-4">
                  <button
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-all border border-white/20"
                  >
                    Previous
                  </button>
                  
                  {currentStep < tutorialSteps.length - 1 ? (
                    <button
                      onClick={nextStep}
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white rounded-lg transition-all"
                    >
                      <span>Next</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={onEnterPlatform}
                      className="flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-linkedin to-linkedin-dark hover:from-linkedin-dark hover:to-linkedin text-white rounded-lg transition-all transform hover:scale-105"
                    >
                      <span>Enter Platform</span>
                      <Zap className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Right Side - Screenshot and Features */}
              <div className="space-y-6">
                {/* Screenshot */}
                <div className="bg-linkedin-card/50 backdrop-blur-sm rounded-xl border border-linkedin-border overflow-hidden">
                  <img 
                    src={tutorialSteps[currentStep].screenshot} 
                    alt={`${tutorialSteps[currentStep].title} Screenshot`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-white mb-2">{tutorialSteps[currentStep].title} Preview</h4>
                    <p className="text-gray-400 text-sm">Experience the power of {tutorialSteps[currentStep].title.toLowerCase()} on Venture Weavers</p>
                  </div>
                </div>
                
                {/* Features */}
                <div className="bg-linkedin-card/50 backdrop-blur-sm rounded-xl p-6 border border-linkedin-border">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                  <div className="space-y-3">
                    {tutorialSteps[currentStep].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-linkedin-light rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            onClick={onEnterPlatform}
            className="bg-linkedin-card backdrop-blur-lg rounded-xl p-6 border border-linkedin-border hover:border-linkedin/50 transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 bg-linkedin rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Social Network</h3>
            <p className="text-gray-400 text-sm">Connect with founders, investors, and experts</p>
          </div>
          
          <div 
            onClick={onEnterPlatform}
            className="bg-linkedin-card backdrop-blur-lg rounded-xl p-6 border border-linkedin-border hover:border-linkedin-light/50 transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 bg-linkedin-light rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Equity Trading</h3>
            <p className="text-gray-400 text-sm">Trade equity stakes and manage investments</p>
          </div>
          
          <div 
            onClick={onEnterPlatform}
            className="bg-linkedin-card backdrop-blur-lg rounded-xl p-6 border border-linkedin-border hover:border-linkedin/50 transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 bg-linkedin-dark rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Expert Marketplace</h3>
            <p className="text-gray-400 text-sm">Access industry expertise and consulting</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;