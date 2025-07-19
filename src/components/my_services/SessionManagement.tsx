import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Users, 
  Video, 
  FileText, 
  MessageSquare, 
  CheckCircle,
  Monitor,
  Share2,
  Edit2,
  Save,
  Plus,
  ArrowRight,
  Bell
} from 'lucide-react';

const SessionManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'calendar' | 'workspace' | 'client'>('calendar');

  // Mock data for sessions
  const upcomingSessions = [
    {
      id: 1,
      client: 'Ahmed Khan',
      service: 'Startup Strategy Session',
      date: 'Dec 15, 2024',
      time: '10:00 AM - 11:30 AM',
      status: 'Confirmed'
    },
    {
      id: 2,
      client: 'Sarah Lee',
      service: 'Digital Marketing Workshop',
      date: 'Dec 16, 2024',
      time: '2:00 PM - 6:00 PM',
      status: 'Confirmed'
    }
  ];

  const ongoingSessions = [
    {
      id: 3,
      client: 'Omar Farouk',
      service: 'Fundraising Consultation',
      progress: 45,
      timeElapsed: '25 min',
      timeRemaining: '35 min'
    }
  ];

  const completedSessions = [
    {
      id: 4,
      client: 'Nadia Ali',
      service: 'UX Design Review',
      date: 'Dec 10, 2024',
      rating: 4.8,
      feedback: 'Excellent session! Very insightful and practical advice.'
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white mb-2">Session Management</h1>
      <p className="text-gray-300 mb-6">Session coordination interface for scheduling, delivery tracking, and outcome measurement.</p>

      {/* Screen Tabs */}
      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-4">
        <div className="flex items-center space-x-2 overflow-x-auto">
          <button 
            onClick={() => setActiveTab('calendar')}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'calendar' 
                ? 'bg-linkedin text-white' 
                : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
            }`}
          >
            Calendar & Tracking
          </button>
          <button 
            onClick={() => setActiveTab('workspace')}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'workspace' 
                ? 'bg-linkedin text-white' 
                : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
            }`}
          >
            Workspace
          </button>
          <button 
            onClick={() => setActiveTab('client')}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'client' 
                ? 'bg-linkedin text-white' 
                : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
            }`}
          >
            Client Interaction
          </button>
        </div>
      </div>

      {/* Calendar & Tracking */}
      {activeTab === 'calendar' && (
        <div className="space-y-6">
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white flex items-center">
                <Calendar className="w-5 h-5 text-linkedin-light mr-2" />
                Session Calendar
              </h2>
              <div className="flex space-x-2">
                <button className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-3 py-1.5 rounded-lg text-sm transition-colors">
                  Day
                </button>
                <button className="bg-linkedin text-white px-3 py-1.5 rounded-lg text-sm transition-colors">
                  Week
                </button>
                <button className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-3 py-1.5 rounded-lg text-sm transition-colors">
                  Month
                </button>
              </div>
            </div>
            
            <div className="bg-linkedin-card/50 rounded-lg p-4 h-64 flex items-center justify-center">
              <p className="text-gray-400">Calendar view would be displayed here</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Upcoming Sessions */}
            <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <Clock className="w-5 h-5 text-linkedin-light mr-2" />
                Upcoming Sessions
              </h2>
              <div className="space-y-4">
                {upcomingSessions.map(session => (
                  <div key={session.id} className="bg-linkedin-card/50 rounded-lg p-4 hover:bg-linkedin-card/70 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-white font-medium">{session.service}</h3>
                      <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs">
                        {session.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">Client: {session.client}</p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{session.date}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{session.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
                <button className="w-full text-linkedin-light hover:text-linkedin text-sm font-medium transition-colors">
                  View All Upcoming Sessions
                </button>
              </div>
            </div>
            
            {/* Ongoing Sessions */}
            <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <Video className="w-5 h-5 text-linkedin-light mr-2" />
                Ongoing Sessions
              </h2>
              <div className="space-y-4">
                {ongoingSessions.length > 0 ? (
                  ongoingSessions.map(session => (
                    <div key={session.id} className="bg-linkedin-card/50 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-white font-medium">{session.service}</h3>
                        <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">
                          In Progress
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
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-gray-400">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{session.timeElapsed} elapsed</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{session.timeRemaining} remaining</span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2 mt-3">
                        <button className="flex-1 bg-linkedin hover:bg-linkedin-dark text-white px-3 py-1.5 rounded-lg text-sm transition-colors">
                          Join Session
                        </button>
                        <button className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-3 py-1.5 rounded-lg text-sm transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <Video className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                    <p className="text-gray-400">No ongoing sessions at the moment.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Session Status Tracking */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-linkedin-light mr-2" />
              Session Status Tracking
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-linkedin-card/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">5</div>
                <p className="text-gray-400 text-sm">Scheduled</p>
              </div>
              <div className="bg-linkedin-card/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">1</div>
                <p className="text-gray-400 text-sm">In Progress</p>
              </div>
              <div className="bg-linkedin-card/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">24</div>
                <p className="text-gray-400 text-sm">Completed</p>
              </div>
              <div className="bg-linkedin-card/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">2</div>
                <p className="text-gray-400 text-sm">Cancelled</p>
              </div>
            </div>
          </div>
          
          {/* Availability Settings */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white flex items-center">
                <Clock className="w-5 h-5 text-linkedin-light mr-2" />
                Availability Settings
              </h2>
              <button className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-3 py-1.5 rounded-lg text-sm transition-colors">
                <Edit2 className="w-4 h-4 inline mr-1" />
                Edit
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-linkedin-card/50 rounded-lg p-4">
                <h3 className="text-white font-medium mb-3">Available Days</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-linkedin/20 text-linkedin-light px-3 py-1 rounded-full text-sm">Monday</span>
                  <span className="bg-linkedin/20 text-linkedin-light px-3 py-1 rounded-full text-sm">Tuesday</span>
                  <span className="bg-linkedin/20 text-linkedin-light px-3 py-1 rounded-full text-sm">Wednesday</span>
                  <span className="bg-linkedin/20 text-linkedin-light px-3 py-1 rounded-full text-sm">Thursday</span>
                </div>
              </div>
              <div className="bg-linkedin-card/50 rounded-lg p-4">
                <h3 className="text-white font-medium mb-3">Available Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Monday - Thursday:</span>
                    <span className="text-white">9:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Workspace */}
      {activeTab === 'workspace' && (
        <div className="space-y-6">
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white flex items-center">
                <Video className="w-5 h-5 text-linkedin-light mr-2" />
                Session Workspace
              </h2>
            </div>
            
            <div className="bg-linkedin-card/50 rounded-lg p-6 text-center mb-6">
              <Video className="w-16 h-16 text-gray-500 mx-auto mb-3" />
              <h3 className="text-white font-medium mb-2">No Active Session</h3>
              <p className="text-gray-400 text-sm mb-4">Join an active session to access the workspace</p>
              <button className="bg-linkedin hover:bg-linkedin-dark text-white px-4 py-2 rounded-lg transition-colors">
                Join Active Session
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-linkedin-card/50 rounded-lg p-4">
                <h3 className="text-white font-medium mb-3 flex items-center">
                  <Video className="w-4 h-4 text-linkedin-light mr-2" />
                  Video Conferencing
                </h3>
                <p className="text-gray-400 text-sm">High-quality video calls with screen sharing capabilities</p>
              </div>
              <div className="bg-linkedin-card/50 rounded-lg p-4">
                <h3 className="text-white font-medium mb-3 flex items-center">
                  <Monitor className="w-4 h-4 text-linkedin-light mr-2" />
                  Screen Sharing
                </h3>
                <p className="text-gray-400 text-sm">Share your screen or specific applications with clients</p>
              </div>
              <div className="bg-linkedin-card/50 rounded-lg p-4">
                <h3 className="text-white font-medium mb-3 flex items-center">
                  <Edit2 className="w-4 h-4 text-linkedin-light mr-2" />
                  Digital Whiteboard
                </h3>
                <p className="text-gray-400 text-sm">Collaborative whiteboard for brainstorming and visualization</p>
              </div>
              <div className="bg-linkedin-card/50 rounded-lg p-4">
                <h3 className="text-white font-medium mb-3 flex items-center">
                  <Share2 className="w-4 h-4 text-linkedin-light mr-2" />
                  File Sharing
                </h3>
                <p className="text-gray-400 text-sm">Securely share documents and files during sessions</p>
              </div>
            </div>
          </div>
          
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white flex items-center">
                <FileText className="w-5 h-5 text-linkedin-light mr-2" />
                Session Templates
              </h2>
              <button className="bg-linkedin hover:bg-linkedin-dark text-white px-3 py-1.5 rounded-lg text-sm transition-colors">
                <Plus className="w-4 h-4 inline mr-1" />
                Create Template
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="bg-linkedin-card/50 rounded-lg p-4 hover:bg-linkedin-card/70 transition-colors">
                <h3 className="text-white font-medium mb-2">Initial Consultation Template</h3>
                <p className="text-gray-400 text-sm mb-3">Standard template for first-time client consultations</p>
                <div className="flex space-x-2">
                  <button className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-3 py-1.5 rounded-lg text-xs transition-colors">
                    Use Template
                  </button>
                  <button className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-3 py-1.5 rounded-lg text-xs transition-colors">
                    Edit
                  </button>
                </div>
              </div>
              <div className="bg-linkedin-card/50 rounded-lg p-4 hover:bg-linkedin-card/70 transition-colors">
                <h3 className="text-white font-medium mb-2">Strategy Workshop Template</h3>
                <p className="text-gray-400 text-sm mb-3">Comprehensive template for strategic planning sessions</p>
                <div className="flex space-x-2">
                  <button className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-3 py-1.5 rounded-lg text-xs transition-colors">
                    Use Template
                  </button>
                  <button className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-3 py-1.5 rounded-lg text-xs transition-colors">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Client Interaction */}
      {activeTab === 'client' && (
        <div className="space-y-6">
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white flex items-center">
                <Users className="w-5 h-5 text-linkedin-light mr-2" />
                Client Interaction
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-linkedin-card/50 rounded-lg p-4">
                <h3 className="text-white font-medium mb-3 flex items-center">
                  <FileText className="w-4 h-4 text-linkedin-light mr-2" />
                  Client Notes
                </h3>
                <textarea 
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin" 
                  rows={4} 
                  placeholder="Add notes about your client..."
                ></textarea>
                <button className="mt-2 bg-linkedin hover:bg-linkedin-dark text-white px-3 py-1.5 rounded-lg text-sm transition-colors">
                  <Save className="w-4 h-4 inline mr-1" />
                  Save Notes
                </button>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-4">
                <h3 className="text-white font-medium mb-3 flex items-center">
                  <CheckCircle className="w-4 h-4 text-linkedin-light mr-2" />
                  Progress Tracking
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-300">Overall Progress</span>
                      <span className="text-white">75%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-linkedin h-2 rounded-full" 
                        style={{ width: '75%' }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-300">Milestone 1: Initial Assessment</span>
                      <span className="text-green-400">Completed</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-300">Milestone 2: Strategy Development</span>
                      <span className="text-linkedin-light">In Progress</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-linkedin h-2 rounded-full" 
                        style={{ width: '50%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-4">
                <h3 className="text-white font-medium mb-3 flex items-center">
                  <CheckCircle className="w-4 h-4 text-linkedin-light mr-2" />
                  Action Items
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="action1" className="mr-2" />
                    <label htmlFor="action1" className="text-gray-300 text-sm">Send follow-up resources</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="action2" className="mr-2" />
                    <label htmlFor="action2" className="text-gray-300 text-sm">Review business model canvas</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="action3" className="mr-2" />
                    <label htmlFor="action3" className="text-gray-300 text-sm">Schedule next session</label>
                  </div>
                  <div className="mt-3">
                    <input 
                      type="text" 
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-sm" 
                      placeholder="Add new action item..." 
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-4">
                <h3 className="text-white font-medium mb-3 flex items-center">
                  <Calendar className="w-4 h-4 text-linkedin-light mr-2" />
                  Follow-up Scheduling
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-gray-300 text-sm mb-1">Next Session Date</label>
                    <input 
                      type="date" 
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin" 
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm mb-1">Time</label>
                    <input 
                      type="time" 
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin" 
                    />
                  </div>
                  <button className="w-full bg-linkedin hover:bg-linkedin-dark text-white px-3 py-2 rounded-lg text-sm transition-colors">
                    Schedule Follow-up
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white flex items-center">
                <MessageSquare className="w-5 h-5 text-linkedin-light mr-2" />
                Feedback Collection
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-linkedin-card/50 rounded-lg p-4">
                <h3 className="text-white font-medium mb-3">Request Feedback</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-gray-300 text-sm mb-1">Select Client</label>
                    <select className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin">
                      <option className="bg-slate-800">Ahmed Khan</option>
                      <option className="bg-slate-800">Sarah Lee</option>
                      <option className="bg-slate-800">Omar Farouk</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm mb-1">Select Session</label>
                    <select className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin">
                      <option className="bg-slate-800">Startup Strategy Session (Dec 10, 2024)</option>
                      <option className="bg-slate-800">Follow-up Consultation (Dec 12, 2024)</option>
                    </select>
                  </div>
                  <button className="w-full bg-linkedin hover:bg-linkedin-dark text-white px-3 py-2 rounded-lg text-sm transition-colors">
                    Send Feedback Request
                  </button>
                </div>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-4">
                <h3 className="text-white font-medium mb-3">Recent Feedback</h3>
                <div className="space-y-3">
                  <div className="bg-linkedin-card/30 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white text-sm">Nadia Ali</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} filled={i < 4} />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 text-xs">"Excellent session! Very insightful and practical advice."</p>
                    <p className="text-gray-500 text-xs mt-1">Dec 10, 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Star component for ratings
const Star = ({ filled }: { filled: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={filled ? "text-yellow-400" : "text-gray-500"}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default SessionManagement;