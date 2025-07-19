import React, { useState } from 'react';
import { 
  Star, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  Calendar,
  User,
  FileText,
  CreditCard,
  Shield
} from 'lucide-react';

interface ServiceDetailsProps {
  onSectionChange: (section: string) => void;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ onSectionChange }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');

  const service = {
    name: 'Startup Strategy & Business Model Design',
    description: 'Comprehensive business strategy development and business model validation for early-stage startups. This service includes market analysis, competitive landscape assessment, revenue model design, and go-to-market strategy development.',
    expertName: 'Dr. Sarah Al-Mansouri',
    expertTitle: 'Former VP of Engineering at Careem',
    expertProfilePicture: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 4.9,
    sessions: 47,
    price: 500,
    duration: '2 hours',
    objectives: [
      'Define clear business strategy and vision',
      'Validate business model assumptions',
      'Identify target market and customer segments',
      'Develop go-to-market strategy',
      'Create actionable implementation roadmap'
    ],
    deliverables: [
      'Business Model Canvas',
      'Market Analysis Report',
      'Competitive Landscape Assessment',
      'Go-to-Market Strategy Document',
      'Implementation Roadmap',
      '30-day follow-up session'
    ],
    prerequisites: [
      'Basic understanding of your business idea',
      'Market research or customer interviews (if available)',
      'Financial projections or assumptions',
      'Competitive analysis (basic level)',
      'Commitment to implement recommendations'
    ]
  };

  const availableSlots = [
    { date: '2024-12-15', slots: ['10:00 AM', '2:00 PM', '4:00 PM'] },
    { date: '2024-12-16', slots: ['9:00 AM', '11:00 AM', '3:00 PM'] },
    { date: '2024-12-17', slots: ['10:00 AM', '1:00 PM', '5:00 PM'] },
    { date: '2024-12-18', slots: ['9:00 AM', '2:00 PM', '4:00 PM'] }
  ];

  const handleBooking = () => {
    if (selectedDate && selectedTime && acceptedTerms) {
      // Handle booking logic
      console.log('Booking confirmed');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Service Details</h1>
        <p className="text-gray-300">Complete service information and booking</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Service Overview */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h2 className="text-2xl font-bold text-white mb-4">{service.name}</h2>
            <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-linkedin-light" />
                <div>
                  <p className="text-white font-semibold">${service.price}</p>
                  <p className="text-gray-400 text-sm">Per session</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-linkedin-light" />
                <div>
                  <p className="text-white font-semibold">{service.duration}</p>
                  <p className="text-gray-400 text-sm">Duration</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <div>
                  <p className="text-white font-semibold">{service.rating}</p>
                  <p className="text-gray-400 text-sm">({service.sessions} sessions)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Objectives */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h3 className="text-xl font-bold text-white mb-4">Service Objectives</h3>
            <div className="space-y-3">
              {service.objectives.map((objective, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-linkedin-light mt-0.5" />
                  <span className="text-gray-300">{objective}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h3 className="text-xl font-bold text-white mb-4">What You'll Receive</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.deliverables.map((deliverable, index) => (
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
              {service.prerequisites.map((prerequisite, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-linkedin-light rounded-full mt-2"></div>
                  <span className="text-gray-300">{prerequisite}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Sidebar */}
        <div className="space-y-6">
          {/* Expert Profile */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <div className="flex items-center space-x-4 mb-4">
              <img 
                src={service.expertProfilePicture} 
                alt={service.expertName}
                className="w-16 h-16 rounded-full object-cover border-2 border-linkedin"
              />
              <div>
                <h4 className="text-lg font-semibold text-white">{service.expertName}</h4>
                <p className="text-gray-400 text-sm">{service.expertTitle}</p>
              </div>
            </div>
            <button 
              onClick={() => onSectionChange('expert-profile')}
              className="w-full bg-linkedin-card hover:bg-linkedin-card/70 text-linkedin-light border border-linkedin-border px-4 py-2 rounded-lg transition-colors"
            >
              View Expert Profile
            </button>
          </div>

          {/* Booking Calendar */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Select Date & Time</span>
            </h3>
            
            <div className="space-y-4">
              {availableSlots.map((day) => (
                <div key={day.date}>
                  <p className="text-white font-medium mb-2">{new Date(day.date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {day.slots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => {
                          setSelectedDate(day.date);
                          setSelectedTime(slot);
                        }}
                        className={`p-2 rounded-lg text-sm transition-all ${
                          selectedDate === day.date && selectedTime === slot
                            ? 'bg-linkedin text-white'
                            : 'bg-linkedin-card hover:bg-linkedin-card/70 text-gray-300 border border-linkedin-border'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
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
              <p>• 24-hour cancellation policy</p>
              <p>• Full refund if cancelled 48+ hours in advance</p>
              <p>• Session recordings available upon request</p>
              <p>• Follow-up materials provided within 24 hours</p>
            </div>
            
            <label className="flex items-start space-x-3 mt-4 cursor-pointer">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="mt-1"
              />
              <span className="text-gray-300 text-sm">
                I agree to the terms and conditions and cancellation policy
              </span>
            </label>
          </div>

          {/* Booking Confirmation */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Service Fee</span>
                <span className="text-white font-semibold">${service.price}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Platform Fee</span>
                <span className="text-white font-semibold">$25</span>
              </div>
              <div className="border-t border-linkedin-border pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">Total</span>
                  <span className="text-linkedin-light font-bold text-lg">${service.price + 25}</span>
                </div>
              </div>
              
              <button
                onClick={handleBooking}
                disabled={!selectedDate || !selectedTime || !acceptedTerms}
                className="w-full bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Book Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;