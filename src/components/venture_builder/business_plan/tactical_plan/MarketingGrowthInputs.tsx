import React, { useState } from 'react';
import { 
  Edit2, 
  Save
} from 'lucide-react';

interface MarketingGrowthData {
  awareness: string;
  acquisition: string;
  activation: string;
  retention: string;
  reactivation: string;
  referral: string;
  revenue: string;
}

interface MarketingGrowthInputsProps {
  marketingData: MarketingGrowthData;
  onUpdateMarketing: (data: MarketingGrowthData) => void;
}

const MarketingGrowthInputs: React.FC<MarketingGrowthInputsProps> = ({ 
  marketingData, 
  onUpdateMarketing 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(marketingData);

  const handleSave = () => {
    onUpdateMarketing(editedData);
    setIsEditing(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-white">Marketing & Growth</h3>
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
        Define your marketing and growth tactics to enhance conversions across the growth funnel. This will guide your customer acquisition and retention strategies.
      </p>
      
      <div className="bg-linkedin-card/30 rounded-lg p-4">
        <h4 className="text-white font-medium text-sm mb-4">Growth Funnel Tactics</h4>
        
        {isEditing ? (
          <div className="space-y-4">
            <div>
              <label className="block text-linkedin-light text-xs mb-1">Awareness Tactics</label>
              <textarea
                value={editedData.awareness}
                onChange={(e) => setEditedData({...editedData, awareness: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                rows={3}
                placeholder="Define tactics to increase brand awareness..."
              />
            </div>
            
            <div>
              <label className="block text-linkedin-light text-xs mb-1">Acquisition Tactics</label>
              <textarea
                value={editedData.acquisition}
                onChange={(e) => setEditedData({...editedData, acquisition: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                rows={3}
                placeholder="Define tactics to acquire new customers..."
              />
            </div>
            
            <div>
              <label className="block text-linkedin-light text-xs mb-1">Activation Tactics</label>
              <textarea
                value={editedData.activation}
                onChange={(e) => setEditedData({...editedData, activation: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                rows={3}
                placeholder="Define tactics to activate new customers..."
              />
            </div>
            
            <div>
              <label className="block text-linkedin-light text-xs mb-1">Retention Tactics</label>
              <textarea
                value={editedData.retention}
                onChange={(e) => setEditedData({...editedData, retention: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                rows={3}
                placeholder="Define tactics to retain existing customers..."
              />
            </div>
            
            <div>
              <label className="block text-linkedin-light text-xs mb-1">Reactivation Tactics</label>
              <textarea
                value={editedData.reactivation}
                onChange={(e) => setEditedData({...editedData, reactivation: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                rows={3}
                placeholder="Define tactics to reactivate dormant customers..."
              />
            </div>
            
            <div>
              <label className="block text-linkedin-light text-xs mb-1">Referral Tactics</label>
              <textarea
                value={editedData.referral}
                onChange={(e) => setEditedData({...editedData, referral: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                rows={3}
                placeholder="Define tactics to encourage customer referrals..."
              />
            </div>
            
            <div>
              <label className="block text-linkedin-light text-xs mb-1">Revenue Tactics</label>
              <textarea
                value={editedData.revenue}
                onChange={(e) => setEditedData({...editedData, revenue: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                rows={3}
                placeholder="Define tactics to increase revenue from existing customers..."
              />
            </div>
            
            <div className="flex items-center justify-end space-x-2 pt-2">
              <button
                onClick={() => {
                  setIsEditing(false);
                  setEditedData(marketingData);
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
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-1">Awareness Tactics</h5>
              <p className="text-gray-300 text-xs whitespace-pre-line">{marketingData.awareness || "Not defined yet."}</p>
            </div>
            
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-1">Acquisition Tactics</h5>
              <p className="text-gray-300 text-xs whitespace-pre-line">{marketingData.acquisition || "Not defined yet."}</p>
            </div>
            
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-1">Activation Tactics</h5>
              <p className="text-gray-300 text-xs whitespace-pre-line">{marketingData.activation || "Not defined yet."}</p>
            </div>
            
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-1">Retention Tactics</h5>
              <p className="text-gray-300 text-xs whitespace-pre-line">{marketingData.retention || "Not defined yet."}</p>
            </div>
            
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-1">Reactivation Tactics</h5>
              <p className="text-gray-300 text-xs whitespace-pre-line">{marketingData.reactivation || "Not defined yet."}</p>
            </div>
            
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-1">Referral Tactics</h5>
              <p className="text-gray-300 text-xs whitespace-pre-line">{marketingData.referral || "Not defined yet."}</p>
            </div>
            
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-1">Revenue Tactics</h5>
              <p className="text-gray-300 text-xs whitespace-pre-line">{marketingData.revenue || "Not defined yet."}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketingGrowthInputs;