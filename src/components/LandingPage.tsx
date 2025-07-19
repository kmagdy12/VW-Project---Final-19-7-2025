import React from 'react';
import { 
  ArrowRight, 
  Users, 
  TrendingUp, 
  Shield, 
  Globe, 
  Zap,
  CheckCircle,
  Star,
  Building2,
  Target,
  BarChart3
} from 'lucide-react';

interface LandingPageProps {
  onLogin: (provider: 'google' | 'linkedin') => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-linkedin-background via-linkedin-dark to-linkedin-background">
      {/* Header */}
      <header className="relative z-50 px-6 py-4">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-linkedin to-linkedin-light rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">Venture Weavers</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <button className="bg-linkedin hover:bg-linkedin-dark text-white px-6 py-2 rounded-lg transition-colors">
              Contact
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block bg-linkedin/20 text-linkedin-light px-4 py-2 rounded-full text-sm font-medium mb-6">
              🚀 Connecting MENA's Innovation Ecosystem
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Where <span className="bg-gradient-to-r from-linkedin to-linkedin-light bg-clip-text text-transparent">Ventures</span>
            <br />Meet <span className="bg-gradient-to-r from-linkedin-light to-linkedin bg-clip-text text-transparent">Vision</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            The premier platform connecting founders, investors, and mentors across the MENA region. 
            Discover opportunities, build relationships, and scale your venture with AI-powered insights.
          </p>
          
          {/* Auth Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => onLogin('google')}
              className="group flex items-center space-x-3 bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Continue with Google</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => onLogin('linkedin')}
              className="group flex items-center space-x-3 bg-linkedin hover:bg-linkedin-dark text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>Continue with LinkedIn</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-linkedin-card backdrop-blur-lg rounded-2xl p-6 border border-linkedin-border">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300">Active Startups</div>
            </div>
            <div className="bg-linkedin-card backdrop-blur-lg rounded-2xl p-6 border border-linkedin-border">
              <div className="text-3xl font-bold text-white mb-2">$2.5B+</div>
              <div className="text-gray-300">Capital Deployed</div>
            </div>
            <div className="bg-linkedin-card backdrop-blur-lg rounded-2xl p-6 border border-linkedin-border">
              <div className="text-3xl font-bold text-white mb-2">15</div>
              <div className="text-gray-300">MENA Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-linkedin-card/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Platform Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the tools and features that make Ventur Weavers the leading platform for MENA's startup ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-linkedin/20 to-linkedin-light/20 backdrop-blur-lg rounded-2xl p-8 border border-linkedin-border hover:border-linkedin/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-linkedin rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI-Powered Matching</h3>
              <p className="text-gray-300">Advanced algorithms connect founders with the right investors and mentors based on industry, stage, and goals.</p>
            </div>
            
            <div className="bg-gradient-to-br from-linkedin-light/20 to-linkedin/20 backdrop-blur-lg rounded-2xl p-8 border border-linkedin-border hover:border-linkedin-light/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-linkedin-light rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Market Intelligence</h3>
              <p className="text-gray-300">Real-time insights on MENA market trends, funding patterns, and sector-specific opportunities.</p>
            </div>
            
            <div className="bg-gradient-to-br from-linkedin/20 to-linkedin-dark/20 backdrop-blur-lg rounded-2xl p-8 border border-linkedin-border hover:border-linkedin/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-linkedin rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Secure Transactions</h3>
              <p className="text-gray-300">Bank-grade security for all financial transactions and sensitive business information.</p>
            </div>
            
            <div className="bg-gradient-to-br from-linkedin-light/20 to-linkedin-dark/20 backdrop-blur-lg rounded-2xl p-8 border border-linkedin-border hover:border-linkedin-light/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-linkedin-light rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Community Network</h3>
              <p className="text-gray-300">Connect with a vibrant community of entrepreneurs, investors, and industry experts across MENA.</p>
            </div>
            
            <div className="bg-gradient-to-br from-linkedin-dark/20 to-linkedin/20 backdrop-blur-lg rounded-2xl p-8 border border-linkedin-border hover:border-linkedin-dark/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-linkedin-dark rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Regional Expertise</h3>
              <p className="text-gray-300">Deep understanding of MENA markets, regulations, and cultural business practices.</p>
            </div>
            
            <div className="bg-gradient-to-br from-linkedin/20 to-linkedin-light/20 backdrop-blur-lg rounded-2xl p-8 border border-linkedin-border hover:border-linkedin/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-linkedin rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Growth Analytics</h3>
              <p className="text-gray-300">Comprehensive analytics and reporting tools to track performance and growth metrics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions for every stage of your venture journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Founder Support</h3>
                  <p className="text-gray-300">End-to-end support for entrepreneurs from ideation to exit, including mentorship, resources, and funding connections.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Investor Relations</h3>
                  <p className="text-gray-300">Connect with vetted startups, access deal flow, and manage your investment portfolio with advanced tools.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Mentorship Programs</h3>
                  <p className="text-gray-300">Access experienced mentors and industry experts who can guide your venture's growth and development.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Market Research</h3>
                  <p className="text-gray-300">Comprehensive market analysis and research reports tailored to MENA markets and specific industries.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Legal & Compliance</h3>
                  <p className="text-gray-300">Navigate complex regulatory environments with expert legal guidance and compliance support.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Strategic Partnerships</h3>
                  <p className="text-gray-300">Facilitate strategic partnerships and collaborations to accelerate growth and market expansion.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 bg-linkedin-card/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">What Our Users Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-linkedin-card backdrop-blur-lg rounded-2xl p-8 border border-linkedin-border">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">"Venture Weavers connected us with the perfect investor who understood our vision and the MENA market dynamics."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-linkedin to-linkedin-light rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold">AH</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Ahmed Hassan</div>
                  <div className="text-gray-400 text-sm">CEO, TechStart Dubai</div>
                </div>
              </div>
            </div>
            
            <div className="bg-linkedin-card backdrop-blur-lg rounded-2xl p-8 border border-linkedin-border">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">"The AI-powered matching system is incredible. It saved us months of networking and found us ideal portfolio companies."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-linkedin-light to-linkedin rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold">SK</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Sarah Khalil</div>
                  <div className="text-gray-400 text-sm">Partner, MENA Ventures</div>
                </div>
              </div>
            </div>
            
            <div className="bg-linkedin-card backdrop-blur-lg rounded-2xl p-8 border border-linkedin-border">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">"The mentorship program provided invaluable guidance that helped us navigate the complexities of scaling in the region."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-linkedin to-linkedin-dark rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold">MR</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Mohamed Rashid</div>
                  <div className="text-gray-400 text-sm">Founder, HealthTech Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-linkedin-border">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-linkedin to-linkedin-light rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Venture Weavers</span>
          </div>
          <p className="text-gray-400 mb-6">Empowering the MENA startup ecosystem</p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;