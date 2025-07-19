import React, { useState } from 'react';
import { 
  Save, 
  ArrowRight,
  ArrowLeft,
  Download
} from 'lucide-react';
import MarketSegmentationInputs from './market_assessment/MarketSegmentationInputs';
import MarketSizeInputs from './market_assessment/MarketSizeInputs';
import MarketBehaviorInputs from './market_assessment/MarketBehaviorInputs';
import CompetitiveLandscapeInputs from './market_assessment/CompetitiveLandscapeInputs';

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

interface MarketAssessmentInputsProps {
  segments: MarketSegment[];
  marketSizeData: MarketSizeData;
  behaviorData: MarketBehaviorData;
  competitors: Competitor[];
  onUpdateSegments: (segments: MarketSegment[]) => void;
  onUpdateMarketSize: (data: MarketSizeData) => void;
  onUpdateBehavior: (data: MarketBehaviorData) => void;
  onUpdateCompetitors: (competitors: Competitor[]) => void;
  onContinue: () => void;
  onBack: () => void;
  onSkip: () => void;
  onSaveDraft: () => void;
  onExport: () => void;
}

const MarketAssessmentInputs: React.FC<MarketAssessmentInputsProps> = ({ 
  segments,
  marketSizeData,
  behaviorData,
  competitors,
  onUpdateSegments,
  onUpdateMarketSize,
  onUpdateBehavior,
  onUpdateCompetitors,
  onContinue,
  onBack,
  onSkip,
  onSaveDraft,
  onExport
}) => {
  const [activeTab, setActiveTab] = useState('segmentation');

  const tabs = [
    { id: 'segmentation', label: 'Market Segmentation' },
    { id: 'size', label: 'Market Size' },
    { id: 'behavior', label: 'Market Behavior' },
    { id: 'competition', label: 'Competitive Landscape' }
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
        {activeTab === 'segmentation' && (
          <MarketSegmentationInputs 
            segments={segments}
            onUpdateSegments={onUpdateSegments}
          />
        )}
        
        {activeTab === 'size' && (
          <MarketSizeInputs 
            marketSizeData={marketSizeData}
            onUpdateMarketSize={onUpdateMarketSize}
          />
        )}
        
        {activeTab === 'behavior' && (
          <MarketBehaviorInputs 
            behaviorData={behaviorData}
            onUpdateBehavior={onUpdateBehavior}
          />
        )}
        
        {activeTab === 'competition' && (
          <CompetitiveLandscapeInputs 
            competitors={competitors}
            onUpdateCompetitors={onUpdateCompetitors}
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
            <span>Continue to Business Model</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketAssessmentInputs;