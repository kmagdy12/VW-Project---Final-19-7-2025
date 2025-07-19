import React, { useState } from 'react';
import { 
  Edit2, 
  Save
} from 'lucide-react';

interface FinancialAnalysisData {
  profitLoss: string;
  cashflowAnalysis: string;
  capitalRequirements: string;
  breakEvenAnalysis: string;
}

interface FinancialAnalysisInputsProps {
  financialAnalysisData: FinancialAnalysisData;
  onUpdateFinancialAnalysis: (data: FinancialAnalysisData) => void;
}

const FinancialAnalysisInputs: React.FC<FinancialAnalysisInputsProps> = ({ 
  financialAnalysisData, 
  onUpdateFinancialAnalysis 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(financialAnalysisData);

  const handleSave = () => {
    onUpdateFinancialAnalysis(editedData);
    setIsEditing(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-white">Financial Analysis</h3>
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
        Define your financial analysis models for your business. This will guide your financial planning and decision-making.
      </p>
      
      {isEditing ? (
        <div className="space-y-4">
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Profit & Loss (P&L)</label>
            <textarea
              value={editedData.profitLoss}
              onChange={(e) => setEditedData({...editedData, profitLoss: e.target.value})}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={5}
              placeholder="Define your profit and loss statement structure and projections..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Cashflow Analysis</label>
            <textarea
              value={editedData.cashflowAnalysis}
              onChange={(e) => setEditedData({...editedData, cashflowAnalysis: e.target.value})}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={5}
              placeholder="Define your cash flow analysis approach and projections..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Capital Requirements</label>
            <textarea
              value={editedData.capitalRequirements}
              onChange={(e) => setEditedData({...editedData, capitalRequirements: e.target.value})}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={5}
              placeholder="Define your capital requirements and funding strategy..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Break-even Analysis</label>
            <textarea
              value={editedData.breakEvenAnalysis}
              onChange={(e) => setEditedData({...editedData, breakEvenAnalysis: e.target.value})}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={5}
              placeholder="Define your break-even analysis approach and projections..."
            />
          </div>
          
          <div className="flex items-center justify-end space-x-2 pt-2">
            <button
              onClick={() => {
                setIsEditing(false);
                setEditedData(financialAnalysisData);
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
            <h4 className="text-linkedin-light text-xs font-medium mb-2">Profit & Loss (P&L)</h4>
            <p className="text-gray-300 text-xs whitespace-pre-line">{financialAnalysisData.profitLoss || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-linkedin-light text-xs font-medium mb-2">Cashflow Analysis</h4>
            <p className="text-gray-300 text-xs whitespace-pre-line">{financialAnalysisData.cashflowAnalysis || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-linkedin-light text-xs font-medium mb-2">Capital Requirements</h4>
            <p className="text-gray-300 text-xs whitespace-pre-line">{financialAnalysisData.capitalRequirements || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-linkedin-light text-xs font-medium mb-2">Break-even Analysis</h4>
            <p className="text-gray-300 text-xs whitespace-pre-line">{financialAnalysisData.breakEvenAnalysis || "Not defined yet."}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinancialAnalysisInputs;