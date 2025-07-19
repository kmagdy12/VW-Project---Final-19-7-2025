import React, { useState } from 'react';
import { 
  Edit2, 
  Save, 
  Plus, 
  Trash2
} from 'lucide-react';

interface RevenueStream {
  id: number;
  name: string;
  description: string;
  pricing: string;
  pricingModel: string;
  pricingTiers: string;
  billingFrequency: string;
  discountStrategy: string;
}

interface RevenueModelInputsProps {
  revenueStreams: RevenueStream[];
  onUpdateRevenueStreams: (streams: RevenueStream[]) => void;
}

const RevenueModelInputs: React.FC<RevenueModelInputsProps> = ({ 
  revenueStreams, 
  onUpdateRevenueStreams 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingStreamId, setEditingStreamId] = useState<number | null>(null);
  const [newStream, setNewStream] = useState<Partial<RevenueStream>>({
    name: '',
    description: '',
    pricing: '',
    pricingModel: '',
    pricingTiers: '',
    billingFrequency: '',
    discountStrategy: ''
  });
  const [isAddingStream, setIsAddingStream] = useState(false);

  const handleAddStream = () => {
    if (newStream.name) {
      const stream: RevenueStream = {
        id: Date.now(),
        name: newStream.name,
        description: newStream.description || '',
        pricing: newStream.pricing || '',
        pricingModel: newStream.pricingModel || '',
        pricingTiers: newStream.pricingTiers || '',
        billingFrequency: newStream.billingFrequency || '',
        discountStrategy: newStream.discountStrategy || ''
      };
      
      onUpdateRevenueStreams([...revenueStreams, stream]);
      setNewStream({
        name: '',
        description: '',
        pricing: '',
        pricingModel: '',
        pricingTiers: '',
        billingFrequency: '',
        discountStrategy: ''
      });
      setIsAddingStream(false);
    }
  };

  const handleEditStream = (stream: RevenueStream) => {
    setEditingStreamId(stream.id);
    setNewStream({...stream});
  };

  const handleSaveEdit = () => {
    if (editingStreamId && newStream.name) {
      const updatedStreams = revenueStreams.map(stream => 
        stream.id === editingStreamId 
          ? {
              ...stream,
              name: newStream.name || stream.name,
              description: newStream.description || stream.description,
              pricing: newStream.pricing || stream.pricing,
              pricingModel: newStream.pricingModel || stream.pricingModel,
              pricingTiers: newStream.pricingTiers || stream.pricingTiers,
              billingFrequency: newStream.billingFrequency || stream.billingFrequency,
              discountStrategy: newStream.discountStrategy || stream.discountStrategy
            }
          : stream
      );
      
      onUpdateRevenueStreams(updatedStreams);
      setEditingStreamId(null);
      setNewStream({
        name: '',
        description: '',
        pricing: '',
        pricingModel: '',
        pricingTiers: '',
        billingFrequency: '',
        discountStrategy: ''
      });
    }
  };

  const handleRemoveStream = (id: number) => {
    onUpdateRevenueStreams(revenueStreams.filter(stream => stream.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-white">Revenue Model</h3>
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
        Define your revenue streams and pricing strategy. This will guide your revenue generation and financial projections.
      </p>
      
      {/* Revenue Streams */}
      <div className="space-y-4">
        {revenueStreams.length === 0 && !isAddingStream && (
          <div className="bg-linkedin-card/30 rounded-lg p-6 text-center">
            <p className="text-gray-400 text-sm">No revenue streams defined yet. Click the button below to add a revenue stream.</p>
          </div>
        )}
        
        {revenueStreams.map((stream) => (
          <div 
            key={stream.id} 
            className={`bg-linkedin-card/30 rounded-lg p-4 ${
              editingStreamId === stream.id ? 'border border-linkedin-light' : ''
            }`}
          >
            {editingStreamId === stream.id ? (
              <div className="space-y-3">
                <div>
                  <label className="block text-linkedin-light text-xs mb-1">Revenue Stream Name</label>
                  <input
                    type="text"
                    value={newStream.name}
                    onChange={(e) => setNewStream({...newStream, name: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                    placeholder="e.g., Subscription, Transaction Fees, Value-Added Services"
                  />
                </div>
                
                <div>
                  <label className="block text-linkedin-light text-xs mb-1">Description</label>
                  <textarea
                    value={newStream.description}
                    onChange={(e) => setNewStream({...newStream, description: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                    rows={2}
                    placeholder="Describe this revenue stream..."
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-linkedin-light text-xs mb-1">Pricing</label>
                    <textarea
                      value={newStream.pricing}
                      onChange={(e) => setNewStream({...newStream, pricing: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                      rows={2}
                      placeholder="Define pricing strategy..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-linkedin-light text-xs mb-1">Pricing Model</label>
                    <textarea
                      value={newStream.pricingModel}
                      onChange={(e) => setNewStream({...newStream, pricingModel: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                      rows={2}
                      placeholder="Define pricing model (e.g., flat rate, usage-based, tiered)..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-linkedin-light text-xs mb-1">Pricing Tiers</label>
                    <textarea
                      value={newStream.pricingTiers}
                      onChange={(e) => setNewStream({...newStream, pricingTiers: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                      rows={2}
                      placeholder="Define pricing tiers if applicable..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-linkedin-light text-xs mb-1">Billing Frequency</label>
                    <textarea
                      value={newStream.billingFrequency}
                      onChange={(e) => setNewStream({...newStream, billingFrequency: e.target.value})}
                      className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                      rows={2}
                      placeholder="Define billing frequency (e.g., monthly, annual, one-time)..."
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-linkedin-light text-xs mb-1">Discount Strategy</label>
                  <textarea
                    value={newStream.discountStrategy}
                    onChange={(e) => setNewStream({...newStream, discountStrategy: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                    rows={2}
                    placeholder="Define discount strategy if applicable..."
                  />
                </div>
                
                <div className="flex items-center justify-end space-x-2 pt-2">
                  <button
                    onClick={() => {
                      setEditingStreamId(null);
                      setNewStream({
                        name: '',
                        description: '',
                        pricing: '',
                        pricingModel: '',
                        pricingTiers: '',
                        billingFrequency: '',
                        discountStrategy: ''
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
                  <h4 className="text-white font-medium text-sm">{stream.name}</h4>
                  {isEditing && (
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleEditStream(stream)}
                        className="p-1 text-gray-400 hover:text-white transition-colors"
                      >
                        <Edit2 className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => handleRemoveStream(stream.id)}
                        className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
                
                <div className="mb-3">
                  <p className="text-gray-300 text-xs">{stream.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <h5 className="text-linkedin-light text-xs font-medium mb-1">Pricing</h5>
                    <p className="text-gray-300 text-xs">{stream.pricing || "Not defined yet."}</p>
                  </div>
                  
                  <div>
                    <h5 className="text-linkedin-light text-xs font-medium mb-1">Pricing Model</h5>
                    <p className="text-gray-300 text-xs">{stream.pricingModel || "Not defined yet."}</p>
                  </div>
                  
                  <div>
                    <h5 className="text-linkedin-light text-xs font-medium mb-1">Pricing Tiers</h5>
                    <p className="text-gray-300 text-xs">{stream.pricingTiers || "Not defined yet."}</p>
                  </div>
                  
                  <div>
                    <h5 className="text-linkedin-light text-xs font-medium mb-1">Billing Frequency</h5>
                    <p className="text-gray-300 text-xs">{stream.billingFrequency || "Not defined yet."}</p>
                  </div>
                </div>
                
                <div className="mt-3">
                  <h5 className="text-linkedin-light text-xs font-medium mb-1">Discount Strategy</h5>
                  <p className="text-gray-300 text-xs">{stream.discountStrategy || "Not defined yet."}</p>
                </div>
              </div>
            )}
          </div>
        ))}
        
        {/* Add New Stream Form */}
        {isEditing && isAddingStream && (
          <div className="bg-linkedin-card/30 rounded-lg p-4 border border-linkedin-light">
            <div className="space-y-3">
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Revenue Stream Name</label>
                <input
                  type="text"
                  value={newStream.name}
                  onChange={(e) => setNewStream({...newStream, name: e.target.value})}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin text-xs"
                  placeholder="e.g., Subscription, Transaction Fees, Value-Added Services"
                />
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Description</label>
                <textarea
                  value={newStream.description}
                  onChange={(e) => setNewStream({...newStream, description: e.target.value})}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Describe this revenue stream..."
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-linkedin-light text-xs mb-1">Pricing</label>
                  <textarea
                    value={newStream.pricing}
                    onChange={(e) => setNewStream({...newStream, pricing: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                    rows={2}
                    placeholder="Define pricing strategy..."
                  />
                </div>
                
                <div>
                  <label className="block text-linkedin-light text-xs mb-1">Pricing Model</label>
                  <textarea
                    value={newStream.pricingModel}
                    onChange={(e) => setNewStream({...newStream, pricingModel: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                    rows={2}
                    placeholder="Define pricing model (e.g., flat rate, usage-based, tiered)..."
                  />
                </div>
                
                <div>
                  <label className="block text-linkedin-light text-xs mb-1">Pricing Tiers</label>
                  <textarea
                    value={newStream.pricingTiers}
                    onChange={(e) => setNewStream({...newStream, pricingTiers: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                    rows={2}
                    placeholder="Define pricing tiers if applicable..."
                  />
                </div>
                
                <div>
                  <label className="block text-linkedin-light text-xs mb-1">Billing Frequency</label>
                  <textarea
                    value={newStream.billingFrequency}
                    onChange={(e) => setNewStream({...newStream, billingFrequency: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                    rows={2}
                    placeholder="Define billing frequency (e.g., monthly, annual, one-time)..."
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-linkedin-light text-xs mb-1">Discount Strategy</label>
                <textarea
                  value={newStream.discountStrategy}
                  onChange={(e) => setNewStream({...newStream, discountStrategy: e.target.value})}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Define discount strategy if applicable..."
                />
              </div>
              
              <div className="flex items-center justify-end space-x-2 pt-2">
                <button
                  onClick={() => {
                    setIsAddingStream(false);
                    setNewStream({
                      name: '',
                      description: '',
                      pricing: '',
                      pricingModel: '',
                      pricingTiers: '',
                      billingFrequency: '',
                      discountStrategy: ''
                    });
                  }}
                  className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddStream}
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
      
      {/* Add Stream Button */}
      {isEditing && !isAddingStream && (
        <button
          onClick={() => setIsAddingStream(true)}
          className="w-full flex items-center justify-center space-x-2 bg-linkedin-card/30 hover:bg-linkedin-card/50 border border-dashed border-linkedin-border hover:border-linkedin text-white px-4 py-3 rounded-lg transition-all text-xs"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Revenue Stream</span>
        </button>
      )}
      
      {/* Edit Mode Toggle */}
      {isEditing && (
        <div className="flex items-center justify-end space-x-2 pt-2">
          <button
            onClick={() => setIsEditing(false)}
            className="bg-linkedin hover:bg-linkedin-dark text-white px-3 py-1.5 rounded-lg transition-colors text-xs flex items-center space-x-1"
          >
            <Save className="w-3 h-3" />
            <span>Done Editing</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default RevenueModelInputs;