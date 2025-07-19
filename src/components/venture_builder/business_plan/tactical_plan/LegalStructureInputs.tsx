import React, { useState } from 'react';
import { 
  Edit2, 
  Save
} from 'lucide-react';

interface LegalStructureData {
  numberOfEntities: string;
  typeOfEntity: string;
  jurisdictionAnalysis: string;
  legalCompliance: string;
  protectionSecurity: string;
  requiredAgreements: string;
}

interface LegalStructureInputsProps {
  legalData: LegalStructureData;
  onUpdateLegal: (data: LegalStructureData) => void;
}

const LegalStructureInputs: React.FC<LegalStructureInputsProps> = ({ 
  legalData, 
  onUpdateLegal 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(legalData);

  const handleSave = () => {
    onUpdateLegal(editedData);
    setIsEditing(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-white">Legal Structure</h3>
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
        Define the legal structure for your business across the strategy roadmap. This will guide your legal compliance and protection strategies.
      </p>
      
      {isEditing ? (
        <div className="space-y-4">
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Number of Entities</label>
            <textarea
              value={editedData.numberOfEntities}
              onChange={(e) => setEditedData({...editedData, numberOfEntities: e.target.value})}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={2}
              placeholder="Define the number of legal entities needed..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Type of Entity</label>
            <textarea
              value={editedData.typeOfEntity}
              onChange={(e) => setEditedData({...editedData, typeOfEntity: e.target.value})}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={2}
              placeholder="Define the type of legal entity (LLC, Corporation, etc.)..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Jurisdiction Analysis & Selection</label>
            <textarea
              value={editedData.jurisdictionAnalysis}
              onChange={(e) => setEditedData({...editedData, jurisdictionAnalysis: e.target.value})}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={3}
              placeholder="Analyze and select the best jurisdiction for your business..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Legal Compliance</label>
            <textarea
              value={editedData.legalCompliance}
              onChange={(e) => setEditedData({...editedData, legalCompliance: e.target.value})}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={3}
              placeholder="Define legal compliance requirements and strategies..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Protection & Security</label>
            <textarea
              value={editedData.protectionSecurity}
              onChange={(e) => setEditedData({...editedData, protectionSecurity: e.target.value})}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={3}
              placeholder="Define intellectual property protection and security measures..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Required Agreements</label>
            <textarea
              value={editedData.requiredAgreements}
              onChange={(e) => setEditedData({...editedData, requiredAgreements: e.target.value})}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={3}
              placeholder="List required legal agreements (contracts, NDAs, etc.)..."
            />
          </div>
          
          <div className="flex items-center justify-end space-x-2 pt-2">
            <button
              onClick={() => {
                setIsEditing(false);
                setEditedData(legalData);
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
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Number of Entities</h5>
            <p className="text-gray-300 text-xs">{legalData.numberOfEntities || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Type of Entity</h5>
            <p className="text-gray-300 text-xs">{legalData.typeOfEntity || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Jurisdiction Analysis & Selection</h5>
            <p className="text-gray-300 text-xs">{legalData.jurisdictionAnalysis || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Legal Compliance</h5>
            <p className="text-gray-300 text-xs">{legalData.legalCompliance || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Protection & Security</h5>
            <p className="text-gray-300 text-xs">{legalData.protectionSecurity || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Required Agreements</h5>
            <p className="text-gray-300 text-xs">{legalData.requiredAgreements || "Not defined yet."}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LegalStructureInputs;