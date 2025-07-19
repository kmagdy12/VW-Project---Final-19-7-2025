import React, { useState } from 'react';
import { 
  Edit2, 
  Save, 
  Plus, 
  Trash2
} from 'lucide-react';

interface CommercialService {
  id: number;
  description: string;
  keyFeatures: string;
  targetAudience: string;
  keyStakeholders: string;
  uniqueSellingPoints: string;
  revenueStreams: string;
  pricing: string;
  pricingBenchmarks: string;
  paymentPlans: string;
  unitEconomics: string;
}

interface CommercialServicesInputsProps {
  services: CommercialService[];
  onUpdateServices: (services: CommercialService[]) => void;
}

const CommercialServicesInputs: React.FC<CommercialServicesInputsProps> = ({ 
  services, 
  onUpdateServices 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingServiceId, setEditingServiceId] = useState<number | null>(null);
  const [newService, setNewService] = useState<Partial<CommercialService>>({
    description: '',
    keyFeatures: '',
    targetAudience: '',
    keyStakeholders: '',
    uniqueSellingPoints: '',
    revenueStreams: '',
    pricing: '',
    pricingBenchmarks: '',
    paymentPlans: '',
    unitEconomics: ''
  });
  const [isAddingService, setIsAddingService] = useState(false);

  const handleAddService = () => {
    if (newService.description) {
      const service: CommercialService = {
        id: Date.now(),
        description: newService.description || '',
        keyFeatures: newService.keyFeatures || '',
        targetAudience: newService.targetAudience || '',
        keyStakeholders: newService.keyStakeholders || '',
        uniqueSellingPoints: newService.uniqueSellingPoints || '',
        revenueStreams: newService.revenueStreams || '',
        pricing: newService.pricing || '',
        pricingBenchmarks: newService.pricingBenchmarks || '',
        paymentPlans: newService.paymentPlans || '',
        unitEconomics: newService.unitEconomics || ''
      };
      
      onUpdateServices([...services, service]);
      setNewService({
        description: '',
        keyFeatures: '',
        targetAudience: '',
        keyStakeholders: '',
        uniqueSellingPoints: '',
        revenueStreams: '',
        pricing: '',
        pricingBenchmarks: '',
        paymentPlans: '',
        unitEconomics: ''
      });
      setIsAddingService(false);
    }
  };

  const handleEditService = (service: CommercialService) => {
    setEditingServiceId(service.id);
    setNewService({...service});
  };

  const handleSaveEdit = () => {
    if (editingServiceId && newService.description) {
      const updatedServices = services.map(service => 
        service.id === editingServiceId 
          ? {
              ...service,
              description: newService.description || service.description,
              keyFeatures: newService.keyFeatures || service.keyFeatures,
              targetAudience: newService.targetAudience || service.targetAudience,
              keyStakeholders: newService.keyStakeholders || service.keyStakeholders,
              uniqueSellingPoints: newService.uniqueSellingPoints || service.uniqueSellingPoints,
              revenueStreams: newService.revenueStreams || service.revenueStreams,
              pricing: newService.pricing || service.pricing,
              pricingBenchmarks: newService.pricingBenchmarks || service.pricingBenchmarks,
              paymentPlans: newService.paymentPlans || service.paymentPlans,
              unitEconomics: newService.unitEconomics || service.unitEconomics
            }
          : service
      );
      
      onUpdateServices(updatedServices);
      setEditingServiceId(null);
      setNewService({
        description: '',
        keyFeatures: '',
        targetAudience: '',
        keyStakeholders: '',
        uniqueSellingPoints: '',
        revenueStreams: '',
        pricing: '',
        pricingBenchmarks: '',
        paymentPlans: '',
        unitEconomics: ''
      });
    }
  };

  const handleRemoveService = (id: number) => {
    onUpdateServices(services.filter(service => service.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-white">Commercial Services</h3>
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
        Define the commercial services and revenue model for your business. This will guide your pricing strategy and revenue generation.
      </p>
      
      {/* Services List */}
      <div className="space-y-4">
        {services.length === 0 && !isAddingService && (
          <div className="bg-linkedin-card/30 rounded-lg p-6 text-center">
            <p className="text-gray-400 text-sm">No commercial services defined yet. Click the button below to add a service.</p>
          </div>
        )}
        
        {services.map((service) => (
          <div 
            key={service.id} 
            className={`bg-linkedin-card/30 rounded-lg p-4 ${
              editingServiceId === service.id ? 'border border-linkedin-light' : ''
            }`}
          >
            {editingServiceId === service.id ? (
              <div className="space-y-3">
                <div>
                  <label className="block text-linkedin-light text-xs mb-1">Service Description</label>
                  <textarea
                    value={newService.description}
                    onChange={(e) => setNewService({...newService, description: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                    rows={2}
                    placeholder="Describe the service..."
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-linkedin-light text-xs mb-1">Key Features</label>
                    <textarea
                      value={newService.keyFeatures}
                      onChange={(e) => setNewService({...newService, keyFeatures: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                      rows={2}
                      placeholder="List key features..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-linkedin-light text-xs mb-1">Target Audience</label>
                    <textarea
                      value={newService.targetAudience}
                      onChange={(e) => setNewService({...newService, targetAudience: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                      rows={2}
                      placeholder="Define target audience..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-linkedin-light text-xs mb-1">Key Stakeholders</label>
                    <textarea
                      value={newService.keyStakeholders}
                      onChange={(e) => setNewService({...newService, keyStakeholders: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                      rows={2}
                      placeholder="List key stakeholders..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-linkedin-light text-xs mb-1">Unique Selling Points</label>
                    <textarea
                      value={newService.uniqueSellingPoints}
                      onChange={(e) => setNewService({...newService, uniqueSellingPoints: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                      rows={2}
                      placeholder="Define unique selling points..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-linkedin-light text-xs mb-1">Revenue Streams</label>
                    <textarea
                      value={newService.revenueStreams}
                      onChange={(e) => setNewService({...newService, revenueStreams: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                      rows={2}
                      placeholder="Define revenue streams..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-linkedin-light text-xs mb-1">Pricing</label>
                    <textarea
                      value={newService.pricing}
                      onChange={(e) => setNewService({...newService, pricing: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                      rows={2}
                      placeholder="Define pricing strategy..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-linkedin-light text-xs mb-1">Pricing Benchmarks</label>
                    <textarea
                      value={newService.pricingBenchmarks}
                      onChange={(e) => setNewService({...newService, pricingBenchmarks: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                      rows={2}
                      placeholder="Define pricing benchmarks..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-linkedin-light text-xs mb-1">Payment Plans</label>
                    <textarea
                      value={newService.paymentPlans}
                      onChange={(e) => setNewService({...newService, paymentPlans: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                      rows={2}
                      placeholder="Define payment plans..."
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-linkedin-light text-xs mb-1">Unit Economics</label>
                  <textarea
                    value={newService.unitEconomics}
                    onChange={(e) => setNewService({...newService, unitEconomics: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                    rows={2}
                    placeholder="Define unit economics..."
                  />
                </div>
                
                <div className="flex items-center justify-end space-x-2 pt-2">
                  <button
                    onClick={() => {
                      setEditingServiceId(null);
                      setNewService({
                        description: '',
                        keyFeatures: '',
                        targetAudience: '',
                        keyStakeholders: '',
                        uniqueSellingPoints: '',
                        revenueStreams: '',
                        pricing: '',
                        pricingBenchmarks: '',
                        paymentPlans: '',
                        unitEconomics: ''
                      });
                    }}
                    className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveEdit}
                    className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs flex items-center space-x-1"
                  >
                    <Save className="w-3 h-3" />
                    <span>Save</span>
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-medium text-sm">{service.description}</h4>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleEditService(service)}
                      className="p-1 text-gray-400 hover:text-white transition-colors"
                    >
                      <Edit2 className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => handleRemoveService(service.id)}
                      className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <h5 className="text-linkedin-light text-xs font-medium mb-1">Key Features</h5>
                    <p className="text-gray-300 text-xs">{service.keyFeatures || "Not defined yet."}</p>
                  </div>
                  
                  <div>
                    <h5 className="text-linkedin-light text-xs font-medium mb-1">Target Audience</h5>
                    <p className="text-gray-300 text-xs">{service.targetAudience || "Not defined yet."}</p>
                  </div>
                  
                  <div>
                    <h5 className="text-linkedin-light text-xs font-medium mb-1">Key Stakeholders</h5>
                    <p className="text-gray-300 text-xs">{service.keyStakeholders || "Not defined yet."}</p>
                  </div>
                  
                  <div>
                    <h5 className="text-linkedin-light text-xs font-medium mb-1">Unique Selling Points</h5>
                    <p className="text-gray-300 text-xs">{service.uniqueSellingPoints || "Not defined yet."}</p>
                  </div>
                  
                  <div>
                    <h5 className="text-linkedin-light text-xs font-medium mb-1">Revenue Streams</h5>
                    <p className="text-gray-300 text-xs">{service.revenueStreams || "Not defined yet."}</p>
                  </div>
                  
                  <div>
                    <h5 className="text-linkedin-light text-xs font-medium mb-1">Pricing</h5>
                    <p className="text-gray-300 text-xs">{service.pricing || "Not defined yet."}</p>
                  </div>
                  
                  <div>
                    <h5 className="text-linkedin-light text-xs font-medium mb-1">Pricing Benchmarks</h5>
                    <p className="text-gray-300 text-xs">{service.pricingBenchmarks || "Not defined yet."}</p>
                  </div>
                  
                  <div>
                    <h5 className="text-linkedin-light text-xs font-medium mb-1">Payment Plans</h5>
                    <p className="text-gray-300 text-xs">{service.paymentPlans || "Not defined yet."}</p>
                  </div>
                </div>
                
                <div className="mt-3">
                  <h5 className="text-linkedin-light text-xs font-medium mb-1">Unit Economics</h5>
                  <p className="text-gray-300 text-xs">{service.unitEconomics || "Not defined yet."}</p>
                </div>
              </div>
            )}
          </div>
        ))}
        
        {/* Add New Service Form */}
        {isAddingService && (
          <div className="bg-linkedin-card/30 rounded-lg p-4 border border-linkedin-light">
            <div className="space-y-3">
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Service Description</label>
                <textarea
                  value={newService.description}
                  onChange={(e) => setNewService({...newService, description: e.target.value})}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Describe the service..."
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-linkedin-light text-xs mb-1">Key Features</label>
                  <textarea
                    value={newService.keyFeatures}
                    onChange={(e) => setNewService({...newService, keyFeatures: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                    rows={2}
                    placeholder="List key features..."
                  />
                </div>
                
                <div>
                  <label className="block text-linkedin-light text-xs mb-1">Target Audience</label>
                  <textarea
                    value={newService.targetAudience}
                    onChange={(e) => setNewService({...newService, targetAudience: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                    rows={2}
                    placeholder="Define target audience..."
                  />
                </div>
                
                <div>
                  <label className="block text-linkedin-light text-xs mb-1">Key Stakeholders</label>
                  <textarea
                    value={newService.keyStakeholders}
                    onChange={(e) => setNewService({...newService, keyStakeholders: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                    rows={2}
                    placeholder="List key stakeholders..."
                  />
                </div>
                
                <div>
                  <label className="block text-linkedin-light text-xs mb-1">Unique Selling Points</label>
                  <textarea
                    value={newService.uniqueSellingPoints}
                    onChange={(e) => setNewService({...newService, uniqueSellingPoints: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                    rows={2}
                    placeholder="Define unique selling points..."
                  />
                </div>
                
                <div>
                  <label className="block text-linkedin-light text-xs mb-1">Revenue Streams</label>
                  <textarea
                    value={newService.revenueStreams}
                    onChange={(e) => setNewService({...newService, revenueStreams: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                    rows={2}
                    placeholder="Define revenue streams..."
                  />
                </div>
                
                <div>
                  <label className="block text-linkedin-light text-xs mb-1">Pricing</label>
                  <textarea
                    value={newService.pricing}
                    onChange={(e) => setNewService({...newService, pricing: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                    rows={2}
                    placeholder="Define pricing strategy..."
                  />
                </div>
                
                <div>
                  <label className="block text-linkedin-light text-xs mb-1">Pricing Benchmarks</label>
                  <textarea
                    value={newService.pricingBenchmarks}
                    onChange={(e) => setNewService({...newService, pricingBenchmarks: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                    rows={2}
                    placeholder="Define pricing benchmarks..."
                  />
                </div>
                
                <div>
                  <label className="block text-linkedin-light text-xs mb-1">Payment Plans</label>
                  <textarea
                    value={newService.paymentPlans}
                    onChange={(e) => setNewService({...newService, paymentPlans: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                    rows={2}
                    placeholder="Define payment plans..."
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Unit Economics</label>
                <textarea
                  value={newService.unitEconomics}
                  onChange={(e) => setNewService({...newService, unitEconomics: e.target.value})}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Define unit economics..."
                />
              </div>
              
              <div className="flex items-center justify-end space-x-2 pt-2">
                <button
                  onClick={() => {
                    setIsAddingService(false);
                    setNewService({
                      description: '',
                      keyFeatures: '',
                      targetAudience: '',
                      keyStakeholders: '',
                      uniqueSellingPoints: '',
                      revenueStreams: '',
                      pricing: '',
                      pricingBenchmarks: '',
                      paymentPlans: '',
                      unitEconomics: ''
                    });
                  }}
                  className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddService}
                  className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs flex items-center space-x-1"
                >
                  <Save className="w-3 h-3" />
                  <span>Save</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Add Service Button */}
      {!isAddingService && (
        <button
          onClick={() => setIsAddingService(true)}
          className="w-full flex items-center justify-center space-x-2 bg-linkedin-card/30 hover:bg-linkedin-card/50 border border-dashed border-linkedin-border hover:border-linkedin text-white px-4 py-3 rounded-lg transition-all text-xs"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Commercial Service</span>
        </button>
      )}
    </div>
  );
};

export default CommercialServicesInputs;