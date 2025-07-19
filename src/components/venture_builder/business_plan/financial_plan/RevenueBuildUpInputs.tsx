import React, { useState } from 'react';
import { 
  Edit2, 
  Save
} from 'lucide-react';

interface RevenueBuildUpData {
  primaryForecastingLogic: string;
  forecastingLogicFramework: {
    primaryDriver: string;
    conversionPath: string;
    multiplicationFactors: string;
    constraints: string;
  };
  requiredElements: {
    primaryDriverInputs: string;
    conversionBehavioralInputs: string;
    financialValueInputs: string;
    growthScalingInputs: string;
    externalMarketInputs: string;
  };
}

interface RevenueBuildUpInputsProps {
  revenueBuildUpData: RevenueBuildUpData;
  onUpdateRevenueBuildUp: (data: RevenueBuildUpData) => void;
}

const RevenueBuildUpInputs: React.FC<RevenueBuildUpInputsProps> = ({ 
  revenueBuildUpData, 
  onUpdateRevenueBuildUp 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(revenueBuildUpData);

  const handleSave = () => {
    onUpdateRevenueBuildUp(editedData);
    setIsEditing(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-white">Revenue Build-up</h3>
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
        Define the best revenue build-up model to create a strong forecasting model with a high level of accuracy. This will guide your financial projections and planning.
      </p>
      
      {isEditing ? (
        <div className="space-y-4">
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Primary Forecasting Logic</label>
            <select
              value={editedData.primaryForecastingLogic}
              onChange={(e) => setEditedData({...editedData, primaryForecastingLogic: e.target.value})}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin text-xs"
            >
              <option value="" className="bg-slate-800">Select a forecasting logic...</option>
              <option value="Customer-Centric Logic" className="bg-slate-800">Customer-Centric Logic</option>
              <option value="Transaction-Centric Logic" className="bg-slate-800">Transaction-Centric Logic</option>
              <option value="Capacity-Centric Logic" className="bg-slate-800">Capacity-Centric Logic</option>
              <option value="Market Penetration Logic" className="bg-slate-800">Market Penetration Logic</option>
              <option value="Channel-Centric Logic" className="bg-slate-800">Channel-Centric Logic</option>
              <option value="Hybrid" className="bg-slate-800">Hybrid</option>
            </select>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-white font-medium text-xs mb-3">Forecasting Logic Framework (Revenue Logic Chain)</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Identify the Primary Driver</label>
                <textarea
                  value={editedData.forecastingLogicFramework.primaryDriver}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    forecastingLogicFramework: { 
                      ...editedData.forecastingLogicFramework, 
                      primaryDriver: e.target.value 
                    }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Define the primary driver of your revenue model..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Define the Conversion Path</label>
                <textarea
                  value={editedData.forecastingLogicFramework.conversionPath}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    forecastingLogicFramework: { 
                      ...editedData.forecastingLogicFramework, 
                      conversionPath: e.target.value 
                    }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Define the conversion path from primary driver to revenue..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Establish the Multiplication Factors</label>
                <textarea
                  value={editedData.forecastingLogicFramework.multiplicationFactors}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    forecastingLogicFramework: { 
                      ...editedData.forecastingLogicFramework, 
                      multiplicationFactors: e.target.value 
                    }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Define the multiplication factors in your revenue model..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Account for Constraints and Limitations</label>
                <textarea
                  value={editedData.forecastingLogicFramework.constraints}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    forecastingLogicFramework: { 
                      ...editedData.forecastingLogicFramework, 
                      constraints: e.target.value 
                    }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Define constraints and limitations in your revenue model..."
                />
              </div>
            </div>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-white font-medium text-xs mb-3">Required Elements and Inputs</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Primary Driver Inputs</label>
                <textarea
                  value={editedData.requiredElements.primaryDriverInputs}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    requiredElements: { 
                      ...editedData.requiredElements, 
                      primaryDriverInputs: e.target.value 
                    }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Define the primary driver inputs for your revenue model..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Conversion and Behavioral Inputs</label>
                <textarea
                  value={editedData.requiredElements.conversionBehavioralInputs}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    requiredElements: { 
                      ...editedData.requiredElements, 
                      conversionBehavioralInputs: e.target.value 
                    }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Define conversion and behavioral inputs for your revenue model..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Financial Value Inputs</label>
                <textarea
                  value={editedData.requiredElements.financialValueInputs}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    requiredElements: { 
                      ...editedData.requiredElements, 
                      financialValueInputs: e.target.value 
                    }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Define financial value inputs for your revenue model..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Growth and Scaling Inputs</label>
                <textarea
                  value={editedData.requiredElements.growthScalingInputs}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    requiredElements: { 
                      ...editedData.requiredElements, 
                      growthScalingInputs: e.target.value 
                    }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Define growth and scaling inputs for your revenue model..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">External and Market Inputs</label>
                <textarea
                  value={editedData.requiredElements.externalMarketInputs}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    requiredElements: { 
                      ...editedData.requiredElements, 
                      externalMarketInputs: e.target.value 
                    }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Define external and market inputs for your revenue model..."
                />
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-end space-x-2 pt-2">
            <button
              onClick={() => {
                setIsEditing(false);
                setEditedData(revenueBuildUpData);
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
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-linkedin-light text-xs font-medium mb-2">Primary Forecasting Logic</h4>
            <p className="text-white text-sm font-medium">{revenueBuildUpData.primaryForecastingLogic || "Not selected yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-linkedin-light text-xs font-medium mb-2">Forecasting Logic Framework (Revenue Logic Chain)</h4>
            <div className="space-y-3">
              <div>
                <h5 className="text-white text-xs font-medium">Identify the Primary Driver</h5>
                <p className="text-gray-300 text-xs">{revenueBuildUpData.forecastingLogicFramework.primaryDriver || "Not defined yet."}</p>
              </div>
              
              <div>
                <h5 className="text-white text-xs font-medium">Define the Conversion Path</h5>
                <p className="text-gray-300 text-xs">{revenueBuildUpData.forecastingLogicFramework.conversionPath || "Not defined yet."}</p>
              </div>
              
              <div>
                <h5 className="text-white text-xs font-medium">Establish the Multiplication Factors</h5>
                <p className="text-gray-300 text-xs">{revenueBuildUpData.forecastingLogicFramework.multiplicationFactors || "Not defined yet."}</p>
              </div>
              
              <div>
                <h5 className="text-white text-xs font-medium">Account for Constraints and Limitations</h5>
                <p className="text-gray-300 text-xs">{revenueBuildUpData.forecastingLogicFramework.constraints || "Not defined yet."}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-linkedin-light text-xs font-medium mb-2">Required Elements and Inputs</h4>
            <div className="space-y-3">
              <div>
                <h5 className="text-white text-xs font-medium">Primary Driver Inputs</h5>
                <p className="text-gray-300 text-xs">{revenueBuildUpData.requiredElements.primaryDriverInputs || "Not defined yet."}</p>
              </div>
              
              <div>
                <h5 className="text-white text-xs font-medium">Conversion and Behavioral Inputs</h5>
                <p className="text-gray-300 text-xs">{revenueBuildUpData.requiredElements.conversionBehavioralInputs || "Not defined yet."}</p>
              </div>
              
              <div>
                <h5 className="text-white text-xs font-medium">Financial Value Inputs</h5>
                <p className="text-gray-300 text-xs">{revenueBuildUpData.requiredElements.financialValueInputs || "Not defined yet."}</p>
              </div>
              
              <div>
                <h5 className="text-white text-xs font-medium">Growth and Scaling Inputs</h5>
                <p className="text-gray-300 text-xs">{revenueBuildUpData.requiredElements.growthScalingInputs || "Not defined yet."}</p>
              </div>
              
              <div>
                <h5 className="text-white text-xs font-medium">External and Market Inputs</h5>
                <p className="text-gray-300 text-xs">{revenueBuildUpData.requiredElements.externalMarketInputs || "Not defined yet."}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RevenueBuildUpInputs;