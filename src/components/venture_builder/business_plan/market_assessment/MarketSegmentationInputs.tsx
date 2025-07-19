import React, { useState } from 'react';
import { 
  Users, 
  Plus, 
  Trash2, 
  Edit2, 
  Save, 
  Check,
  X
} from 'lucide-react';

interface MarketSegment {
  id: number;
  description: string;
  requiredServices: string[];
  keyChallenges: string[];
  decisionMakers: string[];
}

interface MarketSegmentationInputsProps {
  segments: MarketSegment[];
  onUpdateSegments: (segments: MarketSegment[]) => void;
}

const MarketSegmentationInputs: React.FC<MarketSegmentationInputsProps> = ({ 
  segments, 
  onUpdateSegments 
}) => {
  const [editingSegmentId, setEditingSegmentId] = useState<number | null>(null);
  const [newSegment, setNewSegment] = useState<Partial<MarketSegment>>({
    description: '',
    requiredServices: [],
    keyChallenges: [],
    decisionMakers: []
  });
  const [isAddingSegment, setIsAddingSegment] = useState(false);
  const [newItem, setNewItem] = useState('');
  const [currentItemType, setCurrentItemType] = useState<'requiredServices' | 'keyChallenges' | 'decisionMakers'>('requiredServices');

  const handleAddSegment = () => {
    if (newSegment.description) {
      const segment: MarketSegment = {
        id: Date.now(),
        description: newSegment.description,
        requiredServices: newSegment.requiredServices || [],
        keyChallenges: newSegment.keyChallenges || [],
        decisionMakers: newSegment.decisionMakers || []
      };
      
      onUpdateSegments([...segments, segment]);
      setNewSegment({
        description: '',
        requiredServices: [],
        keyChallenges: [],
        decisionMakers: []
      });
      setIsAddingSegment(false);
    }
  };

  const handleEditSegment = (segment: MarketSegment) => {
    setEditingSegmentId(segment.id);
    setNewSegment({
      description: segment.description,
      requiredServices: [...segment.requiredServices],
      keyChallenges: [...segment.keyChallenges],
      decisionMakers: [...segment.decisionMakers]
    });
  };

  const handleSaveEdit = () => {
    if (editingSegmentId && newSegment.description) {
      const updatedSegments = segments.map(segment => 
        segment.id === editingSegmentId 
          ? {
              ...segment,
              description: newSegment.description || segment.description,
              requiredServices: newSegment.requiredServices || segment.requiredServices,
              keyChallenges: newSegment.keyChallenges || segment.keyChallenges,
              decisionMakers: newSegment.decisionMakers || segment.decisionMakers
            }
          : segment
      );
      
      onUpdateSegments(updatedSegments);
      setEditingSegmentId(null);
      setNewSegment({
        description: '',
        requiredServices: [],
        keyChallenges: [],
        decisionMakers: []
      });
    }
  };

  const handleRemoveSegment = (id: number) => {
    onUpdateSegments(segments.filter(segment => segment.id !== id));
  };

  const handleAddItem = () => {
    if (newItem.trim()) {
      setNewSegment({
        ...newSegment,
        [currentItemType]: [...(newSegment[currentItemType] || []), newItem.trim()]
      });
      setNewItem('');
    }
  };

  const handleRemoveItem = (type: 'requiredServices' | 'keyChallenges' | 'decisionMakers', index: number) => {
    setNewSegment({
      ...newSegment,
      [type]: (newSegment[type] || []).filter((_, i) => i !== index)
    });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-base font-semibold text-white mb-3 flex items-center">
        <Users className="w-5 h-5 text-linkedin-light mr-2" />
        Market Segmentation
      </h3>
      
      <p className="text-gray-300 text-xs mb-4">
        Define the different segments in your target market. The AI has pre-filled some segments based on your previous inputs, but you can edit, remove, or add new ones.
      </p>
      
      {/* Segments List */}
      <div className="space-y-3 mb-4">
        {segments.length === 0 && !isAddingSegment && (
          <div className="bg-linkedin-card/30 rounded-lg p-4 text-center">
            <p className="text-gray-300 text-xs">No market segments defined yet. Add a segment to get started.</p>
          </div>
        )}
        
        {segments.map((segment) => (
          <div 
            key={segment.id} 
            className={`bg-linkedin-card/30 rounded-lg p-4 ${
              editingSegmentId === segment.id ? 'border border-linkedin-light' : ''
            }`}
          >
            {editingSegmentId === segment.id ? (
              <div className="space-y-3">
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Segment Description</label>
                  <textarea
                    value={newSegment.description}
                    onChange={(e) => setNewSegment({...newSegment, description: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                    rows={2}
                    placeholder="Describe the market segment..."
                  />
                </div>
                
                {/* Required Services */}
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Required Services</label>
                  <div className="space-y-2 mb-2">
                    {(newSegment.requiredServices || []).map((service, index) => (
                      <div key={index} className="flex items-center justify-between bg-linkedin-card/50 rounded-lg p-2">
                        <span className="text-gray-300 text-xs">{service}</span>
                        <button
                          onClick={() => handleRemoveItem('requiredServices', index)}
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
                      value={currentItemType === 'requiredServices' ? newItem : ''}
                      onChange={(e) => {
                        setCurrentItemType('requiredServices');
                        setNewItem(e.target.value);
                      }}
                      className="flex-1 bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                      placeholder="Add required service..."
                    />
                    <button
                      onClick={handleAddItem}
                      className="bg-linkedin hover:bg-linkedin-dark text-white p-2 rounded-lg transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                {/* Key Challenges */}
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Key Challenges</label>
                  <div className="space-y-2 mb-2">
                    {(newSegment.keyChallenges || []).map((challenge, index) => (
                      <div key={index} className="flex items-center justify-between bg-linkedin-card/50 rounded-lg p-2">
                        <span className="text-gray-300 text-xs">{challenge}</span>
                        <button
                          onClick={() => handleRemoveItem('keyChallenges', index)}
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
                      value={currentItemType === 'keyChallenges' ? newItem : ''}
                      onChange={(e) => {
                        setCurrentItemType('keyChallenges');
                        setNewItem(e.target.value);
                      }}
                      className="flex-1 bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                      placeholder="Add key challenge..."
                    />
                    <button
                      onClick={handleAddItem}
                      className="bg-linkedin hover:bg-linkedin-dark text-white p-2 rounded-lg transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                {/* Decision Makers */}
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Decision Makers</label>
                  <div className="space-y-2 mb-2">
                    {(newSegment.decisionMakers || []).map((decisionMaker, index) => (
                      <div key={index} className="flex items-center justify-between bg-linkedin-card/50 rounded-lg p-2">
                        <span className="text-gray-300 text-xs">{decisionMaker}</span>
                        <button
                          onClick={() => handleRemoveItem('decisionMakers', index)}
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
                      value={currentItemType === 'decisionMakers' ? newItem : ''}
                      onChange={(e) => {
                        setCurrentItemType('decisionMakers');
                        setNewItem(e.target.value);
                      }}
                      className="flex-1 bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                      placeholder="Add decision maker..."
                    />
                    <button
                      onClick={handleAddItem}
                      className="bg-linkedin hover:bg-linkedin-dark text-white p-2 rounded-lg transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center justify-end space-x-2 pt-2">
                  <button
                    onClick={() => {
                      setEditingSegmentId(null);
                      setNewSegment({
                        description: '',
                        requiredServices: [],
                        keyChallenges: [],
                        decisionMakers: []
                      });
                    }}
                    className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveEdit}
                    className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs flex items-center space-x-1"
                  >
                    <Save className="w-3 h-3" />
                    <span>Save</span>
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-white font-medium text-sm">{segment.description}</h4>
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => handleEditSegment(segment)}
                      className="p-1 text-gray-400 hover:text-white transition-colors"
                    >
                      <Edit2 className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => handleRemoveSegment(segment.id)}
                      className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <h5 className="text-linkedin-light text-xs font-medium mb-1">Required Services</h5>
                    <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                      {segment.requiredServices.map((service, index) => (
                        <li key={index}>{service}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-linkedin-light text-xs font-medium mb-1">Key Challenges</h5>
                    <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                      {segment.keyChallenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-linkedin-light text-xs font-medium mb-1">Decision Makers</h5>
                    <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                      {segment.decisionMakers.map((decisionMaker, index) => (
                        <li key={index}>{decisionMaker}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        
        {/* Add New Segment Form */}
        {isAddingSegment && (
          <div className="bg-linkedin-card/30 rounded-lg p-4 border border-linkedin-light">
            <div className="space-y-3">
              <div>
                <label className="block text-gray-300 text-xs mb-1">Segment Description</label>
                <textarea
                  value={newSegment.description}
                  onChange={(e) => setNewSegment({...newSegment, description: e.target.value})}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Describe the market segment..."
                />
              </div>
              
              {/* Required Services */}
              <div>
                <label className="block text-gray-300 text-xs mb-1">Required Services</label>
                <div className="space-y-2 mb-2">
                  {(newSegment.requiredServices || []).map((service, index) => (
                    <div key={index} className="flex items-center justify-between bg-linkedin-card/50 rounded-lg p-2">
                      <span className="text-gray-300 text-xs">{service}</span>
                      <button
                        onClick={() => handleRemoveItem('requiredServices', index)}
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
                    value={currentItemType === 'requiredServices' ? newItem : ''}
                    onChange={(e) => {
                      setCurrentItemType('requiredServices');
                      setNewItem(e.target.value);
                    }}
                    className="flex-1 bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                    placeholder="Add required service..."
                  />
                  <button
                    onClick={handleAddItem}
                    className="bg-linkedin hover:bg-linkedin-dark text-white p-2 rounded-lg transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Key Challenges */}
              <div>
                <label className="block text-gray-300 text-xs mb-1">Key Challenges</label>
                <div className="space-y-2 mb-2">
                  {(newSegment.keyChallenges || []).map((challenge, index) => (
                    <div key={index} className="flex items-center justify-between bg-linkedin-card/50 rounded-lg p-2">
                      <span className="text-gray-300 text-xs">{challenge}</span>
                      <button
                        onClick={() => handleRemoveItem('keyChallenges', index)}
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
                    value={currentItemType === 'keyChallenges' ? newItem : ''}
                    onChange={(e) => {
                      setCurrentItemType('keyChallenges');
                      setNewItem(e.target.value);
                    }}
                    className="flex-1 bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                    placeholder="Add key challenge..."
                  />
                  <button
                    onClick={handleAddItem}
                    className="bg-linkedin hover:bg-linkedin-dark text-white p-2 rounded-lg transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Decision Makers */}
              <div>
                <label className="block text-gray-300 text-xs mb-1">Decision Makers</label>
                <div className="space-y-2 mb-2">
                  {(newSegment.decisionMakers || []).map((decisionMaker, index) => (
                    <div key={index} className="flex items-center justify-between bg-linkedin-card/50 rounded-lg p-2">
                      <span className="text-gray-300 text-xs">{decisionMaker}</span>
                      <button
                        onClick={() => handleRemoveItem('decisionMakers', index)}
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
                    value={currentItemType === 'decisionMakers' ? newItem : ''}
                    onChange={(e) => {
                      setCurrentItemType('decisionMakers');
                      setNewItem(e.target.value);
                    }}
                    className="flex-1 bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                    placeholder="Add decision maker..."
                  />
                  <button
                    onClick={handleAddItem}
                    className="bg-linkedin hover:bg-linkedin-dark text-white p-2 rounded-lg transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-end space-x-2 pt-2">
                <button
                  onClick={() => {
                    setIsAddingSegment(false);
                    setNewSegment({
                      description: '',
                      requiredServices: [],
                      keyChallenges: [],
                      decisionMakers: []
                    });
                  }}
                  className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddSegment}
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
      
      {/* Add Segment Button */}
      {!isAddingSegment && (
        <button
          onClick={() => setIsAddingSegment(true)}
          className="w-full flex items-center justify-center space-x-2 bg-linkedin-card/30 hover:bg-linkedin-card/50 border border-dashed border-linkedin-border hover:border-linkedin text-white px-4 py-3 rounded-lg transition-all text-xs"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Segment</span>
        </button>
      )}
    </div>
  );
};

export default MarketSegmentationInputs;