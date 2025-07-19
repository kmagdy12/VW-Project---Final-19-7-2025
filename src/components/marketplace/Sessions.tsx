import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  FileText, 
  MessageSquare, 
  Video,
  Star,
  CheckCircle,
  AlertCircle,
  Play,
  Download,
  Send
} from 'lucide-react';

interface SessionsProps {
  onSectionChange: (section: string) => void;
}

const Sessions: React.FC<SessionsProps> = ({ onSectionChange }) => {
  const [activeTab, setActiveTab] = useState('active');
  const [selectedSession, setSelectedSession] = useState<number | null>(null);
  const [feedbackText, setFeedbackText] = useState('');
  const [rating, setRating] = useState(0);

  const tabs = [
    { id: 'active', label: 'Active Sessions' },
    { id: 'history', label: 'Session History' },
    { id: 'upcoming', label: 'Upcoming Appointments' }
  ];

  const activeSessions = [
    {
      id: 1,
      serviceName: 'Startup Strategy & Business Model Design',
      expertName: 'Dr. Sarah Al-Mansouri',
      expertProfilePicture: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100',
      startDate: '2024-12-10',
      status: 'In Progress',
      progress: 65,
      nextMilestone: 'Business Model Canvas Review',
      totalSessions: 3,
      completedSessions: 2,
      price: '$500'
    },
    {
      id: 2,
      serviceName: 'Digital Marketing Strategy',
      expertName: 'Layla Khoury',
      expertProfilePicture: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100',
      startDate: '2024-12-05',
      status: 'Awaiting Deliverables',
      progress: 80,
      nextMilestone: 'Marketing Plan Delivery',
      totalSessions: 2,
      completedSessions: 2,
      price: '$400'
    }
  ];

  const sessionHistory = [
    {
      id: 3,
      serviceName: 'Fundraising Consultation',
      expertName: 'Ahmed Hassan',
      expertProfilePicture: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100',
      completedDate: '2024-11-28',
      status: 'Completed',
      rating: 5,
      duration: '2 hours',
      price: '$750'
    },
    {
      id: 4,
      serviceName: 'Product Development Workshop',
      expertName: 'Omar Al-Zahra',
      expertProfilePicture: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100',
      completedDate: '2024-11-15',
      status: 'Completed',
      rating: 4,
      duration: '3 hours',
      price: '$600'
    }
  ];

  const upcomingAppointments = [
    {
      id: 5,
      serviceName: 'Follow-up Strategy Session',
      expertName: 'Dr. Sarah Al-Mansouri',
      expertProfilePicture: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100',
      scheduledDate: '2024-12-20',
      scheduledTime: '2:00 PM',
      duration: '1 hour',
      meetingLink: 'https://zoom.us/j/123456789',
      price: 'Included'
    },
    {
      id: 6,
      serviceName: 'Marketing Campaign Review',
      expertName: 'Layla Khoury',
      expertProfilePicture: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100',
      scheduledDate: '2024-12-22',
      scheduledTime: '10:00 AM',
      duration: '90 minutes',
      meetingLink: 'https://meet.google.com/abc-defg-hij',
      price: 'Included'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress':
        return 'text-blue-400 bg-blue-500/20';
      case 'Awaiting Deliverables':
        return 'text-yellow-400 bg-yellow-500/20';
      case 'Completed':
        return 'text-green-400 bg-green-500/20';
      default:
        return 'text-gray-400 bg-gray-500/20';
    }
  };

  const renderSessionDetails = (sessionId: number) => {
    return (
      <div className="mt-6 space-y-6">
        {/* Materials & Notes */}
        <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
          <h4 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
            <FileText className="w-5 h-5" />
            <span>Materials & Notes</span>
          </h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-linkedin-card/50 rounded-lg">
              <div className="flex items-center space-x-3">
                <FileText className="w-4 h-4 text-linkedin-light" />
                <span className="text-gray-300">Business Model Canvas Template</span>
              </div>
              <button className="text-linkedin-light hover:text-linkedin">
                <Download className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center justify-between p-3 bg-linkedin-card/50 rounded-lg">
              <div className="flex items-center space-x-3">
                <FileText className="w-4 h-4 text-linkedin-light" />
                <span className="text-gray-300">Session Notes - Week 1</span>
              </div>
              <button className="text-linkedin-light hover:text-linkedin">
                <Download className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center justify-between p-3 bg-linkedin-card/50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Video className="w-4 h-4 text-linkedin-light" />
                <span className="text-gray-300">Session Recording - Week 2</span>
              </div>
              <button className="text-linkedin-light hover:text-linkedin">
                <Play className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Communication Center */}
        <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
          <h4 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
            <MessageSquare className="w-5 h-5" />
            <span>Communication Center</span>
          </h4>
          <div className="space-y-4">
            <div className="bg-linkedin-card/50 rounded-lg p-4">
              <div className="flex items-start space-x-3 mb-3">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=40" 
                  alt="Expert"
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex-1">
                  <p className="text-white text-sm">Dr. Sarah Al-Mansouri</p>
                  <p className="text-gray-300 text-sm">I've reviewed your business model canvas. Great progress! Let's schedule a follow-up to discuss the revenue streams section.</p>
                  <p className="text-gray-500 text-xs mt-1">2 hours ago</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin"
              />
              <button className="bg-linkedin hover:bg-linkedin-dark text-white p-2 rounded-lg transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Feedback */}
        <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
          <h4 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
            <Star className="w-5 h-5" />
            <span>Session Feedback</span>
          </h4>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm mb-2">Rate this session</label>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className={`w-6 h-6 ${
                      star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
                    }`}
                  >
                    <Star className="w-full h-full" />
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm mb-2">Your feedback</label>
              <textarea
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                placeholder="Share your experience with this session..."
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none"
                rows={4}
              />
            </div>
            
            <button className="bg-linkedin hover:bg-linkedin-dark text-white px-6 py-2 rounded-lg transition-colors">
              Submit Feedback
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">My Sessions</h1>
        <p className="text-gray-300">Manage your ongoing and completed mentoring sessions</p>
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
      {activeTab === 'active' && (
        <div className="space-y-6">
          {activeSessions.map((session) => (
            <div key={session.id} className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <img 
                    src={session.expertProfilePicture} 
                    alt={session.expertName}
                    className="w-12 h-12 rounded-full object-cover border-2 border-linkedin"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{session.serviceName}</h3>
                    <p className="text-gray-400 text-sm mb-2">with {session.expertName}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>Started: {new Date(session.startDate).toLocaleDateString()}</span>
                      <span>Sessions: {session.completedSessions}/{session.totalSessions}</span>
                      <span>{session.price}</span>
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(session.status)}`}>
                  {session.status}
                </span>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-300">Progress</span>
                  <span className="text-white">{session.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-linkedin to-linkedin-light h-2 rounded-full transition-all"
                    style={{ width: `${session.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 text-linkedin-light" />
                  <span className="text-gray-300 text-sm">Next: {session.nextMilestone}</span>
                </div>
                <button
                  onClick={() => setSelectedSession(selectedSession === session.id ? null : session.id)}
                  className="bg-linkedin hover:bg-linkedin-dark text-white px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  {selectedSession === session.id ? 'Hide Details' : 'View Details'}
                </button>
              </div>

              {selectedSession === session.id && renderSessionDetails(session.id)}
            </div>
          ))}
        </div>
      )}

      {activeTab === 'history' && (
        <div className="space-y-6">
          {sessionHistory.map((session) => (
            <div key={session.id} className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <img 
                    src={session.expertProfilePicture} 
                    alt={session.expertName}
                    className="w-12 h-12 rounded-full object-cover border-2 border-linkedin"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{session.serviceName}</h3>
                    <p className="text-gray-400 text-sm mb-2">with {session.expertName}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>Completed: {new Date(session.completedDate).toLocaleDateString()}</span>
                      <span>Duration: {session.duration}</span>
                      <span>{session.price}</span>
                    </div>
                    <div className="flex items-center space-x-1 mt-2">
                      {[...Array(session.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-gray-400 text-sm ml-2">Your rating</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(session.status)}`}>
                    {session.status}
                  </span>
                  <button className="bg-linkedin-card hover:bg-linkedin-card/70 text-linkedin-light px-4 py-2 rounded-lg text-sm transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'upcoming' && (
        <div className="space-y-6">
          {upcomingAppointments.map((appointment) => (
            <div key={appointment.id} className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <img 
                    src={appointment.expertProfilePicture} 
                    alt={appointment.expertName}
                    className="w-12 h-12 rounded-full object-cover border-2 border-linkedin"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{appointment.serviceName}</h3>
                    <p className="text-gray-400 text-sm mb-2">with {appointment.expertName}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(appointment.scheduledDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{appointment.scheduledTime}</span>
                      </div>
                      <span>Duration: {appointment.duration}</span>
                    </div>
                    <div className="bg-linkedin/20 text-linkedin-light px-3 py-1 rounded-lg text-sm inline-block">
                      Meeting Link: {appointment.meetingLink}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="bg-linkedin hover:bg-linkedin-dark text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    Join Meeting
                  </button>
                  <button className="bg-linkedin-card hover:bg-linkedin-card/70 text-gray-300 px-4 py-2 rounded-lg text-sm transition-colors">
                    Reschedule
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sessions;