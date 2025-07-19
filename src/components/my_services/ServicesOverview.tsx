import React from 'react';
import {
  DollarSign,
  BarChart3,
  Clock,
  Users,
  AlertTriangle,
  Star,
  Newspaper,
  Plus,
  MessageSquare,
  Eye,
  Calendar,
  TrendingUp,
  ArrowUpRight,
  ExternalLink,
  Bell,
  CheckCircle,
  XCircle
} from 'lucide-react';

const ServicesOverview: React.FC = () => {
  // Performance Overview data
  const performanceMetrics = [
    { label: 'Total Revenue', value: '$15,000', icon: DollarSign, trend: 'up' },
    { label: 'Total Bookings', value: '120', icon: Calendar, trend: 'up' },
    { label: 'Avg. Rating', value: '4.8', icon: Star, trend: 'up' },
    { label: 'Client Satisfaction', value: '92%', icon: Users, trend: 'up' },
    { label: 'Conversion Rate', value: '15%', icon: BarChart3, trend: 'up' }
  ];

  // Active Sessions data
  const activeSessions = [
    { 
      id: 1, 
      client: 'Ahmed Khan', 
      service: 'Startup Strategy Session', 
      status: 'In Progress', 
      progress: 75, 
      timeRemaining: '30 min',
      nextMilestone: 'Business Model Canvas Review'
    },
    { 
      id: 2, 
      client: 'Sarah Lee', 
      service: 'Digital Marketing Workshop', 
      status: 'Starting Soon', 
      progress: 0, 
      timeRemaining: '10 min',
      nextMilestone: 'Workshop Introduction'
    }
  ];

  // Pending Requests data
  const pendingRequests = [
    { 
      id: 1, 
      client: 'Omar Farouk', 
      service: 'Fundraising Consultation', 
      date: 'Dec 15, 2024', 
      time: '10:00 AM',
      deadline: '24 hours'
    },
    { 
      id: 2, 
      client: 'Nadia Ali', 
      service: 'UX Design Review', 
      date: 'Dec 16, 2024', 
      time: '02:00 PM',
      deadline: '48 hours'
    }
  ];

  // Top Performing Services data
  const topPerformingServices = [
    { id: 1, name: 'Startup Strategy & Business Model Design', clients: 30, revenue: '$5,000', rating: 4.9 },
    { id: 2, name: 'Fundraising & Investor Relations', clients: 20, revenue: '$4,000', rating: 4.8 },
    { id: 3, name: 'Digital Marketing & Growth Strategy', clients: 25, revenue: '$3,000', rating: 4.7 },
    { id: 4, name: 'Product Development Workshop', clients: 15, revenue: '$2,000', rating: 4.6 },
    { id: 5, name: 'Financial Modeling & Valuation', clients: 10, revenue: '$1,000', rating: 4.5 }
  ];

  // Market News data
  const marketNews = [
    { 
      id: 1, 
      title: 'Demand for AI Consulting Surges in MENA', 
      intro: 'New report shows 40% increase in demand for AI-related expert services in the region.', 
      date: '2 hours ago' 
    },
    { 
      id: 2, 
      title: 'Top 5 Skills for Freelance Experts in 2025', 
      intro: 'Industry analysis reveals key competencies driving success for independent consultants.', 
      date: '1 day ago' 
    },
    { 
      id: 3, 
      title: 'New Tax Regulations for Digital Service Providers', 
      intro: 'Important changes to tax laws affecting online service providers in the MENA region.', 
      date: '2 days ago' 
    },
    { 
      id: 4, 
      title: 'Remote Consulting Trends Post-Pandemic', 
      intro: 'Study shows 70% of consulting services will remain virtual even after pandemic restrictions end.', 
      date: '3 days ago' 
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white mb-2">Services Overview</h1>
      <p className="text-gray-300 mb-6">Your service portfolio dashboard with key performance metrics and client insights.</p>

      {/* Performance Overview */}
      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center">
          <BarChart3 className="w-5 h-5 text-linkedin-light mr-2" />
          Performance Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {performanceMetrics.map((metric) => (
            <div key={metric.label} className="bg-linkedin-card/50 rounded-lg p-4 text-center">
              <metric.icon className="w-6 h-6 text-linkedin-light mx-auto mb-2" />
              <p className="text-gray-400 text-sm mb-1">{metric.label}</p>
              <div className="flex items-center justify-center">
                <p className="text-white font-bold text-xl">{metric.value}</p>
                {metric.trend === 'up' && <ArrowUpRight className="w-4 h-4 text-green-400 ml-1" />}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Sessions */}
        <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <Clock className="w-5 h-5 text-linkedin-light mr-2" />
            Active Sessions
          </h2>
          {activeSessions.length > 0 ? (
            <div className="space-y-4">
              {activeSessions.map((session) => (
                <div key={session.id} className="bg-linkedin-card/50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-white font-medium">{session.service}</p>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      session.status === 'In Progress' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {session.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">Client: {session.client}</p>
                  
                  {/* Progress bar */}
                  <div className="mb-2">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-gray-400">{session.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-linkedin h-2 rounded-full" 
                        style={{ width: `${session.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center text-gray-400 text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{session.timeRemaining} remaining</span>
                    </div>
                    <div className="flex items-center text-linkedin-light text-xs">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      <span>Next: {session.nextMilestone}</span>
                    </div>
                  </div>
                </div>
              ))}
              <button className="w-full text-linkedin-light hover:text-linkedin text-sm font-medium transition-colors">
                View All Sessions
              </button>
            </div>
          ) : (
            <div className="text-center py-8">
              <Clock className="w-12 h-12 text-gray-500 mx-auto mb-3" />
              <p className="text-gray-400">No active sessions at the moment.</p>
              <button className="mt-3 text-linkedin hover:text-linkedin-light transition-colors">
                Schedule a Session
              </button>
            </div>
          )}
        </div>

        {/* Pending Requests */}
        <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <Bell className="w-5 h-5 text-linkedin-light mr-2" />
            Pending Requests
          </h2>
          {pendingRequests.length > 0 ? (
            <div className="space-y-4">
              {pendingRequests.map((request) => (
                <div key={request.id} className="bg-linkedin-card/50 rounded-lg p-4">
                  <p className="text-white font-medium mb-1">{request.service}</p>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-gray-400 text-sm">Client: {request.client}</p>
                    <p className="text-yellow-400 text-xs">Response due in {request.deadline}</p>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{request.date} at {request.time}</p>
                  <div className="flex space-x-2 mt-2">
                    <button className="flex-1 bg-green-500/20 text-green-400 px-3 py-1.5 rounded-lg text-sm hover:bg-green-500/30 transition-colors">
                      <CheckCircle className="w-4 h-4 inline mr-1" />
                      Approve
                    </button>
                    <button className="flex-1 bg-red-500/20 text-red-400 px-3 py-1.5 rounded-lg text-sm hover:bg-red-500/30 transition-colors">
                      <XCircle className="w-4 h-4 inline mr-1" />
                      Decline
                    </button>
                  </div>
                </div>
              ))}
              <button className="w-full text-linkedin-light hover:text-linkedin text-sm font-medium transition-colors">
                View All Requests
              </button>
            </div>
          ) : (
            <div className="text-center py-8">
              <Bell className="w-12 h-12 text-gray-500 mx-auto mb-3" />
              <p className="text-gray-400">No pending requests at the moment.</p>
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center">
          <Newspaper className="w-5 h-5 text-linkedin-light mr-2" />
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <button className="bg-linkedin hover:bg-linkedin-dark text-white px-4 py-3 rounded-lg flex flex-col items-center justify-center text-center transition-colors">
            <Plus className="w-6 h-6 mb-2" />
            <span className="text-sm">Create New Service</span>
          </button>
          <button className="bg-linkedin hover:bg-linkedin-dark text-white px-4 py-3 rounded-lg flex flex-col items-center justify-center text-center transition-colors">
            <Calendar className="w-6 h-6 mb-2" />
            <span className="text-sm">Create New Workshop</span>
          </button>
          <button className="bg-linkedin hover:bg-linkedin-dark text-white px-4 py-3 rounded-lg flex flex-col items-center justify-center text-center transition-colors">
            <Clock className="w-6 h-6 mb-2" />
            <span className="text-sm">Schedule Session</span>
          </button>
          <button className="bg-linkedin hover:bg-linkedin-dark text-white px-4 py-3 rounded-lg flex flex-col items-center justify-center text-center transition-colors">
            <MessageSquare className="w-6 h-6 mb-2" />
            <span className="text-sm">Message Clients</span>
          </button>
          <button className="bg-linkedin hover:bg-linkedin-dark text-white px-4 py-3 rounded-lg flex flex-col items-center justify-center text-center transition-colors">
            <BarChart3 className="w-6 h-6 mb-2" />
            <span className="text-sm">View Analytics</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performing Services */}
        <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <Star className="w-5 h-5 text-linkedin-light mr-2" />
            Top Performing Services
          </h2>
          <div className="space-y-3">
            {topPerformingServices.map((service) => (
              <div key={service.id} className="bg-linkedin-card/50 rounded-lg p-4 hover:bg-linkedin-card/70 transition-colors">
                <p className="text-white font-medium mb-2">{service.name}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-400">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{service.clients} clients</span>
                  </div>
                  <div className="text-linkedin-light font-medium">
                    {service.revenue}
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-gray-300">{service.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market News & Updates */}
        <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <Newspaper className="w-5 h-5 text-linkedin-light mr-2" />
            Market News & Updates
          </h2>
          <div className="space-y-3">
            {marketNews.map((news) => (
              <div key={news.id} className="bg-linkedin-card/50 rounded-lg p-4 hover:bg-linkedin-card/70 transition-colors cursor-pointer group">
                <div className="flex justify-between items-start">
                  <h3 className="text-white font-medium text-sm mb-2 group-hover:text-linkedin-light transition-colors">{news.title}</h3>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-linkedin-light transition-colors" />
                </div>
                <p className="text-gray-400 text-xs line-clamp-2 mb-2">{news.intro}</p>
                <p className="text-gray-500 text-xs">{news.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;