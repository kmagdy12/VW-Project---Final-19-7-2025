import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Bookmark, 
  Eye,
  DollarSign,
  Monitor,
  Building
} from 'lucide-react';

interface Workshop {
  id: number;
  name: string;
  description: string;
  date: string;
  time: string;
  expertName: string;
  expertProfilePicture: string;
  workshopCoverPhoto: string;
  tags: string[];
  location: string;
  price: string;
  capacity: number;
  enrolled: number;
  format: string;
}

interface WorkshopCardProps {
  workshop: Workshop;
  onViewWorkshop: () => void;
}

const WorkshopCard: React.FC<WorkshopCardProps> = ({ workshop, onViewWorkshop }) => {
  const [isSaved, setIsSaved] = useState(false);

  const getFormatIcon = (format: string) => {
    switch (format) {
      case 'Virtual':
        return <Monitor className="w-4 h-4" />;
      case 'In-person':
        return <Building className="w-4 h-4" />;
      case 'Hybrid':
        return <Users className="w-4 h-4" />;
      default:
        return <Calendar className="w-4 h-4" />;
    }
  };

  const getFormatColor = (format: string) => {
    switch (format) {
      case 'Virtual':
        return 'bg-blue-500/20 text-blue-300';
      case 'In-person':
        return 'bg-green-500/20 text-green-300';
      case 'Hybrid':
        return 'bg-purple-500/20 text-purple-300';
      default:
        return 'bg-gray-500/20 text-gray-300';
    }
  };

  const enrollmentPercentage = (workshop.enrolled / workshop.capacity) * 100;

  return (
    <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border overflow-hidden hover:border-linkedin/50 transition-all group">
      {/* Workshop Cover Photo */}
      <div className="relative">
        <img 
          src={workshop.workshopCoverPhoto} 
          alt={workshop.name}
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
        <div className="absolute top-4 left-4">
          <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-semibold ${getFormatColor(workshop.format)}`}>
            {getFormatIcon(workshop.format)}
            <span>{workshop.format}</span>
          </div>
        </div>
        <div className="absolute bottom-4 left-4">
          <div className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
            {workshop.price}
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Workshop Header */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">{workshop.name}</h3>
          <p className="text-gray-300 text-sm line-clamp-3">{workshop.description}</p>
        </div>

        {/* Date and Time */}
        <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{workshop.date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{workshop.time}</span>
          </div>
        </div>

        {/* Expert Info */}
        <div className="flex items-center space-x-3 mb-4">
          <img 
            src={workshop.expertProfilePicture} 
            alt={workshop.expertName}
            className="w-10 h-10 rounded-full object-cover border-2 border-linkedin"
          />
          <div>
            <p className="text-white font-medium text-sm">{workshop.expertName}</p>
            <p className="text-gray-400 text-xs">Workshop Instructor</p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {workshop.tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-linkedin/20 text-linkedin-light px-2 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Enrollment Progress */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-gray-400">Enrollment</span>
            <span className="text-white">{workshop.enrolled}/{workshop.capacity}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-linkedin to-linkedin-light h-2 rounded-full transition-all"
              style={{ width: `${enrollmentPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-1 text-sm text-gray-400 mb-4">
          <MapPin className="w-4 h-4" />
          <span>{workshop.location}</span>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onViewWorkshop}
            className="flex-1 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-4 py-2 rounded-lg font-medium transition-all"
          >
            View Workshop
          </button>
          <button className="p-2 bg-linkedin-card hover:bg-linkedin-card/70 text-gray-400 hover:text-white rounded-lg transition-colors">
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;