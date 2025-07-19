import React, { useState } from 'react';
import { 
  Edit2, 
  Save
} from 'lucide-react';

interface ExpensesData {
  directCosts: string;
  operatingExpenses: string;
  marketingSalesExpenses: string;
}

interface ExpensesInputsProps {
  expensesData: ExpensesData;
  onUpdateExpenses: (data: ExpensesData) => void;
}

const ExpensesInputs: React.FC<ExpensesInputsProps> = ({ 
  expensesData, 
  onUpdateExpenses 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(expensesData);

  const handleSave = () => {
    onUpdateExpenses(editedData);
    setIsEditing(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-white">Expenses</h3>
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
        Define the detailed expenses of your business and forecast the expenses to match the strategy roadmap. This will guide your financial planning and budgeting.
      </p>
      
      {isEditing ? (
        <div className="space-y-4">
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Direct Costs</label>
            <textarea
              value={editedData.directCosts}
              onChange={(e) => setEditedData({...editedData, directCosts: e.target.value})}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={5}
              placeholder="Define direct costs associated with your products/services..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Operating Expenses</label>
            <textarea
              value={editedData.operatingExpenses}
              onChange={(e) => setEditedData({...editedData, operatingExpenses: e.target.value})}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={5}
              placeholder="Define operating expenses (rent, utilities, salaries, etc.)..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Marketing & Sales Expenses</label>
            <textarea
              value={editedData.marketingSalesExpenses}
              onChange={(e) => setEditedData({...editedData, marketingSalesExpenses: e.target.value})}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={5}
              placeholder="Define marketing and sales expenses..."
            />
          </div>
          
          <div className="flex items-center justify-end space-x-2 pt-2">
            <button
              onClick={() => {
                setIsEditing(false);
                setEditedData(expensesData);
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
            <h4 className="text-linkedin-light text-xs font-medium mb-2">Direct Costs</h4>
            <p className="text-gray-300 text-xs whitespace-pre-line">{expensesData.directCosts || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-linkedin-light text-xs font-medium mb-2">Operating Expenses</h4>
            <p className="text-gray-300 text-xs whitespace-pre-line">{expensesData.operatingExpenses || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-linkedin-light text-xs font-medium mb-2">Marketing & Sales Expenses</h4>
            <p className="text-gray-300 text-xs whitespace-pre-line">{expensesData.marketingSalesExpenses || "Not defined yet."}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpensesInputs;