import React, { useState } from 'react';
import { 
  Star, 
  MapPin, 
  Calendar, 
  Award, 
  Users, 
  MessageSquare,
  Bookmark,
  Share2,
  Clock,
  Building2,
  GraduationCap,
  Trophy
} from 'lucide-react';
import ServiceCard from './ServiceCard';
import WorkshopCard from './WorkshopCard';

interface ExpertProfileProps {
  onSectionChange: (section: string) => void;
}

const ExpertProfile: React.FC<ExpertProfileProps> = ({ onSectionChange }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isSaved, setIsSaved] = useState(false);

  const expert = {
    name: 'Dr. Sarah Al-Mansouri',
    title: 'Former VP of Engineering at Careem',
    profilePicture: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200',
    coverPhoto: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    totalSessions: 247,
    responseTime: '2 hours',
    location: 'Dubai, UAE',
    experience: '15+ years',
    languages: ['English', 'Arabic'],
    bio: 'Dr. Sarah Al-Mansouri is a seasoned technology executive with over 15 years of experience in building and scaling world-class engineering teams. As the former VP of Engineering at Careem, she led a team of 200+ engineers and was instrumental in the company\'s growth from startup to a $3.1B acquisition by Uber.',
    specialties: [
      'Technology Leadership',
      'Scaling Teams',
      'Product Strategy',
      'Engineering Management',
      'Startup Growth',
      'Technical Architecture'
    ]
  };

  const workExperience = [
    {
      company: 'Careem',
      position: 'VP of Engineering',
      duration: '2016 - 2020',
      description: 'Led engineering teams of 200+ across multiple countries. Scaled technology infrastructure to support 50M+ users.'
    },
    {
      company: 'Amazon',
      position: 'Senior Engineering Manager',
      duration: '2012 - 2016',
      description: 'Managed cross-functional teams for AWS services. Delivered critical infrastructure components used by millions.'
    },
    {
      company: 'Microsoft',
      position: 'Software Engineering Lead',
      duration: '2008 - 2012',
      description: 'Led development of enterprise software solutions. Mentored junior engineers and established best practices.'
    }
  ];

  const education = [
    {
      institution: 'Stanford University',
      degree: 'Ph.D. in Computer Science',
      year: '2008',
      focus: 'Distributed Systems'
    },
    {
      institution: 'MIT',
      degree: 'M.S. in Computer Science',
      year: '2004',
      focus: 'Software Engineering'
    }
  ];

  const certifications = [
    'AWS Solutions Architect Professional',
    'Google Cloud Professional Cloud Architect',
    'Certified Scrum Master (CSM)',
    'Project Management Professional (PMP)'
  ];

  const testimonials = [
    {
      client: 'Ahmed Hassan',
      company: 'TechStart Dubai',
      rating: 5,
      text: 'Dr. Sarah\'s guidance was instrumental in scaling our engineering team from 5 to 50 people. Her insights on technical architecture and team management are invaluable.',
      date: '2 weeks ago'
    },
    {
      client: 'Layla Khoury',
      company: 'FinanceFlow',
      rating: 5,
      text: 'Working with Sarah transformed our approach to product development. Her strategic thinking and technical expertise helped us avoid costly mistakes.',
      date: '1 month ago'
    },
    {
      client: 'Omar Al-Zahra',
      company: 'HealthTech Solutions',
      rating: 5,
      text: 'Sarah\'s mentorship during our Series A preparation was exceptional. She helped us build a robust technical foundation that impressed investors.',
      date: '2 months ago'
    }
  ];

  const services = [
    {
      id: 1,
      name: 'Technology Leadership Consulting',
      description: 'Strategic guidance for CTOs and engineering leaders on scaling technology organizations.',
      expertName: 'Dr. Sarah Al-Mansouri',
      expertProfilePicture: expert.profilePicture,
      serviceCoverPhoto: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      tags: ['Leadership', 'Strategy', 'Scaling'],
      location: 'Dubai, UAE',
      price: '$500/session',
      duration: '2 hours',
      sessions: 47
    },
    {
      id: 2,
      name: 'Engineering Team Building',
      description: 'Comprehensive guidance on hiring, structuring, and managing high-performance engineering teams.',
      expertName: 'Dr. Sarah Al-Mansouri',
      expertProfilePicture: expert.profilePicture,
      serviceCoverPhoto: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      tags: ['Team Building', 'Hiring', 'Management'],
      location: 'Dubai, UAE',
      price: '$450/session',
      duration: '90 minutes',
      sessions: 32
    }
  ];

  const workshops = [
    {
      id: 1,
      name: 'Building Scalable Tech Teams',
      description: 'Workshop on hiring, managing, and scaling engineering teams in high-growth environments.',
      date: 'Dec 22, 2024',
      time: '1:00 PM - 5:00 PM',
      expertName: 'Dr. Sarah Al-Mansouri',
      expertProfilePicture: expert.profilePicture,
      workshopCoverPhoto: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Team Building', 'Engineering', 'Leadership'],
      location: 'Riyadh, Saudi Arabia',
      price: '$349',
      capacity: 20,
      enrolled: 14,
      format: 'In-person'
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'experience', label: 'Experience' },
    { id: 'services', label: 'Services' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'testimonials', label: 'Testimonials' }
  ];

  return (
    <div className="space-y-6">
      {/* Cover Photo and Profile Header */}
      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border overflow-hidden">
        <div className="relative">
          <img 
            src={expert.coverPhoto} 
            alt="Cover"
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 right-4 flex items-center space-x-2">
            <button
              onClick={() => setIsSaved(!isSaved)}
              className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                isSaved 
                  ? 'bg-yellow-500/20 text-yellow-400' 
                  : 'bg-black/20 text-white hover:bg-yellow-500/20 hover:text-yellow-400'
              }`}
            >
              <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
            </button>
            <button className="p-2 rounded-full bg-black/20 text-white hover:bg-white/20 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-start space-x-6">
            <img 
              src={expert.profilePicture} 
              alt={expert.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-linkedin -mt-12"
            />
            
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-white mb-2">{expert.name}</h1>
                  <p className="text-linkedin-light text-lg mb-3">{expert.title}</p>
                  
                  <div className="flex items-center space-x-6 text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{expert.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>Responds in {expert.responseTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{expert.totalSessions} sessions completed</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold text-lg">{expert.rating}</span>
                      <span className="text-gray-400">({expert.totalSessions} reviews)</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <button className="flex items-center space-x-2 bg-linkedin-card hover:bg-linkedin-card/70 text-white px-4 py-2 rounded-lg transition-colors">
                    <MessageSquare className="w-4 h-4" />
                    <span>Message</span>
                  </button>
                  <button className="bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-6 py-2 rounded-lg font-medium transition-all">
                    Book Session
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
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
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Bio */}
            <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
              <h3 className="text-xl font-bold text-white mb-4">About</h3>
              <p className="text-gray-300 leading-relaxed">{expert.bio}</p>
            </div>

            {/* Specialties */}
            <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
              <h3 className="text-xl font-bold text-white mb-4">Specialties</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {expert.specialties.map((specialty, index) => (
                  <div key={index} className="bg-linkedin/20 text-linkedin-light px-3 py-2 rounded-lg text-center">
                    {specialty}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
              <h3 className="text-lg font-bold text-white mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Experience</span>
                  <span className="text-white font-semibold">{expert.experience}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Total Sessions</span>
                  <span className="text-white font-semibold">{expert.totalSessions}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Response Time</span>
                  <span className="text-white font-semibold">{expert.responseTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Languages</span>
                  <span className="text-white font-semibold">{expert.languages.join(', ')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'experience' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Work Experience */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
              <Building2 className="w-5 h-5" />
              <span>Work Experience</span>
            </h3>
            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <div key={index} className="border-l-2 border-linkedin pl-4">
                  <h4 className="text-lg font-semibold text-white">{job.position}</h4>
                  <p className="text-linkedin-light font-medium">{job.company}</p>
                  <p className="text-gray-400 text-sm mb-2">{job.duration}</p>
                  <p className="text-gray-300 text-sm">{job.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-6">
            <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                <GraduationCap className="w-5 h-5" />
                <span>Education</span>
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                    <p className="text-linkedin-light">{edu.institution}</p>
                    <p className="text-gray-400 text-sm">{edu.year} • {edu.focus}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                <Trophy className="w-5 h-5" />
                <span>Certifications</span>
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-linkedin-light" />
                    <span className="text-gray-300">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'services' && (
        <div>
          <h3 className="text-xl font-bold text-white mb-6">Services Offered</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onViewService={() => onSectionChange('service-details')}
              />
            ))}
          </div>
        </div>
      )}

      {activeTab === 'workshops' && (
        <div>
          <h3 className="text-xl font-bold text-white mb-6">Upcoming Workshops</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshops.map((workshop) => (
              <WorkshopCard 
                key={workshop.id} 
                workshop={workshop} 
                onViewWorkshop={() => onSectionChange('workshop-details')}
              />
            ))}
          </div>
        </div>
      )}

      {activeTab === 'testimonials' && (
        <div>
          <h3 className="text-xl font-bold text-white mb-6">Client Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.client}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  <p className="text-gray-500 text-xs mt-1">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpertProfile;