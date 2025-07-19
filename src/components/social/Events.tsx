import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  Plus, 
  Search,
  Filter,
  Share2,
  Eye,
  Star,
  TrendingUp,
  ExternalLink,
  Bookmark,
  Bell
} from 'lucide-react';

const Events: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('recommended');

  const filterOptions = [
    { id: 'recommended', label: 'Recommended' },
    { id: 'trending', label: 'Trending' },
    { id: 'all', label: 'All Events' }
  ];

  const yourEvents = [
    {
      id: 1,
      title: 'MENA Startup Summit 2024',
      date: 'Dec 15, 2024',
      time: '9:00 AM',
      status: 'registered',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Fintech Innovation Workshop',
      date: 'Dec 18, 2024',
      time: '2:00 PM',
      status: 'created',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Investor Networking Mixer',
      date: 'Dec 20, 2024',
      time: '6:00 PM',
      status: 'attended',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const allEvents = [
    {
      id: 4,
      title: 'AI in Healthcare Summit',
      date: 'Jan 10, 2025',
      time: '10:00 AM',
      location: 'Dubai, UAE',
      attendees: 450,
      networkAttendees: 12,
      organizer: 'HealthTech MENA',
      type: 'Conference',
      price: 'Free',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['AI', 'Healthcare', 'Innovation']
    },
    {
      id: 5,
      title: 'E-commerce Growth Masterclass',
      date: 'Jan 15, 2025',
      time: '3:00 PM',
      location: 'Online',
      attendees: 280,
      networkAttendees: 8,
      organizer: 'Growth Academy',
      type: 'Workshop',
      price: '$49',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['E-commerce', 'Growth', 'Marketing']
    },
    {
      id: 6,
      title: 'Venture Capital Pitch Night',
      date: 'Jan 22, 2025',
      time: '7:00 PM',
      location: 'Riyadh, Saudi Arabia',
      attendees: 120,
      networkAttendees: 15,
      organizer: 'MENA Ventures',
      type: 'Networking',
      price: 'Invite Only',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['VC', 'Pitch', 'Funding']
    },
    {
      id: 7,
      title: 'Women in Tech Leadership Forum',
      date: 'Jan 28, 2025',
      time: '1:00 PM',
      location: 'Cairo, Egypt',
      attendees: 200,
      networkAttendees: 6,
      organizer: 'WomenTech MENA',
      type: 'Panel',
      price: 'Free',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Women', 'Leadership', 'Tech']
    },
    {
      id: 8,
      title: 'Blockchain & Crypto Regulations',
      date: 'Feb 5, 2025',
      time: '11:00 AM',
      location: 'Abu Dhabi, UAE',
      attendees: 350,
      networkAttendees: 9,
      organizer: 'Crypto Legal',
      type: 'Seminar',
      price: '$75',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Blockchain', 'Crypto', 'Legal']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'registered':
        return 'bg-blue-500/20 text-blue-300';
      case 'created':
        return 'bg-green-500/20 text-green-300';
      case 'attended':
        return 'bg-purple-500/20 text-purple-300';
      default:
        return 'bg-gray-500/20 text-gray-300';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Conference':
        return 'bg-purple-500/20 text-purple-300';
      case 'Workshop':
        return 'bg-blue-500/20 text-blue-300';
      case 'Networking':
        return 'bg-green-500/20 text-green-300';
      case 'Panel':
        return 'bg-orange-500/20 text-orange-300';
      case 'Seminar':
        return 'bg-pink-500/20 text-pink-300';
      default:
        return 'bg-gray-500/20 text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-linkedin-background via-linkedin-dark to-linkedin-background">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Events</h1>
            <p className="text-gray-300">Discover networking opportunities and industry events</p>
          </div>
          <button className="flex items-center space-x-2 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-6 py-3 rounded-lg font-medium transition-all">
            <Plus className="w-4 h-4" />
            <span>Create Event</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Your Events */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Your Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {yourEvents.map((event) => (
                  <div key={event.id} className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border overflow-hidden hover:border-linkedin/50 transition-all group">
                    <div className="relative">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute top-3 right-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold capitalize ${getStatusColor(event.status)}`}>
                          {event.status}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                        <Clock className="w-4 h-4 ml-2" />
                        <span>{event.time}</span>
                      </div>
                      <h3 className="text-white font-semibold text-sm mb-3 line-clamp-2">{event.title}</h3>
                      <button className="w-full bg-linkedin hover:bg-linkedin-dark text-white py-2 rounded-lg text-sm font-medium transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Search and Filters */}
            <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search events..."
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin"
                  />
                </div>
                <button className="flex items-center space-x-2 bg-linkedin hover:bg-linkedin-dark text-white px-6 py-3 rounded-lg transition-colors">
                  <Filter className="w-4 h-4" />
                  <span>Filters</span>
                </button>
              </div>

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
            </div>

            {/* Events List */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                {activeFilter === 'recommended' ? 'Recommended Events' : 
                 activeFilter === 'trending' ? 'Trending Events' : 'All Events'}
              </h2>
              <div className="space-y-6">
                {allEvents.map((event) => (
                  <div key={event.id} className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6 hover:border-linkedin/50 transition-all">
                    <div className="flex items-start space-x-6">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-24 h-24 rounded-lg object-cover"
                      />
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor(event.type)}`}>
                                {event.type}
                              </span>
                            </div>
                            <p className="text-gray-400 text-sm mb-2">Organized by {event.organizer}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-green-400">{event.price}</div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400 mb-4">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
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

                        {event.networkAttendees > 0 && (
                          <div className="bg-linkedin/20 text-linkedin-light px-3 py-2 rounded-lg text-sm mb-4">
                            <Users className="w-4 h-4 inline mr-2" />
                            {event.networkAttendees} people from your network are attending
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {event.tags.map((tag, index) => (
                              <span key={index} className="bg-linkedin-card text-gray-300 px-2 py-1 rounded text-xs">
                                #{tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <button className="p-2 text-gray-400 hover:text-white transition-colors">
                              <Bookmark className="w-5 h-5" />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-white transition-colors">
                              <Share2 className="w-5 h-5" />
                            </button>
                            <button className="flex items-center space-x-2 bg-linkedin hover:bg-linkedin-dark text-white px-4 py-2 rounded-lg font-medium transition-all">
                              <span>View Event</span>
                              <ExternalLink className="w-4 h-4" />
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
            {/* Event Stats */}
            <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
              <h3 className="text-lg font-bold text-white mb-4">Your Event Activity</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Events Attended</span>
                  <span className="text-white font-semibold">24</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Events Created</span>
                  <span className="text-white font-semibold">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Upcoming Events</span>
                  <span className="text-white font-semibold">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Network Connections</span>
                  <span className="text-linkedin-light font-semibold">47</span>
                </div>
              </div>
            </div>

            {/* Trending Events */}
            <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
              <h3 className="text-lg font-bold text-white mb-4">Trending This Week</h3>
              <div className="space-y-4">
                {allEvents.slice(0, 3).map((event) => (
                  <div key={event.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium text-sm truncate">{event.title}</h4>
                      <p className="text-gray-400 text-xs">{event.date} • {event.attendees} attending</p>
                    </div>
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* Event Categories */}
            <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
              <h3 className="text-lg font-bold text-white mb-4">Popular Categories</h3>
              <div className="space-y-3">
                {[
                  { name: 'Networking', count: 45 },
                  { name: 'Workshops', count: 32 },
                  { name: 'Conferences', count: 28 },
                  { name: 'Pitch Events', count: 19 },
                  { name: 'Webinars', count: 67 }
                ].map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                    <span className="text-gray-300">{category.name}</span>
                    <span className="text-gray-400 text-sm">{category.count}</span>
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

export default Events;