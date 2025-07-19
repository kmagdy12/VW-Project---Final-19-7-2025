import React, { useState } from 'react';
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Bookmark, 
  Eye, 
  MoreHorizontal,
  Building2,
  TrendingUp,
  Award
} from 'lucide-react';

interface User {
  name: string;
  title: string;
  profilePicture: string;
  role: 'founder' | 'investor' | 'expert';
}

interface PostStats {
  likes: number;
  comments: number;
  shares: number;
  views: number;
}

interface Post {
  id: number;
  user: User;
  content: string;
  timestamp: string;
  stats: PostStats;
  hasImage?: boolean;
  imageUrl?: string;
}

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

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

  return (
    <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6 hover:border-linkedin/30 transition-all">
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
            <p className="text-gray-500 text-xs mt-1">{post.timestamp}</p>
          </div>
        </div>
        
        <button className="text-gray-400 hover:text-white transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Post Content */}
      <div className="mb-4">
        <p className="text-gray-300 leading-relaxed">{post.content}</p>
        
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
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`flex items-center space-x-2 transition-colors ${
              isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-400'
            }`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
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
        
        <button
          onClick={() => setIsSaved(!isSaved)}
          className={`transition-colors ${
            isSaved ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-400'
          }`}
        >
          <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
        </button>
      </div>
    </div>
  );
};

export default PostCard;