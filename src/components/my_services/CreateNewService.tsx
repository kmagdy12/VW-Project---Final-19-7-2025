import React, { useState } from 'react';
import { 
  Save, 
  ArrowRight, 
  Edit2, 
  Eye, 
  DollarSign, 
  FileText, 
  Package, 
  Target,
  Calendar,
  Clock,
  Users,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

const CreateNewService: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'details' | 'pricing' | 'content' | 'preview'>('details');

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white mb-2">Create New Service</h1>
      <p className="text-gray-300 mb-6">Service package development workspace for creating new advisory offerings and pricing strategies.</p>

      {/* Screen Tabs */}
      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-4">
        <div className="flex items-center space-x-2 overflow-x-auto">
          <button 
            onClick={() => setActiveTab('details')}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'details' 
                ? 'bg-linkedin text-white' 
                : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
            }`}
          >
            Service Details
          </button>
          <button 
            onClick={() => setActiveTab('pricing')}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'pricing' 
                ? 'bg-linkedin text-white' 
                : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
            }`}
          >
            Pricing & Delivery
          </button>
          <button 
            onClick={() => setActiveTab('content')}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'content' 
                ? 'bg-linkedin text-white' 
                : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
            }`}
          >
            Content Definition
          </button>
          <button 
            onClick={() => setActiveTab('preview')}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'preview' 
                ? 'bg-linkedin text-white' 
                : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
            }`}
          >
            Preview & Publish
          </button>
        </div>
      </div>

      {/* Service Details */}
      {activeTab === 'details' && (
        <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white flex items-center">
              <Package className="w-5 h-5 text-linkedin-light mr-2" />
              Service Details
            </h2>
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <AlertTriangle className="w-4 h-4 text-yellow-400" />
              <span>AI companion recommendations available</span>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm mb-2">Service Title</label>
              <input 
                type="text" 
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin" 
                placeholder="e.g., Startup Strategy Consulting" 
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Service Tagline</label>
              <input 
                type="text" 
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin" 
                placeholder="e.g., Guiding early-stage startups to success" 
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Category Selection</label>
              <select className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin">
                <option className="bg-slate-800">Business Strategy</option>
                <option className="bg-slate-800">Fintech</option>
                <option className="bg-slate-800">HealthTech</option>
                <option className="bg-slate-800">EdTech</option>
                <option className="bg-slate-800">Marketing & Growth</option>
                <option className="bg-slate-800">Product Development</option>
                <option className="bg-slate-800">Fundraising</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Detailed Description</label>
              <textarea 
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin" 
                rows={5} 
                placeholder="Provide a comprehensive description of your service..."
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Target Audience</label>
              <input 
                type="text" 
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin" 
                placeholder="e.g., Early-stage founders, Seed-stage startups" 
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Service Objectives</label>
              <textarea 
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin" 
                rows={3} 
                placeholder="What will clients achieve by using this service?"
              ></textarea>
            </div>
            
            <div className="flex justify-end space-x-3 pt-4 mt-4 border-t border-linkedin-border">
              <button className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-4 py-2 rounded-lg transition-colors">
                <Save className="w-4 h-4 inline mr-2" />
                Save Draft
              </button>
              <button 
                onClick={() => setActiveTab('pricing')}
                className="bg-linkedin hover:bg-linkedin-dark text-white px-4 py-2 rounded-lg transition-colors flex items-center"
              >
                Continue
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pricing & Delivery */}
      {activeTab === 'pricing' && (
        <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white flex items-center">
              <DollarSign className="w-5 h-5 text-linkedin-light mr-2" />
              Pricing & Delivery
            </h2>
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <AlertTriangle className="w-4 h-4 text-yellow-400" />
              <span>AI companion recommendations available</span>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm mb-2">Pricing Model</label>
              <select className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin">
                <option className="bg-slate-800">Fixed Price</option>
                <option className="bg-slate-800">Hourly Rate</option>
                <option className="bg-slate-800">Tiered Pricing</option>
                <option className="bg-slate-800">Subscription</option>
                <option className="bg-slate-800">Value-Based</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Rate Settings</label>
              <div className="flex items-center">
                <DollarSign className="w-5 h-5 text-gray-400 mr-2" />
                <input 
                  type="number" 
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin" 
                  placeholder="e.g., 250" 
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Package Options</label>
              <textarea 
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin" 
                rows={3} 
                placeholder="Describe different package tiers or options if applicable..."
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Delivery Format</label>
              <select className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin">
                <option className="bg-slate-800">Virtual Meeting</option>
                <option className="bg-slate-800">In-Person</option>
                <option className="bg-slate-800">Written Report</option>
                <option className="bg-slate-800">Hybrid</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Duration Settings</label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <select className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin">
                    <option className="bg-slate-800">30 minutes</option>
                    <option className="bg-slate-800">1 hour</option>
                    <option className="bg-slate-800">2 hours</option>
                    <option className="bg-slate-800">Half day</option>
                    <option className="bg-slate-800">Full day</option>
                    <option className="bg-slate-800">Custom</option>
                  </select>
                </div>
                <div>
                  <select className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin">
                    <option className="bg-slate-800">Single Session</option>
                    <option className="bg-slate-800">Multiple Sessions</option>
                    <option className="bg-slate-800">Ongoing</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between space-x-3 pt-4 mt-4 border-t border-linkedin-border">
              <button 
                onClick={() => setActiveTab('details')}
                className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Back
              </button>
              <div className="flex space-x-3">
                <button className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-4 py-2 rounded-lg transition-colors">
                  <Save className="w-4 h-4 inline mr-2" />
                  Save Draft
                </button>
                <button 
                  onClick={() => setActiveTab('content')}
                  className="bg-linkedin hover:bg-linkedin-dark text-white px-4 py-2 rounded-lg transition-colors flex items-center"
                >
                  Continue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content Definition */}
      {activeTab === 'content' && (
        <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white flex items-center">
              <FileText className="w-5 h-5 text-linkedin-light mr-2" />
              Content Definition
            </h2>
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <AlertTriangle className="w-4 h-4 text-yellow-400" />
              <span>AI companion recommendations available</span>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm mb-2">Prerequisites</label>
              <textarea 
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin" 
                rows={3} 
                placeholder="What should clients prepare or know before the service?"
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Deliverables List</label>
              <textarea 
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin" 
                rows={3} 
                placeholder="What tangible outputs will clients receive?"
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Methodology Outline</label>
              <textarea 
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin" 
                rows={3} 
                placeholder="Describe your approach or methodology..."
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Success Criteria</label>
              <textarea 
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin" 
                rows={3} 
                placeholder="How will success be measured?"
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Terms and Conditions</label>
              <textarea 
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin" 
                rows={3} 
                placeholder="Any specific terms, policies, or conditions..."
              ></textarea>
            </div>
            
            <div className="flex justify-between space-x-3 pt-4 mt-4 border-t border-linkedin-border">
              <button 
                onClick={() => setActiveTab('pricing')}
                className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Back
              </button>
              <div className="flex space-x-3">
                <button className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-4 py-2 rounded-lg transition-colors">
                  <Save className="w-4 h-4 inline mr-2" />
                  Save Draft
                </button>
                <button 
                  onClick={() => setActiveTab('preview')}
                  className="bg-linkedin hover:bg-linkedin-dark text-white px-4 py-2 rounded-lg transition-colors flex items-center"
                >
                  Continue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Preview & Publish */}
      {activeTab === 'preview' && (
        <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white flex items-center">
              <Eye className="w-5 h-5 text-linkedin-light mr-2" />
              Preview & Publish
            </h2>
          </div>
          
          <div className="bg-linkedin-card/50 rounded-xl border border-linkedin-border p-6 mb-6">
            <h3 className="text-lg font-bold text-white mb-4">Service Preview</h3>
            <div className="space-y-4">
              <div className="bg-linkedin-card/30 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">Startup Strategy Consulting</h4>
                <p className="text-gray-300 text-sm mb-3">Guiding early-stage startups to success</p>
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-1" />
                    <span>$250/hour</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>1 hour</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>1-on-1</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">Comprehensive strategy consulting for early-stage startups looking to refine their business model, go-to-market strategy, and growth plans.</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm mb-2">Visibility Settings</label>
              <select className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin">
                <option className="bg-slate-800">Public - Visible to everyone</option>
                <option className="bg-slate-800">Private - By invitation only</option>
                <option className="bg-slate-800">Network - Visible to your network</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Publication Status</label>
              <select className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin">
                <option className="bg-slate-800">Published - Available immediately</option>
                <option className="bg-slate-800">Scheduled - Publish at a specific date/time</option>
                <option className="bg-slate-800">Draft - Save but don't publish</option>
              </select>
            </div>
            
            <div className="flex justify-between space-x-3 pt-4 mt-4 border-t border-linkedin-border">
              <button 
                onClick={() => setActiveTab('content')}
                className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Back
              </button>
              <div className="flex space-x-3">
                <button className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-4 py-2 rounded-lg transition-colors">
                  <Save className="w-4 h-4 inline mr-2" />
                  Save Draft
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Publish Service
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateNewService;