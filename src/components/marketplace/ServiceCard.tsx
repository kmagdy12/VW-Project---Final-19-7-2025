import React, { useState } from 'react';
import { 
  Star, 
  MapPin, 
  Clock, 
  DollarSign, 
  Bookmark, 
  Eye,
  Users
} from 'lucide-react';

interface Service {
  id: number;
  name: string;
  description: string;
  expertName: string;
  expertProfilePicture: string;
  serviceCoverPhoto: string;
  rating: number;
  tags: string[];
  location: string;
  price: string;
  duration: string;
  sessions: number;
}

interface ServiceCardProps {
  service: Service;
  onViewService: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onViewService }) => {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border overflow-hidden hover:border-linkedin/50 transition-all group">
      {/* Service Cover Photo */}
      <div className="relative">
        <img 
          src={service.serviceCoverPhoto} 
          alt={service.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setIsSaved(!isSaved)}
            className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
              isSaved 
                ? 'bg-yellow-500/20 text-yellow-400' 
                : 'bg-black/20 text-white hover:bg-yellow-500/20 hover:text-yellow-400'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
          </button>
        </div>
        <div className="absolute bottom-4 left-4">
          <div className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
            {service.price}
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Service Header */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">{service.name}</h3>
          <p className="text-gray-300 text-sm line-clamp-3">{service.description}</p>
        </div>

        {/* Expert Info */}
        <div className="flex items-center space-x-3 mb-4">
          <img 
            src={service.expertProfilePicture} 
            alt={service.expertName}
            className="w-10 h-10 rounded-full object-cover border-2 border-linkedin"
          />
          <div>
            <p className="text-white font-medium text-sm">{service.expertName}</p>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                <span className="text-yellow-400 text-xs font-semibold">{service.rating}</span>
              </div>
              <span className="text-gray-400 text-xs">({service.sessions} sessions)</span>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {service.tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-linkedin/20 text-linkedin-light px-2 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Service Details */}
        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span>{service.location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{service.duration}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onViewService}
            className="flex-1 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-4 py-2 rounded-lg font-medium transition-all"
          >
            View Service
          </button>
          <button className="p-2 bg-linkedin-card hover:bg-linkedin-card/70 text-gray-400 hover:text-white rounded-lg transition-colors">
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;