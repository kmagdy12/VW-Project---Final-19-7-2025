import React, { useState } from 'react';
import { 
  Users, 
  Building2, 
  MapPin, 
  Filter, 
  Plus, 
  Search,
  TrendingUp,
  MessageSquare,
  Calendar,
  Eye,
  UserPlus,
  Settings,
  Bell,
  Globe,
  Award,
  Hash
} from 'lucide-react';

const Communities: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedStakeholder, setSelectedStakeholder] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All Communities' },
    { id: 'joined', label: 'My Communities' },
    { id: 'recommended', label: 'Recommended' }
  ];

  const industries = [
    'All Industries', 'Fintech', 'E-commerce', 'Healthcare', 'EdTech', 'PropTech', 'FoodTech'
  ];

  const locations = [
    'All Locations', 'UAE', 'Saudi Arabia', 'Egypt', 'Jordan', 'Lebanon', 'Kuwait'
  ];

  const stakeholderTypes = [
    'All Types', 'Founders', 'Investors', 'Experts', 'Mentors'
  ];

  const joinedCommunities = [
    {
      id: 1,
      name: 'MENA Fintech Founders',
      members: 2847,
      newPosts: 12,
      lastActivity: '2 hours ago',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Industry'
    },
    {
      id: 2,
      name: 'Dubai Startup Ecosystem',
      members: 1523,
      newPosts: 8,
      lastActivity: '4 hours ago',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Location'
    },
    {
      id: 3,
      name: 'Series A Investors Network',
      members: 892,
      newPosts: 5,
      lastActivity: '1 day ago',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Stakeholder'
    }
  ];

  const allCommunities = [
    {
      id: 4,
      name: 'E-commerce Growth Hackers',
      members: 3421,
      description: 'Strategies and tactics for scaling e-commerce businesses in the MENA region',
      category: 'Industry',
      activityLevel: 'High',
      recentPosts: 24,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300',
      tags: ['E-commerce', 'Growth', 'Marketing']
    },
    {
      id: 5,
      name: 'Cairo Tech Meetup',
      members: 1876,
      description: 'Monthly meetups and networking events for Cairo\'s tech community',
      category: 'Location',
      activityLevel: 'Medium',
      recentPosts: 15,
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300',
      tags: ['Networking', 'Events', 'Cairo']
    },
    {
      id: 6,
      name: 'HealthTech Innovators',
      members: 2156,
      description: 'Advancing healthcare through technology across the Middle East',
      category: 'Industry',
      activityLevel: 'High',
      recentPosts: 31,
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=300',
      tags: ['HealthTech', 'Innovation', 'Healthcare']
    },
    {
      id: 7,
      name: 'Women in Tech MENA',
      members: 4523,
      description: 'Empowering women entrepreneurs and professionals in technology',
      category: 'Interest',
      activityLevel: 'Very High',
      recentPosts: 42,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300',
      tags: ['Women', 'Diversity', 'Leadership']
    },
    {
      id: 8,
      name: 'Angel Investors Circle',
      members: 687,
      description: 'Exclusive community for angel investors and high-net-worth individuals',
      category: 'Stakeholder',
      activityLevel: 'Medium',
      recentPosts: 18,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300',
      tags: ['Investment', 'Angels', 'Funding']
    }
  ];

  const getActivityColor = (level: string) => {
    switch (level) {
      case 'Very High':
        return 'text-green-400 bg-green-500/20';
      case 'High':
        return 'text-blue-400 bg-blue-500/20';
      case 'Medium':
        return 'text-yellow-400 bg-yellow-500/20';
      default:
        return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-linkedin-background via-linkedin-dark to-linkedin-background p-6">
      <div className="max-w-7xl mx-auto">

        {/* Filters and Search */}
        <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search communities..."
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin"
              />
            </div>

            {/* Industry Filter */}
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin"
            >
              {industries.map((industry) => (
                <option key={industry} value={industry.toLowerCase()} className="bg-slate-800">
                  {industry}
                </option>
              ))}
            </select>

            {/* Location Filter */}
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin"
            >
              {locations.map((location) => (
                <option key={location} value={location.toLowerCase()} className="bg-slate-800">
                  {location}
                </option>
              ))}
            </select>

            {/* Stakeholder Filter */}
            <select
              value={selectedStakeholder}
              onChange={(e) => setSelectedStakeholder(e.target.value)}
              className="bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin"
            >
              {stakeholderTypes.map((type) => (
                <option key={type} value={type.toLowerCase()} className="bg-slate-800">
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center space-x-2">
              {filterOptions.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-linkedin to-linkedin-light text-white'
                      : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <button className="flex items-center space-x-2 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-6 py-3 rounded-lg font-medium transition-all">
              <Plus className="w-4 h-4" />
              <span>Create Community</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* My Communities */}
            {activeFilter === 'joined' && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">My Communities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {joinedCommunities.map((community) => (
                    <div key={community.id} className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6 hover:border-linkedin/50 transition-all">
                      <div className="flex items-start space-x-4 mb-4">
                        <img 
                          src={community.image} 
                          alt={community.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-1">{community.name}</h3>
                          <p className="text-gray-400 text-sm">{community.members.toLocaleString()} members</p>
                        </div>
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                          <Settings className="w-5 h-5" />
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4 text-gray-400">
                          <span className="flex items-center space-x-1">
                            <MessageSquare className="w-4 h-4" />
                            <span>{community.newPosts} new posts</span>
                          </span>
                          <span>{community.lastActivity}</span>
                        </div>
                        <button className="text-linkedin-light hover:text-linkedin font-medium">
                          View
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* All Communities */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                {activeFilter === 'recommended' ? 'Recommended Communities' : 'Discover Communities'}
              </h2>
              <div className="space-y-6">
                {allCommunities.map((community) => (
                  <div key={community.id} className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6 hover:border-linkedin/50 transition-all">
                    <div className="flex items-start space-x-6">
                      <img 
                        src={community.image} 
                        alt={community.name}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-2">{community.name}</h3>
                            <p className="text-gray-300 mb-3">{community.description}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getActivityColor(community.activityLevel)}`}>
                            {community.activityLevel} Activity
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-6 text-sm text-gray-400 mb-4">
                          <span className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{community.members.toLocaleString()} members</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <MessageSquare className="w-4 h-4" />
                            <span>{community.recentPosts} posts this week</span>
                          </span>
                          <span className="bg-linkedin/20 text-linkedin-light px-2 py-1 rounded text-xs">
                            {community.category}
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {community.tags.map((tag, index) => (
                              <span key={index} className="bg-linkedin-card text-gray-300 px-2 py-1 rounded text-xs">
                                #{tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <button className="text-gray-400 hover:text-white transition-colors">
                              <Eye className="w-5 h-5" />
                            </button>
                            <button className="flex items-center space-x-2 bg-linkedin hover:bg-linkedin-dark text-white px-4 py-2 rounded-lg font-medium transition-all">
                              <UserPlus className="w-4 h-4" />
                              <span>Join</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Community Stats */}
            <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
              <h3 className="text-lg font-bold text-white mb-4">Your Community Activity</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Communities Joined</span>
                  <span className="text-white font-semibold">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Posts This Week</span>
                  <span className="text-white font-semibold">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Comments</span>
                  <span className="text-white font-semibold">24</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Reputation Score</span>
                  <span className="text-linkedin-light font-semibold">847</span>
                </div>
              </div>
            </div>

            {/* Trending Topics */}
            <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
              <h3 className="text-lg font-bold text-white mb-4">Trending in Communities</h3>
              <div className="space-y-3">
                {['#SeriesA', '#Fintech', '#MENA', '#Startup', '#Investment'].map((topic, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                    <Hash className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300">{topic.slice(1)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Suggested Communities */}
            <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
              <h3 className="text-lg font-bold text-white mb-4">Suggested for You</h3>
              <div className="space-y-4">
                {allCommunities.slice(0, 3).map((community) => (
                  <div key={community.id} className="flex items-center space-x-3">
                    <img 
                      src={community.image} 
                      alt={community.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium text-sm truncate">{community.name}</h4>
                      <p className="text-gray-400 text-xs">{community.members.toLocaleString()} members</p>
                    </div>
                    <button className="text-linkedin-light hover:text-linkedin text-xs font-medium">
                      Join
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communities;