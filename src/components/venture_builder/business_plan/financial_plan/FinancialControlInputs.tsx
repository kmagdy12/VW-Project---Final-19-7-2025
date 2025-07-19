import React, { useState } from 'react';
import { 
  Edit2, 
  Save
} from 'lucide-react';

interface FinancialControlData {
  budgetingPlanning: string;
  financialReporting: string;
  costManagement: string;
  cashManagement: string;
  riskManagement: string;
  performanceMonitoring: string;
}

interface FinancialControlInputsProps {
  financialControlData: FinancialControlData;
  onUpdateFinancialControl: (data: FinancialControlData) => void;
}

const FinancialControlInputs: React.FC<FinancialControlInputsProps> = ({ 
  financialControlData, 
  onUpdateFinancialControl 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(financialControlData);

  const handleSave = () => {
    onUpdateFinancialControl(editedData);
    setIsEditing(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-white">Financial Control</h3>
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
        Define the financial control elements and directions for your business. This will guide your financial management and governance.
      </p>
      
      {isEditing ? (
        <div className="space-y-4">
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Budgeting & Planning Process</label>
            <textarea
              value={editedData.budgetingPlanning}
              onChange={(e) => setEditedData({...editedData, budgetingPlanning: e.target.value})}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={4}
              placeholder="Define your budgeting and planning process..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Financial Reporting Systems</label>
            <textarea
              value={editedData.financialReporting}
              onChange={(e) => setEditedData({...editedData, financialReporting: e.target.value})}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={4}
              placeholder="Define your financial reporting systems..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Cost Management & Control</label>
            <textarea
              value={editedData.costManagement}
              onChange={(e) => setEditedData({...editedData, costManagement: e.target.value})}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={4}
              placeholder="Define your cost management and control processes..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Cash Management</label>
            <textarea
              value={editedData.cashManagement}
              onChange={(e) => setEditedData({...editedData, cashManagement: e.target.value})}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={4}
              placeholder="Define your cash management processes..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Financial Risk Management</label>
            <textarea
              value={editedData.riskManagement}
              onChange={(e) => setEditedData({...editedData, riskManagement: e.target.value})}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={4}
              placeholder="Define your financial risk management processes..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Performance Monitoring</label>
            <textarea
              value={editedData.performanceMonitoring}
              onChange={(e) => setEditedData({...editedData, performanceMonitoring: e.target.value})}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={4}
              placeholder="Define your performance monitoring processes..."
            />
          </div>
          
          <div className="flex items-center justify-end space-x-2 pt-2">
            <button
              onClick={() => {
                setIsEditing(false);
                setEditedData(financialControlData);
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
            <h4 className="text-linkedin-light text-xs font-medium mb-2">Budgeting & Planning Process</h4>
            <p className="text-gray-300 text-xs whitespace-pre-line">{financialControlData.budgetingPlanning || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-linkedin-light text-xs font-medium mb-2">Financial Reporting Systems</h4>
            <p className="text-gray-300 text-xs whitespace-pre-line">{financialControlData.financialReporting || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-linkedin-light text-xs font-medium mb-2">Cost Management & Control</h4>
            <p className="text-gray-300 text-xs whitespace-pre-line">{financialControlData.costManagement || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-linkedin-light text-xs font-medium mb-2">Cash Management</h4>
            <p className="text-gray-300 text-xs whitespace-pre-line">{financialControlData.cashManagement || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-linkedin-light text-xs font-medium mb-2">Financial Risk Management</h4>
            <p className="text-gray-300 text-xs whitespace-pre-line">{financialControlData.riskManagement || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-linkedin-light text-xs font-medium mb-2">Performance Monitoring</h4>
            <p className="text-gray-300 text-xs whitespace-pre-line">{financialControlData.performanceMonitoring || "Not defined yet."}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinancialControlInputs;