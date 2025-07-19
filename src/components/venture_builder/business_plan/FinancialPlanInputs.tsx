import React, { useState } from 'react';
import { 
  Save, 
  ArrowRight,
  ArrowLeft,
  Download
} from 'lucide-react';
import RevenueModelInputs from './financial_plan/RevenueModelInputs';
import ExpensesInputs from './financial_plan/ExpensesInputs';
import RevenueBuildUpInputs from './financial_plan/RevenueBuildUpInputs';
import FinancialAnalysisInputs from './financial_plan/FinancialAnalysisInputs';
import FinancialControlInputs from './financial_plan/FinancialControlInputs';

// Revenue Stream Types
interface RevenueStream {
  id: number;
  name: string;
  description: string;
  pricing: string;
  pricingModel: string;
  pricingTiers: string;
  billingFrequency: string;
  discountStrategy: string;
}

// Expenses Data Types
interface ExpensesData {
  directCosts: string;
  operatingExpenses: string;
  marketingSalesExpenses: string;
}

// Revenue Build-up Data Types
interface RevenueBuildUpData {
  primaryForecastingLogic: string;
  forecastingLogicFramework: {
    primaryDriver: string;
    conversionPath: string;
    multiplicationFactors: string;
    constraints: string;
  };
  requiredElements: {
    primaryDriverInputs: string;
    conversionBehavioralInputs: string;
    financialValueInputs: string;
    growthScalingInputs: string;
    externalMarketInputs: string;
  };
}

// Financial Analysis Data Types
interface FinancialAnalysisData {
  profitLoss: string;
  cashflowAnalysis: string;
  capitalRequirements: string;
  breakEvenAnalysis: string;
}

// Financial Control Data Types
interface FinancialControlData {
  budgetingPlanning: string;
  financialReporting: string;
  costManagement: string;
  cashManagement: string;
  riskManagement: string;
  performanceMonitoring: string;
}

interface FinancialPlanInputsProps {
  revenueStreams: RevenueStream[];
  expensesData: ExpensesData;
  revenueBuildUpData: RevenueBuildUpData;
  financialAnalysisData: FinancialAnalysisData;
  financialControlData: FinancialControlData;
  onUpdateRevenueStreams: (streams: RevenueStream[]) => void;
  onUpdateExpenses: (data: ExpensesData) => void;
  onUpdateRevenueBuildUp: (data: RevenueBuildUpData) => void;
  onUpdateFinancialAnalysis: (data: FinancialAnalysisData) => void;
  onUpdateFinancialControl: (data: FinancialControlData) => void;
  onContinue: () => void;
  onBack: () => void;
  onSkip: () => void;
  onSaveDraft: () => void;
  onExport: () => void;
}

const FinancialPlanInputs: React.FC<FinancialPlanInputsProps> = ({ 
  revenueStreams,
  expensesData,
  revenueBuildUpData,
  financialAnalysisData,
  financialControlData,
  onUpdateRevenueStreams,
  onUpdateExpenses,
  onUpdateRevenueBuildUp,
  onUpdateFinancialAnalysis,
  onUpdateFinancialControl,
  onContinue,
  onBack,
  onSkip,
  onSaveDraft,
  onExport
}) => {
  const [activeTab, setActiveTab] = useState('revenue-model');

  const tabs = [
    { id: 'revenue-model', label: 'Revenue Model' },
    { id: 'expenses', label: 'Expenses' },
    { id: 'revenue-build-up', label: 'Revenue Build-up' },
    { id: 'financial-analysis', label: 'Financial Analysis' },
    { id: 'financial-control', label: 'Financial Control' }
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
        {activeTab === 'revenue-model' && (
          <RevenueModelInputs 
            revenueStreams={revenueStreams}
            onUpdateRevenueStreams={onUpdateRevenueStreams}
          />
        )}
        
        {activeTab === 'expenses' && (
          <ExpensesInputs 
            expensesData={expensesData}
            onUpdateExpenses={onUpdateExpenses}
          />
        )}
        
        {activeTab === 'revenue-build-up' && (
          <RevenueBuildUpInputs 
            revenueBuildUpData={revenueBuildUpData}
            onUpdateRevenueBuildUp={onUpdateRevenueBuildUp}
          />
        )}
        
        {activeTab === 'financial-analysis' && (
          <FinancialAnalysisInputs 
            financialAnalysisData={financialAnalysisData}
            onUpdateFinancialAnalysis={onUpdateFinancialAnalysis}
          />
        )}
        
        {activeTab === 'financial-control' && (
          <FinancialControlInputs 
            financialControlData={financialControlData}
            onUpdateFinancialControl={onUpdateFinancialControl}
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
            <span>Complete Business Plan</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinancialPlanInputs;