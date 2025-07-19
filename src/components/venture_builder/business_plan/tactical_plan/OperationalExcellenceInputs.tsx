import React, { useState } from 'react';
import { 
  Edit2, 
  Save, 
  Plus, 
  Trash2
} from 'lucide-react';

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

interface OperationalExcellenceInputsProps {
  businessFunctions: BusinessFunction[];
  onUpdateBusinessFunctions: (functions: BusinessFunction[]) => void;
}

const OperationalExcellenceInputs: React.FC<OperationalExcellenceInputsProps> = ({ 
  businessFunctions, 
  onUpdateBusinessFunctions 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingFunctionId, setEditingFunctionId] = useState<number | null>(null);
  const [editingStageId, setEditingStageId] = useState<number | null>(null);
  const [newFunction, setNewFunction] = useState<Partial<BusinessFunction>>({
    name: '',
    workflowStages: []
  });
  const [newStage, setNewStage] = useState<Partial<WorkflowStage>>({
    name: '',
    teamStructure: ''
  });
  const [isAddingFunction, setIsAddingFunction] = useState(false);
  const [isAddingStage, setIsAddingStage] = useState(false);
  const [activeFunctionId, setActiveFunctionId] = useState<number | null>(null);

  const handleAddFunction = () => {
    if (newFunction.name) {
      const businessFunction: BusinessFunction = {
        id: Date.now(),
        name: newFunction.name,
        workflowStages: []
      };
      
      onUpdateBusinessFunctions([...businessFunctions, businessFunction]);
      setNewFunction({
        name: '',
        workflowStages: []
      });
      setIsAddingFunction(false);
      setActiveFunctionId(businessFunction.id);
    }
  };

  const handleEditFunction = (functionId: number, name: string) => {
    const updatedFunctions = businessFunctions.map(func => 
      func.id === functionId ? { ...func, name } : func
    );
    
    onUpdateBusinessFunctions(updatedFunctions);
  };

  const handleRemoveFunction = (id: number) => {
    onUpdateBusinessFunctions(businessFunctions.filter(func => func.id !== id));
    
    if (activeFunctionId === id) {
      setActiveFunctionId(null);
    }
  };

  const handleAddStage = (functionId: number) => {
    if (newStage.name) {
      const stage: WorkflowStage = {
        id: Date.now(),
        name: newStage.name,
        teamStructure: newStage.teamStructure || ''
      };
      
      const updatedFunctions = businessFunctions.map(func => {
        if (func.id === functionId) {
          return {
            ...func,
            workflowStages: [...func.workflowStages, stage]
          };
        }
        return func;
      });
      
      onUpdateBusinessFunctions(updatedFunctions);
      setNewStage({
        name: '',
        teamStructure: ''
      });
      setIsAddingStage(false);
    }
  };

  const handleEditStage = (functionId: number, stageId: number) => {
    const func = businessFunctions.find(f => f.id === functionId);
    const stage = func?.workflowStages.find(s => s.id === stageId);
    
    if (func && stage) {
      setEditingFunctionId(functionId);
      setEditingStageId(stageId);
      setNewStage({
        name: stage.name,
        teamStructure: stage.teamStructure
      });
    }
  };

  const handleSaveStageEdit = (functionId: number, stageId: number) => {
    if (newStage.name) {
      const updatedFunctions = businessFunctions.map(func => {
        if (func.id === functionId) {
          return {
            ...func,
            workflowStages: func.workflowStages.map(stage => 
              stage.id === stageId 
                ? { 
                    ...stage, 
                    name: newStage.name || stage.name,
                    teamStructure: newStage.teamStructure || stage.teamStructure
                  }
                : stage
            )
          };
        }
        return func;
      });
      
      onUpdateBusinessFunctions(updatedFunctions);
      setEditingFunctionId(null);
      setEditingStageId(null);
      setNewStage({
        name: '',
        teamStructure: ''
      });
    }
  };

  const handleRemoveStage = (functionId: number, stageId: number) => {
    const updatedFunctions = businessFunctions.map(func => {
      if (func.id === functionId) {
        return {
          ...func,
          workflowStages: func.workflowStages.filter(stage => stage.id !== stageId)
        };
      }
      return func;
    });
    
    onUpdateBusinessFunctions(updatedFunctions);
    
    if (editingFunctionId === functionId && editingStageId === stageId) {
      setEditingFunctionId(null);
      setEditingStageId(null);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-white">Operational Excellence</h3>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="p-1 text-gray-400 hover:text-white transition-colors"
          >
            <Edit2 className="w-4 h-4" />
          </button>
        )}
      </div>
      
      <p className="text-gray-300 text-xs mb-4">
        Define the key business functions, workflow stages, and team structure for your business. This will guide your operational processes and organizational structure.
      </p>
      
      {/* Business Functions */}
      <div className="space-y-4">
        {businessFunctions.length === 0 && !isAddingFunction && (
          <div className="bg-linkedin-card/30 rounded-lg p-6 text-center">
            <p className="text-gray-400 text-sm">No business functions defined yet. Click the button below to add a function.</p>
          </div>
        )}
        
        {businessFunctions.map((func) => (
          <div key={func.id} className="bg-linkedin-card/30 rounded-lg overflow-hidden">
            {/* Function Header */}
            <div className="p-4 bg-linkedin-card/50 flex items-center justify-between">
              {isEditing ? (
                <input
                  type="text"
                  value={func.name}
                  onChange={(e) => handleEditFunction(func.id, e.target.value)}
                  className="flex-1 bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                  placeholder="Function name..."
                />
              ) : (
                <h4 className="text-white font-medium text-sm">{func.name}</h4>
              )}
              
              <div className="flex items-center space-x-2">
                {isEditing && (
                  <button
                    onClick={() => handleRemoveFunction(func.id)}
                    className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                )}
                <button
                  onClick={() => setActiveFunctionId(activeFunctionId === func.id ? null : func.id)}
                  className="p-1 text-gray-400 hover:text-white transition-colors"
                >
                  {activeFunctionId === func.id ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M18 15l-6-6-6 6"></path>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  )}
                </button>
              </div>
            </div>
            
            {/* Workflow Stages */}
            {activeFunctionId === func.id && (
              <div className="p-4">
                <h5 className="text-linkedin-light text-xs font-medium mb-3">Workflow Stages</h5>
                
                <div className="space-y-3">
                  {func.workflowStages.length === 0 && !isAddingStage && (
                    <p className="text-gray-400 text-xs">No workflow stages defined yet. Click the button below to add a stage.</p>
                  )}
                  
                  {func.workflowStages.map((stage) => (
                    <div 
                      key={stage.id} 
                      className={`bg-linkedin-card/50 rounded-lg p-3 ${
                        editingFunctionId === func.id && editingStageId === stage.id ? 'border border-linkedin-light' : ''
                      }`}
                    >
                      {editingFunctionId === func.id && editingStageId === stage.id ? (
                        <div className="space-y-2">
                          <div>
                            <label className="block text-gray-300 text-xs mb-1">Stage Name</label>
                            <input
                              type="text"
                              value={newStage.name}
                              onChange={(e) => setNewStage({...newStage, name: e.target.value})}
                              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                              placeholder="Stage name..."
                            />
                          </div>
                          
                          <div>
                            <label className="block text-gray-300 text-xs mb-1">Team Structure</label>
                            <textarea
                              value={newStage.teamStructure}
                              onChange={(e) => setNewStage({...newStage, teamStructure: e.target.value})}
                              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                              rows={2}
                              placeholder="Define team structure for this stage..."
                            />
                          </div>
                          
                          <div className="flex items-center justify-end space-x-2 pt-2">
                            <button
                              onClick={() => {
                                setEditingFunctionId(null);
                                setEditingStageId(null);
                                setNewStage({
                                  name: '',
                                  teamStructure: ''
                                });
                              }}
                              className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={() => handleSaveStageEdit(func.id, stage.id)}
                              className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs flex items-center space-x-1"
                            >
                              <Save className="w-3 h-3" />
                              <span>Save</span>
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h6 className="text-white text-xs font-medium">{stage.name}</h6>
                            {isEditing && (
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() => handleEditStage(func.id, stage.id)}
                                  className="p-1 text-gray-400 hover:text-white transition-colors"
                                >
                                  <Edit2 className="w-3 h-3" />
                                </button>
                                <button
                                  onClick={() => handleRemoveStage(func.id, stage.id)}
                                  className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                                >
                                  <Trash2 className="w-3 h-3" />
                                </button>
                              </div>
                            )}
                          </div>
                          
                          <div>
                            <p className="text-gray-400 text-xs">Team Structure:</p>
                            <p className="text-gray-300 text-xs">{stage.teamStructure || "Not defined yet."}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {/* Add Stage Form */}
                  {isEditing && isAddingStage && activeFunctionId === func.id && (
                    <div className="bg-linkedin-card/50 rounded-lg p-3 border border-linkedin-light">
                      <div className="space-y-2">
                        <div>
                          <label className="block text-gray-300 text-xs mb-1">Stage Name</label>
                          <input
                            type="text"
                            value={newStage.name}
                            onChange={(e) => setNewStage({...newStage, name: e.target.value})}
                            className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                            placeholder="Stage name..."
                          />
                        </div>
                        
                        <div>
                          <label className="block text-gray-300 text-xs mb-1">Team Structure</label>
                          <textarea
                            value={newStage.teamStructure}
                            onChange={(e) => setNewStage({...newStage, teamStructure: e.target.value})}
                            className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                            rows={2}
                            placeholder="Define team structure for this stage..."
                          />
                        </div>
                        
                        <div className="flex items-center justify-end space-x-2 pt-2">
                          <button
                            onClick={() => {
                              setIsAddingStage(false);
                              setNewStage({
                                name: '',
                                teamStructure: ''
                              });
                            }}
                            className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => handleAddStage(func.id)}
                            className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs flex items-center space-x-1"
                          >
                            <Save className="w-3 h-3" />
                            <span>Save</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Add Stage Button */}
                  {isEditing && !isAddingStage && (
                    <button
                      onClick={() => setIsAddingStage(true)}
                      className="w-full flex items-center justify-center space-x-2 bg-linkedin-card/30 hover:bg-linkedin-card/50 border border-dashed border-linkedin-border hover:border-linkedin text-white px-3 py-2 rounded-lg transition-all text-xs"
                    >
                      <Plus className="w-3 h-3" />
                      <span>Add Workflow Stage</span>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
        
        {/* Add Function Form */}
        {isEditing && isAddingFunction && (
          <div className="bg-linkedin-card/30 rounded-lg p-4 border border-linkedin-light">
            <div className="space-y-3">
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Function Name</label>
                <input
                  type="text"
                  value={newFunction.name}
                  onChange={(e) => setNewFunction({...newFunction, name: e.target.value})}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                  placeholder="e.g., Marketing, Sales, Operations"
                />
              </div>
              
              <div className="flex items-center justify-end space-x-2 pt-2">
                <button
                  onClick={() => {
                    setIsAddingFunction(false);
                    setNewFunction({
                      name: '',
                      workflowStages: []
                    });
                  }}
                  className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddFunction}
                  className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs flex items-center space-x-1"
                >
                  <Save className="w-3 h-3" />
                  <span>Save</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Add Function Button */}
      {isEditing && !isAddingFunction && (
        <button
          onClick={() => setIsAddingFunction(true)}
          className="w-full flex items-center justify-center space-x-2 bg-linkedin-card/30 hover:bg-linkedin-card/50 border border-dashed border-linkedin-border hover:border-linkedin text-white px-4 py-3 rounded-lg transition-all text-xs"
        >
          <Plus className="w-4 h-4" />
          <span>Add Business Function</span>
        </button>
      )}
      
      {/* Edit Mode Toggle */}
      {isEditing && (
        <div className="flex items-center justify-end space-x-2 pt-2">
          <button
            onClick={() => setIsEditing(false)}
            className="bg-linkedin hover:bg-linkedin-dark text-white px-3 py-1.5 rounded-lg transition-colors text-xs flex items-center space-x-1"
          >
            <Save className="w-3 h-3" />
            <span>Done Editing</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default OperationalExcellenceInputs;