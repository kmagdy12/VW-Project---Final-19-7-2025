import React, { useState } from 'react';
import { 
  Save, 
  ArrowRight,
  ArrowLeft,
  Edit2,
  Upload,
  Code,
  Plus,
  Trash2
} from 'lucide-react';

interface UserFlow {
  id: number;
  name: string;
  description: string;
  steps: {
    id: number;
    name: string;
    description: string;
    interaction: string;
    feedback: string;
  }[];
}

interface PrototypeData {
  userFlows: UserFlow[];
  interactionPatterns: string;
  feedbackMechanisms: string;
  accessibilityConsiderations: string;
  testingScenarios: string;
  prototypeTools: string;
}

interface PrototypeInputsProps {
  prototypeData: PrototypeData;
  onUpdatePrototype: (data: PrototypeData) => void;
  onContinue: () => void;
  onBack: () => void;
  onSkip: () => void;
  onSaveDraft: () => void;
}

const PrototypeInputs: React.FC<PrototypeInputsProps> = ({ 
  prototypeData, 
  onUpdatePrototype, 
  onContinue, 
  onBack,
  onSkip, 
  onSaveDraft 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(prototypeData);
  const [activeTab, setActiveTab] = useState<'flows' | 'details'>('flows');
  const [activeFlowId, setActiveFlowId] = useState<number | null>(null);
  const [isAddingFlow, setIsAddingFlow] = useState(false);
  const [isAddingStep, setIsAddingStep] = useState(false);
  const [newFlow, setNewFlow] = useState({ name: '', description: '' });
  const [newStep, setNewStep] = useState({ 
    name: '', 
    description: '', 
    interaction: '',
    feedback: ''
  });

  const handleSave = () => {
    onUpdatePrototype(editedData);
    setIsEditing(false);
  };

  const handleAddFlow = () => {
    if (newFlow.name) {
      const flow: UserFlow = {
        id: Date.now(),
        name: newFlow.name,
        description: newFlow.description,
        steps: []
      };
      
      setEditedData({
        ...editedData,
        userFlows: [...editedData.userFlows, flow]
      });
      
      setNewFlow({ name: '', description: '' });
      setIsAddingFlow(false);
      setActiveFlowId(flow.id);
    }
  };

  const handleAddStep = (flowId: number) => {
    if (newStep.name) {
      const step = {
        id: Date.now(),
        name: newStep.name,
        description: newStep.description,
        interaction: newStep.interaction,
        feedback: newStep.feedback
      };
      
      const updatedFlows = editedData.userFlows.map(flow => {
        if (flow.id === flowId) {
          return {
            ...flow,
            steps: [...flow.steps, step]
          };
        }
        return flow;
      });
      
      setEditedData({
        ...editedData,
        userFlows: updatedFlows
      });
      
      setNewStep({ 
        name: '', 
        description: '', 
        interaction: '',
        feedback: ''
      });
      setIsAddingStep(false);
    }
  };

  const handleRemoveFlow = (flowId: number) => {
    setEditedData({
      ...editedData,
      userFlows: editedData.userFlows.filter(flow => flow.id !== flowId)
    });
    
    if (activeFlowId === flowId) {
      setActiveFlowId(null);
    }
  };

  const handleRemoveStep = (flowId: number, stepId: number) => {
    const updatedFlows = editedData.userFlows.map(flow => {
      if (flow.id === flowId) {
        return {
          ...flow,
          steps: flow.steps.filter(step => step.id !== stepId)
        };
      }
      return flow;
    });
    
    setEditedData({
      ...editedData,
      userFlows: updatedFlows
    });
  };

  return (
    <div className="p-6 h-full overflow-y-auto space-y-4 text-sm">
      <h3 className="text-base font-semibold text-white mb-3 flex items-center">
        <Code className="w-5 h-5 text-linkedin-light mr-2" />
        Interactive Prototype
      </h3>
      
      <p className="text-gray-300 text-xs mb-4">
        Define the interactive prototype for your product. This will allow you to test and validate your product concept before full development.
      </p>
      
      {/* Tabs */}
      <div className="flex items-center space-x-2 mb-4">
        <button
          onClick={() => setActiveTab('flows')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeTab === 'flows'
              ? 'bg-linkedin text-white'
              : 'bg-linkedin-card/50 text-gray-300 hover:text-white hover:bg-linkedin-card'
          }`}
        >
          User Flows
        </button>
        <button
          onClick={() => setActiveTab('details')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeTab === 'details'
              ? 'bg-linkedin text-white'
              : 'bg-linkedin-card/50 text-gray-300 hover:text-white hover:bg-linkedin-card'
          }`}
        >
          Prototype Details
        </button>
      </div>
      
      {/* User Flows Tab */}
      {activeTab === 'flows' && (
        <div className="space-y-4">
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-white font-medium text-xs">User Flows</h4>
              {isEditing && (
                <button
                  onClick={() => setIsAddingFlow(true)}
                  className="p-1 text-linkedin-light hover:text-white transition-colors"
                >
                  <Plus className="w-3 h-3" />
                </button>
              )}
            </div>
            
            {isAddingFlow && (
              <div className="bg-linkedin-card/50 rounded-lg p-3 mb-3 border border-linkedin-light">
                <div className="space-y-2">
                  <div>
                    <label className="block text-gray-300 text-xs mb-1">Flow Name</label>
                    <input
                      type="text"
                      value={newFlow.name}
                      onChange={(e) => setNewFlow({...newFlow, name: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                      placeholder="e.g., User Registration, Payment Process, Content Creation"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-xs mb-1">Description</label>
                    <textarea
                      value={newFlow.description}
                      onChange={(e) => setNewFlow({...newFlow, description: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                      rows={2}
                      placeholder="Describe this user flow..."
                    />
                  </div>
                  
                  <div className="flex items-center justify-end space-x-2">
                    <button
                      onClick={() => setIsAddingFlow(false)}
                      className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleAddFlow}
                      className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs"
                    >
                      Add Flow
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            <div className="space-y-2">
              {editedData.userFlows.map((flow) => (
                <div key={flow.id} className="bg-linkedin-card/50 rounded-lg overflow-hidden">
                  <div 
                    className="p-3 cursor-pointer flex items-center justify-between"
                    onClick={() => setActiveFlowId(activeFlowId === flow.id ? null : flow.id)}
                  >
                    <div>
                      <h5 className="text-white text-xs font-medium">{flow.name}</h5>
                      <p className="text-gray-400 text-xs">{flow.description}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {isEditing && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveFlow(flow.id);
                          }}
                          className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      )}
                      <div className="w-5 h-5 flex items-center justify-center">
                        {activeFlowId === flow.id ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-400">
                            <path d="M18 15l-6-6-6 6"></path>
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-400">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {activeFlowId === flow.id && (
                    <div className="p-3 border-t border-linkedin-border/30">
                      <h6 className="text-linkedin-light text-xs font-medium mb-2">Flow Steps</h6>
                      
                      {isEditing && (
                        <button
                          onClick={() => setIsAddingStep(true)}
                          className="w-full flex items-center justify-center space-x-2 bg-linkedin-card/30 hover:bg-linkedin-card/50 border border-dashed border-linkedin-border hover:border-linkedin text-white px-3 py-2 rounded-lg transition-all text-xs mb-3"
                        >
                          <Plus className="w-3 h-3" />
                          <span>Add Step</span>
                        </button>
                      )}
                      
                      {isAddingStep && (
                        <div className="bg-linkedin-card/30 rounded-lg p-3 mb-3 border border-linkedin-light">
                          <div className="space-y-2">
                            <div>
                              <label className="block text-gray-300 text-xs mb-1">Step Name</label>
                              <input
                                type="text"
                                value={newStep.name}
                                onChange={(e) => setNewStep({...newStep, name: e.target.value})}
                                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                                placeholder="e.g., Enter Email, Verify OTP, Complete Profile"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-gray-300 text-xs mb-1">Description</label>
                              <textarea
                                value={newStep.description}
                                onChange={(e) => setNewStep({...newStep, description: e.target.value})}
                                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                                rows={2}
                                placeholder="Describe this step..."
                              />
                            </div>
                            
                            <div>
                              <label className="block text-gray-300 text-xs mb-1">User Interaction</label>
                              <textarea
                                value={newStep.interaction}
                                onChange={(e) => setNewStep({...newStep, interaction: e.target.value})}
                                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                                rows={2}
                                placeholder="Describe the user interaction in this step..."
                              />
                            </div>
                            
                            <div>
                              <label className="block text-gray-300 text-xs mb-1">System Feedback</label>
                              <textarea
                                value={newStep.feedback}
                                onChange={(e) => setNewStep({...newStep, feedback: e.target.value})}
                                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                                rows={2}
                                placeholder="Describe the system feedback in this step..."
                              />
                            </div>
                            
                            <div className="flex items-center justify-end space-x-2">
                              <button
                                onClick={() => setIsAddingStep(false)}
                                className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
                              >
                                Cancel
                              </button>
                              <button
                                onClick={() => handleAddStep(flow.id)}
                                className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs"
                              >
                                Add Step
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {flow.steps.length > 0 ? (
                        <div className="space-y-2">
                          {flow.steps.map((step, index) => (
                            <div key={step.id} className="bg-linkedin-card/30 rounded-lg p-3">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center space-x-2">
                                  <div className="w-5 h-5 rounded-full bg-linkedin-light flex items-center justify-center text-white text-xs font-medium">
                                    {index + 1}
                                  </div>
                                  <h6 className="text-white text-xs font-medium">{step.name}</h6>
                                </div>
                                {isEditing && (
                                  <button
                                    onClick={() => handleRemoveStep(flow.id, step.id)}
                                    className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                                  >
                                    <Trash2 className="w-3 h-3" />
                                  </button>
                                )}
                              </div>
                              
                              <div className="space-y-1 ml-7">
                                <p className="text-gray-300 text-xs">{step.description}</p>
                                
                                <div className="mt-2">
                                  <p className="text-linkedin-light text-xs font-medium">User Interaction:</p>
                                  <p className="text-gray-300 text-xs">{step.interaction}</p>
                                </div>
                                
                                <div className="mt-2">
                                  <p className="text-linkedin-light text-xs font-medium">System Feedback:</p>
                                  <p className="text-gray-300 text-xs">{step.feedback}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-400 text-xs">No steps defined yet.</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
              
              {editedData.userFlows.length === 0 && (
                <p className="text-gray-400 text-xs">No user flows defined yet.</p>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Prototype Details Tab */}
      {activeTab === 'details' && (
        <div className="bg-linkedin-card/30 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-white font-medium text-xs">Prototype Details</h4>
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="p-1 text-gray-400 hover:text-white transition-colors"
              >
                <Edit2 className="w-3 h-3" />
              </button>
            )}
          </div>
          
          {isEditing ? (
            <div className="space-y-3">
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Interaction Patterns</label>
                <textarea
                  value={editedData.interactionPatterns}
                  onChange={(e) => setEditedData({...editedData, interactionPatterns: e.target.value})}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={3}
                  placeholder="Describe common interaction patterns used throughout the prototype..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Feedback Mechanisms</label>
                <textarea
                  value={editedData.feedbackMechanisms}
                  onChange={(e) => setEditedData({...editedData, feedbackMechanisms: e.target.value})}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={3}
                  placeholder="Describe how the system provides feedback to users..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Accessibility Considerations</label>
                <textarea
                  value={editedData.accessibilityConsiderations}
                  onChange={(e) => setEditedData({...editedData, accessibilityConsiderations: e.target.value})}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={3}
                  placeholder="Describe accessibility considerations for the prototype..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Testing Scenarios</label>
                <textarea
                  value={editedData.testingScenarios}
                  onChange={(e) => setEditedData({...editedData, testingScenarios: e.target.value})}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={3}
                  placeholder="Describe testing scenarios for the prototype..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Prototype Tools</label>
                <textarea
                  value={editedData.prototypeTools}
                  onChange={(e) => setEditedData({...editedData, prototypeTools: e.target.value})}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Describe the tools used to create the prototype..."
                />
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Interaction Patterns</h5>
                <p className="text-gray-300 text-xs">{prototypeData.interactionPatterns || "Not defined yet."}</p>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Feedback Mechanisms</h5>
                <p className="text-gray-300 text-xs">{prototypeData.feedbackMechanisms || "Not defined yet."}</p>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Accessibility Considerations</h5>
                <p className="text-gray-300 text-xs">{prototypeData.accessibilityConsiderations || "Not defined yet."}</p>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Testing Scenarios</h5>
                <p className="text-gray-300 text-xs">{prototypeData.testingScenarios || "Not defined yet."}</p>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Prototype Tools</h5>
                <p className="text-gray-300 text-xs">{prototypeData.prototypeTools || "Not defined yet."}</p>
              </div>
            </div>
          )}
        </div>
      )}
      
      {/* Upload Prototype */}
      <div className="bg-linkedin-card/30 rounded-lg p-4 mb-4">
        <h4 className="text-white font-medium text-xs mb-3">Upload Prototype</h4>
        <button
          className="w-full border-2 border-dashed border-linkedin-border rounded-lg p-6 flex flex-col items-center justify-center hover:border-linkedin transition-colors"
        >
          <Upload className="w-10 h-10 text-linkedin-light mb-3" />
          <p className="text-white font-medium mb-1">Upload Prototype Files</p>
          <p className="text-gray-400 text-xs">Drag & drop files or click to browse</p>
        </button>
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
        <button
          onClick={onContinue}
          className="flex items-center space-x-2 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-4 py-1.5 rounded-lg transition-all text-xs"
        >
          <span>Continue to MVP</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default PrototypeInputs;