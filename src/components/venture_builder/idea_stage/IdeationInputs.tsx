import React, { useState } from 'react';
import { 
  Lightbulb, 
  Save, 
  ArrowRight,
  Edit2,
  Trash2,
  Plus,
  MessageSquare,
  Target,
  Users,
  DollarSign,
  CheckCircle,
  X
} from 'lucide-react';

interface Problem {
  id: number;
  description: string;
  size: number;
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

interface IdeationInputsProps {
  problems: Problem[];
  solutions: Solution[];
  elevatorPitch: string;
  businessModel: BusinessModel;
  onUpdateSolutions: (solutions: Solution[]) => void;
  onUpdateElevatorPitch: (pitch: string) => void;
  onUpdateBusinessModel: (model: BusinessModel) => void;
  onContinue: () => void;
  onSkip: () => void;
  onSaveDraft: () => void;
}

const IdeationInputs: React.FC<IdeationInputsProps> = ({ 
  problems,
  solutions,
  elevatorPitch,
  businessModel,
  onUpdateSolutions,
  onUpdateElevatorPitch,
  onUpdateBusinessModel,
  onContinue,
  onSkip,
  onSaveDraft
}) => {
  const [editingSolutionId, setEditingSolutionId] = useState<number | null>(null);
  const [newSolution, setNewSolution] = useState('');
  const [editingProblemId, setEditingProblemId] = useState<number | null>(null);
  const [isEditingElevatorPitch, setIsEditingElevatorPitch] = useState(false);
  const [editedElevatorPitch, setEditedElevatorPitch] = useState(elevatorPitch);
  const [isEditingBusinessModel, setIsEditingBusinessModel] = useState(false);
  const [editedBusinessModel, setEditedBusinessModel] = useState(businessModel);

  const handleUpdateSolution = (problemId: number, description: string) => {
    const existingSolutionIndex = solutions.findIndex(s => s.problemId === problemId);
    
    if (existingSolutionIndex >= 0) {
      // Update existing solution
      const updatedSolutions = [...solutions];
      updatedSolutions[existingSolutionIndex] = { problemId, description };
      onUpdateSolutions(updatedSolutions);
    } else {
      // Add new solution
      onUpdateSolutions([...solutions, { problemId, description }]);
    }
    
    setEditingSolutionId(null);
    setNewSolution('');
  };

  const handleRemoveSolution = (problemId: number) => {
    onUpdateSolutions(solutions.filter(s => s.problemId !== problemId));
  };

  const handleSaveElevatorPitch = () => {
    onUpdateElevatorPitch(editedElevatorPitch);
    setIsEditingElevatorPitch(false);
  };

  const handleSaveBusinessModel = () => {
    onUpdateBusinessModel(editedBusinessModel);
    setIsEditingBusinessModel(false);
  };

  const getSolutionForProblem = (problemId: number) => {
    return solutions.find(s => s.problemId === problemId)?.description || '';
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'low':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="p-6 h-full overflow-y-auto space-y-4 text-sm">
      <h3 className="text-base font-semibold text-white mb-3 flex items-center">
        <Lightbulb className="w-5 h-5 text-linkedin-light mr-2" />
        Ideation
      </h3>
      
      <p className="text-gray-300 text-xs mb-4">
        Define solutions for the identified problems, craft an elevator pitch, and outline your initial business model. The AI has pre-filled some suggestions based on market research and problem analysis.
      </p>
      
      {/* Problems' Solutions */}
      <div className="bg-linkedin-card/30 rounded-lg p-4 mb-4">
        <h4 className="text-white font-medium text-xs mb-3">Problems & Solutions</h4>
        
        <div className="space-y-4">
          {problems.map((problem) => (
            <div key={problem.id} className="bg-linkedin-card/50 rounded-lg p-3">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h5 className="text-white font-medium text-xs">Problem: {problem.description}</h5>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${getImpactColor(problem.impact)}`}>
                      {problem.impact.charAt(0).toUpperCase() + problem.impact.slice(1)}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-linkedin-light text-xs font-medium">{problem.size}%</div>
                    <div className="flex-1 h-1 bg-gray-700 rounded-full">
                      <div 
                        className="h-1 bg-linkedin-light rounded-full"
                        style={{ width: `${problem.size}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Solution Input */}
              <div className="mt-3 border-t border-linkedin-border/30 pt-3">
                <div className="flex items-center space-x-2 mb-1">
                  <MessageSquare className="w-3 h-3 text-linkedin-light" />
                  <h5 className="text-linkedin-light text-xs font-medium">Solution</h5>
                </div>
                
                {editingSolutionId === problem.id ? (
                  <div className="space-y-2">
                    <textarea
                      value={newSolution}
                      onChange={(e) => setNewSolution(e.target.value)}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                      rows={3}
                      placeholder="Describe your solution to this problem..."
                    />
                    <div className="flex items-center justify-end space-x-2">
                      <button
                        onClick={() => {
                          setEditingSolutionId(null);
                          setNewSolution('');
                        }}
                        className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleUpdateSolution(problem.id, newSolution)}
                        className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs flex items-center space-x-1"
                      >
                        <Save className="w-3 h-3" />
                        <span>Save</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    {getSolutionForProblem(problem.id) ? (
                      <div className="flex items-start justify-between">
                        <p className="text-gray-300 text-xs flex-1">{getSolutionForProblem(problem.id)}</p>
                        <div className="flex items-center space-x-1 ml-2">
                          <button
                            onClick={() => {
                              setEditingSolutionId(problem.id);
                              setNewSolution(getSolutionForProblem(problem.id));
                            }}
                            className="p-1 text-gray-400 hover:text-white transition-colors"
                          >
                            <Edit2 className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => handleRemoveSolution(problem.id)}
                            className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          setEditingSolutionId(problem.id);
                          setNewSolution('');
                        }}
                        className="w-full flex items-center justify-center space-x-2 bg-linkedin-card/30 hover:bg-linkedin-card/50 border border-dashed border-linkedin-border hover:border-linkedin text-white px-3 py-2 rounded-lg transition-all text-xs"
                      >
                        <Plus className="w-3 h-3" />
                        <span>Add Solution</span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Elevator Pitch */}
      <div className="bg-linkedin-card/30 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-white font-medium text-xs flex items-center">
            <Target className="w-4 h-4 text-linkedin-light mr-1" />
            Elevator Pitch
          </h4>
          {!isEditingElevatorPitch && (
            <button
              onClick={() => {
                setIsEditingElevatorPitch(true);
                setEditedElevatorPitch(elevatorPitch);
              }}
              className="p-1 text-gray-400 hover:text-white transition-colors"
            >
              <Edit2 className="w-3 h-3" />
            </button>
          )}
        </div>
        
        {isEditingElevatorPitch ? (
          <div className="space-y-2">
            <textarea
              value={editedElevatorPitch}
              onChange={(e) => setEditedElevatorPitch(e.target.value)}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={4}
              placeholder="Write a concise elevator pitch for your solution..."
            />
            <div className="flex items-center justify-end space-x-2">
              <button
                onClick={() => setIsEditingElevatorPitch(false)}
                className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveElevatorPitch}
                className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs flex items-center space-x-1"
              >
                <Save className="w-3 h-3" />
                <span>Save</span>
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-300 text-xs">
            {elevatorPitch || "No elevator pitch defined yet. Click the edit button to add one."}
          </p>
        )}
      </div>
      
      {/* Initial Business Model */}
      <div className="bg-linkedin-card/30 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-white font-medium text-xs flex items-center">
            <Users className="w-4 h-4 text-linkedin-light mr-1" />
            Initial Business Model
          </h4>
          {!isEditingBusinessModel && (
            <button
              onClick={() => {
                setIsEditingBusinessModel(true);
                setEditedBusinessModel(businessModel);
              }}
              className="p-1 text-gray-400 hover:text-white transition-colors"
            >
              <Edit2 className="w-3 h-3" />
            </button>
          )}
        </div>
        
        {isEditingBusinessModel ? (
          <div className="space-y-3">
            <div>
              <label className="block text-linkedin-light text-xs mb-1">WHO (Target Market)</label>
              <textarea
                value={editedBusinessModel.who}
                onChange={(e) => setEditedBusinessModel({...editedBusinessModel, who: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                rows={2}
                placeholder="Define your target market..."
              />
            </div>
            
            <div>
              <label className="block text-linkedin-light text-xs mb-1">WHAT (Value Proposition)</label>
              <textarea
                value={editedBusinessModel.what}
                onChange={(e) => setEditedBusinessModel({...editedBusinessModel, what: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                rows={2}
                placeholder="Define your value proposition..."
              />
            </div>
            
            <div>
              <label className="block text-linkedin-light text-xs mb-1">HOW (Revenue Model)</label>
              <textarea
                value={editedBusinessModel.how}
                onChange={(e) => setEditedBusinessModel({...editedBusinessModel, how: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                rows={2}
                placeholder="Define your revenue model..."
              />
            </div>
            
            <div>
              <label className="block text-linkedin-light text-xs mb-1">WHY (Market Opportunity)</label>
              <textarea
                value={editedBusinessModel.why}
                onChange={(e) => setEditedBusinessModel({...editedBusinessModel, why: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                rows={2}
                placeholder="Define the market opportunity..."
              />
            </div>
            
            <div className="flex items-center justify-end space-x-2 pt-2">
              <button
                onClick={() => setIsEditingBusinessModel(false)}
                className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveBusinessModel}
                className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs flex items-center space-x-1"
              >
                <Save className="w-3 h-3" />
                <span>Save</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-1">WHO (Target Market)</h5>
              <p className="text-gray-300 text-xs">
                {businessModel.who || "Not defined yet."}
              </p>
            </div>
            
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-1">WHAT (Value Proposition)</h5>
              <p className="text-gray-300 text-xs">
                {businessModel.what || "Not defined yet."}
              </p>
            </div>
            
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-1">HOW (Revenue Model)</h5>
              <p className="text-gray-300 text-xs">
                {businessModel.how || "Not defined yet."}
              </p>
            </div>
            
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-1">WHY (Market Opportunity)</h5>
              <p className="text-gray-300 text-xs">
                {businessModel.why || "Not defined yet."}
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-linkedin-border mt-4">
        <div className="flex items-center space-x-3">
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
        <button
          onClick={onContinue}
          className="flex items-center space-x-2 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-4 py-1.5 rounded-lg transition-all text-xs"
        >
          <span>Continue to Validation</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default IdeationInputs;