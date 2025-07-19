import React from 'react';
import { 
  User, 
  Building2, 
  MapPin, 
  Briefcase, 
  Target, 
  Clock, 
  TrendingUp,
  CheckCircle,
  Circle,
  Award,
  Globe,
  DollarSign,
  Brain,
  BarChart3,
  Users,
  Shield,
  Zap,
  Phone,
  Mail,
  Languages,
  GraduationCap,
  Lightbulb,
  Heart,
  Settings,
  FileText,
  Compass,
  PieChart,
  UserCheck
} from 'lucide-react';

interface VentureProgressProps {
  currentStage: string;
  completionPercentage: number;
}

const VentureProgress: React.FC<VentureProgressProps> = ({ 
  currentStage, 
  completionPercentage 
}) => {
  const stages = [
    { id: 'knowledge_base', label: 'Knowledge Base', icon: FileText },
    { id: 'idea', label: 'Idea', icon: Lightbulb },
    { id: 'validation', label: 'Validation', icon: CheckCircle },
    { id: 'business_plan', label: 'Business Plan', icon: FileText },
    { id: 'brand_creation', label: 'Brand Creation', icon: Heart },
    { id: 'product_creation', label: 'Product Creation', icon: Settings },
    { id: 'setup', label: 'Setup', icon: Briefcase },
    { id: 'investment_readiness', label: 'Investment Readiness', icon: DollarSign }
  ];

  const getStageStatus = (stageId: string) => {
    if (currentStage === stageId) return 'current';
    
    const stageIndex = stages.findIndex(stage => stage.id === stageId);
    const currentIndex = stages.findIndex(stage => stage.id === currentStage);
    
    if (stageIndex < currentIndex) return 'completed';
    return 'upcoming';
  };

  const getStageColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500 text-white';
      case 'current':
        return 'bg-linkedin text-white';
      default:
        return 'bg-gray-700 text-gray-400';
    }
  };

  const getConnectorColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'current':
        return 'bg-linkedin';
      default:
        return 'bg-gray-700';
    }
  };

  return (
    <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-white">Venture Building Progress</h2>
        <div className="flex items-center space-x-2">
          <div className="text-lg font-bold text-linkedin-light">{completionPercentage}%</div>
          <div className="text-sm text-gray-400">Complete</div>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full bg-gray-700 rounded-full h-1 mb-4">
        <div 
          className="bg-gradient-to-r from-linkedin to-linkedin-light h-1 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${completionPercentage}%` }}
        ></div>
      </div>
      
      {/* Stage Indicators */}
      <div className="flex items-center justify-between">
        {stages.map((stage, index) => (
          <React.Fragment key={stage.id}>
            {/* Stage Icon */}
            <div className="flex flex-col items-center">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 transition-all ${getStageColor(getStageStatus(stage.id))}`}
              >
                {getStageStatus(stage.id) === 'completed' ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <stage.icon className="w-4 h-4" />
                )}
              </div>
              <span className={`text-sm font-medium ${
                getStageStatus(stage.id) === 'current' ? 'text-linkedin-light' : 
                getStageStatus(stage.id) === 'completed' ? 'text-green-400' : 'text-gray-400'
              }`}>
                {stage.label}
              </span>
            </div>
            
            {/* Connector Line (except after the last stage) */}
            {index < stages.length - 1 && (
              <div className="flex-1 h-1 mx-1">
                <div className={`h-full ${getConnectorColor(getStageStatus(stage.id))}`}></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default VentureProgress;