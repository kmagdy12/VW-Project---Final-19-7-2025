import React, { useState } from 'react';
import { 
  Edit2, 
  Save
} from 'lucide-react';

interface BrandData {
  personality: {
    mission: string;
    vision: string;
    essence: string;
    purpose: string;
    promise: string;
    targetAudience: string;
    valuePropositions: string;
    positioning: string;
    persona: {
      type: string;
      demographic: string;
      attributes: string;
      skills: string;
      lookalike: string;
    };
  };
  behavior: {
    userExperience: string;
    visualExperience: string;
  };
  communication: {
    messages: {
      slogan: string;
      tagline: string;
      keyMessages: string;
      keywords: string;
    };
    guidelines: {
      channels: string;
      contentTypes: string;
      language: string;
      style: string;
      toneOfVoice: string;
      communityManagement: string;
    };
  };
}

interface BrandInputsProps {
  brandData: BrandData;
  onUpdateBrand: (data: BrandData) => void;
}

const BrandInputs: React.FC<BrandInputsProps> = ({ 
  brandData, 
  onUpdateBrand 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(brandData);
  const [activeSection, setActiveSection] = useState<'personality' | 'behavior' | 'communication'>('personality');

  const handleSave = () => {
    onUpdateBrand(editedData);
    setIsEditing(false);
  };

  const renderPersonalitySection = () => (
    <div className="space-y-4">
      <h4 className="text-white font-medium text-sm mb-3">Brand Personality</h4>
      
      {isEditing ? (
        <div className="space-y-3">
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Mission</label>
            <textarea
              value={editedData.personality.mission}
              onChange={(e) => setEditedData({
                ...editedData,
                personality: { ...editedData.personality, mission: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={2}
              placeholder="Define your brand's mission..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Vision</label>
            <textarea
              value={editedData.personality.vision}
              onChange={(e) => setEditedData({
                ...editedData,
                personality: { ...editedData.personality, vision: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={2}
              placeholder="Define your brand's vision..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Brand Essence</label>
            <textarea
              value={editedData.personality.essence}
              onChange={(e) => setEditedData({
                ...editedData,
                personality: { ...editedData.personality, essence: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={2}
              placeholder="Define your brand's essence..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Brand Purpose</label>
            <textarea
              value={editedData.personality.purpose}
              onChange={(e) => setEditedData({
                ...editedData,
                personality: { ...editedData.personality, purpose: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={2}
              placeholder="Define your brand's purpose..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Brand Promise</label>
            <textarea
              value={editedData.personality.promise}
              onChange={(e) => setEditedData({
                ...editedData,
                personality: { ...editedData.personality, promise: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={2}
              placeholder="Define your brand's promise..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Target Audience</label>
            <textarea
              value={editedData.personality.targetAudience}
              onChange={(e) => setEditedData({
                ...editedData,
                personality: { ...editedData.personality, targetAudience: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={2}
              placeholder="Define your brand's target audience..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Value Propositions & Competitive Advantages</label>
            <textarea
              value={editedData.personality.valuePropositions}
              onChange={(e) => setEditedData({
                ...editedData,
                personality: { ...editedData.personality, valuePropositions: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={2}
              placeholder="Define your brand's value propositions..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Brand Positioning</label>
            <textarea
              value={editedData.personality.positioning}
              onChange={(e) => setEditedData({
                ...editedData,
                personality: { ...editedData.personality, positioning: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={2}
              placeholder="Define your brand's positioning..."
            />
          </div>
          
          <div>
            <h5 className="text-linkedin-light text-xs font-medium mb-2">Brand Persona</h5>
            <div className="space-y-2">
              <div>
                <label className="block text-gray-300 text-xs mb-1">Type</label>
                <input
                  type="text"
                  value={editedData.personality.persona.type}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    personality: { 
                      ...editedData.personality, 
                      persona: { ...editedData.personality.persona, type: e.target.value } 
                    }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                  placeholder="e.g., Innovator, Caregiver, Hero"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-xs mb-1">Demographic</label>
                <input
                  type="text"
                  value={editedData.personality.persona.demographic}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    personality: { 
                      ...editedData.personality, 
                      persona: { ...editedData.personality.persona, demographic: e.target.value } 
                    }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                  placeholder="e.g., 30-45, professional, urban"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-xs mb-1">Attributes</label>
                <input
                  type="text"
                  value={editedData.personality.persona.attributes}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    personality: { 
                      ...editedData.personality, 
                      persona: { ...editedData.personality.persona, attributes: e.target.value } 
                    }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                  placeholder="e.g., Innovative, Trustworthy, Approachable"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-xs mb-1">Skills</label>
                <input
                  type="text"
                  value={editedData.personality.persona.skills}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    personality: { 
                      ...editedData.personality, 
                      persona: { ...editedData.personality.persona, skills: e.target.value } 
                    }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                  placeholder="e.g., Problem-solving, Communication, Technical expertise"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-xs mb-1">Lookalike</label>
                <input
                  type="text"
                  value={editedData.personality.persona.lookalike}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    personality: { 
                      ...editedData.personality, 
                      persona: { ...editedData.personality.persona, lookalike: e.target.value } 
                    }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                  placeholder="e.g., Elon Musk, Apple, Nike"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Mission</h5>
            <p className="text-gray-300 text-xs">{brandData.personality.mission || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Vision</h5>
            <p className="text-gray-300 text-xs">{brandData.personality.vision || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Brand Essence</h5>
            <p className="text-gray-300 text-xs">{brandData.personality.essence || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Brand Purpose</h5>
            <p className="text-gray-300 text-xs">{brandData.personality.purpose || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Brand Promise</h5>
            <p className="text-gray-300 text-xs">{brandData.personality.promise || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Target Audience</h5>
            <p className="text-gray-300 text-xs">{brandData.personality.targetAudience || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Value Propositions & Competitive Advantages</h5>
            <p className="text-gray-300 text-xs">{brandData.personality.valuePropositions || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Brand Positioning</h5>
            <p className="text-gray-300 text-xs">{brandData.personality.positioning || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Brand Persona</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
              <div>
                <p className="text-gray-400 text-xs">Type</p>
                <p className="text-white text-xs">{brandData.personality.persona.type || "Not defined"}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs">Demographic</p>
                <p className="text-white text-xs">{brandData.personality.persona.demographic || "Not defined"}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs">Attributes</p>
                <p className="text-white text-xs">{brandData.personality.persona.attributes || "Not defined"}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs">Skills</p>
                <p className="text-white text-xs">{brandData.personality.persona.skills || "Not defined"}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs">Lookalike</p>
                <p className="text-white text-xs">{brandData.personality.persona.lookalike || "Not defined"}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderBehaviorSection = () => (
    <div className="space-y-4">
      <h4 className="text-white font-medium text-sm mb-3">Brand Behavior</h4>
      
      {isEditing ? (
        <div className="space-y-3">
          <div>
            <label className="block text-linkedin-light text-xs mb-1">User Experience Attributes</label>
            <textarea
              value={editedData.behavior.userExperience}
              onChange={(e) => setEditedData({
                ...editedData,
                behavior: { ...editedData.behavior, userExperience: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={3}
              placeholder="Define your brand's user experience attributes..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Visual Experience Attributes</label>
            <textarea
              value={editedData.behavior.visualExperience}
              onChange={(e) => setEditedData({
                ...editedData,
                behavior: { ...editedData.behavior, visualExperience: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={3}
              placeholder="Define your brand's visual experience attributes..."
            />
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">User Experience Attributes</h5>
            <p className="text-gray-300 text-xs">{brandData.behavior.userExperience || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Visual Experience Attributes</h5>
            <p className="text-gray-300 text-xs">{brandData.behavior.visualExperience || "Not defined yet."}</p>
          </div>
        </div>
      )}
    </div>
  );

  const renderCommunicationSection = () => (
    <div className="space-y-4">
      <h4 className="text-white font-medium text-sm mb-3">Brand Communication</h4>
      
      {isEditing ? (
        <div className="space-y-4">
          <div>
            <h5 className="text-linkedin-light text-xs font-medium mb-2">Messages</h5>
            <div className="space-y-2">
              <div>
                <label className="block text-gray-300 text-xs mb-1">Slogan</label>
                <input
                  type="text"
                  value={editedData.communication.messages.slogan}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    communication: { 
                      ...editedData.communication, 
                      messages: { ...editedData.communication.messages, slogan: e.target.value } 
                    }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                  placeholder="Enter your brand slogan..."
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-xs mb-1">Tagline</label>
                <input
                  type="text"
                  value={editedData.communication.messages.tagline}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    communication: { 
                      ...editedData.communication, 
                      messages: { ...editedData.communication.messages, tagline: e.target.value } 
                    }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                  placeholder="Enter your brand tagline..."
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-xs mb-1">Key Messages</label>
                <textarea
                  value={editedData.communication.messages.keyMessages}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    communication: { 
                      ...editedData.communication, 
                      messages: { ...editedData.communication.messages, keyMessages: e.target.value } 
                    }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Enter your brand's key messages..."
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-xs mb-1">Keywords</label>
                <textarea
                  value={editedData.communication.messages.keywords}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    communication: { 
                      ...editedData.communication, 
                      messages: { ...editedData.communication.messages, keywords: e.target.value } 
                    }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Enter keywords associated with your brand..."
                />
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="text-linkedin-light text-xs font-medium mb-2">Guidelines</h5>
            <div className="space-y-2">
              <div>
                <label className="block text-gray-300 text-xs mb-1">Channels</label>
                <textarea
                  value={editedData.communication.guidelines.channels}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    communication: { 
                      ...editedData.communication, 
                      guidelines: { ...editedData.communication.guidelines, channels: e.target.value } 
                    }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Define your brand's communication channels..."
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-xs mb-1">Content Types</label>
                <textarea
                  value={editedData.communication.guidelines.contentTypes}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    communication: { 
                      ...editedData.communication, 
                      guidelines: { ...editedData.communication.guidelines, contentTypes: e.target.value } 
                    }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Define your brand's content types..."
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-xs mb-1">Language</label>
                <textarea
                  value={editedData.communication.guidelines.language}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    communication: { 
                      ...editedData.communication, 
                      guidelines: { ...editedData.communication.guidelines, language: e.target.value } 
                    }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Define your brand's language guidelines..."
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-xs mb-1">Style</label>
                <textarea
                  value={editedData.communication.guidelines.style}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    communication: { 
                      ...editedData.communication, 
                      guidelines: { ...editedData.communication.guidelines, style: e.target.value } 
                    }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Define your brand's style guidelines..."
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-xs mb-1">Tone of Voice</label>
                <textarea
                  value={editedData.communication.guidelines.toneOfVoice}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    communication: { 
                      ...editedData.communication, 
                      guidelines: { ...editedData.communication.guidelines, toneOfVoice: e.target.value } 
                    }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Define your brand's tone of voice..."
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-xs mb-1">Community Management Rules</label>
                <textarea
                  value={editedData.communication.guidelines.communityManagement}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    communication: { 
                      ...editedData.communication, 
                      guidelines: { ...editedData.communication.guidelines, communityManagement: e.target.value } 
                    }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Define your brand's community management rules..."
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-2">Messages</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <p className="text-gray-400 text-xs">Slogan</p>
                <p className="text-white text-xs">{brandData.communication.messages.slogan || "Not defined"}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs">Tagline</p>
                <p className="text-white text-xs">{brandData.communication.messages.tagline || "Not defined"}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs">Key Messages</p>
                <p className="text-white text-xs">{brandData.communication.messages.keyMessages || "Not defined"}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs">Keywords</p>
                <p className="text-white text-xs">{brandData.communication.messages.keywords || "Not defined"}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-2">Guidelines</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <p className="text-gray-400 text-xs">Channels</p>
                <p className="text-white text-xs">{brandData.communication.guidelines.channels || "Not defined"}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs">Content Types</p>
                <p className="text-white text-xs">{brandData.communication.guidelines.contentTypes || "Not defined"}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs">Language</p>
                <p className="text-white text-xs">{brandData.communication.guidelines.language || "Not defined"}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs">Style</p>
                <p className="text-white text-xs">{brandData.communication.guidelines.style || "Not defined"}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs">Tone of Voice</p>
                <p className="text-white text-xs">{brandData.communication.guidelines.toneOfVoice || "Not defined"}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs">Community Management</p>
                <p className="text-white text-xs">{brandData.communication.guidelines.communityManagement || "Not defined"}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-white">Brand Infrastructure</h3>
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
        Define your brand's personality, behavior, and communication strategy. This will guide all your marketing and customer interactions.
      </p>
      
      {/* Section Tabs */}
      <div className="flex items-center space-x-2 mb-4">
        <button
          onClick={() => setActiveSection('personality')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeSection === 'personality'
              ? 'bg-linkedin text-white'
              : 'bg-linkedin-card/50 text-gray-300 hover:text-white hover:bg-linkedin-card'
          }`}
        >
          Brand Personality
        </button>
        <button
          onClick={() => setActiveSection('behavior')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeSection === 'behavior'
              ? 'bg-linkedin text-white'
              : 'bg-linkedin-card/50 text-gray-300 hover:text-white hover:bg-linkedin-card'
          }`}
        >
          Brand Behavior
        </button>
        <button
          onClick={() => setActiveSection('communication')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeSection === 'communication'
              ? 'bg-linkedin text-white'
              : 'bg-linkedin-card/50 text-gray-300 hover:text-white hover:bg-linkedin-card'
          }`}
        >
          Brand Communication
        </button>
      </div>
      
      {/* Active Section Content */}
      <div className="bg-linkedin-card/30 rounded-lg p-4">
        {activeSection === 'personality' && renderPersonalitySection()}
        {activeSection === 'behavior' && renderBehaviorSection()}
        {activeSection === 'communication' && renderCommunicationSection()}
      </div>
      
      {/* Save Button (when editing) */}
      {isEditing && (
        <div className="flex items-center justify-end space-x-2 pt-2">
          <button
            onClick={() => {
              setIsEditing(false);
              setEditedData(brandData);
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
  );
};

export default BrandInputs;