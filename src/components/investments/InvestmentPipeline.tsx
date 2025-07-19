import React, { useState } from 'react';
import {
  Building2, 
  MapPin, 
  DollarSign, 
  Users, 
  FileText, 
  BarChart3,
  Target,
  MessageSquare,
  Calendar,
  CheckCircle,
  XCircle,
  Save,
  Eye,
  Share2,
  User,
  Award,
  Clock,
  TrendingUp,
  Mail,
  Phone,
  Briefcase,
  Star,
  Bookmark,
  Search,
  PieChart,
  ArrowLeft,
  Plus,
  MoreHorizontal,
  Filter,
  ArrowRight,
  Shield,
  Send,
  Edit,
  Download,
  Upload,
  ChevronRight,
  ChevronDown,
  Globe,
  Layers,
  TrendingDown,
  Activity,
  Zap
} from 'lucide-react';

interface InvestmentPipelineProps {
  onSectionChange: (section: string) => void;
}

interface Venture {
  id: number;
  name: string;
  stage: string;
  description: string;
  industry: string;
  location: string;
  market: string;
  dealSize: string;
  valuation: string;
  logo: string;
  fundingStage: string;
  shortDescription: string;
  dealType: 'Primary' | 'Secondary';
  priority: 'High' | 'Medium' | 'Low';
  lastUpdate: string;
  daysInStage: number;
}

const InvestmentPipeline: React.FC<InvestmentPipelineProps> = ({ onSectionChange }) => {
  const [selectedVenture, setSelectedVenture] = useState<Venture | null>(null);
  const [activeTab, setActiveTab] = useState('pitch-deck');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    dealflowStage: 'all',
    industry: 'all',
    market: 'all',
    dealType: 'all'
  });

  const stages = [
    { 
      id: 'screening', 
      name: 'Screening', 
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      icon: Search,
      description: 'Initial evaluation and assessment'
    },
    { 
      id: 'due-diligence', 
      name: 'Due Diligence', 
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20',
      icon: FileText,
      description: 'Comprehensive analysis and verification'
    },
    { 
      id: 'deal-terms', 
      name: 'Deal Terms', 
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      icon: Target,
      description: 'Negotiating investment terms'
    },
    { 
      id: 'deal-closing', 
      name: 'Deal Closing', 
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20',
      icon: Edit,
      description: 'Finalizing documentation and signatures'
    },
    { 
      id: 'closed-deals', 
      name: 'Closed Deals', 
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20',
      icon: CheckCircle,
      description: 'Successfully completed investments'
    },
    { 
      id: 'passed-deals', 
      name: 'Passed Deals', 
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20',
      icon: XCircle,
      description: 'Declined investment opportunities'
    }
  ];

  const ventures: Venture[] = [
    // Screening Stage
    {
      id: 1,
      name: "AgriTech Innovations",
      stage: "screening",
      description: "AI-powered crop monitoring platform for sustainable farming",
      industry: "AgTech",
      location: "Dubai, UAE",
      market: "UAE",
      dealSize: "$2.5M",
      valuation: "$15M",
      logo: "🌱",
      fundingStage: "Series A",
      shortDescription: "Revolutionary agricultural technology using AI and IoT sensors to optimize crop yields and reduce water consumption by 40%.",
      dealType: "Primary",
      priority: "High",
      lastUpdate: "2 days ago",
      daysInStage: 5
    },
    {
      id: 2,
      name: "FinanceFlow",
      stage: "screening",
      description: "B2B payment automation software for SMEs",
      industry: "FinTech",
      location: "Riyadh, KSA",
      market: "Saudi Arabia",
      dealSize: "$5M",
      valuation: "$30M",
      logo: "💳",
      fundingStage: "Series B",
      shortDescription: "Automated payment processing platform that reduces transaction costs by 60% for small and medium enterprises.",
      dealType: "Primary",
      priority: "Medium",
      lastUpdate: "1 week ago",
      daysInStage: 12
    },
    {
      id: 3,
      name: "RetailTech Shares",
      stage: "screening",
      description: "Secondary market opportunity in established retail platform",
      industry: "RetailTech",
      location: "Cairo, Egypt",
      market: "Egypt",
      dealSize: "$1.2M",
      valuation: "$18M",
      logo: "🛍️",
      fundingStage: "Series A",
      shortDescription: "Opportunity to acquire shares from early investor in successful e-commerce analytics platform.",
      dealType: "Secondary",
      priority: "Low",
      lastUpdate: "3 days ago",
      daysInStage: 8
    },
    // Due Diligence Stage
    {
      id: 4,
      name: "HealthTrack Pro",
      stage: "due-diligence",
      description: "Remote patient monitoring system",
      industry: "HealthTech",
      location: "Cairo, Egypt",
      market: "Egypt",
      dealSize: "$3.5M",
      valuation: "$20M",
      logo: "🏥",
      fundingStage: "Series A",
      shortDescription: "Comprehensive remote patient monitoring solution with AI-powered health analytics and predictive diagnostics.",
      dealType: "Primary",
      priority: "High",
      lastUpdate: "1 day ago",
      daysInStage: 18
    },
    {
      id: 5,
      name: "EduSpark",
      stage: "due-diligence",
      description: "Interactive online learning platform",
      industry: "EdTech",
      location: "Amman, Jordan",
      market: "Jordan",
      dealSize: "$1.8M",
      valuation: "$12M",
      logo: "📚",
      fundingStage: "Seed",
      shortDescription: "Gamified learning platform that increases student engagement by 300% through personalized AI-driven content.",
      dealType: "Primary",
      priority: "Medium",
      lastUpdate: "4 days ago",
      daysInStage: 25
    },
    {
      id: 6,
      name: "PropTech Secondary",
      stage: "due-diligence",
      description: "Secondary shares in real estate technology platform",
      industry: "PropTech",
      location: "Dubai, UAE",
      market: "UAE",
      dealSize: "$2.8M",
      valuation: "$35M",
      logo: "🏢",
      fundingStage: "Series B",
      shortDescription: "Acquiring shares from founding team member in leading property management platform.",
      dealType: "Secondary",
      priority: "High",
      lastUpdate: "2 days ago",
      daysInStage: 15
    },
    // Deal Terms Stage
    {
      id: 7,
      name: "CleanEnergy MENA",
      stage: "deal-terms",
      description: "Solar energy solutions for commercial buildings",
      industry: "CleanTech",
      location: "Abu Dhabi, UAE",
      market: "UAE",
      dealSize: "$8M",
      valuation: "$45M",
      logo: "☀️",
      fundingStage: "Series B",
      shortDescription: "Leading provider of integrated solar energy solutions with 500+ commercial installations across the MENA region.",
      dealType: "Primary",
      priority: "High",
      lastUpdate: "6 hours ago",
      daysInStage: 32
    },
    {
      id: 8,
      name: "MobTech Equity",
      stage: "deal-terms",
      description: "Secondary opportunity in mobile app development platform",
      industry: "MobTech",
      location: "Beirut, Lebanon",
      market: "Lebanon",
      dealSize: "$1.5M",
      valuation: "$22M",
      logo: "📱",
      fundingStage: "Series A",
      shortDescription: "Purchasing equity stake from early employee in successful mobile development platform.",
      dealType: "Secondary",
      priority: "Medium",
      lastUpdate: "1 day ago",
      daysInStage: 28
    },
    // Deal Closing Stage
    {
      id: 9,
      name: "LogiChain",
      stage: "deal-closing",
      description: "Blockchain-powered supply chain management",
      industry: "Logistics",
      location: "Kuwait City, Kuwait",
      market: "Kuwait",
      dealSize: "$4.2M",
      valuation: "$25M",
      logo: "🔗",
      fundingStage: "Series A",
      shortDescription: "Blockchain-based supply chain transparency platform serving 200+ enterprises with 99.9% traceability accuracy.",
      dealType: "Primary",
      priority: "High",
      lastUpdate: "12 hours ago",
      daysInStage: 45
    },
    {
      id: 10,
      name: "GameTech Holdings",
      stage: "deal-closing",
      description: "Secondary acquisition in gaming platform",
      industry: "GameTech",
      location: "Doha, Qatar",
      market: "Qatar",
      dealSize: "$3.2M",
      valuation: "$28M",
      logo: "🎮",
      fundingStage: "Series A",
      shortDescription: "Acquiring significant stake from institutional investor in regional gaming platform.",
      dealType: "Secondary",
      priority: "Medium",
      lastUpdate: "8 hours ago",
      daysInStage: 38
    },
    // Closed Deals Stage
    {
      id: 11,
      name: "RetailTech Pro",
      stage: "closed-deals",
      description: "AI-powered retail analytics platform",
      industry: "RetailTech",
      location: "Doha, Qatar",
      market: "Qatar",
      dealSize: "$6M",
      valuation: "$35M",
      logo: "🛍️",
      fundingStage: "Series B",
      shortDescription: "Advanced retail analytics platform that increased client revenue by average of 25% through predictive inventory management.",
      dealType: "Primary",
      priority: "High",
      lastUpdate: "2 weeks ago",
      daysInStage: 0
    },
    {
      id: 12,
      name: "FinTech Acquisition",
      stage: "closed-deals",
      description: "Successfully acquired secondary shares in payment processor",
      industry: "FinTech",
      location: "Dubai, UAE",
      market: "UAE",
      dealSize: "$4.5M",
      valuation: "$42M",
      logo: "💰",
      fundingStage: "Series B",
      shortDescription: "Completed acquisition of shares from early investor in leading payment processing platform.",
      dealType: "Secondary",
      priority: "High",
      lastUpdate: "1 month ago",
      daysInStage: 0
    },
    // Passed Deals Stage
    {
      id: 13,
      name: "TravelConnect",
      stage: "passed-deals",
      description: "Travel booking platform for MENA region",
      industry: "Travel",
      location: "Beirut, Lebanon",
      market: "Lebanon",
      dealSize: "$3M",
      valuation: "$18M",
      logo: "✈️",
      fundingStage: "Series A",
      shortDescription: "Regional travel booking platform with focus on local experiences and cultural tourism.",
      dealType: "Primary",
      priority: "Low",
      lastUpdate: "3 weeks ago",
      daysInStage: 0
    },
    {
      id: 14,
      name: "FoodTech Secondary",
      stage: "passed-deals",
      description: "Declined secondary opportunity in food delivery platform",
      industry: "FoodTech",
      location: "Cairo, Egypt",
      market: "Egypt",
      dealSize: "$2.2M",
      valuation: "$16M",
      logo: "🍔",
      fundingStage: "Seed",
      shortDescription: "Passed on secondary shares due to market saturation and competitive concerns.",
      dealType: "Secondary",
      priority: "Low",
      lastUpdate: "1 month ago",
      daysInStage: 0
    }
  ];

  const getScreeningTabs = () => [
    { id: 'pitch-deck', label: 'Pitch Deck', icon: FileText },
    { id: 'business-model', label: 'Business Model', icon: Target },
    { id: 'market-analysis', label: 'Market Analysis', icon: BarChart3 },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'traction', label: 'Traction', icon: TrendingUp },
    { id: 'projections', label: 'Projections', icon: PieChart },
    { id: 'round-dynamics', label: 'Round Dynamics', icon: DollarSign },
    { id: 'scoring', label: 'Scoring & Risk Assessment', icon: Award },
    { id: 'communication', label: 'Founder Communication', icon: MessageSquare }
  ];

  const getDueDiligenceTabs = () => [
    { id: 'information-memo', label: 'Information Memo', icon: FileText },
    { id: 'business-strategy', label: 'Business Model & Strategy', icon: Target },
    { id: 'market-analysis-detailed', label: 'Market Analysis (In-depth)', icon: BarChart3 },
    { id: 'operations', label: 'Operations (Brand, Marketing, Ops)', icon: Building2 },
    { id: 'legal', label: 'Legal', icon: Shield },
    { id: 'product', label: 'Product', icon: Star },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'traction', label: 'Traction', icon: TrendingUp },
    { id: 'projections-detailed', label: 'Projections (In-depth)', icon: PieChart },
    { id: 'round-dynamics', label: 'Round Dynamics', icon: DollarSign },
    { id: 'scoring-detailed', label: 'Scoring & Risk Assessment (In-depth)', icon: Award },
    { id: 'communication', label: 'Founder Communication', icon: MessageSquare }
  ];

  const getDealTermsTabs = () => [
    { id: 'investment-structure', label: 'Investment Structure', icon: Building2 },
    { id: 'valuation-terms', label: 'Valuation Terms', icon: DollarSign },
    { id: 'economic-rights', label: 'Economic Rights & Returns', icon: TrendingUp },
    { id: 'control-governance', label: 'Control & Governance', icon: Shield },
    { id: 'transfer-liquidity', label: 'Transfer & Liquidity Rights', icon: ArrowRight },
    { id: 'legal-admin', label: 'Legal & Administrative', icon: FileText }
  ];

  const getDealClosingTabs = () => [
    { id: 'agreement-generation', label: 'Agreement Generation', icon: FileText },
    { id: 'agreement-review', label: 'Agreement Review', icon: Eye },
    { id: 'communication', label: 'Founder Communication', icon: MessageSquare },
    { id: 'docusign', label: 'DocuSign', icon: Edit }
  ];

  const getCurrentTabs = () => {
    if (!selectedVenture) return [];
    
    switch (selectedVenture.stage) {
      case 'screening':
        return getScreeningTabs();
      case 'due-diligence':
        return getDueDiligenceTabs();
      case 'deal-terms':
        return getDealTermsTabs();
      case 'deal-closing':
        return getDealClosingTabs();
      default:
        return [];
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'Medium':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Low':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getDealTypeColor = (dealType: string) => {
    return dealType === 'Primary' 
      ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      : 'bg-purple-500/20 text-purple-400 border-purple-500/30';
  };

  const filteredVentures = ventures.filter(venture => {
    return (
      (filters.dealflowStage === 'all' || venture.stage === filters.dealflowStage) &&
      (filters.industry === 'all' || venture.industry === filters.industry) &&
      (filters.market === 'all' || venture.market === filters.market) &&
      (filters.dealType === 'all' || venture.dealType === filters.dealType)
    );
  });

  const renderVenturesByStage = (stageId: string) => {
    const stageVentures = filteredVentures.filter(venture => venture.stage === stageId);
    
    return (
      <div className="space-y-4">
        {stageVentures.map((venture) => (
          <div 
            key={venture.id}
            onClick={() => setSelectedVenture(venture)}
            className="group bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-linkedin/40 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-linkedin/10 hover:bg-white/10"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {venture.logo}
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold text-sm group-hover:text-linkedin-light transition-colors">
                    {venture.name}
                  </h4>
                  <p className="text-gray-400 text-xs">{venture.industry} • {venture.location}</p>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(venture.priority)}`}>
                  {venture.priority}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getDealTypeColor(venture.dealType)}`}>
                  {venture.dealType}
                </span>
              </div>
            </div>
            
            <p className="text-gray-300 text-xs mb-4 line-clamp-2 leading-relaxed">
              {venture.description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-xs">
                <div className="flex items-center space-x-1 text-linkedin-light">
                  <DollarSign className="w-3 h-3" />
                  <span className="font-semibold">{venture.dealSize}</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-400">
                  <Building2 className="w-3 h-3" />
                  <span>{venture.fundingStage}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <Clock className="w-3 h-3" />
                <span>{venture.daysInStage}d</span>
              </div>
            </div>
            
            <div className="mt-3 pt-3 border-t border-white/10">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">Last update: {venture.lastUpdate}</span>
                <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-linkedin-light group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </div>
        ))}
        
        {stageVentures.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-3">
              <Building2 className="w-6 h-6" />
            </div>
            <p className="text-sm">No ventures in this stage</p>
          </div>
        )}
      </div>
    );
  };

  const renderTabContent = () => {
    if (!selectedVenture) return null;

    switch (activeTab) {
      case 'pitch-deck':
        return (
          <div className="bg-linkedin-card/50 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-4">Pitch Deck</h3>
            <div className="bg-gray-800 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400">Pitch deck viewer would be embedded here</p>
                <button className="mt-4 bg-linkedin hover:bg-linkedin-dark text-white px-4 py-2 rounded-lg">
                  View Full Deck
                </button>
              </div>
            </div>
          </div>
        );
      
      case 'business-model':
        return (
          <div className="space-y-6">
            <div className="bg-linkedin-card/50 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">Business Model Analysis</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-linkedin-light font-medium mb-2">WHO (Target Market)</h4>
                    <p className="text-gray-300 text-sm">Small to medium agricultural enterprises in MENA region looking to optimize crop yields and reduce operational costs.</p>
                  </div>
                  <div>
                    <h4 className="text-linkedin-light font-medium mb-2">WHAT (Value Proposition)</h4>
                    <p className="text-gray-300 text-sm">AI-powered crop monitoring platform that provides real-time insights, predictive analytics, and automated irrigation control.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-linkedin-light font-medium mb-2">HOW (Revenue Model)</h4>
                    <p className="text-gray-300 text-sm">SaaS subscription model with tiered pricing based on farm size and feature access, plus hardware sales for IoT sensors.</p>
                  </div>
                  <div>
                    <h4 className="text-linkedin-light font-medium mb-2">WHY (Market Opportunity)</h4>
                    <p className="text-gray-300 text-sm">Growing demand for sustainable farming solutions driven by water scarcity and climate change challenges in the region.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'team':
        return (
          <div className="space-y-6">
            <div className="bg-linkedin-card/50 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">Founders</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <img 
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100" 
                    alt="Founder"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-medium">Ahmed Al-Rashid</h4>
                    <p className="text-linkedin-light text-sm">CEO & Co-founder</p>
                    <p className="text-gray-400 text-xs">8 years experience</p>
                    <p className="text-gray-300 text-sm mt-2">Former agricultural engineer at Ministry of Agriculture, PhD in Agricultural Technology from AUB</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      <span className="bg-linkedin/20 text-linkedin-light px-2 py-1 rounded text-xs">Agriculture</span>
                      <span className="bg-linkedin/20 text-linkedin-light px-2 py-1 rounded text-xs">AI/ML</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <img 
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100" 
                    alt="Founder"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-medium">Sarah Khalil</h4>
                    <p className="text-linkedin-light text-sm">CTO & Co-founder</p>
                    <p className="text-gray-400 text-xs">10 years experience</p>
                    <p className="text-gray-300 text-sm mt-2">Former Senior Software Engineer at Microsoft, MS in Computer Science from Stanford</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      <span className="bg-linkedin/20 text-linkedin-light px-2 py-1 rounded text-xs">Software Engineering</span>
                      <span className="bg-linkedin/20 text-linkedin-light px-2 py-1 rounded text-xs">IoT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'traction':
        return (
          <div className="space-y-6">
            <div className="bg-linkedin-card/50 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">Key Traction Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">$180K</div>
                  <div className="text-gray-400">Annual Recurring Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">750+</div>
                  <div className="text-gray-400">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">$45</div>
                  <div className="text-gray-400">Customer Acquisition Cost</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">$380</div>
                  <div className="text-gray-400">Customer Lifetime Value</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">5%</div>
                  <div className="text-gray-400">Monthly Churn Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-linkedin-light mb-2">68%</div>
                  <div className="text-gray-400">Gross Margin</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'communication':
        return (
          <div className="space-y-6">
            <div className="bg-linkedin-card/50 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">Founder Communication</h3>
              <div className="space-y-4">
                <div className="bg-linkedin-card/30 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <img 
                      src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=40" 
                      alt="Founder"
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">Ahmed Al-Rashid</p>
                      <p className="text-gray-300 text-sm">Thank you for your interest in AgriTech Innovations. I'd be happy to answer any questions about our technology and market approach.</p>
                      <p className="text-gray-500 text-xs mt-1">2 hours ago</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin"
                  />
                  <button className="bg-linkedin hover:bg-linkedin-dark text-white p-2 rounded-lg transition-colors">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                
                <button className="w-full bg-linkedin-card hover:bg-linkedin-card/70 border border-linkedin-border text-white px-4 py-2 rounded-lg transition-colors">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Request a Meeting
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-linkedin-card/50 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-4">{activeTab}</h3>
            <p className="text-gray-300">Content for {activeTab} would be displayed here.</p>
          </div>
        );
    }
  };

  const renderProceedingButtons = () => {
    if (!selectedVenture) return null;

    switch (selectedVenture.stage) {
      case 'screening':
        return (
          <div className="flex items-center space-x-3">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors">
              Pass
            </button>
            <button className="bg-linkedin hover:bg-linkedin-dark text-white px-6 py-2 rounded-lg transition-colors">
              Request Due Diligence
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors">
              <Bookmark className="w-4 h-4 inline mr-2" />
              Save to Watchlist
            </button>
          </div>
        );
      
      case 'due-diligence':
        return (
          <div className="flex items-center space-x-3">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors">
              Pass
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors">
              <Save className="w-4 h-4 inline mr-2" />
              Save Draft
            </button>
            <button className="bg-linkedin hover:bg-linkedin-dark text-white px-6 py-2 rounded-lg transition-colors">
              Proceed to Deal Terms
            </button>
          </div>
        );
      
      case 'deal-terms':
        return (
          <div className="flex items-center space-x-3">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors">
              Pass
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors">
              <Save className="w-4 h-4 inline mr-2" />
              Save Draft
            </button>
            <button className="bg-linkedin hover:bg-linkedin-dark text-white px-6 py-2 rounded-lg transition-colors">
              Proceed to Sharing Terms with Founder
            </button>
          </div>
        );
      
      case 'deal-closing':
        return (
          <div className="flex items-center space-x-3">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors">
              Pass
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors">
              <Save className="w-4 h-4 inline mr-2" />
              Save Draft
            </button>
            <button className="bg-linkedin hover:bg-linkedin-dark text-white px-6 py-2 rounded-lg transition-colors">
              Proceed to Signature
            </button>
          </div>
        );
      
      default:
        return null;
    }
  };

  if (selectedVenture) {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setSelectedVenture(null)}
            className="p-2 bg-linkedin-card hover:bg-linkedin-card/70 text-white rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-white">Investment Pipeline</h1>
            <p className="text-gray-300">Detailed venture analysis and evaluation</p>
          </div>
        </div>

        {/* General Deal Info */}
        <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
          <div className="flex items-start space-x-6">
            <div className="text-6xl">{selectedVenture.logo}</div>
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h2 className="text-2xl font-bold text-white">{selectedVenture.name}</h2>
                <span className={`px-3 py-1 rounded-full text-white text-sm font-medium bg-gradient-to-r ${
                  stages.find(s => s.id === selectedVenture.stage)?.color || 'from-gray-500 to-gray-600'
                }`}>
                  {stages.find(s => s.id === selectedVenture.stage)?.name}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getDealTypeColor(selectedVenture.dealType)}`}>
                  {selectedVenture.dealType}
                </span>
              </div>
              <p className="text-gray-300 mb-4">{selectedVenture.shortDescription}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-gray-400">Industry</p>
                  <p className="text-white font-medium">{selectedVenture.industry}</p>
                </div>
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-white font-medium">{selectedVenture.location}</p>
                </div>
                <div>
                  <p className="text-gray-400">Stage</p>
                  <p className="text-white font-medium">{selectedVenture.fundingStage}</p>
                </div>
                <div>
                  <p className="text-gray-400">Deal Size</p>
                  <p className="text-white font-medium">{selectedVenture.dealSize}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
          <div className="flex items-center space-x-2 overflow-x-auto">
            {getCurrentTabs().map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-linkedin to-linkedin-light text-white'
                    : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {renderTabContent()}

        {/* Proceeding Buttons */}
        <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Next Steps</h3>
            {renderProceedingButtons()}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Investment Pipeline</h1>
          <p className="text-gray-300">Manage your investment opportunities through each stage of the process</p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
              showFilters 
                ? 'bg-linkedin text-white' 
                : 'bg-linkedin-card hover:bg-linkedin-card/70 text-white'
            }`}
          >
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </button>
          <button className="flex items-center space-x-2 bg-linkedin hover:bg-linkedin-dark text-white px-4 py-2 rounded-lg transition-colors">
            <Plus className="w-4 h-4" />
            <span>Add Opportunity</span>
          </button>
        </div>
      </div>

      {/* Advanced Filters */}
      {showFilters && (
        <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-gray-300 text-sm mb-2 font-medium">Dealflow Stage</label>
              <select 
                value={filters.dealflowStage}
                onChange={(e) => setFilters({...filters, dealflowStage: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin"
              >
                <option value="all">All Stages</option>
                <option value="screening">Screening</option>
                <option value="due-diligence">Due Diligence</option>
                <option value="deal-terms">Deal Terms</option>
                <option value="deal-closing">Deal Closing</option>
                <option value="closed-deals">Closed Deals</option>
                <option value="passed-deals">Passed Deals</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2 font-medium">Industry</label>
              <select 
                value={filters.industry}
                onChange={(e) => setFilters({...filters, industry: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin"
              >
                <option value="all">All Industries</option>
                <option value="FinTech">FinTech</option>
                <option value="HealthTech">HealthTech</option>
                <option value="AgTech">AgTech</option>
                <option value="EdTech">EdTech</option>
                <option value="CleanTech">CleanTech</option>
                <option value="RetailTech">RetailTech</option>
                <option value="PropTech">PropTech</option>
                <option value="MobTech">MobTech</option>
                <option value="GameTech">GameTech</option>
                <option value="FoodTech">FoodTech</option>
                <option value="Travel">Travel</option>
                <option value="Logistics">Logistics</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2 font-medium">Market (Geo)</label>
              <select 
                value={filters.market}
                onChange={(e) => setFilters({...filters, market: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin"
              >
                <option value="all">All Markets</option>
                <option value="UAE">UAE</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Egypt">Egypt</option>
                <option value="Qatar">Qatar</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Jordan">Jordan</option>
                <option value="Lebanon">Lebanon</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2 font-medium">Deal Type</label>
              <select 
                value={filters.dealType}
                onChange={(e) => setFilters({...filters, dealType: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin"
              >
                <option value="all">All Types</option>
                <option value="Primary">Primary</option>
                <option value="Secondary">Secondary</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Pipeline Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {stages.map((stage) => {
          const stageCount = filteredVentures.filter(v => v.stage === stage.id).length;
          const StageIcon = stage.icon;
          
          return (
            <div key={stage.id} className={`${stage.bgColor} backdrop-blur-sm rounded-xl p-4 border ${stage.borderColor}`}>
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 bg-gradient-to-r ${stage.color} rounded-lg flex items-center justify-center`}>
                  <StageIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{stageCount}</div>
                  <div className="text-xs text-gray-400">{stage.name}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Enhanced Kanban Board */}
      <div className="flex overflow-x-auto gap-x-6">
        {stages.map((stage) => {
          const stageCount = filteredVentures.filter(v => v.stage === stage.id).length;
          const StageIcon = stage.icon;
          
          return (
            <div key={stage.id} className={`${stage.bgColor} backdrop-blur-sm rounded-xl border ${stage.borderColor} overflow-hidden min-w-[450px]`}>
              {/* Stage Header */}
              <div className={`bg-gradient-to-r ${stage.color} p-4`}>
                <div className="flex items-center space-x-3">
                  <StageIcon className="w-5 h-5 text-white" />
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-sm">{stage.name}</h3>
                    <p className="text-white/80 text-xs">{stage.description}</p>
                  </div>
                  <div className="bg-white/20 text-white px-2 py-1 rounded-full text-xs font-bold">
                    {stageCount}
                  </div>
                </div>
              </div>
              
              {/* Stage Content */}
              <div className="p-4 min-h-[600px]">
                {renderVenturesByStage(stage.id)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InvestmentPipeline;