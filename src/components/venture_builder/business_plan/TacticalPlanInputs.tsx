import React, { useState } from 'react';
import { 
  Save, 
  ArrowRight,
  ArrowLeft,
  Download
} from 'lucide-react';
import BrandInputs from './tactical_plan/BrandInputs';
import ProductDesignInputs from './tactical_plan/ProductDesignInputs';
import CommercialServicesInputs from './tactical_plan/CommercialServicesInputs';
import OperationalExcellenceInputs from './tactical_plan/OperationalExcellenceInputs';
import MarketingGrowthInputs from './tactical_plan/MarketingGrowthInputs';
import LegalStructureInputs from './tactical_plan/LegalStructureInputs';

// Brand Data Types
interface BrandData {
  personality: {
    mission: string;
    vision: string;
    essence: string;
    purpose: string;
    promise: string;
    targetAudience: string;
    valuePropositions: string;
    positioning: string;
    persona: {
      type: string;
      demographic: string;
      attributes: string;
      skills: string;
      lookalike: string;
    };
  };
  behavior: {
    userExperience: string;
    visualExperience: string;
  };
  communication: {
    messages: {
      slogan: string;
      tagline: string;
      keyMessages: string;
      keywords: string;
    };
    guidelines: {
      channels: string;
      contentTypes: string;
      language: string;
      style: string;
      toneOfVoice: string;
      communityManagement: string;
    };
  };
}

// Product Data Types
interface ProductDesignData {
  specifications: {
    functionalRequirements: string;
    nonFunctionalRequirements: string;
    technicalSpecifications: string;
    featurePrioritization: string;
    integrationRequirements: string;
  };
  roadmap: {
    versionPlanning: string;
    featureReleaseTimeline: string;
    marketFeedbackIntegration: string;
    competitiveResponsePlan: string;
    longTermVision: string;
  };
  developmentMethodology: {
    projectManagementFramework: string;
    developmentPhases: string;
    teamStructure: string;
    timelineScheduling: string;
    riskManagement: string;
  };
  technologyStack: {
    frontendTechnologies: string;
    backendSystems: string;
    infrastructureRequirements: string;
    thirdPartyIntegrations: string;
    securityArchitecture: string;
  };
}

// Commercial Service Types
interface CommercialService {
  id: number;
  description: string;
  keyFeatures: string;
  targetAudience: string;
  keyStakeholders: string;
  uniqueSellingPoints: string;
  revenueStreams: string;
  pricing: string;
  pricingBenchmarks: string;
  paymentPlans: string;
  unitEconomics: string;
}

// Business Function Types
interface BusinessFunction {
  id: number;
  name: string;
  workflowStages: WorkflowStage[];
}

interface WorkflowStage {
  id: number;
  name: string;
  teamStructure: string;
}

// Marketing Data Types
interface MarketingGrowthData {
  awareness: string;
  acquisition: string;
  activation: string;
  retention: string;
  reactivation: string;
  referral: string;
  revenue: string;
}

// Legal Data Types
interface LegalStructureData {
  numberOfEntities: string;
  typeOfEntity: string;
  jurisdictionAnalysis: string;
  legalCompliance: string;
  protectionSecurity: string;
  requiredAgreements: string;
}

interface TacticalPlanInputsProps {
  brandData: BrandData;
  productData: ProductDesignData;
  commercialServices: CommercialService[];
  businessFunctions: BusinessFunction[];
  marketingData: MarketingGrowthData;
  legalData: LegalStructureData;
  onUpdateBrand: (data: BrandData) => void;
  onUpdateProduct: (data: ProductDesignData) => void;
  onUpdateCommercialServices: (services: CommercialService[]) => void;
  onUpdateBusinessFunctions: (functions: BusinessFunction[]) => void;
  onUpdateMarketing: (data: MarketingGrowthData) => void;
  onUpdateLegal: (data: LegalStructureData) => void;
  onContinue: () => void;
  onBack: () => void;
  onSkip: () => void;
  onSaveDraft: () => void;
  onExport: () => void;
}

const TacticalPlanInputs: React.FC<TacticalPlanInputsProps> = ({ 
  brandData,
  productData,
  commercialServices,
  businessFunctions,
  marketingData,
  legalData,
  onUpdateBrand,
  onUpdateProduct,
  onUpdateCommercialServices,
  onUpdateBusinessFunctions,
  onUpdateMarketing,
  onUpdateLegal,
  onContinue,
  onBack,
  onSkip,
  onSaveDraft,
  onExport
}) => {
  const [activeTab, setActiveTab] = useState('brand');

  const tabs = [
    { id: 'brand', label: 'Brand' },
    { id: 'product', label: 'Product' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'operations', label: 'Operations' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'legal', label: 'Legal' }
  ];

  return (
    <div className="p-6 h-full overflow-y-auto space-y-4 text-sm">
      {/* Tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-linkedin to-linkedin-light text-white'
                : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === 'brand' && (
          <BrandInputs 
            brandData={brandData}
            onUpdateBrand={onUpdateBrand}
          />
        )}
        
        {activeTab === 'product' && (
          <ProductDesignInputs 
            productData={productData}
            onUpdateProduct={onUpdateProduct}
          />
        )}
        
        {activeTab === 'commercial' && (
          <CommercialServicesInputs 
            services={commercialServices}
            onUpdateServices={onUpdateCommercialServices}
          />
        )}
        
        {activeTab === 'operations' && (
          <OperationalExcellenceInputs 
            businessFunctions={businessFunctions}
            onUpdateBusinessFunctions={onUpdateBusinessFunctions}
          />
        )}
        
        {activeTab === 'marketing' && (
          <MarketingGrowthInputs 
            marketingData={marketingData}
            onUpdateMarketing={onUpdateMarketing}
          />
        )}
        
        {activeTab === 'legal' && (
          <LegalStructureInputs 
            legalData={legalData}
            onUpdateLegal={onUpdateLegal}
          />
        )}
      </div>
      
      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-linkedin-border mt-4">
        <div className="flex items-center space-x-3">
          <button
            onClick={onBack}
            className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors text-xs"
          >
            <ArrowLeft className="w-3 h-3" />
            <span>Back</span>
          </button>
          <button
            onClick={onSkip}
            className="text-gray-400 hover:text-white transition-colors text-xs"
          >
            Skip for now
          </button>
          <button
            onClick={onSaveDraft}
            className="flex items-center space-x-2 bg-linkedin-card hover:bg-linkedin-card/70 text-white px-3 py-1.5 rounded-lg transition-colors text-xs"
          >
            <Save className="w-3 h-3" />
            <span>Save draft</span>
          </button>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={onExport}
            className="flex items-center space-x-2 bg-linkedin-card hover:bg-linkedin-card/70 text-white px-3 py-1.5 rounded-lg transition-colors text-xs"
          >
            <Download className="w-3 h-3" />
            <span>Export</span>
          </button>
          <button
            onClick={onContinue}
            className="flex items-center space-x-2 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-4 py-1.5 rounded-lg transition-all text-xs"
          >
            <span>Continue to Financial Plan</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TacticalPlanInputs;