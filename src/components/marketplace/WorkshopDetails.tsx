import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  DollarSign, 
  CheckCircle,
  User,
  FileText,
  CreditCard,
  Shield,
  Monitor,
  Building
} from 'lucide-react';

interface WorkshopDetailsProps {
  onSectionChange: (section: string) => void;
}

const WorkshopDetails: React.FC<WorkshopDetailsProps> = ({ onSectionChange }) => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');

  const workshop = {
    name: 'Fundraising Masterclass: From Seed to Series A',
    description: 'This comprehensive workshop covers everything you need to know about fundraising for startups, from initial seed rounds to Series A funding. Learn from experienced entrepreneurs and investors who have successfully raised millions in funding.',
    date: 'December 15, 2024',
    time: '2:00 PM - 6:00 PM',
    location: 'Dubai, UAE',
    format: 'In-person',
    price: 299,
    capacity: 25,
    enrolled: 18,
    coverPhoto: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    objectives: [
      'Understand different types of funding rounds',
      'Learn how to create compelling pitch decks',
      'Master the art of investor presentations',
      'Navigate term sheets and negotiations',
      'Build relationships with investors',
      'Develop fundraising timeline and strategy'
    ],
    agenda: [
      { time: '2:00 PM - 2:30 PM', topic: 'Welcome & Introductions' },
      { time: '2:30 PM - 3:30 PM', topic: 'Fundraising Fundamentals' },
      { time: '3:30 PM - 3:45 PM', topic: 'Break' },
      { time: '3:45 PM - 4:45 PM', topic: 'Pitch Deck Creation Workshop' },
      { time: '4:45 PM - 5:45 PM', topic: 'Investor Relations & Negotiations' },
      { time: '5:45 PM - 6:00 PM', topic: 'Q&A and Networking' }
    ],
    deliverables: [
      'Pitch Deck Template',
      'Fundraising Checklist',
      'Investor Database Access',
      'Term Sheet Templates',
      'Workshop Recording',
      'Certificate of Completion',
      '30-day email support'
    ],
    prerequisites: [
      'Basic understanding of startup fundamentals',
      'Business plan or business model canvas',
      'Financial projections (basic level)',
      'Laptop for workshop exercises',
      'Commitment to participate actively'
    ]
  };

  const instructors = [
    {
      name: 'Ahmed Hassan',
      title: 'Serial Entrepreneur & Angel Investor',
      profilePicture: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: '3 successful exits including acquisition by Amazon. Active angel investor with 50+ investments.'
    },
    {
      name: 'Sarah Al-Mansouri',
      title: 'Former VP at Careem',
      profilePicture: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: 'Led engineering teams during Careem\'s growth and $3.1B acquisition by Uber.'
    }
  ];

  const getFormatIcon = (format: string) => {
    switch (format) {
      case 'Virtual':
        return <Monitor className="w-5 h-5" />;
      case 'In-person':
        return <Building className="w-5 h-5" />;
      case 'Hybrid':
        return <Users className="w-5 h-5" />;
      default:
        return <Calendar className="w-5 h-5" />;
    }
  };

  const enrollmentPercentage = (workshop.enrolled / workshop.capacity) * 100;

  const handleRegistration = () => {
    if (acceptedTerms) {
      // Handle registration logic
      console.log('Registration confirmed');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Workshop Details</h1>
        <p className="text-gray-300">Complete workshop information and registration</p>
      </div>

      {/* Workshop Cover */}
      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border overflow-hidden">
        <img 
          src={workshop.coverPhoto} 
          alt={workshop.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-4">{workshop.name}</h2>
          <p className="text-gray-300 leading-relaxed mb-6">{workshop.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-linkedin-light" />
              <div>
                <p className="text-white font-semibold">{workshop.date}</p>
                <p className="text-gray-400 text-sm">{workshop.time}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-linkedin-light" />
              <div>
                <p className="text-white font-semibold">{workshop.location}</p>
                <div className="flex items-center space-x-1">
                  {getFormatIcon(workshop.format)}
                  <p className="text-gray-400 text-sm">{workshop.format}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-linkedin-light" />
              <div>
                <p className="text-white font-semibold">{workshop.enrolled}/{workshop.capacity}</p>
                <p className="text-gray-400 text-sm">Participants</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-linkedin-light" />
              <div>
                <p className="text-white font-semibold">${workshop.price}</p>
                <p className="text-gray-400 text-sm">Registration fee</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Learning Objectives */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h3 className="text-xl font-bold text-white mb-4">Learning Objectives</h3>
            <div className="space-y-3">
              {workshop.objectives.map((objective, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-linkedin-light mt-0.5" />
                  <span className="text-gray-300">{objective}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Workshop Agenda */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h3 className="text-xl font-bold text-white mb-4">Workshop Agenda</h3>
            <div className="space-y-4">
              {workshop.agenda.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-3 rounded-lg bg-linkedin-card/50">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-linkedin-light" />
                    <span className="text-linkedin-light font-medium text-sm">{item.time}</span>
                  </div>
                  <span className="text-gray-300">{item.topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Instructors */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h3 className="text-xl font-bold text-white mb-4">Workshop Instructors</h3>
            <div className="space-y-4">
              {instructors.map((instructor, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-linkedin-card/50">
                  <img 
                    src={instructor.profilePicture} 
                    alt={instructor.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-linkedin"
                  />
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white">{instructor.name}</h4>
                    <p className="text-linkedin-light text-sm mb-2">{instructor.title}</p>
                    <p className="text-gray-300 text-sm">{instructor.bio}</p>
                    <button 
                      onClick={() => onSectionChange('expert-profile')}
                      className="text-linkedin-light hover:text-linkedin text-sm font-medium mt-2"
                    >
                      View Profile →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What You'll Receive */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h3 className="text-xl font-bold text-white mb-4">What You'll Receive</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {workshop.deliverables.map((deliverable, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <FileText className="w-4 h-4 text-linkedin-light mt-1" />
                  <span className="text-gray-300 text-sm">{deliverable}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Prerequisites */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h3 className="text-xl font-bold text-white mb-4">Prerequisites</h3>
            <div className="space-y-3">
              {workshop.prerequisites.map((prerequisite, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-linkedin-light rounded-full mt-2"></div>
                  <span className="text-gray-300">{prerequisite}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Registration Sidebar */}
        <div className="space-y-6">
          {/* Enrollment Progress */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h3 className="text-lg font-bold text-white mb-4">Enrollment Status</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Enrolled</span>
                <span className="text-white font-semibold">{workshop.enrolled}/{workshop.capacity}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-linkedin to-linkedin-light h-3 rounded-full transition-all"
                  style={{ width: `${enrollmentPercentage}%` }}
                ></div>
              </div>
              <p className="text-gray-400 text-sm">
                {workshop.capacity - workshop.enrolled} spots remaining
              </p>
            </div>
          </div>

          {/* Payment Options */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
              <CreditCard className="w-5 h-5" />
              <span>Payment Method</span>
            </h3>
            
            <div className="space-y-3">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-linkedin"
                />
                <span className="text-gray-300">Credit/Debit Card</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-linkedin"
                />
                <span className="text-gray-300">PayPal</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  checked={paymentMethod === 'bank'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-linkedin"
                />
                <span className="text-gray-300">Bank Transfer</span>
              </label>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>Terms & Conditions</span>
            </h3>
            
            <div className="space-y-3 text-sm text-gray-300">
              <p>• 48-hour cancellation policy</p>
              <p>• Full refund if cancelled 7+ days in advance</p>
              <p>• Workshop materials provided digitally</p>
              <p>• Recording available for 30 days</p>
              <p>• Certificate issued upon completion</p>
            </div>
            
            <label className="flex items-start space-x-3 mt-4 cursor-pointer">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="mt-1"
              />
              <span className="text-gray-300 text-sm">
                I agree to the workshop terms and conditions and cancellation policy
              </span>
            </label>
          </div>

          {/* Registration Summary */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Workshop Fee</span>
                <span className="text-white font-semibold">${workshop.price}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Processing Fee</span>
                <span className="text-white font-semibold">$15</span>
              </div>
              <div className="border-t border-linkedin-border pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">Total</span>
                  <span className="text-linkedin-light font-bold text-lg">${workshop.price + 15}</span>
                </div>
              </div>
              
              <button
                onClick={handleRegistration}
                disabled={!acceptedTerms}
                className="w-full bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopDetails;