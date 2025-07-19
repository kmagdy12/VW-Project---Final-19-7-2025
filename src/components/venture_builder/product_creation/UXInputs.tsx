import React, { useState } from 'react';
import { 
  Save, 
  ArrowRight,
  Edit2,
  Layers,
  Plus,
  Trash2
} from 'lucide-react';

interface PlatformSection {
  id: number;
  name: string;
  description: string;
  screens: {
    id: number;
    name: string;
    description: string;
    elements: {
      id: number;
      name: string;
      description: string;
      elementType: string;
    }[];
  }[];
}

interface UXData {
  platformSections: PlatformSection[];
  sectionsNavigation: string;
  screensNavigation: string;
  platformBranding: {
    colorPalette: string;
    typographySystem: string;
    layoutSystem: string;
    componentDesign: string;
  };
  prototypeContext: {
    userProfile: string;
    industryContext: string;
    geographicalSpecifics: string;
    financialParameters: string;
    dataPoints: string;
  };
}

interface UXInputsProps {
  uxData: UXData;
  onUpdateUX: (data: UXData) => void;
  onContinue: () => void;
  onSkip: () => void;
  onSaveDraft: () => void;
}

const UXInputs: React.FC<UXInputsProps> = ({ 
  uxData, 
  onUpdateUX, 
  onContinue, 
  onSkip, 
  onSaveDraft 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(uxData);
  const [activeTab, setActiveTab] = useState<'platform' | 'branding' | 'context'>('platform');
  const [activeSectionId, setActiveSectionId] = useState<number | null>(null);
  const [activeScreenId, setActiveScreenId] = useState<number | null>(null);
  const [isAddingSection, setIsAddingSection] = useState(false);
  const [isAddingScreen, setIsAddingScreen] = useState(false);
  const [isAddingElement, setIsAddingElement] = useState(false);
  const [newSection, setNewSection] = useState({ name: '', description: '' });
  const [newScreen, setNewScreen] = useState({ name: '', description: '' });
  const [newElement, setNewElement] = useState({ name: '', description: '', elementType: '' });

  const handleSave = () => {
    onUpdateUX(editedData);
    setIsEditing(false);
  };

  const handleAddSection = () => {
    if (newSection.name) {
      const section: PlatformSection = {
        id: Date.now(),
        name: newSection.name,
        description: newSection.description,
        screens: []
      };
      
      setEditedData({
        ...editedData,
        platformSections: [...editedData.platformSections, section]
      });
      
      setNewSection({ name: '', description: '' });
      setIsAddingSection(false);
      setActiveSectionId(section.id);
    }
  };

  const handleAddScreen = (sectionId: number) => {
    if (newScreen.name) {
      const screen = {
        id: Date.now(),
        name: newScreen.name,
        description: newScreen.description,
        elements: []
      };
      
      const updatedSections = editedData.platformSections.map(section => {
        if (section.id === sectionId) {
          return {
            ...section,
            screens: [...section.screens, screen]
          };
        }
        return section;
      });
      
      setEditedData({
        ...editedData,
        platformSections: updatedSections
      });
      
      setNewScreen({ name: '', description: '' });
      setIsAddingScreen(false);
      setActiveScreenId(screen.id);
    }
  };

  const handleAddElement = (sectionId: number, screenId: number) => {
    if (newElement.name && newElement.elementType) {
      const element = {
        id: Date.now(),
        name: newElement.name,
        description: newElement.description,
        elementType: newElement.elementType
      };
      
      const updatedSections = editedData.platformSections.map(section => {
        if (section.id === sectionId) {
          return {
            ...section,
            screens: section.screens.map(screen => {
              if (screen.id === screenId) {
                return {
                  ...screen,
                  elements: [...screen.elements, element]
                };
              }
              return screen;
            })
          };
        }
        return section;
      });
      
      setEditedData({
        ...editedData,
        platformSections: updatedSections
      });
      
      setNewElement({ name: '', description: '', elementType: '' });
      setIsAddingElement(false);
    }
  };

  const handleRemoveSection = (sectionId: number) => {
    setEditedData({
      ...editedData,
      platformSections: editedData.platformSections.filter(section => section.id !== sectionId)
    });
    
    if (activeSectionId === sectionId) {
      setActiveSectionId(null);
      setActiveScreenId(null);
    }
  };

  const handleRemoveScreen = (sectionId: number, screenId: number) => {
    const updatedSections = editedData.platformSections.map(section => {
      if (section.id === sectionId) {
        return {
          ...section,
          screens: section.screens.filter(screen => screen.id !== screenId)
        };
      }
      return section;
    });
    
    setEditedData({
      ...editedData,
      platformSections: updatedSections
    });
    
    if (activeScreenId === screenId) {
      setActiveScreenId(null);
    }
  };

  const handleRemoveElement = (sectionId: number, screenId: number, elementId: number) => {
    const updatedSections = editedData.platformSections.map(section => {
      if (section.id === sectionId) {
        return {
          ...section,
          screens: section.screens.map(screen => {
            if (screen.id === screenId) {
              return {
                ...screen,
                elements: screen.elements.filter(element => element.id !== elementId)
              };
            }
            return screen;
          })
        };
      }
      return section;
    });
    
    setEditedData({
      ...editedData,
      platformSections: updatedSections
    });
  };

  return (
    <div className="p-6 h-full overflow-y-auto space-y-4 text-sm">
      <h3 className="text-base font-semibold text-white mb-3 flex items-center">
        <Layers className="w-5 h-5 text-linkedin-light mr-2" />
        User Experience Design
      </h3>
      
      <p className="text-gray-300 text-xs mb-4">
        Define the user experience for your product. This will guide the development of your prototype and MVP.
      </p>
      
      {/* Tabs */}
      <div className="flex items-center space-x-2 mb-4">
        <button
          onClick={() => setActiveTab('platform')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeTab === 'platform'
              ? 'bg-linkedin text-white'
              : 'bg-linkedin-card/50 text-gray-300 hover:text-white hover:bg-linkedin-card'
          }`}
        >
          Platform Structure
        </button>
        <button
          onClick={() => setActiveTab('branding')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeTab === 'branding'
              ? 'bg-linkedin text-white'
              : 'bg-linkedin-card/50 text-gray-300 hover:text-white hover:bg-linkedin-card'
          }`}
        >
          Platform Branding
        </button>
        <button
          onClick={() => setActiveTab('context')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeTab === 'context'
              ? 'bg-linkedin text-white'
              : 'bg-linkedin-card/50 text-gray-300 hover:text-white hover:bg-linkedin-card'
          }`}
        >
          Prototype Context
        </button>
      </div>
      
      {/* Platform Structure Tab */}
      {activeTab === 'platform' && (
        <div className="space-y-4">
          {/* Platform Sections */}
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-white font-medium text-xs">Platform Sections</h4>
              {isEditing && (
                <button
                  onClick={() => setIsAddingSection(true)}
                  className="p-1 text-linkedin-light hover:text-white transition-colors"
                >
                  <Plus className="w-3 h-3" />
                </button>
              )}
            </div>
            
            {isAddingSection && (
              <div className="bg-linkedin-card/50 rounded-lg p-3 mb-3 border border-linkedin-light">
                <div className="space-y-2">
                  <div>
                    <label className="block text-gray-300 text-xs mb-1">Section Name</label>
                    <input
                      type="text"
                      value={newSection.name}
                      onChange={(e) => setNewSection({...newSection, name: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                      placeholder="e.g., Dashboard, Profile, Settings"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-xs mb-1">Description</label>
                    <textarea
                      value={newSection.description}
                      onChange={(e) => setNewSection({...newSection, description: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                      rows={2}
                      placeholder="Describe this section..."
                    />
                  </div>
                  
                  <div className="flex items-center justify-end space-x-2">
                    <button
                      onClick={() => setIsAddingSection(false)}
                      className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleAddSection}
                      className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs"
                    >
                      Add Section
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            <div className="space-y-2">
              {editedData.platformSections.map((section) => (
                <div key={section.id} className="bg-linkedin-card/50 rounded-lg overflow-hidden">
                  <div 
                    className="p-3 cursor-pointer flex items-center justify-between"
                    onClick={() => setActiveSectionId(activeSectionId === section.id ? null : section.id)}
                  >
                    <div>
                      <h5 className="text-white text-xs font-medium">{section.name}</h5>
                      <p className="text-gray-400 text-xs">{section.description}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {isEditing && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveSection(section.id);
                          }}
                          className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      )}
                      <div className="w-5 h-5 flex items-center justify-center">
                        {activeSectionId === section.id ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-400">
                            <path d="M18 15l-6-6-6 6"></path>
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-400">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {activeSectionId === section.id && (
                    <div className="p-3 border-t border-linkedin-border/30">
                      <h6 className="text-linkedin-light text-xs font-medium mb-2">Screens</h6>
                      
                      {isEditing && (
                        <button
                          onClick={() => setIsAddingScreen(true)}
                          className="w-full flex items-center justify-center space-x-2 bg-linkedin-card/30 hover:bg-linkedin-card/50 border border-dashed border-linkedin-border hover:border-linkedin text-white px-3 py-2 rounded-lg transition-all text-xs mb-3"
                        >
                          <Plus className="w-3 h-3" />
                          <span>Add Screen</span>
                        </button>
                      )}
                      
                      {isAddingScreen && (
                        <div className="bg-linkedin-card/30 rounded-lg p-3 mb-3 border border-linkedin-light">
                          <div className="space-y-2">
                            <div>
                              <label className="block text-gray-300 text-xs mb-1">Screen Name</label>
                              <input
                                type="text"
                                value={newScreen.name}
                                onChange={(e) => setNewScreen({...newScreen, name: e.target.value})}
                                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                                placeholder="e.g., Login, Home, Profile Details"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-gray-300 text-xs mb-1">Description</label>
                              <textarea
                                value={newScreen.description}
                                onChange={(e) => setNewScreen({...newScreen, description: e.target.value})}
                                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                                rows={2}
                                placeholder="Describe this screen..."
                              />
                            </div>
                            
                            <div className="flex items-center justify-end space-x-2">
                              <button
                                onClick={() => setIsAddingScreen(false)}
                                className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
                              >
                                Cancel
                              </button>
                              <button
                                onClick={() => handleAddScreen(section.id)}
                                className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs"
                              >
                                Add Screen
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div className="space-y-2">
                        {section.screens.map((screen) => (
                          <div key={screen.id} className="bg-linkedin-card/30 rounded-lg overflow-hidden">
                            <div 
                              className="p-3 cursor-pointer flex items-center justify-between"
                              onClick={() => setActiveScreenId(activeScreenId === screen.id ? null : screen.id)}
                            >
                              <div>
                                <h6 className="text-white text-xs font-medium">{screen.name}</h6>
                                <p className="text-gray-400 text-xs">{screen.description}</p>
                              </div>
                              <div className="flex items-center space-x-2">
                                {isEditing && (
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleRemoveScreen(section.id, screen.id);
                                    }}
                                    className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                                  >
                                    <Trash2 className="w-3 h-3" />
                                  </button>
                                )}
                                <div className="w-5 h-5 flex items-center justify-center">
                                  {activeScreenId === screen.id ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-400">
                                      <path d="M18 15l-6-6-6 6"></path>
                                    </svg>
                                  ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-400">
                                      <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                  )}
                                </div>
                              </div>
                            </div>
                            
                            {activeScreenId === screen.id && (
                              <div className="p-3 border-t border-linkedin-border/30">
                                <h6 className="text-linkedin-light text-xs font-medium mb-2">Screen Elements</h6>
                                
                                {isEditing && (
                                  <button
                                    onClick={() => setIsAddingElement(true)}
                                    className="w-full flex items-center justify-center space-x-2 bg-linkedin-card/30 hover:bg-linkedin-card/50 border border-dashed border-linkedin-border hover:border-linkedin text-white px-3 py-2 rounded-lg transition-all text-xs mb-3"
                                  >
                                    <Plus className="w-3 h-3" />
                                    <span>Add Element</span>
                                  </button>
                                )}
                                
                                {isAddingElement && (
                                  <div className="bg-linkedin-card/30 rounded-lg p-3 mb-3 border border-linkedin-light">
                                    <div className="space-y-2">
                                      <div>
                                        <label className="block text-gray-300 text-xs mb-1">Element Name</label>
                                        <input
                                          type="text"
                                          value={newElement.name}
                                          onChange={(e) => setNewElement({...newElement, name: e.target.value})}
                                          className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                                          placeholder="e.g., Login Button, Profile Image, Navigation Bar"
                                        />
                                      </div>
                                      
                                      <div>
                                        <label className="block text-gray-300 text-xs mb-1">Element Type</label>
                                        <select
                                          value={newElement.elementType}
                                          onChange={(e) => setNewElement({...newElement, elementType: e.target.value})}
                                          className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin text-xs"
                                        >
                                          <option value="" className="bg-slate-800">Select element type...</option>
                                          <option value="Button" className="bg-slate-800">Button</option>
                                          <option value="Input" className="bg-slate-800">Input</option>
                                          <option value="Image" className="bg-slate-800">Image</option>
                                          <option value="Text" className="bg-slate-800">Text</option>
                                          <option value="Card" className="bg-slate-800">Card</option>
                                          <option value="Navigation" className="bg-slate-800">Navigation</option>
                                          <option value="Form" className="bg-slate-800">Form</option>
                                          <option value="Modal" className="bg-slate-800">Modal</option>
                                          <option value="Other" className="bg-slate-800">Other</option>
                                        </select>
                                      </div>
                                      
                                      <div>
                                        <label className="block text-gray-300 text-xs mb-1">Description/Function</label>
                                        <textarea
                                          value={newElement.description}
                                          onChange={(e) => setNewElement({...newElement, description: e.target.value})}
                                          className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                                          rows={2}
                                          placeholder="Describe this element's function..."
                                        />
                                      </div>
                                      
                                      <div className="flex items-center justify-end space-x-2">
                                        <button
                                          onClick={() => setIsAddingElement(false)}
                                          className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
                                        >
                                          Cancel
                                        </button>
                                        <button
                                          onClick={() => handleAddElement(section.id, screen.id)}
                                          className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs"
                                        >
                                          Add Element
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                )}
                                
                                {screen.elements.length > 0 ? (
                                  <div className="space-y-2">
                                    {screen.elements.map((element) => (
                                      <div key={element.id} className="bg-linkedin-card/30 rounded-lg p-2 flex items-center justify-between">
                                        <div>
                                          <div className="flex items-center space-x-2">
                                            <span className="text-white text-xs font-medium">{element.name}</span>
                                            <span className="bg-linkedin/20 text-linkedin-light px-1.5 py-0.5 rounded text-xs">
                                              {element.elementType}
                                            </span>
                                          </div>
                                          <p className="text-gray-400 text-xs">{element.description}</p>
                                        </div>
                                        {isEditing && (
                                          <button
                                            onClick={() => handleRemoveElement(section.id, screen.id, element.id)}
                                            className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                                          >
                                            <Trash2 className="w-3 h-3" />
                                          </button>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <p className="text-gray-400 text-xs">No elements defined yet.</p>
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                        
                        {section.screens.length === 0 && (
                          <p className="text-gray-400 text-xs">No screens defined yet.</p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              {editedData.platformSections.length === 0 && (
                <p className="text-gray-400 text-xs">No platform sections defined yet.</p>
              )}
            </div>
          </div>
          
          {/* Navigation */}
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-white font-medium text-xs">Navigation</h4>
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
                  <label className="block text-linkedin-light text-xs mb-1">Sections Navigation</label>
                  <textarea
                    value={editedData.sectionsNavigation}
                    onChange={(e) => setEditedData({...editedData, sectionsNavigation: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                    rows={3}
                    placeholder="Describe how users will navigate between sections..."
                  />
                </div>
                
                <div>
                  <label className="block text-linkedin-light text-xs mb-1">Screens & Sub-screens Navigation</label>
                  <textarea
                    value={editedData.screensNavigation}
                    onChange={(e) => setEditedData({...editedData, screensNavigation: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                    rows={3}
                    placeholder="Describe how users will navigate between screens and sub-screens..."
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="bg-linkedin-card/50 rounded-lg p-3">
                  <h5 className="text-linkedin-light text-xs font-medium mb-1">Sections Navigation</h5>
                  <p className="text-gray-300 text-xs">{uxData.sectionsNavigation || "Not defined yet."}</p>
                </div>
                
                <div className="bg-linkedin-card/50 rounded-lg p-3">
                  <h5 className="text-linkedin-light text-xs font-medium mb-1">Screens & Sub-screens Navigation</h5>
                  <p className="text-gray-300 text-xs">{uxData.screensNavigation || "Not defined yet."}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Platform Branding Tab */}
      {activeTab === 'branding' && (
        <div className="bg-linkedin-card/30 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-white font-medium text-xs">Platform Branding</h4>
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
                <label className="block text-linkedin-light text-xs mb-1">Color Palette</label>
                <textarea
                  value={editedData.platformBranding.colorPalette}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    platformBranding: { ...editedData.platformBranding, colorPalette: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={3}
                  placeholder="Describe the color palette for the platform..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Typography System</label>
                <textarea
                  value={editedData.platformBranding.typographySystem}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    platformBranding: { ...editedData.platformBranding, typographySystem: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={3}
                  placeholder="Describe the typography system for the platform..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Layout System</label>
                <textarea
                  value={editedData.platformBranding.layoutSystem}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    platformBranding: { ...editedData.platformBranding, layoutSystem: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={3}
                  placeholder="Describe the layout system for the platform..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Component Design</label>
                <textarea
                  value={editedData.platformBranding.componentDesign}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    platformBranding: { ...editedData.platformBranding, componentDesign: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={3}
                  placeholder="Describe the component design for the platform..."
                />
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Color Palette</h5>
                <p className="text-gray-300 text-xs">{uxData.platformBranding.colorPalette || "Not defined yet."}</p>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Typography System</h5>
                <p className="text-gray-300 text-xs">{uxData.platformBranding.typographySystem || "Not defined yet."}</p>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Layout System</h5>
                <p className="text-gray-300 text-xs">{uxData.platformBranding.layoutSystem || "Not defined yet."}</p>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Component Design</h5>
                <p className="text-gray-300 text-xs">{uxData.platformBranding.componentDesign || "Not defined yet."}</p>
              </div>
            </div>
          )}
        </div>
      )}
      
      {/* Prototype Context Tab */}
      {activeTab === 'context' && (
        <div className="bg-linkedin-card/30 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-white font-medium text-xs">Prototype Context</h4>
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
                <label className="block text-linkedin-light text-xs mb-1">User Profile</label>
                <textarea
                  value={editedData.prototypeContext.userProfile}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    prototypeContext: { ...editedData.prototypeContext, userProfile: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Describe the user profile for the prototype..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Industry Context</label>
                <textarea
                  value={editedData.prototypeContext.industryContext}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    prototypeContext: { ...editedData.prototypeContext, industryContext: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Describe the industry context for the prototype..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Geographical Specifics</label>
                <textarea
                  value={editedData.prototypeContext.geographicalSpecifics}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    prototypeContext: { ...editedData.prototypeContext, geographicalSpecifics: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Describe the geographical specifics for the prototype..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Financial Parameters</label>
                <textarea
                  value={editedData.prototypeContext.financialParameters}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    prototypeContext: { ...editedData.prototypeContext, financialParameters: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Describe the financial parameters for the prototype..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Realistic Data Points</label>
                <textarea
                  value={editedData.prototypeContext.dataPoints}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    prototypeContext: { ...editedData.prototypeContext, dataPoints: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Describe the realistic data points for the prototype..."
                />
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">User Profile</h5>
                <p className="text-gray-300 text-xs">{uxData.prototypeContext.userProfile || "Not defined yet."}</p>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Industry Context</h5>
                <p className="text-gray-300 text-xs">{uxData.prototypeContext.industryContext || "Not defined yet."}</p>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Geographical Specifics</h5>
                <p className="text-gray-300 text-xs">{uxData.prototypeContext.geographicalSpecifics || "Not defined yet."}</p>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Financial Parameters</h5>
                <p className="text-gray-300 text-xs">{uxData.prototypeContext.financialParameters || "Not defined yet."}</p>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Realistic Data Points</h5>
                <p className="text-gray-300 text-xs">{uxData.prototypeContext.dataPoints || "Not defined yet."}</p>
              </div>
            </div>
          )}
        </div>
      )}
      
      {isEditing && (
        <div className="flex items-center justify-end space-x-2 pt-4 mt-4 border-t border-linkedin-border/30">
          <button
            onClick={() => {
              setIsEditing(false);
              setEditedData(uxData);
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
          <span>Continue to Prototype</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default UXInputs;