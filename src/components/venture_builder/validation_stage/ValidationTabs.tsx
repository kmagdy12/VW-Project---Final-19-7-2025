import React from 'react';
import { Users, Brain, MessageSquare, BarChart3 } from 'lucide-react';

interface ValidationTabsProps {
  activeSubStage: string;
  onChangeSubStage: (subStage: string) => void;
}

const ValidationTabs: React.FC<ValidationTabsProps> = ({ activeSubStage, onChangeSubStage }) => {
  const tabs = [
    { id: 'target-audience', label: 'Target Audience', icon: Users },
    { id: 'ai-personas', label: 'AI Personas', icon: Brain },
    { id: 'questionnaire', label: 'Questionnaire', icon: MessageSquare },
    { id: 'ai-simulation', label: 'AI Simulation', icon: BarChart3 }
  ];

  return (
    <div className="flex items-center space-x-2 overflow-x-auto pb-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChangeSubStage(tab.id)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
            activeSubStage === tab.id
              ? 'bg-gradient-to-r from-linkedin to-linkedin-light text-white'
              : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
          }`}
        >
          <tab.icon className="w-4 h-4" />
          <span className="text-sm">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default ValidationTabs;