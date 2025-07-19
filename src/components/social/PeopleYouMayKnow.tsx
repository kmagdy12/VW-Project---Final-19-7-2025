import React from 'react';
import { Users, UserPlus, Building2, TrendingUp, Award } from 'lucide-react';

const PeopleYouMayKnow: React.FC = () => {
  const suggestions = [
    {
      id: 1,
      name: 'Fatima Al-Zahra',
      title: 'Co-founder at GreenTech MENA',
      profilePicture: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100',
      mutualFriends: 12,
      role: 'founder'
    },
    {
      id: 2,
      name: 'Omar Benali',
      title: 'Investment Director at Gulf Capital',
      profilePicture: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100',
      mutualFriends: 8,
      role: 'investor'
    },
    {
      id: 3,
      name: 'Nadia Khoury',
      title: 'Former CTO at Careem | Tech Advisor',
      profilePicture: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100',
      mutualFriends: 15,
      role: 'expert'
    },
    {
      id: 4,
      name: 'Khalid Al-Rashid',
      title: 'Founder at EdTech Solutions',
      profilePicture: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100',
      mutualFriends: 6,
      role: 'founder'
    }
  ];


  return (
    <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Users className="w-5 h-5 text-linkedin-light" />
        <h3 className="text-xl font-bold text-white">People You May Know</h3>
      </div>
      
      <div className="space-y-5">
        {suggestions.map((person) => (
          <div key={person.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-linkedin-card/70 transition-colors">
            <img 
              src={person.profilePicture} 
              alt={person.name}
              className="w-10 h-10 rounded-full object-cover border-2 border-linkedin"
            />
            
            <div className="flex-1 min-w-0 flex flex-col">
              <div className="mb-2">
                <h4 className="text-white font-semibold text-sm truncate">{person.name}</h4>
                <p className="text-gray-400 text-xs truncate">{person.title}</p>
                <p className="text-gray-500 text-xs mt-1">
                  {person.mutualFriends} mutual connections
                </p>
              </div>
              
              <button className="w-full flex items-center justify-center space-x-1 bg-linkedin hover:bg-linkedin-dark text-white px-3 py-1 rounded-full text-xs font-medium transition-colors border border-linkedin">
                <UserPlus className="w-4 h-4" />
                <span>Connect</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-6 text-linkedin-light hover:text-linkedin text-sm font-semibold transition-colors">
        See all suggestions
      </button>
    </div>
  );
};

export default PeopleYouMayKnow;