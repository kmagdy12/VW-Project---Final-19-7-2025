import React, { useState } from 'react';
import { 
  Calendar, 
  Edit2, 
  Save, 
  Plus, 
  Trash2
} from 'lucide-react';

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
  roadmapData: StrategyRoadmapData;
  onUpdateRoadmap: (data: StrategyRoadmapData) => void;
}

const StrategyRoadmapInputs: React.FC<StrategyRoadmapInputsProps> = ({ 
  roadmapData, 
  onUpdateRoadmap 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(roadmapData);
  const [editingPhaseId, setEditingPhaseId] = useState<number | null>(null);
  const [newItem, setNewItem] = useState('');
  const [currentItemType, setCurrentItemType] = useState<'objectives' | 'keyActivities' | 'requiredResources' | 'kpis'>('objectives');

  const handleSave = () => {
    onUpdateRoadmap(editedData);
    setIsEditing(false);
    setEditingPhaseId(null);
  };

  const handleAddPhase = () => {
    const newPhase: StrategyPhase = {
      id: Date.now(),
      title: 'New Phase',
      objectives: [],
      strategyFocus: '',
      duration: '',
      keyActivities: [],
      requiredResources: [],
      kpis: []
    };
    
    setEditedData({
      ...editedData,
      phases: [...editedData.phases, newPhase]
    });
    
    setEditingPhaseId(newPhase.id);
  };

  const handleRemovePhase = (id: number) => {
    setEditedData({
      ...editedData,
      phases: editedData.phases.filter(phase => phase.id !== id)
    });
    
    if (editingPhaseId === id) {
      setEditingPhaseId(null);
    }
  };

  const handleUpdatePhaseField = (id: number, field: string, value: string) => {
    setEditedData({
      ...editedData,
      phases: editedData.phases.map(phase => 
        phase.id === id ? { ...phase, [field]: value } : phase
      )
    });
  };

  const handleAddItem = (phaseId: number) => {
    if (newItem.trim()) {
      const updatedPhases = editedData.phases.map(phase => {
        if (phase.id === phaseId) {
          return {
            ...phase,
            [currentItemType]: [...phase[currentItemType], newItem.trim()]
          };
        }
        return phase;
      });
      
      setEditedData({
        ...editedData,
        phases: updatedPhases
      });
      
      setNewItem('');
    }
  };

  const handleRemoveItem = (phaseId: number, type: 'objectives' | 'keyActivities' | 'requiredResources' | 'kpis', index: number) => {
    const updatedPhases = editedData.phases.map(phase => {
      if (phase.id === phaseId) {
        return {
          ...phase,
          [type]: phase[type].filter((_, i) => i !== index)
        };
      }
      return phase;
    });
    
    setEditedData({
      ...editedData,
      phases: updatedPhases
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-white flex items-center">
          <Calendar className="w-5 h-5 text-linkedin-light mr-2" />
          Strategy Roadmap
        </h3>
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
        Define your strategy roadmap with phases, objectives, activities, resources, and KPIs.
      </p>
      
      {isEditing ? (
        <div className="space-y-4">
          {/* Add Phase Button */}
          <button
            onClick={handleAddPhase}
            className="w-full flex items-center justify-center space-x-2 bg-linkedin-card/30 hover:bg-linkedin-card/50 border border-dashed border-linkedin-border hover:border-linkedin text-white px-4 py-3 rounded-lg transition-all text-xs"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Phase</span>
          </button>
          
          {/* Strategy Phases */}
          {editedData.phases.map((phase) => (
            <div key={phase.id} className="bg-linkedin-card/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <input
                  type="text"
                  value={phase.title}
                  onChange={(e) => handleUpdatePhaseField(phase.id, 'title', e.target.value)}
                  className="bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-sm font-medium"
                  placeholder="Phase Title"
                />
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setEditingPhaseId(editingPhaseId === phase.id ? null : phase.id)}
                    className="p-1 text-gray-400 hover:text-white transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleRemovePhase(phase.id)}
                    className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {editingPhaseId === phase.id ? (
                <div className="space-y-3">
                  <div>
                    <label className="block text-linkedin-light text-xs mb-1">Strategy Focus</label>
                    <textarea
                      value={phase.strategyFocus}
                      onChange={(e) => handleUpdatePhaseField(phase.id, 'strategyFocus', e.target.value)}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                      rows={2}
                      placeholder="Define the strategic focus for this phase..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-linkedin-light text-xs mb-1">Duration</label>
                    <input
                      type="text"
                      value={phase.duration}
                      onChange={(e) => handleUpdatePhaseField(phase.id, 'duration', e.target.value)}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                      placeholder="e.g., 6 months, Q1-Q2 2025"
                    />
                  </div>
                  
                  {/* Objectives */}
                  <div>
                    <label className="block text-linkedin-light text-xs mb-1">Objectives</label>
                    <div className="space-y-2 mb-2">
                      {phase.objectives.map((objective, index) => (
                        <div key={index} className="flex items-center justify-between bg-linkedin-card/50 rounded-lg p-2">
                          <span className="text-gray-300 text-xs">{objective}</span>
                          <button
                            onClick={() => handleRemoveItem(phase.id, 'objectives', index)}
                            className="text-gray-400 hover:text-red-400 transition-colors"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                              <path d="M18 6L6 18M6 6l12 12"></path>
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={currentItemType === 'objectives' ? newItem : ''}
                        onChange={(e) => {
                          setCurrentItemType('objectives');
                          setNewItem(e.target.value);
                        }}
                        className="flex-1 bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                        placeholder="Add objective..."
                      />
                      <button
                        onClick={() => handleAddItem(phase.id)}
                        className="bg-linkedin hover:bg-linkedin-dark text-white p-2 rounded-lg transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Key Activities */}
                  <div>
                    <label className="block text-linkedin-light text-xs mb-1">Key Activities</label>
                    <div className="space-y-2 mb-2">
                      {phase.keyActivities.map((activity, index) => (
                        <div key={index} className="flex items-center justify-between bg-linkedin-card/50 rounded-lg p-2">
                          <span className="text-gray-300 text-xs">{activity}</span>
                          <button
                            onClick={() => handleRemoveItem(phase.id, 'keyActivities', index)}
                            className="text-gray-400 hover:text-red-400 transition-colors"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                              <path d="M18 6L6 18M6 6l12 12"></path>
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={currentItemType === 'keyActivities' ? newItem : ''}
                        onChange={(e) => {
                          setCurrentItemType('keyActivities');
                          setNewItem(e.target.value);
                        }}
                        className="flex-1 bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                        placeholder="Add key activity..."
                      />
                      <button
                        onClick={() => handleAddItem(phase.id)}
                        className="bg-linkedin hover:bg-linkedin-dark text-white p-2 rounded-lg transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Required Resources */}
                  <div>
                    <label className="block text-linkedin-light text-xs mb-1">Required Resources</label>
                    <div className="space-y-2 mb-2">
                      {phase.requiredResources.map((resource, index) => (
                        <div key={index} className="flex items-center justify-between bg-linkedin-card/50 rounded-lg p-2">
                          <span className="text-gray-300 text-xs">{resource}</span>
                          <button
                            onClick={() => handleRemoveItem(phase.id, 'requiredResources', index)}
                            className="text-gray-400 hover:text-red-400 transition-colors"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                              <path d="M18 6L6 18M6 6l12 12"></path>
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={currentItemType === 'requiredResources' ? newItem : ''}
                        onChange={(e) => {
                          setCurrentItemType('requiredResources');
                          setNewItem(e.target.value);
                        }}
                        className="flex-1 bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                        placeholder="Add required resource..."
                      />
                      <button
                        onClick={() => handleAddItem(phase.id)}
                        className="bg-linkedin hover:bg-linkedin-dark text-white p-2 rounded-lg transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  {/* KPIs */}
                  <div>
                    <label className="block text-linkedin-light text-xs mb-1">KPIs</label>
                    <div className="space-y-2 mb-2">
                      {phase.kpis.map((kpi, index) => (
                        <div key={index} className="flex items-center justify-between bg-linkedin-card/50 rounded-lg p-2">
                          <span className="text-gray-300 text-xs">{kpi}</span>
                          <button
                            onClick={() => handleRemoveItem(phase.id, 'kpis', index)}
                            className="text-gray-400 hover:text-red-400 transition-colors"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                              <path d="M18 6L6 18M6 6l12 12"></path>
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={currentItemType === 'kpis' ? newItem : ''}
                        onChange={(e) => {
                          setCurrentItemType('kpis');
                          setNewItem(e.target.value);
                        }}
                        className="flex-1 bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                        placeholder="Add KPI..."
                      />
                      <button
                        onClick={() => handleAddItem(phase.id)}
                        className="bg-linkedin hover:bg-linkedin-dark text-white p-2 rounded-lg transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <h5 className="text-linkedin-light text-xs font-medium mb-1">Strategy Focus</h5>
                    <p className="text-gray-300 text-xs">{phase.strategyFocus || "Not defined yet."}</p>
                  </div>
                  
                  <div>
                    <h5 className="text-linkedin-light text-xs font-medium mb-1">Duration</h5>
                    <p className="text-gray-300 text-xs">{phase.duration || "Not defined yet."}</p>
                  </div>
                  
                  <div>
                    <h5 className="text-linkedin-light text-xs font-medium mb-1">Objectives</h5>
                    {phase.objectives.length > 0 ? (
                      <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                        {phase.objectives.map((objective, index) => (
                          <li key={index}>{objective}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-400 text-xs">No objectives defined yet.</p>
                    )}
                  </div>
                  
                  <div>
                    <h5 className="text-linkedin-light text-xs font-medium mb-1">Key Activities</h5>
                    {phase.keyActivities.length > 0 ? (
                      <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                        {phase.keyActivities.map((activity, index) => (
                          <li key={index}>{activity}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-400 text-xs">No key activities defined yet.</p>
                    )}
                  </div>
                  
                  <div>
                    <h5 className="text-linkedin-light text-xs font-medium mb-1">Required Resources</h5>
                    {phase.requiredResources.length > 0 ? (
                      <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                        {phase.requiredResources.map((resource, index) => (
                          <li key={index}>{resource}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-400 text-xs">No required resources defined yet.</p>
                    )}
                  </div>
                  
                  <div>
                    <h5 className="text-linkedin-light text-xs font-medium mb-1">KPIs</h5>
                    {phase.kpis.length > 0 ? (
                      <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                        {phase.kpis.map((kpi, index) => (
                          <li key={index}>{kpi}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-400 text-xs">No KPIs defined yet.</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          <div className="flex items-center justify-end space-x-2 pt-2">
            <button
              onClick={() => {
                setIsEditing(false);
                setEditedData(roadmapData);
                setEditingPhaseId(null);
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
        </div>
      ) : (
        <div className="space-y-4">
          {roadmapData.phases.length > 0 ? (
            roadmapData.phases.map((phase) => (
              <div key={phase.id} className="bg-linkedin-card/30 rounded-lg p-4">
                <h4 className="text-white font-medium text-sm mb-3">{phase.title}</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <h5 className="text-linkedin-light text-xs font-medium mb-1">Strategy Focus</h5>
                    <p className="text-gray-300 text-xs">{phase.strategyFocus || "Not defined yet."}</p>
                  </div>
                  
                  <div>
                    <h5 className="text-linkedin-light text-xs font-medium mb-1">Duration</h5>
                    <p className="text-gray-300 text-xs">{phase.duration || "Not defined yet."}</p>
                  </div>
                  
                  <div>
                    <h5 className="text-linkedin-light text-xs font-medium mb-1">Objectives</h5>
                    {phase.objectives.length > 0 ? (
                      <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                        {phase.objectives.map((objective, index) => (
                          <li key={index}>{objective}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-400 text-xs">No objectives defined yet.</p>
                    )}
                  </div>
                  
                  <div>
                    <h5 className="text-linkedin-light text-xs font-medium mb-1">Key Activities</h5>
                    {phase.keyActivities.length > 0 ? (
                      <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                        {phase.keyActivities.map((activity, index) => (
                          <li key={index}>{activity}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-400 text-xs">No key activities defined yet.</p>
                    )}
                  </div>
                  
                  <div>
                    <h5 className="text-linkedin-light text-xs font-medium mb-1">Required Resources</h5>
                    {phase.requiredResources.length > 0 ? (
                      <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                        {phase.requiredResources.map((resource, index) => (
                          <li key={index}>{resource}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-400 text-xs">No required resources defined yet.</p>
                    )}
                  </div>
                  
                  <div>
                    <h5 className="text-linkedin-light text-xs font-medium mb-1">KPIs</h5>
                    {phase.kpis.length > 0 ? (
                      <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                        {phase.kpis.map((kpi, index) => (
                          <li key={index}>{kpi}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-400 text-xs">No KPIs defined yet.</p>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-linkedin-card/30 rounded-lg p-6 text-center">
              <p className="text-gray-400 text-sm">No strategy phases defined yet. Click the edit button to add phases to your roadmap.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StrategyRoadmapInputs;