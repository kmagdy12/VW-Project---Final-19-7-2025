import React, { useState } from 'react';
import { 
  Save, 
  ArrowRight,
  ArrowLeft,
  Edit2,
  Upload,
  Layers
} from 'lucide-react';

interface DigitalApplications {
  websiteElements: string;
  mobileAppAssets: string;
  socialMediaTemplates: string;
  emailTemplates: string;
  digitalAdvertising: string;
  platformInterface: string;
}

interface PrintApplications {
  businessCards: string;
  letterheads: string;
  brochures: string;
  presentationTemplates: string;
  conferenceMaterials: string;
  merchandise: string;
}

interface BrandApplicationsData {
  digitalApplications: DigitalApplications;
  printApplications: PrintApplications;
}

interface BrandApplicationsInputsProps {
  brandApplicationsData: BrandApplicationsData;
  onUpdateBrandApplications: (data: BrandApplicationsData) => void;
  onContinue: () => void;
  onBack: () => void;
  onSkip: () => void;
  onSaveDraft: () => void;
  onExport: () => void;
}

const BrandApplicationsInputs: React.FC<BrandApplicationsInputsProps> = ({ 
  brandApplicationsData, 
  onUpdateBrandApplications, 
  onContinue, 
  onBack,
  onSkip, 
  onSaveDraft,
  onExport
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(brandApplicationsData);
  const [activeTab, setActiveTab] = useState<'digital' | 'print'>('digital');

  const handleSave = () => {
    onUpdateBrandApplications(editedData);
    setIsEditing(false);
  };

  return (
    <div className="p-6 h-full overflow-y-auto space-y-4 text-sm">
      <h3 className="text-base font-semibold text-white mb-3 flex items-center">
        <Layers className="w-5 h-5 text-linkedin-light mr-2" />
        Brand Applications
      </h3>
      
      <p className="text-gray-300 text-xs mb-4">
        Define how your brand will be applied across digital and print materials. This will ensure consistent brand representation across all touchpoints.
      </p>
      
      {/* Tabs */}
      <div className="flex items-center space-x-2 mb-4">
        <button
          onClick={() => setActiveTab('digital')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeTab === 'digital'
              ? 'bg-linkedin text-white'
              : 'bg-linkedin-card/50 text-gray-300 hover:text-white hover:bg-linkedin-card'
          }`}
        >
          Digital Applications
        </button>
        <button
          onClick={() => setActiveTab('print')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeTab === 'print'
              ? 'bg-linkedin text-white'
              : 'bg-linkedin-card/50 text-gray-300 hover:text-white hover:bg-linkedin-card'
          }`}
        >
          Print Applications
        </button>
      </div>
      
      <div className="bg-linkedin-card/30 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-white font-medium text-xs">
            {activeTab === 'digital' ? 'Digital Applications' : 'Print Applications'}
          </h4>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="p-1 text-gray-400 hover:text-white transition-colors"
            >
              <Edit2 className="w-3 h-3" />
            </button>
          )}
        </div>
        
        {activeTab === 'digital' && (
          isEditing ? (
            <div className="space-y-3">
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Website Elements</label>
                <textarea
                  value={editedData.digitalApplications.websiteElements}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    digitalApplications: { ...editedData.digitalApplications, websiteElements: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Describe website elements..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Mobile App Assets</label>
                <textarea
                  value={editedData.digitalApplications.mobileAppAssets}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    digitalApplications: { ...editedData.digitalApplications, mobileAppAssets: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Describe mobile app assets..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Social Media Templates</label>
                <textarea
                  value={editedData.digitalApplications.socialMediaTemplates}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    digitalApplications: { ...editedData.digitalApplications, socialMediaTemplates: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Describe social media templates..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Email Templates</label>
                <textarea
                  value={editedData.digitalApplications.emailTemplates}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    digitalApplications: { ...editedData.digitalApplications, emailTemplates: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Describe email templates..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Digital Advertising Formats</label>
                <textarea
                  value={editedData.digitalApplications.digitalAdvertising}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    digitalApplications: { ...editedData.digitalApplications, digitalAdvertising: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Describe digital advertising formats..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Platform Interface Elements</label>
                <textarea
                  value={editedData.digitalApplications.platformInterface}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    digitalApplications: { ...editedData.digitalApplications, platformInterface: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Describe platform interface elements..."
                />
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Website Elements</h5>
                <p className="text-gray-300 text-xs">{brandApplicationsData.digitalApplications.websiteElements || "Not defined yet."}</p>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Mobile App Assets</h5>
                <p className="text-gray-300 text-xs">{brandApplicationsData.digitalApplications.mobileAppAssets || "Not defined yet."}</p>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Social Media Templates</h5>
                <p className="text-gray-300 text-xs">{brandApplicationsData.digitalApplications.socialMediaTemplates || "Not defined yet."}</p>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Email Templates</h5>
                <p className="text-gray-300 text-xs">{brandApplicationsData.digitalApplications.emailTemplates || "Not defined yet."}</p>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Digital Advertising Formats</h5>
                <p className="text-gray-300 text-xs">{brandApplicationsData.digitalApplications.digitalAdvertising || "Not defined yet."}</p>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Platform Interface Elements</h5>
                <p className="text-gray-300 text-xs">{brandApplicationsData.digitalApplications.platformInterface || "Not defined yet."}</p>
              </div>
            </div>
          )
        )}
        
        {activeTab === 'print' && (
          isEditing ? (
            <div className="space-y-3">
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Business Cards</label>
                <textarea
                  value={editedData.printApplications.businessCards}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    printApplications: { ...editedData.printApplications, businessCards: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Describe business card design..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Letterheads</label>
                <textarea
                  value={editedData.printApplications.letterheads}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    printApplications: { ...editedData.printApplications, letterheads: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Describe letterhead design..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Brochures/Flyers</label>
                <textarea
                  value={editedData.printApplications.brochures}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    printApplications: { ...editedData.printApplications, brochures: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Describe brochure/flyer design..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Presentation Templates</label>
                <textarea
                  value={editedData.printApplications.presentationTemplates}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    printApplications: { ...editedData.printApplications, presentationTemplates: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Describe presentation template design..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Conference Materials</label>
                <textarea
                  value={editedData.printApplications.conferenceMaterials}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    printApplications: { ...editedData.printApplications, conferenceMaterials: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Describe conference material design..."
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Merchandise</label>
                <textarea
                  value={editedData.printApplications.merchandise}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    printApplications: { ...editedData.printApplications, merchandise: e.target.value }
                  })}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Describe merchandise design..."
                />
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Business Cards</h5>
                <p className="text-gray-300 text-xs">{brandApplicationsData.printApplications.businessCards || "Not defined yet."}</p>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Letterheads</h5>
                <p className="text-gray-300 text-xs">{brandApplicationsData.printApplications.letterheads || "Not defined yet."}</p>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Brochures/Flyers</h5>
                <p className="text-gray-300 text-xs">{brandApplicationsData.printApplications.brochures || "Not defined yet."}</p>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Presentation Templates</h5>
                <p className="text-gray-300 text-xs">{brandApplicationsData.printApplications.presentationTemplates || "Not defined yet."}</p>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Conference Materials</h5>
                <p className="text-gray-300 text-xs">{brandApplicationsData.printApplications.conferenceMaterials || "Not defined yet."}</p>
              </div>
              
              <div className="bg-linkedin-card/50 rounded-lg p-3">
                <h5 className="text-linkedin-light text-xs font-medium mb-1">Merchandise</h5>
                <p className="text-gray-300 text-xs">{brandApplicationsData.printApplications.merchandise || "Not defined yet."}</p>
              </div>
            </div>
          )
        )}
        
        {isEditing && (
          <div className="flex items-center justify-end space-x-2 pt-4 mt-4 border-t border-linkedin-border/30">
            <button
              onClick={() => {
                setIsEditing(false);
                setEditedData(brandApplicationsData);
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
        )}
      </div>
      
      {/* Upload Existing Brand Applications */}
      <div className="bg-linkedin-card/30 rounded-lg p-4 mb-4">
        <h4 className="text-white font-medium text-xs mb-3">Upload Existing Brand Applications</h4>
        <button
          className="w-full border-2 border-dashed border-linkedin-border rounded-lg p-6 flex flex-col items-center justify-center hover:border-linkedin transition-colors"
        >
          <Upload className="w-10 h-10 text-linkedin-light mb-3" />
          <p className="text-white font-medium mb-1">Upload Brand Applications</p>
          <p className="text-gray-400 text-xs">Drag & drop files or click to browse</p>
        </button>
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
            <Save className="w-3 h-3" />
            <span>Export Brand Manual</span>
          </button>
          <button
            onClick={onContinue}
            className="flex items-center space-x-2 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-4 py-1.5 rounded-lg transition-all text-xs"
          >
            <span>Complete Brand Creation</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandApplicationsInputs;