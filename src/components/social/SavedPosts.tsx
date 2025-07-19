import React, { useState } from 'react';
import { 
  Bookmark, 
  Search, 
  Filter, 
  Heart, 
  MessageCircle, 
  Share2, 
  Eye,
  MoreHorizontal,
  Building2,
  TrendingUp,
  Award,
  Trash2,
  Archive,
  Tag
} from 'lucide-react';

const SavedPosts: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All Saved' },
    { id: 'articles', label: 'Articles' },
    { id: 'insights', label: 'Insights' },
    { id: 'discussions', label: 'Discussions' }
  ];

  const savedPosts = [
    {
      id: 1,
      user: {
        name: 'Ahmed Hassan',
        title: 'CEO at TechStart Dubai',
        profilePicture: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100',
        role: 'founder'
      },
      content: 'Just closed our Series A round! 🚀 Excited to share that we\'ve raised $2.5M to revolutionize fintech in the MENA region. Looking forward to scaling our AI-powered payment platform. Key lessons learned: 1) Product-market fit is everything 2) Team chemistry matters more than individual talent 3) Timing the market is crucial. Happy to share more insights with fellow founders! #Fintech #SeriesA #MENA',
      timestamp: '2 hours ago',
      savedDate: 'Saved 3 days ago',
      stats: {
        likes: 47,
        comments: 12,
        shares: 8,
        views: 234
      },
      hasImage: true,
      imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'insights',
      tags: ['Fintech', 'Series A', 'Fundraising']
    },
    {
      id: 2,
      user: {
        name: 'Sarah Khalil',
        title: 'Partner at MENA Ventures',
        profilePicture: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100',
        role: 'investor'
      },
      content: 'The e-commerce landscape in Saudi Arabia is experiencing unprecedented growth. We\'re seeing 40% YoY growth in online retail, driven by: \n\n📱 Mobile-first shopping behavior\n🚚 Improved logistics infrastructure\n💳 Digital payment adoption\n👥 Changing consumer preferences\n\nWhat trends are you observing in your markets? The next 2-3 years will be critical for establishing market leadership. Companies that can balance growth with unit economics will emerge as winners.',
      timestamp: '4 hours ago',
      savedDate: 'Saved 1 week ago',
      stats: {
        likes: 32,
        comments: 18,
        shares: 5,
        views: 189
      },
      hasImage: false,
      category: 'articles',
      tags: ['E-commerce', 'Saudi Arabia', 'Market Analysis']
    },
    {
      id: 3,
      user: {
        name: 'Mohamed Rashid',
        title: 'Founder at HealthTech Solutions',
        profilePicture: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100',
        role: 'founder'
      },
      content: 'Seeking advice from fellow founders: How do you balance rapid scaling with maintaining company culture? Our team has grown from 5 to 50 in 8 months. Challenges we\'re facing:\n\n• Communication becoming fragmented\n• Decision-making slowing down\n• New hires struggling with cultural fit\n• Remote work adding complexity\n\nAny frameworks or strategies you\'d recommend? Looking for practical solutions that have worked in similar situations.',
      timestamp: '6 hours ago',
      savedDate: 'Saved 2 weeks ago',
      stats: {
        likes: 28,
        comments: 24,
        shares: 3,
        views: 156
      },
      hasImage: false,
      category: 'discussions',
      tags: ['Scaling', 'Company Culture', 'Leadership']
    },
    {
      id: 4,
      user: {
        name: 'Layla Al-Mansouri',
        title: 'Former VP at Souq.com | E-commerce Expert',
        profilePicture: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100',
        role: 'expert'
      },
      content: 'Just published my comprehensive analysis on the future of retail in the Middle East. Key takeaways:\n\n🔮 Mobile-first strategies are no longer optional - they\'re essential for survival\n📊 Data-driven personalization will separate winners from losers\n🌍 Cross-border e-commerce presents massive opportunities\n🤖 AI and automation will reshape customer experience\n\nThe retail landscape is evolving faster than ever. Companies that adapt quickly will thrive, while those that resist change will struggle to survive. Full report linked in comments 👇',
      timestamp: '8 hours ago',
      savedDate: 'Saved 1 month ago',
      stats: {
        likes: 56,
        comments: 15,
        shares: 12,
        views: 298
      },
      hasImage: true,
      imageUrl: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'articles',
      tags: ['Retail', 'E-commerce', 'Future Trends']
    },
    {
      id: 5,
      user: {
        name: 'Omar Al-Zahra',
        title: 'CTO at CloudTech MENA',
        profilePicture: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100',
        role: 'founder'
      },
      content: 'Technical debt is killing more startups than market competition. Here\'s what I\'ve learned after 3 exits:\n\n⚡ Speed vs Quality is a false dichotomy\n🏗️ Architecture decisions made in month 1 impact you in year 3\n👥 Technical debt compounds faster with team growth\n🔧 Refactoring should be planned, not reactive\n\nInvesting in code quality early saves exponentially more time and money later. What\'s your approach to managing technical debt while maintaining velocity?',
      timestamp: '1 day ago',
      savedDate: 'Saved 2 days ago',
      stats: {
        likes: 41,
        comments: 19,
        shares: 7,
        views: 203
      },
      hasImage: false,
      category: 'insights',
      tags: ['Technical Debt', 'CTO', 'Engineering']
    }
  ];

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'founder':
        return <Building2 className="w-3 h-3" />;
      case 'investor':
        return <TrendingUp className="w-3 h-3" />;
      case 'expert':
        return <Award className="w-3 h-3" />;
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

  const filteredPosts = savedPosts.filter(post => {
    const matchesSearch = post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesFilter = selectedFilter === 'all' || post.category === selectedFilter;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-linkedin-background via-linkedin-dark to-linkedin-background">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Saved Posts</h1>
          <p className="text-gray-300">Your personal content library for future reference</p>
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
                    placeholder="Search saved posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin"
                  />
                </div>
                <button className="flex items-center space-x-2 bg-linkedin hover:bg-linkedin-dark text-white px-6 py-3 rounded-lg transition-colors">
                  <Filter className="w-4 h-4" />
                  <span>Advanced Filters</span>
                </button>
              </div>

              <div className="flex items-center space-x-2">
                {filterOptions.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedFilter === filter.id
                        ? 'bg-gradient-to-r from-linkedin to-linkedin-light text-white'
                        : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Saved Posts List */}
            <div className="space-y-6">
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <Bookmark className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">No saved posts found</h3>
                  <p className="text-gray-400">Try adjusting your search or filter criteria</p>
                </div>
              ) : (
                filteredPosts.map((post) => (
                  <div key={post.id} className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6 hover:border-linkedin/30 transition-all">
                    {/* Post Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-3">
                        <img 
                          src={post.user.profilePicture} 
                          alt={post.user.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-linkedin"
                        />
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="text-white font-semibold">{post.user.name}</h4>
                            <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs ${getRoleColor(post.user.role)}`}>
                              {getRoleIcon(post.user.role)}
                              <span className="capitalize">{post.user.role}</span>
                            </div>
                          </div>
                          <p className="text-gray-400 text-sm">{post.user.title}</p>
                          <div className="flex items-center space-x-3 text-xs text-gray-500 mt-1">
                            <span>{post.timestamp}</span>
                            <span>•</span>
                            <span className="text-yellow-400">{post.savedDate}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                          <Archive className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-400 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Post Content */}
                    <div className="mb-4">
                      <p className="text-gray-300 leading-relaxed whitespace-pre-line">{post.content}</p>
                      
                      {/* Post Image */}
                      {post.hasImage && post.imageUrl && (
                        <div className="mt-4 rounded-lg overflow-hidden">
                          <img 
                            src={post.imageUrl} 
                            alt="Post content"
                            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="flex items-center space-x-1 bg-white/10 text-gray-300 px-2 py-1 rounded text-xs">
                          <Tag className="w-3 h-3" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>

                    {/* Post Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4 pb-4 border-b border-linkedin-border">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.stats.views}</span>
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span>{post.stats.likes} likes</span>
                        <span>{post.stats.comments} comments</span>
                        <span>{post.stats.shares} shares</span>
                      </div>
                    </div>

                    {/* Post Actions */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <button className="flex items-center space-x-2 text-gray-400 hover:text-red-400 transition-colors">
                          <Heart className="w-5 h-5" />
                          <span className="text-sm">Like</span>
                        </button>
                        
                        <button className="flex items-center space-x-2 text-gray-400 hover:text-linkedin transition-colors">
                          <MessageCircle className="w-5 h-5" />
                          <span className="text-sm">Comment</span>
                        </button>
                        
                        <button className="flex items-center space-x-2 text-gray-400 hover:text-linkedin-light transition-colors">
                          <Share2 className="w-5 h-5" />
                          <span className="text-sm">Share</span>
                        </button>
                      </div>
                      
                      <button className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors">
                        <Bookmark className="w-5 h-5 fill-current" />
                        <span className="text-sm">Saved</span>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Saved Stats */}
            <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
              <h3 className="text-lg font-bold text-white mb-4">Your Saved Content</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Total Saved</span>
                  <span className="text-white font-semibold">{savedPosts.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Articles</span>
                  <span className="text-white font-semibold">{savedPosts.filter(p => p.category === 'articles').length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Insights</span>
                  <span className="text-white font-semibold">{savedPosts.filter(p => p.category === 'insights').length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Discussions</span>
                  <span className="text-white font-semibold">{savedPosts.filter(p => p.category === 'discussions').length}</span>
                </div>
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
              <h3 className="text-lg font-bold text-white mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['Fintech', 'Series A', 'E-commerce', 'Scaling', 'Leadership', 'Technical Debt', 'Market Analysis'].map((tag, index) => (
                  <button
                    key={index}
                    onClick={() => setSearchTerm(tag)}
                    className="bg-linkedin-card hover:bg-linkedin/20 text-gray-300 hover:text-linkedin-light px-3 py-1 rounded-full text-sm transition-colors"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
              <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-linkedin-card/70 transition-colors text-left">
                  <Archive className="w-5 h-5 text-linkedin-light" />
                  <span className="text-gray-300">Archive All Read</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-linkedin-card/70 transition-colors text-left">
                  <Tag className="w-5 h-5 text-linkedin" />
                  <span className="text-gray-300">Organize by Tags</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-linkedin-card/70 transition-colors text-left">
                  <Share2 className="w-5 h-5 text-linkedin-dark" />
                  <span className="text-gray-300">Export Collection</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedPosts;