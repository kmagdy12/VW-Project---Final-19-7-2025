import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import WorkshopCard from './WorkshopCard';

interface WorkshopDiscoveryProps {
  onSectionChange: (section: string) => void;
}

const WorkshopDiscovery: React.FC<WorkshopDiscoveryProps> = ({ onSectionChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('recommended');

  const filterTabs = [
    { id: 'recommended', label: 'Recommended Workshops' },
    { id: 'trending', label: 'Trending Workshops' },
    { id: 'new', label: 'New Workshops' },
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'all', label: 'All Workshops' }
  ];

  const workshops = [
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
    },
    {
      id: 3,
      name: 'Building Scalable Tech Teams',
      description: 'Workshop on hiring, managing, and scaling engineering teams in high-growth environments.',
      date: 'Dec 22, 2024',
      time: '1:00 PM - 5:00 PM',
      expertName: 'Dr. Sarah Al-Mansouri',
      expertProfilePicture: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100',
      workshopCoverPhoto: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Team Building', 'Engineering', 'Leadership'],
      location: 'Riyadh, Saudi Arabia',
      price: '$349',
      capacity: 20,
      enrolled: 14,
      format: 'In-person'
    },
    {
      id: 4,
      name: 'Fintech Regulatory Compliance Workshop',
      description: 'Navigate the complex regulatory landscape of fintech in the MENA region.',
      date: 'Jan 5, 2025',
      time: '9:00 AM - 1:00 PM',
      expertName: 'Omar Al-Zahra',
      expertProfilePicture: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100',
      workshopCoverPhoto: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Fintech', 'Compliance', 'Regulatory'],
      location: 'Abu Dhabi, UAE',
      price: '$399',
      capacity: 15,
      enrolled: 8,
      format: 'In-person'
    },
    {
      id: 5,
      name: 'Healthcare Innovation & Product Development',
      description: 'Learn how to develop and validate healthcare technology products in regulated environments.',
      date: 'Jan 10, 2025',
      time: '11:00 AM - 5:00 PM',
      expertName: 'Fatima Al-Rashid',
      expertProfilePicture: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100',
      workshopCoverPhoto: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['HealthTech', 'Product Development', 'Innovation'],
      location: 'Doha, Qatar',
      price: '$279',
      capacity: 30,
      enrolled: 22,
      format: 'Hybrid'
    },
    {
      id: 6,
      name: 'E-commerce Operations Optimization',
      description: 'Master the operational aspects of running a successful e-commerce business.',
      date: 'Jan 15, 2025',
      time: '2:00 PM - 6:00 PM',
      expertName: 'Khalid Benali',
      expertProfilePicture: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100',
      workshopCoverPhoto: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['E-commerce', 'Operations', 'Logistics'],
      location: 'Online',
      price: '$229',
      capacity: 40,
      enrolled: 28,
      format: 'Virtual'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Workshops Discovery</h1>
        <p className="text-gray-300">Join hands-on workshops to accelerate your learning</p>
      </div>

      {/* Search Bar */}
      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search Workshops"
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

      {/* Workshops Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workshops.map((workshop) => (
          <WorkshopCard 
            key={workshop.id} 
            workshop={workshop} 
            onViewWorkshop={() => onSectionChange('workshop-details')}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkshopDiscovery;