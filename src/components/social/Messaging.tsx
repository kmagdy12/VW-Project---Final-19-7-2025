import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  Filter, 
  Send, 
  Paperclip, 
  Smile, 
  Image, 
  MoreVertical,
  Star,
  Archive,
  Trash2,
  Circle,
  Building2,
  TrendingUp,
  Award
} from 'lucide-react';

const Messaging: React.FC = () => {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [messageText, setMessageText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('messages');

  const conversations = [
    {
      id: 1,
      name: 'Ahmed Hassan',
      title: 'CEO at TechStart Dubai',
      profilePicture: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100',
      role: 'founder',
      lastMessage: 'Thanks for the intro! Looking forward to discussing the partnership opportunity.',
      timestamp: '2 min ago',
      unread: true,
      online: true
    },
    {
      id: 2,
      name: 'Sarah Khalil',
      title: 'Partner at MENA Ventures',
      profilePicture: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100',
      role: 'investor',
      lastMessage: 'The market analysis you shared is very insightful. Can we schedule a call?',
      timestamp: '1 hour ago',
      unread: false,
      online: false
    },
    {
      id: 3,
      name: 'Mohamed Rashid',
      title: 'Founder at HealthTech Solutions',
      profilePicture: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100',
      role: 'founder',
      lastMessage: 'Great meeting you at the conference yesterday!',
      timestamp: '3 hours ago',
      unread: true,
      online: true
    },
    {
      id: 4,
      name: 'Layla Al-Mansouri',
      title: 'Former VP at Souq.com',
      profilePicture: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100',
      role: 'expert',
      lastMessage: 'I\'d be happy to mentor your team. Let\'s discuss the details.',
      timestamp: '1 day ago',
      unread: false,
      online: false
    },
    {
      id: 5,
      name: 'Omar Benali',
      title: 'Investment Director at Gulf Capital',
      profilePicture: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100',
      role: 'investor',
      lastMessage: 'Your pitch deck looks promising. When can we meet?',
      timestamp: '2 days ago',
      unread: false,
      online: true
    }
  ];

  const messages = [
    {
      id: 1,
      senderId: 1,
      senderName: 'Ahmed Hassan',
      content: 'Hi! Thanks for connecting. I saw your post about fintech innovations in the MENA region.',
      timestamp: '10:30 AM',
      isOwn: false
    },
    {
      id: 2,
      senderId: 'me',
      senderName: 'You',
      content: 'Hello Ahmed! Thanks for reaching out. I\'d love to learn more about what you\'re building at TechStart Dubai.',
      timestamp: '10:35 AM',
      isOwn: true
    },
    {
      id: 3,
      senderId: 1,
      senderName: 'Ahmed Hassan',
      content: 'We\'re developing an AI-powered payment platform specifically for the MENA market. The regulatory landscape here is quite unique, and we\'ve built solutions that address those specific challenges.',
      timestamp: '10:40 AM',
      isOwn: false
    },
    {
      id: 4,
      senderId: 'me',
      senderName: 'You',
      content: 'That sounds fascinating! The regulatory compliance aspect is definitely crucial in this region. Are you looking for strategic partnerships or investment?',
      timestamp: '10:45 AM',
      isOwn: true
    },
    {
      id: 5,
      senderId: 1,
      senderName: 'Ahmed Hassan',
      content: 'Both actually! We just closed our Series A, but we\'re always open to strategic partnerships, especially with companies that have strong distribution networks in the region.',
      timestamp: '10:50 AM',
      isOwn: false
    },
    {
      id: 6,
      senderId: 1,
      senderName: 'Ahmed Hassan',
      content: 'Thanks for the intro! Looking forward to discussing the partnership opportunity.',
      timestamp: '11:15 AM',
      isOwn: false
    }
  ];

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'founder':
        return <Building2 className="w-3 h-3" />;
      case 'investor':
        return <TrendingUp className="w-3 h-3" />;
      case 'expert':
        return <Award className="w-3 h-3" />;
      default:
        return null;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'founder':
        return 'text-purple-400 bg-purple-500/20';
      case 'investor':
        return 'text-blue-400 bg-blue-500/20';
      case 'expert':
        return 'text-green-400 bg-green-500/20';
      default:
        return 'text-gray-400 bg-gray-500/20';
    }
  };

  const selectedConv = conversations.find(c => c.id === selectedConversation);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageText.trim()) {
      // Handle message sending logic here
      console.log('Sending message:', messageText);
      setMessageText('');
    }
  };

  const filteredConversations = conversations.filter(conv => 
    conv.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-linkedin-background via-linkedin-dark to-linkedin-background">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Messaging</h1>
            <p className="text-gray-300">Connect and communicate with your network</p>
          </div>
          <button className="flex items-center space-x-2 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-6 py-3 rounded-lg font-medium transition-all">
            <Plus className="w-4 h-4" />
            <span>New Message</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
          {/* Conversations List */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border flex flex-col">
            {/* Search and Filters */}
            <div className="p-4 border-b border-linkedin-border">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg pl-9 pr-4 py-2 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-linkedin"
                />
              </div>
              
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-linkedin"
              >
                <option value="messages" className="bg-slate-800">Messages</option>
                <option value="archived" className="bg-slate-800">Archived</option>
                <option value="spam" className="bg-slate-800">Spam</option>
              </select>
            </div>

            {/* Conversations */}
            <div className="flex-1 overflow-y-auto">
              {filteredConversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation.id)}
                  className={`p-4 border-b border-linkedin-border/50 cursor-pointer transition-all hover:bg-linkedin-card/50 ${
                    selectedConversation === conversation.id ? 'bg-linkedin/20 border-linkedin/50' : ''
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="relative">
                      <img 
                        src={conversation.profilePicture} 
                        alt={conversation.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-linkedin"
                      />
                      {conversation.online && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-800"></div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="text-white font-medium text-sm truncate">{conversation.name}</h4>
                          <div className={`flex items-center space-x-1 px-1.5 py-0.5 rounded-full text-xs ${getRoleColor(conversation.role)}`}>
                            {getRoleIcon(conversation.role)}
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span className="text-gray-400 text-xs">{conversation.timestamp}</span>
                          {conversation.unread && (
                            <Circle className="w-2 h-2 text-linkedin-light fill-current" />
                          )}
                        </div>
                      </div>
                      <p className="text-gray-400 text-xs mb-1 truncate">{conversation.title}</p>
                      <p className="text-gray-300 text-sm truncate">{conversation.lastMessage}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-2 bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border flex flex-col">
            {selectedConv ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b border-linkedin-border flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img 
                        src={selectedConv.profilePicture} 
                        alt={selectedConv.name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-linkedin"
                      />
                      {selectedConv.online && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-800"></div>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-white font-semibold">{selectedConv.name}</h3>
                        <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs ${getRoleColor(selectedConv.role)}`}>
                          {getRoleIcon(selectedConv.role)}
                          <span className="capitalize">{selectedConv.role}</span>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">{selectedConv.title}</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <button className="p-2 text-gray-400 hover:text-white transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                    {/* Dropdown menu would go here */}
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.isOwn
                            ? 'bg-gradient-to-r from-linkedin to-linkedin-light text-white'
                            : 'bg-linkedin-card text-gray-300'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className={`text-xs mt-1 ${message.isOwn ? 'text-linkedin-light/70' : 'text-gray-500'}`}>
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-linkedin-border">
                  <form onSubmit={handleSendMessage} className="flex items-end space-x-3">
                    <div className="flex-1">
                      <div className="bg-linkedin-card border border-linkedin-border rounded-lg p-3">
                        <textarea
                          value={messageText}
                          onChange={(e) => setMessageText(e.target.value)}
                          placeholder="Write a message..."
                          className="w-full bg-transparent text-white placeholder-gray-400 resize-none focus:outline-none"
                          rows={1}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                              e.preventDefault();
                              handleSendMessage(e);
                            }
                          }}
                        />
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center space-x-2">
                            <button type="button" className="p-1 text-gray-400 hover:text-white transition-colors">
                              <Image className="w-4 h-4" />
                            </button>
                            <button type="button" className="p-1 text-gray-400 hover:text-white transition-colors">
                              <Paperclip className="w-4 h-4" />
                            </button>
                            <button type="button" className="p-1 text-gray-400 hover:text-white transition-colors">
                              <Smile className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={!messageText.trim()}
                      className="bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white p-3 rounded-lg transition-all"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Plus className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Start a Conversation</h3>
                  <p className="text-gray-400">Select a conversation or start a new message</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messaging;