import React, { useState } from 'react';
import { 
  Users, 
  Save, 
  ArrowRight,
  Brain,
  Edit2
} from 'lucide-react';

interface TargetAudienceData {
  demographics: {
    ageRange: string;
    gender: string;
    location: string;
    incomeLevel: string;
    education: string;
    occupation: string;
    familyStatus: string;
  };
  psychographics: {
    valuesBeliefs: string;
    lifestylePreferences: string;
    painPoints: string;
    goalsAspirations: string;
    behavioralPatterns: string;
    technologyAdoption: string;
    communicationStyle: string;
  };
}

interface TargetAudienceInputsProps {
  targetAudienceData: TargetAudienceData;
  onUpdateTargetAudience: (data: TargetAudienceData) => void;
  onContinue: () => void;
  onSkip: () => void;
  onSaveDraft: () => void;
}

const TargetAudienceInputs: React.FC<TargetAudienceInputsProps> = ({ 
  targetAudienceData, 
  onUpdateTargetAudience, 
  onContinue, 
  onSkip, 
  onSaveDraft 
}) => {
  const [isEditingDemographics, setIsEditingDemographics] = useState(false);
  const [isEditingPsychographics, setIsEditingPsychographics] = useState(false);
  const [editedDemographics, setEditedDemographics] = useState(targetAudienceData.demographics);
  const [editedPsychographics, setEditedPsychographics] = useState(targetAudienceData.psychographics);

  const handleSaveDemographics = () => {
    onUpdateTargetAudience({
      ...targetAudienceData,
      demographics: editedDemographics
    });
    setIsEditingDemographics(false);
  };

  const handleSavePsychographics = () => {
    onUpdateTargetAudience({
      ...targetAudienceData,
      psychographics: editedPsychographics
    });
    setIsEditingPsychographics(false);
  };

  return (
    <div className="p-6 h-full overflow-y-auto space-y-4 text-sm">
      <h3 className="text-base font-semibold text-white mb-3 flex items-center">
        <Users className="w-5 h-5 text-linkedin-light mr-2" />
        Target Audience Definition
      </h3>
      
      <p className="text-gray-300 text-xs mb-4">
        Define your target audience in detail to help the AI generate realistic personas for validation. The AI has pre-filled some details based on your previous inputs, but you can edit them to refine the audience definition.
      </p>
      
      {/* Demographics Section */}
      <div className="bg-linkedin-card/30 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-white font-medium text-xs flex items-center">
            <Users className="w-4 h-4 text-linkedin-light mr-1" />
            Demographics
          </h4>
          {!isEditingDemographics && (
            <button
              onClick={() => setIsEditingDemographics(true)}
              className="p-1 text-gray-400 hover:text-white transition-colors"
            >
              <Edit2 className="w-3 h-3" />
            </button>
          )}
        </div>
        
        {isEditingDemographics ? (
          <div className="space-y-3">
            <div>
              <label className="block text-linkedin-light text-xs mb-1">Age Range</label>
              <input
                type="text"
                value={editedDemographics.ageRange}
                onChange={(e) => setEditedDemographics({...editedDemographics, ageRange: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                placeholder="e.g., 25-45"
              />
            </div>
            
            <div>
              <label className="block text-linkedin-light text-xs mb-1">Gender</label>
              <select
                value={editedDemographics.gender}
                onChange={(e) => setEditedDemographics({...editedDemographics, gender: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin text-xs"
              >
                <option value="All Genders" className="bg-slate-800">All Genders</option>
                <option value="Primarily Male" className="bg-slate-800">Primarily Male</option>
                <option value="Primarily Female" className="bg-slate-800">Primarily Female</option>
                <option value="Non-binary" className="bg-slate-800">Non-binary</option>
              </select>
            </div>
            
            <div>
              <label className="block text-linkedin-light text-xs mb-1">Location</label>
              <input
                type="text"
                value={editedDemographics.location}
                onChange={(e) => setEditedDemographics({...editedDemographics, location: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                placeholder="e.g., Urban areas in UAE, Saudi Arabia, Egypt"
              />
            </div>
            
            <div>
              <label className="block text-linkedin-light text-xs mb-1">Income Level</label>
              <select
                value={editedDemographics.incomeLevel}
                onChange={(e) => setEditedDemographics({...editedDemographics, incomeLevel: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin text-xs"
              >
                <option value="Low Income" className="bg-slate-800">Low Income</option>
                <option value="Middle Income" className="bg-slate-800">Middle Income</option>
                <option value="Upper Middle Income" className="bg-slate-800">Upper Middle Income</option>
                <option value="High Income" className="bg-slate-800">High Income</option>
              </select>
            </div>
            
            <div>
              <label className="block text-linkedin-light text-xs mb-1">Education</label>
              <select
                value={editedDemographics.education}
                onChange={(e) => setEditedDemographics({...editedDemographics, education: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin text-xs"
              >
                <option value="High School" className="bg-slate-800">High School</option>
                <option value="Bachelor's Degree" className="bg-slate-800">Bachelor's Degree</option>
                <option value="Master's Degree" className="bg-slate-800">Master's Degree</option>
                <option value="Doctorate" className="bg-slate-800">Doctorate</option>
                <option value="Mixed Education Levels" className="bg-slate-800">Mixed Education Levels</option>
              </select>
            </div>
            
            <div>
              <label className="block text-linkedin-light text-xs mb-1">Occupation</label>
              <input
                type="text"
                value={editedDemographics.occupation}
                onChange={(e) => setEditedDemographics({...editedDemographics, occupation: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                placeholder="e.g., Small business owners, Finance professionals"
              />
            </div>
            
            <div>
              <label className="block text-linkedin-light text-xs mb-1">Family Status</label>
              <select
                value={editedDemographics.familyStatus}
                onChange={(e) => setEditedDemographics({...editedDemographics, familyStatus: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin text-xs"
              >
                <option value="Single" className="bg-slate-800">Single</option>
                <option value="Married" className="bg-slate-800">Married</option>
                <option value="Married with Children" className="bg-slate-800">Married with Children</option>
                <option value="Single Parent" className="bg-slate-800">Single Parent</option>
                <option value="Mixed Family Status" className="bg-slate-800">Mixed Family Status</option>
              </select>
            </div>
            
            <div className="flex items-center justify-end space-x-2 pt-2">
              <button
                onClick={() => setIsEditingDemographics(false)}
                className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveDemographics}
                className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs flex items-center space-x-1"
              >
                <Save className="w-3 h-3" />
                <span>Save</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-1">Age Range</h5>
              <p className="text-gray-300 text-xs">
                {targetAudienceData.demographics.ageRange || "Not defined yet."}
              </p>
            </div>
            
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-1">Gender</h5>
              <p className="text-gray-300 text-xs">
                {targetAudienceData.demographics.gender || "Not defined yet."}
              </p>
            </div>
            
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-1">Location</h5>
              <p className="text-gray-300 text-xs">
                {targetAudienceData.demographics.location || "Not defined yet."}
              </p>
            </div>
            
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-1">Income Level</h5>
              <p className="text-gray-300 text-xs">
                {targetAudienceData.demographics.incomeLevel || "Not defined yet."}
              </p>
            </div>
            
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-1">Education</h5>
              <p className="text-gray-300 text-xs">
                {targetAudienceData.demographics.education || "Not defined yet."}
              </p>
            </div>
            
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-1">Occupation</h5>
              <p className="text-gray-300 text-xs">
                {targetAudienceData.demographics.occupation || "Not defined yet."}
              </p>
            </div>
            
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-1">Family Status</h5>
              <p className="text-gray-300 text-xs">
                {targetAudienceData.demographics.familyStatus || "Not defined yet."}
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Psychographics Section */}
      <div className="bg-linkedin-card/30 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-white font-medium text-xs flex items-center">
            <Brain className="w-4 h-4 text-linkedin-light mr-1" />
            Psychographics
          </h4>
          {!isEditingPsychographics && (
            <button
              onClick={() => setIsEditingPsychographics(true)}
              className="p-1 text-gray-400 hover:text-white transition-colors"
            >
              <Edit2 className="w-3 h-3" />
            </button>
          )}
        </div>
        
        {isEditingPsychographics ? (
          <div className="space-y-3">
            <div>
              <label className="block text-linkedin-light text-xs mb-1">Values & Beliefs</label>
              <textarea
                value={editedPsychographics.valuesBeliefs}
                onChange={(e) => setEditedPsychographics({...editedPsychographics, valuesBeliefs: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                rows={2}
                placeholder="e.g., Values financial security, believes in technological progress"
              />
            </div>
            
            <div>
              <label className="block text-linkedin-light text-xs mb-1">Lifestyle Preferences</label>
              <textarea
                value={editedPsychographics.lifestylePreferences}
                onChange={(e) => setEditedPsychographics({...editedPsychographics, lifestylePreferences: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                rows={2}
                placeholder="e.g., Busy professional, mobile-first, values convenience"
              />
            </div>
            
            <div>
              <label className="block text-linkedin-light text-xs mb-1">Pain Points</label>
              <textarea
                value={editedPsychographics.painPoints}
                onChange={(e) => setEditedPsychographics({...editedPsychographics, painPoints: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                rows={2}
                placeholder="e.g., Frustrated with high fees, complex processes, limited access"
              />
            </div>
            
            <div>
              <label className="block text-linkedin-light text-xs mb-1">Goals & Aspirations</label>
              <textarea
                value={editedPsychographics.goalsAspirations}
                onChange={(e) => setEditedPsychographics({...editedPsychographics, goalsAspirations: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                rows={2}
                placeholder="e.g., Grow business, increase efficiency, reduce costs"
              />
            </div>
            
            <div>
              <label className="block text-linkedin-light text-xs mb-1">Behavioral Patterns</label>
              <textarea
                value={editedPsychographics.behavioralPatterns}
                onChange={(e) => setEditedPsychographics({...editedPsychographics, behavioralPatterns: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                rows={2}
                placeholder="e.g., Researches options thoroughly, seeks recommendations"
              />
            </div>
            
            <div>
              <label className="block text-linkedin-light text-xs mb-1">Technology Adoption</label>
              <select
                value={editedPsychographics.technologyAdoption}
                onChange={(e) => setEditedPsychographics({...editedPsychographics, technologyAdoption: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin text-xs"
              >
                <option value="Early Adopter" className="bg-slate-800">Early Adopter</option>
                <option value="Early Majority" className="bg-slate-800">Early Majority</option>
                <option value="Late Majority" className="bg-slate-800">Late Majority</option>
                <option value="Laggard" className="bg-slate-800">Laggard</option>
              </select>
            </div>
            
            <div>
              <label className="block text-linkedin-light text-xs mb-1">Communication Style</label>
              <select
                value={editedPsychographics.communicationStyle}
                onChange={(e) => setEditedPsychographics({...editedPsychographics, communicationStyle: e.target.value})}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin text-xs"
              >
                <option value="Direct" className="bg-slate-800">Direct</option>
                <option value="Analytical" className="bg-slate-800">Analytical</option>
                <option value="Expressive" className="bg-slate-800">Expressive</option>
                <option value="Amiable" className="bg-slate-800">Amiable</option>
              </select>
            </div>
            
            <div className="flex items-center justify-end space-x-2 pt-2">
              <button
                onClick={() => setIsEditingPsychographics(false)}
                className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
              >
                Cancel
              </button>
              <button
                onClick={handleSavePsychographics}
                className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs flex items-center space-x-1"
              >
                <Save className="w-3 h-3" />
                <span>Save</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-1">Values & Beliefs</h5>
              <p className="text-gray-300 text-xs">
                {targetAudienceData.psychographics.valuesBeliefs || "Not defined yet."}
              </p>
            </div>
            
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-1">Lifestyle Preferences</h5>
              <p className="text-gray-300 text-xs">
                {targetAudienceData.psychographics.lifestylePreferences || "Not defined yet."}
              </p>
            </div>
            
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-1">Pain Points</h5>
              <p className="text-gray-300 text-xs">
                {targetAudienceData.psychographics.painPoints || "Not defined yet."}
              </p>
            </div>
            
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-1">Goals & Aspirations</h5>
              <p className="text-gray-300 text-xs">
                {targetAudienceData.psychographics.goalsAspirations || "Not defined yet."}
              </p>
            </div>
            
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-1">Behavioral Patterns</h5>
              <p className="text-gray-300 text-xs">
                {targetAudienceData.psychographics.behavioralPatterns || "Not defined yet."}
              </p>
            </div>
            
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-1">Technology Adoption</h5>
              <p className="text-gray-300 text-xs">
                {targetAudienceData.psychographics.technologyAdoption || "Not defined yet."}
              </p>
            </div>
            
            <div className="bg-linkedin-card/50 rounded-lg p-3">
              <h5 className="text-linkedin-light text-xs font-medium mb-1">Communication Style</h5>
              <p className="text-gray-300 text-xs">
                {targetAudienceData.psychographics.communicationStyle || "Not defined yet."}
              </p>
            </div>
          </div>
        )}
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
          <span>Continue to AI Personas</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default TargetAudienceInputs;