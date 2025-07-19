import React, { useState } from 'react';
import { 
  Save, 
  ArrowRight,
  ArrowLeft,
  Edit2,
  Upload,
  Type,
  Plus,
  Trash2
} from 'lucide-react';

interface TypefaceDefinition {
  fontFamily: string;
  availableWeights: string;
  usageContext: string;
}

interface TypographyHierarchy {
  h1: string;
  h2: string;
  h3: string;
  bodyText: string;
  caption: string;
  otherSpecifications: string;
}

interface TypographyData {
  primaryTypeface: TypefaceDefinition;
  secondaryTypeface: TypefaceDefinition;
  typographyHierarchy: TypographyHierarchy;
}

interface TypographyInputsProps {
  typographyData: TypographyData;
  onUpdateTypography: (data: TypographyData) => void;
  onContinue: () => void;
  onBack: () => void;
  onSkip: () => void;
  onSaveDraft: () => void;
}

const TypographyInputs: React.FC<TypographyInputsProps> = ({ 
  typographyData, 
  onUpdateTypography, 
  onContinue, 
  onBack,
  onSkip, 
  onSaveDraft 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(typographyData);

  const handleSave = () => {
    onUpdateTypography(editedData);
    setIsEditing(false);
  };

  return (
    <div className="p-6 h-full overflow-y-auto space-y-4 text-sm">
      <h3 className="text-base font-semibold text-white mb-3 flex items-center">
        <Type className="w-5 h-5 text-linkedin-light mr-2" />
        Typography
      </h3>
      
      <p className="text-gray-300 text-xs mb-4">
        Define your brand's typography system. The right fonts will reinforce your brand personality and ensure readability across all touchpoints.
      </p>
      
      <div className="bg-linkedin-card/30 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-white font-medium text-xs">Typography System</h4>
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
          <div className="space-y-4">
            {/* Primary Typeface */}
            <div>
              <h5 className="text-linkedin-light text-xs font-medium mb-2">Primary Typeface</h5>
              <div className="space-y-2">
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Font Family</label>
                  <input
                    type="text"
                    value={editedData.primaryTypeface.fontFamily}
                    onChange={(e) => setEditedData({
                      ...editedData,
                      primaryTypeface: { ...editedData.primaryTypeface, fontFamily: e.target.value }
                    })}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                    placeholder="e.g., Roboto, Helvetica Neue"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Available Weights</label>
                  <input
                    type="text"
                    value={editedData.primaryTypeface.availableWeights}
                    onChange={(e) => setEditedData({
                      ...editedData,
                      primaryTypeface: { ...editedData.primaryTypeface, availableWeights: e.target.value }
                    })}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                    placeholder="e.g., Regular (400), Medium (500), Bold (700)"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Usage Context</label>
                  <textarea
                    value={editedData.primaryTypeface.usageContext}
                    onChange={(e) => setEditedData({
                      ...editedData,
                      primaryTypeface: { ...editedData.primaryTypeface, usageContext: e.target.value }
                    })}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                    rows={2}
                    placeholder="Describe when and how this typeface should be used..."
                  />
                </div>
              </div>
            </div>
            
            {/* Secondary Typeface */}
            <div>
              <h5 className="text-linkedin-light text-xs font-medium mb-2">Secondary Typeface</h5>
              <div className="space-y-2">
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Font Family</label>
                  <input
                    type="text"
                    value={editedData.secondaryTypeface.fontFamily}
                    onChange={(e) => setEditedData({
                      ...editedData,
                      secondaryTypeface: { ...editedData.secondaryTypeface, fontFamily: e.target.value }
                    })}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                    placeholder="e.g., Merriweather, Georgia"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Available Weights</label>
                  <input
                    type="text"
                    value={editedData.secondaryTypeface.availableWeights}
                    onChange={(e) => setEditedData({
                      ...editedData,
                      secondaryTypeface: { ...editedData.secondaryTypeface, availableWeights: e.target.value }
                    })}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                    placeholder="e.g., Regular (400), Medium (500), Bold (700)"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Usage Context</label>
                  <textarea
                    value={editedData.secondaryTypeface.usageContext}
                    onChange={(e) => setEditedData({
                      ...editedData,
                      secondaryTypeface: { ...editedData.secondaryTypeface, usageContext: e.target.value }
                    })}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                    rows={2}
                    placeholder="Describe when and how this typeface should be used..."
                  />
                </div>
              </div>
            </div>
            
            {/* Typography Hierarchy */}
            <div>
              <h5 className="text-linkedin-light text-xs font-medium mb-2">Typography Hierarchy</h5>
              <div className="space-y-2">
                <div>
                  <label className="block text-gray-300 text-xs mb-1">H1</label>
                  <input
                    type="text"
                    value={editedData.typographyHierarchy.h1}
                    onChange={(e) => setEditedData({
                      ...editedData,
                      typographyHierarchy: { ...editedData.typographyHierarchy, h1: e.target.value }
                    })}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                    placeholder="e.g., Roboto Bold, 32px, #333333"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-xs mb-1">H2</label>
                  <input
                    type="text"
                    value={editedData.typographyHierarchy.h2}
                    onChange={(e) => setEditedData({
                      ...editedData,
                      typographyHierarchy: { ...editedData.typographyHierarchy, h2: e.target.value }
                    })}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                    placeholder="e.g., Roboto Bold, 24px, #333333"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-xs mb-1">H3</label>
                  <input
                    type="text"
                    value={editedData.typographyHierarchy.h3}
                    onChange={(e) => setEditedData({
                      ...editedData,
                      typographyHierarchy: { ...editedData.typographyHierarchy, h3: e.target.value }
                    })}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                    placeholder="e.g., Roboto Medium, 18px, #333333"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Body Text</label>
                  <input
                    type="text"
                    value={editedData.typographyHierarchy.bodyText}
                    onChange={(e) => setEditedData({
                      ...editedData,
                      typographyHierarchy: { ...editedData.typographyHierarchy, bodyText: e.target.value }
                    })}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                    placeholder="e.g., Roboto Regular, 16px, #555555"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Caption</label>
                  <input
                    type="text"
                    value={editedData.typographyHierarchy.caption}
                    onChange={(e) => setEditedData({
                      ...editedData,
                      typographyHierarchy: { ...editedData.typographyHierarchy, caption: e.target.value }
                    })}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                    placeholder="e.g., Roboto Light, 14px, #777777"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Other Specifications</label>
                  <textarea
                    value={editedData.typographyHierarchy.otherSpecifications}
                    onChange={(e) => setEditedData({
                      ...editedData,
                      typographyHierarchy: { ...editedData.typographyHierarchy, otherSpecifications: e.target.value }
                    })}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                    rows={2}
                    placeholder="Any additional typography specifications..."
                  />
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-end space-x-2 pt-2">
              <button
                onClick={() => {
                  setIsEditing(false);
                  setEditedData(typographyData);
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
            {/* Primary Typeface */}
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-2">Primary Typeface</h5>
              <div className="space-y-1">
                <div className="flex items-start">
                  <span className="text-gray-400 text-xs w-32">Font Family:</span>
                  <span className="text-white text-xs">{typographyData.primaryTypeface.fontFamily || "Not defined yet."}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 text-xs w-32">Available Weights:</span>
                  <span className="text-white text-xs">{typographyData.primaryTypeface.availableWeights || "Not defined yet."}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 text-xs w-32">Usage Context:</span>
                  <span className="text-white text-xs">{typographyData.primaryTypeface.usageContext || "Not defined yet."}</span>
                </div>
              </div>
            </div>
            
            {/* Secondary Typeface */}
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-2">Secondary Typeface</h5>
              <div className="space-y-1">
                <div className="flex items-start">
                  <span className="text-gray-400 text-xs w-32">Font Family:</span>
                  <span className="text-white text-xs">{typographyData.secondaryTypeface.fontFamily || "Not defined yet."}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 text-xs w-32">Available Weights:</span>
                  <span className="text-white text-xs">{typographyData.secondaryTypeface.availableWeights || "Not defined yet."}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 text-xs w-32">Usage Context:</span>
                  <span className="text-white text-xs">{typographyData.secondaryTypeface.usageContext || "Not defined yet."}</span>
                </div>
              </div>
            </div>
            
            {/* Typography Hierarchy */}
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-2">Typography Hierarchy</h5>
              <div className="space-y-1">
                <div className="flex items-start">
                  <span className="text-gray-400 text-xs w-32">H1:</span>
                  <span className="text-white text-xs">{typographyData.typographyHierarchy.h1 || "Not defined yet."}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 text-xs w-32">H2:</span>
                  <span className="text-white text-xs">{typographyData.typographyHierarchy.h2 || "Not defined yet."}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 text-xs w-32">H3:</span>
                  <span className="text-white text-xs">{typographyData.typographyHierarchy.h3 || "Not defined yet."}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 text-xs w-32">Body Text:</span>
                  <span className="text-white text-xs">{typographyData.typographyHierarchy.bodyText || "Not defined yet."}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 text-xs w-32">Caption:</span>
                  <span className="text-white text-xs">{typographyData.typographyHierarchy.caption || "Not defined yet."}</span>
                </div>
                {typographyData.typographyHierarchy.otherSpecifications && (
                  <div className="flex items-start">
                    <span className="text-gray-400 text-xs w-32">Other:</span>
                    <span className="text-white text-xs">{typographyData.typographyHierarchy.otherSpecifications}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Upload Existing Typography */}
      <div className="bg-linkedin-card/30 rounded-lg p-4 mb-4">
        <h4 className="text-white font-medium text-xs mb-3">Upload Existing Typography</h4>
        <button
          className="w-full border-2 border-dashed border-linkedin-border rounded-lg p-6 flex flex-col items-center justify-center hover:border-linkedin transition-colors"
        >
          <Upload className="w-10 h-10 text-linkedin-light mb-3" />
          <p className="text-white font-medium mb-1">Upload Typography Guidelines</p>
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
          <span>Continue to Visual Styles</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default TypographyInputs;