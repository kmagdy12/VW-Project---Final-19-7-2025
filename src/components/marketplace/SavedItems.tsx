import React, { useState } from 'react';
import { Search, Filter, Trash2, Eye } from 'lucide-react';
import ExpertCard from './ExpertCard';
import ServiceCard from './ServiceCard';
import WorkshopCard from './WorkshopCard';

interface SavedItemsProps {
  onSectionChange: (section: string) => void;
}

const SavedItems: React.FC<SavedItemsProps> = ({ onSectionChange }) => {
  const [activeTab, setActiveTab] = useState('experts');
  const [searchTerm, setSearchTerm] = useState('');

  const tabs = [
    { id: 'experts', label: 'Experts' },
    { id: 'services', label: 'Services' },
    { id: 'workshops', label: 'Workshops' }
  ];

  const savedExperts = [
    {
      id: 1,
      name: 'Dr. Sarah Al-Mansouri',
      title: 'Former VP of Engineering at Careem',
      profilePicture: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.9,
      specialties: ['Technology Leadership', 'Scaling Teams', 'Product Strategy'],
      bio: 'Led engineering teams of 200+ at Careem. Expert in scaling technology organizations and building world-class products.',
      location: 'Dubai, UAE',
      experience: '15+ years',
      sessions: 247,
      responseTime: '2 hours'
    },
    {
      id: 2,
      name: 'Ahmed Hassan',
      title: 'Serial Entrepreneur & Angel Investor',
      profilePicture: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.8,
      specialties: ['Fundraising', 'Business Strategy', 'Market Entry'],
      bio: '3 successful exits including acquisition by Amazon. Active angel investor with 50+ investments in MENA startups.',
      location: 'Riyadh, Saudi Arabia',
      experience: '12+ years',
      sessions: 189,
      responseTime: '1 hour'
    },
    {
      id: 3,
      name: 'Layla Khoury',
      title: 'Former CMO at Souq.com',
      profilePicture: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.9,
      specialties: ['Digital Marketing', 'Brand Building', 'Growth Strategy'],
      bio: 'Built Souq.com\'s marketing from startup to $580M acquisition. Expert in e-commerce and digital marketing.',
      location: 'Cairo, Egypt',
      experience: '10+ years',
      sessions: 156,
      responseTime: '3 hours'
    }
  ];

  const savedServices = [
    {
      id: 1,
      name: 'Startup Strategy & Business Model Design',
      description: 'Comprehensive business strategy development and business model validation for early-stage startups.',
      expertName: 'Dr. Sarah Al-Mansouri',
      expertProfilePicture: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100',
      serviceCoverPhoto: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      tags: ['Strategy', 'Business Model', 'Validation'],
      location: 'Dubai, UAE',
      price: '$500/session',
      duration: '2 hours',
      sessions: 47
    },
    {
      id: 2,
      name: 'Fundraising & Investor Relations',
      description: 'End-to-end fundraising support including pitch deck creation, investor outreach, and negotiation.',
      expertName: 'Ahmed Hassan',
      expertProfilePicture: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100',
      serviceCoverPhoto: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      tags: ['Fundraising', 'Pitch Deck', 'Investor Relations'],
      location: 'Riyadh, Saudi Arabia',
      price: '$750/session',
      duration: '3 hours',
      sessions: 32
    }
  ];

  const savedWorkshops = [
    {
      id: 1,
      name: 'Fundraising Masterclass: From Seed to Series A',
      description: 'Comprehensive workshop covering fundraising strategies, pitch deck creation, and investor relations.',
      date: 'Dec 15, 2024',
      time: '2:00 PM - 6:00 PM',
      expertName: 'Ahmed Hassan',
      expertProfilePicture: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100',
      workshopCoverPhoto: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Fundraising', 'Pitch Deck', 'Series A'],
      location: 'Dubai, UAE',
      price: '$299',
      capacity: 25,
      enrolled: 18,
      format: 'In-person'
    },
    {
      id: 2,
      name: 'Digital Marketing for Startups',
      description: 'Learn proven digital marketing strategies and growth hacking techniques for early-stage startups.',
      date: 'Dec 18, 2024',
      time: '10:00 AM - 4:00 PM',
      expertName: 'Layla Khoury',
      expertProfilePicture: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100',
      workshopCoverPhoto: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Digital Marketing', 'Growth Hacking', 'Social Media'],
      location: 'Online',
      price: '$199',
      capacity: 50,
      enrolled: 32,
      format: 'Virtual'
    }
  ];

  const filteredExperts = savedExperts.filter(expert =>
    expert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expert.specialties.some(specialty => specialty.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredServices = savedServices.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredWorkshops = savedWorkshops.filter(workshop =>
    workshop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    workshop.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Saved Items</h1>
        <p className="text-gray-300">Your personal collection of bookmarked experts, services, and workshops</p>
      </div>

      {/* Search Bar */}
      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search saved items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-linkedin-card border border-linkedin-border rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
        <div className="flex items-center space-x-2 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
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

      {/* Tab Content */}
      {activeTab === 'experts' && (
        <div>
          {filteredExperts.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No saved experts found</h3>
              <p className="text-gray-400">Start exploring experts and save the ones you're interested in</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredExperts.map((expert) => (
                <div key={expert.id} className="relative">
                  <ExpertCard 
                    expert={expert} 
                    onViewProfile={() => onSectionChange('expert-profile')}
                  />
                  <button className="absolute top-4 right-4 p-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === 'services' && (
        <div>
          {filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No saved services found</h3>
              <p className="text-gray-400">Start exploring services and save the ones you're interested in</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <div key={service.id} className="relative">
                  <ServiceCard 
                    service={service} 
                    onViewService={() => onSectionChange('service-details')}
                  />
                  <button className="absolute top-4 right-4 p-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === 'workshops' && (
        <div>
          {filteredWorkshops.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No saved workshops found</h3>
              <p className="text-gray-400">Start exploring workshops and save the ones you're interested in</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWorkshops.map((workshop) => (
                <div key={workshop.id} className="relative">
                  <WorkshopCard 
                    workshop={workshop} 
                    onViewWorkshop={() => onSectionChange('workshop-details')}
                  />
                  <button className="absolute top-4 right-4 p-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6 text-center">
          <div className="text-2xl font-bold text-white mb-2">{savedExperts.length}</div>
          <div className="text-gray-400">Saved Experts</div>
        </div>
        <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6 text-center">
          <div className="text-2xl font-bold text-white mb-2">{savedServices.length}</div>
          <div className="text-gray-400">Saved Services</div>
        </div>
        <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6 text-center">
          <div className="text-2xl font-bold text-white mb-2">{savedWorkshops.length}</div>
          <div className="text-gray-400">Saved Workshops</div>
        </div>
      </div>
    </div>
  );
};

export default SavedItems;