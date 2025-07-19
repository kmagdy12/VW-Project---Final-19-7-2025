import React, { useState } from 'react';
import { TrendingUp, Users, Star, DollarSign } from 'lucide-react';

const FeedFilters: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('recommended');

  const filters = [
    { id: 'recommended', label: 'Recommended', icon: Star },
    { id: 'following', label: 'Following', icon: Users },
    { id: 'trending', label: 'Trending', icon: TrendingUp },
    { id: 'deals', label: 'Deals', icon: DollarSign }
  ];

  return (
    <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-4">
      <div className="flex items-center space-x-2 overflow-x-auto">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeFilter === filter.id
                ? 'bg-gradient-to-r from-linkedin to-linkedin-light text-white'
                : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
            }`}
          >
            <filter.icon className="w-4 h-4" />
            <span>{filter.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeedFilters;