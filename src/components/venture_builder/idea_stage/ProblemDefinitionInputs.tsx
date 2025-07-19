import React, { useState } from 'react';
import { 
  Plus, 
  Trash2, 
  Edit2, 
  Save, 
  ArrowRight,
  MessageSquare,
  AlertTriangle,
  Check,
  X
} from 'lucide-react';

interface Problem {
  id: number;
  description: string;
  size: number; // percentage of problem size
  impact: 'high' | 'medium' | 'low';
  validation: string[];
}

interface ProblemDefinitionInputsProps {
  problems: Problem[];
  onUpdateProblems: (problems: Problem[]) => void;
  onContinue: () => void;
  onSkip: () => void;
  onSaveDraft: () => void;
}

const ProblemDefinitionInputs: React.FC<ProblemDefinitionInputsProps> = ({ 
  problems, 
  onUpdateProblems, 
  onContinue, 
  onSkip, 
  onSaveDraft 
}) => {
  const [editingProblemId, setEditingProblemId] = useState<number | null>(null);
  const [newProblem, setNewProblem] = useState<Partial<Problem>>({
    description: '',
    size: 0,
    impact: 'medium',
    validation: []
  });
  const [isAddingProblem, setIsAddingProblem] = useState(false);
  const [validationPoint, setValidationPoint] = useState('');

  const handleAddProblem = () => {
    if (newProblem.description && newProblem.size) {
      const problem: Problem = {
        id: Date.now(),
        description: newProblem.description,
        size: newProblem.size,
        impact: newProblem.impact as 'high' | 'medium' | 'low',
        validation: newProblem.validation || []
      };
      
      onUpdateProblems([...problems, problem]);
      setNewProblem({
        description: '',
        size: 0,
        impact: 'medium',
        validation: []
      });
      setIsAddingProblem(false);
    }
  };

  const handleEditProblem = (problem: Problem) => {
    setEditingProblemId(problem.id);
    setNewProblem({
      description: problem.description,
      size: problem.size,
      impact: problem.impact,
      validation: [...problem.validation]
    });
  };

  const handleSaveEdit = () => {
    if (editingProblemId && newProblem.description && newProblem.size) {
      const updatedProblems = problems.map(problem => 
        problem.id === editingProblemId 
          ? {
              ...problem,
              description: newProblem.description || problem.description,
              size: newProblem.size || problem.size,
              impact: newProblem.impact as 'high' | 'medium' | 'low' || problem.impact,
              validation: newProblem.validation || problem.validation
            }
          : problem
      );
      
      onUpdateProblems(updatedProblems);
      setEditingProblemId(null);
      setNewProblem({
        description: '',
        size: 0,
        impact: 'medium',
        validation: []
      });
    }
  };

  const handleRemoveProblem = (id: number) => {
    onUpdateProblems(problems.filter(problem => problem.id !== id));
  };

  const handleAddValidationPoint = () => {
    if (validationPoint.trim()) {
      setNewProblem({
        ...newProblem,
        validation: [...(newProblem.validation || []), validationPoint.trim()]
      });
      setValidationPoint('');
    }
  };

  const handleRemoveValidationPoint = (index: number) => {
    setNewProblem({
      ...newProblem,
      validation: (newProblem.validation || []).filter((_, i) => i !== index)
    });
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
        <MessageSquare className="w-5 h-5 text-linkedin-light mr-2" />
        Problem Definition
      </h3>
      
      <p className="text-gray-300 text-xs mb-4">
        Define the key market problems your venture will address. The AI has pre-filled some problems based on the market research, but you can edit, remove, or add new ones.
      </p>
      
      {/* Problems List */}
      <div className="space-y-3 mb-4">
        {problems.length === 0 && !isAddingProblem && (
          <div className="bg-linkedin-card/30 rounded-lg p-4 text-center">
            <AlertTriangle className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <p className="text-gray-300 text-xs">No problems defined yet. Add a problem to get started.</p>
          </div>
        )}
        
        {problems.map((problem) => (
          <div 
            key={problem.id} 
            className={`bg-linkedin-card/30 rounded-lg p-4 ${
              editingProblemId === problem.id ? 'border border-linkedin-light' : ''
            }`}
          >
            {editingProblemId === problem.id ? (
              <div className="space-y-3">
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Problem Description</label>
                  <textarea
                    value={newProblem.description}
                    onChange={(e) => setNewProblem({...newProblem, description: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                    rows={3}
                    placeholder="Describe the market problem..."
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-300 text-xs mb-1">Problem Size (%)</label>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={newProblem.size}
                      onChange={(e) => setNewProblem({...newProblem, size: parseInt(e.target.value) || 0})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                      placeholder="e.g., 25"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-xs mb-1">Impact Level</label>
                    <select
                      value={newProblem.impact}
                      onChange={(e) => setNewProblem({...newProblem, impact: e.target.value as 'high' | 'medium' | 'low'})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin text-xs"
                    >
                      <option value="high" className="bg-slate-800">High Impact</option>
                      <option value="medium" className="bg-slate-800">Medium Impact</option>
                      <option value="low" className="bg-slate-800">Low Impact</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Validation Points</label>
                  <div className="space-y-2 mb-2">
                    {(newProblem.validation || []).map((point, index) => (
                      <div key={index} className="flex items-center justify-between bg-linkedin-card/50 rounded-lg p-2">
                        <span className="text-gray-300 text-xs">{point}</span>
                        <button
                          onClick={() => handleRemoveValidationPoint(index)}
                          className="text-gray-400 hover:text-red-400 transition-colors"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={validationPoint}
                      onChange={(e) => setValidationPoint(e.target.value)}
                      className="flex-1 bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                      placeholder="Add validation point..."
                    />
                    <button
                      onClick={handleAddValidationPoint}
                      className="bg-linkedin hover:bg-linkedin-dark text-white p-2 rounded-lg transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center justify-end space-x-2 pt-2">
                  <button
                    onClick={() => {
                      setEditingProblemId(null);
                      setNewProblem({
                        description: '',
                        size: 0,
                        impact: 'medium',
                        validation: []
                      });
                    }}
                    className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-3 py-1 rounded-lg transition-colors text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveEdit}
                    className="bg-linkedin hover:bg-linkedin-dark text-white px-3 py-1 rounded-lg transition-colors text-xs flex items-center space-x-1"
                  >
                    <Save className="w-3 h-3" />
                    <span>Save</span>
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="text-white font-medium text-xs">{problem.description}</h4>
                      <span className={`px-2 py-0.5 rounded-full text-xs ${getImpactColor(problem.impact)}`}>
                        {problem.impact.charAt(0).toUpperCase() + problem.impact.slice(1)} Impact
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
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => handleEditProblem(problem)}
                      className="p-1 text-gray-400 hover:text-white transition-colors"
                    >
                      <Edit2 className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => handleRemoveProblem(problem.id)}
                      className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                
                {problem.validation && problem.validation.length > 0 && (
                  <div className="mt-2">
                    <h5 className="text-xs text-gray-400 mb-1">Validation Points:</h5>
                    <div className="space-y-1">
                      {problem.validation.map((point, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <Check className="w-3 h-3 text-linkedin-light mt-0.5" />
                          <span className="text-gray-300 text-xs">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
        
        {/* Add New Problem Form */}
        {isAddingProblem && (
          <div className="bg-linkedin-card/30 rounded-lg p-4 border border-linkedin-light">
            <div className="space-y-3">
              <div>
                <label className="block text-gray-300 text-xs mb-1">Problem Description</label>
                <textarea
                  value={newProblem.description}
                  onChange={(e) => setNewProblem({...newProblem, description: e.target.value})}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={3}
                  placeholder="Describe the market problem..."
                />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Problem Size (%)</label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={newProblem.size}
                    onChange={(e) => setNewProblem({...newProblem, size: parseInt(e.target.value) || 0})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                    placeholder="e.g., 25"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Impact Level</label>
                  <select
                    value={newProblem.impact}
                    onChange={(e) => setNewProblem({...newProblem, impact: e.target.value as 'high' | 'medium' | 'low'})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin text-xs"
                  >
                    <option value="high" className="bg-slate-800">High Impact</option>
                    <option value="medium" className="bg-slate-800">Medium Impact</option>
                    <option value="low" className="bg-slate-800">Low Impact</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 text-xs mb-1">Validation Points</label>
                <div className="space-y-2 mb-2">
                  {(newProblem.validation || []).map((point, index) => (
                    <div key={index} className="flex items-center justify-between bg-linkedin-card/50 rounded-lg p-2">
                      <span className="text-gray-300 text-xs">{point}</span>
                      <button
                        onClick={() => handleRemoveValidationPoint(index)}
                        className="text-gray-400 hover:text-red-400 transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={validationPoint}
                    onChange={(e) => setValidationPoint(e.target.value)}
                    className="flex-1 bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                    placeholder="Add validation point..."
                  />
                  <button
                    onClick={handleAddValidationPoint}
                    className="bg-linkedin hover:bg-linkedin-dark text-white p-2 rounded-lg transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-end space-x-2 pt-2">
                <button
                  onClick={() => {
                    setIsAddingProblem(false);
                    setNewProblem({
                      description: '',
                      size: 0,
                      impact: 'medium',
                      validation: []
                    });
                  }}
                  className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-3 py-1 rounded-lg transition-colors text-xs"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddProblem}
                  className="bg-linkedin hover:bg-linkedin-dark text-white px-3 py-1 rounded-lg transition-colors text-xs flex items-center space-x-1"
                >
                  <Save className="w-3 h-3" />
                  <span>Save</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Add Problem Button */}
      {!isAddingProblem && (
        <button
          onClick={() => setIsAddingProblem(true)}
          className="w-full flex items-center justify-center space-x-2 bg-linkedin-card/30 hover:bg-linkedin-card/50 border border-dashed border-linkedin-border hover:border-linkedin text-white px-4 py-3 rounded-lg transition-all text-xs"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Problem</span>
        </button>
      )}
      
      {/* AI-Generated Problem Suggestions */}
      <div className="bg-linkedin-card/30 rounded-lg p-4 mt-4">
        <h4 className="text-white font-medium text-xs mb-2 flex items-center">
          <MessageSquare className="w-4 h-4 text-linkedin-light mr-1" />
          AI-Suggested Problems
        </h4>
        <div className="space-y-2">
          <div className="bg-linkedin-card/50 rounded-lg p-3 cursor-pointer hover:bg-linkedin-card/70 transition-colors">
            <div className="flex items-center justify-between">
              <p className="text-gray-300 text-xs">Limited access to digital payment solutions for SMEs in MENA region</p>
              <span className="text-linkedin-light text-xs font-medium">35%</span>
            </div>
          </div>
          <div className="bg-linkedin-card/50 rounded-lg p-3 cursor-pointer hover:bg-linkedin-card/70 transition-colors">
            <div className="flex items-center justify-between">
              <p className="text-gray-300 text-xs">High cross-border transaction fees limiting regional e-commerce growth</p>
              <span className="text-linkedin-light text-xs font-medium">28%</span>
            </div>
          </div>
          <div className="bg-linkedin-card/50 rounded-lg p-3 cursor-pointer hover:bg-linkedin-card/70 transition-colors">
            <div className="flex items-center justify-between">
              <p className="text-gray-300 text-xs">Lack of financial inclusion for unbanked population</p>
              <span className="text-linkedin-light text-xs font-medium">42%</span>
            </div>
          </div>
        </div>
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
          <span>Continue to Ideation</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default ProblemDefinitionInputs;