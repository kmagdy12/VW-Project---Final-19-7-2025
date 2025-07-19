import React, { useState } from 'react';
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
  UserCheck,
  ArrowLeft,
  Star
} from 'lucide-react';
import { ProfileData } from '../Onboarding';

interface ProfileViewProps {
  onBack: () => void;
  profileData: ProfileData;
}

const ProfileView: React.FC<ProfileViewProps> = ({ onBack, profileData }) => {
  const [activeSection, setActiveSection] = useState('profile');

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

  // Calculate completion percentage
  const calculateCompletionPercentage = () => {
    const totalFields = 52; // Total expected fields across all sections
    let filledFields = 0;
    
    // Count filled fields
    Object.values(profileData).forEach(sectionData => {
      Object.values(sectionData).forEach(value => {
        if (value && (typeof value === 'string' ? value.trim() : Array.isArray(value) ? value.length > 0 : true)) {
          filledFields++;
        }
      });
    });
    
    const percentage = Math.round((filledFields / totalFields) * 100);
    return Math.min(percentage, 100);
  };

  const completionPercentage = calculateCompletionPercentage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-linkedin-background via-linkedin-dark to-linkedin-background">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBack}
              className="p-2 bg-linkedin-card hover:bg-linkedin-card/70 text-white rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-white">My Profile</h1>
              <p className="text-gray-300">View and manage your profile information</p>
            </div>
          </div>
          <button className="bg-linkedin hover:bg-linkedin-dark text-white px-6 py-2 rounded-lg transition-colors">
            Edit Profile
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Profile Summary */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <img 
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150" 
                    alt="Profile" 
                    className="w-24 h-24 rounded-full object-cover border-4 border-linkedin"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                
                <h2 className="text-xl font-bold text-white mb-1">{profileData.profileInfo?.fullName || 'John Doe'}</h2>
                <p className="text-linkedin-light text-sm mb-3">{profileData.professionalBackground?.currentOccupation || 'Serial Entrepreneur & Investor'}</p>
                
                {/* Role Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-3">
                  <span className="bg-linkedin/20 text-linkedin-light px-2 py-1 rounded-full text-xs">
                    Founder
                  </span>
                  <span className="bg-linkedin-light/20 text-linkedin-light px-2 py-1 rounded-full text-xs">
                    Investor
                  </span>
                </div>
                
                {/* Location */}
                <div className="flex items-center justify-center space-x-1 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{profileData.profileInfo?.countryOfResidence || 'Dubai, UAE'}</span>
                </div>
              </div>
            </div>

            {/* Profile Completion */}
            <div className="space-y-4">
              <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
                <h3 className="text-lg font-bold text-white mb-4">Profile Completion</h3>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-gray-300">Completion</span>
                  <span className="text-linkedin-light font-semibold">{completionPercentage}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                  <div 
                    className="bg-gradient-to-r from-linkedin to-linkedin-light h-3 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${completionPercentage}%` }}
                  ></div>
                </div>
                
                {completionPercentage < 100 ? (
                  <p className="text-gray-400 text-sm">
                    Complete your profile to unlock all platform features
                  </p>
                ) : (
                  <p className="text-gray-400 text-sm">
                    Your profile is complete! You have access to all platform features
                  </p>
                )}
              </div>
              
              {/* Profile Badge */}
              <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
                <h3 className="text-lg font-bold text-white mb-4">Profile Badge</h3>
                <div className="flex items-center justify-center">
                  <div className="bg-gradient-to-r from-linkedin to-linkedin-light p-1 rounded-full">
                    <div className="bg-linkedin-card rounded-full p-6">
                      <div className="flex flex-col items-center">
                        <Star className="w-12 h-12 text-yellow-400 fill-current mb-2" />
                        <span className="text-white font-bold text-lg">Venture Pro</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Profile Score */}
              <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
                <h3 className="text-lg font-bold text-white mb-4">Profile Score</h3>
                <div className="flex items-center justify-center mb-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-linkedin to-linkedin-light flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-linkedin-card flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">850</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Venture Readiness</span>
                    <span className="text-green-400 font-semibold">Excellent</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Investment Potential</span>
                    <span className="text-green-400 font-semibold">High</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Network Strength</span>
                    <span className="text-yellow-400 font-semibold">Good</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-4">
              <h3 className="text-lg font-bold text-white mb-4">Profile Sections</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.key}
                    onClick={() => setActiveSection(section.key)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all ${
                      activeSection === section.key
                        ? 'bg-linkedin text-white'
                        : 'text-gray-300 hover:text-white hover:bg-linkedin-card'
                    }`}
                  >
                    <section.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content - Profile Details */}
          <div className="lg:col-span-3 space-y-6">
            {sections.map((section) => (
              activeSection === section.key && (
                <div key={section.key} className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                    <section.icon className="w-6 h-6 text-linkedin-light" />
                    <span>{section.title}</span>
                  </h2>
                  
                  <div className="space-y-6">
                    {section.fields.map((field, index) => (
                      <div key={index} className="bg-linkedin-card/50 rounded-lg p-4">
                        <div className="flex items-start space-x-3">
                          <field.icon className="w-5 h-5 text-linkedin-light mt-1" />
                          <div>
                            <h3 className="text-white font-semibold mb-2">{field.label}</h3>
                            <p className="text-gray-300">
                              {field.value || 'Not provided'}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;