import React, { useState } from 'react';
import { 
  Target, 
  Edit2, 
  Save
} from 'lucide-react';

interface StrategyDirectionData {
  missionVision: {
    mission: string;
    vision: string;
  };
  strategicObjectives: string[];
  strategyPhases: {
    id: number;
    title: string;
    justification: string;
  }[];
}

interface StrategyDirectionInputsProps {
  directionData: StrategyDirectionData;
  onUpdateDirection: (data: StrategyDirectionData) => void;
}

const StrategyDirectionInputs: React.FC<StrategyDirectionInputsProps> = ({ 
  directionData, 
  onUpdateDirection 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(directionData);
  const [newObjective, setNewObjective] = useState('');

  const handleSave = () => {
    onUpdateDirection(editedData);
    setIsEditing(false);
  };

  const handleAddObjective = () => {
    if (newObjective.trim()) {
      setEditedData({
        ...editedData,
        strategicObjectives: [...editedData.strategicObjectives, newObjective.trim()]
      });
      setNewObjective('');
    }
  };

  const handleRemoveObjective = (index: number) => {
    setEditedData({
      ...editedData,
      strategicObjectives: editedData.strategicObjectives.filter((_, i) => i !== index)
    });
  };

  const handleAddPhase = () => {
    const newPhase = {
      id: Date.now(),
      title: '',
      justification: ''
    };
    
    setEditedData({
      ...editedData,
      strategyPhases: [...editedData.strategyPhases, newPhase]
    });
  };

  const handleUpdatePhase = (id: number, field: string, value: string) => {
    setEditedData({
      ...editedData,
      strategyPhases: editedData.strategyPhases.map(phase => 
        phase.id === id ? { ...phase, [field]: value } : phase
      )
    });
  };

  const handleRemovePhase = (id: number) => {
    setEditedData({
      ...editedData,
      strategyPhases: editedData.strategyPhases.filter(phase => phase.id !== id)
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-white flex items-center">
          <Target className="w-5 h-5 text-linkedin-light mr-2" />
          Strategic Direction
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
        Define the strategic direction of your business, including mission, vision, objectives, and strategy phases.
      </p>
      
      {isEditing ? (
        <div className="space-y-4">
          {/* Mission & Vision */}
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-white font-medium text-sm mb-3">Mission & Vision</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Mission</label>
                <textarea
                  value={editedData.missionVision.mission}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    missionVision: { ...editedData.missionVision, mission: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Define your company's mission..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Vision</label>
                <textarea
                  value={editedData.missionVision.vision}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    missionVision: { ...editedData.missionVision, vision: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Define your company's vision..."
                />
              </div>
            </div>
          </div>
          
          {/* Strategic Objectives */}
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-white font-medium text-sm mb-3">Strategic Objectives</h4>
            <div className="space-y-3">
              {editedData.strategicObjectives.map((objective, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={objective}
                    onChange={(e) => {
                      const updatedObjectives = [...editedData.strategicObjectives];
                      updatedObjectives[index] = e.target.value;
                      setEditedData({
                        ...editedData,
                        strategicObjectives: updatedObjectives
                      });
                    }}
                    className="flex-1 bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                  />
                  <button
                    onClick={() => handleRemoveObjective(index)}
                    className="p-2 bg-linkedin-card hover:bg-linkedin-card/70 text-red-400 rounded-lg transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M18 6L6 18M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
              ))}
              
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={newObjective}
                  onChange={(e) => setNewObjective(e.target.value)}
                  className="flex-1 bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                  placeholder="Add a strategic objective..."
                />
                <button
                  onClick={handleAddObjective}
                  className="p-2 bg-linkedin-card hover:bg-linkedin-card/70 text-linkedin-light rounded-lg transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M12 5v14M5 12h14"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Strategy Phases */}
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-white font-medium text-sm">Strategy Phases & Justification</h4>
              <button
                onClick={handleAddPhase}
                className="p-1 text-linkedin-light hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M12 5v14M5 12h14"></path>
                </svg>
              </button>
            </div>
            
            <div className="space-y-4">
              {editedData.strategyPhases.map((phase) => (
                <div key={phase.id} className="bg-linkedin-card/50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <input
                      type="text"
                      value={phase.title}
                      onChange={(e) => handleUpdatePhase(phase.id, 'title', e.target.value)}
                      className="flex-1 bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                      placeholder="Phase title..."
                    />
                    <button
                      onClick={() => handleRemovePhase(phase.id)}
                      className="p-1 ml-2 text-red-400 hover:text-red-300 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M18 6L6 18M6 6l12 12"></path>
                      </svg>
                    </button>
                  </div>
                  
                  <textarea
                    value={phase.justification}
                    onChange={(e) => handleUpdatePhase(phase.id, 'justification', e.target.value)}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs mt-2"
                    rows={2}
                    placeholder="Justification for this phase..."
                  />
                </div>
              ))}
              
              {editedData.strategyPhases.length === 0 && (
                <div className="text-center py-3">
                  <p className="text-gray-400 text-xs">No strategy phases defined yet. Click the + button to add one.</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex items-center justify-end space-x-2 pt-2">
            <button
              onClick={() => {
                setIsEditing(false);
                setEditedData(directionData);
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
          {/* Mission & Vision */}
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-white font-medium text-sm mb-3">Mission & Vision</h4>
            <div className="space-y-3">
              <div>
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Mission</h5>
                <p className="text-gray-300 text-xs">{directionData.missionVision.mission || "Not defined yet."}</p>
              </div>
              
              <div>
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Vision</h5>
                <p className="text-gray-300 text-xs">{directionData.missionVision.vision || "Not defined yet."}</p>
              </div>
            </div>
          </div>
          
          {/* Strategic Objectives */}
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-white font-medium text-sm mb-3">Strategic Objectives</h4>
            {directionData.strategicObjectives.length > 0 ? (
              <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                {directionData.strategicObjectives.map((objective, index) => (
                  <li key={index}>{objective}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400 text-xs">No strategic objectives defined yet.</p>
            )}
          </div>
          
          {/* Strategy Phases */}
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-white font-medium text-sm mb-3">Strategy Phases & Justification</h4>
            {directionData.strategyPhases.length > 0 ? (
              <div className="space-y-3">
                {directionData.strategyPhases.map((phase) => (
                  <div key={phase.id} className="bg-linkedin-card/50 rounded-lg p-3">
                    <h5 className="text-linkedin-light text-xs font-medium mb-1">{phase.title}</h5>
                    <p className="text-gray-300 text-xs">{phase.justification}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-xs">No strategy phases defined yet.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default StrategyDirectionInputs;