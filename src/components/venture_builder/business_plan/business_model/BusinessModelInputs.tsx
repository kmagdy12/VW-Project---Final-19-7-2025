import React, { useState } from 'react';
import { 
  Users, 
  Package, 
  Settings, 
  DollarSign,
  Save, 
  ArrowRight,
  ArrowLeft,
  Download,
  Edit2
} from 'lucide-react';

interface BusinessModelData {
  who: {
    demographic: string;
    geographic: string;
    psychographic: string;
    behavioral: string;
  };
  what: {
    offering: string;
    valuePropositions: string;
    competitiveAdvantages: string;
  };
  how: {
    resourcesCompetencies: string;
    keyActivities: string;
    partnersNetwork: string;
    channels: string;
  };
  why: {
    revenueStreams: string;
    unitEconomics: string;
    costStructure: string;
  };
}

interface BusinessModelInputsProps {
  businessModelData: BusinessModelData;
  onUpdateBusinessModel: (data: BusinessModelData) => void;
  onContinue: () => void;
  onBack: () => void;
  onSkip: () => void;
  onSaveDraft: () => void;
  onExport: () => void;
}

const BusinessModelInputs: React.FC<BusinessModelInputsProps> = ({ 
  businessModelData, 
  onUpdateBusinessModel, 
  onContinue, 
  onBack, 
  onSkip, 
  onSaveDraft,
  onExport
}) => {
  const [activeTab, setActiveTab] = useState('who');
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(businessModelData);

  const tabs = [
    { id: 'who', label: 'WHO', icon: Users },
    { id: 'what', label: 'WHAT', icon: Package },
    { id: 'how', label: 'HOW', icon: Settings },
    { id: 'why', label: 'WHY', icon: DollarSign }
  ];

  const handleSave = () => {
    onUpdateBusinessModel(editedData);
    setIsEditing(false);
  };

  const renderWhoTab = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-white flex items-center">
          <Users className="w-5 h-5 text-linkedin-light mr-2" />
          Target Customer Segment
        </h3>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="p-1 text-gray-400 hover:text-white transition-colors"
          >
            <Edit2 className="w-4 h-4" />
          </button>
        )}
      </div>
      
      <p className="text-gray-300 text-xs mb-4">
        Define who your target customers are, including their demographic, geographic, psychographic, and behavioral characteristics.
      </p>
      
      {isEditing ? (
        <div className="space-y-4">
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Demographic</label>
            <textarea
              value={editedData.who.demographic}
              onChange={(e) => setEditedData({
                ...editedData,
                who: { ...editedData.who, demographic: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={3}
              placeholder="B2C: Age, gender, SEC, Occupation
B2B: Company stage, size, age, industry, sales volume"
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Geographic</label>
            <textarea
              value={editedData.who.geographic}
              onChange={(e) => setEditedData({
                ...editedData,
                who: { ...editedData.who, geographic: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={3}
              placeholder="B2C / B2B: Country, City, Neighborhood / Area"
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Psychographic</label>
            <textarea
              value={editedData.who.psychographic}
              onChange={(e) => setEditedData({
                ...editedData,
                who: { ...editedData.who, psychographic: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={3}
              placeholder="B2C: Personality, Lifestyle, Interests, Values, Challenges & concerns
B2B: Values, Interests, Directions, Top activities, Challenges & concerns"
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Behavioral</label>
            <textarea
              value={editedData.who.behavioral}
              onChange={(e) => setEditedData({
                ...editedData,
                who: { ...editedData.who, behavioral: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={3}
              placeholder="B2C / B2B: Purchasing/spending, Buying stage, Channel preference, Payment preference, Day/Time preference, Decision making factors"
            />
          </div>
          
          <div className="flex items-center justify-end space-x-2 pt-2">
            <button
              onClick={() => {
                setIsEditing(false);
                setEditedData(businessModelData);
              }}
              className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs flex items-center space-x-1"
            >
              <Save className="w-3 h-3" />
              <span>Save</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-linkedin-light text-xs font-medium mb-2">Demographic</h4>
            <p className="text-gray-300 text-xs whitespace-pre-line">{businessModelData.who.demographic || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-linkedin-light text-xs font-medium mb-2">Geographic</h4>
            <p className="text-gray-300 text-xs whitespace-pre-line">{businessModelData.who.geographic || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-linkedin-light text-xs font-medium mb-2">Psychographic</h4>
            <p className="text-gray-300 text-xs whitespace-pre-line">{businessModelData.who.psychographic || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-linkedin-light text-xs font-medium mb-2">Behavioral</h4>
            <p className="text-gray-300 text-xs whitespace-pre-line">{businessModelData.who.behavioral || "Not defined yet."}</p>
          </div>
        </div>
      )}
    </div>
  );

  const renderWhatTab = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-white flex items-center">
          <Package className="w-5 h-5 text-linkedin-light mr-2" />
          Offering & Value Proposition
        </h3>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="p-1 text-gray-400 hover:text-white transition-colors"
          >
            <Edit2 className="w-4 h-4" />
          </button>
        )}
      </div>
      
      <p className="text-gray-300 text-xs mb-4">
        Define what you offer to your customers, including your products/services, value propositions, and competitive advantages.
      </p>
      
      {isEditing ? (
        <div className="space-y-4">
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Offering</label>
            <textarea
              value={editedData.what.offering}
              onChange={(e) => setEditedData({
                ...editedData,
                what: { ...editedData.what, offering: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={3}
              placeholder="- Service offerings
- Product offerings"
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Value Propositions</label>
            <textarea
              value={editedData.what.valuePropositions}
              onChange={(e) => setEditedData({
                ...editedData,
                what: { ...editedData.what, valuePropositions: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={3}
              placeholder="- Functional values
- Financial values
- Social values
- Personal values"
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Competitive Advantages</label>
            <textarea
              value={editedData.what.competitiveAdvantages}
              onChange={(e) => setEditedData({
                ...editedData,
                what: { ...editedData.what, competitiveAdvantages: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={3}
              placeholder="- Price
- Quality
- Convenience"
            />
          </div>
          
          <div className="flex items-center justify-end space-x-2 pt-2">
            <button
              onClick={() => {
                setIsEditing(false);
                setEditedData(businessModelData);
              }}
              className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs flex items-center space-x-1"
            >
              <Save className="w-3 h-3" />
              <span>Save</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-linkedin-light text-xs font-medium mb-2">Offering</h4>
            <p className="text-gray-300 text-xs whitespace-pre-line">{businessModelData.what.offering || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-linkedin-light text-xs font-medium mb-2">Value Propositions</h4>
            <p className="text-gray-300 text-xs whitespace-pre-line">{businessModelData.what.valuePropositions || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-linkedin-light text-xs font-medium mb-2">Competitive Advantages</h4>
            <p className="text-gray-300 text-xs whitespace-pre-line">{businessModelData.what.competitiveAdvantages || "Not defined yet."}</p>
          </div>
        </div>
      )}
    </div>
  );

  const renderHowTab = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-white flex items-center">
          <Settings className="w-5 h-5 text-linkedin-light mr-2" />
          Operating Model
        </h3>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="p-1 text-gray-400 hover:text-white transition-colors"
          >
            <Edit2 className="w-4 h-4" />
          </button>
        )}
      </div>
      
      <p className="text-gray-300 text-xs mb-4">
        Define how your value proposition is created, including resources, activities, partners, and channels.
      </p>
      
      {isEditing ? (
        <div className="space-y-4">
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Resources & Competencies</label>
            <textarea
              value={editedData.how.resourcesCompetencies}
              onChange={(e) => setEditedData({
                ...editedData,
                how: { ...editedData.how, resourcesCompetencies: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={3}
              placeholder="- Physical
- Intellectual
- Human
- Technological
- Financial"
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Key Activities & Processes</label>
            <textarea
              value={editedData.how.keyActivities}
              onChange={(e) => setEditedData({
                ...editedData,
                how: { ...editedData.how, keyActivities: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={3}
              placeholder="- Operations
- Production / development
- Marketing
- Sales
- Distribution"
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Partners & Network</label>
            <textarea
              value={editedData.how.partnersNetwork}
              onChange={(e) => setEditedData({
                ...editedData,
                how: { ...editedData.how, partnersNetwork: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={3}
              placeholder="- Organization level
- Operations level
- Marketing & sales level
- Production / development level"
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Channels & Options</label>
            <textarea
              value={editedData.how.channels}
              onChange={(e) => setEditedData({
                ...editedData,
                how: { ...editedData.how, channels: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={3}
              placeholder="- Service delivery channels
- Payment channels
- Communication channels"
            />
          </div>
          
          <div className="flex items-center justify-end space-x-2 pt-2">
            <button
              onClick={() => {
                setIsEditing(false);
                setEditedData(businessModelData);
              }}
              className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs flex items-center space-x-1"
            >
              <Save className="w-3 h-3" />
              <span>Save</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-linkedin-light text-xs font-medium mb-2">Resources & Competencies</h4>
            <p className="text-gray-300 text-xs whitespace-pre-line">{businessModelData.how.resourcesCompetencies || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-linkedin-light text-xs font-medium mb-2">Key Activities & Processes</h4>
            <p className="text-gray-300 text-xs whitespace-pre-line">{businessModelData.how.keyActivities || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-linkedin-light text-xs font-medium mb-2">Partners & Network</h4>
            <p className="text-gray-300 text-xs whitespace-pre-line">{businessModelData.how.partnersNetwork || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-linkedin-light text-xs font-medium mb-2">Channels & Options</h4>
            <p className="text-gray-300 text-xs whitespace-pre-line">{businessModelData.how.channels || "Not defined yet."}</p>
          </div>
        </div>
      )}
    </div>
  );

  const renderWhyTab = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-white flex items-center">
          <DollarSign className="w-5 h-5 text-linkedin-light mr-2" />
          Revenue Model & Profitability
        </h3>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="p-1 text-gray-400 hover:text-white transition-colors"
          >
            <Edit2 className="w-4 h-4" />
          </button>
        )}
      </div>
      
      <p className="text-gray-300 text-xs mb-4">
        Define why your business is worth it, including revenue streams, unit economics, and cost structure.
      </p>
      
      {isEditing ? (
        <div className="space-y-4">
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Revenue Streams</label>
            <textarea
              value={editedData.why.revenueStreams}
              onChange={(e) => setEditedData({
                ...editedData,
                why: { ...editedData.why, revenueStreams: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={3}
              placeholder="- Commission
- Markup
- Subscription
- Advertising
- Sponsorships"
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Unit Economics</label>
            <textarea
              value={editedData.why.unitEconomics}
              onChange={(e) => setEditedData({
                ...editedData,
                why: { ...editedData.why, unitEconomics: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={3}
              placeholder="- Materials / product
- Labor
- Packing
- Shipping & fulfillment
- Offers, referrals & discounts
- Sales commission
- Customs
- Returns"
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Cost Structure</label>
            <textarea
              value={editedData.why.costStructure}
              onChange={(e) => setEditedData({
                ...editedData,
                why: { ...editedData.why, costStructure: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={3}
              placeholder="- Salaries
- Operations
- Marketing
- Technology"
            />
          </div>
          
          <div className="flex items-center justify-end space-x-2 pt-2">
            <button
              onClick={() => {
                setIsEditing(false);
                setEditedData(businessModelData);
              }}
              className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs flex items-center space-x-1"
            >
              <Save className="w-3 h-3" />
              <span>Save</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-linkedin-light text-xs font-medium mb-2">Revenue Streams</h4>
            <p className="text-gray-300 text-xs whitespace-pre-line">{businessModelData.why.revenueStreams || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-linkedin-light text-xs font-medium mb-2">Unit Economics</h4>
            <p className="text-gray-300 text-xs whitespace-pre-line">{businessModelData.why.unitEconomics || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-4">
            <h4 className="text-linkedin-light text-xs font-medium mb-2">Cost Structure</h4>
            <p className="text-gray-300 text-xs whitespace-pre-line">{businessModelData.why.costStructure || "Not defined yet."}</p>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="p-6 h-full overflow-y-auto space-y-4 text-sm">
      {/* Tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-linkedin to-linkedin-light text-white'
                : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
      
      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === 'who' && renderWhoTab()}
        {activeTab === 'what' && renderWhatTab()}
        {activeTab === 'how' && renderHowTab()}
        {activeTab === 'why' && renderWhyTab()}
      </div>
      
      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-linkedin-border mt-4">
        <div className="flex items-center space-x-3">
          <button
            onClick={onBack}
            className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors text-xs"
          >
            <ArrowLeft className="w-3 h-3" />
            <span>Back</span>
          </button>
          <button
            onClick={onSkip}
            className="text-gray-400 hover:text-white transition-colors text-xs"
          >
            Skip for now
          </button>
          <button
            onClick={onSaveDraft}
            className="flex items-center space-x-2 bg-linkedin-card hover:bg-linkedin-card/70 text-white px-3 py-1.5 rounded-lg transition-colors text-xs"
          >
            <Save className="w-3 h-3" />
            <span>Save draft</span>
          </button>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={onExport}
            className="flex items-center space-x-2 bg-linkedin-card hover:bg-linkedin-card/70 text-white px-3 py-1.5 rounded-lg transition-colors text-xs"
          >
            <Download className="w-3 h-3" />
            <span>Export</span>
          </button>
          <button
            onClick={onContinue}
            className="flex items-center space-x-2 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-4 py-1.5 rounded-lg transition-all text-xs"
          >
            <span>Continue to Strategy Roadmap</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessModelInputs;