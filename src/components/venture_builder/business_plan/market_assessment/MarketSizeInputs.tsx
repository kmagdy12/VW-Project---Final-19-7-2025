import React, { useState } from 'react';
import { 
  BarChart3, 
  Edit2, 
  Save, 
  DollarSign
} from 'lucide-react';

interface MarketSizeData {
  tam: {
    value: string;
    description: string;
  };
  sam: {
    value: string;
    description: string;
  };
  som: {
    value: string;
    description: string;
  };
}

interface MarketSizeInputsProps {
  marketSizeData: MarketSizeData;
  onUpdateMarketSize: (data: MarketSizeData) => void;
}

const MarketSizeInputs: React.FC<MarketSizeInputsProps> = ({ 
  marketSizeData, 
  onUpdateMarketSize 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(marketSizeData);

  const handleSave = () => {
    onUpdateMarketSize(editedData);
    setIsEditing(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-white flex items-center">
          <BarChart3 className="w-5 h-5 text-linkedin-light mr-2" />
          Market Size
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
        Define the total addressable market (TAM), serviceable addressable market (SAM), and serviceable obtainable market (SOM) for your venture.
      </p>
      
      {isEditing ? (
        <div className="space-y-4">
          {/* TAM */}
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <DollarSign className="w-4 h-4 text-linkedin-light" />
              <h4 className="text-white font-medium text-sm">Total Addressable Market (TAM)</h4>
            </div>
            <div className="space-y-2">
              <div>
                <label className="block text-gray-300 text-xs mb-1">Value</label>
                <input
                  type="text"
                  value={editedData.tam.value}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    tam: { ...editedData.tam, value: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                  placeholder="e.g., $45.2B"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-xs mb-1">Description</label>
                <textarea
                  value={editedData.tam.description}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    tam: { ...editedData.tam, description: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Describe the total addressable market..."
                />
              </div>
            </div>
          </div>
          
          {/* SAM */}
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <DollarSign className="w-4 h-4 text-linkedin-light" />
              <h4 className="text-white font-medium text-sm">Serviceable Addressable Market (SAM)</h4>
            </div>
            <div className="space-y-2">
              <div>
                <label className="block text-gray-300 text-xs mb-1">Value</label>
                <input
                  type="text"
                  value={editedData.sam.value}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    sam: { ...editedData.sam, value: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                  placeholder="e.g., $12.8B"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-xs mb-1">Description</label>
                <textarea
                  value={editedData.sam.description}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    sam: { ...editedData.sam, description: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Describe the serviceable addressable market..."
                />
              </div>
            </div>
          </div>
          
          {/* SOM */}
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <DollarSign className="w-4 h-4 text-linkedin-light" />
              <h4 className="text-white font-medium text-sm">Serviceable Obtainable Market (SOM)</h4>
            </div>
            <div className="space-y-2">
              <div>
                <label className="block text-gray-300 text-xs mb-1">Value</label>
                <input
                  type="text"
                  value={editedData.som.value}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    som: { ...editedData.som, value: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                  placeholder="e.g., $2.1B"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-xs mb-1">Description</label>
                <textarea
                  value={editedData.som.description}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    som: { ...editedData.som, description: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Describe the serviceable obtainable market..."
                />
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-end space-x-2 pt-2">
            <button
              onClick={() => {
                setIsEditing(false);
                setEditedData(marketSizeData);
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
          {/* TAM */}
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <DollarSign className="w-4 h-4 text-linkedin-light" />
              <h4 className="text-white font-medium text-sm">Total Addressable Market (TAM)</h4>
            </div>
            <div className="flex items-center space-x-3 mb-2">
              <div className="text-2xl font-bold text-linkedin-light">{marketSizeData.tam.value}</div>
            </div>
            <p className="text-gray-300 text-xs">{marketSizeData.tam.description}</p>
          </div>
          
          {/* SAM */}
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <DollarSign className="w-4 h-4 text-linkedin-light" />
              <h4 className="text-white font-medium text-sm">Serviceable Addressable Market (SAM)</h4>
            </div>
            <div className="flex items-center space-x-3 mb-2">
              <div className="text-2xl font-bold text-linkedin-light">{marketSizeData.sam.value}</div>
            </div>
            <p className="text-gray-300 text-xs">{marketSizeData.sam.description}</p>
          </div>
          
          {/* SOM */}
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <DollarSign className="w-4 h-4 text-linkedin-light" />
              <h4 className="text-white font-medium text-sm">Serviceable Obtainable Market (SOM)</h4>
            </div>
            <div className="flex items-center space-x-3 mb-2">
              <div className="text-2xl font-bold text-linkedin-light">{marketSizeData.som.value}</div>
            </div>
            <p className="text-gray-300 text-xs">{marketSizeData.som.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarketSizeInputs;