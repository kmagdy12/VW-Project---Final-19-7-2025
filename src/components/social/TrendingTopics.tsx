import React from 'react';
import { TrendingUp, Hash } from 'lucide-react';

const TrendingTopics: React.FC = () => {
  const trendingTopics = [
    { hashtag: '#Fintech', views: '12.5K' },
    { hashtag: '#SeriesA', views: '8.2K' },
    { hashtag: '#MENA', views: '15.7K' },
    { hashtag: '#Ecommerce', views: '9.8K' },
    { hashtag: '#AI', views: '18.3K' },
    { hashtag: '#Startup', views: '22.1K' },
    { hashtag: '#Investment', views: '11.4K' },
    { hashtag: '#SaudiArabia', views: '7.9K' }
  ];

  return (
    <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
      <div className="flex items-center space-x-3 mb-6">
        <TrendingUp className="w-5 h-5 text-linkedin-light" />
        <h3 className="text-xl font-bold text-white">Trending Topics</h3>
      </div>
      
      <div className="space-y-4">
        {trendingTopics.map((topic, index) => (
          <div 
            key={index}
            className="p-4 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group"
          >
            <div className="flex items-center space-x-3 mb-1">
              <Hash className="w-4 h-4 text-gray-400" />
              <span className="text-gray-300 font-medium text-sm">
                {topic.hashtag.slice(1)}
              </span>
            </div>
            <p className="text-gray-500 text-xs ml-7">
              {topic.views} views
            </p>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-6 text-linkedin-light hover:text-linkedin text-sm font-semibold transition-colors">
        Show more trends
      </button>
    </div>
  );
};

export default TrendingTopics;