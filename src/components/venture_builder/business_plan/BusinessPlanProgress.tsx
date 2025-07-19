import React from 'react';
import { 
  BarChart3, 
  Briefcase, 
  Target, 
  Calendar, 
  DollarSign,
  CheckCircle
} from 'lucide-react';

interface BusinessPlanProgressProps {
  currentSubStage: string;
  completedSubStages: string[];
}

const BusinessPlanProgress: React.FC<BusinessPlanProgressProps> = ({ 
  currentSubStage, 
  completedSubStages 
}) => {
  const subStages = [
    { id: 'market_assessment', label: 'Market Assessment', icon: BarChart3 },
    { id: 'business_model', label: 'Business Model', icon: Briefcase },
    { id: 'strategy_roadmap', label: 'Strategy Roadmap', icon: Target },
    { id: 'tactical_plan', label: 'Tactical Plan', icon: Calendar },
    { id: 'financial_plan', label: 'Financial Plan', icon: DollarSign }
  ];

  const getStageStatus = (stageId: string) => {
    if (completedSubStages.includes(stageId)) return 'completed';
    if (currentSubStage === stageId) return 'current';
    return 'upcoming';
  };

  const getStageColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-400 bg-green-500/20';
      case 'current':
        return 'text-linkedin-light bg-linkedin/20';
      default:
        return 'text-gray-400 bg-gray-700/50';
    }
  };

  return (
    <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
      <h3 className="text-lg font-bold text-white mb-4">Business Plan Progress</h3>
      <div className="flex items-center justify-between">
        {subStages.map((stage, index) => (
          <React.Fragment key={stage.id}>
            {/* Stage Icon */}
            <div className="flex flex-col items-center">
              <div 
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all ${getStageColor(getStageStatus(stage.id))}`}
              >
                {getStageStatus(stage.id) === 'completed' ? (
                  <CheckCircle className="w-6 h-6" />
                ) : (
                  <stage.icon className="w-6 h-6" />
                )}
              </div>
              <span className={`text-sm font-medium ${
                getStageStatus(stage.id) === 'current' ? 'text-linkedin-light' : 
                getStageStatus(stage.id) === 'completed' ? 'text-green-400' : 'text-gray-400'
              }`}>
                {stage.label}
              </span>
            </div>
            
            {/* Connector line (except after the last stage) */}
            {index < subStages.length - 1 && (
              <div className="flex-1 h-1 mx-2">
                <div className={`h-full ${
                  getStageStatus(stage.id) === 'completed' ? 'bg-green-400' : 'bg-gray-700'
                }`}></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BusinessPlanProgress;