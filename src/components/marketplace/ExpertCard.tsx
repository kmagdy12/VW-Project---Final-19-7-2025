import React, { useState } from 'react';
import { 
  Star, 
  MapPin, 
  Clock, 
  Users, 
  Bookmark, 
  MessageSquare,
  Eye
} from 'lucide-react';

interface Expert {
  id: number;
  name: string;
  title: string;
  profilePicture: string;
  rating: number;
  specialties: string[];
  bio: string;
  location: string;
  experience: string;
  sessions: number;
  responseTime: string;
}

interface ExpertCardProps {
  expert: Expert;
  onViewProfile: () => void;
}

const ExpertCard: React.FC<ExpertCardProps> = ({ expert, onViewProfile }) => {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6 hover:border-linkedin/50 transition-all group">
      {/* Header */}
      <div className="flex items-start space-x-4 mb-4">
        <img 
          src={expert.profilePicture} 
          alt={expert.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-linkedin"
        />
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">{expert.name}</h3>
              <p className="text-gray-400 text-sm mb-2">{expert.title}</p>
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
          
          {/* Rating */}
          <div className="flex items-center space-x-2 mb-3">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-white font-semibold">{expert.rating}</span>
            </div>
            <span className="text-gray-400 text-sm">({expert.sessions} sessions)</span>
          </div>
        </div>
      </div>

      {/* Location and Response Time */}
      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
        <div className="flex items-center space-x-1">
          <MapPin className="w-4 h-4" />
          <span>{expert.location}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Clock className="w-4 h-4" />
          <span>Responds in {expert.responseTime}</span>
        </div>
      </div>

      {/* Specialties */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {expert.specialties.map((specialty, index) => (
            <span 
              key={index} 
              className="bg-linkedin/20 text-linkedin-light px-2 py-1 rounded-full text-xs"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>

      {/* Bio */}
      <p className="text-gray-300 text-sm mb-4 line-clamp-3">{expert.bio}</p>

      {/* Experience */}
      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-6">
        <div className="flex items-center space-x-1">
          <Users className="w-4 h-4" />
          <span>{expert.experience} experience</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-3">
        <button
          onClick={onViewProfile}
          className="flex-1 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-4 py-2 rounded-lg font-medium transition-all"
        >
          View Profile
        </button>
        <button className="p-2 bg-linkedin-card hover:bg-linkedin-card/70 text-gray-400 hover:text-white rounded-lg transition-colors">
          <MessageSquare className="w-4 h-4" />
        </button>
        <button className="p-2 bg-linkedin-card hover:bg-linkedin-card/70 text-gray-400 hover:text-white rounded-lg transition-colors">
          <Eye className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ExpertCard;