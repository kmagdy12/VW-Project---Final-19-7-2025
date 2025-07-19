import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import ServiceCard from './ServiceCard';

interface ServiceDiscoveryProps {
  onSectionChange: (section: string) => void;
}

const ServiceDiscovery: React.FC<ServiceDiscoveryProps> = ({ onSectionChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('recommended');

  const filterTabs = [
    { id: 'recommended', label: 'Recommended Services' },
    { id: 'trending', label: 'Trending Services' },
    { id: 'new', label: 'New Services' },
    { id: 'co-founders', label: 'Co-founder Services' },
    { id: 'all', label: 'All Services' }
  ];

  const services = [
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
    },
    {
      id: 3,
      name: 'Digital Marketing & Growth Strategy',
      description: 'Comprehensive digital marketing strategy and growth hacking techniques for rapid user acquisition.',
      expertName: 'Layla Khoury',
      expertProfilePicture: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100',
      serviceCoverPhoto: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      tags: ['Digital Marketing', 'Growth', 'User Acquisition'],
      location: 'Cairo, Egypt',
      price: '$400/session',
      duration: '90 minutes',
      sessions: 28
    },
    {
      id: 4,
      name: 'Fintech Product Development',
      description: 'Specialized guidance for fintech product development, regulatory compliance, and market entry.',
      expertName: 'Omar Al-Zahra',
      expertProfilePicture: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100',
      serviceCoverPhoto: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      tags: ['Fintech', 'Product Development', 'Compliance'],
      location: 'Abu Dhabi, UAE',
      price: '$600/session',
      duration: '2.5 hours',
      sessions: 19
    },
    {
      id: 5,
      name: 'Healthcare Innovation Consulting',
      description: 'Expert guidance on healthcare technology innovation, regulatory pathways, and market validation.',
      expertName: 'Fatima Al-Rashid',
      expertProfilePicture: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100',
      serviceCoverPhoto: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      tags: ['HealthTech', 'Innovation', 'Regulatory'],
      location: 'Doha, Qatar',
      price: '$550/session',
      duration: '2 hours',
      sessions: 24
    },
    {
      id: 6,
      name: 'E-commerce Operations & Scaling',
      description: 'Operational excellence and scaling strategies for e-commerce and marketplace businesses.',
      expertName: 'Khalid Benali',
      expertProfilePicture: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100',
      serviceCoverPhoto: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.6,
      tags: ['E-commerce', 'Operations', 'Scaling'],
      location: 'Casablanca, Morocco',
      price: '$450/session',
      duration: '2 hours',
      sessions: 16
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Services Discovery</h1>
        <p className="text-gray-300">Find the perfect service to accelerate your business growth</p>
      </div>

      {/* Search Bar */}
      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search Services"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-linkedin-card border border-linkedin-border rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
        <div className="flex items-center space-x-2 overflow-x-auto">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                activeFilter === tab.id
                  ? 'bg-gradient-to-r from-linkedin to-linkedin-light text-white'
                  : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            onViewService={() => onSectionChange('service-details')}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceDiscovery;