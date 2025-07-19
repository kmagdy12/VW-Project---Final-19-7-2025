import React, { useState, useEffect, useRef } from 'react';
import { Bot, User, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { ProfileData } from './Onboarding';

interface Message {
  id: string;
  type: 'ai' | 'user';
  content: string;
  options?: string[];
  timestamp: Date;
  isProposal?: boolean;
  proposalData?: any;
  proposalType?: 'direction' | 'portfolio' | 'criteria' | 'summary';
}

interface AIChatProps {
  onUpdateProfile: (section: keyof ProfileData, data: any) => void;
  profileData: ProfileData;
  onComplete: () => void;
  onPhaseChange: (phase: string) => void;
}

interface ChatState {
  phase: 'profile' | 'professional' | 'mindset' | 'portfolio' | 'direction' | 'portfolioDirection' | 'criteria' | 'complete';
  questionIndex: number;
  message: string;
  options?: string[];
  isProposal?: boolean;
  proposalData?: any;
  proposalType?: 'direction' | 'portfolio' | 'criteria' | 'summary';
}

const AIChat: React.FC<AIChatProps> = ({ onUpdateProfile, profileData, onComplete, onPhaseChange }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [chatCompleted, setChatCompleted] = useState(false);
  const [currentPhase, setCurrentPhase] = useState<'profile' | 'professional' | 'mindset' | 'portfolio' | 'direction' | 'portfolioDirection' | 'criteria' | 'complete'>('profile');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const profileQuestions = [
    {
      question: "Hello! I'm your Profile Builder Agent, and I'm excited to help you build your comprehensive profile. Let's start with your basic information - what's your full name?",
      type: 'text',
      section: 'profileInfo' as keyof ProfileData,
      field: 'fullName'
    },
    {
      question: "What's your email address?",
      type: 'text',
      section: 'profileInfo' as keyof ProfileData,
      field: 'emailAddress'
    },
    {
      question: "Could you provide your phone number?",
      type: 'text',
      section: 'profileInfo' as keyof ProfileData,
      field: 'phoneNumber'
    },
    {
      question: "What's your LinkedIn profile URL?",
      type: 'text',
      section: 'profileInfo' as keyof ProfileData,
      field: 'linkedInProfile'
    },
    {
      question: "What's your primary role in the venture ecosystem?",
      options: ["Founder", "Expert", "Investor"],
      section: 'profileInfo' as keyof ProfileData,
      field: 'role'
    },
    {
      question: "Which country are you currently residing in?",
      options: ["UAE", "Saudi Arabia", "Egypt", "Jordan", "Lebanon", "Kuwait", "Qatar", "Bahrain", "Oman", "Morocco", "Tunisia", "Other MENA", "United States", "United Kingdom", "Other"],
      section: 'profileInfo' as keyof ProfileData,
      field: 'countryOfResidence'
    },
    {
      question: "What's your preferred language for communication?",
      options: ["English", "Arabic", "French", "Other"],
      section: 'profileInfo' as keyof ProfileData,
      field: 'preferredLanguage'
    }
  ];

  const professionalQuestions = [
    {
      question: "Great! Now let's talk about your professional background. What's your current occupation or role?",
      type: 'text',
      section: 'professionalBackground' as keyof ProfileData,
      field: 'currentOccupation'
    },
    {
      question: "How many years of professional experience do you have?",
      options: ["0-2 years", "3-5 years", "6-10 years", "11-15 years", "16-20 years", "20+ years"],
      section: 'professionalBackground' as keyof ProfileData,
      field: 'yearsOfExperience'
    },
    {
      question: "Do you have any previous entrepreneurial experience?",
      options: ["First-time entrepreneur", "Serial entrepreneur (2-3 ventures)", "Experienced entrepreneur (4+ ventures)", "No entrepreneurial experience", "Currently exploring entrepreneurship"],
      section: 'professionalBackground' as keyof ProfileData,
      field: 'entrepreneurialExperience'
    },
    {
      question: "Which industries do you have relevant expertise in? (Select all that apply)",
      options: ["Fintech", "Healthtech", "E-commerce", "EdTech", "PropTech", "FoodTech", "Logistics", "AI/ML", "Blockchain", "CleanTech", "Manufacturing", "Retail", "Media & Entertainment", "Other"],
      section: 'professionalBackground' as keyof ProfileData,
      field: 'industryExpertise',
      multiple: true
    },
    {
      question: "Which markets do you have expertise in? (Select all that apply)",
      options: ["MENA Region", "GCC Countries", "North Africa", "Levant", "Europe", "North America", "Asia-Pacific", "Sub-Saharan Africa", "Latin America"],
      section: 'professionalBackground' as keyof ProfileData,
      field: 'marketExpertise',
      multiple: true
    },
    {
      question: "What are your key skills and competencies? (Select all that apply)",
      options: ["Strategic Planning", "Business Development", "Product Management", "Marketing & Sales", "Operations", "Finance & Accounting", "Technology & Engineering", "Legal & Compliance", "Human Resources", "Data Analysis", "Project Management", "Leadership"],
      section: 'professionalBackground' as keyof ProfileData,
      field: 'keySkills',
      multiple: true
    }
  ];

  const mindsetQuestions = [
    {
      question: "Now let's understand your entrepreneurial mindset. How would you describe your risk tolerance?",
      options: ["Conservative - Prefer proven models and lower risk", "Moderate - Balanced approach to risk and reward", "Aggressive - Comfortable with high risk for high reward", "Opportunistic - Risk tolerance varies by situation"],
      section: 'entrepreneurialMindset' as keyof ProfileData,
      field: 'riskTolerance'
    },
    {
      question: "What's your preferred decision-making style?",
      options: ["Data-driven - Rely heavily on analytics and metrics", "Intuitive - Trust gut feelings and experience", "Collaborative - Seek input from team and advisors", "Systematic - Follow structured processes and frameworks"],
      section: 'entrepreneurialMindset' as keyof ProfileData,
      field: 'decisionMakingStyle'
    },
    {
      question: "How would you describe your preferred leadership style?",
      options: ["Visionary - Focus on big picture and inspiration", "Coaching - Develop and mentor team members", "Democratic - Encourage participation and consensus", "Directive - Provide clear instructions and expectations"],
      section: 'entrepreneurialMindset' as keyof ProfileData,
      field: 'leadershipStyle'
    },
    {
      question: "What are your learning and development preferences?",
      options: ["Hands-on experience and learning by doing", "Formal training and structured programs", "Mentorship and one-on-one guidance", "Self-directed learning and research", "Peer learning and networking"],
      section: 'entrepreneurialMindset' as keyof ProfileData,
      field: 'learningPreferences'
    },
    {
      question: "How do you prefer to receive recommendations and advice?",
      options: ["Direct and actionable suggestions", "Strategic insights and frameworks", "Case studies and examples", "Data-backed recommendations", "Personalized guidance based on my situation"],
      section: 'entrepreneurialMindset' as keyof ProfileData,
      field: 'recommendationPreferences'
    },
    {
      question: "What kind of tools and resources would you find most useful? (Select all that apply)",
      options: ["Market research and analytics", "Financial modeling tools", "Networking and connection platforms", "Mentorship and advisory services", "Legal and compliance resources", "Marketing and sales tools", "Product development resources", "Funding and investment platforms"],
      section: 'entrepreneurialMindset' as keyof ProfileData,
      field: 'preferredTools',
      multiple: true
    }
  ];

  const portfolioQuestions = [
    {
      question: "Finally, let's explore your portfolio interests. Which industries are you most interested in? (Select all that apply)",
      options: ["Fintech", "Healthtech", "E-commerce", "EdTech", "PropTech", "FoodTech", "Logistics", "AI/ML", "Blockchain", "CleanTech", "Manufacturing", "Retail", "Media & Entertainment", "Other"],
      section: 'portfolioInterests' as keyof ProfileData,
      field: 'industriesOfInterest',
      multiple: true
    },
    {
      question: "Are there specific sub-industries within your areas of interest? (Select all that apply)",
      options: ["Digital Payments", "Telemedicine", "Online Marketplaces", "Online Learning", "Smart Buildings", "Food Delivery", "Last-mile Delivery", "Machine Learning", "DeFi", "Renewable Energy", "IoT", "SaaS", "Content Creation"],
      section: 'portfolioInterests' as keyof ProfileData,
      field: 'subIndustryInterest',
      multiple: true
    },
    {
      question: "What's your desired market focus? (Select all that apply)",
      options: ["Local market (my country)", "Regional MENA markets", "GCC-focused", "North Africa-focused", "Global markets", "Emerging markets", "Developed markets"],
      section: 'portfolioInterests' as keyof ProfileData,
      field: 'desiredMarketFocus',
      multiple: true
    },
    {
      question: "What type of business models are you interested in exploring? (Select all that apply)",
      options: ["B2B SaaS", "B2C Marketplace", "B2B Marketplace", "Direct-to-Consumer", "Subscription-based", "Transaction-based", "Advertising-based", "Freemium", "Hardware + Software", "Service-based"],
      section: 'portfolioInterests' as keyof ProfileData,
      field: 'businessModelInterest',
      multiple: true
    },
    {
      question: "What are your growth expectations?",
      options: ["Steady, sustainable growth", "Rapid scaling and expansion", "Market leadership focus", "Profitability-first approach", "Impact-driven growth"],
      section: 'portfolioInterests' as keyof ProfileData,
      field: 'growthExpectations'
    },
    {
      question: "What's your preferred building approach?",
      options: ["Hands-on, deeply involved", "Strategic guidance and oversight", "Financial investment with limited involvement", "Mentorship and advisory role", "Collaborative partnership"],
      section: 'portfolioInterests' as keyof ProfileData,
      field: 'buildingApproach'
    },
    {
      question: "What's your preferred diversification level?",
      options: ["Highly diversified across multiple sectors", "Moderately diversified (2-3 sectors)", "Concentrated in 1-2 sectors", "Sector-agnostic, opportunity-driven"],
      section: 'portfolioInterests' as keyof ProfileData,
      field: 'diversificationLevel'
    },
    {
      question: "What's your high-level allocation strategy?",
      options: ["Equal allocation across opportunities", "Concentrated bets on best opportunities", "Stage-based allocation (early vs growth)", "Risk-adjusted allocation", "Market-based allocation"],
      section: 'portfolioInterests' as keyof ProfileData,
      field: 'allocationStrategy'
    },
    {
      question: "What are your target returns?",
      options: ["Conservative returns (10-15% IRR)", "Moderate returns (15-25% IRR)", "High returns (25%+ IRR)", "Market-beating returns", "Impact-adjusted returns"],
      section: 'portfolioInterests' as keyof ProfileData,
      field: 'targetReturns'
    },
    {
      question: "What's your preferred exit/return strategy?",
      options: ["Strategic acquisition", "IPO/Public listing", "Management buyout", "Secondary sale", "Long-term hold", "Flexible based on opportunity"],
      section: 'portfolioInterests' as keyof ProfileData,
      field: 'exitStrategy'
    }
  ];

  const getInitialChatState = (): ChatState => {
    // Check if profile is completely done
    if (profileData.ventureCriteria && Object.keys(profileData.ventureCriteria).length > 0) {
      return {
        phase: 'complete',
        questionIndex: 0,
        message: generateFinalSummary(),
        options: ["Complete Profile"],
        isProposal: true,
        proposalType: 'summary'
      };
    }

    // Check if we need to present venture criteria proposal
    if (profileData.portfolioDirection && Object.keys(profileData.portfolioDirection).length > 0 && 
        (!profileData.ventureCriteria || Object.keys(profileData.ventureCriteria).length === 0)) {
      const criteriaProposal = generateVentureCriteria();
      const proposalText = `Excellent! Finally, let's establish your venture founding criteria. Based on your profile and portfolio direction, here's what I recommend:

**Building Fund Size:** ${criteriaProposal.buildingFundSize}

**Average Ticket Size:** ${criteriaProposal.avgTicketSize}

**Portfolio Size:** ${criteriaProposal.portfolioSize}

**Joining Type/Stage:** ${criteriaProposal.joiningType}

**Venture Stages:**
${criteriaProposal.ventureStage.map(stage => `• ${stage}`).join('\n')}

**Equity Ownership:** ${criteriaProposal.equityOwnership}

**Target Position:** ${criteriaProposal.targetPosition}

**Co-founders Criteria:**
${criteriaProposal.cofoundersCriteria.map(criteria => `• ${criteria}`).join('\n')}

Are you satisfied with these venture founding criteria?`;

      return {
        phase: 'criteria',
        questionIndex: 0,
        message: proposalText,
        options: ["Accept Venture Criteria", "Request Modifications"],
        isProposal: true,
        proposalData: criteriaProposal,
        proposalType: 'criteria'
      };
    }

    // Check if we need to present portfolio direction proposal
    if (profileData.directionThesis && Object.keys(profileData.directionThesis).length > 0 && 
        (!profileData.portfolioDirection || Object.keys(profileData.portfolioDirection).length === 0)) {
      const portfolioProposal = generatePortfolioDirection();
      const proposalText = `Perfect! Now let's define your portfolio direction framework. Based on your strategic thesis, here's my recommendation:

**Total Bootstrap Fund:** ${portfolioProposal.totalBootstrapFund}

**Industry Focus:**
${portfolioProposal.industryFocus.map(industry => `• ${industry}`).join('\n')}

**Geographical Focus:**
${portfolioProposal.geographicalFocus.map(geo => `• ${geo}`).join('\n')}

**Problem/Opportunity Focus:**
${portfolioProposal.problemFocus.map(problem => `• ${problem}`).join('\n')}

**Business Model Focus:**
${portfolioProposal.businessModelFocus.map(model => `• ${model}`).join('\n')}

**Building Approach:** ${portfolioProposal.buildingApproach}

**Diversification/Concentration Level:** ${portfolioProposal.diversificationLevel}

**High-level Allocation Strategy:** ${portfolioProposal.allocationStrategy}

**Exit/Return Strategy:** ${portfolioProposal.exitStrategy}

Does this portfolio direction framework align with your investment approach?`;

      return {
        phase: 'portfolioDirection',
        questionIndex: 0,
        message: proposalText,
        options: ["Accept Portfolio Direction", "Request Modifications"],
        isProposal: true,
        proposalData: portfolioProposal,
        proposalType: 'portfolio'
      };
    }

    // Check if we need to present direction thesis proposal
    if (profileData.portfolioInterests && Object.keys(profileData.portfolioInterests).length >= 8 && 
        (!profileData.directionThesis || Object.keys(profileData.directionThesis).length === 0)) {
      const directionProposal = generateDirectionThesis();
      const proposalText = `Excellent! Based on your comprehensive profile, I've prepared your strategic direction and thesis. Here's what I recommend:

**Strategic Goals:**
${directionProposal.strategicGoals.map(goal => `• ${goal}`).join('\n')}

**Strategic Objectives:**
${directionProposal.strategicObjectives.map(obj => `• ${obj}`).join('\n')}

**Investment Philosophy:**
${directionProposal.philosophy}

**Risk Appetite:**
${directionProposal.riskAppetite}

**ESG & Impact Considerations:**
${directionProposal.esgImpact}

**Key Capabilities & Value-Add:**
${directionProposal.capabilities.map(cap => `• ${cap}`).join('\n')}

**Key Metrics for Success:**
${directionProposal.keyMetrics.map(metric => `• ${metric}`).join('\n')}

Does this strategic direction align with your vision and goals?`;

      return {
        phase: 'direction',
        questionIndex: 0,
        message: proposalText,
        options: ["Accept Direction/Thesis", "Request Modifications"],
        isProposal: true,
        proposalData: directionProposal,
        proposalType: 'direction'
      };
    }

    // Check portfolio interests section
    if (profileData.entrepreneurialMindset && Object.keys(profileData.entrepreneurialMindset).length >= 5) {
      const portfolioFields = profileData.portfolioInterests ? Object.keys(profileData.portfolioInterests).length : 0;
      if (portfolioFields < portfolioQuestions.length) {
        return {
          phase: 'portfolio',
          questionIndex: portfolioFields,
          message: portfolioQuestions[portfolioFields].question,
          options: portfolioQuestions[portfolioFields].options
        };
      }
    }

    // Check entrepreneurial mindset section
    if (profileData.professionalBackground && Object.keys(profileData.professionalBackground).length >= 5) {
      const mindsetFields = profileData.entrepreneurialMindset ? Object.keys(profileData.entrepreneurialMindset).length : 0;
      if (mindsetFields < mindsetQuestions.length) {
        return {
          phase: 'mindset',
          questionIndex: mindsetFields,
          message: mindsetQuestions[mindsetFields].question,
          options: mindsetQuestions[mindsetFields].options
        };
      }
    }

    // Check professional background section
    if (profileData.profileInfo && Object.keys(profileData.profileInfo).length >= 5) {
      const professionalFields = profileData.professionalBackground ? Object.keys(profileData.professionalBackground).length : 0;
      if (professionalFields < professionalQuestions.length) {
        return {
          phase: 'professional',
          questionIndex: professionalFields,
          message: professionalQuestions[professionalFields].question,
          options: professionalQuestions[professionalFields].options
        };
      }
    }

    // Check profile info section
    const profileFields = profileData.profileInfo ? Object.keys(profileData.profileInfo).length : 0;
    if (profileFields < profileQuestions.length) {
      return {
        phase: 'profile',
        questionIndex: profileFields,
        message: profileQuestions[profileFields].question,
        options: profileQuestions[profileFields].options
      };
    }

    // Default to first question if nothing is found
    return {
      phase: 'profile',
      questionIndex: 0,
      message: profileQuestions[0].question,
      options: profileQuestions[0].options
    };
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Initialize chat state based on existing profile data
    if (messages.length === 0) {
      const initialState = getInitialChatState();
      setCurrentPhase(initialState.phase);
      setCurrentQuestionIndex(initialState.questionIndex);
      onPhaseChange('profile');
      
      setTimeout(() => {
        addAIMessage(
          initialState.message, 
          initialState.options, 
          initialState.isProposal, 
          initialState.proposalData, 
          initialState.proposalType
        );
      }, 1000);
    }
  }, [profileData]);

  const addAIMessage = (content: string, options?: string[], isProposal?: boolean, proposalData?: any, proposalType?: 'direction' | 'portfolio' | 'criteria' | 'summary') => {
    setIsTyping(true);
    setTimeout(() => {
      const newMessage: Message = {
        id: Date.now().toString(),
        type: 'ai',
        content,
        options,
        timestamp: new Date(),
        isProposal,
        proposalData,
        proposalType
      };
      setMessages(prev => [...prev, newMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const addUserMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const getCurrentQuestions = () => {
    switch (currentPhase) {
      case 'profile': return profileQuestions;
      case 'professional': return professionalQuestions;
      case 'mindset': return mindsetQuestions;
      case 'portfolio': return portfolioQuestions;
      default: return [];
    }
  };

  const getNextPhase = () => {
    switch (currentPhase) {
      case 'profile': return 'professional';
      case 'professional': return 'mindset';
      case 'mindset': return 'portfolio';
      case 'portfolio': return 'direction';
      case 'direction': return 'portfolioDirection';
      case 'portfolioDirection': return 'criteria';
      case 'criteria': return 'complete';
      default: return 'complete';
    }
  };

  const generateDirectionThesis = () => {
    const industries = profileData.portfolioInterests?.industriesOfInterest || [];
    const experience = profileData.professionalBackground?.yearsOfExperience || '';
    const riskTolerance = profileData.entrepreneurialMindset?.riskTolerance || '';
    const marketFocus = profileData.portfolioInterests?.desiredMarketFocus || [];
    const skills = profileData.professionalBackground?.keySkills || [];

    const proposal = {
      strategicGoals: [
        `Build a diversified ${industries[0] || 'technology'} portfolio in ${marketFocus[0] || 'MENA'} region`,
        "Achieve sustainable returns while supporting regional innovation ecosystem",
        "Establish thought leadership and strategic influence in the venture community",
        "Create positive social and economic impact through strategic investments"
      ],
      strategicObjectives: [
        "Deploy capital efficiently across 15-25 high-potential ventures over 3-5 years",
        "Maintain portfolio IRR above 20-25% with balanced risk exposure",
        "Support portfolio companies with strategic guidance and network access",
        "Build a reputation as a value-adding investor in the ecosystem"
      ],
      philosophy: `Focus on ${industries.join(' and ') || 'technology'} startups that solve real regional problems with scalable solutions, emphasizing strong founding teams, clear market traction, and sustainable business models. Prioritize ventures that align with regional development goals and have potential for significant impact.`,
      riskAppetite: riskTolerance === "Conservative - Prefer proven models and lower risk" ? 
        "Conservative approach with focus on proven business models, established market demand, and experienced founding teams. Prefer later-stage investments with clear path to profitability." :
        riskTolerance === "Aggressive - Comfortable with high risk for high reward" ?
        "High risk tolerance for breakthrough innovations and disruptive technologies. Comfortable with early-stage investments and unproven markets for exceptional return potential." :
        "Balanced risk approach with diversified exposure across stages and sectors. Emphasis on calculated risks with strong due diligence and risk mitigation strategies.",
      esgImpact: "Prioritize investments that create positive social impact while generating strong financial returns. Focus on financial inclusion, digital transformation, healthcare accessibility, education advancement, and environmental sustainability. Measure success through both financial metrics and social impact indicators.",
      capabilities: [
        skills.includes("Strategic Planning") ? "Strategic planning and market analysis expertise" : "Strategic guidance and planning support",
        skills.includes("Business Development") ? "Business development and partnership facilitation" : "Network access and business development support",
        skills.includes("Operations") ? "Operational expertise and scaling guidance" : "Operational support and best practices sharing",
        skills.includes("Finance & Accounting") ? "Financial modeling and investment analysis" : "Financial guidance and investor relations",
        "Regulatory and compliance navigation in MENA markets",
        "Cross-border expansion and international market entry"
      ],
      keyMetrics: [
        "Portfolio IRR and cash-on-cash returns",
        "Time to exit and portfolio company growth rates",
        "Market share expansion and revenue growth of portfolio companies",
        "Social impact metrics including job creation and economic contribution",
        "Founder satisfaction and value-add perception scores",
        "Follow-on investment rates and portfolio company survival rates"
      ]
    };

    return proposal;
  };

  const generatePortfolioDirection = () => {
    const experience = profileData.professionalBackground?.yearsOfExperience || '';
    const entrepreneurialExp = profileData.professionalBackground?.entrepreneurialExperience || '';
    const industries = profileData.portfolioInterests?.industriesOfInterest || [];
    const marketFocus = profileData.portfolioInterests?.desiredMarketFocus || [];
    const businessModels = profileData.portfolioInterests?.businessModelInterest || [];
    const buildingApproach = profileData.portfolioInterests?.buildingApproach || '';
    const diversification = profileData.portfolioInterests?.diversificationLevel || '';
    const allocation = profileData.portfolioInterests?.allocationStrategy || '';
    const exitStrategy = profileData.portfolioInterests?.exitStrategy || '';

    // Determine fund size based on experience and entrepreneurial background
    const getFundSize = () => {
      if (entrepreneurialExp?.includes("Serial entrepreneur") || experience?.includes("20+")) {
        return "$5M - $25M";
      } else if (entrepreneurialExp?.includes("Experienced entrepreneur") || experience?.includes("15")) {
        return "$2M - $10M";
      } else {
        return "$500K - $5M";
      }
    };

    const proposal = {
      totalBootstrapFund: getFundSize(),
      industryFocus: industries.length > 0 ? industries : ["Fintech", "Healthtech", "E-commerce"],
      geographicalFocus: marketFocus.length > 0 ? marketFocus : ["MENA Region", "GCC Countries"],
      problemFocus: [
        "Financial inclusion and digital payment solutions",
        "Healthcare accessibility and telemedicine platforms",
        "E-commerce infrastructure and logistics optimization",
        "Educational technology and skill development",
        "Sustainable technology and clean energy solutions"
      ],
      businessModelFocus: businessModels.length > 0 ? businessModels : ["B2B SaaS", "B2C Marketplace", "Subscription-based"],
      buildingApproach: buildingApproach || "Strategic guidance with hands-on support during critical growth phases",
      diversificationLevel: diversification || "Moderately diversified across 2-3 core sectors with concentrated bets on best opportunities",
      allocationStrategy: allocation || "40% early stage (Pre-seed/Seed), 40% growth stage (Series A/B), 20% follow-on investments and reserves",
      exitStrategy: exitStrategy || "5-7 year holding period targeting strategic acquisitions or IPO, with flexibility for earlier exits on exceptional performers"
    };

    return proposal;
  };

  const generateVentureCriteria = () => {
    const experience = profileData.professionalBackground?.yearsOfExperience || '';
    const entrepreneurialExp = profileData.professionalBackground?.entrepreneurialExperience || '';
    const buildingApproach = profileData.portfolioInterests?.buildingApproach || '';
    const riskTolerance = profileData.entrepreneurialMindset?.riskTolerance || '';
    const leadershipStyle = profileData.entrepreneurialMindset?.leadershipStyle || '';

    // Determine criteria based on profile
    const getTicketSize = () => {
      if (entrepreneurialExp?.includes("Serial entrepreneur") || experience?.includes("20+")) {
        return "$100K - $500K";
      } else if (entrepreneurialExp?.includes("Experienced entrepreneur") || experience?.includes("15")) {
        return "$50K - $250K";
      } else {
        return "$25K - $100K";
      }
    };

    const getEquityRange = () => {
      if (buildingApproach?.includes("Hands-on")) {
        return "15-30% equity stake with active board participation";
      } else if (buildingApproach?.includes("Strategic guidance")) {
        return "10-20% equity stake with board observer or advisory role";
      } else {
        return "5-15% equity stake with quarterly engagement";
      }
    };

    const proposal = {
      buildingFundSize: profileData.portfolioDirection?.totalBootstrapFund || "$2M - $10M",
      avgTicketSize: getTicketSize(),
      portfolioSize: "15-25 active investments with focus on quality over quantity",
      joiningType: buildingApproach?.includes("Hands-on") ? 
        "Lead investor with active board seat and operational involvement" :
        "Strategic investor with board observer rights and advisory role",
      ventureStage: riskTolerance?.includes("Conservative") ? 
        ["Seed", "Series A"] : 
        riskTolerance?.includes("Aggressive") ? 
        ["Pre-seed", "Seed", "Series A"] : 
        ["Seed", "Series A", "Series B"],
      equityOwnership: getEquityRange(),
      targetPosition: leadershipStyle?.includes("Coaching") ? 
        "Active board member with mentorship role" :
        leadershipStyle?.includes("Visionary") ?
        "Strategic advisor with quarterly engagement" :
        "Board observer with advisory capacity",
      cofoundersCriteria: [
        "Proven track record in industry or exceptional domain expertise",
        "Complementary skill sets with clear role definition and responsibilities",
        "Strong commitment with full-time dedication to the venture",
        "Cultural fit and alignment with company values and vision",
        "Demonstrated ability to execute and adapt in dynamic environments",
        "Strong communication skills and ability to attract top talent",
        "Previous experience in scaling businesses or relevant market knowledge"
      ]
    };

    return proposal;
  };

  const generateFinalSummary = () => {
    const summaryText = `🎉 Congratulations! Your comprehensive venture profile is now complete with all strategic frameworks in place:

**Profile Overview:**
• Name: ${profileData.profileInfo?.fullName || 'Not provided'}
• Experience: ${profileData.professionalBackground?.yearsOfExperience || 'Not provided'}
• Industries: ${profileData.professionalBackground?.industryExpertise?.join(', ') || 'Not provided'}
• Risk Profile: ${profileData.entrepreneurialMindset?.riskTolerance || 'Not provided'}

**Strategic Direction:**
• Focus Areas: ${profileData.directionThesis?.strategicGoals?.slice(0, 2).join(', ') || 'Not provided'}
• Investment Philosophy: ${profileData.directionThesis?.philosophy?.substring(0, 100) + '...' || 'Not provided'}

**Portfolio Framework:**
• Fund Size: ${profileData.portfolioDirection?.totalBootstrapFund || 'Not provided'}
• Geographic Focus: ${profileData.portfolioDirection?.geographicalFocus?.join(', ') || 'Not provided'}
• Industry Focus: ${profileData.portfolioDirection?.industryFocus?.join(', ') || 'Not provided'}

**Investment Criteria:**
• Ticket Size: ${profileData.ventureCriteria?.avgTicketSize || 'Not provided'}
• Portfolio Size: ${profileData.ventureCriteria?.portfolioSize || 'Not provided'}
• Target Stages: ${profileData.ventureCriteria?.ventureStage?.join(', ') || 'Not provided'}

You now have a complete strategic framework for venture activities on VentureHub! The platform will use this comprehensive profile to provide personalized recommendations, match you with relevant opportunities, and connect you with the right people in the ecosystem.`;

    return summaryText;
  };

  const handleOptionSelect = (option: string, isMultiple?: boolean) => {
    addUserMessage(option);
    
    const currentQuestions = getCurrentQuestions();
    const currentQuestion = currentQuestions[currentQuestionIndex];
    
    if (currentQuestion?.section && currentQuestion?.field) {
      if (isMultiple || currentQuestion.multiple) {
        // Handle multiple selection
        const currentValues = (profileData[currentQuestion.section] as any)?.[currentQuestion.field] || [];
        const updatedValues = currentValues.includes(option) 
          ? currentValues.filter((v: string) => v !== option)
          : [...currentValues, option];
        onUpdateProfile(currentQuestion.section, { [currentQuestion.field]: updatedValues });
      } else {
        // Handle single selection
        onUpdateProfile(currentQuestion.section, { [currentQuestion.field]: option });
      }
    }

    // Move to next question or phase
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < currentQuestions.length) {
      setCurrentQuestionIndex(nextIndex);
      setTimeout(() => {
        addAIMessage(currentQuestions[nextIndex].question, currentQuestions[nextIndex].options);
      }, 2000);
    } else {
      // Move to next phase or generate proposals
      const nextPhase = getNextPhase();
      if (nextPhase === 'direction') {
        onPhaseChange('direction');
        setCurrentPhase('direction');
        setTimeout(() => {
          const directionProposal = generateDirectionThesis();
          const proposalText = `Excellent! Based on your comprehensive profile, I've prepared your strategic direction and thesis. Here's what I recommend:

**Strategic Goals:**
${directionProposal.strategicGoals.map(goal => `• ${goal}`).join('\n')}

**Strategic Objectives:**
${directionProposal.strategicObjectives.map(obj => `• ${obj}`).join('\n')}

**Investment Philosophy:**
${directionProposal.philosophy}

**Risk Appetite:**
${directionProposal.riskAppetite}

**ESG & Impact Considerations:**
${directionProposal.esgImpact}

**Key Capabilities & Value-Add:**
${directionProposal.capabilities.map(cap => `• ${cap}`).join('\n')}

**Key Metrics for Success:**
${directionProposal.keyMetrics.map(metric => `• ${metric}`).join('\n')}

Does this strategic direction align with your vision and goals?`;

          addAIMessage(proposalText, ["Accept Direction/Thesis", "Request Modifications"], true, directionProposal, 'direction');
        }, 2000);
      } else if (nextPhase === 'complete') {
        onPhaseChange('complete');
        setCurrentPhase('complete');
        setTimeout(() => {
          const summaryText = generateFinalSummary();
          addAIMessage(summaryText, ["Complete Profile"], true, null, 'summary');
        }, 2000);
      } else {
        onPhaseChange(nextPhase);
        setCurrentPhase(nextPhase as any);
        setCurrentQuestionIndex(0);
        const nextQuestions = nextPhase === 'professional' ? professionalQuestions :
                            nextPhase === 'mindset' ? mindsetQuestions :
                            portfolioQuestions;
        setTimeout(() => {
          addAIMessage(nextQuestions[0].question, nextQuestions[0].options);
        }, 2000);
      }
    }
  };

  const handleTextSubmit = (text: string) => {
    if (!text.trim()) return;
    
    addUserMessage(text);
    
    const currentQuestions = getCurrentQuestions();
    const currentQuestion = currentQuestions[currentQuestionIndex];
    
    if (currentQuestion?.section && currentQuestion?.field) {
      onUpdateProfile(currentQuestion.section, { [currentQuestion.field]: text });
    }

    // Move to next question or phase
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < currentQuestions.length) {
      setCurrentQuestionIndex(nextIndex);
      setTimeout(() => {
        addAIMessage(currentQuestions[nextIndex].question, currentQuestions[nextIndex].options);
      }, 2000);
    } else {
      // Move to next phase or generate proposals
      const nextPhase = getNextPhase();
      if (nextPhase === 'direction') {
        onPhaseChange('direction');
        setCurrentPhase('direction');
        setTimeout(() => {
          const directionProposal = generateDirectionThesis();
          const proposalText = `Excellent! Based on your comprehensive profile, I've prepared your strategic direction and thesis. Here's what I recommend:

**Strategic Goals:**
${directionProposal.strategicGoals.map(goal => `• ${goal}`).join('\n')}

**Strategic Objectives:**
${directionProposal.strategicObjectives.map(obj => `• ${obj}`).join('\n')}

**Investment Philosophy:**
${directionProposal.philosophy}

**Risk Appetite:**
${directionProposal.riskAppetite}

**ESG & Impact Considerations:**
${directionProposal.esgImpact}

**Key Capabilities & Value-Add:**
${directionProposal.capabilities.map(cap => `• ${cap}`).join('\n')}

**Key Metrics for Success:**
${directionProposal.keyMetrics.map(metric => `• ${metric}`).join('\n')}

Does this strategic direction align with your vision and goals?`;

          addAIMessage(proposalText, ["Accept Direction/Thesis", "Request Modifications"], true, directionProposal, 'direction');
        }, 2000);
      } else if (nextPhase === 'complete') {
        onPhaseChange('complete');
        setCurrentPhase('complete');
        setTimeout(() => {
          const summaryText = generateFinalSummary();
          addAIMessage(summaryText, ["Complete Profile"], true, null, 'summary');
        }, 2000);
      } else {
        onPhaseChange(nextPhase);
        setCurrentPhase(nextPhase as any);
        setCurrentQuestionIndex(0);
        const nextQuestions = nextPhase === 'professional' ? professionalQuestions :
                            nextPhase === 'mindset' ? mindsetQuestions :
                            portfolioQuestions;
        setTimeout(() => {
          addAIMessage(nextQuestions[0].question, nextQuestions[0].options);
        }, 2000);
      }
    }
  };

  const handleProposalResponse = (response: string, proposalData: any, proposalType: 'direction' | 'portfolio' | 'criteria' | 'summary') => {
    addUserMessage(response);

    if (response === "Accept Direction/Thesis" && proposalType === 'direction') {
      onUpdateProfile('directionThesis', proposalData);
      onPhaseChange('portfolioDirection');
      setCurrentPhase('portfolioDirection');
      
      setTimeout(() => {
        const portfolioProposal = generatePortfolioDirection();
        const proposalText = `Perfect! Now let's define your portfolio direction framework. Based on your strategic thesis, here's my recommendation:

**Total Bootstrap Fund:** ${portfolioProposal.totalBootstrapFund}

**Industry Focus:**
${portfolioProposal.industryFocus.map(industry => `• ${industry}`).join('\n')}

**Geographical Focus:**
${portfolioProposal.geographicalFocus.map(geo => `• ${geo}`).join('\n')}

**Problem/Opportunity Focus:**
${portfolioProposal.problemFocus.map(problem => `• ${problem}`).join('\n')}

**Business Model Focus:**
${portfolioProposal.businessModelFocus.map(model => `• ${model}`).join('\n')}

**Building Approach:** ${portfolioProposal.buildingApproach}

**Diversification/Concentration Level:** ${portfolioProposal.diversificationLevel}

**High-level Allocation Strategy:** ${portfolioProposal.allocationStrategy}

**Exit/Return Strategy:** ${portfolioProposal.exitStrategy}

Does this portfolio direction framework align with your investment approach?`;

        addAIMessage(proposalText, ["Accept Portfolio Direction", "Request Modifications"], true, portfolioProposal, 'portfolio');
      }, 2000);
    } else if (response === "Accept Portfolio Direction" && proposalType === 'portfolio') {
      onUpdateProfile('portfolioDirection', proposalData);
      onPhaseChange('criteria');
      setCurrentPhase('criteria');
      
      setTimeout(() => {
        const criteriaProposal = generateVentureCriteria();
        const proposalText = `Excellent! Finally, let's establish your venture founding criteria. Based on your profile and portfolio direction, here's what I recommend:

**Building Fund Size:** ${criteriaProposal.buildingFundSize}

**Average Ticket Size:** ${criteriaProposal.avgTicketSize}

**Portfolio Size:** ${criteriaProposal.portfolioSize}

**Joining Type/Stage:** ${criteriaProposal.joiningType}

**Venture Stages:**
${criteriaProposal.ventureStage.map(stage => `• ${stage}`).join('\n')}

**Equity Ownership:** ${criteriaProposal.equityOwnership}

**Target Position:** ${criteriaProposal.targetPosition}

**Co-founders Criteria:**
${criteriaProposal.cofoundersCriteria.map(criteria => `• ${criteria}`).join('\n')}

Are you satisfied with these venture founding criteria?`;

        addAIMessage(proposalText, ["Accept Venture Criteria", "Request Modifications"], true, criteriaProposal, 'criteria');
      }, 2000);
    } else if (response === "Accept Venture Criteria" && proposalType === 'criteria') {
      onUpdateProfile('ventureCriteria', proposalData);
      onPhaseChange('complete');
      setCurrentPhase('complete');
      
      setTimeout(() => {
        const summaryText = generateFinalSummary();
        addAIMessage(summaryText, ["Complete Profile"], true, null, 'summary');
      }, 2000);
    } else if (response === "Complete Profile") {
      setTimeout(() => {
        addAIMessage("🎉 Outstanding! Your comprehensive venture profile is now complete with strategic framework, portfolio direction, and founding criteria. You're fully prepared to make informed decisions and discover the best opportunities on Venture Weavers!");
        setChatCompleted(true);
      }, 2000);
    } else if (response === "Request Modifications") {
      setTimeout(() => {
        addAIMessage("I'd be happy to help you modify the proposal. What specific aspects would you like to change or adjust? Please describe your preferences and I'll update the recommendations accordingly.", undefined, false);
      }, 1000);
    }
  };

  return (
    <div className="h-full flex flex-col bg-slate-800/50">
      {/* Chat Header */}
      <div className="p-6 border-b border-white/20">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Profile Builder Agent</h3>
            <p className="text-sm text-gray-400">Building your comprehensive venture profile</p>
          </div>
        </div>
        
        {/* Phase Indicator */}
        <div className="mt-4 flex items-center space-x-1 flex-wrap gap-y-2">
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
            currentPhase === 'profile' ? 'bg-blue-500 text-white' : 
            ['professional', 'mindset', 'portfolio', 'direction', 'portfolioDirection', 'criteria', 'complete'].includes(currentPhase) ? 'bg-green-500 text-white' : 'bg-gray-600 text-gray-300'
          }`}>
            Profile
          </div>
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
            currentPhase === 'professional' ? 'bg-blue-500 text-white' : 
            ['mindset', 'portfolio', 'direction', 'portfolioDirection', 'criteria', 'complete'].includes(currentPhase) ? 'bg-green-500 text-white' : 'bg-gray-600 text-gray-300'
          }`}>
            Professional
          </div>
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
            currentPhase === 'mindset' ? 'bg-blue-500 text-white' : 
            ['portfolio', 'direction', 'portfolioDirection', 'criteria', 'complete'].includes(currentPhase) ? 'bg-green-500 text-white' : 'bg-gray-600 text-gray-300'
          }`}>
            Mindset
          </div>
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
            currentPhase === 'portfolio' ? 'bg-blue-500 text-white' : 
            ['direction', 'portfolioDirection', 'criteria', 'complete'].includes(currentPhase) ? 'bg-green-500 text-white' : 'bg-gray-600 text-gray-300'
          }`}>
            Portfolio
          </div>
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
            currentPhase === 'direction' ? 'bg-blue-500 text-white' : 
            ['portfolioDirection', 'criteria', 'complete'].includes(currentPhase) ? 'bg-green-500 text-white' : 'bg-gray-600 text-gray-300'
          }`}>
            Direction
          </div>
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
            currentPhase === 'portfolioDirection' ? 'bg-blue-500 text-white' : 
            ['criteria', 'complete'].includes(currentPhase) ? 'bg-green-500 text-white' : 'bg-gray-600 text-gray-300'
          }`}>
            Portfolio Dir.
          </div>
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
            currentPhase === 'criteria' ? 'bg-blue-500 text-white' : 
            currentPhase === 'complete' ? 'bg-green-500 text-white' : 'bg-gray-600 text-gray-300'
          }`}>
            Criteria
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex items-start space-x-3 max-w-[85%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.type === 'user' 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                  : 'bg-gradient-to-r from-blue-500 to-purple-500'
              }`}>
                {message.type === 'user' ? (
                  <User className="w-4 h-4 text-white" />
                ) : (
                  <Bot className="w-4 h-4 text-white" />
                )}
              </div>
              <div className={`rounded-2xl p-4 ${
                message.type === 'user' 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                  : message.isProposal
                    ? 'bg-gradient-to-r from-green-500/20 to-blue-500/20 text-white border border-green-500/30'
                    : 'bg-white/10 text-white border border-white/20'
              }`}>
                <div className="text-sm whitespace-pre-line">{message.content}</div>
                {message.options && !message.isProposal && (
                  <div className="mt-4 space-y-2">
                    {message.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionSelect(option)}
                        className="block w-full text-left p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors border border-white/20 hover:border-purple-500/50"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
                {message.isProposal && message.options && (
                  <div className="mt-4 flex space-x-3">
                    {message.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleProposalResponse(option, message.proposalData, message.proposalType!)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${
                          option.includes('Accept') 
                            ? 'bg-green-500 hover:bg-green-600 text-white'
                            : option.includes('Complete')
                            ? 'bg-blue-500 hover:bg-blue-600 text-white'
                            : 'bg-orange-500 hover:bg-orange-600 text-white'
                        }`}
                      >
                        {option.includes('Accept') || option.includes('Complete') ? (
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4" />
                            <span>{option}</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2">
                            <AlertCircle className="w-4 h-4" />
                            <span>{option}</span>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-start space-x-3 max-w-[80%]">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-white/10 rounded-2xl p-4 border border-white/20">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Complete Button */}
      {chatCompleted && (
        <div className="p-6 border-t border-white/20 text-center">
          <button
            onClick={onComplete}
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            Continue to Platform
          </button>
        </div>
      )}

      {/* Text Input for open-ended questions */}
      {currentPhase !== 'complete' && 
       !isTyping && 
       !chatCompleted && 
       getCurrentQuestions()[currentQuestionIndex]?.type === 'text' && (
        <div className="p-6 border-t border-white/20">
          <TextInput onSubmit={handleTextSubmit} />
        </div>
      )}
    </div>
  );
};

const TextInput: React.FC<{ onSubmit: (text: string) => void }> = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-3">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your answer..."
        className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
      />
      <button
        type="submit"
        disabled={!text.trim()}
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-lg transition-all"
      >
        <Send className="w-5 h-5" />
      </button>
    </form>
  );
};

export default AIChat;