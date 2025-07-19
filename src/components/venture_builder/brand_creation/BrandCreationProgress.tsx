import React from 'react';
import { 
  Image, 
  Palette, 
  Type, 
  Layout, 
  Layers,
  CheckCircle
} from 'lucide-react';

interface BrandCreationProgressProps {
  currentSubStage: string;
  completedSubStages: string[];
}

const BrandCreationProgress: React.FC<BrandCreationProgressProps> = ({ 
  currentSubStage, 
  completedSubStages 
}) => {
  const subStages = [
    { id: 'logo_concept', label: 'Logo Concept', icon: Image, description: 'Define logo concept' },
    { id: 'logo_design', label: 'Logo Design', icon: Image, description: 'Create logo design & guidelines' },
    { id: 'color_palette', label: 'Color Palette', icon: Palette, description: 'Define brand colors' },
    { id: 'typography', label: 'Typography', icon: Type, description: 'Select brand typography' },
    { id: 'visual_styles', label: 'Visual Styles', icon: Layout, description: 'Create visual elements' },
    { id: 'brand_applications', label: 'Brand Applications', icon: Layers, description: 'Apply brand to materials' }
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
      <h3 className="text-lg font-bold text-white mb-4">Brand Creation Progress</h3>
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
              <div className="text-center">
                <span className={`text-sm font-medium ${
                  getStageStatus(stage.id) === 'current' ? 'text-linkedin-light' : 
                  getStageStatus(stage.id) === 'completed' ? 'text-green-400' : 'text-gray-400'
                }`}>
                  {stage.label}
                </span>
                <p className="text-xs text-gray-500 max-w-[80px] mx-auto">{stage.description}</p>
              </div>
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

export default BrandCreationProgress;