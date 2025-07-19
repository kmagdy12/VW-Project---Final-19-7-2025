import React, { useState } from 'react';
import { CheckCircle, XCircle, Star, Users, Briefcase, DollarSign, Zap } from 'lucide-react';

interface SubscriptionPackagesProps {
  onSubscriptionComplete: () => void;
}

const SubscriptionPackages: React.FC<SubscriptionPackagesProps> = ({ onSubscriptionComplete }) => {
  const [selectedRole, setSelectedRole] = useState<'investor' | 'expert' | 'founder'>('investor');

  const packagesData = {
    investor: [
      {
        name: 'Freemium',
        type: 'freemium',
        price: 'Free',
        duration: 'Lifetime',
        tokens: '500 tokens/month',
        features: [
          'Access to basic deal flow',
          'Limited network connections (5/month)',
          'Basic market insights',
          'Standard support'
        ],
        status: 'available'
      },
      {
        name: 'Basic Subscription',
        type: 'basic',
        price: '$99/month',
        duration: 'Monthly',
        tokens: '5000 tokens/month',
        features: [
          'Access to full deal flow',
          'Unlimited network connections',
          'Advanced market intelligence',
          'Priority support',
          'AI-powered deal matching'
        ],
        status: 'available'
      },
      {
        name: 'Advanced',
        type: 'advanced',
        price: 'Coming Soon',
        duration: 'N/A',
        tokens: 'Unlimited tokens',
        features: [
          'Exclusive investment opportunities',
          'Dedicated portfolio manager',
          'Custom market research reports',
          'Direct access to industry experts',
          'Advanced analytics & reporting'
        ],
        status: 'coming_soon'
      }
    ],
    expert: [
      {
        name: 'Freemium',
        type: 'freemium',
        price: 'Free',
        duration: 'Lifetime',
        tokens: '1000 tokens/month',
        features: [
          'Basic profile listing',
          'Limited session bookings (2/month)',
          'Standard support'
        ],
        status: 'available'
      },
      {
        name: 'Basic Subscription',
        type: 'basic',
        price: '$79/month',
        duration: 'Monthly',
        tokens: '8000 tokens/month',
        features: [
          'Enhanced profile visibility',
          'Unlimited session bookings',
          'Client management tools',
          'Priority support',
          'Marketing & promotion tools'
        ],
        status: 'available'
      },
      {
        name: 'Advanced',
        type: 'advanced',
        price: 'Coming Soon',
        duration: 'N/A',
        tokens: 'Unlimited tokens',
        features: [
          'Premium profile placement',
          'Dedicated client success manager',
          'Access to exclusive workshops',
          'Advanced analytics on session performance',
          'Co-marketing opportunities'
        ],
        status: 'coming_soon'
      }
    ],
    founder: [
      {
        name: 'Freemium',
        type: 'freemium',
        price: 'Free',
        duration: 'Lifetime',
        tokens: '700 tokens/month',
        features: [
          'Basic venture profile',
          'Limited access to investor network (5 intros)',
          'Basic resource library',
          'Standard support'
        ],
        status: 'available'
      },
      {
        name: 'Basic Subscription',
        type: 'basic',
        price: '$49/month',
        duration: 'Monthly',
        tokens: '6000 tokens/month',
        features: [
          'Enhanced venture profile',
          'Unlimited investor introductions',
          'Premium resource library',
          'Priority support',
          'AI-powered mentorship matching'
        ],
        status: 'available'
      },
      {
        name: 'Advanced',
        type: 'advanced',
        price: 'Coming Soon',
        duration: 'N/A',
        tokens: 'Unlimited tokens',
        features: [
          'Curated investor introductions',
          'Access to exclusive pitch events',
          'Personalized venture building guidance',
          'Legal & compliance support',
          'Strategic partnership opportunities'
        ],
        status: 'coming_soon'
      }
    ]
  };

  const currentRolePackages = packagesData[selectedRole];

  return (
    <div className="min-h-screen bg-gradient-to-br from-linkedin-background via-linkedin-dark to-linkedin-background p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">
          Choose Your Venture Weavers Plan
        </h1>
        <p className="text-xl text-gray-300 mb-8 text-center">
          Unlock the full potential of Venture Weavers with a plan tailored to your role.
        </p>

        {/* Role Selection Dropdown */}
        <div className="flex justify-center mb-12">
          <div className="relative inline-block text-white">
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value as 'investor' | 'expert' | 'founder')}
              className="block appearance-none w-full bg-linkedin-card border border-linkedin-border text-white py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-linkedin-dark focus:border-linkedin-light"
            >
              <option value="investor" className="bg-slate-800">Investor</option>
              <option value="expert" className="bg-slate-800">Expert</option>
              <option value="founder" className="bg-slate-800">Founder</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentRolePackages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-linkedin-card backdrop-blur-lg rounded-xl border ${
                pkg.type === 'basic'
                  ? 'border-linkedin-light shadow-lg shadow-linkedin-light/20'
                  : 'border-linkedin-border'
              } p-8 flex flex-col ${pkg.status === 'coming_soon' ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <div className="text-center mb-6">
                <h2
                  className={`text-3xl font-bold ${
                    pkg.type === 'basic' ? 'text-linkedin-light' : 'text-white'
                  } mb-2`}
                >
                  {pkg.name}
                </h2>
                <p className="text-gray-400 text-lg">{pkg.price}</p>
              </div>

              {/* Duration and Tokens */}
              <div className="mb-6 text-center">
                <p className="text-gray-300 text-sm mb-1">Duration: <span className="font-semibold">{pkg.duration}</span></p>
                <p className="text-gray-300 text-sm">Tokens: <span className="font-semibold">{pkg.tokens}</span></p>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3 text-gray-300">
                    {pkg.status === 'available' ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : (
                      <XCircle className="w-5 h-5 text-gray-500" />
                    )}
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                {pkg.status === 'available' ? (
                  <button
                    onClick={onSubscriptionComplete}
                    className={`w-full py-3 rounded-lg font-semibold transition-all ${
                      pkg.type === 'basic'
                        ? 'bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white'
                        : 'bg-linkedin-card border border-linkedin-border text-linkedin-light hover:bg-linkedin-dark/20'
                    }`}
                  >
                    {pkg.type === 'freemium' ? 'Current Plan' : 'Choose Plan'}
                  </button>
                ) : (
                  <button
                    className="w-full py-3 rounded-lg font-semibold bg-gray-700 text-gray-400 cursor-not-allowed"
                    disabled
                  >
                    {pkg.price}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPackages;