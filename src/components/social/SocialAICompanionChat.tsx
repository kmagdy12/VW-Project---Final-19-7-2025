import React from 'react';
import { 
  Brain, 
  X, 
  Zap,
  Users,
  Calendar,
  Bookmark,
  UserSearch,
  MessageSquare,
  TrendingUp,
  Filter,
  Target,
  BarChart3,
  Lightbulb,
  Settings,
  Briefcase,
  Award, // Keep Award for expert-related sections
  DollarSign, // Add DollarSign for trading/investment
  Clock,
  FileText
} from 'lucide-react';

interface SocialAICompanionChatProps {
  activeSocialSection: string;
  activeExpertsMarketplaceSection?: string;
  activeTradingSection?: string;
  activeMarketIntelligenceSection?: string;
  activeMyServicesSection?: string;
  activeTab?: string;
  onClose: () => void;
}

const SocialAICompanionChat: React.FC<SocialAICompanionChatProps> = ({ 
  activeSocialSection, 
  activeExpertsMarketplaceSection,
  activeTradingSection,
  activeMarketIntelligenceSection,
  activeMyServicesSection,
  activeTab = 'social',
  onClose 
}) => {
  const getSectionConfig = (tab: string, section: string) => {

    if (tab === 'intelligence' && activeMarketIntelligenceSection) {
      const intelligenceConfigs = {
        'intelligence-dashboard': {
          title: "Market Intelligence Analyst",
          icon: BarChart3,
          role: "Analytical & Predictive",
          description: "I analyze market data, identify emerging patterns, and provide actionable intelligence based on your focus areas",
          capabilities: [
            "Analyze macro and micro market intelligence data",
            "Identify emerging market patterns and trends",
            "Provide actionable intelligence based on market conditions",
            "Filter and prioritize market insights by relevance",
            "Generate predictive market analysis and forecasts"
          ]
        },
        'ai-reports': {
          title: "AI Report Generator",
          icon: FileText,
          role: "Research & Analysis",
          description: "I assist with research design, data collection, and comprehensive report structuring for market intelligence",
          capabilities: [
            "Design comprehensive market research frameworks",
            "Structure and organize complex market analysis",
            "Generate detailed competitive intelligence reports",
            "Assist with data collection and analysis methodology",
            "Create executive summaries and actionable recommendations"
          ]
        }
      };
      
      return intelligenceConfigs[activeMarketIntelligenceSection as keyof typeof intelligenceConfigs] || intelligenceConfigs['intelligence-dashboard'];
    }
    
    if (tab === 'my-services' && activeMyServicesSection) {
      const myServicesConfigs = {
        'overview': {
          title: "Service Portfolio Advisor",
          icon: BarChart3,
          role: "Analytical & Strategic",
          description: "I analyze your service performance, suggest optimization strategies, and identify expansion opportunities",
          capabilities: [
            "Analyze service performance metrics and client feedback",
            "Identify trends and patterns in your service delivery",
            "Suggest pricing and packaging optimizations",
            "Recommend new service opportunities based on market demand",
            "Provide competitive analysis and positioning advice"
          ]
        },
        'create-service': {
          title: "Service Designer",
          icon: Briefcase,
          role: "Creative & Strategic",
          description: "I help you design compelling service offerings with optimal pricing and positioning",
          capabilities: [
            "Suggest service descriptions and value propositions",
            "Recommend competitive pricing strategies",
            "Define clear deliverables and scope boundaries",
            "Create service packages and tiered offerings",
            "Optimize service descriptions for discoverability"
          ]
        },
        'create-workshop': {
          title: "Workshop Designer",
          icon: Calendar,
          role: "Educational & Strategic",
          description: "I help you create engaging workshop experiences with effective learning outcomes",
          capabilities: [
            "Design workshop agendas and learning objectives",
            "Suggest interactive activities and exercises",
            "Recommend optimal workshop duration and pacing",
            "Create pre and post-workshop materials",
            "Optimize pricing and participant capacity"
          ]
        },
        'client-management': {
          title: "Client Relationship Advisor",
          icon: Users,
          role: "Relational & Analytical",
          description: "I help you manage client relationships, identify opportunities, and improve satisfaction",
          capabilities: [
            "Analyze client engagement patterns and satisfaction",
            "Suggest personalized communication strategies",
            "Identify upselling and cross-selling opportunities",
            "Recommend retention and reactivation tactics",
            "Create client segmentation strategies"
          ]
        },
        'session-management': {
          title: "Session Optimization Assistant",
          icon: Clock,
          role: "Operational & Strategic",
          description: "I help you deliver exceptional client sessions with effective planning and follow-up",
          capabilities: [
            "Create session agendas and preparation checklists",
            "Suggest effective time management strategies",
            "Generate session summaries and action items",
            "Recommend follow-up communication templates",
            "Analyze session effectiveness and outcomes"
          ]
        }
      };
      
      return myServicesConfigs[activeMyServicesSection as keyof typeof myServicesConfigs] || myServicesConfigs['overview'];
    }
    
    if (tab === 'experts' && activeExpertsMarketplaceSection) {
      const expertsConfigs = {
        'discover-experts': {
          title: "Expert Discovery Assistant",
          icon: UserSearch,
          role: "Analytical & Actionable",
          description: "I pre-filter experts by your needs, explain expertise relevance, and optimize matching criteria",
          capabilities: [
            "Pre-filter experts based on your specific needs and requirements",
            "Explain expertise relevance and track record analysis",
            "Optimize matching criteria for better expert discovery",
            "Analyze expert credentials and specialization alignment",
            "Suggest optimal engagement models and approaches"
          ]
        },
        'discover-services': {
          title: "Service Recommendation Engine",
          icon: Briefcase,
          role: "Analytical & Actionable",
          description: "I pre-filter services by your needs, explain service benefits, and optimize search criteria",
          capabilities: [
            "Pre-filter services based on your business needs and stage",
            "Explain service benefits and expected outcomes",
            "Optimize search criteria for better service discovery",
            "Analyze service-need alignment and value propositions",
            "Suggest optimal service packages and engagement models"
          ]
        },
        'discover-workshops': {
          title: "Workshop Strategy Advisor",
          icon: Calendar,
          role: "Analytical & Actionable",
          description: "I pre-filter workshops by your learning goals, explain workshop value, and suggest optimal timing",
          capabilities: [
            "Pre-filter workshops based on your learning goals and skill gaps",
            "Explain workshop value and learning outcomes",
            "Suggest optimal timing for workshop attendance",
            "Analyze content relevance to your objectives",
            "Recommend workshop sequences for maximum impact"
          ]
        },
        'expert-profile': {
          title: "Expert Evaluation Specialist",
          icon: Award,
          role: "Analytical & Actionable",
          description: "I provide deep analysis of expert credentials and help you make informed decisions",
          capabilities: [
            "Analyze expert background and track record",
            "Evaluate expertise relevance to your specific needs",
            "Assess expert communication style and approach",
            "Compare expert offerings and value propositions",
            "Suggest optimal engagement strategies and expectations"
          ]
        },
        'service-details': {
          title: "Service Value Analyzer",
          icon: BarChart3,
          role: "Analytical & Actionable",
          description: "I analyze service value, pricing, and help you optimize your investment decisions",
          capabilities: [
            "Analyze service value proposition and expected outcomes",
            "Compare market rates and pricing strategies",
            "Suggest negotiation approaches and terms",
            "Evaluate service deliverables and timelines",
            "Assess ROI potential and success metrics"
          ]
        },
        'workshop-details': {
          title: "Workshop Investment Advisor",
          icon: Target,
          role: "Analytical & Actionable",
          description: "I help you evaluate workshop value and make strategic learning investments",
          capabilities: [
            "Analyze workshop value and learning outcomes",
            "Compare workshop pricing and market alternatives",
            "Evaluate instructor quality and teaching methods",
            "Assess networking and collaboration opportunities",
            "Suggest preparation strategies for maximum benefit"
          ]
        },
        'sessions': {
          title: "Session Success Manager",
          icon: Clock,
          role: "Analytical & Actionable",
          description: "I optimize session scheduling, analyze session outcomes, and suggest follow-up actions",
          capabilities: [
            "Optimize session scheduling and time management",
            "Analyze session outcomes and effectiveness",
            "Suggest follow-up actions and next steps",
            "Track progress against learning objectives",
            "Facilitate communication with experts and mentors"
          ]
        },
        'saved-items': {
          title: "Learning Path Curator",
          icon: Bookmark,
          role: "Analytical & Actionable",
          description: "I categorize saved experts/services, suggest learning paths, and track your progress",
          capabilities: [
            "Categorize saved experts and services by relevance",
            "Suggest personalized learning paths and sequences",
            "Track your progress across saved items",
            "Analyze patterns in your learning preferences",
            "Recommend optimal timing for engaging with saved items"
          ]
        }
      };
      
      return expertsConfigs[activeExpertsMarketplaceSection as keyof typeof expertsConfigs] || expertsConfigs['discover-experts'];
    }

    if (tab === 'trading' && activeTradingSection) {
      const tradingConfigs = {
        'trading-dashboard': {
          title: "Market Performance Analyst",
          icon: BarChart3,
          role: "Performance & Insights",
          description: "I explain metrics, analyze portfolio performance, and provide market insights for informed trading decisions.",
          capabilities: [
            "Explain trading metrics and performance indicators",
            "Analyze portfolio performance across different time periods",
            "Provide market insights and trend analysis",
            "Identify performance patterns and anomalies",
            "Generate actionable recommendations for portfolio optimization"
          ]
        },
        'opportunity-marketplace': {
          title: "Deal Intelligence Assistant",
          icon: Target,
          role: "Deal Analysis & Optimization",
          description: "I pre-filter opportunities by investment thesis, explain deal metrics, and optimize search criteria for better deal discovery.",
          capabilities: [
            "Pre-filter opportunities based on your investment thesis",
            "Explain deal metrics and valuation methodologies",
            "Optimize search criteria for targeted deal discovery",
            "Analyze deal quality and investment potential",
            "Provide personalized opportunity recommendations"
          ]
        },
        'portfolio-summary': {
          title: "Portfolio Performance Advisor",
          icon: BarChart3,
          role: "Performance & Optimization",
          description: "I explain performance metrics, analyze investment patterns, and provide optimization insights for your portfolio.",
          capabilities: [
            "Explain portfolio performance metrics and KPIs",
            "Analyze investment patterns and allocation strategies",
            "Identify optimization opportunities for better returns",
            "Provide benchmarking against market standards",
            "Generate insights on portfolio diversification and risk"
          ]
        },
        'explore-portfolio': {
          title: "Investment Analysis Expert",
          icon: Target,
          role: "Deal Quality & Risk Assessment",
          description: "I pre-fill screening criteria, analyze deal quality, and explain risk factors for investment decisions.",
          capabilities: [
            "Pre-fill screening criteria based on investment preferences",
            "Analyze deal quality and investment potential",
            "Explain risk factors and mitigation strategies",
            "Assess team capabilities and market opportunities",
            "Provide due diligence guidance and frameworks"
          ]
        },
        'investment-pipeline': {
          title: "Pipeline Optimization Analyst",
          icon: TrendingUp,
          role: "Pipeline Health & Flow Analysis",
          description: "I analyze pipeline health, explain deal flow patterns, and provide optimization insights for your investment process.",
          capabilities: [
            "Analyze pipeline health and conversion metrics",
            "Explain deal flow patterns and bottlenecks",
            "Provide optimization insights for pipeline efficiency",
            "Identify opportunities for process improvement",
            "Generate recommendations for pipeline management"
          ]
        },
        'saved-opportunities': {
          title: "Opportunity Collection Manager",
          icon: Bookmark,
          role: "Collection & Organization",
          description: "I help organize and prioritize your saved trading opportunities for efficient deal management.",
          capabilities: [
            "Organize saved opportunities by relevance and priority",
            "Suggest optimal timing for opportunity evaluation",
            "Track changes in saved opportunities over time",
            "Analyze patterns in your trading preferences",
            "Recommend next steps for saved opportunities"
          ]
        },
        'saved-investment-opportunities': {
          title: "Investment Watchlist Curator",
          icon: Bookmark,
          role: "Investment Collection Management",
          description: "I help organize and prioritize your saved investment opportunities for strategic pipeline management.",
          capabilities: [
            "Categorize saved investment opportunities by investment thesis",
            "Suggest optimal timing for opportunity evaluation",
            "Track changes in saved opportunities and market conditions",
            "Analyze patterns in your investment preferences",
            "Recommend next steps for pipeline advancement"
          ]
        }
      };
      
      return tradingConfigs[activeTradingSection as keyof typeof tradingConfigs] || tradingConfigs['trading-dashboard'];
    }

    const configs = {
      feed: {
        title: "Feed Curator",
        icon: TrendingUp, // Keep TrendingUp for feed
        role: "Analytical & Actionable",
        description: "I analyze your profile and curate personalized content for your feed",
        capabilities: [
          "Curate content based on your profile and interests",
          "Explain feed algorithm and ranking logic",
          "Filter content dynamically by relevance",
          "Suggest engagement strategies for posts",
          "Identify trending topics in your network"
        ]
      },
      communities: {
        title: "Community Navigator",
        icon: Users,
        role: "Analytical & Actionable",
        description: "I help you discover and join the most relevant communities for your goals",
        capabilities: [
          "Recommend communities based on your profile",
          "Explain community benefits and value proposition",
          "Auto-suggest communities to join based on interests",
          "Analyze community engagement and activity levels",
          "Optimize your community participation strategy"
        ]
      },
      events: {
        title: "Event Strategist",
        icon: Calendar,
        role: "Analytical & Actionable",
        description: "I optimize your event discovery, attendance, and networking strategy",
        capabilities: [
          "Filter events by relevance to your goals",
          "Explain event value and networking potential",
          "Suggest attendance based on your objectives",
          "Analyze attendee relevance and networking opportunities",
          "Pre-fill event templates for event creation"
        ]
      },
      saved: {
        title: "Content Organizer",
        icon: Bookmark,
        role: "Analytical & Actionable",
        description: "I help you organize and extract maximum value from your saved content",
        capabilities: [
          "Auto-categorize saved content by topic and relevance",
          "Suggest relevant actions based on saved posts",
          "Explain content significance and key insights",
          "Create content summaries and action items",
          "Recommend follow-up actions and connections"
        ]
      },
      network: {
        title: "Network Optimizer",
        icon: UserSearch,
        role: "Analytical & Actionable",
        description: "I enhance your networking strategy and connection discovery",
        capabilities: [
          "Pre-filter relevant connections based on your goals",
          "Explain connection value and networking potential",
          "Optimize networking strategy and outreach",
          "Analyze mutual connections and warm introductions",
          "Suggest conversation starters and engagement tactics"
        ]
      },
      messaging: {
        title: "Relationship Manager",
        icon: MessageSquare,
        role: "Analytical & Actionable",
        description: "I help you manage relationships and optimize communication strategies",
        capabilities: [
          "Analyze connection strength and engagement history",
          "Suggest engagement actions and follow-ups",
          "Optimize relationship management workflows",
          "Draft personalized message templates",
          "Track relationship development and milestones"
        ]
      }
    };

    return configs[section as keyof typeof configs] || configs.feed;
  };

  const config = getSectionConfig(
    activeTab, 
    activeTab === 'social' ? activeSocialSection : 
    activeTab === 'experts' ? activeExpertsMarketplaceSection || '' :
    activeTab === 'trading' ? activeTradingSection || '' : // activeTradingSection now covers all trading/investment sub-sections
    activeTab === 'intelligence' ? activeMarketIntelligenceSection || '' : ''
  );
  const IconComponent = config.icon;

  return (
    <div className="h-full bg-linkedin-card backdrop-blur-lg border-l border-linkedin-border flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-linkedin-border bg-linkedin-background/50">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-linkedin to-linkedin-light rounded-lg flex items-center justify-center">
              <IconComponent className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{config.title}</h3>
              <p className="text-xs text-linkedin-light">{config.role}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-linkedin-card"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        <p className="text-sm text-gray-300 mb-3">{config.description}</p>
        
        {/* Capabilities */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold text-linkedin-light uppercase tracking-wide">Capabilities</h4>
          <div className="space-y-1">
            {config.capabilities.map((capability, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div className="w-1 h-1 bg-linkedin-light rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-xs text-gray-400">{capability}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-4">
        {/* Welcome Message */}
        <div className="bg-linkedin/20 rounded-lg p-4 border border-linkedin/30">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-linkedin to-linkedin-light rounded-full flex items-center justify-center flex-shrink-0">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm text-white mb-2">
                Hi! I'm your {config.title}. I'm here to help you optimize your {
                  activeTab === 'social' ? activeSocialSection : 
                  activeTab === 'experts' ? activeExpertsMarketplaceSection :
                  activeTab === 'trading' ? activeTradingSection :
                  activeTab === 'intelligence' ? activeMarketIntelligenceSection : 'platform'
                } experience.
              </p>
              <p className="text-xs text-gray-300">
                Ask me anything about {activeTab === 'social' ? (
                  activeSocialSection === 'feed' ? 'content curation and feed optimization' : 
                  activeSocialSection === 'communities' ? 'community discovery and engagement' :
                  activeSocialSection === 'events' ? 'event strategy and networking' :
                  activeSocialSection === 'saved' ? 'content organization and insights' :
                  activeSocialSection === 'network' ? 'networking strategy and connections' :
                  'relationship management and communication'
                ) : activeTab === 'experts' ? (
                  activeExpertsMarketplaceSection === 'discover-experts' ? 'expert discovery and evaluation' :
                  activeExpertsMarketplaceSection === 'discover-services' ? 'service recommendations and analysis' :
                  activeExpertsMarketplaceSection === 'discover-workshops' ? 'workshop strategy and learning optimization' :
                  activeExpertsMarketplaceSection === 'expert-profile' ? 'expert evaluation and engagement strategy' :
                  activeExpertsMarketplaceSection === 'service-details' ? 'service value analysis and investment decisions' :
                  activeExpertsMarketplaceSection === 'workshop-details' ? 'workshop evaluation and learning investment' :
                  activeExpertsMarketplaceSection === 'sessions' ? 'session optimization and progress tracking' :
                  'marketplace collection management'
                ) : activeTab === 'trading' ? (
                  activeTradingSection === 'trading-dashboard' ? 'market metrics and portfolio performance analysis' :
                  activeTradingSection === 'opportunity-marketplace' ? 'deal filtering and opportunity optimization' :
                  activeTradingSection === 'portfolio-summary' ? 'portfolio performance and investment pattern analysis' :
                  activeTradingSection === 'explore-portfolio' ? 'deal screening and risk factor analysis' :
                  activeTradingSection === 'investment-pipeline' ? 'pipeline health and deal flow optimization' :
                  activeTradingSection === 'saved-opportunities' ? 'trading opportunity organization and management' :
                  'investment collection management'
                ) : activeTab === 'intelligence' ? (
                  activeMarketIntelligenceSection === 'intelligence-dashboard' ? 'market analysis and intelligence insights' :
                  'AI report generation and market research'
                ) : 'platform features'}.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold text-linkedin-light uppercase tracking-wide">Quick Actions</h4>
          <div className="grid grid-cols-1 gap-2">
            {activeTab === 'social' && activeSocialSection === 'feed' && (
              <>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <Filter className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Optimize my feed</span>
                  </div>
                </button>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Analyze trending topics</span>
                  </div>
                </button>
              </>
            )}
            
            {activeTab === 'social' && activeSocialSection === 'communities' && (
              <>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Find relevant communities</span>
                  </div>
                </button>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Analyze community value</span>
                  </div>
                </button>
              </>
            )}
            
            {activeTab === 'social' && activeSocialSection === 'events' && (
              <>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Filter relevant events</span>
                  </div>
                </button>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <UserSearch className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Analyze attendees</span>
                  </div>
                </button>
              </>
            )}
            
            {activeTab === 'social' && activeSocialSection === 'saved' && (
              <>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <Settings className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Organize saved content</span>
                  </div>
                </button>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <Lightbulb className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Extract key insights</span>
                  </div>
                </button>
              </>
            )}
            
            {activeTab === 'social' && (activeSocialSection === 'network' || activeSocialSection === 'messaging') && (
              <>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <UserSearch className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Optimize networking</span>
                  </div>
                </button>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Improve relationships</span>
                  </div>
                </button>
              </>
            )}
            
            {activeTab === 'experts' && activeExpertsMarketplaceSection === 'discover-experts' && (
              <>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Match experts to my needs</span>
                  </div>
                </button>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Analyze expert credentials</span>
                  </div>
                </button>
              </>
            )}
            
            {activeTab === 'experts' && activeExpertsMarketplaceSection === 'discover-services' && (
              <>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <Briefcase className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Recommend relevant services</span>
                  </div>
                </button>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Analyze service value</span>
                  </div>
                </button>
              </>
            )}
            
            {activeTab === 'experts' && activeExpertsMarketplaceSection === 'discover-workshops' && (
              <>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Find relevant workshops</span>
                  </div>
                </button>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <Lightbulb className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Optimize learning path</span>
                  </div>
                </button>
              </>
            )}
            
            {activeTab === 'experts' && (activeExpertsMarketplaceSection === 'sessions' || activeExpertsMarketplaceSection === 'saved-items') && (
              <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                <div className="flex items-center space-x-2">
                  <Settings className="w-4 h-4 text-linkedin-light" />
                  <span className="text-sm text-white">Optimize my collection</span>
                </div>
              </button>
            )}
            
            {activeTab === 'trading' && activeTradingSection === 'trading-dashboard' && (
              <>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Explain trading metrics</span>
                  </div>
                </button>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Analyze portfolio performance</span>
                  </div>
                </button>
              </>
            )}

            {activeTab === 'trading' && activeTradingSection === 'opportunity-marketplace' && (
              <>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <Filter className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Pre-filter by investment thesis</span>
                  </div>
                </button>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Explain deal metrics</span>
                  </div>
                </button>
              </>
            )}

            {activeTab === 'trading' && activeTradingSection === 'portfolio-summary' && (
              <>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Explain performance metrics</span>
                  </div>
                </button>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Analyze investment patterns</span>
                  </div>
                </button>
              </>
            )}

            {activeTab === 'trading' && activeTradingSection === 'explore-portfolio' && (
              <>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <Settings className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Pre-fill screening criteria</span>
                  </div>
                </button>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Analyze deal quality</span>
                  </div>
                </button>
              </>
            )}

            {activeTab === 'trading' && activeTradingSection === 'investment-pipeline' && (
              <>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Analyze pipeline health</span>
                  </div>
                </button>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Explain deal flow patterns</span>
                  </div>
                </button>
              </>
            )}

            {activeTab === 'trading' && (activeTradingSection === 'saved-opportunities' || activeTradingSection === 'saved-investment-opportunities') && (
              <>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <Settings className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Organize saved opportunities</span>
                  </div>
                </button>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <Lightbulb className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Prioritize by relevance</span>
                  </div>
                </button>
              </>
            )}

            {activeTab === 'intelligence' && activeMarketIntelligenceSection === 'intelligence-dashboard' && (
              <>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Analyze market trends</span>
                  </div>
                </button>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Identify opportunities</span>
                  </div>
                </button>
              </>
            )}
            
            {activeTab === 'intelligence' && activeMarketIntelligenceSection === 'ai-reports' && (
              <>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Generate market report</span>
                  </div>
                </button>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <Lightbulb className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Research methodology</span>
                  </div>
                </button>
              </>
            )}
            
            {activeTab === 'my-services' && activeMyServicesSection === 'overview' && (
              <>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Analyze service performance</span>
                  </div>
                </button>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Suggest new service ideas</span>
                  </div>
                </button>
              </>
            )}
            
            {activeTab === 'my-services' && activeMyServicesSection === 'create-service' && (
              <>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Generate service description</span>
                  </div>
                </button>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Suggest optimal pricing</span>
                  </div>
                </button>
              </>
            )}
            
            {activeTab === 'my-services' && activeMyServicesSection === 'create-workshop' && (
              <>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Design workshop agenda</span>
                  </div>
                </button>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Define target audience</span>
                  </div>
                </button>
              </>
            )}
            
            {activeTab === 'my-services' && activeMyServicesSection === 'client-management' && (
              <>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Draft client communication</span>
                  </div>
                </button>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Identify upsell opportunities</span>
                  </div>
                </button>
              </>
            )}
            
            {activeTab === 'my-services' && activeMyServicesSection === 'session-management' && (
              <>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Generate session summary</span>
                  </div>
                </button>
                <button className="text-left p-3 bg-linkedin-card/50 hover:bg-linkedin-card rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-linkedin-light" />
                    <span className="text-sm text-white">Create action items</span>
                  </div>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Chat Input */}
      <div className="p-4 border-t border-linkedin-border">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder={`Ask ${config.title} anything...`}
            className="flex-1 bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-linkedin"
          />
          <button className="bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white p-2 rounded-lg transition-all">
            <Zap className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialAICompanionChat;