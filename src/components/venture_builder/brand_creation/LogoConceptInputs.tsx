import React, { useState } from 'react';
import { 
  Save, 
  ArrowRight,
  Edit2,
  Upload,
  Image
} from 'lucide-react';

interface LogoConceptData {
  visualStyle: string;
  keySymbolism: string;
  emotionalFeeling: string;
  logoTypePreference: string;
}

interface LogoConceptInputsProps {
  logoConceptData: LogoConceptData;
  onUpdateLogoConcept: (data: LogoConceptData) => void;
  onContinue: () => void;
  onSkip: () => void;
  onSaveDraft: () => void;
}

const LogoConceptInputs: React.FC<LogoConceptInputsProps> = ({ 
  logoConceptData, 
  onUpdateLogoConcept, 
  onContinue, 
  onSkip, 
  onSaveDraft 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(logoConceptData);

  const handleSave = () => {
    onUpdateLogoConcept(editedData);
    setIsEditing(false);
  };

  return (
    <div className="p-6 h-full overflow-y-auto space-y-4 text-sm">
      <h3 className="text-base font-semibold text-white mb-3 flex items-center">
        <Image className="w-5 h-5 text-linkedin-light mr-2" />
        Logo Concept
      </h3>
      
      <p className="text-gray-300 text-xs mb-4">
        Define the key elements of your logo concept. This will guide the AI in creating a logo that aligns with your brand vision.
      </p>
      
      <div className="bg-linkedin-card/30 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-white font-medium text-xs">Primary Concept</h4>
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
              <label className="block text-linkedin-light text-xs mb-1">Visual Style Preference</label>
              <select
                value={editedData.visualStyle}
                onChange={(e) => setEditedData({...editedData, visualStyle: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin text-xs"
              >
                <option value="" className="bg-slate-800">Select a visual style...</option>
                <option value="Minimalist" className="bg-slate-800">Minimalist</option>
                <option value="Modern" className="bg-slate-800">Modern</option>
                <option value="Classic" className="bg-slate-800">Classic</option>
                <option value="Playful" className="bg-slate-800">Playful</option>
                <option value="Geometric" className="bg-slate-800">Geometric</option>
                <option value="Abstract" className="bg-slate-800">Abstract</option>
                <option value="Illustrative" className="bg-slate-800">Illustrative</option>
                <option value="Typographic" className="bg-slate-800">Typographic</option>
              </select>
            </div>
            
            <div>
              <label className="block text-linkedin-light text-xs mb-1">Key Symbolism to Include</label>
              <textarea
                value={editedData.keySymbolism}
                onChange={(e) => setEditedData({...editedData, keySymbolism: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                rows={3}
                placeholder="Describe any symbols, shapes, or elements you'd like to include in your logo..."
              />
            </div>
            
            <div>
              <label className="block text-linkedin-light text-xs mb-1">Emotional Feeling to Convey</label>
              <textarea
                value={editedData.emotionalFeeling}
                onChange={(e) => setEditedData({...editedData, emotionalFeeling: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                rows={3}
                placeholder="Describe the emotions or feelings you want your logo to evoke..."
              />
            </div>
            
            <div>
              <label className="block text-linkedin-light text-xs mb-1">Logo Type Preference</label>
              <select
                value={editedData.logoTypePreference}
                onChange={(e) => setEditedData({...editedData, logoTypePreference: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin text-xs"
              >
                <option value="" className="bg-slate-800">Select a logo type...</option>
                <option value="Wordmark" className="bg-slate-800">Wordmark (text only)</option>
                <option value="Symbol" className="bg-slate-800">Symbol (icon only)</option>
                <option value="Monogram" className="bg-slate-800">Monogram (letter-based)</option>
                <option value="Combination" className="bg-slate-800">Combination (text + symbol)</option>
                <option value="Emblem" className="bg-slate-800">Emblem (text within symbol)</option>
              </select>
            </div>
            
            <div className="flex items-center justify-end space-x-2 pt-2">
              <button
                onClick={() => {
                  setIsEditing(false);
                  setEditedData(logoConceptData);
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
              <h5 className="text-linkedin-light text-xs font-medium mb-1">Visual Style Preference</h5>
              <p className="text-gray-300 text-xs">{logoConceptData.visualStyle || "Not defined yet."}</p>
            </div>
            
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-1">Key Symbolism to Include</h5>
              <p className="text-gray-300 text-xs">{logoConceptData.keySymbolism || "Not defined yet."}</p>
            </div>
            
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-1">Emotional Feeling to Convey</h5>
              <p className="text-gray-300 text-xs">{logoConceptData.emotionalFeeling || "Not defined yet."}</p>
            </div>
            
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-1">Logo Type Preference</h5>
              <p className="text-gray-300 text-xs">{logoConceptData.logoTypePreference || "Not defined yet."}</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Upload Existing Logo Concept */}
      <div className="bg-linkedin-card/30 rounded-lg p-4 mb-4">
        <h4 className="text-white font-medium text-xs mb-3">Upload Existing Logo Concept</h4>
        <button
          className="w-full border-2 border-dashed border-linkedin-border rounded-lg p-6 flex flex-col items-center justify-center hover:border-linkedin transition-colors"
        >
          <Upload className="w-10 h-10 text-linkedin-light mb-3" />
          <p className="text-white font-medium mb-1">Upload Logo Concept</p>
          <p className="text-gray-400 text-xs">Drag & drop files or click to browse</p>
        </button>
      </div>
      
      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-linkedin-border mt-4">
        <div className="flex items-center space-x-3">
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
          <span>Continue to Logo Design</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default LogoConceptInputs;