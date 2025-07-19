import React from 'react';
import LeftSidebar from './LeftSidebar';
import CreatePost from './CreatePost';
import FeedFilters from './FeedFilters';
import PostCard from './PostCard';
import RightSidebar from './RightSidebar';

const ActivityFeed: React.FC = () => {
  // Mock data for posts
  const posts = [
    {
      id: 1,
      user: {
        name: 'Ahmed Hassan',
        title: 'CEO at TechStart Dubai',
        profilePicture: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100',
        role: 'founder'
      },
      content: 'Just closed our Series A round! 🚀 Excited to share that we\'ve raised $2.5M to revolutionize fintech in the MENA region. Looking forward to scaling our AI-powered payment platform. #Fintech #SeriesA #MENA',
      timestamp: '2 hours ago',
      stats: {
        likes: 47,
        comments: 12,
        shares: 8,
        views: 234
      },
      hasImage: true,
      imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      user: {
        name: 'Sarah Khalil',
        title: 'Partner at MENA Ventures',
        profilePicture: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100',
        role: 'investor'
      },
      content: 'The e-commerce landscape in Saudi Arabia is experiencing unprecedented growth. We\'re seeing 40% YoY growth in online retail. What trends are you observing in your markets? #Ecommerce #SaudiArabia #Growth',
      timestamp: '4 hours ago',
      stats: {
        likes: 32,
        comments: 18,
        shares: 5,
        views: 189
      },
      hasImage: false
    },
    {
      id: 3,
      user: {
        name: 'Mohamed Rashid',
        title: 'Founder at HealthTech Solutions',
        profilePicture: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100',
        role: 'founder'
      },
      content: 'Seeking advice from fellow founders: How do you balance rapid scaling with maintaining company culture? Our team has grown from 5 to 50 in 8 months. Any frameworks or strategies you\'d recommend?',
      timestamp: '6 hours ago',
      stats: {
        likes: 28,
        comments: 24,
        shares: 3,
        views: 156
      },
      hasImage: false
    },
    {
      id: 4,
      user: {
        name: 'Layla Al-Mansouri',
        title: 'Former VP at Souq.com | E-commerce Expert',
        profilePicture: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100',
        role: 'expert'
      },
      content: 'Just published my thoughts on the future of retail in the Middle East. Key takeaway: Mobile-first strategies are no longer optional - they\'re essential for survival. Link in comments 👇',
      timestamp: '8 hours ago',
      stats: {
        likes: 56,
        comments: 15,
        shares: 12,
        views: 298
      },
      hasImage: true,
      imageUrl: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {/* Main Content */}
      <div className="lg:col-span-2 xl:col-span-3 space-y-6">
        <CreatePost />
        <FeedFilters />
        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="lg:col-span-1">
        <RightSidebar />
      </div>
    </div>
  );
};

export default ActivityFeed;