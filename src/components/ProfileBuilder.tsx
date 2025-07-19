import React, { useRef, useEffect } from 'react';
import { 
  User, 
  Building2, 
  MapPin, 
  Briefcase, 
  Target, 
  Clock, 
  TrendingUp,
  CheckCircle,
  Circle,
  Award,
  Globe,
  DollarSign,
  Brain,
  BarChart3,
  Users,
  Shield,
  Zap,
  Phone,
  Mail,
  Languages,
  GraduationCap,
  Lightbulb,
  Heart,
  Settings,
  FileText,
  Compass,
  PieChart,
  UserCheck
} from 'lucide-react';
import { ProfileData } from './Onboarding';

interface ProfileBuilderProps {
  profileData: ProfileData;
  completionPercentage: number;
  onComplete: () => void;
  isCompleted: boolean;
  activeSection: string;
}

const ProfileBuilder: React.FC<ProfileBuilderProps> = ({ 
  profileData, 
  completionPercentage, 
  onComplete, 
  isCompleted,
  activeSection
}) => {
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const sections = [
    {
      key: 'profile',
      title: 'Profile Information',
      icon: User,
      fields: [
        { label: 'Full Name', value: profileData.profileInfo?.fullName, icon: User },
        { label: 'Email Address', value: profileData.profileInfo?.emailAddress, icon: Mail },
        { label: 'Phone Number', value: profileData.profileInfo?.phoneNumber, icon: Phone },
        { label: 'LinkedIn Profile', value: profileData.profileInfo?.linkedInProfile, icon: Building2 },
        { label: 'Role', value: profileData.profileInfo?.role, icon: UserCheck },
        { label: 'Country of Residence', value: profileData.profileInfo?.countryOfResidence, icon: MapPin },
        { label: 'Preferred Language', value: profileData.profileInfo?.preferredLanguage, icon: Languages }
      ]
    },
    {
      key: 'professional',
      title: 'Professional Background',
      icon: Briefcase,
      fields: [
        { label: 'Current Occupation', value: profileData.professionalBackground?.currentOccupation, icon: Briefcase },
        { label: 'Years of Experience', value: profileData.professionalBackground?.yearsOfExperience, icon: Clock },
        { label: 'Entrepreneurial Experience', value: profileData.professionalBackground?.entrepreneurialExperience, icon: TrendingUp },
        { label: 'Industry Expertise', value: profileData.professionalBackground?.industryExpertise?.join(', '), icon: Building2 },
        { label: 'Market Expertise', value: profileData.professionalBackground?.marketExpertise?.join(', '), icon: Globe },
        { label: 'Key Skills', value: profileData.professionalBackground?.keySkills?.join(', '), icon: Award }
      ]
    },
    {
      key: 'mindset',
      title: 'Entrepreneurial Mindset & Preferences',
      icon: Brain,
      fields: [
        { label: 'Risk Tolerance', value: profileData.entrepreneurialMindset?.riskTolerance, icon: Shield },
        { label: 'Decision-Making Style', value: profileData.entrepreneurialMindset?.decisionMakingStyle, icon: Brain },
        { label: 'Leadership Style', value: profileData.entrepreneurialMindset?.leadershipStyle, icon: Users },
        { label: 'Learning Preferences', value: profileData.entrepreneurialMindset?.learningPreferences, icon: GraduationCap },
        { label: 'Recommendation Preferences', value: profileData.entrepreneurialMindset?.recommendationPreferences, icon: Lightbulb },
        { label: 'Preferred Tools', value: profileData.entrepreneurialMindset?.preferredTools?.join(', '), icon: Settings }
      ]
    },
    {
      key: 'portfolio',
      title: 'Portfolio Interests',
      icon: BarChart3,
      fields: [
        { label: 'Industries of Interest', value: profileData.portfolioInterests?.industriesOfInterest?.join(', '), icon: Building2 },
        { label: 'Sub-industry Interest', value: profileData.portfolioInterests?.subIndustryInterest?.join(', '), icon: Target },
        { label: 'Desired Market Focus', value: profileData.portfolioInterests?.desiredMarketFocus?.join(', '), icon: Globe },
        { label: 'Business Model Interest', value: profileData.portfolioInterests?.businessModelInterest?.join(', '), icon: Briefcase },
        { label: 'Growth Expectations', value: profileData.portfolioInterests?.growthExpectations, icon: TrendingUp },
        { label: 'Building Approach', value: profileData.portfolioInterests?.buildingApproach, icon: Users },
        { label: 'Diversification Level', value: profileData.portfolioInterests?.diversificationLevel, icon: BarChart3 },
        { label: 'Allocation Strategy', value: profileData.portfolioInterests?.allocationStrategy, icon: Target },
        { label: 'Target Returns', value: profileData.portfolioInterests?.targetReturns, icon: DollarSign },
        { label: 'Exit Strategy', value: profileData.portfolioInterests?.exitStrategy, icon: TrendingUp }
      ]
    },
    {
      key: 'direction',
      title: 'Direction/Thesis',
      icon: Compass,
      fields: [
        { label: 'Strategic Goals', value: profileData.directionThesis?.strategicGoals?.join(', '), icon: Target },
        { label: 'Strategic Objectives', value: profileData.directionThesis?.strategicObjectives?.join(', '), icon: BarChart3 },
        { label: 'Investment Philosophy', value: profileData.directionThesis?.philosophy, icon: Brain },
        { label: 'Risk Appetite', value: profileData.directionThesis?.riskAppetite, icon: Shield },
        { label: 'ESG & Impact', value: profileData.directionThesis?.esgImpact, icon: Heart },
        { label: 'Key Capabilities', value: profileData.directionThesis?.capabilities?.join(', '), icon: Award },
        { label: 'Key Metrics', value: profileData.directionThesis?.keyMetrics?.join(', '), icon: BarChart3 }
      ]
    },
    {
      key: 'portfolioDirection',
      title: 'Portfolio Direction',
      icon: PieChart,
      fields: [
        { label: 'Total Bootstrap Fund', value: profileData.portfolioDirection?.totalBootstrapFund, icon: DollarSign },
        { label: 'Industry Focus', value: profileData.portfolioDirection?.industryFocus?.join(', '), icon: Building2 },
        { label: 'Geographical Focus', value: profileData.portfolioDirection?.geographicalFocus?.join(', '), icon: Globe },
        { label: 'Problem Focus', value: profileData.portfolioDirection?.problemFocus?.join(', '), icon: Target },
        { label: 'Business Model Focus', value: profileData.portfolioDirection?.businessModelFocus?.join(', '), icon: Briefcase },
        { label: 'Building Approach', value: profileData.portfolioDirection?.buildingApproach, icon: Users },
        { label: 'Diversification Level', value: profileData.portfolioDirection?.diversificationLevel, icon: BarChart3 },
        { label: 'Allocation Strategy', value: profileData.portfolioDirection?.allocationStrategy, icon: TrendingUp },
        { label: 'Exit Strategy', value: profileData.portfolioDirection?.exitStrategy, icon: Target }
      ]
    },
    {
      key: 'criteria',
      title: 'Venture Founding Criteria',
      icon: FileText,
      fields: [
        { label: 'Building Fund Size', value: profileData.ventureCriteria?.buildingFundSize, icon: DollarSign },
        { label: 'Avg. Ticket Size', value: profileData.ventureCriteria?.avgTicketSize, icon: DollarSign },
        { label: 'Portfolio Size', value: profileData.ventureCriteria?.portfolioSize, icon: BarChart3 },
        { label: 'Joining Type', value: profileData.ventureCriteria?.joiningType, icon: Users },
        { label: 'Venture Stage', value: profileData.ventureCriteria?.ventureStage?.join(', '), icon: TrendingUp },
        { label: 'Equity Ownership', value: profileData.ventureCriteria?.equityOwnership, icon: Award },
        { label: 'Target Position', value: profileData.ventureCriteria?.targetPosition, icon: Target },
        { label: 'Co-founders Criteria', value: profileData.ventureCriteria?.cofoundersCriteria?.join(', '), icon: Users }
      ]
    }
  ];

  // Auto-scroll to active section
  useEffect(() => {
    if (activeSection && activeSection !== 'complete' && sectionRefs.current[activeSection]) {
      sectionRefs.current[activeSection]?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }, [activeSection]);

  return (
    <div className="h-full bg-linkedin-background/30 overflow-y-auto">
      {/* Header with Progress */}
      <div className="p-6 border-b border-linkedin-border bg-linkedin-background/50">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">Your Venture Profile</h2>
          <div className="text-right">
            <div className="text-2xl font-bold text-linkedin-light">{completionPercentage}%</div>
            <div className="text-sm text-gray-400">Complete</div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-700 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-linkedin to-linkedin-light h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
        
        <p className="text-gray-400 text-sm mt-2">
          {completionPercentage < 100 
            ? "Continue chatting with our AI to complete your comprehensive profile with strategic frameworks" 
            : "Profile complete! You're ready to explore Venture Weavers with your complete strategic framework"
          }
        </p>
      </div>

      {/* Profile Sections */}
      <div className="p-6 space-y-6">
        {sections.map((section, sectionIndex) => {
          const filledFields = section.fields.filter(field => field.value && field.value.trim()).length;
          const totalFields = section.fields.length;
          const sectionComplete = filledFields === totalFields;
          const hasAnyData = filledFields > 0;
          
          return (
            <div 
              key={sectionIndex}
              ref={(el) => sectionRefs.current[section.key] = el}
              className={`bg-linkedin-card/50 backdrop-blur-sm rounded-xl border transition-all duration-300 ${
                activeSection === section.key
                  ? 'border-linkedin/70 bg-linkedin/10 shadow-lg shadow-linkedin/20'
                  : sectionComplete 
                    ? 'border-linkedin-light/50 bg-linkedin-light/5' 
                    : hasAnyData 
                      ? 'border-linkedin/50 bg-linkedin/5' 
                      : 'border-linkedin-border'
              }`}
            >
              {/* Section Header */}
              <div className="p-4 border-b border-linkedin-border/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      activeSection === section.key
                        ? 'bg-linkedin ring-2 ring-linkedin-light'
                        : sectionComplete 
                          ? 'bg-linkedin-light' 
                          : hasAnyData 
                            ? 'bg-linkedin' 
                            : 'bg-gray-600'
                    }`}>
                      <section.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold ${
                        activeSection === section.key ? 'text-linkedin-light' : 'text-white'
                      }`}>
                        {section.title}
                      </h3>
                      {activeSection === section.key && (
                        <p className="text-xs text-linkedin-light mt-1">Currently filling this section</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400">{filledFields}/{totalFields}</span>
                    {sectionComplete ? (
                      <CheckCircle className="w-5 h-5 text-linkedin-light" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </div>
              </div>

              {/* Section Fields */}
              <div className="p-4 space-y-3">
                {section.fields.map((field, fieldIndex) => (
                  <div key={fieldIndex} className="flex items-start space-x-3">
                    <field.icon className={`w-4 h-4 flex-shrink-0 mt-1 ${
                      field.value ? 'text-linkedin-light' : 'text-gray-500'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-gray-400 mb-1">{field.label}</div>
                      <div className={`text-sm break-words ${
                        field.value 
                          ? 'text-white font-medium' 
                          : 'text-gray-500 italic'
                      }`}>
                        {field.value || 'Not provided yet'}
                      </div>
                    </div>
                    {field.value && (
                      <CheckCircle className="w-4 h-4 text-linkedin-light flex-shrink-0 mt-1" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Completion Message */}
        {isCompleted && (
          <div className="bg-gradient-to-r from-linkedin/20 to-linkedin-light/20 backdrop-blur-sm rounded-xl border border-linkedin/50 p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-linkedin to-linkedin-light rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Strategic Profile Complete!</h3>
            <p className="text-gray-300 mb-4">
              Your comprehensive venture profile is now complete with strategic direction, portfolio framework, 
              and founding criteria. You're fully equipped to make informed decisions and discover the best 
              opportunities on the Venture Weavers platform.
            </p>
            <button 
              onClick={onComplete}
              className="bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Continue to Platform
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileBuilder;