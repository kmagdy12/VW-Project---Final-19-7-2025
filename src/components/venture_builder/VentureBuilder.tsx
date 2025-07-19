import React, { useState } from 'react';
import OrientationScreen from './OrientationScreen';
import VentureBuildingLayout from './VentureBuildingLayout';
import KnowledgeBaseChat from './KnowledgeBaseChat';
import KnowledgeBaseInputs from './KnowledgeBaseInputs';
import IdeaStageChat from './idea_stage/IdeaStageChat';
import MarketTargetingInputs from './idea_stage/MarketTargetingInputs';
import ProblemDefinitionInputs from './idea_stage/ProblemDefinitionInputs';
import IdeationInputs from './idea_stage/IdeationInputs';
import ValidationStageChat from './validation_stage/ValidationStageChat';
import BusinessPlanChat from './business_plan/BusinessPlanChat';
import ValidationTabs from './validation_stage/ValidationTabs';
import TargetAudienceInputs from './validation_stage/TargetAudienceInputs';
import AIPersonaGenerationInputs from './validation_stage/AIPersonaGenerationInputs';
import QuestionnaireDesignInputs from './validation_stage/QuestionnaireDesignInputs';
import AISimulationInputs from './validation_stage/AISimulationInputs';
import BusinessPlanProgress from './business_plan/BusinessPlanProgress';
import MarketAssessmentInputs from './business_plan/MarketAssessmentInputs';
import BusinessModelInputs from './business_plan/business_model/BusinessModelInputs';
import StrategyRoadmapContainer from './business_plan/StrategyRoadmapInputs';
import TacticalPlanInputs from './business_plan/TacticalPlanInputs';
import FinancialPlanInputs from './business_plan/FinancialPlanInputs';
import BrandCreationProgress from './brand_creation/BrandCreationProgress';
import BrandCreationChat from './brand_creation/BrandCreationChat';
import LogoConceptInputs from './brand_creation/LogoConceptInputs';
import LogoDesignInputs from './brand_creation/LogoDesignInputs';
import ColorPaletteInputs from './brand_creation/ColorPaletteInputs';
import TypographyInputs from './brand_creation/TypographyInputs';
import VisualStylesInputs from './brand_creation/VisualStylesInputs';
import BrandApplicationsInputs from './brand_creation/BrandApplicationsInputs';
import ProductCreationProgress from './product_creation/ProductCreationProgress';
import ProductCreationChat from './product_creation/ProductCreationChat';
import UXInputs from './product_creation/UXInputs';
import PrototypeInputs from './product_creation/PrototypeInputs';
import MVPInputs from './product_creation/MVPInputs';
import AIChatHistory from './AIChatHistory';
import { ArrowLeft } from 'lucide-react';

interface VentureBuilderProps {
  onBack: () => void;
}

type VentureStage = 'orientation' | 'knowledge_base' | 'idea' | 'validation' | 'business_plan' | 'brand_creation' | 'product_creation' | 'setup' | 'investment_readiness';
type VentureType = 'new' | 'existing' | null;
type ValidationSubStage = 'target-audience' | 'ai-personas' | 'questionnaire' | 'ai-simulation';
type BusinessPlanSubStage = 'market_assessment' | 'business_model' | 'strategy_roadmap' | 'tactical_plan' | 'financial_plan';
type BrandCreationSubStage = 'logo_concept' | 'logo_design' | 'color_palette' | 'typography' | 'visual_styles' | 'brand_applications';
type ProductCreationSubStage = 'ux' | 'prototype' | 'mvp';

interface Problem {
  id: number;
  description: string;
  size: number; // percentage of problem size
  impact: 'high' | 'medium' | 'low';
  validation: string[];
}

interface Solution {
  problemId: number;
  description: string;
}

interface BusinessModel {
  who: string;
  what: string;
  how: string;
  why: string;
}

interface TargetAudienceData {
  demographics: {
    ageRange: string;
    gender: string;
    location: string;
    incomeLevel: string;
    education: string;
    occupation: string;
    familyStatus: string;
  };
  psychographics: {
    valuesBeliefs: string;
    lifestylePreferences: string;
    painPoints: string;
    goalsAspirations: string;
    behavioralPatterns: string;
    technologyAdoption: string;
    communicationStyle: string;
  };
}

interface AIPersona {
  id: number;
  name: string;
  age: number;
  profilePicture: string;
  professionalRole: string;
  companyStage: string;
  location: string;
  yearsExperience: number;
  painPoints: string[];
  existingSolutions: string;
  dailyWorkflow: string;
  resourceConstraints: string;
  authorityLevel: string;
  budgetRange: string;
  decisionProcess: string;
  riskTolerance: string;
  communicationPreference: string;
  skepticismLevel: string;
  informationProcessing: string;
  trustFactors: string;
  localMarketAwareness: string;
  technologyAdoption: string;
  regulatorySensitivity: string;
  networkInfluence: string;
  successMetrics: string;
  implementationConcerns: string;
  timelineExpectations: string;
  integrationRequirements: string;
}

interface Question {
  id: number;
  text: string;
  category: 'problem' | 'solution' | 'behavioral';
}

interface PersonaAnswer {
  personaId: number;
  questionId: number;
  answer: string;
}

interface PersonaAnalysis {
  personaId: number;
  problemScore: number;
  solutionSatisfaction: number;
  willingnessToPay: string;
  interestLevel: number;
  mustHaveFeatures: string[];
  mainObjection: string;
  bestMessaging: string;
  salesApproach: string;
  dealBreaker: string;
}

interface OverallAnalysis {
  problemConsensus: number;
  solutionDemand: number;
  priceValidation: string;
  primaryTarget: string;
  coreMessage: string;
  keyFeatures: string[];
  fitScore: number;
  redFlags: string[];
  greenLights: string[];
  immediateAction: string;
  productChanges: string;
  furtherTesting: string;
}

interface MarketSegment {
  id: number;
  description: string;
  requiredServices: string[];
  keyChallenges: string[];
  decisionMakers: string[];
}

interface MarketSizeData {
  tam: {
    value: string;
    description: string;
  };
  sam: {
    value: string;
    description: string;
  };
  som: {
    value: string;
    description: string;
  };
}

interface BehaviorItem {
  id: number;
  text: string;
}

interface MarketBehaviorData {
  macro: {
    challenges: BehaviorItem[];
    drivers: BehaviorItem[];
    trends: BehaviorItem[];
  };
  micro: {
    challenges: BehaviorItem[];
    drivers: BehaviorItem[];
    trends: BehaviorItem[];
  };
}

interface Competitor {
  id: number;
  name: string;
  overview: {
    launchYear: string;
    funding: string;
    valuation: string;
    topInvestors: string;
    location: string;
    companyStage: string;
    companySize: string;
    operatingMarkets: string;
    mainModel: string;
  };
  productsServices: string;
  targetCustomers: string;
  valueProposition: string;
  missionVisionValues: string;
  revenueModel: string;
  tractionMilestones: string;
  competitivenessWeaknesses: string;
}

interface BusinessModelData {
  who: {
    demographic: string;
    geographic: string;
    psychographic: string;
    behavioral: string;
  };
  what: {
    offering: string;
    valuePropositions: string;
    competitiveAdvantages: string;
  };
  how: {
    resourcesCompetencies: string;
    keyActivities: string;
    partnersNetwork: string;
    channels: string;
  };
  why: {
    revenueStreams: string;
    unitEconomics: string;
    costStructure: string;
  };
}

interface StrategyDirectionData {
  missionVision: {
    mission: string;
    vision: string;
  };
  strategicObjectives: string[];
  strategyPhases: {
    id: number;
    title: string;
    justification: string;
  }[];
}

interface StrategyPhase {
  id: number;
  title: string;
  objectives: string[];
  strategyFocus: string;
  duration: string;
  keyActivities: string[];
  requiredResources: string[];
  kpis: string[];
}

interface StrategyRoadmapData {
  phases: StrategyPhase[];
}

const VentureBuilder: React.FC<VentureBuilderProps> = ({ onBack }) => {
  const [currentStage, setCurrentStage] = useState<VentureStage>('orientation');
  const [ventureType, setVentureType] = useState<VentureType>(null);
  const [activeIdeaSubStage, setActiveIdeaSubStage] = useState('market-targeting');
  const [activeValidationSubStage, setActiveValidationSubStage] = useState<ValidationSubStage>('target-audience');
  const [activeBusinessPlanSubStage, setActiveBusinessPlanSubStage] = useState<BusinessPlanSubStage>('market_assessment');
  const [activeBrandCreationSubStage, setActiveBrandCreationSubStage] = useState<BrandCreationSubStage>('logo_concept');
  const [activeProductCreationSubStage, setActiveProductCreationSubStage] = useState<ProductCreationSubStage>('ux');
  const [completedBusinessPlanSubStages, setCompletedBusinessPlanSubStages] = useState<string[]>([]);
  const [completedBrandCreationSubStages, setCompletedBrandCreationSubStages] = useState<BrandCreationSubStage[]>([]);
  const [completedProductCreationSubStages, setCompletedProductCreationSubStages] = useState<ProductCreationSubStage[]>([]);
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [capacityUsed, setCapacityUsed] = useState(0);
  const [uploadedDocuments, setUploadedDocuments] = useState<{id: number, name: string, type: string, size: string}[]>([]);
  const [targetMarket, setTargetMarket] = useState({
    region: 'MENA Region',
    industry: 'Fintech',
    subIndustry: 'Digital Payments',
    topics: 'Financial inclusion, Mobile payments, Cross-border transactions'
  });
  const [researchStarted, setResearchStarted] = useState(false);
  const [problems, setProblems] = useState<Problem[]>([
    {
      id: 1,
      description: 'Limited access to digital payment solutions for SMEs in MENA region',
      size: 35,
      impact: 'high',
      validation: [
        'Only 15% of SMEs in the region have access to digital payment infrastructure',
        'High setup costs and technical barriers prevent adoption',
        'Traditional banks focus primarily on large enterprises'
      ]
    },
    {
      id: 2,
      description: 'High cross-border transaction fees limiting regional e-commerce growth',
      size: 28,
      impact: 'medium',
      validation: [
        'Average cross-border transaction fee is 7.3% in MENA vs. 3.2% globally',
        'E-commerce businesses report 22% cart abandonment due to high fees',
        'Regulatory fragmentation across countries increases compliance costs'
      ]
    }
  ]);
  const [solutions, setSolutions] = useState<Solution[]>([
    {
      problemId: 1,
      description: 'A mobile-first digital payment platform specifically designed for SMEs in the MENA region, with simplified onboarding, low setup costs, and integration with popular e-commerce platforms.'
    },
    {
      problemId: 2,
      description: 'A cross-border payment network leveraging blockchain technology to reduce transaction fees by up to 70% while maintaining compliance with regional regulations.'
    }
  ]);
  const [elevatorPitch, setElevatorPitch] = useState(
    "PayMENA is a digital payment infrastructure designed specifically for SMEs across the MENA region, offering seamless integration, low fees, and simplified cross-border transactions. Our platform reduces payment processing costs by 60% while increasing transaction success rates by 25%, enabling regional businesses to compete effectively in the global digital economy."
  );
  const [businessModel, setBusinessModel] = useState<BusinessModel>({
    who: "Small to medium enterprises (SMEs) in the MENA region, particularly in UAE, Saudi Arabia, and Egypt, who struggle with digital payment integration and high cross-border transaction fees.",
    what: "An affordable, easy-to-integrate digital payment platform with simplified cross-border capabilities that reduces transaction costs by 60% and increases payment success rates by 25%.",
    how: "SaaS subscription model with tiered pricing based on transaction volume, plus a small percentage fee on cross-border transactions that's significantly lower than current market rates.",
    why: "The MENA digital payment market is growing at 22.1% CAGR, yet SMEs face significant barriers to adoption. By solving these pain points, we can capture a $2.1B serviceable obtainable market with limited direct competition."
  });
  
  // Validation stage state
  const [targetAudienceData, setTargetAudienceData] = useState<TargetAudienceData>({
    demographics: {
      ageRange: '25-45',
      gender: 'All Genders',
      location: 'Urban areas in UAE, Saudi Arabia, Egypt',
      incomeLevel: 'Middle Income',
      education: 'Bachelor\'s Degree',
      occupation: 'Small business owners, Finance professionals',
      familyStatus: 'Mixed Family Status'
    },
    psychographics: {
      valuesBeliefs: 'Values financial security, believes in technological progress',
      lifestylePreferences: 'Busy professional, mobile-first, values convenience',
      painPoints: 'Frustrated with high fees, complex processes, limited access to digital payment solutions',
      goalsAspirations: 'Grow business, increase efficiency, reduce operational costs',
      behavioralPatterns: 'Researches options thoroughly, seeks recommendations from peers',
      technologyAdoption: 'Early Majority',
      communicationStyle: 'Direct'
    }
  });
  
  const [aiPersonas, setAIPersonas] = useState<AIPersona[]>([
    {
      id: 1,
      name: 'Ahmed Al-Mansouri',
      age: 38,
      profilePicture: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150',
      professionalRole: 'CEO of E-commerce Startup',
      companyStage: 'Growth Stage (25 employees)',
      location: 'Dubai, UAE',
      yearsExperience: 12,
      painPoints: [
        'High transaction fees eating into margins',
        'Complex integration with existing systems',
        'Frequent payment failures with international customers'
      ],
      existingSolutions: 'Using a combination of local payment gateway and international processor, but dissatisfied with both',
      dailyWorkflow: 'Spends 2-3 hours weekly reconciling payment issues and managing customer complaints about failed transactions',
      resourceConstraints: 'Limited technical team, tight budget for financial services',
      authorityLevel: 'Final decision maker',
      budgetRange: 'Up to $5,000/month for the right solution',
      decisionProcess: 'Data-driven, consults with CTO and CFO',
      riskTolerance: 'Moderate',
      communicationPreference: 'Direct, values technical details and ROI calculations',
      skepticismLevel: 'Moderate - requires proof and references',
      informationProcessing: 'Prefers detailed documentation with clear metrics',
      trustFactors: 'Case studies, technical specifications, security certifications',
      localMarketAwareness: 'High - well-connected in UAE tech ecosystem',
      technologyAdoption: 'Early adopter',
      regulatorySensitivity: 'High - concerned about compliance with UAE regulations',
      networkInfluence: 'Trusts recommendations from other founders and industry events',
      successMetrics: 'Reduced transaction costs, higher success rates, faster settlements',
      implementationConcerns: 'Integration complexity and downtime during transition',
      timelineExpectations: 'Expects full implementation within 4-6 weeks',
      integrationRequirements: 'Must integrate with existing ERP and e-commerce platform'
    },
    {
      id: 2,
      name: 'Fatima Al-Zahra',
      age: 42,
      profilePicture: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150',
      professionalRole: 'CFO at Medium Enterprise',
      companyStage: 'Established (120 employees)',
      location: 'Riyadh, Saudi Arabia',
      yearsExperience: 15,
      painPoints: [
        'Cross-border payment delays affecting supplier relationships',
        'Lack of transparency in fee structure',
        'Poor reporting and reconciliation tools'
      ],
      existingSolutions: 'Traditional banking services with supplementary fintech tools',
      dailyWorkflow: 'Oversees finance team, reviews payment reports daily, manages banking relationships',
      resourceConstraints: 'Budget available but requires strong ROI justification',
      authorityLevel: 'Recommends to board for final approval',
      budgetRange: 'Up to $15,000/month for enterprise solution',
      decisionProcess: 'Highly analytical, requires formal evaluation process',
      riskTolerance: 'Conservative',
      communicationPreference: 'Formal, prefers scheduled meetings and structured presentations',
      skepticismLevel: 'High - requires extensive validation',
      informationProcessing: 'Detail-oriented, needs comprehensive analysis',
      trustFactors: 'Regulatory compliance, security measures, established track record',
      localMarketAwareness: 'High - deeply familiar with Saudi financial regulations',
      technologyAdoption: 'Late majority',
      regulatorySensitivity: 'Very high - must comply with Saudi Central Bank requirements',
      networkInfluence: 'Values recommendations from other CFOs and financial advisors',
      successMetrics: 'Cost savings, audit trail clarity, regulatory compliance',
      implementationConcerns: 'Security, compliance, and staff training',
      timelineExpectations: 'Expects phased implementation over 2-3 months',
      integrationRequirements: 'Must integrate with SAP and internal compliance systems'
    },
    {
      id: 3,
      name: 'Omar Nasser',
      age: 29,
      profilePicture: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150',
      professionalRole: 'Founder of Tech Startup',
      companyStage: 'Early Stage (8 employees)',
      location: 'Cairo, Egypt',
      yearsExperience: 5,
      painPoints: [
        'Limited access to international payment methods',
        'High fees for small transaction volumes',
        'Complex regulatory requirements for fintech integration'
      ],
      existingSolutions: 'Using consumer-grade payment solutions not designed for business',
      dailyWorkflow: 'Hands-on with all aspects of business including manually processing payments',
      resourceConstraints: 'Very limited budget, no dedicated finance team',
      authorityLevel: 'Sole decision maker',
      budgetRange: 'Up to $500/month',
      decisionProcess: 'Quick, intuitive, values simplicity',
      riskTolerance: 'High',
      communicationPreference: 'Informal, direct, prefers quick calls or messages',
      skepticismLevel: 'Low - willing to try new solutions',
      informationProcessing: 'Big picture, visually oriented',
      trustFactors: 'Ease of use, startup-friendly terms, quick setup',
      localMarketAwareness: 'Moderate - focused on Egyptian startup ecosystem',
      technologyAdoption: 'Early adopter',
      regulatorySensitivity: 'Moderate - aware but not expert in regulations',
      networkInfluence: 'Influenced by tech community and startup events',
      successMetrics: 'Ease of use, quick setup, scalability',
      implementationConcerns: 'Time investment, ease of use for team',
      timelineExpectations: 'Expects to be up and running within days',
      integrationRequirements: 'Simple API, developer-friendly documentation'
    }
  ]);
  
  const [validationQuestions, setValidationQuestions] = useState<Question[]>([
    {
      id: 1,
      text: 'Describe your current process for handling digital payments.',
      category: 'problem'
    },
    {
      id: 2,
      text: 'What\'s the most frustrating part of processing cross-border transactions?',
      category: 'problem'
    },
    {
      id: 3,
      text: 'How much time do you spend on payment reconciliation weekly?',
      category: 'problem'
    },
    {
      id: 4,
      text: 'What solutions have you tried before? What didn\'t work?',
      category: 'problem'
    },
    {
      id: 5,
      text: 'How would you solve the high transaction fee problem today?',
      category: 'solution'
    },
    {
      id: 6,
      text: 'What would make our payment solution irresistible to you?',
      category: 'solution'
    },
    {
      id: 7,
      text: 'How much would you pay for a solution that reduces fees by 60%?',
      category: 'solution'
    },
    {
      id: 8,
      text: 'Walk me through your last experience with implementing a new payment system.',
      category: 'behavioral'
    },
    {
      id: 9,
      text: 'Who influences your decisions when adopting new financial technology?',
      category: 'behavioral'
    },
    {
      id: 10,
      text: 'How do you typically discover new business solutions?',
      category: 'behavioral'
    }
  ]);
  
  const [personaAnswers, setPersonaAnswers] = useState<PersonaAnswer[]>([]);
  const [personaAnalyses, setPersonaAnalyses] = useState<PersonaAnalysis[]>([]);
  const [overallAnalysis, setOverallAnalysis] = useState<OverallAnalysis | null>(null);
  const [simulationComplete, setSimulationComplete] = useState(false);
  
  // Business Plan - Market Assessment state
  const [marketSegments, setMarketSegments] = useState<MarketSegment[]>([
    {
      id: 1,
      description: 'Small to Medium Enterprises (SMEs) in MENA',
      requiredServices: ['Digital payment processing', 'Cross-border transactions', 'Payment reconciliation'],
      keyChallenges: ['Limited access to digital payment infrastructure', 'High transaction fees', 'Complex integration requirements'],
      decisionMakers: ['Business Owner', 'Finance Manager', 'IT Manager']
    },
    {
      id: 2,
      description: 'E-commerce Businesses in GCC Countries',
      requiredServices: ['Online payment gateway', 'Multi-currency support', 'Fraud prevention'],
      keyChallenges: ['Cart abandonment due to payment issues', 'Cross-border payment complexity', 'Customer trust in online payments'],
      decisionMakers: ['E-commerce Director', 'CTO', 'Finance Director']
    }
  ]);
  
  const [marketSizeData, setMarketSizeData] = useState<MarketSizeData>({
    tam: {
      value: '$45.2B',
      description: 'Total digital payments market in MENA region, including all business and consumer transactions processed through digital channels.'
    },
    sam: {
      value: '$12.8B',
      description: 'Serviceable portion of the market that can be reached with our business model, focusing on SMEs and e-commerce businesses in key MENA countries.'
    },
    som: {
      value: '$2.1B',
      description: 'Realistic market share that can be captured within 5 years, considering competition, go-to-market strategy, and resource constraints.'
    }
  });
  
  const [marketBehaviorData, setMarketBehaviorData] = useState<MarketBehaviorData>({
    macro: {
      challenges: [
        { id: 1, text: 'Regulatory fragmentation across MENA countries' },
        { id: 2, text: 'Limited banking infrastructure in some regions' },
        { id: 3, text: 'Economic volatility and currency fluctuations' }
      ],
      drivers: [
        { id: 1, text: 'Government digital transformation initiatives' },
        { id: 2, text: 'Increasing smartphone penetration (75%+ in key markets)' },
        { id: 3, text: 'Growing e-commerce sector (25% YoY growth)' }
      ],
      trends: [
        { id: 1, text: 'Shift towards cashless economy accelerated by COVID-19' },
        { id: 2, text: 'Increasing focus on financial inclusion' },
        { id: 3, text: 'Rise of open banking and API-driven financial services' }
      ]
    },
    micro: {
      challenges: [
        { id: 1, text: 'High customer acquisition costs for payment providers' },
        { id: 2, text: 'Technical integration complexity for merchants' },
        { id: 3, text: 'Trust and security concerns among users' }
      ],
      drivers: [
        { id: 1, text: 'Demand for lower transaction fees' },
        { id: 2, text: 'Need for faster settlement times' },
        { id: 3, text: 'Desire for simplified cross-border payments' }
      ],
      trends: [
        { id: 1, text: 'Increasing adoption of mobile wallets' },
        { id: 2, text: 'Growing preference for embedded financial services' },
        { id: 3, text: 'Rising interest in alternative payment methods' }
      ]
    }
  });
  
  const [competitors, setCompetitors] = useState<Competitor[]>([
    {
      id: 1,
      name: 'PayTabs',
      overview: {
        launchYear: '2014',
        funding: '$20M',
        valuation: 'Undisclosed',
        topInvestors: 'Saudi Aramco Entrepreneurship Ventures',
        location: 'Bahrain',
        companyStage: 'Growth',
        companySize: '100-250 employees',
        operatingMarkets: 'GCC, Egypt, Jordan',
        mainModel: 'B2B Payment Gateway'
      },
      productsServices: 'Payment gateway, payment processing, invoicing, virtual terminals, QR code payments',
      targetCustomers: 'SMEs, e-commerce businesses, and enterprises across MENA',
      valueProposition: 'Comprehensive payment solutions with regional expertise and compliance',
      missionVisionValues: 'To empower businesses with seamless payment experiences across the MENA region',
      revenueModel: 'Transaction fees (2.5-3%), monthly subscription fees, setup fees',
      tractionMilestones: 'Processing $3B+ in transactions annually, 50,000+ merchant accounts',
      competitivenessWeaknesses: 'Strengths: Regional expertise, regulatory compliance. Weaknesses: Higher fees, limited cross-border optimization, complex integration'
    },
    {
      id: 2,
      name: 'Telr',
      overview: {
        launchYear: '2013',
        funding: '$5M',
        valuation: 'Undisclosed',
        topInvestors: 'Hatcher, iMENA Group',
        location: 'Dubai, UAE',
        companyStage: 'Growth',
        companySize: '50-100 employees',
        operatingMarkets: 'UAE, Saudi Arabia, India',
        mainModel: 'Payment Gateway'
      },
      productsServices: 'Online payment gateway, anti-fraud tools, merchant services, payment links',
      targetCustomers: 'SMEs and startups in e-commerce and retail',
      valueProposition: 'Secure, multi-currency payment processing with anti-fraud protection',
      missionVisionValues: 'To create a borderless payment ecosystem for emerging markets',
      revenueModel: 'Transaction fees (2.5%), monthly fees, integration services',
      tractionMilestones: '5,000+ merchants, expanded to Saudi Arabia in 2019',
      competitivenessWeaknesses: 'Strengths: Multi-currency support, security features. Weaknesses: Customer service issues, complex setup process, limited regional coverage'
    }
  ]);
  
  // Business Model state
  const [businessModelData, setBusinessModelData] = useState<BusinessModelData>({
    who: {
      demographic: "B2C: Small to medium enterprises (SMEs) in the MENA region, particularly in UAE, Saudi Arabia, and Egypt.\nB2B: Companies with 10-250 employees, annual revenue of $500K-$50M, primarily in e-commerce, retail, and services sectors.",
      geographic: "Primary: UAE (Dubai, Abu Dhabi), Saudi Arabia (Riyadh, Jeddah), Egypt (Cairo)\nSecondary: Qatar, Kuwait, Bahrain, Jordan",
      psychographic: "B2C: Tech-savvy business owners who value efficiency and cost-effectiveness.\nB2B: Growth-oriented companies seeking to optimize operations and expand regionally.",
      behavioral: "Purchasing behavior: Research-driven, value-conscious\nBuying stage: Evaluating digital payment solutions\nChannel preference: Mobile and web platforms\nPayment preference: Monthly subscription with usage-based components"
    },
    what: {
      offering: "- Digital payment processing platform\n- Cross-border payment optimization\n- Payment analytics dashboard\n- Integration APIs for e-commerce platforms\n- Fraud detection and prevention services",
      valuePropositions: "- Functional: Seamless integration, high reliability (99.9% uptime), simplified cross-border transactions\n- Financial: 60% lower fees than competitors, transparent pricing\n- Social: Supporting regional business growth and financial inclusion\n- Personal: Peace of mind with secure transactions and 24/7 support",
      competitiveAdvantages: "- Price: Significantly lower transaction fees (60% less than market average)\n- Quality: Higher transaction success rates (25% improvement)\n- Convenience: 5-minute setup process vs. industry average of 3-5 days"
    },
    how: {
      resourcesCompetencies: "- Physical: Cloud infrastructure across MENA region\n- Intellectual: Proprietary payment routing algorithms, regional compliance expertise\n- Human: Engineering team with fintech experience, regional regulatory experts\n- Technological: Blockchain-based settlement system, AI fraud detection\n- Financial: Initial funding for 18-month runway",
      keyActivities: "- Operations: 24/7 payment processing, fraud monitoring\n- Development: Platform enhancement, API maintenance\n- Marketing: Digital acquisition, partnership development\n- Sales: Direct and channel sales to SMEs\n- Distribution: Digital onboarding and self-service",
      partnersNetwork: "- Organization: Strategic partnerships with regional banks\n- Operations: Cloud service providers, compliance consultants\n- Marketing: E-commerce platforms, business associations\n- Development: Payment networks, security auditors",
      channels: "- Service delivery: Web platform, mobile app, API integrations\n- Payment: Direct bank transfers, credit cards\n- Communication: In-app chat, email, phone support"
    },
    why: {
      revenueStreams: "- Subscription: Tiered monthly plans based on business size\n- Transaction fees: Small percentage on processed payments\n- Value-added services: Advanced analytics, custom integrations\n- Volume discounts: Incentives for high-volume customers",
      unitEconomics: "- Customer Acquisition Cost (CAC): $250\n- Customer Lifetime Value (CLTV): $2,500\n- CLTV:CAC Ratio: 10:1\n- Gross Margin: 75%\n- Payback Period: 6 months",
      costStructure: "- Fixed costs: Cloud infrastructure, compliance, core team\n- Variable costs: Payment processing fees, customer support\n- Economies of scale: Decreasing cost per transaction with volume"
    }
  });
  
  // Strategy Roadmap state
  const [strategyDirectionData, setStrategyDirectionData] = useState<StrategyDirectionData>({
    missionVision: {
      mission: "To empower MENA businesses with accessible, affordable, and reliable digital payment solutions that accelerate their growth and regional expansion.",
      vision: "To become the leading payment infrastructure for SMEs across the MENA region, processing over $10B in annual transactions by 2030."
    },
    strategicObjectives: [
      "Achieve 10,000 active merchants within 18 months of launch",
      "Process $500M in annual transaction volume by end of year 2",
      "Expand to all GCC countries within 24 months",
      "Maintain transaction success rate above 99.5%",
      "Achieve 40% market share in SME digital payments in core markets"
    ],
    strategyPhases: [
      {
        id: 1,
        title: "Foundation Phase (Months 1-6)",
        justification: "Establish core product and initial market presence in UAE to validate solution and gain early traction."
      },
      {
        id: 2,
        title: "Expansion Phase (Months 7-18)",
        justification: "Expand to Saudi Arabia and Egypt, enhance product features, and scale customer acquisition."
      },
      {
        id: 3,
        title: "Growth Phase (Months 19-36)",
        justification: "Expand to remaining GCC countries, introduce new revenue streams, and optimize unit economics."
      }
    ]
  });
  
  const [strategyRoadmapData, setStrategyRoadmapData] = useState<StrategyRoadmapData>({
    phases: [
      {
        id: 1,
        title: "Foundation Phase (Months 1-6)",
        objectives: [
          "Launch MVP in UAE",
          "Acquire 500 active merchants",
          "Process $10M in transactions",
          "Achieve product-market fit"
        ],
        strategyFocus: "Product development and initial market validation",
        duration: "6 months",
        keyActivities: [
          "Develop and launch core payment platform",
          "Establish banking partnerships in UAE",
          "Implement initial marketing and sales strategy",
          "Set up customer support infrastructure"
        ],
        requiredResources: [
          "Core engineering team",
          "Initial marketing budget ($100K)",
          "Sales team (2 people)",
          "Regulatory compliance consultant"
        ],
        kpis: [
          "Monthly active merchants",
          "Transaction volume",
          "Transaction success rate",
          "Customer acquisition cost"
        ]
      },
      {
        id: 2,
        title: "Expansion Phase (Months 7-18)",
        objectives: [
          "Expand to Saudi Arabia and Egypt",
          "Reach 5,000 active merchants",
          "Process $200M in transactions",
          "Launch cross-border payment features"
        ],
        strategyFocus: "Geographic expansion and feature enhancement",
        duration: "12 months",
        keyActivities: [
          "Establish local entities in Saudi Arabia and Egypt",
          "Develop and launch cross-border payment features",
          "Scale marketing and sales operations",
          "Implement localized customer support"
        ],
        requiredResources: [
          "Expanded engineering team",
          "Marketing budget ($500K)",
          "Sales team (10 people)",
          "Local regulatory experts"
        ],
        kpis: [
          "Market share by country",
          "Cross-border transaction volume",
          "Customer retention rate",
          "Unit economics (CAC, LTV, payback period)"
        ]
      },
      {
        id: 3,
        title: "Growth Phase (Months 19-36)",
        objectives: [
          "Expand to remaining GCC countries",
          "Reach 15,000 active merchants",
          "Process $1B in transactions",
          "Launch value-added services"
        ],
        strategyFocus: "Scaling operations and optimizing profitability",
        duration: "18 months",
        keyActivities: [
          "Expand to Qatar, Kuwait, Bahrain, and Oman",
          "Develop and launch advanced analytics and financial management tools",
          "Implement strategic partnership program",
          "Optimize operational efficiency"
        ],
        requiredResources: [
          "Full engineering and product teams",
          "Marketing budget ($1M)",
          "Sales and partnership team (25 people)",
          "Data science and AI specialists"
        ],
        kpis: [
          "Revenue growth rate",
          "Profit margin",
          "Market penetration by country",
          "Customer satisfaction score"
        ]
      }
    ]
  });

  // Business Plan - Tactical Plan state
  const [brandData, setBrandData] = useState<any>({
    personality: {
      mission: 'To simplify and accelerate financial transactions across the MENA region through innovative technology solutions.',
      vision: 'To become the leading digital payment infrastructure provider in the MENA region, enabling seamless financial interactions for businesses and consumers.',
      essence: 'Seamless financial connectivity',
      purpose: 'Empowering businesses and individuals with accessible, efficient payment solutions',
      promise: 'Fast, secure, and reliable payment processing',
      targetAudience: 'SMEs and digital-savvy consumers in MENA region',
      valuePropositions: 'Lower fees, faster processing, better user experience, regional expertise',
      positioning: 'The most reliable and cost-effective payment solution designed specifically for MENA businesses',
      persona: {
        type: 'Enabler',
        demographic: 'Modern, tech-savvy, professional',
        attributes: 'Reliable, efficient, innovative, trustworthy',
        skills: 'Problem-solving, technical expertise, regional knowledge',
        lookalike: 'A trusted financial advisor with technical expertise'
      }
    },
    behavior: {
      userExperience: 'Intuitive, frictionless, responsive, accessible across devices',
      visualExperience: 'Clean, professional, modern, with regional cultural elements'
    },
    communication: {
      messages: {
        slogan: 'Payments Made Simple',
        tagline: 'Connecting MENA\'s Digital Economy',
        keyMessages: 'Regional expertise, Lower fees, Faster processing, Enterprise-grade security',
        keywords: 'payments, fintech, MENA, secure, fast, reliable, cross-border'
      },
      guidelines: {
        channels: 'Website, mobile app, social media, industry events, direct sales',
        contentTypes: 'Case studies, how-to guides, industry reports, video tutorials',
        language: 'Professional but approachable, clear, jargon-free when possible',
        style: 'Confident, knowledgeable, helpful, solution-oriented',
        toneOfVoice: 'Authoritative yet friendly, straightforward, reassuring',
        communityManagement: 'Responsive, helpful, transparent, educational'
      }
    }
  });
  const [productData, setProductData] = useState<any>({
    specifications: {
      functionalRequirements: 'Process payments across multiple channels\nSupport multiple currencies\nReal-time transaction monitoring\nFraud detection and prevention\nUser management and permissions',
      nonFunctionalRequirements: '99.99% uptime\nSub-second transaction processing\nPCI DSS compliance\nEnd-to-end encryption\nScalable to handle 10,000+ transactions per second',
      technicalSpecifications: 'RESTful API architecture\nMicroservices backend\nReact frontend\nPostgreSQL and Redis databases\nKubernetes container orchestration',
      featurePrioritization: 'Must-have: Payment processing, security features, basic reporting\nNice-to-have: Advanced analytics, custom integrations, white-labeling',
      integrationRequirements: 'Banking APIs\nE-commerce platforms\nAccounting software\nERP systems\nMobile wallets'
    },
    roadmap: {
      versionPlanning: 'V1: Core payment processing\nV2: Cross-border capabilities\nV3: Advanced analytics and reporting',
      featureReleaseTimeline: 'Q1: Basic payment processing\nQ2: Additional payment methods\nQ3: Enhanced security features\nQ4: Reporting dashboard',
      marketFeedbackIntegration: 'Monthly user feedback sessions\nQuarterly feature prioritization based on customer requests\nBeta testing program for key customers',
      competitiveResponsePlan: 'Quarterly competitive analysis\nRapid response team for market changes\nStrategic partnerships to address competitive threats',
      longTermVision: 'Expand to full financial services platform\nIntegrate with emerging technologies (blockchain, AI)\nBecome the financial operating system for MENA businesses'
    },
    developmentMethodology: {
      projectManagementFramework: 'Agile/Scrum with 2-week sprints\nKanban for maintenance and support\nQuarterly roadmap planning',
      developmentPhases: 'Design > Develop > Test > Deploy > Monitor\nContinuous integration and deployment\nAutomated testing at all levels',
      teamStructure: 'Cross-functional teams (frontend, backend, QA, DevOps)\nProduct owner and scrum master roles\nDesignated technical leads',
      timelineScheduling: 'Major releases quarterly\nMinor releases bi-weekly\nHotfixes as needed\nMaintenance windows during low-traffic periods',
      riskManagement: 'Pre-mortem analysis for major features\nWeekly risk assessment\nContingency planning for critical systems\nRedundancy for key infrastructure'
    },
    technologyStack: {
      frontendTechnologies: 'React.js\nTypeScript\nTailwind CSS\nRedux for state management\nJest for testing',
      backendSystems: 'Node.js microservices\nExpress.js\nPostgreSQL\nRedis for caching\nRabbitMQ for messaging',
      infrastructureRequirements: 'AWS cloud infrastructure\nKubernetes for container orchestration\nTerraform for infrastructure as code\nMulti-region deployment for redundancy',
      thirdPartyIntegrations: 'Banking APIs (local and international)\nKYC/AML services\nFraud detection systems\nAnalytics tools\nCRM systems',
      securityArchitecture: 'End-to-end encryption\nRole-based access control\nMulti-factor authentication\nRegular security audits\nPenetration testing'
    }
  });
  const [commercialServices, setCommercialServices] = useState<any[]>([
    {
      id: 1,
      description: 'Payment Processing',
      keyFeatures: 'Multiple payment methods, instant confirmation, fraud protection',
      targetAudience: 'E-commerce businesses, retail, service providers',
      keyStakeholders: 'Business owners, finance departments, IT teams',
      uniqueSellingPoints: 'Lower fees, faster settlement, local currency support',
      revenueStreams: 'Transaction fees, monthly minimums',
      pricing: '1.5% + $0.30 per transaction',
      pricingBenchmarks: 'Competitors charge 2.5-3.5% per transaction',
      paymentPlans: 'Pay-as-you-go, volume discounts available',
      unitEconomics: 'Cost per transaction: $0.15, Gross margin: 75%'
    },
    {
      id: 2,
      description: 'Cross-Border Payments',
      keyFeatures: 'Multi-currency support, competitive exchange rates, compliance handling',
      targetAudience: 'International businesses, exporters/importers',
      keyStakeholders: 'CFOs, treasury departments, international sales teams',
      uniqueSellingPoints: 'Same-day settlement, transparent fees, local regulatory expertise',
      revenueStreams: 'Transaction fees, FX markup',
      pricing: '1.8% + currency exchange markup of 0.5%',
      pricingBenchmarks: 'Banks charge 3-5% + higher exchange markups',
      paymentPlans: 'Volume-based pricing tiers',
      unitEconomics: 'Cost per transaction: $0.25, Gross margin: 70%'
    }
  ]);
  const [businessFunctions, setBusinessFunctions] = useState<any[]>([
    {
      id: 1,
      name: 'Product Development',
      workflowStages: [
        {
          id: 1,
          name: 'Planning & Design',
          teamStructure: 'Product Manager, UX Designer, Technical Architect'
        },
        {
          id: 2,
          name: 'Development',
          teamStructure: 'Frontend Developers, Backend Developers, QA Engineers'
        },
        {
          id: 3,
          name: 'Testing & Deployment',
          teamStructure: 'QA Engineers, DevOps Engineers, Security Specialists'
        }
      ]
    },
    {
      id: 2,
      name: 'Sales & Marketing',
      workflowStages: [
        {
          id: 4,
          name: 'Lead Generation',
          teamStructure: 'Digital Marketing Specialists, Content Creators'
        },
        {
          id: 5,
          name: 'Sales Process',
          teamStructure: 'Sales Representatives, Sales Engineers, Account Executives'
        },
        {
          id: 6,
          name: 'Customer Onboarding',
          teamStructure: 'Customer Success Managers, Technical Support Specialists'
        }
      ]
    }
  ]);
  const [marketingData, setMarketingData] = useState<any>({
    awareness: '- Content marketing (industry reports, blog posts)\n- SEO optimization\n- Industry events and conferences\n- Strategic partnerships\n- PR campaigns in regional business media',
    acquisition: '- Targeted digital advertising\n- Account-based marketing for enterprise clients\n- Partner referral programs\n- Free trials and demos\n- Webinars and educational content',
    activation: '- Streamlined onboarding process\n- Interactive product tours\n- Dedicated onboarding specialists\n- Quick-start integration guides\n- First transaction incentives',
    retention: '- Regular product updates and improvements\n- Proactive customer success management\n- Loyalty programs and volume discounts\n- Educational resources and best practices\n- Community building initiatives',
    reactivation: '- Win-back campaigns for dormant accounts\n- New feature announcements\n- Special offers for returning customers\n- Personalized outreach from account managers\n- Feedback collection and implementation',
    referral: '- Customer referral incentives\n- Partner commission structure\n- Case study and testimonial program\n- Co-marketing opportunities\n- Integration marketplace',
    revenue: '- Upselling additional services\n- Cross-selling complementary products\n- Volume-based pricing tiers\n- Premium feature packages\n- Strategic price optimization'
  });
  const [legalData, setLegalData] = useState<any>({
    numberOfEntities: 'Three entities: Holding company, operating company, and technology licensing entity',
    typeOfEntity: 'Holding company: LLC in UAE\nOperating company: LLC in target markets\nTechnology entity: Free Zone company in DIFC',
    jurisdictionAnalysis: 'UAE: Favorable for holding structure due to tax treaties and stability\nDIFC: Strong IP protection and legal framework for technology\nLocal entities: Required for regulatory compliance in each market',
    legalCompliance: 'Payment processing licenses in each operating market\nData protection compliance (GDPR-equivalent)\nAML/KYC compliance framework\nCentral bank regulations\nConsumer protection laws',
    protectionSecurity: 'IP protection through patents and trademarks\nTrade secret protection through NDAs\nCybersecurity insurance\nRegular compliance audits\nData breach response plan',
    requiredAgreements: 'Customer service agreements\nPartner agreements\nVendor contracts\nEmployee contracts and IP assignments\nInvestor agreements\nPrivacy policies and terms of service'
  });

  // Business Plan - Financial Plan state
  const [revenueStreams, setRevenueStreams] = useState<any[]>([
    {
      id: 1,
      name: 'Transaction Fees',
      description: 'Percentage-based fee on each payment processed through our platform',
      pricing: '1.5% + $0.30 per transaction',
      pricingModel: 'Variable based on transaction volume and value',
      pricingTiers: 'Standard: 1.5% + $0.30\nHigh Volume (>$100K/mo): 1.2% + $0.25\nEnterprise (>$1M/mo): Custom pricing',
      billingFrequency: 'Monthly, deducted from processed payments',
      discountStrategy: 'Volume-based discounts, new market entry promotions'
    },
    {
      id: 2,
      name: 'Subscription Fees',
      description: 'Monthly or annual fee for access to premium features and services',
      pricing: '$49-$499 per month based on plan',
      pricingModel: 'Tiered subscription model',
      pricingTiers: 'Basic: $49/mo\nProfessional: $199/mo\nEnterprise: $499/mo',
      billingFrequency: 'Monthly or annual (15% discount for annual)',
      discountStrategy: 'Annual payment discount, multi-user discounts'
    }
  ]);
  const [expensesData, setExpensesData] = useState<any>({
    directCosts: '- Payment processing fees: 0.3-0.5% per transaction\n- Banking partner fees: $0.10 per transaction\n- Cloud infrastructure: $15K-$50K per month based on volume\n- Third-party services (KYC, fraud detection): $5K-$15K per month\n- Data storage and transfer: $2K-$8K per month',
    operatingExpenses: '- Salaries and benefits: $80K-$250K per month\n- Office space: $8K-$20K per month\n- Professional services (legal, accounting): $5K-$15K per month\n- Travel and entertainment: $3K-$10K per month\n- Software licenses: $2K-$5K per month\n- Insurance: $1K-$3K per month',
    marketingSalesExpenses: '- Digital advertising: $10K-$50K per month\n- Content marketing: $5K-$15K per month\n- Events and conferences: $10K-$30K per quarter\n- Sales commissions: 10% of first-year revenue\n- Partner referral fees: 15-20% of first-year revenue\n- PR and communications: $3K-$8K per month'
  });
  const [revenueBuildUpData, setRevenueBuildUpData] = useState<any>({
    primaryForecastingLogic: 'Customer-Centric Logic',
    forecastingLogicFramework: {
      primaryDriver: 'Number of active merchants and their transaction volume',
      conversionPath: 'Marketing reach → Qualified leads → Sales conversions → Active merchants → Transaction volume → Revenue',
      multiplicationFactors: 'Average transaction value, transaction frequency, take rate percentage',
      constraints: 'Market size, sales team capacity, technical onboarding capacity, regulatory approvals'
    },
    requiredElements: {
      primaryDriverInputs: 'Target market size, marketing reach, conversion rates, sales cycle length',
      conversionBehavioralInputs: 'Lead-to-customer conversion rate, customer activation rate, average transaction volume per merchant',
      financialValueInputs: 'Average transaction value, take rate percentage, subscription tier distribution',
      growthScalingInputs: 'Month-over-month growth rate, merchant retention rate, transaction volume growth per merchant',
      externalMarketInputs: 'Market growth rate, seasonality factors, competitive pressure on pricing'
    }
  });
  const [financialAnalysisData, setFinancialAnalysisData] = useState<any>({
    profitLoss: 'Year 1:\n- Revenue: $1.2M\n- COGS: $300K\n- Gross Profit: $900K\n- Operating Expenses: $1.5M\n- EBITDA: -$600K\n\nYear 2:\n- Revenue: $4.5M\n- COGS: $900K\n- Gross Profit: $3.6M\n- Operating Expenses: $2.5M\n- EBITDA: $1.1M\n\nYear 3:\n- Revenue: $12M\n- COGS: $2.2M\n- Gross Profit: $9.8M\n- Operating Expenses: $4.5M\n- EBITDA: $5.3M',
    cashflowAnalysis: 'Year 1:\n- Starting Cash: $2M (from seed funding)\n- Operating Cash Flow: -$550K\n- Investing Cash Flow: -$250K\n- Financing Cash Flow: $0\n- Net Cash Flow: -$800K\n- Ending Cash: $1.2M\n\nYear 2:\n- Starting Cash: $1.2M\n- Operating Cash Flow: $900K\n- Investing Cash Flow: -$400K\n- Financing Cash Flow: $5M (Series A)\n- Net Cash Flow: $5.5M\n- Ending Cash: $6.7M',
    capitalRequirements: 'Seed Round: $2M\n- Product development: $800K\n- Initial team: $600K\n- Marketing & sales: $400K\n- Operations & legal: $200K\n\nSeries A: $5M (Month 18)\n- Team expansion: $2M\n- Market expansion: $1.5M\n- Product enhancement: $1M\n- Working capital: $500K',
    breakEvenAnalysis: 'Break-even Point: Month 22\n- Monthly fixed costs at break-even: $210K\n- Required monthly transaction volume: $15M\n- Required number of active merchants: 350\n\nSensitivity Analysis:\n- 10% decrease in take rate delays break-even by 3 months\n- 20% increase in customer acquisition cost delays break-even by 2 months\n- 15% increase in merchant acquisition rate accelerates break-even by 2 months'
  });
  const [financialControlData, setFinancialControlData] = useState<any>({
    budgetingPlanning: '- Annual budget development (Q4 for following year)\n- Monthly budget reviews with department heads\n- Quarterly budget revisions based on performance\n- Rolling 18-month forecast updated quarterly\n- Capital expenditure requests reviewed monthly',
    financialReporting: '- Daily transaction and revenue dashboard\n- Weekly cash position report\n- Monthly financial statements (P&L, Balance Sheet, Cash Flow)\n- Quarterly board reporting package\n- Annual audited financial statements',
    costManagement: '- Department-level budget ownership\n- Approval thresholds ($1K manager, $10K director, $50K C-level)\n- Monthly variance analysis and explanation\n- Quarterly cost optimization reviews\n- Annual zero-based budgeting exercise',
    cashManagement: '- Weekly cash flow forecasting\n- Minimum cash reserve policy (6 months of operating expenses)\n- Accounts receivable aging review (weekly)\n- Accounts payable optimization\n- Excess cash investment policy',
    riskManagement: '- Quarterly risk assessment\n- Currency hedging for cross-border operations\n- Fraud loss monitoring and thresholds\n- Insurance coverage review (semi-annual)\n- Business continuity planning',
    performanceMonitoring: '- Monthly KPI dashboard review\n- Quarterly business review with all departments\n- Semi-annual strategic plan review\n- Annual performance against industry benchmarks\n- Monthly investor updates'
  });

  // Brand Creation State
  const [logoConceptData, setLogoConceptData] = useState({
    visualStyle: 'Minimalist',
    keySymbolism: 'Digital payment, security, speed, connectivity',
    emotionalFeeling: 'Trust, innovation, reliability',
    logoTypePreference: 'Combination'
  });
  const [logoDesignData, setLogoDesignData] = useState({
    logoType: 'Modern wordmark with abstract symbol representing digital transactions',
    logoIcon: 'Stylized abstract shape suggesting connectivity and secure transactions',
    logoMeasurements: 'Clear space equal to height of logo on all sides, proportional scaling only',
    logoVariations: [
      { id: 1, name: 'Primary (Full Color)', description: 'For use on white or light backgrounds', imageUrl: '' },
      { id: 2, name: 'Reversed', description: 'For use on dark backgrounds', imageUrl: '' },
      { id: 3, name: 'Monochrome', description: 'For single-color applications', imageUrl: '' }
    ],
    logoMinimumSize: 'Digital: 40px height, Print: 10mm height',
    logoPlacement: 'Top left for digital interfaces, centered for marketing materials',
    logoMisuses: [
      'Do not stretch or distort',
      'Do not change colors',
      'Do not rotate',
      'Do not add effects',
      'Do not place on busy backgrounds'
    ]
  });
  const [colorPaletteData, setColorPaletteData] = useState({
    colors: [
      { id: 1, name: 'Primary Blue', hex: '#0077B5', usage: 'Main brand color, buttons, key UI elements' },
      { id: 2, name: 'Secondary Teal', hex: '#00A0B0', usage: 'Accents, secondary buttons, highlights' },
      { id: 3, name: 'Dark Blue', hex: '#003B5C', usage: 'Text, headers, footers' },
      { id: 4, name: 'Light Gray', hex: '#F5F7FA', usage: 'Backgrounds, cards, containers' },
      { id: 5, name: 'Success Green', hex: '#28A745', usage: 'Success states, confirmations' },
      { id: 6, name: 'Alert Red', hex: '#DC3545', usage: 'Errors, alerts, warnings' }
    ]
  });
  const [typographyData, setTypographyData] = useState({
    primaryTypeface: {
      fontFamily: 'Roboto',
      availableWeights: 'Regular (400), Medium (500), Bold (700)',
      usageContext: 'Primary typeface for all UI elements, body text, and headings'
    },
    secondaryTypeface: {
      fontFamily: 'Montserrat',
      availableWeights: 'Regular (400), SemiBold (600), Bold (700)',
      usageContext: 'Used for headlines, feature callouts, and special text elements'
    },
    typographyHierarchy: {
      h1: 'Montserrat Bold, 32px, #003B5C',
      h2: 'Montserrat SemiBold, 24px, #003B5C',
      h3: 'Montserrat SemiBold, 18px, #003B5C',
      bodyText: 'Roboto Regular, 16px, #333333',
      caption: 'Roboto Regular, 14px, #666666',
      otherSpecifications: 'Line height: 1.5 for body text, 1.2 for headings'
    }
  });
  const [visualStylesData, setVisualStylesData] = useState({
    designElements: {
      shapes: 'Rounded rectangles, circles, and subtle organic shapes with soft edges',
      iconStyle: 'Simple, outlined icons with consistent stroke width and rounded corners',
      photographyStyle: 'Clean, professional photography with natural lighting and authentic scenarios',
      illustrationStyle: 'Flat design with subtle gradients and consistent color palette',
      graphicElements: 'Abstract patterns based on connectivity motifs, subtle grid backgrounds'
    },
    uiElements: {
      buttonStyles: 'Rounded corners (8px radius), consistent padding (16px horizontal, 12px vertical), clear hover states',
      cardStyles: 'White background, subtle shadow (0 2px 8px rgba(0,0,0,0.1)), 16px border radius, 24px padding',
      borderTreatments: 'Subtle, light borders (1px, #E0E0E0) or borderless with shadow definition',
      shadowUsage: 'Subtle elevation shadows, 3 levels of depth for different UI elements',
      animationPreferences: 'Subtle, quick transitions (150-200ms), ease-in-out timing function, minimal motion'
    }
  });
  const [brandApplicationsData, setBrandApplicationsData] = useState({
    digitalApplications: {
      websiteElements: 'Header, footer, buttons, forms, cards, navigation, hero sections, feature sections',
      mobileAppAssets: 'App icon, splash screen, navigation elements, buttons, cards, tab bars',
      socialMediaTemplates: 'Profile images, cover photos, post templates, story templates',
      emailTemplates: 'Header, footer, buttons, content blocks, responsive layouts',
      digitalAdvertising: 'Banner ads, social media ads, search ads, retargeting ads',
      platformInterface: 'Dashboard, settings, profile, navigation, modals, notifications'
    },
    printApplications: {
      businessCards: 'Standard size (85x55mm), double-sided, contact information layout',
      letterheads: 'A4 size, header with logo, footer with contact information',
      brochures: 'Tri-fold, bi-fold options with consistent grid layout',
      presentationTemplates: 'Title slides, content slides, data visualization slides',
      conferenceMaterials: 'Name badges, signage, booth graphics, handouts',
      merchandise: 'T-shirts, notebooks, pens, stickers, tote bags'
    }
  });
  
  // Product Creation State
  const [uxData, setUXData] = useState({
    platformSections: [
      {
        id: 1,
        name: 'Authentication',
        description: 'User registration and login',
        screens: [
          {
            id: 1,
            name: 'Login',
            description: 'User login screen',
            elements: [
              {
                id: 1,
                name: 'Email Input',
                description: 'Field for entering email address',
                elementType: 'Input'
              },
              {
                id: 2,
                name: 'Password Input',
                description: 'Field for entering password',
                elementType: 'Input'
              },
              {
                id: 3,
                name: 'Login Button',
                description: 'Button to submit login credentials',
                elementType: 'Button'
              }
            ]
          },
          {
            id: 2,
            name: 'Registration',
            description: 'New user registration screen',
            elements: [
              {
                id: 4,
                name: 'Email Input',
                description: 'Field for entering email address',
                elementType: 'Input'
              },
              {
                id: 5,
                name: 'Password Input',
                description: 'Field for creating password',
                elementType: 'Input'
              },
              {
                id: 6,
                name: 'Confirm Password',
                description: 'Field for confirming password',
                elementType: 'Input'
              },
              {
                id: 7,
                name: 'Register Button',
                description: 'Button to submit registration',
                elementType: 'Button'
              }
            ]
          }
        ]
      },
      {
        id: 2,
        name: 'Dashboard',
        description: 'Main user dashboard',
        screens: [
          {
            id: 3,
            name: 'Overview',
            description: 'Dashboard overview screen',
            elements: [
              {
                id: 8,
                name: 'Balance Card',
                description: 'Card showing current balance',
                elementType: 'Card'
              },
              {
                id: 9,
                name: 'Recent Transactions',
                description: 'List of recent transactions',
                elementType: 'List'
              },
              {
                id: 10,
                name: 'Quick Actions',
                description: 'Buttons for common actions',
                elementType: 'Button Group'
              }
            ]
          }
        ]
      }
    ],
    sectionsNavigation: 'Tab-based navigation with icon and text labels at the bottom of the screen for mobile, and sidebar navigation for desktop',
    screensNavigation: 'Hierarchical navigation with back button for nested screens, swipe gestures for related screens',
    platformBranding: {
      colorPalette: 'Primary: #0077B5, Secondary: #00A0B0, Background: #F5F7FA, Text: #003B5C',
      typographySystem: 'Roboto for UI elements, Montserrat for headings',
      layoutSystem: 'Card-based layout with consistent spacing (16px, 24px, 32px), responsive grid system',
      componentDesign: 'Material Design inspired components with custom branding elements'
    },
    prototypeContext: {
      userProfile: 'Small business owner, 35-45 years old, tech-savvy but busy, needs efficient financial management',
      industryContext: 'Fintech, digital payments, cross-border transactions',
      geographicalSpecifics: 'MENA region, multi-currency support, Arabic and English interfaces',
      financialParameters: 'Transaction amounts $10-$10,000, fee structure 1-3%, instant processing',
      dataPoints: 'Transaction history (6 months), payment methods, recipient details, recurring payments'
    }
  });
  const [prototypeData, setPrototypeData] = useState({
    userFlows: [
      {
        id: 1,
        name: 'User Registration',
        description: 'New user registration process',
        steps: [
          {
            id: 1,
            name: 'Enter Email',
            description: 'User enters email address',
            interaction: 'User types email in the input field and clicks Continue',
            feedback: 'Visual validation of email format, button becomes enabled when valid'
          },
          {
            id: 2,
            name: 'Create Password',
            description: 'User creates a secure password',
            interaction: 'User types password, system shows strength indicator',
            feedback: 'Password strength meter updates in real-time, requirements list checks off as met'
          },
          {
            id: 3,
            name: 'Verify Email',
            description: 'User verifies email address',
            interaction: 'User receives email with code, enters code in verification screen',
            feedback: 'Success message appears when correct code is entered'
          }
        ]
      },
      {
        id: 2,
        name: 'Send Payment',
        description: 'User sends payment to recipient',
        steps: [
          {
            id: 4,
            name: 'Select Recipient',
            description: 'User selects payment recipient',
            interaction: 'User searches or selects from recent recipients',
            feedback: 'Recipient details displayed for confirmation'
          },
          {
            id: 5,
            name: 'Enter Amount',
            description: 'User enters payment amount',
            interaction: 'User enters amount and selects currency',
            feedback: 'Fee calculation displayed, total amount updated'
          },
          {
            id: 6,
            name: 'Confirm Payment',
            description: 'User reviews and confirms payment',
            interaction: 'User reviews details and clicks Confirm',
            feedback: 'Summary screen with all payment details'
          }
        ]
      }
    ],
    interactionPatterns: 'Consistent tap/click for primary actions, swipe for navigation between related screens, pull-to-refresh for content updates, long press for contextual actions',
    feedbackMechanisms: 'Visual feedback for all interactions (button state changes, loading indicators), haptic feedback for important actions, toast notifications for confirmations and errors',
    accessibilityConsiderations: 'High contrast mode, screen reader support, keyboard navigation, minimum touch target size of 44x44px, text scaling support',
    testingScenarios: 'New user registration, returning user login, sending payment to new recipient, sending payment to existing recipient, handling network errors',
    prototypeTools: 'Figma for design and prototyping, with interactive components and variables'
  });
  const [mvpData, setMVPData] = useState({
    coreFeatures: [
      {
        id: 1,
        name: 'User Authentication',
        description: 'Secure login and registration system with email verification',
        priority: 'must-have',
        technicalRequirements: 'JWT authentication, secure password storage, email verification service',
        developmentEffort: 'Medium'
      },
      {
        id: 2,
        name: 'Payment Processing',
        description: 'Core payment functionality with multiple payment methods',
        priority: 'must-have',
        technicalRequirements: 'Payment gateway integration, transaction processing, security compliance',
        developmentEffort: 'High'
      },
      {
        id: 3,
        name: 'Transaction History',
        description: 'View and search past transactions',
        priority: 'must-have',
        technicalRequirements: 'Database queries, filtering, pagination, export functionality',
        developmentEffort: 'Medium'
      },
      {
        id: 4,
        name: 'Recipient Management',
        description: 'Add, edit, and manage payment recipients',
        priority: 'must-have',
        technicalRequirements: 'Contact storage, validation, search functionality',
        developmentEffort: 'Low'
      },
      {
        id: 5,
        name: 'Notifications',
        description: 'In-app and email notifications for transactions',
        priority: 'should-have',
        technicalRequirements: 'Push notification service, email service integration',
        developmentEffort: 'Medium'
      }
    ],
    technicalArchitecture: 'React Native for mobile apps, React for web dashboard, Node.js backend with Express, PostgreSQL database, Redis for caching, AWS infrastructure',
    developmentRoadmap: 'Phase 1 (Weeks 1-4): Core authentication and basic UI\nPhase 2 (Weeks 5-8): Payment processing and recipient management\nPhase 3 (Weeks 9-12): Transaction history and notifications\nPhase 4 (Weeks 13-16): Testing, bug fixes, and performance optimization',
    testingStrategy: 'Unit testing with Jest, integration testing with Cypress, manual QA testing, beta testing with select users, security audit',
    launchPlan: 'Soft launch to 100 beta users, collect feedback for 2 weeks, fix critical issues, gradual rollout to wider audience, marketing campaign launch',
    feedbackCollection: 'In-app feedback form, user interviews (10 users per week), analytics tracking (Mixpanel), NPS surveys after key actions',
    iterationPlan: 'Weekly sprint planning based on feedback, prioritize fixes for critical issues, bi-weekly feature updates, monthly roadmap review'
  });
  
  const handleNextStage = (nextStage: VentureStage) => {
    setCurrentStage(nextStage);
    
    // Update completion percentage based on stage
    switch (nextStage) {
      case 'orientation':
        setCompletionPercentage(0);
        break;
      case 'knowledge_base':
        setCompletionPercentage(10);
        break;
      case 'idea':
        setCompletionPercentage(25);
        break;
      case 'validation':
        setCompletionPercentage(40);
        break;
      case 'business_plan': 
        setCompletionPercentage(60);
        setActiveBusinessPlanSubStage('market_assessment');
        break;
      case 'brand_creation':
        setCompletionPercentage(70);
        setActiveBrandCreationSubStage('logo_concept');
        break;
      case 'product_creation':
        setCompletionPercentage(80);
        setActiveProductCreationSubStage('ux');
        break;
      case 'setup':
        setCompletionPercentage(85);
        break;
      case 'investment_readiness':
        setCompletionPercentage(95);
        break;
    }
  };
  
  const handleVentureTypeSelect = (type: VentureType) => {
    setVentureType(type);
    handleNextStage('knowledge_base');
  };

  // Knowledge Base handlers
  const handleUploadDocument = () => {
    // In a real implementation, this would handle actual file uploads
    const newDoc = {
      id: uploadedDocuments.length + 1,
      name: `Document_${uploadedDocuments.length + 1}.pdf`,
      type: 'Market Research',
      size: '2.4 MB'
    };
    
    setUploadedDocuments([...uploadedDocuments, newDoc]);
    setCapacityUsed(Math.min(capacityUsed + 15, 100)); // Increment capacity used
  };
  
  const handleRemoveDocument = (id: number) => {
    setUploadedDocuments(uploadedDocuments.filter(doc => doc.id !== id));
    setCapacityUsed(Math.max(capacityUsed - 15, 0)); // Decrement capacity used
  };

  const handleSendMessage = (message: string) => {
    // In a real implementation, this would send the message to the AI
    console.log('Sending message:', message);
  };

  // Market Targeting handlers
  const handleMarketInputChange = (field: string, value: string) => {
    setTargetMarket({
      ...targetMarket,
      [field]: value
    });
    
    // Reset research when inputs change
    setResearchStarted(false);
  };
  
  const handleStartResearch = () => {
    setResearchStarted(true);
    // In a real implementation, this would trigger an API call to generate market research
  };

  // Validation stage handlers
  const handleRunSimulation = () => {
    // In a real implementation, this would trigger an API call to run the simulation
    // For now, we'll simulate the process with mock data
    
    // Generate mock answers for each persona and question
    const mockAnswers: PersonaAnswer[] = [];
    aiPersonas.forEach(persona => {
      validationQuestions.forEach(question => {
        mockAnswers.push({
          personaId: persona.id,
          questionId: question.id,
          answer: `This is a simulated answer from ${persona.name} to the question: "${question.text}"`
        });
      });
    });
    
    // Generate mock analyses for each persona
    const mockAnalyses: PersonaAnalysis[] = aiPersonas.map(persona => ({
      personaId: persona.id,
      problemScore: Math.floor(Math.random() * 3) + 7, // Random score between 7-10
      solutionSatisfaction: Math.floor(Math.random() * 3) + 2, // Random score between 2-5
      willingnessToPay: persona.id === 1 ? '$300-500/month' : persona.id === 2 ? '$1000-1500/month' : '$100-200/month',
      interestLevel: Math.floor(Math.random() * 3) + 7, // Random score between 7-10
      mustHaveFeatures: [
        'Low transaction fees',
        'Easy integration',
        'Reliable customer support'
      ],
      mainObjection: persona.id === 1 ? 'Integration complexity' : persona.id === 2 ? 'Regulatory compliance' : 'Cost for small volume',
      bestMessaging: persona.id === 1 ? 'Seamless integration with existing systems' : persona.id === 2 ? 'Enterprise-grade security and compliance' : 'Affordable for startups',
      salesApproach: persona.id === 1 ? 'Technical demo with ROI calculation' : persona.id === 2 ? 'Formal presentation with compliance documentation' : 'Quick setup with free trial',
      dealBreaker: persona.id === 1 ? 'Long implementation time' : persona.id === 2 ? 'Security concerns' : 'High minimum transaction volume'
    }));
    
    // Generate mock overall analysis
    const mockOverallAnalysis: OverallAnalysis = {
      problemConsensus: 85,
      solutionDemand: 8,
      priceValidation: '$100-1500/month depending on business size',
      primaryTarget: 'Small to medium e-commerce businesses',
      coreMessage: 'Reduce payment processing costs by 60% with seamless integration',
      keyFeatures: [
        'Low transaction fees',
        'Easy integration',
        'Cross-border payment optimization'
      ],
      fitScore: 8,
      redFlags: [
        'Integration complexity concerns',
        'Varying price sensitivity across segments'
      ],
      greenLights: [
        'Strong problem consensus across all personas',
        'High willingness to pay for value delivered',
        'Clear differentiation from existing solutions'
      ],
      immediateAction: 'Develop tiered pricing model to address different market segments',
      productChanges: 'Simplify integration process, enhance documentation',
      furtherTesting: 'Validate pricing model with real customers'
    };
    
    setPersonaAnswers(mockAnswers);
    setPersonaAnalyses(mockAnalyses);
    setOverallAnalysis(mockOverallAnalysis);
    setSimulationComplete(true);
  };
  
  const renderStageContent = () => {
    switch (currentStage) {
      case 'orientation':
        return (
          <OrientationScreen 
            onSelectVentureType={handleVentureTypeSelect} 
          />
        );
      case 'knowledge_base':
        return (
          <VentureBuildingLayout
            currentStage={currentStage}
            completionPercentage={completionPercentage}
            leftColumn={<AIChatHistory />}
            middleColumn={<KnowledgeBaseChat onSendMessage={handleSendMessage} />}
            rightColumn={
              <KnowledgeBaseInputs 
                capacityUsed={capacityUsed}
                uploadedDocuments={uploadedDocuments}
                onUploadDocument={handleUploadDocument}
                onRemoveDocument={handleRemoveDocument}
                onContinue={() => handleNextStage('idea')}
                onSkip={() => handleNextStage('idea')}
                onSaveDraft={() => console.log('Saving draft...')}
              />
            }
          />
        );
      case 'idea':
        if (activeIdeaSubStage === 'ideation') {
          return (
            <VentureBuildingLayout
              currentStage={currentStage}
              completionPercentage={completionPercentage}
              leftColumn={<AIChatHistory />}
              middleColumn={<IdeaStageChat onSendMessage={handleSendMessage} activeSubStage={activeIdeaSubStage} />}
              rightColumn={
                <IdeationInputs 
                  problems={problems}
                  solutions={solutions}
                  elevatorPitch={elevatorPitch}
                  businessModel={businessModel}
                  onUpdateSolutions={setSolutions}
                  onUpdateElevatorPitch={setElevatorPitch}
                  onUpdateBusinessModel={setBusinessModel}
                  onContinue={() => {
                    handleNextStage('validation');
                    setActiveValidationSubStage('target-audience');
                  }}
                  onSkip={() => handleNextStage('business_plan')}
                  onSaveDraft={() => console.log('Saving draft...')}
                />
              }
            />
          );
        }
        if (activeIdeaSubStage === 'problem-definition') {
          return (
            <VentureBuildingLayout
              currentStage={currentStage}
              completionPercentage={completionPercentage}
              leftColumn={<AIChatHistory />}
              middleColumn={<IdeaStageChat onSendMessage={handleSendMessage} activeSubStage={activeIdeaSubStage} />}
              rightColumn={
                <ProblemDefinitionInputs 
                  problems={problems}
                  onUpdateProblems={setProblems}
                  onContinue={() => {
                    setActiveIdeaSubStage('ideation');
                  }}
                  onSkip={() => handleNextStage('business_plan')}
                  onSaveDraft={() => console.log('Saving draft...')}
                />
              }
            />
          );
        }
        return ( // Default to market-targeting
          <VentureBuildingLayout
            currentStage={currentStage}
            completionPercentage={completionPercentage}
            leftColumn={<AIChatHistory />}
            middleColumn={<IdeaStageChat onSendMessage={handleSendMessage} activeSubStage={activeIdeaSubStage} />}
            rightColumn={
              <MarketTargetingInputs 
                targetMarket={targetMarket}
                onInputChange={handleMarketInputChange}
                onStartResearch={handleStartResearch}
                researchStarted={researchStarted}
                onContinue={() => setActiveIdeaSubStage('problem-definition')}
                onSkip={() => handleNextStage('business_plan')}
                onSaveDraft={() => console.log('Saving draft...')}
              />
            }
          />
        );
      case 'validation':
        return (
          <VentureBuildingLayout
            currentStage={currentStage}
            completionPercentage={completionPercentage}
            leftColumn={<AIChatHistory />}
            middleColumn={<ValidationStageChat onSendMessage={handleSendMessage} activeSubStage={activeValidationSubStage} />}
            rightColumn={
              <div className="p-4 h-full overflow-y-auto">
                <ValidationTabs 
                  activeSubStage={activeValidationSubStage}
                  onChangeSubStage={(subStage) => setActiveValidationSubStage(subStage as ValidationSubStage)}
                />
                
                <div className="mt-4">
                  {activeValidationSubStage === 'target-audience' && (
                    <TargetAudienceInputs 
                      targetAudienceData={targetAudienceData}
                      onUpdateTargetAudience={setTargetAudienceData}
                      onContinue={() => setActiveValidationSubStage('ai-personas')}
                      onSkip={() => setActiveValidationSubStage('ai-personas')}
                      onSaveDraft={() => console.log('Saving draft...')}
                    />
                  )}
                  
                  {activeValidationSubStage === 'ai-personas' && (
                    <AIPersonaGenerationInputs 
                      personas={aiPersonas}
                      onUpdatePersonas={setAIPersonas}
                      onContinue={() => setActiveValidationSubStage('questionnaire')}
                      onSkip={() => setActiveValidationSubStage('questionnaire')}
                      onSaveDraft={() => console.log('Saving draft...')}
                      onRegeneratePersonas={() => console.log('Regenerating personas...')}
                    />
                  )}
                  
                  {activeValidationSubStage === 'questionnaire' && (
                    <QuestionnaireDesignInputs 
                      questions={validationQuestions}
                      onUpdateQuestions={setValidationQuestions}
                      onContinue={() => setActiveValidationSubStage('ai-simulation')}
                      onSkip={() => setActiveValidationSubStage('ai-simulation')}
                      onSaveDraft={() => console.log('Saving draft...')}
                    />
                  )}
                  
                  {activeValidationSubStage === 'ai-simulation' && (
                    <AISimulationInputs 
                      personas={aiPersonas}
                      questions={validationQuestions}
                      personaAnswers={personaAnswers}
                      personaAnalyses={personaAnalyses}
                      overallAnalysis={overallAnalysis}
                      onUpdatePersonaAnswers={setPersonaAnswers}
                      onUpdatePersonaAnalyses={setPersonaAnalyses}
                      onUpdateOverallAnalysis={setOverallAnalysis}
                      onRunSimulation={handleRunSimulation}
                      simulationComplete={simulationComplete}
                      onContinue={() => handleNextStage('business_plan')}
                      onBack={() => setActiveValidationSubStage('questionnaire')}
                      onSkip={() => handleNextStage('business_plan')}
                      onSaveDraft={() => console.log('Saving draft...')}
                    />
                  )}
                </div>
              </div>
            }
          />
        );
      case 'business_plan':
        return (
          <VentureBuildingLayout
            currentStage={currentStage}
            completionPercentage={completionPercentage}
            leftColumn={<AIChatHistory />}
            middleColumn={<BusinessPlanChat onSendMessage={handleSendMessage} currentSubStage={activeBusinessPlanSubStage} />}
            rightColumn={
              <div className="p-4 h-full overflow-y-auto">
                <BusinessPlanProgress 
                  currentSubStage={activeBusinessPlanSubStage}
                  completedSubStages={completedBusinessPlanSubStages}
                />
                
                <div className="mt-4">
                  {activeBusinessPlanSubStage === 'market_assessment' && (
                    <MarketAssessmentInputs 
                      segments={marketSegments}
                      marketSizeData={marketSizeData}
                      behaviorData={marketBehaviorData}
                      competitors={competitors}
                      onUpdateSegments={setMarketSegments}
                      onUpdateMarketSize={setMarketSizeData}
                      onUpdateBehavior={setMarketBehaviorData}
                      onUpdateCompetitors={setCompetitors}
                      onContinue={() => {
                        setCompletedBusinessPlanSubStages([...completedBusinessPlanSubStages, 'market_assessment']);
                        setActiveBusinessPlanSubStage('business_model');
                      }}
                      onBack={() => handleNextStage('validation')}
                      onSkip={() => {
                        setActiveBusinessPlanSubStage('business_model');
                      }}
                      onSaveDraft={() => console.log('Saving draft...')}
                      onExport={() => console.log('Exporting market assessment...')}
                    />
                  )}
                  
                  {activeBusinessPlanSubStage === 'business_model' && (
                    <BusinessModelInputs 
                      businessModelData={businessModelData}
                      onUpdateBusinessModel={setBusinessModelData}
                      onContinue={() => {
                        setCompletedBusinessPlanSubStages([...completedBusinessPlanSubStages, 'business_model']);
                        setActiveBusinessPlanSubStage('strategy_roadmap');
                      }}
                      onBack={() => {
                        setActiveBusinessPlanSubStage('market_assessment');
                      }}
                      onSkip={() => {
                        setActiveBusinessPlanSubStage('strategy_roadmap');
                      }}
                      onSaveDraft={() => console.log('Saving draft...')}
                      onExport={() => console.log('Exporting business model...')}
                    />
                  )}
                  
                  {activeBusinessPlanSubStage === 'strategy_roadmap' && (
                    <StrategyRoadmapContainer 
                      directionData={strategyDirectionData}
                      roadmapData={strategyRoadmapData}
                      onUpdateDirection={setStrategyDirectionData}
                      onUpdateRoadmap={setStrategyRoadmapData}
                      onContinue={() => {
                        setCompletedBusinessPlanSubStages([...completedBusinessPlanSubStages, 'strategy_roadmap']);
                        setActiveBusinessPlanSubStage('tactical_plan');
                      }}
                      onBack={() => {
                        setActiveBusinessPlanSubStage('business_model');
                      }}
                      onSkip={() => {
                        setActiveBusinessPlanSubStage('tactical_plan');
                      }}
                      onSaveDraft={() => console.log('Saving draft...')}
                      onExport={() => console.log('Exporting strategy roadmap...')}
                    />
                  )}

                  {activeBusinessPlanSubStage === 'tactical_plan' && (
                    <TacticalPlanInputs 
                      brandData={brandData}
                      productData={productData}
                      commercialServices={commercialServices}
                      businessFunctions={businessFunctions}
                      marketingData={marketingData}
                      legalData={legalData}
                      onUpdateBrand={setBrandData}
                      onUpdateProduct={setProductData}
                      onUpdateCommercialServices={setCommercialServices}
                      onUpdateBusinessFunctions={setBusinessFunctions}
                      onUpdateMarketing={setMarketingData}
                      onUpdateLegal={setLegalData}
                      onContinue={() => {
                        setCompletedBusinessPlanSubStages([...completedBusinessPlanSubStages, 'tactical_plan']);
                        setActiveBusinessPlanSubStage('financial_plan');
                      }}
                      onBack={() => {
                        setActiveBusinessPlanSubStage('strategy_roadmap');
                      }}
                      onSkip={() => {
                        setActiveBusinessPlanSubStage('financial_plan');
                      }}
                      onSaveDraft={() => console.log('Saving draft...')}
                      onExport={() => console.log('Exporting tactical plan...')}
                    />
                  )}

                  {activeBusinessPlanSubStage === 'financial_plan' && (
                    <FinancialPlanInputs 
                      revenueStreams={revenueStreams}
                      expensesData={expensesData}
                      revenueBuildUpData={revenueBuildUpData}
                      financialAnalysisData={financialAnalysisData}
                      financialControlData={financialControlData}
                      onUpdateRevenueStreams={setRevenueStreams}
                      onUpdateExpenses={setExpensesData}
                      onUpdateRevenueBuildUp={setRevenueBuildUpData}
                      onUpdateFinancialAnalysis={setFinancialAnalysisData}
                      onUpdateFinancialControl={setFinancialControlData}
                      onContinue={() => {
                        setCompletedBusinessPlanSubStages([...completedBusinessPlanSubStages, 'financial_plan']);
                        handleNextStage('brand_creation');
                      }}
                      onBack={() => {
                        setActiveBusinessPlanSubStage('tactical_plan');
                      }}
                      onSkip={() => {
                        handleNextStage('brand_creation');
                      }}
                      onSaveDraft={() => console.log('Saving draft...')}
                      onExport={() => console.log('Exporting financial plan...')}
                    />
                  )}
                </div>
              </div>
            }
          />
        );
      case 'brand_creation':
        return (
          <VentureBuildingLayout
            currentStage={currentStage}
            completionPercentage={completionPercentage}
            leftColumn={<AIChatHistory />}
            middleColumn={<BrandCreationChat onSendMessage={handleSendMessage} currentSubStage={activeBrandCreationSubStage} />}
            rightColumn={
              <div className="p-4 h-full overflow-y-auto">
                <BrandCreationProgress 
                  currentSubStage={activeBrandCreationSubStage}
                  completedSubStages={completedBrandCreationSubStages}
                />
                
                <div className="mt-4">
                  {activeBrandCreationSubStage === 'logo_concept' && (
                    <LogoConceptInputs
                      logoConceptData={logoConceptData}
                      onUpdateLogoConcept={setLogoConceptData}
                      onContinue={() => {
                        setCompletedBrandCreationSubStages([...completedBrandCreationSubStages, 'logo_concept']);
                        setActiveBrandCreationSubStage('logo_design');
                      }}
                      onSkip={() => {
                        setActiveBrandCreationSubStage('logo_design');
                      }}
                      onSaveDraft={() => console.log('Saving draft...')}
                    />
                  )}
                  
                  {activeBrandCreationSubStage === 'logo_design' && (
                    <LogoDesignInputs
                      logoDesignData={logoDesignData}
                      onUpdateLogoDesign={setLogoDesignData}
                      onContinue={() => {
                        setCompletedBrandCreationSubStages([...completedBrandCreationSubStages, 'logo_design']);
                        setActiveBrandCreationSubStage('color_palette');
                      }}
                      onBack={() => {
                        setActiveBrandCreationSubStage('logo_concept');
                      }}
                      onSkip={() => {
                        setActiveBrandCreationSubStage('color_palette');
                      }}
                      onSaveDraft={() => console.log('Saving draft...')}
                    />
                  )}
                  
                  {activeBrandCreationSubStage === 'color_palette' && (
                    <ColorPaletteInputs
                      colorPaletteData={colorPaletteData}
                      onUpdateColorPalette={setColorPaletteData}
                      onContinue={() => {
                        setCompletedBrandCreationSubStages([...completedBrandCreationSubStages, 'color_palette']);
                        setActiveBrandCreationSubStage('typography');
                      }}
                      onBack={() => {
                        setActiveBrandCreationSubStage('logo_design');
                      }}
                      onSkip={() => {
                        setActiveBrandCreationSubStage('typography');
                      }}
                      onSaveDraft={() => console.log('Saving draft...')}
                    />
                  )}
                  
                  {activeBrandCreationSubStage === 'typography' && (
                    <TypographyInputs
                      typographyData={typographyData}
                      onUpdateTypography={setTypographyData}
                      onContinue={() => {
                        setCompletedBrandCreationSubStages([...completedBrandCreationSubStages, 'typography']);
                        setActiveBrandCreationSubStage('visual_styles');
                      }}
                      onBack={() => {
                        setActiveBrandCreationSubStage('color_palette');
                      }}
                      onSkip={() => {
                        setActiveBrandCreationSubStage('visual_styles');
                      }}
                      onSaveDraft={() => console.log('Saving draft...')}
                    />
                  )}
                  
                  {activeBrandCreationSubStage === 'visual_styles' && (
                    <VisualStylesInputs
                      visualStylesData={visualStylesData}
                      onUpdateVisualStyles={setVisualStylesData}
                      onContinue={() => {
                        setCompletedBrandCreationSubStages([...completedBrandCreationSubStages, 'visual_styles']);
                        setActiveBrandCreationSubStage('brand_applications');
                      }}
                      onBack={() => {
                        setActiveBrandCreationSubStage('typography');
                      }}
                      onSkip={() => {
                        setActiveBrandCreationSubStage('brand_applications');
                      }}
                      onSaveDraft={() => console.log('Saving draft...')}
                    />
                  )}
                  
                  {activeBrandCreationSubStage === 'brand_applications' && (
                    <BrandApplicationsInputs
                      brandApplicationsData={brandApplicationsData}
                      onUpdateBrandApplications={setBrandApplicationsData}
                      onContinue={() => {
                        setCompletedBrandCreationSubStages([...completedBrandCreationSubStages, 'brand_applications']);
                        handleNextStage('product_creation');
                      }}
                      onBack={() => {
                        setActiveBrandCreationSubStage('visual_styles');
                      }}
                      onSkip={() => {
                        handleNextStage('product_creation');
                      }}
                      onSaveDraft={() => console.log('Saving draft...')}
                      onExport={() => console.log('Exporting brand manual...')}
                    />
                  )}
                </div>
              </div>
            }
          />
        );
      case 'product_creation':
        return (
          <VentureBuildingLayout
            currentStage={currentStage}
            completionPercentage={completionPercentage}
            leftColumn={<AIChatHistory />}
            middleColumn={<ProductCreationChat onSendMessage={handleSendMessage} currentSubStage={activeProductCreationSubStage} />}
            rightColumn={
              <div className="p-4 h-full overflow-y-auto">
                <ProductCreationProgress 
                  currentSubStage={activeProductCreationSubStage}
                  completedSubStages={completedProductCreationSubStages}
                />
                
                <div className="mt-4">
                  {activeProductCreationSubStage === 'ux' && (
                    <UXInputs
                      uxData={uxData}
                      onUpdateUX={setUXData}
                      onContinue={() => {
                        setCompletedProductCreationSubStages([...completedProductCreationSubStages, 'ux']);
                        setActiveProductCreationSubStage('prototype');
                      }}
                      onSkip={() => {
                        setActiveProductCreationSubStage('prototype');
                      }}
                      onSaveDraft={() => console.log('Saving draft...')}
                    />
                  )}
                  
                  {activeProductCreationSubStage === 'prototype' && (
                    <PrototypeInputs
                      prototypeData={prototypeData}
                      onUpdatePrototype={setPrototypeData}
                      onContinue={() => {
                        setCompletedProductCreationSubStages([...completedProductCreationSubStages, 'prototype']);
                        setActiveProductCreationSubStage('mvp');
                      }}
                      onBack={() => {
                        setActiveProductCreationSubStage('ux');
                      }}
                      onSkip={() => {
                        setActiveProductCreationSubStage('mvp');
                      }}
                      onSaveDraft={() => console.log('Saving draft...')}
                    />
                  )}
                  
                  {activeProductCreationSubStage === 'mvp' && (
                    <MVPInputs
                      mvpData={mvpData}
                      onUpdateMVP={setMVPData}
                      onContinue={() => {
                        setCompletedProductCreationSubStages([...completedProductCreationSubStages, 'mvp']);
                        handleNextStage('setup');
                      }}
                      onBack={() => {
                        setActiveProductCreationSubStage('prototype');
                      }}
                      onSkip={() => {
                        handleNextStage('setup');
                      }}
                      onSaveDraft={() => console.log('Saving draft...')}
                      onExport={() => console.log('Exporting MVP plan...')}
                    />
                  )}
                </div>
              </div>
            }
          />
        );
      default:
        return <div>Stage not implemented yet</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-linkedin-background via-linkedin-dark to-linkedin-background">
      {/* Header */}
      <header className="px-6 py-4 border-b border-linkedin-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="p-2 bg-linkedin-card hover:bg-linkedin-card/70 text-white rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1 ml-4">
            <h1 className="text-2xl font-bold text-white">Venture Builder</h1>
            <p className="text-gray-300">
              {currentStage === 'orientation' 
                ? 'Get started with your new venture' 
                : `Building your venture - ${currentStage.replace('_', ' ')} stage`}
            </p>
          </div>
          {currentStage !== 'orientation' && (
            <div className="text-right">
              <div className="text-xl font-bold text-linkedin-light">{completionPercentage}%</div>
              <div className="text-sm text-gray-400">Complete</div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {renderStageContent()}
      </div>
    </div>
  );
};

export default VentureBuilder;