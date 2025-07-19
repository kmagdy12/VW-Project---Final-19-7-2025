import React, { useState } from 'react';
import { 
  Save, 
  ArrowRight, 
  Edit2, 
  Eye, 
  DollarSign, 
  FileText, 
  Calendar, 
  Target,
  Clock,
  Users,
  CheckCircle,
  AlertTriangle,
  Upload,
  MapPin,
  Monitor
} from 'lucide-react';

const CreateNewWorkshop: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'details' | 'settings' | 'content' | 'preview'>('details');

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white mb-2">Create New Workshop</h1>
      <p className="text-gray-300 mb-6">Workshop package development workspace for creating new offerings and pricing strategies.</p>

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
            Workshop Details
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'settings' 
                ? 'bg-linkedin text-white' 
                : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
            }`}
          >
            Settings & Logistics
          </button>
          <button 
            onClick={() => setActiveTab('content')}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'content' 
                ? 'bg-linkedin text-white' 
                : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
            }`}
          >
            Content Management
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

      {/* Workshop Details */}
      {activeTab === 'details' && (
        <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white flex items-center">
              <Calendar className="w-5 h-5 text-linkedin-light mr-2" />
              Workshop Details
            </h2>
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <AlertTriangle className="w-4 h-4 text-yellow-400" />
              <span>AI companion recommendations available</span>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm mb-2">Workshop Title</label>
              <input 
                type="text" 
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin" 
                placeholder="e.g., Fundraising Masterclass: From Seed to Series A" 
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Learning Objectives</label>
              <textarea 
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin" 
                rows={4} 
                placeholder="What will participants learn from this workshop?"
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Target Audience</label>
              <input 
                type="text" 
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin" 
                placeholder="e.g., Early-stage founders, Aspiring entrepreneurs" 
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Skill Level</label>
              <select className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin">
                <option className="bg-slate-800">Beginner</option>
                <option className="bg-slate-800">Intermediate</option>
                <option className="bg-slate-800">Advanced</option>
                <option className="bg-slate-800">All Levels</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Workshop Agenda</label>
              <textarea 
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin" 
                rows={5} 
                placeholder="Outline the workshop schedule and topics..."
              ></textarea>
            </div>
            
            <div className="flex justify-end space-x-3 pt-4 mt-4 border-t border-linkedin-border">
              <button className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-4 py-2 rounded-lg transition-colors">
                <Save className="w-4 h-4 inline mr-2" />
                Save Draft
              </button>
              <button 
                onClick={() => setActiveTab('settings')}
                className="bg-linkedin hover:bg-linkedin-dark text-white px-4 py-2 rounded-lg transition-colors flex items-center"
              >
                Continue
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Settings & Logistics */}
      {activeTab === 'settings' && (
        <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white flex items-center">
              <Target className="w-5 h-5 text-linkedin-light mr-2" />
              Settings & Logistics
            </h2>
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <AlertTriangle className="w-4 h-4 text-yellow-400" />
              <span>AI companion recommendations available</span>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm mb-2">Participant Capacity</label>
              <input 
                type="number" 
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin" 
                placeholder="e.g., 25" 
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Duration and Schedule</label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <select className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin">
                    <option className="bg-slate-800">1 hour</option>
                    <option className="bg-slate-800">2 hours</option>
                    <option className="bg-slate-800">3 hours</option>
                    <option className="bg-slate-800">4 hours</option>
                    <option className="bg-slate-800">Half day</option>
                    <option className="bg-slate-800">Full day</option>
                    <option className="bg-slate-800">Multiple days</option>
                  </select>
                </div>
                <div>
                  <input 
                    type="date" 
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin" 
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Pricing Structure</label>
              <div className="flex items-center">
                <DollarSign className="w-5 h-5 text-gray-400 mr-2" />
                <input 
                  type="number" 
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin" 
                  placeholder="e.g., 299" 
                />
              </div>
              <div className="mt-2">
                <select className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin">
                  <option className="bg-slate-800">Per participant</option>
                  <option className="bg-slate-800">Flat fee</option>
                  <option className="bg-slate-800">Tiered pricing</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Registration Settings</label>
              <select className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin mb-2">
                <option className="bg-slate-800">Open registration</option>
                <option className="bg-slate-800">Approval required</option>
                <option className="bg-slate-800">Invitation only</option>
              </select>
              <div className="flex items-center mt-2">
                <input type="checkbox" id="earlyBird" className="mr-2" />
                <label htmlFor="earlyBird" className="text-gray-300 text-sm">Enable early bird pricing</label>
              </div>
              <div className="flex items-center mt-2">
                <input type="checkbox" id="groupDiscount" className="mr-2" />
                <label htmlFor="groupDiscount" className="text-gray-300 text-sm">Enable group discounts</label>
              </div>
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Location/Format Type</label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <select className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin">
                    <option className="bg-slate-800">Virtual</option>
                    <option className="bg-slate-800">In-Person</option>
                    <option className="bg-slate-800">Hybrid</option>
                  </select>
                </div>
                <div>
                  <input 
                    type="text" 
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin" 
                    placeholder="Location details or virtual link" 
                  />
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

      {/* Content Management */}
      {activeTab === 'content' && (
        <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white flex items-center">
              <FileText className="w-5 h-5 text-linkedin-light mr-2" />
              Content Management
            </h2>
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <AlertTriangle className="w-4 h-4 text-yellow-400" />
              <span>AI companion recommendations available</span>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm mb-2">Materials Upload</label>
              <div className="border-2 border-dashed border-linkedin-border rounded-lg p-8 text-center">
                <Upload className="w-8 h-8 text-linkedin-light mx-auto mb-2" />
                <p className="text-white font-medium mb-1">Upload Workshop Materials</p>
                <p className="text-gray-400 text-sm mb-3">Drag & drop files or click to browse</p>
                <button className="bg-linkedin hover:bg-linkedin-dark text-white px-4 py-2 rounded-lg transition-colors text-sm">
                  Browse Files
                </button>
              </div>
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Resource Library</label>
              <textarea 
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin" 
                rows={3} 
                placeholder="List additional resources for participants..."
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Prerequisites</label>
              <textarea 
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin" 
                rows={3} 
                placeholder="What should participants know or prepare before the workshop?"
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Certificates Setup</label>
              <div className="flex items-center mb-2">
                <input type="checkbox" id="enableCertificates" className="mr-2" />
                <label htmlFor="enableCertificates" className="text-gray-300 text-sm">Enable completion certificates</label>
              </div>
              <textarea 
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin" 
                rows={2} 
                placeholder="Certificate text and requirements..."
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Post-Workshop Content</label>
              <textarea 
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin" 
                rows={3} 
                placeholder="What follow-up materials or resources will be provided?"
              ></textarea>
            </div>
            
            <div className="flex justify-between space-x-3 pt-4 mt-4 border-t border-linkedin-border">
              <button 
                onClick={() => setActiveTab('settings')}
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
            <h3 className="text-lg font-bold text-white mb-4">Workshop Preview</h3>
            <div className="space-y-4">
              <div className="bg-linkedin-card/30 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">Fundraising Masterclass: From Seed to Series A</h4>
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>Dec 15, 2024</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-1" />
                    <span>$299</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>25 participants max</span>
                  </div>
                  <div className="flex items-center">
                    <Monitor className="w-4 h-4 mr-1" />
                    <span>Virtual</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-3">This comprehensive workshop covers everything you need to know about fundraising for startups, from initial seed rounds to Series A funding.</p>
                <div className="bg-linkedin-card/30 rounded-lg p-3">
                  <h5 className="text-white text-sm font-medium mb-2">Learning Objectives:</h5>
                  <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
                    <li>Understand different types of funding rounds</li>
                    <li>Learn how to create compelling pitch decks</li>
                    <li>Master the art of investor presentations</li>
                    <li>Navigate term sheets and negotiations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-linkedin-card/50 rounded-xl border border-linkedin-border p-6 mb-6">
            <h3 className="text-lg font-bold text-white mb-4">Registration Form Preview</h3>
            <div className="space-y-4">
              <div className="bg-linkedin-card/30 rounded-lg p-4">
                <div className="space-y-3">
                  <div>
                    <label className="block text-gray-300 text-sm mb-1">Full Name</label>
                    <input type="text" className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-2 text-white" disabled />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm mb-1">Email Address</label>
                    <input type="email" className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-2 text-white" disabled />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm mb-1">Company/Organization</label>
                    <input type="text" className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-2 text-white" disabled />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm mb-1">What do you hope to learn from this workshop?</label>
                    <textarea className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-2 text-white" rows={3} disabled></textarea>
                  </div>
                </div>
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
                  Publish Workshop
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateNewWorkshop;