import React, { useState } from 'react';
import { 
  Save, 
  ArrowRight,
  ArrowLeft,
  Edit2,
  Upload,
  Palette,
  Plus,
  Trash2
} from 'lucide-react';

interface ColorDefinition {
  id: number;
  name: string;
  hex: string;
  usage: string;
}

interface ColorPaletteData {
  colors: ColorDefinition[];
}

interface ColorPaletteInputsProps {
  colorPaletteData: ColorPaletteData;
  onUpdateColorPalette: (data: ColorPaletteData) => void;
  onContinue: () => void;
  onBack: () => void;
  onSkip: () => void;
  onSaveDraft: () => void;
}

const ColorPaletteInputs: React.FC<ColorPaletteInputsProps> = ({ 
  colorPaletteData, 
  onUpdateColorPalette, 
  onContinue, 
  onBack,
  onSkip, 
  onSaveDraft 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(colorPaletteData);
  const [newColor, setNewColor] = useState<Partial<ColorDefinition>>({
    name: '',
    hex: '',
    usage: ''
  });
  const [isAddingColor, setIsAddingColor] = useState(false);
  const [editingColorId, setEditingColorId] = useState<number | null>(null);

  const handleSave = () => {
    onUpdateColorPalette(editedData);
    setIsEditing(false);
  };

  const handleAddColor = () => {
    if (newColor.name && newColor.hex) {
      const color: ColorDefinition = {
        id: Date.now(),
        name: newColor.name,
        hex: newColor.hex,
        usage: newColor.usage || ''
      };
      
      setEditedData({
        ...editedData,
        colors: [...editedData.colors, color]
      });
      
      setNewColor({
        name: '',
        hex: '',
        usage: ''
      });
      
      setIsAddingColor(false);
    }
  };

  const handleEditColor = (color: ColorDefinition) => {
    setEditingColorId(color.id);
    setNewColor({
      name: color.name,
      hex: color.hex,
      usage: color.usage
    });
  };

  const handleSaveColorEdit = () => {
    if (editingColorId && newColor.name && newColor.hex) {
      const updatedColors = editedData.colors.map(color => 
        color.id === editingColorId 
          ? {
              ...color,
              name: newColor.name || color.name,
              hex: newColor.hex || color.hex,
              usage: newColor.usage || color.usage
            }
          : color
      );
      
      setEditedData({
        ...editedData,
        colors: updatedColors
      });
      
      setEditingColorId(null);
      setNewColor({
        name: '',
        hex: '',
        usage: ''
      });
    }
  };

  const handleRemoveColor = (id: number) => {
    setEditedData({
      ...editedData,
      colors: editedData.colors.filter(color => color.id !== id)
    });
    
    if (editingColorId === id) {
      setEditingColorId(null);
      setNewColor({
        name: '',
        hex: '',
        usage: ''
      });
    }
  };

  return (
    <div className="p-6 h-full overflow-y-auto space-y-4 text-sm">
      <h3 className="text-base font-semibold text-white mb-3 flex items-center">
        <Palette className="w-5 h-5 text-linkedin-light mr-2" />
        Color Palette
      </h3>
      
      <p className="text-gray-300 text-xs mb-4">
        Define your brand's color palette. Colors play a crucial role in brand recognition and emotional connection with your audience.
      </p>
      
      <div className="bg-linkedin-card/30 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-white font-medium text-xs">Color Palette</h4>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="p-1 text-gray-400 hover:text-white transition-colors"
            >
              <Edit2 className="w-3 h-3" />
            </button>
          )}
        </div>
        
        <div className="space-y-3">
          {colorPaletteData.colors.length === 0 && !isAddingColor && (
            <div className="bg-linkedin-card/50 rounded-lg p-4 text-center">
              <p className="text-gray-400 text-xs">No colors defined yet. Add colors to your palette to get started.</p>
            </div>
          )}
          
          {colorPaletteData.colors.map((color) => (
            <div 
              key={color.id} 
              className={`bg-linkedin-card/50 rounded-lg p-3 ${
                editingColorId === color.id ? 'border border-linkedin-light' : ''
              }`}
            >
              {editingColorId === color.id ? (
                <div className="space-y-2">
                  <div>
                    <label className="block text-gray-300 text-xs mb-1">Color Name</label>
                    <input
                      type="text"
                      value={newColor.name}
                      onChange={(e) => setNewColor({...newColor, name: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                      placeholder="e.g., Primary Blue, Secondary Green"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-xs mb-1">HEX Code</label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={newColor.hex}
                        onChange={(e) => setNewColor({...newColor, hex: e.target.value})}
                        className="flex-1 bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                        placeholder="e.g., #0077B5"
                      />
                      <div 
                        className="w-8 h-8 rounded-lg border border-white/20"
                        style={{ backgroundColor: newColor.hex }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-xs mb-1">Usage</label>
                    <textarea
                      value={newColor.usage}
                      onChange={(e) => setNewColor({...newColor, usage: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                      rows={2}
                      placeholder="Describe when and how this color should be used..."
                    />
                  </div>
                  
                  <div className="flex items-center justify-end space-x-2 pt-2">
                    <button
                      onClick={() => {
                        setEditingColorId(null);
                        setNewColor({
                          name: '',
                          hex: '',
                          usage: ''
                        });
                      }}
                      className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveColorEdit}
                      className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs flex items-center space-x-1"
                    >
                      <Save className="w-3 h-3" />
                      <span>Save</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-6 h-6 rounded-lg border border-white/20"
                        style={{ backgroundColor: color.hex }}
                      ></div>
                      <h5 className="text-white text-xs font-medium">{color.name}</h5>
                    </div>
                    {isEditing && (
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleEditColor(color)}
                          className="p-1 text-gray-400 hover:text-white transition-colors"
                        >
                          <Edit2 className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => handleRemoveColor(color.id)}
                          className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-3 text-xs">
                    <span className="text-gray-400">{color.hex}</span>
                    {color.usage && (
                      <>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-300">{color.usage}</span>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {isEditing && isAddingColor && (
            <div className="bg-linkedin-card/50 rounded-lg p-3 border border-linkedin-light">
              <div className="space-y-2">
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Color Name</label>
                  <input
                    type="text"
                    value={newColor.name}
                    onChange={(e) => setNewColor({...newColor, name: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                    placeholder="e.g., Primary Blue, Secondary Green"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-xs mb-1">HEX Code</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={newColor.hex}
                      onChange={(e) => setNewColor({...newColor, hex: e.target.value})}
                      className="flex-1 bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                      placeholder="e.g., #0077B5"
                    />
                    <div 
                      className="w-8 h-8 rounded-lg border border-white/20"
                      style={{ backgroundColor: newColor.hex }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Usage</label>
                  <textarea
                    value={newColor.usage}
                    onChange={(e) => setNewColor({...newColor, usage: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                    rows={2}
                    placeholder="Describe when and how this color should be used..."
                  />
                </div>
                
                <div className="flex items-center justify-end space-x-2 pt-2">
                  <button
                    onClick={() => {
                      setIsAddingColor(false);
                      setNewColor({
                        name: '',
                        hex: '',
                        usage: ''
                      });
                    }}
                    className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddColor}
                    className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs flex items-center space-x-1"
                  >
                    <Save className="w-3 h-3" />
                    <span>Save</span>
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {isEditing && !isAddingColor && (
            <button
              onClick={() => setIsAddingColor(true)}
              className="w-full flex items-center justify-center space-x-2 bg-linkedin-card/30 hover:bg-linkedin-card/50 border border-dashed border-linkedin-border hover:border-linkedin text-white px-3 py-2 rounded-lg transition-all text-xs"
            >
              <Plus className="w-4 h-4" />
              <span>Add Color</span>
            </button>
          )}
        </div>
        
        {isEditing && (
          <div className="flex items-center justify-end space-x-2 pt-4 mt-4 border-t border-linkedin-border/30">
            <button
              onClick={() => {
                setIsEditing(false);
                setEditedData(colorPaletteData);
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
      
      {/* Upload Existing Color Palette */}
      <div className="bg-linkedin-card/30 rounded-lg p-4 mb-4">
        <h4 className="text-white font-medium text-xs mb-3">Upload Existing Color Palette</h4>
        <button
          className="w-full border-2 border-dashed border-linkedin-border rounded-lg p-6 flex flex-col items-center justify-center hover:border-linkedin transition-colors"
        >
          <Upload className="w-10 h-10 text-linkedin-light mb-3" />
          <p className="text-white font-medium mb-1">Upload Color Palette</p>
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
          <span>Continue to Typography</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default ColorPaletteInputs;