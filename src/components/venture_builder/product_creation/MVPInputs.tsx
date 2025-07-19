import React, { useState } from 'react';
import { 
  Save, 
  ArrowRight,
  ArrowLeft,
  Edit2,
  Package,
  Plus,
  Trash2
} from 'lucide-react';

interface Feature {
  id: number;
  name: string;
  description: string;
  priority: 'must-have' | 'should-have' | 'could-have' | 'wont-have';
  technicalRequirements: string;
  developmentEffort: string;
}

interface MVPData {
  coreFeatures: Feature[];
  technicalArchitecture: string;
  developmentRoadmap: string;
  testingStrategy: string;
  launchPlan: string;
  feedbackCollection: string;
  iterationPlan: string;
}

interface MVPInputsProps {
  mvpData: MVPData;
  onUpdateMVP: (data: MVPData) => void;
  onContinue: () => void;
  onBack: () => void;
  onSkip: () => void;
  onSaveDraft: () => void;
  onExport: () => void;
}

const MVPInputs: React.FC<MVPInputsProps> = ({ 
  mvpData, 
  onUpdateMVP, 
  onContinue, 
  onBack,
  onSkip, 
  onSaveDraft,
  onExport
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(mvpData);
  const [activeTab, setActiveTab] = useState<'features' | 'technical' | 'launch'>('features');
  const [isAddingFeature, setIsAddingFeature] = useState(false);
  const [editingFeatureId, setEditingFeatureId] = useState<number | null>(null);
  const [newFeature, setNewFeature] = useState<Partial<Feature>>({
    name: '',
    description: '',
    priority: 'must-have',
    technicalRequirements: '',
    developmentEffort: ''
  });

  const handleSave = () => {
    onUpdateMVP(editedData);
    setIsEditing(false);
  };

  const handleAddFeature = () => {
    if (newFeature.name) {
      const feature: Feature = {
        id: Date.now(),
        name: newFeature.name,
        description: newFeature.description || '',
        priority: newFeature.priority as 'must-have' | 'should-have' | 'could-have' | 'wont-have',
        technicalRequirements: newFeature.technicalRequirements || '',
        developmentEffort: newFeature.developmentEffort || ''
      };
      
      setEditedData({
        ...editedData,
        coreFeatures: [...editedData.coreFeatures, feature]
      });
      
      setNewFeature({
        name: '',
        description: '',
        priority: 'must-have',
        technicalRequirements: '',
        developmentEffort: ''
      });
      
      setIsAddingFeature(false);
    }
  };

  const handleEditFeature = (feature: Feature) => {
    setEditingFeatureId(feature.id);
    setNewFeature({...feature});
  };

  const handleSaveFeatureEdit = () => {
    if (editingFeatureId && newFeature.name) {
      const updatedFeatures = editedData.coreFeatures.map(feature => 
        feature.id === editingFeatureId 
          ? {
              ...feature,
              name: newFeature.name || feature.name,
              description: newFeature.description || feature.description,
              priority: newFeature.priority as 'must-have' | 'should-have' | 'could-have' | 'wont-have' || feature.priority,
              technicalRequirements: newFeature.technicalRequirements || feature.technicalRequirements,
              developmentEffort: newFeature.developmentEffort || feature.developmentEffort
            }
          : feature
      );
      
      setEditedData({
        ...editedData,
        coreFeatures: updatedFeatures
      });
      
      setEditingFeatureId(null);
      setNewFeature({
        name: '',
        description: '',
        priority: 'must-have',
        technicalRequirements: '',
        developmentEffort: ''
      });
    }
  };

  const handleRemoveFeature = (id: number) => {
    setEditedData({
      ...editedData,
      coreFeatures: editedData.coreFeatures.filter(feature => feature.id !== id)
    });
    
    if (editingFeatureId === id) {
      setEditingFeatureId(null);
      setNewFeature({
        name: '',
        description: '',
        priority: 'must-have',
        technicalRequirements: '',
        developmentEffort: ''
      });
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'must-have':
        return 'bg-red-500/20 text-red-400';
      case 'should-have':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'could-have':
        return 'bg-blue-500/20 text-blue-400';
      case 'wont-have':
        return 'bg-gray-500/20 text-gray-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="p-6 h-full overflow-y-auto space-y-4 text-sm">
      <h3 className="text-base font-semibold text-white mb-3 flex items-center">
        <Package className="w-5 h-5 text-linkedin-light mr-2" />
        Minimum Viable Product (MVP)
      </h3>
      
      <p className="text-gray-300 text-xs mb-4">
        Define your Minimum Viable Product (MVP). This will be the first version of your product with just enough features to satisfy early users.
      </p>
      
      {/* Tabs */}
      <div className="flex items-center space-x-2 mb-4">
        <button
          onClick={() => setActiveTab('features')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeTab === 'features'
              ? 'bg-linkedin text-white'
              : 'bg-linkedin-card/50 text-gray-300 hover:text-white hover:bg-linkedin-card'
          }`}
        >
          Core Features
        </button>
        <button
          onClick={() => setActiveTab('technical')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeTab === 'technical'
              ? 'bg-linkedin text-white'
              : 'bg-linkedin-card/50 text-gray-300 hover:text-white hover:bg-linkedin-card'
          }`}
        >
          Technical Details
        </button>
        <button
          onClick={() => setActiveTab('launch')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeTab === 'launch'
              ? 'bg-linkedin text-white'
              : 'bg-linkedin-card/50 text-gray-300 hover:text-white hover:bg-linkedin-card'
          }`}
        >
          Launch & Iteration
        </button>
      </div>
      
      {/* Core Features Tab */}
      {activeTab === 'features' && (
        <div className="space-y-4">
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-white font-medium text-xs">Core Features</h4>
              {isEditing && !isAddingFeature && !editingFeatureId && (
                <button
                  onClick={() => setIsAddingFeature(true)}
                  className="p-1 text-linkedin-light hover:text-white transition-colors"
                >
                  <Plus className="w-3 h-3" />
                </button>
              )}
            </div>
            
            {isAddingFeature && (
              <div className="bg-linkedin-card/50 rounded-lg p-3 mb-3 border border-linkedin-light">
                <div className="space-y-2">
                  <div>
                    <label className="block text-gray-300 text-xs mb-1">Feature Name</label>
                    <input
                      type="text"
                      value={newFeature.name}
                      onChange={(e) => setNewFeature({...newFeature, name: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                      placeholder="e.g., User Authentication, Payment Processing, Content Upload"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-xs mb-1">Description</label>
                    <textarea
                      value={newFeature.description}
                      onChange={(e) => setNewFeature({...newFeature, description: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                      rows={2}
                      placeholder="Describe this feature..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-xs mb-1">Priority</label>
                    <select
                      value={newFeature.priority}
                      onChange={(e) => setNewFeature({...newFeature, priority: e.target.value as 'must-have' | 'should-have' | 'could-have' | 'wont-have'})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin text-xs"
                    >
                      <option value="must-have" className="bg-slate-800">Must Have</option>
                      <option value="should-have" className="bg-slate-800">Should Have</option>
                      <option value="could-have" className="bg-slate-800">Could Have</option>
                      <option value="wont-have" className="bg-slate-800">Won't Have</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-xs mb-1">Technical Requirements</label>
                    <textarea
                      value={newFeature.technicalRequirements}
                      onChange={(e) => setNewFeature({...newFeature, technicalRequirements: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                      rows={2}
                      placeholder="Describe the technical requirements for this feature..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-xs mb-1">Development Effort</label>
                    <select
                      value={newFeature.developmentEffort}
                      onChange={(e) => setNewFeature({...newFeature, developmentEffort: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin text-xs"
                    >
                      <option value="" className="bg-slate-800">Select effort level...</option>
                      <option value="Low" className="bg-slate-800">Low (1-3 days)</option>
                      <option value="Medium" className="bg-slate-800">Medium (1-2 weeks)</option>
                      <option value="High" className="bg-slate-800">High (2+ weeks)</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center justify-end space-x-2">
                    <button
                      onClick={() => {
                        setIsAddingFeature(false);
                        setNewFeature({
                          name: '',
                          description: '',
                          priority: 'must-have',
                          technicalRequirements: '',
                          developmentEffort: ''
                        });
                      }}
                      className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleAddFeature}
                      className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs"
                    >
                      Add Feature
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {editingFeatureId !== null && (
              <div className="bg-linkedin-card/50 rounded-lg p-3 mb-3 border border-linkedin-light">
                <div className="space-y-2">
                  <div>
                    <label className="block text-gray-300 text-xs mb-1">Feature Name</label>
                    <input
                      type="text"
                      value={newFeature.name}
                      onChange={(e) => setNewFeature({...newFeature, name: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                      placeholder="e.g., User Authentication, Payment Processing, Content Upload"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-xs mb-1">Description</label>
                    <textarea
                      value={newFeature.description}
                      onChange={(e) => setNewFeature({...newFeature, description: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                      rows={2}
                      placeholder="Describe this feature..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-xs mb-1">Priority</label>
                    <select
                      value={newFeature.priority}
                      onChange={(e) => setNewFeature({...newFeature, priority: e.target.value as 'must-have' | 'should-have' | 'could-have' | 'wont-have'})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin text-xs"
                    >
                      <option value="must-have" className="bg-slate-800">Must Have</option>
                      <option value="should-have" className="bg-slate-800">Should Have</option>
                      <option value="could-have" className="bg-slate-800">Could Have</option>
                      <option value="wont-have" className="bg-slate-800">Won't Have</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-xs mb-1">Technical Requirements</label>
                    <textarea
                      value={newFeature.technicalRequirements}
                      onChange={(e) => setNewFeature({...newFeature, technicalRequirements: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                      rows={2}
                      placeholder="Describe the technical requirements for this feature..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-xs mb-1">Development Effort</label>
                    <select
                      value={newFeature.developmentEffort}
                      onChange={(e) => setNewFeature({...newFeature, developmentEffort: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin text-xs"
                    >
                      <option value="" className="bg-slate-800">Select effort level...</option>
                      <option value="Low" className="bg-slate-800">Low (1-3 days)</option>
                      <option value="Medium" className="bg-slate-800">Medium (1-2 weeks)</option>
                      <option value="High" className="bg-slate-800">High (2+ weeks)</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center justify-end space-x-2">
                    <button
                      onClick={() => {
                        setEditingFeatureId(null);
                        setNewFeature({
                          name: '',
                          description: '',
                          priority: 'must-have',
                          technicalRequirements: '',
                          developmentEffort: ''
                        });
                      }}
                      className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveFeatureEdit}
                      className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            <div className="space-y-2">
              {editedData.coreFeatures.map((feature) => (
                <div key={feature.id} className="bg-linkedin-card/50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <h5 className="text-white text-xs font-medium">{feature.name}</h5>
                      <span className={`px-2 py-0.5 rounded-full text-xs ${getPriorityColor(feature.priority)}`}>
                        {feature.priority.replace('-', ' ')}
                      </span>
                    </div>
                    {isEditing && (
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleEditFeature(feature)}
                          className="p-1 text-gray-400 hover:text-white transition-colors"
                        >
                          <Edit2 className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => handleRemoveFeature(feature.id)}
                          className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-300 text-xs mb-2">{feature.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                    <div>
                      <p className="text-linkedin-light text-xs font-medium">Technical Requirements:</p>
                      <p className="text-gray-300 text-xs">{feature.technicalRequirements || "Not specified"}</p>
                    </div>
                    <div>
                      <p className="text-linkedin-light text-xs font-medium">Development Effort:</p>
                      <p className="text-gray-300 text-xs">{feature.developmentEffort || "Not specified"}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {editedData.coreFeatures.length === 0 && (
                <p className="text-gray-400 text-xs">No core features defined yet.</p>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Technical Details Tab */}
      {activeTab === 'technical' && (
        <div className="bg-linkedin-card/30 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-white font-medium text-xs">Technical Details</h4>
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
                <label className="block text-linkedin-light text-xs mb-1">Technical Architecture</label>
                <textarea
                  value={editedData.technicalArchitecture}
                  onChange={(e) => setEditedData({...editedData, technicalArchitecture: e.target.value})}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={4}
                  placeholder="Describe the technical architecture of your MVP..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Development Roadmap</label>
                <textarea
                  value={editedData.developmentRoadmap}
                  onChange={(e) => setEditedData({...editedData, developmentRoadmap: e.target.value})}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={4}
                  placeholder="Outline the development roadmap for your MVP..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Testing Strategy</label>
                <textarea
                  value={editedData.testingStrategy}
                  onChange={(e) => setEditedData({...editedData, testingStrategy: e.target.value})}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={4}
                  placeholder="Describe your testing strategy for the MVP..."
                />
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Technical Architecture</h5>
                <p className="text-gray-300 text-xs">{mvpData.technicalArchitecture || "Not defined yet."}</p>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Development Roadmap</h5>
                <p className="text-gray-300 text-xs">{mvpData.developmentRoadmap || "Not defined yet."}</p>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Testing Strategy</h5>
                <p className="text-gray-300 text-xs">{mvpData.testingStrategy || "Not defined yet."}</p>
              </div>
            </div>
          )}
        </div>
      )}
      
      {/* Launch & Iteration Tab */}
      {activeTab === 'launch' && (
        <div className="bg-linkedin-card/30 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-white font-medium text-xs">Launch & Iteration</h4>
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
                <label className="block text-linkedin-light text-xs mb-1">Launch Plan</label>
                <textarea
                  value={editedData.launchPlan}
                  onChange={(e) => setEditedData({...editedData, launchPlan: e.target.value})}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={4}
                  placeholder="Describe your launch plan for the MVP..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Feedback Collection</label>
                <textarea
                  value={editedData.feedbackCollection}
                  onChange={(e) => setEditedData({...editedData, feedbackCollection: e.target.value})}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={4}
                  placeholder="Describe how you will collect and analyze user feedback..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Iteration Plan</label>
                <textarea
                  value={editedData.iterationPlan}
                  onChange={(e) => setEditedData({...editedData, iterationPlan: e.target.value})}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={4}
                  placeholder="Describe your plan for iterating on the MVP based on feedback..."
                />
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Launch Plan</h5>
                <p className="text-gray-300 text-xs">{mvpData.launchPlan || "Not defined yet."}</p>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Feedback Collection</h5>
                <p className="text-gray-300 text-xs">{mvpData.feedbackCollection || "Not defined yet."}</p>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Iteration Plan</h5>
                <p className="text-gray-300 text-xs">{mvpData.iterationPlan || "Not defined yet."}</p>
              </div>
            </div>
          )}
        </div>
      )}
      
      {isEditing && (
        <div className="flex items-center justify-end space-x-2 pt-4 mt-4 border-t border-linkedin-border/30">
          <button
            onClick={() => {
              setIsEditing(false);
              setEditedData(mvpData);
            }}
            className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs flex items-center space-x-1"
          >
            <Save className="w-3 h-3" />
            <span>Save</span>
          </button>
        </div>
      )}
      
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
            <Save className="w-3 h-3" />
            <span>Export MVP Plan</span>
          </button>
          <button
            onClick={onContinue}
            className="flex items-center space-x-2 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-4 py-1.5 rounded-lg transition-all text-xs"
          >
            <span>Complete Product Creation</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MVPInputs;