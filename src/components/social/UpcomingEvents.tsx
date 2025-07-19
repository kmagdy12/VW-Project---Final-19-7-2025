import React from 'react';
import { Calendar, MapPin, Users, Clock, ExternalLink } from 'lucide-react';

const UpcomingEvents: React.FC = () => {
  const events = [
    {
      id: 1,
      title: 'MENA Startup Summit 2024',
      date: 'Dec 15, 2024',
      time: '9:00 AM',
      location: 'Dubai, UAE',
      attendees: 250,
      type: 'Conference',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 2,
      title: 'Fintech Innovation Workshop',
      date: 'Dec 18, 2024',
      time: '2:00 PM',
      location: 'Riyadh, Saudi Arabia',
      attendees: 85,
      type: 'Workshop',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 3,
      title: 'Investor Networking Mixer',
      date: 'Dec 20, 2024',
      time: '6:00 PM',
      location: 'Cairo, Egypt',
      attendees: 120,
      type: 'Networking',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Conference':
        return 'bg-purple-500/20 text-purple-300';
      case 'Workshop':
        return 'bg-blue-500/20 text-blue-300';
      case 'Networking':
        return 'bg-green-500/20 text-green-300';
      default:
        return 'bg-gray-500/20 text-gray-300';
    }
  };

  return (
    <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Calendar className="w-5 h-5 text-linkedin-light" />
        <h3 className="text-xl font-bold text-white">Upcoming Events</h3>
      </div>
      
      <div className="space-y-5">
        {events.map((event) => (
          <div key={event.id} className="bg-linkedin-card/50 rounded-lg p-5 hover:bg-linkedin-card transition-colors cursor-pointer group">
            <img 
              src={event.image} 
              alt={event.title}
              className="w-full h-32 rounded-lg object-cover mb-4"
            />
            
            <div className="flex items-start justify-between mb-3">
              <h4 className="text-white font-semibold text-sm group-hover:text-linkedin-light transition-colors truncate">
                {event.title}
              </h4>
              <span className="bg-linkedin-card text-gray-300 px-2 py-1 rounded-full text-xs font-semibold">
                {event.type}
              </span>
            </div>
            
            <div className="space-y-2 text-gray-400 text-xs">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{event.date}</span>
                <Clock className="w-4 h-4 ml-3" />
                <span>{event.time}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{event.location}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>{event.attendees} attending</span>
              </div>
            </div>
            
            <button className="w-full mt-4 flex items-center justify-center space-x-2 bg-linkedin hover:bg-linkedin-dark text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors">
              <span>View Details</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-6 text-linkedin-light hover:text-linkedin text-sm font-semibold transition-colors">
        View all events
      </button>
    </div>
  );
};

export default UpcomingEvents;