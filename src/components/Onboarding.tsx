import React, { useState } from 'react';
import { useEffect } from 'react';
import AIChat from './AIChat';
import ProfileBuilder from './ProfileBuilder';

export interface ProfileData {
  profileInfo: {
    fullName?: string;
    emailAddress?: string;
    phoneNumber?: string;
    linkedInProfile?: string;
    role?: string;
    countryOfResidence?: string;
    preferredLanguage?: string;
  };
  professionalBackground: {
    currentOccupation?: string;
    yearsOfExperience?: string;
    entrepreneurialExperience?: string;
    industryExpertise?: string[];
    marketExpertise?: string[];
    keySkills?: string[];
  };
  entrepreneurialMindset: {
    riskTolerance?: string;
    decisionMakingStyle?: string;
    leadershipStyle?: string;
    learningPreferences?: string;
    recommendationPreferences?: string;
    preferredTools?: string[];
  };
  portfolioInterests: {
    industriesOfInterest?: string[];
    subIndustryInterest?: string[];
    desiredMarketFocus?: string[];
    businessModelInterest?: string[];
    growthExpectations?: string;
    buildingApproach?: string;
    diversificationLevel?: string;
    allocationStrategy?: string;
    targetReturns?: string;
    exitStrategy?: string;
  };
  directionThesis: {
    strategicGoals?: string[];
    strategicObjectives?: string[];
    philosophy?: string;
    riskAppetite?: string;
    esgImpact?: string;
    capabilities?: string[];
    keyMetrics?: string[];
  };
  portfolioDirection: {
    totalBootstrapFund?: string;
    industryFocus?: string[];
    geographicalFocus?: string[];
    problemFocus?: string[];
    businessModelFocus?: string[];
    buildingApproach?: string;
    diversificationLevel?: string;
    allocationStrategy?: string;
    exitStrategy?: string;
  };
  ventureCriteria: {
    buildingFundSize?: string;
    avgTicketSize?: string;
    portfolioSize?: string;
    joiningType?: string;
    ventureStage?: string[];
    equityOwnership?: string;
    targetPosition?: string;
    cofoundersCriteria?: string[];
  };
}

interface OnboardingProps {
  onSkip: () => void;
  onComplete: () => void;
  savedProfileData?: ProfileData | null;
  onSaveProfile: (data: ProfileData) => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onSkip, onComplete, savedProfileData, onSaveProfile }) => {
  const [profileData, setProfileData] = useState<ProfileData>(savedProfileData || {
    profileInfo: {},
    professionalBackground: {},
    entrepreneurialMindset: {},
    portfolioInterests: {},
    directionThesis: {},
    portfolioDirection: {},
    ventureCriteria: {}
  });

  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('profile');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updateProfile = (section: keyof ProfileData, data: any) => {
    setProfileData(prev => {
      const updatedProfile = {
        ...prev,
        [section]: { ...prev[section], ...data }
      };
      
      onSaveProfile(updatedProfile); // Save to parent component
      
      // Calculate completion percentage
      const totalFields = 52; // Updated total expected fields across all sections
      let filledFields = 0;
      
      // Count filled fields
      Object.values(updatedProfile).forEach(sectionData => {
        Object.values(sectionData).forEach(value => {
          if (value && (typeof value === 'string' ? value.trim() : Array.isArray(value) ? value.length > 0 : true)) {
            filledFields++;
          }
        });
      });
      
      const percentage = Math.round((filledFields / totalFields) * 100);
      setCompletionPercentage(Math.min(percentage, 100));
      
      if (percentage >= 80 && !isCompleted) {
        setIsCompleted(true);
      }
      
      return updatedProfile;
    });
  };
  
  // Initialize completion percentage on component mount
  React.useEffect(() => {
    const totalFields = 52;
    let filledFields = 0;
    
    Object.values(profileData).forEach(sectionData => {
      Object.values(sectionData).forEach(value => {
        if (value && (typeof value === 'string' ? value.trim() : Array.isArray(value) ? value.length > 0 : true)) {
          filledFields++;
        }
      });
    });
    
    const percentage = Math.round((filledFields / totalFields) * 100);
    setCompletionPercentage(Math.min(percentage, 100));
    
    if (percentage >= 80 && !isCompleted) {
      setIsCompleted(true);
    }
  }, [profileData, isCompleted]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-linkedin-background via-linkedin-dark to-linkedin-background">
      {/* Header */}
      <header className="px-6 py-4 border-b border-linkedin-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-linkedin to-linkedin-light rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">VH</span>
            </div>
            <span className="text-xl font-bold text-white">Venture Weavers</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-gray-300">
              Welcome to your onboarding journey
            </div>
            <button
              onClick={onSkip}
              className="text-gray-400 hover:text-white transition-colors text-sm underline"
            >
              Skip for now
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-80px)]">
        {/* Profile Builder - Left Side */}
        <div className="w-1/2 border-r border-linkedin-border">
          <ProfileBuilder 
            profileData={profileData} 
            completionPercentage={completionPercentage} 
            onComplete={onComplete}
            isCompleted={isCompleted}
            activeSection={activeSection}
          />
        </div>
        
        {/* AI Chat - Right Side */}
        <div className="w-1/2">
          <AIChat 
            onUpdateProfile={updateProfile} 
            profileData={profileData}
            onComplete={onComplete}
            onPhaseChange={setActiveSection}
          />
        </div>
      </div>
    </div>
  );
};

export default Onboarding;