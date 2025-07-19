import React from 'react';
import TrendingTopics from './TrendingTopics';
import PeopleYouMayKnow from './PeopleYouMayKnow';
import UpcomingEvents from './UpcomingEvents';

const RightSidebar: React.FC = () => {
  return (
    <div className="space-y-6">
      <TrendingTopics />
      <PeopleYouMayKnow />
      <UpcomingEvents />
    </div>
  );
};

export default RightSidebar;