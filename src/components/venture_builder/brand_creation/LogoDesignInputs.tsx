import React, { useState } from 'react';
import { 
  Save, 
  ArrowRight,
  ArrowLeft,
  Edit2,
  Upload,
  Image,
  Plus,
  Trash2
} from 'lucide-react';

interface LogoVariation {
  id: number;
  name: string;
  description: string;
  imageUrl?: string;
}

interface LogoDesignData {
  logoType: string;
  logoIcon: string;
  logoMeasurements: string;
  logoVariations: LogoVariation[];
  logoMinimumSize: string;
  logoPlacement: string;
  logoMisuses: string[];
}

interface LogoDesignInputsProps {
  logoDesignData: LogoDesignData;
  onUpdateLogoDesign: (data: LogoDesignData) => void;
  onContinue: () => void;
  onBack: () => void;
  onSkip: () => void;
  onSaveDraft: () => void;
}

const LogoDesignInputs: React.FC<LogoDesignInputsProps> = ({ 
  logoDesignData, 
  onUpdateLogoDesign, 
  onContinue, 
  onBack,
  onSkip, 
  onSaveDraft 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(logoDesignData);
  const [newMisuse, setNewMisuse] = useState('');
  const [newVariation, setNewVariation] = useState<Partial<LogoVariation>>({
    name: '',
    description: ''
  });
  const [isAddingVariation, setIsAddingVariation] = useState(false);

  const handleSave = () => {
    onUpdateLogoDesign(editedData);
    setIsEditing(false);
  };

  const handleAddMisuse = () => {
    if (newMisuse.trim()) {
      setEditedData({
        ...editedData,
        logoMisuses: [...editedData.logoMisuses, newMisuse.trim()]
      });
      setNewMisuse('');
    }
  };

  const handleRemoveMisuse = (index: number) => {
    setEditedData({
      ...editedData,
      logoMisuses: editedData.logoMisuses.filter((_, i) => i !== index)
    });
  };

  const handleAddVariation = () => {
    if (newVariation.name && newVariation.description) {
      const variation: LogoVariation = {
        id: Date.now(),
        name: newVariation.name,
        description: newVariation.description,
        imageUrl: newVariation.imageUrl
      };
      
      setEditedData({
        ...editedData,
        logoVariations: [...editedData.logoVariations, variation]
      });
      
      setNewVariation({
        name: '',
        description: ''
      });
      
      setIsAddingVariation(false);
    }
  };

  const handleRemoveVariation = (id: number) => {
    setEditedData({
      ...editedData,
      logoVariations: editedData.logoVariations.filter(v => v.id !== id)
    });
  };

  return (
    <div className="p-6 h-full overflow-y-auto space-y-4 text-sm">
      <h3 className="text-base font-semibold text-white mb-3 flex items-center">
        <Image className="w-5 h-5 text-linkedin-light mr-2" />
        Logo Design & Guidelines
      </h3>
      
      <p className="text-gray-300 text-xs mb-4">
        Define the logo design and usage guidelines. This will ensure consistent application of your logo across all brand touchpoints.
      </p>
      
      <div className="bg-linkedin-card/30 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-white font-medium text-xs">Logo Design</h4>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="p-1 text-gray-400 hover:text-white transition-colors"
            >
              <Edit2 className="w-3 h-3" />
            </button>
          )}
        </div>
        
        {isEditing ? (
          <div className="space-y-3">
            <div>
              <label className="block text-linkedin-light text-xs mb-1">Logotype & Icon</label>
              <textarea
                value={editedData.logoType}
                onChange={(e) => setEditedData({...editedData, logoType: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                rows={3}
                placeholder="Describe your logotype and icon..."
              />
            </div>
            
            <div>
              <label className="block text-linkedin-light text-xs mb-1">Logo Icon</label>
              <textarea
                value={editedData.logoIcon}
                onChange={(e) => setEditedData({...editedData, logoIcon: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                rows={3}
                placeholder="Describe your logo icon..."
              />
            </div>
            
            <div>
              <label className="block text-linkedin-light text-xs mb-1">Logo Measurements & Borders</label>
              <textarea
                value={editedData.logoMeasurements}
                onChange={(e) => setEditedData({...editedData, logoMeasurements: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                rows={3}
                placeholder="Define logo measurements, proportions, and clear space requirements..."
              />
            </div>
            
            <div>
              <label className="block text-linkedin-light text-xs mb-1">Logo Minimum Size</label>
              <textarea
                value={editedData.logoMinimumSize}
                onChange={(e) => setEditedData({...editedData, logoMinimumSize: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                rows={2}
                placeholder="Define minimum size requirements for different applications..."
              />
            </div>
            
            <div>
              <label className="block text-linkedin-light text-xs mb-1">Logo Placement</label>
              <textarea
                value={editedData.logoPlacement}
                onChange={(e) => setEditedData({...editedData, logoPlacement: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                rows={3}
                placeholder="Define logo placement guidelines for different applications..."
              />
            </div>
            
            <div>
              <label className="block text-linkedin-light text-xs mb-1">Logo Misuses</label>
              <div className="space-y-2 mb-2">
                {editedData.logoMisuses.map((misuse, index) => (
                  <div key={index} className="flex items-center justify-between bg-linkedin-card/50 rounded-lg p-2">
                    <span className="text-gray-300 text-xs">{misuse}</span>
                    <button
                      onClick={() => handleRemoveMisuse(index)}
                      className="text-gray-400 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={newMisuse}
                  onChange={(e) => setNewMisuse(e.target.value)}
                  className="flex-1 bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                  placeholder="Add a logo misuse..."
                />
                <button
                  onClick={handleAddMisuse}
                  className="bg-linkedin hover:bg-linkedin-dark text-white p-2 rounded-lg transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-end space-x-2 pt-2">
              <button
                onClick={() => {
                  setIsEditing(false);
                  setEditedData(logoDesignData);
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
          <div className="space-y-3">
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-1">Logotype & Icon</h5>
              <p className="text-gray-300 text-xs">{logoDesignData.logoType || "Not defined yet."}</p>
            </div>
            
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-1">Logo Icon</h5>
              <p className="text-gray-300 text-xs">{logoDesignData.logoIcon || "Not defined yet."}</p>
            </div>
            
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-1">Logo Measurements & Borders</h5>
              <p className="text-gray-300 text-xs">{logoDesignData.logoMeasurements || "Not defined yet."}</p>
            </div>
            
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-1">Logo Minimum Size</h5>
              <p className="text-gray-300 text-xs">{logoDesignData.logoMinimumSize || "Not defined yet."}</p>
            </div>
            
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-1">Logo Placement</h5>
              <p className="text-gray-300 text-xs">{logoDesignData.logoPlacement || "Not defined yet."}</p>
            </div>
            
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-1">Logo Misuses</h5>
              {logoDesignData.logoMisuses.length > 0 ? (
                <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                  {logoDesignData.logoMisuses.map((misuse, index) => (
                    <li key={index}>{misuse}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400 text-xs">No logo misuses defined yet.</p>
              )}
            </div>
          </div>
        )}
      </div>
      
      {/* Logo Variations */}
      <div className="bg-linkedin-card/30 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-white font-medium text-xs">Logo Variations</h4>
        </div>
        
        <div className="space-y-3">
          {logoDesignData.logoVariations.map((variation) => (
            <div key={variation.id} className="bg-linkedin-card/50 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <h5 className="text-linkedin-light text-xs font-medium">{variation.name}</h5>
                {isEditing && (
                  <button
                    onClick={() => handleRemoveVariation(variation.id)}
                    className="text-gray-400 hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                )}
              </div>
              <p className="text-gray-300 text-xs mb-2">{variation.description}</p>
              {variation.imageUrl && (
                <div className="mt-2 bg-gray-800 rounded-lg p-2 flex items-center justify-center">
                  <p className="text-gray-400 text-xs">[Logo variation image would be displayed here]</p>
                </div>
              )}
            </div>
          ))}
          
          {isEditing && isAddingVariation && (
            <div className="bg-linkedin-card/50 rounded-lg p-3 border border-linkedin-light">
              <div className="space-y-2">
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Variation Name</label>
                  <input
                    type="text"
                    value={newVariation.name}
                    onChange={(e) => setNewVariation({...newVariation, name: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                    placeholder="e.g., Horizontal, Vertical, Monochrome"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Description</label>
                  <textarea
                    value={newVariation.description}
                    onChange={(e) => setNewVariation({...newVariation, description: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                    rows={2}
                    placeholder="Describe this logo variation..."
                  />
                </div>
                
                <div className="flex items-center justify-end space-x-2 pt-2">
                  <button
                    onClick={() => {
                      setIsAddingVariation(false);
                      setNewVariation({
                        name: '',
                        description: ''
                      });
                    }}
                    className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddVariation}
                    className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs flex items-center space-x-1"
                  >
                    <Save className="w-3 h-3" />
                    <span>Save</span>
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {isEditing && !isAddingVariation && (
            <button
              onClick={() => setIsAddingVariation(true)}
              className="w-full flex items-center justify-center space-x-2 bg-linkedin-card/30 hover:bg-linkedin-card/50 border border-dashed border-linkedin-border hover:border-linkedin text-white px-3 py-2 rounded-lg transition-all text-xs"
            >
              <Plus className="w-4 h-4" />
              <span>Add Logo Variation</span>
            </button>
          )}
        </div>
      </div>
      
      {/* Upload Existing Logo Design */}
      <div className="bg-linkedin-card/30 rounded-lg p-4 mb-4">
        <h4 className="text-white font-medium text-xs mb-3">Upload Existing Logo Design</h4>
        <button
          className="w-full border-2 border-dashed border-linkedin-border rounded-lg p-6 flex flex-col items-center justify-center hover:border-linkedin transition-colors"
        >
          <Upload className="w-10 h-10 text-linkedin-light mb-3" />
          <p className="text-white font-medium mb-1">Upload Logo Design</p>
          <p className="text-gray-400 text-xs">Drag & drop files or click to browse</p>
        </button>
      </div>
      
      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-linkedin-border mt-4">
        <div className="flex items-center space-x-3">
          <button
            onClick={onBack}
            className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors text-xs"
          >
            <ArrowLeft className="w-3 h-3" />
            <span>Back</span>
          </button>
          <button
            onClick={onSkip}
            className="text-gray-400 hover:text-white transition-colors text-xs"
          >
            Skip for now
          </button>
          <button
            onClick={onSaveDraft}
            className="flex items-center space-x-2 bg-linkedin-card hover:bg-linkedin-card/70 text-white px-3 py-1.5 rounded-lg transition-colors text-xs"
          >
            <Save className="w-3 h-3" />
            <span>Save draft</span>
          </button>
        </div>
        <button
          onClick={onContinue}
          className="flex items-center space-x-2 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-4 py-1.5 rounded-lg transition-all text-xs"
        >
          <span>Continue to Color Palette</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default LogoDesignInputs;