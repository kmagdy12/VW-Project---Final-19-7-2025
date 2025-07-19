import React, { useState } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import ExpertCard from './ExpertCard';

interface ExpertDiscoveryProps {
  onSectionChange: (section: string) => void;
}

const ExpertDiscovery: React.FC<ExpertDiscoveryProps> = ({ onSectionChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('recommended');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedExpertType, setSelectedExpertType] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [sortBy, setSortBy] = useState('relevance');

  const filterTabs = [
    { id: 'recommended', label: 'Recommended Experts' },
    { id: 'trending', label: 'Trending Experts' },
    { id: 'new', label: 'New Experts' }
  ];

  const experts = [
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
    },
    {
      id: 4,
      name: 'Omar Al-Zahra',
      title: 'Fintech Innovation Director',
      profilePicture: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.7,
      specialties: ['Fintech', 'Regulatory Compliance', 'Digital Banking'],
      bio: 'Led fintech initiatives at Emirates NBD. Deep expertise in financial services innovation and regulatory frameworks.',
      location: 'Abu Dhabi, UAE',
      experience: '8+ years',
      sessions: 98,
      responseTime: '4 hours'
    },
    {
      id: 5,
      name: 'Fatima Al-Rashid',
      title: 'Healthcare Innovation Expert',
      profilePicture: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.8,
      specialties: ['HealthTech', 'Medical Devices', 'Regulatory Affairs'],
      bio: 'Former head of innovation at Cleveland Clinic Abu Dhabi. Pioneer in healthcare technology adoption in MENA.',
      location: 'Doha, Qatar',
      experience: '11+ years',
      sessions: 134,
      responseTime: '2 hours'
    },
    {
      id: 6,
      name: 'Khalid Benali',
      title: 'E-commerce & Logistics Expert',
      profilePicture: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.6,
      specialties: ['E-commerce', 'Supply Chain', 'Operations'],
      bio: 'Built and scaled logistics operations for major e-commerce platforms. Expert in operational excellence.',
      location: 'Casablanca, Morocco',
      experience: '9+ years',
      sessions: 87,
      responseTime: '5 hours'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Experts Discovery</h1>
        <p className="text-gray-300">Explore the marketplace for top industry mentors</p>
      </div>

      {/* Search Bar */}
      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search Experts"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-linkedin-card border border-linkedin-border rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
        <div className="flex items-center space-x-2 mb-6">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeFilter === tab.id
                  ? 'bg-gradient-to-r from-linkedin to-linkedin-light text-white'
                  : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Advanced Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin"
          >
            <option value="all" className="bg-slate-800">All Industries</option>
            <option value="fintech" className="bg-slate-800">Fintech</option>
            <option value="healthtech" className="bg-slate-800">HealthTech</option>
            <option value="ecommerce" className="bg-slate-800">E-commerce</option>
            <option value="edtech" className="bg-slate-800">EdTech</option>
          </select>

          <select
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
            className="bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin"
          >
            <option value="all" className="bg-slate-800">All Specialties</option>
            <option value="strategy" className="bg-slate-800">Strategy</option>
            <option value="technology" className="bg-slate-800">Technology</option>
            <option value="marketing" className="bg-slate-800">Marketing</option>
            <option value="operations" className="bg-slate-800">Operations</option>
          </select>

          <select
            value={selectedExpertType}
            onChange={(e) => setSelectedExpertType(e.target.value)}
            className="bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin"
          >
            <option value="all" className="bg-slate-800">All Expert Types</option>
            <option value="service-provider" className="bg-slate-800">Service Provider</option>
            <option value="co-founder" className="bg-slate-800">Co-founder</option>
          </select>

          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin"
          >
            <option value="all" className="bg-slate-800">All Locations</option>
            <option value="uae" className="bg-slate-800">UAE</option>
            <option value="saudi" className="bg-slate-800">Saudi Arabia</option>
            <option value="egypt" className="bg-slate-800">Egypt</option>
            <option value="qatar" className="bg-slate-800">Qatar</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin"
          >
            <option value="relevance" className="bg-slate-800">Relevance</option>
            <option value="joining-date" className="bg-slate-800">Joining Date</option>
            <option value="rating" className="bg-slate-800">Rating</option>
            <option value="first-name" className="bg-slate-800">First Name</option>
          </select>
        </div>
      </div>

      {/* Experts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experts.map((expert) => (
          <ExpertCard 
            key={expert.id} 
            expert={expert} 
            onViewProfile={() => onSectionChange('expert-profile')}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpertDiscovery;