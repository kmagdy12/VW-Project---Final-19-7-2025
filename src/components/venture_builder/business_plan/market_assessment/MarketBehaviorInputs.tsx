import React, { useState } from 'react';
import { 
  TrendingUp, 
  Edit2, 
  Save, 
  Plus, 
  Trash2,
  X
} from 'lucide-react';

interface BehaviorItem {
  id: number;
  text: string;
}

interface MarketBehaviorData {
  macro: {
    challenges: BehaviorItem[];
    drivers: BehaviorItem[];
    trends: BehaviorItem[];
  };
  micro: {
    challenges: BehaviorItem[];
    drivers: BehaviorItem[];
    trends: BehaviorItem[];
  };
}

interface MarketBehaviorInputsProps {
  behaviorData: MarketBehaviorData;
  onUpdateBehavior: (data: MarketBehaviorData) => void;
}

const MarketBehaviorInputs: React.FC<MarketBehaviorInputsProps> = ({ 
  behaviorData, 
  onUpdateBehavior 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(behaviorData);
  const [newItemText, setNewItemText] = useState('');
  const [currentSection, setCurrentSection] = useState<'macro' | 'micro'>('macro');
  const [currentCategory, setCurrentCategory] = useState<'challenges' | 'drivers' | 'trends'>('challenges');

  const handleSave = () => {
    onUpdateBehavior(editedData);
    setIsEditing(false);
  };

  const handleAddItem = () => {
    if (newItemText.trim()) {
      const newItem: BehaviorItem = {
        id: Date.now(),
        text: newItemText.trim()
      };
      
      setEditedData({
        ...editedData,
        [currentSection]: {
          ...editedData[currentSection],
          [currentCategory]: [...editedData[currentSection][currentCategory], newItem]
        }
      });
      
      setNewItemText('');
    }
  };

  const handleRemoveItem = (section: 'macro' | 'micro', category: 'challenges' | 'drivers' | 'trends', id: number) => {
    setEditedData({
      ...editedData,
      [section]: {
        ...editedData[section],
        [category]: editedData[section][category].filter(item => item.id !== id)
      }
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-white flex items-center">
          <TrendingUp className="w-5 h-5 text-linkedin-light mr-2" />
          Market Behavior
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
        Define the macro and micro behaviors of your target market, including challenges, drivers, and trends.
      </p>
      
      {isEditing ? (
        <div className="space-y-6">
          {/* Macro Behavior */}
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-white font-medium text-sm mb-3">Macro Behavior</h4>
            
            {/* Macro Challenges */}
            <div className="mb-4">
              <h5 className="text-linkedin-light text-xs font-medium mb-2">Challenges</h5>
              <div className="space-y-2 mb-2">
                {editedData.macro.challenges.map((item) => (
                  <div key={item.id} className="flex items-center justify-between bg-linkedin-card/50 rounded-lg p-2">
                    <span className="text-gray-300 text-xs">{item.text}</span>
                    <button
                      onClick={() => handleRemoveItem('macro', 'challenges', item.id)}
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
                  value={currentSection === 'macro' && currentCategory === 'challenges' ? newItemText : ''}
                  onChange={(e) => {
                    setCurrentSection('macro');
                    setCurrentCategory('challenges');
                    setNewItemText(e.target.value);
                  }}
                  className="flex-1 bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                  placeholder="Add macro challenge..."
                />
                <button
                  onClick={handleAddItem}
                  className="bg-linkedin hover:bg-linkedin-dark text-white p-2 rounded-lg transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Macro Drivers */}
            <div className="mb-4">
              <h5 className="text-linkedin-light text-xs font-medium mb-2">Drivers</h5>
              <div className="space-y-2 mb-2">
                {editedData.macro.drivers.map((item) => (
                  <div key={item.id} className="flex items-center justify-between bg-linkedin-card/50 rounded-lg p-2">
                    <span className="text-gray-300 text-xs">{item.text}</span>
                    <button
                      onClick={() => handleRemoveItem('macro', 'drivers', item.id)}
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
                  value={currentSection === 'macro' && currentCategory === 'drivers' ? newItemText : ''}
                  onChange={(e) => {
                    setCurrentSection('macro');
                    setCurrentCategory('drivers');
                    setNewItemText(e.target.value);
                  }}
                  className="flex-1 bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                  placeholder="Add macro driver..."
                />
                <button
                  onClick={handleAddItem}
                  className="bg-linkedin hover:bg-linkedin-dark text-white p-2 rounded-lg transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Macro Trends */}
            <div>
              <h5 className="text-linkedin-light text-xs font-medium mb-2">Trends</h5>
              <div className="space-y-2 mb-2">
                {editedData.macro.trends.map((item) => (
                  <div key={item.id} className="flex items-center justify-between bg-linkedin-card/50 rounded-lg p-2">
                    <span className="text-gray-300 text-xs">{item.text}</span>
                    <button
                      onClick={() => handleRemoveItem('macro', 'trends', item.id)}
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
                  value={currentSection === 'macro' && currentCategory === 'trends' ? newItemText : ''}
                  onChange={(e) => {
                    setCurrentSection('macro');
                    setCurrentCategory('trends');
                    setNewItemText(e.target.value);
                  }}
                  className="flex-1 bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                  placeholder="Add macro trend..."
                />
                <button
                  onClick={handleAddItem}
                  className="bg-linkedin hover:bg-linkedin-dark text-white p-2 rounded-lg transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Micro Behavior */}
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-white font-medium text-sm mb-3">Micro Behavior</h4>
            
            {/* Micro Challenges */}
            <div className="mb-4">
              <h5 className="text-linkedin-light text-xs font-medium mb-2">Challenges</h5>
              <div className="space-y-2 mb-2">
                {editedData.micro.challenges.map((item) => (
                  <div key={item.id} className="flex items-center justify-between bg-linkedin-card/50 rounded-lg p-2">
                    <span className="text-gray-300 text-xs">{item.text}</span>
                    <button
                      onClick={() => handleRemoveItem('micro', 'challenges', item.id)}
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
                  value={currentSection === 'micro' && currentCategory === 'challenges' ? newItemText : ''}
                  onChange={(e) => {
                    setCurrentSection('micro');
                    setCurrentCategory('challenges');
                    setNewItemText(e.target.value);
                  }}
                  className="flex-1 bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                  placeholder="Add micro challenge..."
                />
                <button
                  onClick={handleAddItem}
                  className="bg-linkedin hover:bg-linkedin-dark text-white p-2 rounded-lg transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Micro Drivers */}
            <div className="mb-4">
              <h5 className="text-linkedin-light text-xs font-medium mb-2">Drivers</h5>
              <div className="space-y-2 mb-2">
                {editedData.micro.drivers.map((item) => (
                  <div key={item.id} className="flex items-center justify-between bg-linkedin-card/50 rounded-lg p-2">
                    <span className="text-gray-300 text-xs">{item.text}</span>
                    <button
                      onClick={() => handleRemoveItem('micro', 'drivers', item.id)}
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
                  value={currentSection === 'micro' && currentCategory === 'drivers' ? newItemText : ''}
                  onChange={(e) => {
                    setCurrentSection('micro');
                    setCurrentCategory('drivers');
                    setNewItemText(e.target.value);
                  }}
                  className="flex-1 bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                  placeholder="Add micro driver..."
                />
                <button
                  onClick={handleAddItem}
                  className="bg-linkedin hover:bg-linkedin-dark text-white p-2 rounded-lg transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Micro Trends */}
            <div>
              <h5 className="text-linkedin-light text-xs font-medium mb-2">Trends</h5>
              <div className="space-y-2 mb-2">
                {editedData.micro.trends.map((item) => (
                  <div key={item.id} className="flex items-center justify-between bg-linkedin-card/50 rounded-lg p-2">
                    <span className="text-gray-300 text-xs">{item.text}</span>
                    <button
                      onClick={() => handleRemoveItem('micro', 'trends', item.id)}
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
                  value={currentSection === 'micro' && currentCategory === 'trends' ? newItemText : ''}
                  onChange={(e) => {
                    setCurrentSection('micro');
                    setCurrentCategory('trends');
                    setNewItemText(e.target.value);
                  }}
                  className="flex-1 bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                  placeholder="Add micro trend..."
                />
                <button
                  onClick={handleAddItem}
                  className="bg-linkedin hover:bg-linkedin-dark text-white p-2 rounded-lg transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-end space-x-2 pt-2">
            <button
              onClick={() => {
                setIsEditing(false);
                setEditedData(behaviorData);
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
        <div className="space-y-6">
          {/* Macro Behavior */}
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-white font-medium text-sm mb-3">Macro Behavior</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h5 className="text-linkedin-light text-xs font-medium mb-2">Challenges</h5>
                <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                  {behaviorData.macro.challenges.map((item) => (
                    <li key={item.id}>{item.text}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="text-linkedin-light text-xs font-medium mb-2">Drivers</h5>
                <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                  {behaviorData.macro.drivers.map((item) => (
                    <li key={item.id}>{item.text}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="text-linkedin-light text-xs font-medium mb-2">Trends</h5>
                <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                  {behaviorData.macro.trends.map((item) => (
                    <li key={item.id}>{item.text}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Micro Behavior */}
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-white font-medium text-sm mb-3">Micro Behavior</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h5 className="text-linkedin-light text-xs font-medium mb-2">Challenges</h5>
                <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                  {behaviorData.micro.challenges.map((item) => (
                    <li key={item.id}>{item.text}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="text-linkedin-light text-xs font-medium mb-2">Drivers</h5>
                <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                  {behaviorData.micro.drivers.map((item) => (
                    <li key={item.id}>{item.text}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="text-linkedin-light text-xs font-medium mb-2">Trends</h5>
                <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                  {behaviorData.micro.trends.map((item) => (
                    <li key={item.id}>{item.text}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarketBehaviorInputs;