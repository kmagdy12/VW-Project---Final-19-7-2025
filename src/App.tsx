import React, { useState } from 'react';
import { useEffect } from 'react';
import LandingPage from './components/LandingPage';
import Onboarding from './components/Onboarding';
import WelcomeScreen from './components/WelcomeScreen';
import MainPlatform from './components/MainPlatform';
import SubscriptionPackages from './components/SubscriptionPackages';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState<'landing' | 'onboarding' | 'welcome' | 'platform' | 'subscriptions'>('landing');
  const [profileCompleted, setProfileCompleted] = useState(false);
  const [savedProfileData, setSavedProfileData] = useState(null);

  // Scroll to top whenever the current page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleLogin = (provider: 'google' | 'linkedin') => {
    // Simulate authentication process
    console.log(`Logging in with ${provider}`);
    
    // Simulate pre-filling profile data from social login
    // In a real app, this would come from the OAuth provider
    const mockProfileData = {
      fullName: provider === 'google' ? 'John Doe' : 'Jane Smith',
      emailAddress: provider === 'google' ? 'john.doe@gmail.com' : 'jane.smith@company.com',
      linkedInProfile: provider === 'linkedin' ? 'https://linkedin.com/in/janesmith' : '',
      preferredLanguage: 'English'
    };
    
    // Store mock data for pre-filling (in real app, this would be passed to onboarding)
    console.log('Pre-filled profile data:', mockProfileData);
    
    setIsAuthenticated(true);
    setCurrentPage('onboarding');
  };

  const handleSkipOnboarding = () => {
    setCurrentPage('welcome');
  };

  const handleOnboardingComplete = () => {
    setProfileCompleted(true);
    setCurrentPage('welcome');
  };

  const handleEnterPlatform = () => {
    setCurrentPage('subscriptions');
  };

  const handleSubscriptionSuccess = () => {
    setCurrentPage('platform');
  };

  if (isAuthenticated && currentPage === 'platform') {
    return (
      <MainPlatform 
        profileCompleted={profileCompleted} 
        onReturnToOnboarding={() => setCurrentPage('onboarding')}
      />
    );
  }

  if (isAuthenticated && currentPage === 'welcome') {
    return (
      <WelcomeScreen 
        profileCompleted={profileCompleted}
        onEnterPlatform={handleEnterPlatform}
      />
    );
  }

  if (isAuthenticated && currentPage === 'subscriptions') {
    return <SubscriptionPackages onSubscriptionComplete={handleSubscriptionSuccess} />;
  }

  if (isAuthenticated && currentPage === 'onboarding') {
    return (
      <Onboarding 
        onSkip={handleSkipOnboarding}
        onComplete={handleOnboardingComplete}
        savedProfileData={savedProfileData}
        onSaveProfile={setSavedProfileData}
      />
    );
  }

  return <LandingPage onLogin={handleLogin} />;
}

export default App;