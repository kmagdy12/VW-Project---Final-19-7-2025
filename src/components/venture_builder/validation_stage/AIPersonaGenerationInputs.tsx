import React, { useState } from 'react';
import { 
  Users, 
  Save, 
  ArrowRight,
  Brain,
  User,
  ChevronDown,
  ChevronUp,
  RefreshCw,
  Edit2
} from 'lucide-react';

interface AIPersona {
  id: number;
  name: string;
  age: number;
  profilePicture: string;
  professionalRole: string;
  companyStage: string;
  location: string;
  yearsExperience: number;
  painPoints: string[];
  existingSolutions: string;
  dailyWorkflow: string;
  resourceConstraints: string;
  authorityLevel: string;
  budgetRange: string;
  decisionProcess: string;
  riskTolerance: string;
  communicationPreference: string;
  skepticismLevel: string;
  informationProcessing: string;
  trustFactors: string;
  localMarketAwareness: string;
  technologyAdoption: string;
  regulatorySensitivity: string;
  networkInfluence: string;
  successMetrics: string;
  implementationConcerns: string;
  timelineExpectations: string;
  integrationRequirements: string;
}

interface AIPersonaGenerationInputsProps {
  personas: AIPersona[];
  onUpdatePersonas: (personas: AIPersona[]) => void;
  onContinue: () => void;
  onSkip: () => void;
  onSaveDraft: () => void;
  onRegeneratePersonas: () => void;
}

const AIPersonaGenerationInputs: React.FC<AIPersonaGenerationInputsProps> = ({ 
  personas, 
  onUpdatePersonas, 
  onContinue, 
  onSkip, 
  onSaveDraft,
  onRegeneratePersonas
}) => {
  const [selectedPersonaId, setSelectedPersonaId] = useState<number | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isEditingPersona, setIsEditingPersona] = useState(false);
  const [editedPersona, setEditedPersona] = useState<AIPersona | null>(null);

  const handleSelectPersona = (personaId: number) => {
    setSelectedPersonaId(personaId);
    setExpandedSection('core-identity');
  };

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  const handleEditPersona = (persona: AIPersona) => {
    setEditedPersona({...persona});
    setIsEditingPersona(true);
  };

  const handleSavePersona = () => {
    if (editedPersona) {
      const updatedPersonas = personas.map(p => 
        p.id === editedPersona.id ? editedPersona : p
      );
      onUpdatePersonas(updatedPersonas);
      setIsEditingPersona(false);
      setEditedPersona(null);
    }
  };

  const selectedPersona = personas.find(p => p.id === selectedPersonaId);

  return (
    <div className="p-6 h-full overflow-y-auto space-y-4 text-sm">
      <h3 className="text-base font-semibold text-white mb-3 flex items-center">
        <Brain className="w-5 h-5 text-linkedin-light mr-2" />
        AI Persona Generation
      </h3>
      
      <p className="text-gray-300 text-xs mb-4">
        Based on your target audience definition, the AI has generated the following personas to represent different segments of your market. Click on a persona to view their detailed profile.
      </p>
      
      {/* Regenerate Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={onRegeneratePersonas}
          className="flex items-center space-x-2 bg-linkedin-card hover:bg-linkedin-card/70 text-white px-3 py-1.5 rounded-lg transition-colors text-xs"
        >
          <RefreshCw className="w-3 h-3" />
          <span>Regenerate Personas</span>
        </button>
      </div>
      
      {/* Persona Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {personas.map((persona) => (
          <div 
            key={persona.id} 
            onClick={() => handleSelectPersona(persona.id)}
            className={`bg-linkedin-card/30 rounded-lg p-4 cursor-pointer transition-all hover:bg-linkedin-card/50 ${
              selectedPersonaId === persona.id ? 'border border-linkedin-light' : ''
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <img 
                src={persona.profilePicture} 
                alt={persona.name}
                className="w-20 h-20 rounded-full object-cover mb-3"
              />
              <h4 className="text-white font-medium text-sm">{persona.name}</h4>
              <p className="text-gray-400 text-xs">{persona.age} years old</p>
              <p className="text-linkedin-light text-xs mt-1">{persona.professionalRole}</p>
              <p className="text-gray-400 text-xs mt-1">{persona.location}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Selected Persona Details */}
      {selectedPersona && !isEditingPersona && (
        <div className="bg-linkedin-card/30 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <img 
                src={selectedPersona.profilePicture} 
                alt={selectedPersona.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="text-white font-medium text-sm">{selectedPersona.name}</h4>
                <p className="text-linkedin-light text-xs">{selectedPersona.professionalRole}</p>
              </div>
            </div>
            <button
              onClick={() => handleEditPersona(selectedPersona)}
              className="p-1 text-gray-400 hover:text-white transition-colors"
            >
              <Edit2 className="w-3 h-3" />
            </button>
          </div>
          
          {/* Core Identity & Context */}
          <div className="mb-3">
            <div 
              className="flex items-center justify-between p-3 bg-linkedin-card/50 rounded-lg cursor-pointer"
              onClick={() => toggleSection('core-identity')}
            >
              <h5 className="text-white font-medium text-xs">1. Core Identity & Context</h5>
              {expandedSection === 'core-identity' ? (
                <ChevronUp className="w-4 h-4 text-gray-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-400" />
              )}
            </div>
            
            {expandedSection === 'core-identity' && (
              <div className="p-3 border border-linkedin-border/30 rounded-lg mt-2 space-y-2">
                <div>
                  <h6 className="text-linkedin-light text-xs">Professional Role</h6>
                  <p className="text-gray-300 text-xs">{selectedPersona.professionalRole}</p>
                </div>
                <div>
                  <h6 className="text-linkedin-light text-xs">Company Stage/Size</h6>
                  <p className="text-gray-300 text-xs">{selectedPersona.companyStage}</p>
                </div>
                <div>
                  <h6 className="text-linkedin-light text-xs">Location</h6>
                  <p className="text-gray-300 text-xs">{selectedPersona.location}</p>
                </div>
                <div>
                  <h6 className="text-linkedin-light text-xs">Years of Experience</h6>
                  <p className="text-gray-300 text-xs">{selectedPersona.yearsExperience} years</p>
                </div>
              </div>
            )}
          </div>
          
          {/* Problem-Relevant Background */}
          <div className="mb-3">
            <div 
              className="flex items-center justify-between p-3 bg-linkedin-card/50 rounded-lg cursor-pointer"
              onClick={() => toggleSection('problem-background')}
            >
              <h5 className="text-white font-medium text-xs">2. Problem-Relevant Background</h5>
              {expandedSection === 'problem-background' ? (
                <ChevronUp className="w-4 h-4 text-gray-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-400" />
              )}
            </div>
            
            {expandedSection === 'problem-background' && (
              <div className="p-3 border border-linkedin-border/30 rounded-lg mt-2 space-y-2">
                <div>
                  <h6 className="text-linkedin-light text-xs">Current Pain Points</h6>
                  <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                    {selectedPersona.painPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h6 className="text-linkedin-light text-xs">Existing Solutions</h6>
                  <p className="text-gray-300 text-xs">{selectedPersona.existingSolutions}</p>
                </div>
                <div>
                  <h6 className="text-linkedin-light text-xs">Daily Workflow</h6>
                  <p className="text-gray-300 text-xs">{selectedPersona.dailyWorkflow}</p>
                </div>
                <div>
                  <h6 className="text-linkedin-light text-xs">Resource Constraints</h6>
                  <p className="text-gray-300 text-xs">{selectedPersona.resourceConstraints}</p>
                </div>
              </div>
            )}
          </div>
          
          {/* Decision-Making Profile */}
          <div className="mb-3">
            <div 
              className="flex items-center justify-between p-3 bg-linkedin-card/50 rounded-lg cursor-pointer"
              onClick={() => toggleSection('decision-making')}
            >
              <h5 className="text-white font-medium text-xs">3. Decision-Making Profile</h5>
              {expandedSection === 'decision-making' ? (
                <ChevronUp className="w-4 h-4 text-gray-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-400" />
              )}
            </div>
            
            {expandedSection === 'decision-making' && (
              <div className="p-3 border border-linkedin-border/30 rounded-lg mt-2 space-y-2">
                <div>
                  <h6 className="text-linkedin-light text-xs">Authority Level</h6>
                  <p className="text-gray-300 text-xs">{selectedPersona.authorityLevel}</p>
                </div>
                <div>
                  <h6 className="text-linkedin-light text-xs">Budget Range</h6>
                  <p className="text-gray-300 text-xs">{selectedPersona.budgetRange}</p>
                </div>
                <div>
                  <h6 className="text-linkedin-light text-xs">Decision Process</h6>
                  <p className="text-gray-300 text-xs">{selectedPersona.decisionProcess}</p>
                </div>
                <div>
                  <h6 className="text-linkedin-light text-xs">Risk Tolerance</h6>
                  <p className="text-gray-300 text-xs">{selectedPersona.riskTolerance}</p>
                </div>
              </div>
            )}
          </div>
          
          {/* Communication & Validation Style */}
          <div className="mb-3">
            <div 
              className="flex items-center justify-between p-3 bg-linkedin-card/50 rounded-lg cursor-pointer"
              onClick={() => toggleSection('communication-style')}
            >
              <h5 className="text-white font-medium text-xs">4. Communication & Validation Style</h5>
              {expandedSection === 'communication-style' ? (
                <ChevronUp className="w-4 h-4 text-gray-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-400" />
              )}
            </div>
            
            {expandedSection === 'communication-style' && (
              <div className="p-3 border border-linkedin-border/30 rounded-lg mt-2 space-y-2">
                <div>
                  <h6 className="text-linkedin-light text-xs">Communication Preference</h6>
                  <p className="text-gray-300 text-xs">{selectedPersona.communicationPreference}</p>
                </div>
                <div>
                  <h6 className="text-linkedin-light text-xs">Skepticism Level</h6>
                  <p className="text-gray-300 text-xs">{selectedPersona.skepticismLevel}</p>
                </div>
                <div>
                  <h6 className="text-linkedin-light text-xs">Information Processing</h6>
                  <p className="text-gray-300 text-xs">{selectedPersona.informationProcessing}</p>
                </div>
                <div>
                  <h6 className="text-linkedin-light text-xs">Trust Factors</h6>
                  <p className="text-gray-300 text-xs">{selectedPersona.trustFactors}</p>
                </div>
              </div>
            )}
          </div>
          
          {/* Market Context */}
          <div className="mb-3">
            <div 
              className="flex items-center justify-between p-3 bg-linkedin-card/50 rounded-lg cursor-pointer"
              onClick={() => toggleSection('market-context')}
            >
              <h5 className="text-white font-medium text-xs">5. Market Context</h5>
              {expandedSection === 'market-context' ? (
                <ChevronUp className="w-4 h-4 text-gray-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-400" />
              )}
            </div>
            
            {expandedSection === 'market-context' && (
              <div className="p-3 border border-linkedin-border/30 rounded-lg mt-2 space-y-2">
                <div>
                  <h6 className="text-linkedin-light text-xs">Local Market Awareness</h6>
                  <p className="text-gray-300 text-xs">{selectedPersona.localMarketAwareness}</p>
                </div>
                <div>
                  <h6 className="text-linkedin-light text-xs">Technology Adoption</h6>
                  <p className="text-gray-300 text-xs">{selectedPersona.technologyAdoption}</p>
                </div>
                <div>
                  <h6 className="text-linkedin-light text-xs">Regulatory Sensitivity</h6>
                  <p className="text-gray-300 text-xs">{selectedPersona.regulatorySensitivity}</p>
                </div>
                <div>
                  <h6 className="text-linkedin-light text-xs">Network Influence</h6>
                  <p className="text-gray-300 text-xs">{selectedPersona.networkInfluence}</p>
                </div>
              </div>
            )}
          </div>
          
          {/* Solution Evaluation Criteria */}
          <div className="mb-3">
            <div 
              className="flex items-center justify-between p-3 bg-linkedin-card/50 rounded-lg cursor-pointer"
              onClick={() => toggleSection('solution-evaluation')}
            >
              <h5 className="text-white font-medium text-xs">6. Solution Evaluation Criteria</h5>
              {expandedSection === 'solution-evaluation' ? (
                <ChevronUp className="w-4 h-4 text-gray-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-400" />
              )}
            </div>
            
            {expandedSection === 'solution-evaluation' && (
              <div className="p-3 border border-linkedin-border/30 rounded-lg mt-2 space-y-2">
                <div>
                  <h6 className="text-linkedin-light text-xs">Success Metrics</h6>
                  <p className="text-gray-300 text-xs">{selectedPersona.successMetrics}</p>
                </div>
                <div>
                  <h6 className="text-linkedin-light text-xs">Implementation Concerns</h6>
                  <p className="text-gray-300 text-xs">{selectedPersona.implementationConcerns}</p>
                </div>
                <div>
                  <h6 className="text-linkedin-light text-xs">Timeline Expectations</h6>
                  <p className="text-gray-300 text-xs">{selectedPersona.timelineExpectations}</p>
                </div>
                <div>
                  <h6 className="text-linkedin-light text-xs">Integration Requirements</h6>
                  <p className="text-gray-300 text-xs">{selectedPersona.integrationRequirements}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Persona Editing Form */}
      {isEditingPersona && editedPersona && (
        <div className="bg-linkedin-card/30 rounded-lg p-4 mb-4">
          <h4 className="text-white font-medium text-sm mb-3">Edit Persona: {editedPersona.name}</h4>
          
          <div className="space-y-4">
            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Name</label>
                <input
                  type="text"
                  value={editedPersona.name}
                  onChange={(e) => setEditedPersona({...editedPersona, name: e.target.value})}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Age</label>
                <input
                  type="number"
                  value={editedPersona.age}
                  onChange={(e) => setEditedPersona({...editedPersona, age: parseInt(e.target.value) || 0})}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Professional Role</label>
                <input
                  type="text"
                  value={editedPersona.professionalRole}
                  onChange={(e) => setEditedPersona({...editedPersona, professionalRole: e.target.value})}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Company Stage/Size</label>
                <input
                  type="text"
                  value={editedPersona.companyStage}
                  onChange={(e) => setEditedPersona({...editedPersona, companyStage: e.target.value})}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Location</label>
                <input
                  type="text"
                  value={editedPersona.location}
                  onChange={(e) => setEditedPersona({...editedPersona, location: e.target.value})}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Years of Experience</label>
                <input
                  type="number"
                  value={editedPersona.yearsExperience}
                  onChange={(e) => setEditedPersona({...editedPersona, yearsExperience: parseInt(e.target.value) || 0})}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                />
              </div>
            </div>
            
            {/* More sections would be added here for all persona attributes */}
            {/* For brevity, I'm only showing a subset of the fields */}
            
            <div className="flex items-center justify-end space-x-2 pt-2">
              <button
                onClick={() => {
                  setIsEditingPersona(false);
                  setEditedPersona(null);
                }}
                className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
              >
                Cancel
              </button>
              <button
                onClick={handleSavePersona}
                className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs flex items-center space-x-1"
              >
                <Save className="w-3 h-3" />
                <span>Save</span>
              </button>
            </div>
          </div>
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
          <span>Continue to Questionnaire</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default AIPersonaGenerationInputs;