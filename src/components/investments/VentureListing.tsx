import React, { useState } from 'react';
import { 
  ArrowLeft,
  DollarSign,
  Users,
  Shield,
  FileText,
  Save,
  Send
} from 'lucide-react';

interface VentureListingProps {
  onSectionChange: (section: string) => void;
  selectedVentureId?: number; // Passed from PortfolioManagement
  venturesData?: any[];
}

const VentureListing: React.FC<VentureListingProps> = ({ 
  onSectionChange, 
  selectedVentureId,
  venturesData = []
}) => {
  const [activeListingTab, setActiveListingTab] = useState('offering-details');
  
  // Find the selected venture from venturesData
  const selectedVenture = venturesData.find(v => v.id === selectedVentureId) || venturesData[0] || {
    id: 1,
    companyName: 'Default Company',
    listingDetails: {
      numberOfShares: '1000',
      askingPrice: '$25.00',
      minimumPrice: '$22.50',
      saleType: 'all-or-nothing',
      priceType: 'fixed',
      saleTimeline: '30 days',
      minimumPurchase: '250 shares',
      preferredBuyerType: 'Institutional Investor',
      infoSharingLevel: 'Standard',
      confidentialityPreference: 'NDA Required'
    }
  };
  
  // Initialize listing data from selected venture or with defaults
  const [listingData, setListingData] = useState(selectedVenture.listingDetails || {
    numberOfShares: '1000',
    askingPrice: '$25.00',
    minimumPrice: '$22.50',
    saleType: 'all-or-nothing',
    priceType: 'fixed',
    saleTimeline: '30 days',
    minimumPurchase: '250 shares',
    preferredBuyerType: 'Institutional Investor',
    infoSharingLevel: 'Standard',
    confidentialityPreference: 'NDA Required'
  });

  const listingTabs = [
    { id: 'offering-details', label: 'Offering Details' },
    { id: 'sale-preference', label: 'Sale Preference' },
    { id: 'buyer-criteria', label: 'Buyer Criteria' },
    { id: 'disclosure-level', label: 'Disclosure Level' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setListingData({
      ...listingData,
      [field]: value
    });
  };

  const renderOfferingDetails = () => (
    <div className="space-y-6">
      <p className="text-gray-300 text-sm">Define the basic parameters of what you're selling and at what price.</p>
      
      <div className="space-y-4">
        <div>
          <label className="block text-gray-300 text-sm mb-2">Number of shares to sell</label>
          <input
            type="text"
            value={listingData.numberOfShares}
            onChange={(e) => handleInputChange('numberOfShares', e.target.value)}
            className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin"
          />
        </div>
        
        <div>
          <label className="block text-gray-300 text-sm mb-2">Asking price per share</label>
          <input
            type="text"
            value={listingData.askingPrice}
            onChange={(e) => handleInputChange('askingPrice', e.target.value)}
            className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin"
          />
        </div>
        
        <div>
          <label className="block text-gray-300 text-sm mb-2">Minimum acceptable price (reserve)</label>
          <input
            type="text"
            value={listingData.minimumPrice}
            onChange={(e) => handleInputChange('minimumPrice', e.target.value)}
            className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin"
          />
        </div>
      </div>
    </div>
  );

  const renderSalePreference = () => (
    <div className="space-y-6">
      <p className="text-gray-300 text-sm">Define how you want the transaction structured and executed.</p>
      
      <div className="space-y-4">
        <div>
          <label className="block text-gray-300 text-sm mb-2">Sale Type</label>
          <select
            value={listingData.saleType}
            onChange={(e) => handleInputChange('saleType', e.target.value)}
            className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin"
          >
            <option value="all-or-nothing" className="bg-slate-800">All-or-nothing</option>
            <option value="partial-allowed" className="bg-slate-800">Partial sale allowed</option>
          </select>
        </div>
        
        <div>
          <label className="block text-gray-300 text-sm mb-2">Price Type</label>
          <select
            value={listingData.priceType}
            onChange={(e) => handleInputChange('priceType', e.target.value)}
            className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin"
          >
            <option value="fixed" className="bg-slate-800">Fixed price</option>
            <option value="negotiable" className="bg-slate-800">Open to negotiation</option>
          </select>
        </div>
        
        <div>
          <label className="block text-gray-300 text-sm mb-2">Sale Timeline/Urgency</label>
          <select
            value={listingData.saleTimeline}
            onChange={(e) => handleInputChange('saleTimeline', e.target.value)}
            className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin"
          >
            <option value="15 days" className="bg-slate-800">15 days (Urgent)</option>
            <option value="30 days" className="bg-slate-800">30 days (Standard)</option>
            <option value="60 days" className="bg-slate-800">60 days (Relaxed)</option>
            <option value="90 days" className="bg-slate-800">90 days (No rush)</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderBuyerCriteria = () => (
    <div className="space-y-6">
      <p className="text-gray-300 text-sm">Define requirements and preferences for potential purchasers.</p>
      
      <div className="space-y-4">
        <div>
          <label className="block text-gray-300 text-sm mb-2">Minimum Purchase Size</label>
          <input
            type="text"
            value={listingData.minimumPurchase}
            onChange={(e) => handleInputChange('minimumPurchase', e.target.value)}
            className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin"
          />
        </div>
        
        <div>
          <label className="block text-gray-300 text-sm mb-2">Preferred Buyer Type</label>
          <select
            value={listingData.preferredBuyerType}
            onChange={(e) => handleInputChange('preferredBuyerType', e.target.value)}
            className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin"
          >
            <option value="Any Buyer" className="bg-slate-800">Any Buyer</option>
            <option value="Institutional Investor" className="bg-slate-800">Institutional Investor</option>
            <option value="Angel Investor" className="bg-slate-800">Angel Investor</option>
            <option value="Strategic Partner" className="bg-slate-800">Strategic Partner</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderDisclosureLevel = () => (
    <div className="space-y-6">
      <p className="text-gray-300 text-sm">Define information sharing and confidentiality settings for your listing.</p>
      
      <div className="space-y-4">
        <div>
          <label className="block text-gray-300 text-sm mb-2">Information Sharing Level</label>
          <select
            value={listingData.infoSharingLevel}
            onChange={(e) => handleInputChange('infoSharingLevel', e.target.value)}
            className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin"
          >
            <option value="Minimal" className="bg-slate-800">Minimal (Basic company info only)</option>
            <option value="Standard" className="bg-slate-800">Standard (Company info + basic financials)</option>
            <option value="Comprehensive" className="bg-slate-800">Comprehensive (Full disclosure)</option>
          </select>
        </div>
        
        <div>
          <label className="block text-gray-300 text-sm mb-2">Confidentiality Preferences</label>
          <select
            value={listingData.confidentialityPreference}
            onChange={(e) => handleInputChange('confidentialityPreference', e.target.value)}
            className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-linkedin"
          >
            <option value="No NDA" className="bg-slate-800">No NDA Required</option>
            <option value="NDA Required" className="bg-slate-800">NDA Required</option>
            <option value="Strict NDA" className="bg-slate-800">Strict NDA with Limited Access</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderListingContent = () => {
    switch (activeListingTab) {
      case 'offering-details':
        return renderOfferingDetails();
      case 'sale-preference':
        return renderSalePreference();
      case 'buyer-criteria':
        return renderBuyerCriteria();
      case 'disclosure-level':
        return renderDisclosureLevel();
      default:
        return renderOfferingDetails();
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">List in Secondary Market</h1>
        <p className="text-gray-300">Define listing criteria for selling {selectedVenture.companyName} equity in the secondary marketplace</p>
      </div>
        
      {/* Listing Tabs */}
      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
              <DollarSign className="w-5 h-5" />
              <span>Secondary Market Listing</span>
            </h3>
            
            <div className="flex items-center space-x-2 mb-6 overflow-x-auto">
              {listingTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveListingTab(tab.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                    activeListingTab === tab.id
                      ? 'bg-gradient-to-r from-linkedin to-linkedin-light text-white'
                      : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {renderListingContent()}
          </div>

          {/* Proceeding Buttons */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Next Steps</h3>
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-2 bg-linkedin-card hover:bg-linkedin-card/70 text-white px-6 py-2 rounded-lg transition-colors">
                  <Save className="w-4 h-4" />
                  <span>Save Draft</span>
                </button>
                <button className="flex items-center space-x-2 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-6 py-2 rounded-lg transition-all">
                  <Send className="w-4 h-4" />
                  <span>List Opportunity</span>
                </button>
              </div>
            </div>
          </div>
        </div>
  );
};

export default VentureListing;