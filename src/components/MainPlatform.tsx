import React, { useState, useEffect, useRef } from 'react';
import ActivityFeed from './social/ActivityFeed';
import LeftSidebar from './social/LeftSidebar';
import SocialAICompanionChat from './social/SocialAICompanionChat';
import Communities from './social/Communities';
import Events from './social/Events';
import SavedPosts from './social/SavedPosts';
import NetworkDiscovery from './social/NetworkDiscovery';
import Messaging from './social/Messaging';
import ExpertsMarketplace from './marketplace/ExpertsMarketplace';
import ExpertsMarketplaceSidebar from './marketplace/ExpertsMarketplaceSidebar';
import MarketIntelligence from './intelligence/MarketIntelligence';
import MarketIntelligenceSidebar from './intelligence/MarketIntelligenceSidebar';
import TradingSidebar from './trading/TradingSidebar';
import TradingDashboard from './trading/TradingDashboard';
import OpportunityMarketplace from './trading/OpportunityMarketplace';
import SavedOpportunities from './trading/SavedOpportunities';
import MyInvestments from './investments/MyInvestments';
import ProfileView from './profile/ProfileView';
import MyVentures from './ventures/MyVentures';
import VentureBuilder from './venture_builder/VentureBuilder';
import SellingVentureListing from './trading/SellingVentureListing';
import { Search, Users, BarChart3, MessageSquare, Bell, Settings, Building2, TrendingUp, Globe, Filter, Plus, Star, MapPin, DollarSign, Calendar, Eye, Heart, Share2, Brain, Bookmark, Mail, Briefcase, UserSearch, Lightbulb, Target } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import MyServicesMain from './my_services/MyServicesMain';

interface MainPlatformProps {
  profileCompleted: boolean;
  onReturnToOnboarding: () => void;
}

const MainPlatform: React.FC<MainPlatformProps> = ({ profileCompleted, onReturnToOnboarding }) => {
  const [activeTab, setActiveTab] = useState('social');
  const [showProfileView, setShowProfileView] = useState(false);
  const [showMyVentures, setShowMyVentures] = useState(false);
  const [showVentureBuilder, setShowVentureBuilder] = useState(false);
  const [hasVenturesInPipeline, setHasVenturesInPipeline] = useState(false);
  const [activeSocialSection, setActiveSocialSection] = useState('feed');
  const [activeExpertsMarketplaceSection, setActiveExpertsMarketplaceSection] = useState('discover-experts');
  const [activeMyServicesSection, setActiveMyServicesSection] = useState('overview');
  const [activeTradingSection, setActiveTradingSection] = useState('portfolio-summary');
  const [activeInvestmentSection, setActiveInvestmentSection] = useState('portfolio-summary');
  const [activeMarketIntelligenceSection, setActiveMarketIntelligenceSection] = useState('intelligence-dashboard');
  const [showMyInvestmentsGroup, setShowMyInvestmentsGroup] = useState(true); // Show investment group by default
  const [selectedVentureId, setSelectedVentureId] = useState<number | null>(null);
  const [myInvestmentsActiveSubSection, setMyInvestmentsActiveSubSection] = useState('portfolio-summary');
  const [isSocialAICompanionOpen, setIsSocialAICompanionOpen] = useState(false);
  const [isMyInvestmentsView, setIsMyInvestmentsView] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showNotificationsDropdown, setShowNotificationsDropdown] = useState(false);

  // Scroll to top whenever the active tab or social section changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab, activeSocialSection, activeExpertsMarketplaceSection, activeMarketIntelligenceSection, activeInvestmentSection]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowProfileDropdown(false);
      }
    };

    const handleClickOutsideNotifications = (event: MouseEvent) => {
      const notificationDropdown = document.getElementById('notifications-dropdown');
      const notificationButton = document.getElementById('notification-button');
      if (notificationDropdown && !notificationDropdown.contains(event.target as Node) && 
          notificationButton && !notificationButton.contains(event.target as Node)) {
        setShowNotificationsDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('mousedown', handleClickOutsideNotifications);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('mousedown', handleClickOutsideNotifications);
    };
  }, []);

  const navigationItems = [
    { id: 'social', label: 'Social Network', icon: Users },
    { id: 'trading', label: 'Equity Trading', icon: TrendingUp },
    { id: 'intelligence', label: 'Market Intelligence', icon: Target },
    { id: 'experts', label: 'Experts Marketplace', icon: Lightbulb }
  ];

  const opportunities = [
    {
      id: 1,
      type: 'Startup',
      title: 'FinTech Revolution',
      company: 'PayMENA',
      location: 'Dubai, UAE',
      stage: 'Series A',
      funding: '$2.5M',
      industry: 'Fintech',
      description: 'Revolutionary payment platform for MENA markets with AI-powered fraud detection.',
      tags: ['Fintech', 'AI', 'Payments'],
      match: 95,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      type: 'Investor',
      title: 'MENA Growth Fund',
      company: 'Venture Partners',
      location: 'Riyadh, Saudi Arabia',
      stage: 'Seed to Series B',
      funding: '$50M Fund',
      industry: 'Multi-sector',
      description: 'Leading VC fund focusing on high-growth startups across MENA region.',
      tags: ['VC', 'Growth', 'Multi-sector'],
      match: 88,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      type: 'Mentor',
      title: 'E-commerce Expert',
      company: 'Former Souq.com VP',
      location: 'Cairo, Egypt',
      stage: 'All stages',
      funding: 'Advisory',
      industry: 'E-commerce',
      description: 'Former VP at Souq.com with 15+ years experience in MENA e-commerce.',
      tags: ['E-commerce', 'Scaling', 'Strategy'],
      match: 92,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  // Sample notifications data
  const sampleNotifications = [
    {
      id: 1,
      title: 'New investment opportunity',
      message: 'AgriTech Innovations is raising Series A',
      time: '2 hours ago',
      type: 'investment',
      unread: true,
    },
    {
      id: 2,
      title: 'Portfolio update',
      message: 'HealthFlow Solutions posted Q4 results',
      time: '1 day ago',
      type: 'portfolio',
      unread: true,
    },
    {
      id: 3,
      title: 'Network activity',
      message: 'Sarah Khalil shared a market insight',
      time: '2 days ago',
      type: 'network',
      unread: false,
    },
    {
      id: 4,
      title: 'New message from John Doe',
      message: 'Hey, I saw your post about scaling startups...',
      time: '3 days ago',
      type: 'message',
      unread: true,
    },
  ];

  const unreadNotificationsCount = sampleNotifications.filter(n => n.unread).length;

  const getNotificationItemClass = (type: string, unread: boolean) => {
    let baseClasses = 'p-4 border-b border-linkedin-border/50 hover:bg-linkedin-card/50 transition-colors cursor-pointer';
    let typeClasses = '';
    let unreadClasses = '';

    switch (type) {
      case 'investment':
        typeClasses = 'bg-blue-500/10';
        break;
      case 'portfolio':
        typeClasses = 'bg-green-500/10';
        break;
      case 'network':
        typeClasses = 'bg-purple-500/10';
        break;
      case 'message':
        typeClasses = 'bg-yellow-500/10';
        break;
    }

    if (unread) {
      unreadClasses = 'border-l-4 border-linkedin-light font-semibold';
    }

    return `${baseClasses} ${typeClasses} ${unreadClasses}`;
  };

  // Mock profile data for demonstration
  const mockProfileData = {
    profileInfo: {
      fullName: "John Doe",
      emailAddress: "john.doe@example.com",
      phoneNumber: "+971 50 123 4567",
      linkedInProfile: "https://linkedin.com/in/johndoe",
      role: "Founder & Investor",
      countryOfResidence: "Dubai, UAE",
      preferredLanguage: "English"
    },
    professionalBackground: {
      currentOccupation: "Serial Entrepreneur & Investor",
      yearsOfExperience: "15+ years",
      entrepreneurialExperience: "Founded 3 startups, 2 successful exits",
      industryExpertise: ["Fintech", "E-commerce", "SaaS"],
      marketExpertise: ["MENA", "GCC", "UAE"],
      keySkills: ["Business Strategy", "Fundraising", "Team Building", "Product Development"]
    },
    entrepreneurialMindset: {
      riskTolerance: "Moderate to High",
      decisionMakingStyle: "Data-driven with intuition",
      leadershipStyle: "Collaborative",
      learningPreferences: "Experiential",
      recommendationPreferences: "Balanced",
      preferredTools: ["Financial Modeling", "Market Research", "Competitive Analysis"]
    },
    portfolioInterests: {
      industriesOfInterest: ["Fintech", "HealthTech", "CleanTech"],
      subIndustryInterest: ["Digital Payments", "Telemedicine", "Renewable Energy"],
      desiredMarketFocus: ["UAE", "Saudi Arabia", "Egypt"],
      businessModelInterest: ["SaaS", "Marketplace", "B2B"],
      growthExpectations: "25-40% YoY",
      buildingApproach: "Balanced",
      diversificationLevel: "Moderate",
      allocationStrategy: "Core-Satellite",
      targetReturns: "3-5x in 5 years",
      exitStrategy: "Strategic Acquisition"
    },
    directionThesis: {
      strategicGoals: ["Build sustainable businesses", "Create regional impact"],
      strategicObjectives: ["Achieve market leadership", "Drive innovation"],
      philosophy: "Value-based investing with long-term horizon",
      riskAppetite: "Calculated risks with proper due diligence",
      esgImpact: "Prioritize environmental and social impact",
      capabilities: ["Strategic guidance", "Network access", "Operational expertise"],
      keyMetrics: ["Revenue growth", "Customer acquisition", "Unit economics"]
    },
    portfolioDirection: {
      totalBootstrapFund: "$5M",
      industryFocus: ["Fintech", "HealthTech", "EdTech"],
      geographicalFocus: ["UAE", "Saudi Arabia", "Egypt"],
      problemFocus: ["Financial inclusion", "Healthcare access", "Education quality"],
      businessModelFocus: ["SaaS", "Marketplace", "B2B"],
      buildingApproach: "Balanced",
      diversificationLevel: "Moderate",
      allocationStrategy: "Core-Satellite",
      exitStrategy: "Strategic Acquisition"
    },
    ventureCriteria: {
      buildingFundSize: "$5M",
      avgTicketSize: "$250K-$500K",
      portfolioSize: "10-15 companies",
      joiningType: "Active investor",
      ventureStage: ["Seed", "Series A"],
      equityOwnership: "5-15%",
      targetPosition: "Board member",
      cofoundersCriteria: ["Domain expertise", "Technical skills", "Market knowledge"]
    }
  };

  const renderDiscoverTab = () => (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl p-6 border border-linkedin-border">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search opportunities, companies, or people..."
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin"
            />
          </div>
          <button className="flex items-center space-x-2 bg-linkedin hover:bg-linkedin-dark text-white px-6 py-3 rounded-lg transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>
      </div>

      {/* Opportunities Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {opportunities.map((opportunity) => (
          <div key={opportunity.id} className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border hover:border-linkedin/50 transition-all group overflow-hidden">
            <div className="relative">
              <img 
                src={opportunity.image} 
                alt={opportunity.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-linkedin text-white px-3 py-1 rounded-full text-sm font-medium">
                  {opportunity.type}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  {opportunity.match}% Match
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{opportunity.title}</h3>
                  <p className="text-linkedin-light text-sm">{opportunity.company}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{opportunity.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <DollarSign className="w-4 h-4" />
                  <span>{opportunity.funding}</span>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                {opportunity.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {opportunity.tags.map((tag, index) => (
                  <span key={index} className="bg-linkedin-card text-gray-300 px-2 py-1 rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                    <Heart className="w-4 h-4 text-gray-400" />
                  </button>
                  <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                    <Share2 className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
                <button className="bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
                  Connect
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTradingMarketplaceTab = () => (
    <MyInvestments 
      activeSection={activeInvestmentSection}
      onSectionChange={setActiveInvestmentSection}
      isSocialAICompanionOpen={isSocialAICompanionOpen}
      setIsSocialAICompanionOpen={setIsSocialAICompanionOpen}
    />
  );

  const renderMyInvestmentsTab = () => (
    <MyInvestments 
      activeSection={activeInvestmentSection}
      onSectionChange={setActiveInvestmentSection}
    />
  );

  const renderTradingTabContent = () => (
    <div className="min-h-screen bg-gradient-to-br from-linkedin-background via-linkedin-dark to-linkedin-background">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className={`grid grid-cols-1 gap-6 ${
          isSocialAICompanionOpen 
            ? 'lg:grid-cols-6 xl:grid-cols-7' 
            : 'lg:grid-cols-4 xl:grid-cols-5'
        }`}>
          {/* Left Sidebar */}
          <div className={isSocialAICompanionOpen ? 'lg:col-span-1' : 'lg:col-span-1'}>
            console.log('MainPlatform - Rendering MyInvestments with:', {
              activeTradingSection,
              myInvestmentsActiveSubSection,
              selectedVentureId
            }),
            <TradingSidebar 
              activeSection={activeTradingSection}
              onSectionChange={(sectionId) => {
                // Reset My Investments view if navigating to non-investment sections
                const myInvestmentsSections = ['investment-pipeline', 'portfolio-summary', 'explore-portfolio', 'portfolio-management', 'saved-investment-opportunities'];
                if (isMyInvestmentsView && !myInvestmentsSections.includes(sectionId)) {
                  setIsMyInvestmentsView(false);
                }
                
                // If user navigates to investment pipeline, set hasVenturesInPipeline to true
                if (sectionId === 'investment-pipeline') {
                  setHasVenturesInPipeline(true);
                }
                setActiveTradingSection(sectionId);
                setShowMyInvestmentsGroup(hasVenturesInPipeline);
              }}
              isCollapsed={isSocialAICompanionOpen}
              showMyInvestmentsGroup={hasVenturesInPipeline}
              isMyInvestmentsView={isMyInvestmentsView}
            />
          </div>

          {/* Main Content Area */}
          <div className={
            isSocialAICompanionOpen 
              ? 'lg:col-span-3 xl:col-span-4' 
              : 'lg:col-span-3 xl:col-span-4'
          }>
            {activeTradingSection === 'trading-dashboard' && <TradingDashboard onSectionChange={(sectionId) => {
              setActiveTradingSection(sectionId);
              setShowMyInvestmentsGroup(['investment-pipeline', 'portfolio-summary', 'explore-portfolio', 'saved-investment-opportunities', 'deal-screening'].includes(sectionId));
            }} />}
            {activeTradingSection === 'opportunity-marketplace' && <OpportunityMarketplace onSectionChange={(sectionId) => {
              setActiveTradingSection(sectionId);
              // If user adds venture to pipeline from opportunity marketplace
              if (sectionId === 'investment-pipeline') {
                setHasVenturesInPipeline(true);
              }
              setShowMyInvestmentsGroup(hasVenturesInPipeline);
            }} />}
            {activeTradingSection === 'selling-venture-listing' && (
              <SellingVentureListing 
                onSectionChange={(sectionId) => {
                  setActiveTradingSection(sectionId);
                  setShowMyInvestmentsGroup(hasVenturesInPipeline);
                }}
                setSelectedVentureId={setSelectedVentureId}
                setMyInvestmentsActiveSubSection={setMyInvestmentsActiveSubSection}
              />
            )}
            {activeTradingSection === 'saved-opportunities' && <SavedOpportunities onSectionChange={(sectionId) => {
              setActiveTradingSection(sectionId);
              if (sectionId === 'investment-pipeline') {
                setHasVenturesInPipeline(true);
              }
              setShowMyInvestmentsGroup(hasVenturesInPipeline);
            }} />}
            {/* Render MyInvestments content when an investment sub-section is active */}
            {['investment-pipeline', 'portfolio-summary', 'explore-portfolio', 'portfolio-management', 'saved-investment-opportunities', 'venture-listing'].includes(activeTradingSection) && (
              <MyInvestments
                activeSection={activeTradingSection === 'portfolio-management' ? myInvestmentsActiveSubSection : activeTradingSection}
                onSectionChange={(sectionId) => {
                  if (activeTradingSection === 'portfolio-management') {
                    setMyInvestmentsActiveSubSection(sectionId);
                  } else {
                    setActiveTradingSection(sectionId);
                  }
                  setShowMyInvestmentsGroup(hasVenturesInPipeline);
                }}
                selectedVentureId={selectedVentureId}
                setSelectedVentureId={setSelectedVentureId}
                activeSubSection={myInvestmentsActiveSubSection}
                setActiveSubSection={setMyInvestmentsActiveSubSection}
                isSocialAICompanionOpen={isSocialAICompanionOpen}
                setIsSocialAICompanionOpen={setIsSocialAICompanionOpen}
              />
            )}
          </div>

          {/* AI Companion Chat */}
          {isSocialAICompanionOpen && (
            <div className="lg:col-span-2">
              <div className="sticky top-8 h-[calc(100vh-120px)]">
                <SocialAICompanionChat 
                  activeSocialSection={activeSocialSection}
                  activeExpertsMarketplaceSection={activeExpertsMarketplaceSection}
                  activeMarketIntelligenceSection={activeMarketIntelligenceSection}
                  activeTradingSection={activeTradingSection} // Pass activeTradingSection
                  activeMyServicesSection={activeMyServicesSection}
                  activeTab={activeTab}
                  onClose={() => setIsSocialAICompanionOpen(false)}
                />
              </div>
            </div>
          )}
        </div>

        {/* AI Companion Toggle Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setIsSocialAICompanionOpen(!isSocialAICompanionOpen)}
            className={`flex items-center space-x-3 px-4 py-3 rounded-full shadow-lg transition-all transform hover:scale-105 ${
              isSocialAICompanionOpen
                ? 'bg-linkedin-dark text-white'
                : 'bg-gradient-to-r from-linkedin to-linkedin-light text-white hover:from-linkedin-dark hover:to-linkedin'
            }`}
          >
            <Brain className="w-5 h-5" />
            <span className="font-medium text-sm">
              Equity Trading Assistant
            </span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderMarketIntelligenceTab = () => (
    <div className="min-h-screen bg-gradient-to-br from-linkedin-background via-linkedin-dark to-linkedin-background">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className={`grid grid-cols-1 gap-6 ${
          isSocialAICompanionOpen 
            ? 'lg:grid-cols-6 xl:grid-cols-7' 
            : 'lg:grid-cols-4 xl:grid-cols-5'
        }`}>
          {/* Left Sidebar */}
          <div className={isSocialAICompanionOpen ? 'lg:col-span-1' : 'lg:col-span-1'}>
            <MarketIntelligenceSidebar 
              activeSection={activeMarketIntelligenceSection} 
              onSectionChange={setActiveMarketIntelligenceSection}
              isCollapsed={isSocialAICompanionOpen}
            />
          </div>

          {/* Main Content Area */}
          <div className={
            isSocialAICompanionOpen 
              ? 'lg:col-span-3 xl:col-span-4' 
              : 'lg:col-span-3 xl:col-span-4'
          }>
            <MarketIntelligence 
              activeSection={activeMarketIntelligenceSection}
              onSectionChange={setActiveMarketIntelligenceSection}
            />
          </div>

          {/* AI Companion Chat */}
          {isSocialAICompanionOpen && (
            <div className="lg:col-span-2">
              <div className="sticky top-8 h-[calc(100vh-120px)]">
                <SocialAICompanionChat 
                  activeSocialSection={activeSocialSection}
                  activeExpertsMarketplaceSection={activeExpertsMarketplaceSection}
                  activeMarketIntelligenceSection={activeMarketIntelligenceSection}
                  activeMyServicesSection={activeMyServicesSection}
                  activeTab={activeTab}
                  onClose={() => setIsSocialAICompanionOpen(false)}
                />
              </div>
            </div>
          )}
        </div>

        {/* AI Companion Toggle Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setIsSocialAICompanionOpen(!isSocialAICompanionOpen)}
            className={`flex items-center space-x-3 px-4 py-3 rounded-full shadow-lg transition-all transform hover:scale-105 ${
              isSocialAICompanionOpen
                ? 'bg-linkedin-dark text-white'
                : 'bg-gradient-to-r from-linkedin to-linkedin-light text-white hover:from-linkedin-dark hover:to-linkedin'
            }`}
          >
            <Brain className="w-5 h-5" />
            <span className="font-medium text-sm">Market Intelligence Assistant</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderExpertMarketplaceTab = () => (
    <ExpertsMarketplace 
      activeSection={activeExpertsMarketplaceSection}
      onSectionChange={setActiveExpertsMarketplaceSection}
    />
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'social':
        return renderSocialNetworkTab(); // This function is defined below
      case 'trading':
        return renderTradingTabContent(); // Use the new function for trading content
      case 'intelligence':
        return renderMarketIntelligenceTab();
      case 'my-services':
        return <MyServicesMain activeSection={activeMyServicesSection} onSectionChange={setActiveMyServicesSection} />;
      case 'experts':
        return (
          <div className="min-h-screen bg-gradient-to-br from-linkedin-background via-linkedin-dark to-linkedin-background">
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className={`grid grid-cols-1 gap-6 ${
                isSocialAICompanionOpen 
                  ? 'lg:grid-cols-6 xl:grid-cols-7' 
                  : 'lg:grid-cols-4 xl:grid-cols-5'
              }`}>
                {/* Left Sidebar */}
                <div className={isSocialAICompanionOpen ? 'lg:col-span-1' : 'lg:col-span-1'}>
                  <ExpertsMarketplaceSidebar 
                    activeSection={activeExpertsMarketplaceSection} 
                    onSectionChange={setActiveExpertsMarketplaceSection}
                    isCollapsed={isSocialAICompanionOpen}
                  />
                </div>

                {/* Main Content Area */}
                <div className={
                  isSocialAICompanionOpen 
                    ? 'lg:col-span-3 xl:col-span-4' 
                    : 'lg:col-span-3 xl:col-span-4'
                }>
                  {renderExpertMarketplaceTab()}
                </div>

                {/* AI Companion Chat */}
                {isSocialAICompanionOpen && (
                  <div className="lg:col-span-2">
                    <div className="sticky top-8 h-[calc(100vh-120px)]">
                      <SocialAICompanionChat 
                        activeSocialSection={activeSocialSection}
                        activeExpertsMarketplaceSection={activeExpertsMarketplaceSection}
                        activeTab={activeTab}
                        onClose={() => setIsSocialAICompanionOpen(false)}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* AI Companion Toggle Button */}
              <div className="fixed bottom-6 right-6 z-50">
                <button
                  onClick={() => setIsSocialAICompanionOpen(!isSocialAICompanionOpen)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-full shadow-lg transition-all transform hover:scale-105 ${
                    isSocialAICompanionOpen
                      ? 'bg-linkedin-dark text-white'
                      : 'bg-gradient-to-r from-linkedin to-linkedin-light text-white hover:from-linkedin-dark hover:to-linkedin'
                  }`}
                >
                  <Brain className="w-5 h-5" />
                  <span className="font-medium text-sm">
                    {activeTab === 'social' ? 'Social Network Builder' : 'Expert Marketplace Assistant'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return renderSocialNetworkTab();
    }
  };

  const renderSocialNetworkTab = () => (
    <div className="min-h-screen bg-gradient-to-br from-linkedin-background via-linkedin-dark to-linkedin-background">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className={`grid grid-cols-1 gap-6 ${
          isSocialAICompanionOpen 
            ? 'lg:grid-cols-6 xl:grid-cols-7' 
            : 'lg:grid-cols-4 xl:grid-cols-5'
        }`}>
          {/* Left Sidebar - Always visible in social network */}
          <div className={isSocialAICompanionOpen ? 'lg:col-span-1' : 'lg:col-span-1'}>
            <LeftSidebar 
              activeSection={activeSocialSection} 
              onSectionChange={setActiveSocialSection}
              isCollapsed={isSocialAICompanionOpen}
            />
          </div>

          {/* Main Content Area */}
          <div className={
            isSocialAICompanionOpen 
              ? 'lg:col-span-3 xl:col-span-4' 
              : 'lg:col-span-3 xl:col-span-4'
          }>
            {activeSocialSection === 'feed' && <ActivityFeed />}
            {activeSocialSection === 'communities' && <Communities />}
            {activeSocialSection === 'events' && <Events />}
            {activeSocialSection === 'network' && <NetworkDiscovery />}
            {activeSocialSection === 'saved' && <SavedPosts />}
            {activeSocialSection === 'messaging' && <Messaging />}
          </div>

          {/* AI Companion Chat */}
          {isSocialAICompanionOpen && (
            <div className="lg:col-span-2">
              <div className="sticky top-8 h-[calc(100vh-120px)]">
                <SocialAICompanionChat 
                  activeSocialSection={activeSocialSection}
                  onClose={() => setIsSocialAICompanionOpen(false)}
                />
              </div>
            </div>
          )}
        </div>

        {/* AI Companion Toggle Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setIsSocialAICompanionOpen(!isSocialAICompanionOpen)}
            className={`flex items-center space-x-3 px-4 py-3 rounded-full shadow-lg transition-all transform hover:scale-105 ${
              isSocialAICompanionOpen
                ? 'bg-linkedin-dark text-white'
                : 'bg-gradient-to-r from-linkedin to-linkedin-light text-white hover:from-linkedin-dark hover:to-linkedin'
            }`}
          >
            <Brain className="w-5 h-5" />
            <span className="font-medium text-sm">Social Network Builder</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="px-6 py-4 border-b border-linkedin-border bg-linkedin-background relative z-[50]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-linkedin to-linkedin-light rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Venture Weavers</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  // Reset all specific view states when navigating to main tabs
                  setShowProfileView(false);
                  setShowMyVentures(false);
                  setShowVentureBuilder(false);
                  setIsMyInvestmentsView(false);
                  // Close all dropdowns when navigating
                  setShowNotificationsDropdown(false);
                  setShowProfileDropdown(false);
                  
                  setActiveTab(item.id);
                  // Set default section for trading tab
                  if (item.id === 'trading') {
                    setActiveTradingSection('trading-dashboard');
                   setIsMyInvestmentsView(false); // Ensure My Investments view is disabled
                  }
                }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === item.id
                    ? 'bg-linkedin text-white'
                    : 'text-gray-300 hover:text-white hover:bg-linkedin-card'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="whitespace-nowrap">{item.label}</span>
              </button>
            ))}
          </nav>
          
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => {
                setActiveTab('social');
                setActiveSocialSection('network');
                setIsMyInvestmentsView(false);
                // Close all dropdowns when navigating
                setShowNotificationsDropdown(false);
                setShowProfileDropdown(false);
              }}
              className="p-2 text-gray-400 hover:text-white transition-colors"
              title="Network"
            >
              <UserSearch className="w-5 h-5" />
            </button>
            <button 
              onClick={() => {
                setActiveTab('social');
                setActiveSocialSection('messaging');
                setIsMyInvestmentsView(false);
                // Close all dropdowns when navigating
                setShowNotificationsDropdown(false);
                setShowProfileDropdown(false);
              }}
              className="p-2 text-gray-400 hover:text-white transition-colors"
              title="Messaging"
            >
              <MessageSquare className="w-5 h-5" />
            </button>
            <div className="relative">
              <button 
                id="notification-button"
                onClick={() => setShowNotificationsDropdown(!showNotificationsDropdown)}
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <Bell className="w-5 h-5 relative z-[50]" />
              </button>
              
              {unreadNotificationsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {unreadNotificationsCount}
                </span>
              )}

              <button 
                onClick={() => {
                  setShowVentureBuilder(true);
                  setShowProfileView(false);
                  setShowMyVentures(false);
                  setIsMyInvestmentsView(false);
                  // Close all dropdowns when navigating
                  setShowNotificationsDropdown(false);
                  setShowProfileDropdown(false);
                }}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                title="Venture Builder"
              >
                <Brain className="w-5 h-5" />
              </button>
              {/* Notifications Dropdown */}
              {showNotificationsDropdown && (
                <div id="notifications-dropdown" className="absolute right-0 mt-2 w-80 bg-linkedin-card rounded-lg shadow-lg border border-linkedin-border z-[9999]" style={{top: '100%'}}>
                  <div className="p-4 border-b border-linkedin-border">
                    <h3 className="text-white font-semibold">Notifications ({unreadNotificationsCount} unread)</h3>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {sampleNotifications.map((notification) => (
                      <div key={notification.id} className={getNotificationItemClass(notification.type, notification.unread)}>
                        <h4 className="text-white text-sm mb-1">{notification.title}</h4>
                        <p className="text-gray-300 text-xs mb-2">{notification.message}</p>
                        <span className="text-gray-500 text-xs">{notification.time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 border-t border-linkedin-border">
                    <button className="w-full text-linkedin-light hover:text-linkedin text-sm font-medium transition-colors">
                      View All Notifications
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Profile Dropdown */}
            <div className="relative z-[50]" ref={dropdownRef}>
              <div 
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              >
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100" 
                  alt="Profile" 
                  className="w-10 h-10 rounded-full object-cover border-2 border-linkedin"
                />
                <div className="hidden md:block">
                  <p className="text-white font-medium text-sm">John Doe</p>
                  <p className="text-gray-400 text-xs">Entrepreneur & Investor</p>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
              
              {showProfileDropdown && (
                <div className="fixed right-0 mt-2 w-64 bg-linkedin-card rounded-lg shadow-lg border border-linkedin-border z-[9999]" style={{top: '60px', right: '20px'}}>
                  <div className="p-4 border-b border-linkedin-border">
                    <div className="flex items-center space-x-3">
                      <img 
                        src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100" 
                        alt="Profile" 
                        className="w-12 h-12 rounded-full object-cover border-2 border-linkedin"
                      />
                      <div>
                        <p className="text-white font-semibold">John Doe</p>
                        <p className="text-gray-400 text-sm">Entrepreneur & Investor</p>
                      </div>
                    </div>
                    
                    {!profileCompleted && (
                      <button
                        onClick={onReturnToOnboarding}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors mt-3"
                      >
                        Complete Profile
                      </button>
                    )}
                    
                    <div className="mt-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-gray-300 text-sm">Profile Completion</span>
                        <span className="text-linkedin-light text-sm">80%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-linkedin to-linkedin-light h-2 rounded-full"
                          style={{ width: '80%' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="mt-3 flex items-center space-x-2">
                      <div className="bg-gradient-to-r from-linkedin to-linkedin-light px-2 py-1 rounded text-xs text-white">
                        VentureHub Pro
                      </div>
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                  </div>
                  
                  <div className="py-2">
                    <button 
                      onClick={() => {
                        setShowProfileView(true);
                        setShowMyVentures(false); // Ensure MyVentures is false
                        setShowVentureBuilder(false); // Ensure VentureBuilder is false
                        setShowProfileDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 text-gray-300 hover:bg-linkedin-background/50 hover:text-white transition-colors relative z-[9999]"
                    >
                      View/Edit Profile
                    </button>
                    <button
                      onClick={() => {
                        setShowMyVentures(true);
                        setShowProfileView(false); // Ensure ProfileView is false
                        setShowVentureBuilder(false); // Ensure VentureBuilder is false
                        setShowProfileDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 text-gray-300 hover:bg-linkedin-background/50 hover:text-white transition-colors relative z-[9999]"
                    >
                      My Ventures
                    </button>
                    <button
                      className="w-full text-left px-4 py-2 text-gray-300 hover:bg-linkedin-background/50 hover:text-white transition-colors relative z-[9999]"
                      onClick={() => {
                        setShowProfileView(false); // Ensure ProfileView is false
                        setShowMyVentures(false); // Ensure MyVentures is false
                        setShowVentureBuilder(false); // Ensure VentureBuilder is false
                        setActiveTab('trading');
                        setActiveTradingSection('portfolio-summary');
                        setIsMyInvestmentsView(true);
                        setShowProfileDropdown(false);
                      }}
                    >
                      My Investments
                    </button>
                    <button
                      className="w-full text-left px-4 py-2 text-gray-300 hover:bg-linkedin-background/50 hover:text-white transition-colors relative z-[9999]"
                      onClick={() => {
                        setShowProfileView(false); // Ensure ProfileView is false
                        setShowMyVentures(false); // Ensure MyVentures is false
                        setShowVentureBuilder(false); // Ensure VentureBuilder is false
                        setIsMyInvestmentsView(false);
                        setActiveTab('my-services');
                        setActiveMyServicesSection('overview');
                        setShowProfileDropdown(false);
                      }}
                    >
                      My Services
                    </button>
                    <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-linkedin-background/50 hover:text-white transition-colors relative z-[9999]">
                      Account Settings
                    </button>
                    <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-linkedin-background/50 hover:text-white transition-colors relative z-[9999]">
                      Privacy Controls
                    </button>
                  </div>
                  
                  <div className="p-3 border-t border-linkedin-border">
                    <button 
                      className="w-full bg-linkedin-background/50 hover:bg-linkedin-background text-white px-4 py-2 rounded-lg text-sm transition-colors relative z-[9999]"
                      onClick={() => setShowProfileDropdown(false)}
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className="md:hidden border-b border-linkedin-border bg-linkedin-background/50 backdrop-blur-lg">
        <div className="flex">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex-1 flex flex-col items-center space-y-1 py-3 transition-all ${
                activeTab === item.id
                  ? 'text-linkedin-light border-b-2 border-linkedin-light'
                  : 'text-gray-400'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="w-full">
        {showProfileView ? (
          <ProfileView onBack={() => setShowProfileView(false)} profileData={mockProfileData} />
        ) : showVentureBuilder ? (
          <VentureBuilder onBack={() => setShowVentureBuilder(false)} />
        ) : showMyVentures ? (
          <MyVentures 
            onBack={() => setShowMyVentures(false)} 
            onCreateNewVenture={() => {
              setShowMyVentures(false);
              setShowVentureBuilder(true);
            }}
            showMyInvestmentsGroup={true}
          />
        ) : (
          renderTabContent()
        )}
      </main>
    </div>
  );
};

export default MainPlatform;