import React, { useState } from 'react';
import { 
  Save, 
  ArrowRight,
  ArrowLeft,
  Edit2,
  Upload,
  Layout
} from 'lucide-react';

interface DesignElements {
  shapes: string;
  iconStyle: string;
  photographyStyle: string;
  illustrationStyle: string;
  graphicElements: string;
}

interface UIElements {
  buttonStyles: string;
  cardStyles: string;
  borderTreatments: string;
  shadowUsage: string;
  animationPreferences: string;
}

interface VisualStylesData {
  designElements: DesignElements;
  uiElements: UIElements;
}

interface VisualStylesInputsProps {
  visualStylesData: VisualStylesData;
  onUpdateVisualStyles: (data: VisualStylesData) => void;
  onContinue: () => void;
  onBack: () => void;
  onSkip: () => void;
  onSaveDraft: () => void;
}

const VisualStylesInputs: React.FC<VisualStylesInputsProps> = ({ 
  visualStylesData, 
  onUpdateVisualStyles, 
  onContinue, 
  onBack,
  onSkip, 
  onSaveDraft 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(visualStylesData);
  const [activeTab, setActiveTab] = useState<'design' | 'ui'>('design');

  const handleSave = () => {
    onUpdateVisualStyles(editedData);
    setIsEditing(false);
  };

  return (
    <div className="p-6 h-full overflow-y-auto space-y-4 text-sm">
      <h3 className="text-base font-semibold text-white mb-3 flex items-center">
        <Layout className="w-5 h-5 text-linkedin-light mr-2" />
        Visual Styles
      </h3>
      
      <p className="text-gray-300 text-xs mb-4">
        Define your brand's visual styles. These design elements will ensure consistency across all your brand touchpoints.
      </p>
      
      {/* Tabs */}
      <div className="flex items-center space-x-2 mb-4">
        <button
          onClick={() => setActiveTab('design')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeTab === 'design'
              ? 'bg-linkedin text-white'
              : 'bg-linkedin-card/50 text-gray-300 hover:text-white hover:bg-linkedin-card'
          }`}
        >
          Design Elements
        </button>
        <button
          onClick={() => setActiveTab('ui')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeTab === 'ui'
              ? 'bg-linkedin text-white'
              : 'bg-linkedin-card/50 text-gray-300 hover:text-white hover:bg-linkedin-card'
          }`}
        >
          UI/Digital Elements
        </button>
      </div>
      
      <div className="bg-linkedin-card/30 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-white font-medium text-xs">
            {activeTab === 'design' ? 'Design Elements' : 'UI/Digital Elements'}
          </h4>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="p-1 text-gray-400 hover:text-white transition-colors"
            >
              <Edit2 className="w-3 h-3" />
            </button>
          )}
        </div>
        
        {activeTab === 'design' && (
          isEditing ? (
            <div className="space-y-3">
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Preferred Shapes/Patterns</label>
                <textarea
                  value={editedData.designElements.shapes}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    designElements: { ...editedData.designElements, shapes: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Describe preferred shapes and patterns..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Icon Style</label>
                <textarea
                  value={editedData.designElements.iconStyle}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    designElements: { ...editedData.designElements, iconStyle: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Describe icon style..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Photography Style</label>
                <textarea
                  value={editedData.designElements.photographyStyle}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    designElements: { ...editedData.designElements, photographyStyle: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Describe photography style..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Illustration Style</label>
                <textarea
                  value={editedData.designElements.illustrationStyle}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    designElements: { ...editedData.designElements, illustrationStyle: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Describe illustration style..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Graphic Elements</label>
                <textarea
                  value={editedData.designElements.graphicElements}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    designElements: { ...editedData.designElements, graphicElements: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Describe graphic elements..."
                />
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Preferred Shapes/Patterns</h5>
                <p className="text-gray-300 text-xs">{visualStylesData.designElements.shapes || "Not defined yet."}</p>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Icon Style</h5>
                <p className="text-gray-300 text-xs">{visualStylesData.designElements.iconStyle || "Not defined yet."}</p>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Photography Style</h5>
                <p className="text-gray-300 text-xs">{visualStylesData.designElements.photographyStyle || "Not defined yet."}</p>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Illustration Style</h5>
                <p className="text-gray-300 text-xs">{visualStylesData.designElements.illustrationStyle || "Not defined yet."}</p>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Graphic Elements</h5>
                <p className="text-gray-300 text-xs">{visualStylesData.designElements.graphicElements || "Not defined yet."}</p>
              </div>
            </div>
          )
        )}
        
        {activeTab === 'ui' && (
          isEditing ? (
            <div className="space-y-3">
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Button Styles</label>
                <textarea
                  value={editedData.uiElements.buttonStyles}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    uiElements: { ...editedData.uiElements, buttonStyles: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Describe button styles..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Card/Container Styles</label>
                <textarea
                  value={editedData.uiElements.cardStyles}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    uiElements: { ...editedData.uiElements, cardStyles: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Describe card/container styles..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Border/Corner Treatments</label>
                <textarea
                  value={editedData.uiElements.borderTreatments}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    uiElements: { ...editedData.uiElements, borderTreatments: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Describe border/corner treatments..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Shadow/Depth Usage</label>
                <textarea
                  value={editedData.uiElements.shadowUsage}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    uiElements: { ...editedData.uiElements, shadowUsage: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Describe shadow/depth usage..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Animation Preferences</label>
                <textarea
                  value={editedData.uiElements.animationPreferences}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    uiElements: { ...editedData.uiElements, animationPreferences: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Describe animation preferences..."
                />
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Button Styles</h5>
                <p className="text-gray-300 text-xs">{visualStylesData.uiElements.buttonStyles || "Not defined yet."}</p>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Card/Container Styles</h5>
                <p className="text-gray-300 text-xs">{visualStylesData.uiElements.cardStyles || "Not defined yet."}</p>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Border/Corner Treatments</h5>
                <p className="text-gray-300 text-xs">{visualStylesData.uiElements.borderTreatments || "Not defined yet."}</p>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Shadow/Depth Usage</h5>
                <p className="text-gray-300 text-xs">{visualStylesData.uiElements.shadowUsage || "Not defined yet."}</p>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Animation Preferences</h5>
                <p className="text-gray-300 text-xs">{visualStylesData.uiElements.animationPreferences || "Not defined yet."}</p>
              </div>
            </div>
          )
        )}
        
        {isEditing && (
          <div className="flex items-center justify-end space-x-2 pt-4 mt-4 border-t border-linkedin-border/30">
            <button
              onClick={() => {
                setIsEditing(false);
                setEditedData(visualStylesData);
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
        )}
      </div>
      
      {/* Upload Existing Visual Styles */}
      <div className="bg-linkedin-card/30 rounded-lg p-4 mb-4">
        <h4 className="text-white font-medium text-xs mb-3">Upload Existing Visual Styles</h4>
        <button
          className="w-full border-2 border-dashed border-linkedin-border rounded-lg p-6 flex flex-col items-center justify-center hover:border-linkedin transition-colors"
        >
          <Upload className="w-10 h-10 text-linkedin-light mb-3" />
          <p className="text-white font-medium mb-1">Upload Visual Styles</p>
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
          <span>Continue to Brand Applications</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default VisualStylesInputs;