import React, { useState } from 'react';
import { 
  Save, 
  ArrowRight,
  ArrowLeft,
  Download
} from 'lucide-react';
import StrategyDirectionInputs from './strategy_roadmap/StrategyDirectionInputs';
import StrategyRoadmapInputs from './strategy_roadmap/StrategyRoadmapInputs';

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

interface StrategyRoadmapInputsProps {
  directionData: StrategyDirectionData;
  roadmapData: StrategyRoadmapData;
  onUpdateDirection: (data: StrategyDirectionData) => void;
  onUpdateRoadmap: (data: StrategyRoadmapData) => void;
  onContinue: () => void;
  onBack: () => void;
  onSkip: () => void;
  onSaveDraft: () => void;
  onExport: () => void;
}

const StrategyRoadmapContainer: React.FC<StrategyRoadmapInputsProps> = ({ 
  directionData,
  roadmapData,
  onUpdateDirection,
  onUpdateRoadmap,
  onContinue, 
  onBack, 
  onSkip, 
  onSaveDraft,
  onExport
}) => {
  const [activeTab, setActiveTab] = useState('direction');

  const tabs = [
    { id: 'direction', label: 'Direction' },
    { id: 'roadmap', label: 'Roadmap' }
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
        {activeTab === 'direction' && (
          <StrategyDirectionInputs 
            directionData={directionData}
            onUpdateDirection={onUpdateDirection}
          />
        )}
        
        {activeTab === 'roadmap' && (
          <StrategyRoadmapInputs 
            roadmapData={roadmapData}
            onUpdateRoadmap={onUpdateRoadmap}
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
            <span>Continue to Tactical Plan</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StrategyRoadmapContainer;