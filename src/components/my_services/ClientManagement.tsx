import React, { useState } from 'react';
import { 
  Users, 
  MessageSquare, 
  Search, 
  Filter, 
  Phone, 
  Mail, 
  Calendar, 
  Clock, 
  Star, 
  Plus,
  Edit2,
  ChevronDown,
  ChevronUp,
  FileText,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Send
} from 'lucide-react';

const ClientManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'crm' | 'communication'>('crm');
  const [expandedClientId, setExpandedClientId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for clients
  const clients = [
    {
      id: 1,
      name: 'Ahmed Khan',
      company: 'TechStart Dubai',
      email: 'ahmed@techstart.ae',
      phone: '+971 50 123 4567',
      status: 'Active',
      lastInteraction: '2 days ago',
      totalSessions: 5,
      totalRevenue: '$1,250',
      rating: 4.8,
      notes: 'Working on Series A funding. Interested in strategic guidance for expansion to Saudi market.',
      projects: [
        { id: 1, name: 'Business Model Refinement', status: 'Completed', date: 'Nov 15, 2024' },
        { id: 2, name: 'Pitch Deck Development', status: 'In Progress', date: 'Dec 10, 2024' }
      ]
    },
    {
      id: 2,
      name: 'Sarah Lee',
      company: 'HealthTech Solutions',
      email: 'sarah@healthtech.sa',
      phone: '+966 55 987 6543',
      status: 'Active',
      lastInteraction: '1 week ago',
      totalSessions: 3,
      totalRevenue: '$750',
      rating: 4.5,
      notes: 'Launching new health monitoring app. Needs marketing strategy and investor connections.',
      projects: [
        { id: 3, name: 'Go-to-Market Strategy', status: 'Completed', date: 'Oct 20, 2024' },
        { id: 4, name: 'Investor Pitch Preparation', status: 'Scheduled', date: 'Dec 18, 2024' }
      ]
    },
    {
      id: 3,
      name: 'Omar Farouk',
      company: 'EduSpark',
      email: 'omar@eduspark.eg',
      phone: '+20 10 234 5678',
      status: 'Inactive',
      lastInteraction: '1 month ago',
      totalSessions: 2,
      totalRevenue: '$500',
      rating: 4.2,
      notes: 'EdTech startup focused on K-12 education. Looking to raise seed funding.',
      projects: [
        { id: 5, name: 'Financial Modeling', status: 'Completed', date: 'Sep 5, 2024' }
      ]
    }
  ];

  // Mock data for recent communications
  const recentCommunications = [
    {
      id: 1,
      client: 'Ahmed Khan',
      type: 'Email',
      subject: 'Follow-up on our strategy session',
      date: 'Dec 12, 2024',
      content: 'Hi Ahmed, I wanted to follow up on our strategy session from yesterday...'
    },
    {
      id: 2,
      client: 'Sarah Lee',
      type: 'Call',
      subject: 'Discussed marketing strategy',
      date: 'Dec 10, 2024',
      content: 'Call notes: Discussed social media strategy and content calendar...'
    },
    {
      id: 3,
      client: 'Omar Farouk',
      type: 'Message',
      subject: 'Quick question about financial model',
      date: 'Nov 15, 2024',
      content: 'Hi, I had a question about the financial projections we discussed...'
    }
  ];

  const toggleClientExpansion = (clientId: number) => {
    if (expandedClientId === clientId) {
      setExpandedClientId(null);
    } else {
      setExpandedClientId(clientId);
    }
  };

  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white mb-2">Client Management</h1>
      <p className="text-gray-300 mb-6">Client relationship management interface for tracking engagement history and satisfaction monitoring.</p>

      {/* Screen Tabs */}
      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-4">
        <div className="flex items-center space-x-2 overflow-x-auto">
          <button 
            onClick={() => setActiveTab('crm')}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'crm' 
                ? 'bg-linkedin text-white' 
                : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
            }`}
          >
            CRM
          </button>
          <button 
            onClick={() => setActiveTab('communication')}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'communication' 
                ? 'bg-linkedin text-white' 
                : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
            }`}
          >
            Communication
          </button>
        </div>
      </div>

      {/* CRM Tab */}
      {activeTab === 'crm' && (
        <div className="space-y-6">
          {/* Search and Filter */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search clients..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin"
                />
              </div>
              <button className="flex items-center space-x-2 bg-linkedin hover:bg-linkedin-dark text-white px-6 py-3 rounded-lg transition-colors">
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>
              <button className="flex items-center space-x-2 bg-linkedin hover:bg-linkedin-dark text-white px-6 py-3 rounded-lg transition-colors">
                <Plus className="w-4 h-4" />
                <span>Add Client</span>
              </button>
            </div>
          </div>

          {/* Client Directory */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 text-linkedin-light mr-2" />
              Client Directory
            </h2>
            <div className="space-y-4">
              {filteredClients.length > 0 ? (
                filteredClients.map(client => (
                  <div key={client.id} className="bg-linkedin-card/50 rounded-lg overflow-hidden">
                    <div 
                      className="p-4 cursor-pointer hover:bg-linkedin-card/70 transition-colors"
                      onClick={() => toggleClientExpansion(client.id)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-1">
                            <h3 className="text-white font-medium mr-2">{client.name}</h3>
                            <span className={`px-2 py-0.5 rounded-full text-xs ${
                              client.status === 'Active' 
                                ? 'bg-green-500/20 text-green-400' 
                                : 'bg-gray-500/20 text-gray-400'
                            }`}>
                              {client.status}
                            </span>
                          </div>
                          <p className="text-gray-400 text-sm">{client.company}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <div className="text-linkedin-light font-medium">{client.totalRevenue}</div>
                            <div className="text-gray-400 text-xs">{client.totalSessions} sessions</div>
                          </div>
                          {expandedClientId === client.id ? (
                            <ChevronUp className="w-5 h-5 text-gray-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400" />
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {expandedClientId === client.id && (
                      <div className="p-4 border-t border-linkedin-border/30 bg-linkedin-card/30">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h4 className="text-linkedin-light text-sm font-medium mb-2">Contact Information</h4>
                            <div className="space-y-2">
                              <div className="flex items-center text-gray-300 text-sm">
                                <Mail className="w-4 h-4 mr-2 text-gray-400" />
                                <span>{client.email}</span>
                              </div>
                              <div className="flex items-center text-gray-300 text-sm">
                                <Phone className="w-4 h-4 mr-2 text-gray-400" />
                                <span>{client.phone}</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-linkedin-light text-sm font-medium mb-2">Engagement</h4>
                            <div className="space-y-2">
                              <div className="flex items-center text-gray-300 text-sm">
                                <Clock className="w-4 h-4 mr-2 text-gray-400" />
                                <span>Last interaction: {client.lastInteraction}</span>
                              </div>
                              <div className="flex items-center text-gray-300 text-sm">
                                <Star className="w-4 h-4 mr-2 text-yellow-400 fill-current" />
                                <span>Client rating: {client.rating}/5</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="text-linkedin-light text-sm font-medium mb-2">Notes</h4>
                          <div className="bg-linkedin-card/30 rounded-lg p-3">
                            <p className="text-gray-300 text-sm">{client.notes}</p>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="text-linkedin-light text-sm font-medium mb-2">Projects</h4>
                          <div className="space-y-2">
                            {client.projects.map(project => (
                              <div key={project.id} className="bg-linkedin-card/30 rounded-lg p-3">
                                <div className="flex items-center justify-between">
                                  <h5 className="text-white text-sm">{project.name}</h5>
                                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                                    project.status === 'Completed' 
                                      ? 'bg-green-500/20 text-green-400' 
                                      : project.status === 'In Progress'
                                        ? 'bg-blue-500/20 text-blue-400'
                                        : 'bg-yellow-500/20 text-yellow-400'
                                  }`}>
                                    {project.status}
                                  </span>
                                </div>
                                <p className="text-gray-400 text-xs mt-1">{project.date}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <button className="bg-linkedin hover:bg-linkedin-dark text-white px-3 py-1.5 rounded-lg text-sm transition-colors">
                            <MessageSquare className="w-4 h-4 inline mr-1" />
                            Message
                          </button>
                          <button className="bg-linkedin hover:bg-linkedin-dark text-white px-3 py-1.5 rounded-lg text-sm transition-colors">
                            <Calendar className="w-4 h-4 inline mr-1" />
                            Schedule
                          </button>
                          <button className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-3 py-1.5 rounded-lg text-sm transition-colors">
                            <Edit2 className="w-4 h-4 inline mr-1" />
                            Edit
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <Users className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                  <p className="text-gray-400">No clients found matching your search.</p>
                </div>
              )}
            </div>
          </div>

          {/* Client Analytics */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">
              <Star className="w-5 h-5 text-linkedin-light mr-2" />
              Client Analytics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-linkedin-card/50 rounded-lg p-4 text-center">
                <DollarSign className="w-8 h-8 text-linkedin-light mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">$2,500</div>
                <p className="text-gray-400 text-sm">Total Revenue</p>
              </div>
              <div className="bg-linkedin-card/50 rounded-lg p-4 text-center">
                <Users className="w-8 h-8 text-linkedin-light mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">10</div>
                <p className="text-gray-400 text-sm">Total Clients</p>
              </div>
              <div className="bg-linkedin-card/50 rounded-lg p-4 text-center">
                <Star className="w-8 h-8 text-linkedin-light mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">4.5</div>
                <p className="text-gray-400 text-sm">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Communication Tab */}
      {activeTab === 'communication' && (
        <div className="space-y-6">
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">
              <MessageSquare className="w-5 h-5 text-linkedin-light mr-2" />
              Communication Center
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1 space-y-4">
                <div className="bg-linkedin-card/50 rounded-lg p-4">
                  <h3 className="text-white font-medium mb-3">New Message</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-gray-300 text-sm mb-1">Recipient</label>
                      <select className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin">
                        <option className="bg-slate-800">Select client...</option>
                        {clients.map(client => (
                          <option key={client.id} className="bg-slate-800">{client.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm mb-1">Subject</label>
                      <input 
                        type="text" 
                        className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin" 
                        placeholder="Enter subject..." 
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm mb-1">Message</label>
                      <textarea 
                        className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin" 
                        rows={5} 
                        placeholder="Type your message..." 
                      ></textarea>
                    </div>
                    <button className="w-full bg-linkedin hover:bg-linkedin-dark text-white px-3 py-2 rounded-lg text-sm transition-colors">
                      <Send className="w-4 h-4 inline mr-1" />
                      Send Message
                    </button>
                  </div>
                </div>
                
                <div className="bg-linkedin-card/50 rounded-lg p-4">
                  <h3 className="text-white font-medium mb-3">Communication Tools</h3>
                  <div className="space-y-2">
                    <button className="w-full bg-linkedin-card hover:bg-linkedin-card/70 text-white px-3 py-2 rounded-lg text-sm transition-colors text-left">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Integration
                    </button>
                    <button className="w-full bg-linkedin-card hover:bg-linkedin-card/70 text-white px-3 py-2 rounded-lg text-sm transition-colors text-left">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Call Scheduling
                    </button>
                    <button className="w-full bg-linkedin-card hover:bg-linkedin-card/70 text-white px-3 py-2 rounded-lg text-sm transition-colors text-left">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Automated Follow-ups
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <div className="bg-linkedin-card/50 rounded-lg p-4">
                  <h3 className="text-white font-medium mb-3">Recent Communications</h3>
                  <div className="space-y-3">
                    {recentCommunications.map(comm => (
                      <div key={comm.id} className="bg-linkedin-card/30 rounded-lg p-3 hover:bg-linkedin-card/50 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <span className="text-white font-medium text-sm mr-2">{comm.client}</span>
                            <span className={`px-2 py-0.5 rounded-full text-xs ${
                              comm.type === 'Email' 
                                ? 'bg-blue-500/20 text-blue-400' 
                                : comm.type === 'Call'
                                  ? 'bg-green-500/20 text-green-400'
                                  : 'bg-purple-500/20 text-purple-400'
                            }`}>
                              {comm.type}
                            </span>
                          </div>
                          <span className="text-gray-400 text-xs">{comm.date}</span>
                        </div>
                        <p className="text-white text-sm mb-2">{comm.subject}</p>
                        <p className="text-gray-300 text-xs line-clamp-2">{comm.content}</p>
                        <div className="flex space-x-2 mt-2">
                          <button className="text-linkedin-light hover:text-linkedin text-xs transition-colors">
                            View Full Message
                          </button>
                          <button className="text-linkedin-light hover:text-linkedin text-xs transition-colors">
                            Reply
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">
              <Calendar className="w-5 h-5 text-linkedin-light mr-2" />
              Communication Templates
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-linkedin-card/50 rounded-lg p-4 hover:bg-linkedin-card/70 transition-colors">
                <h3 className="text-white font-medium mb-2">Welcome Message</h3>
                <p className="text-gray-400 text-sm mb-3">Initial welcome message for new clients</p>
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
                <h3 className="text-white font-medium mb-2">Session Follow-up</h3>
                <p className="text-gray-400 text-sm mb-3">Post-session follow-up with action items</p>
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
                <h3 className="text-white font-medium mb-2">Feedback Request</h3>
                <p className="text-gray-400 text-sm mb-3">Request for client feedback after service completion</p>
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
    </div>
  );
};

export default ClientManagement;