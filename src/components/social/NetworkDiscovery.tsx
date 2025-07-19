import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Users, 
  Building2, 
  MapPin, 
  UserPlus, 
  Star,
  TrendingUp,
  Award,
  MessageSquare,
  Eye,
  Globe,
  Briefcase
} from 'lucide-react';

const NetworkDiscovery: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [activeTab, setActiveTab] = useState('recommended');

  const roleFilters = [
    { id: 'all', label: 'All Roles' },
    { id: 'founder', label: 'Founders' },
    { id: 'investor', label: 'Investors' },
    { id: 'expert', label: 'Experts' }
  ];

  const tabOptions = [
    { id: 'recommended', label: 'Recommended' },
    { id: 'top', label: 'Top Profiles' }
  ];

  const profiles = [
    {
      id: 1,
      name: 'Fatima Al-Zahra',
      title: 'Co-founder & CEO at GreenTech MENA',
      company: 'GreenTech MENA',
      location: 'Dubai, UAE',
      role: 'founder',
      profilePicture: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150',
      mutualConnections: 12,
      followers: 2847,
      expertise: ['Sustainability', 'CleanTech', 'Series A'],
      bio: 'Building the future of sustainable technology in MENA. Former McKinsey consultant with 8+ years in cleantech.',
      matchScore: 95,
      isVerified: true,
      recentActivity: 'Posted about Series A funding 2 days ago'
    },
    {
      id: 2,
      name: 'Omar Benali',
      title: 'Investment Director at Gulf Capital',
      company: 'Gulf Capital',
      location: 'Abu Dhabi, UAE',
      role: 'investor',
      profilePicture: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150',
      mutualConnections: 8,
      followers: 1523,
      expertise: ['VC', 'Growth Capital', 'Fintech'],
      bio: 'Investing in the next generation of MENA startups. $50M+ deployed across 25+ companies.',
      matchScore: 88,
      isVerified: true,
      recentActivity: 'Shared market insights 1 day ago'
    },
    {
      id: 3,
      name: 'Nadia Khoury',
      title: 'Former CTO at Careem | Tech Advisor',
      company: 'Independent',
      location: 'Beirut, Lebanon',
      role: 'expert',
      profilePicture: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150',
      mutualConnections: 15,
      followers: 4521,
      expertise: ['Technology', 'Scaling', 'Product'],
      bio: 'Helping startups scale their technology and teams. 15+ years building products used by millions.',
      matchScore: 92,
      isVerified: true,
      recentActivity: 'Mentored 3 startups this week'
    },
    {
      id: 4,
      name: 'Khalid Al-Rashid',
      title: 'Founder & CEO at EdTech Solutions',
      company: 'EdTech Solutions',
      location: 'Riyadh, Saudi Arabia',
      role: 'founder',
      profilePicture: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=150',
      mutualConnections: 6,
      followers: 892,
      expertise: ['EdTech', 'B2B SaaS', 'Product'],
      bio: 'Revolutionizing education through technology. Serving 100K+ students across the region.',
      matchScore: 85,
      isVerified: false,
      recentActivity: 'Launched new product feature'
    },
    {
      id: 5,
      name: 'Layla Mansouri',
      title: 'Managing Partner at MENA Ventures',
      company: 'MENA Ventures',
      location: 'Cairo, Egypt',
      role: 'investor',
      profilePicture: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150',
      mutualConnections: 11,
      followers: 3247,
      expertise: ['Early Stage', 'B2B', 'Healthcare'],
      bio: 'Early-stage investor focused on B2B and healthcare startups. 20+ investments, 3 exits.',
      matchScore: 90,
      isVerified: true,
      recentActivity: 'Announced new fund launch'
    },
    {
      id: 6,
      name: 'Ahmed Farouk',
      title: 'Head of Innovation at Emirates NBD',
      company: 'Emirates NBD',
      location: 'Dubai, UAE',
      role: 'expert',
      profilePicture: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150',
      mutualConnections: 9,
      followers: 1876,
      expertise: ['Banking', 'Fintech', 'Innovation'],
      bio: 'Leading digital transformation in traditional banking. Expert in fintech partnerships.',
      matchScore: 87,
      isVerified: true,
      recentActivity: 'Spoke at fintech conference'
    }
  ];

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'founder':
        return <Building2 className="w-4 h-4" />;
      case 'investor':
        return <TrendingUp className="w-4 h-4" />;
      case 'expert':
        return <Award className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'founder':
        return 'text-purple-400 bg-purple-500/20';
      case 'investor':
        return 'text-blue-400 bg-blue-500/20';
      case 'expert':
        return 'text-green-400 bg-green-500/20';
      default:
        return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400 bg-green-500/20';
    if (score >= 80) return 'text-blue-400 bg-blue-500/20';
    if (score >= 70) return 'text-yellow-400 bg-yellow-500/20';
    return 'text-gray-400 bg-gray-500/20';
  };

  const filteredProfiles = profiles.filter(profile => {
    const matchesSearch = profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         profile.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         profile.expertise.some(exp => exp.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesRole = selectedRole === 'all' || profile.role === selectedRole;
    
    return matchesSearch && matchesRole;
  });

  const sortedProfiles = activeTab === 'recommended' 
    ? filteredProfiles.sort((a, b) => b.matchScore - a.matchScore)
    : filteredProfiles.sort((a, b) => b.followers - a.followers);

  return (
    <div className="min-h-screen bg-gradient-to-br from-linkedin-background via-linkedin-dark to-linkedin-background">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Network Discovery</h1>
          <p className="text-gray-300">Discover other profiles and build your network</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search and Filters */}
            <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by name, company, expertise..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin"
                  />
                </div>
                
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin"
                >
                  {roleFilters.map((filter) => (
                    <option key={filter.id} value={filter.id} className="bg-slate-800">
                      {filter.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center space-x-2">
                {tabOptions.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-linkedin to-linkedin-light text-white'
                        : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Profiles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sortedProfiles.map((profile) => (
                <div key={profile.id} className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6 hover:border-linkedin/50 transition-all">
                  {/* Profile Header */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="relative">
                      <img 
                        src={profile.profilePicture} 
                        alt={profile.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-linkedin"
                      />
                      {profile.isVerified && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <Star className="w-3 h-3 text-white fill-current" />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-lg font-semibold text-white truncate">{profile.name}</h3>
                        <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs ${getRoleColor(profile.role)}`}>
                          {getRoleIcon(profile.role)}
                          <span className="capitalize">{profile.role}</span>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm mb-1 truncate">{profile.title}</p>
                      <div className="flex items-center space-x-1 text-gray-500 text-xs">
                        <Building2 className="w-3 h-3" />
                        <span>{profile.company}</span>
                      </div>
                    </div>
                    
                    <div className={`px-2 py-1 rounded-full text-xs font-bold ${getMatchScoreColor(profile.matchScore)}`}>
                      {profile.matchScore}% Match
                    </div>
                  </div>

                  {/* Location and Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{profile.location}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{profile.followers.toLocaleString()}</span>
                      </span>
                      {profile.mutualConnections > 0 && (
                        <span className="text-linkedin-light">
                          {profile.mutualConnections} mutual
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{profile.bio}</p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {profile.expertise.map((skill, index) => (
                      <span key={index} className="bg-linkedin-card text-gray-300 px-2 py-1 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Recent Activity */}
                  <div className="bg-linkedin-card/50 rounded-lg p-3 mb-4">
                    <p className="text-gray-400 text-xs">{profile.recentActivity}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-3">
                    <button className="flex-1 flex items-center justify-center space-x-2 bg-linkedin hover:bg-linkedin-dark text-white px-4 py-2 rounded-lg font-medium transition-all">
                      <UserPlus className="w-4 h-4" />
                      <span>Connect</span>
                    </button>
                    <button className="p-2 bg-linkedin-card hover:bg-linkedin-card/70 text-gray-400 hover:text-white rounded-lg transition-colors">
                      <MessageSquare className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-linkedin-card hover:bg-linkedin-card/70 text-gray-400 hover:text-white rounded-lg transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center">
              <button className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-8 py-3 rounded-lg font-medium transition-all">
                Load More Profiles
              </button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Discovery Stats */}
            <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
              <h3 className="text-lg font-bold text-white mb-4">Discovery Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Profiles Viewed</span>
                  <span className="text-white font-semibold">47</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Connections Sent</span>
                  <span className="text-white font-semibold">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Response Rate</span>
                  <span className="text-linkedin-light font-semibold">85%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Profile Views</span>
                  <span className="text-white font-semibold">156</span>
                </div>
              </div>
            </div>

            {/* Trending Searches */}
            <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
              <h3 className="text-lg font-bold text-white mb-4">Trending Searches</h3>
              <div className="space-y-3">
                {['Fintech Founders', 'Series A Investors', 'AI Experts', 'E-commerce Leaders', 'Healthcare Innovation'].map((search, index) => (
                  <button
                    key={index}
                    onClick={() => setSearchTerm(search)}
                    className="w-full text-left p-2 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <span className="text-gray-300">{search}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Network Insights */}
            <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
              <h3 className="text-lg font-bold text-white mb-4">Network Insights</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-linkedin-light" />
                  <div>
                    <p className="text-white text-sm font-medium">Global Reach</p>
                    <p className="text-gray-400 text-xs">15 countries represented</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Briefcase className="w-5 h-5 text-linkedin" />
                  <div>
                    <p className="text-white text-sm font-medium">Industry Diversity</p>
                    <p className="text-gray-400 text-xs">12 sectors covered</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-linkedin-dark" />
                  <div>
                    <p className="text-white text-sm font-medium">Growth Potential</p>
                    <p className="text-gray-400 text-xs">High-value connections</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkDiscovery;