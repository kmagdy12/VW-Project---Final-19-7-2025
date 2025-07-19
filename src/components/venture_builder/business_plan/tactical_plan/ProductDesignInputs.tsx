import React, { useState } from 'react';
import { 
  Edit2, 
  Save
} from 'lucide-react';

interface ProductDesignData {
  specifications: {
    functionalRequirements: string;
    nonFunctionalRequirements: string;
    technicalSpecifications: string;
    featurePrioritization: string;
    integrationRequirements: string;
  };
  roadmap: {
    versionPlanning: string;
    featureReleaseTimeline: string;
    marketFeedbackIntegration: string;
    competitiveResponsePlan: string;
    longTermVision: string;
  };
  developmentMethodology: {
    projectManagementFramework: string;
    developmentPhases: string;
    teamStructure: string;
    timelineScheduling: string;
    riskManagement: string;
  };
  technologyStack: {
    frontendTechnologies: string;
    backendSystems: string;
    infrastructureRequirements: string;
    thirdPartyIntegrations: string;
    securityArchitecture: string;
  };
}

interface ProductDesignInputsProps {
  productData: ProductDesignData;
  onUpdateProduct: (data: ProductDesignData) => void;
}

const ProductDesignInputs: React.FC<ProductDesignInputsProps> = ({ 
  productData, 
  onUpdateProduct 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(productData);
  const [activeSection, setActiveSection] = useState<'specifications' | 'roadmap' | 'methodology' | 'technology'>('specifications');

  const handleSave = () => {
    onUpdateProduct(editedData);
    setIsEditing(false);
  };

  const renderSpecificationsSection = () => (
    <div className="space-y-4">
      <h4 className="text-white font-medium text-sm mb-3">Product Specifications & Features</h4>
      
      {isEditing ? (
        <div className="space-y-3">
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Functional Requirements</label>
            <textarea
              value={editedData.specifications.functionalRequirements}
              onChange={(e) => setEditedData({
                ...editedData,
                specifications: { ...editedData.specifications, functionalRequirements: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={3}
              placeholder="Define what the product must do..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Non-functional Requirements</label>
            <textarea
              value={editedData.specifications.nonFunctionalRequirements}
              onChange={(e) => setEditedData({
                ...editedData,
                specifications: { ...editedData.specifications, nonFunctionalRequirements: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={3}
              placeholder="Define performance, security, scalability needs..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Technical Specifications</label>
            <textarea
              value={editedData.specifications.technicalSpecifications}
              onChange={(e) => setEditedData({
                ...editedData,
                specifications: { ...editedData.specifications, technicalSpecifications: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={3}
              placeholder="Define detailed technical parameters and constraints..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Feature Prioritization</label>
            <textarea
              value={editedData.specifications.featurePrioritization}
              onChange={(e) => setEditedData({
                ...editedData,
                specifications: { ...editedData.specifications, featurePrioritization: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={3}
              placeholder="Define must-have vs. nice-to-have features..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Integration Requirements</label>
            <textarea
              value={editedData.specifications.integrationRequirements}
              onChange={(e) => setEditedData({
                ...editedData,
                specifications: { ...editedData.specifications, integrationRequirements: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={3}
              placeholder="Define how it connects with other systems/products..."
            />
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Functional Requirements</h5>
            <p className="text-gray-300 text-xs">{productData.specifications.functionalRequirements || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Non-functional Requirements</h5>
            <p className="text-gray-300 text-xs">{productData.specifications.nonFunctionalRequirements || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Technical Specifications</h5>
            <p className="text-gray-300 text-xs">{productData.specifications.technicalSpecifications || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Feature Prioritization</h5>
            <p className="text-gray-300 text-xs">{productData.specifications.featurePrioritization || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Integration Requirements</h5>
            <p className="text-gray-300 text-xs">{productData.specifications.integrationRequirements || "Not defined yet."}</p>
          </div>
        </div>
      )}
    </div>
  );

  const renderRoadmapSection = () => (
    <div className="space-y-4">
      <h4 className="text-white font-medium text-sm mb-3">Product Roadmap</h4>
      
      {isEditing ? (
        <div className="space-y-3">
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Version Planning</label>
            <textarea
              value={editedData.roadmap.versionPlanning}
              onChange={(e) => setEditedData({
                ...editedData,
                roadmap: { ...editedData.roadmap, versionPlanning: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={3}
              placeholder="Define V1, V2, V3 feature rollout schedule..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Feature Release Timeline</label>
            <textarea
              value={editedData.roadmap.featureReleaseTimeline}
              onChange={(e) => setEditedData({
                ...editedData,
                roadmap: { ...editedData.roadmap, featureReleaseTimeline: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={3}
              placeholder="Define when specific capabilities will be available..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Market Feedback Integration</label>
            <textarea
              value={editedData.roadmap.marketFeedbackIntegration}
              onChange={(e) => setEditedData({
                ...editedData,
                roadmap: { ...editedData.roadmap, marketFeedbackIntegration: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={3}
              placeholder="Define how customer input shapes future development..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Competitive Response Plan</label>
            <textarea
              value={editedData.roadmap.competitiveResponsePlan}
              onChange={(e) => setEditedData({
                ...editedData,
                roadmap: { ...editedData.roadmap, competitiveResponsePlan: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={3}
              placeholder="Define adapting to market changes..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Long-term Vision</label>
            <textarea
              value={editedData.roadmap.longTermVision}
              onChange={(e) => setEditedData({
                ...editedData,
                roadmap: { ...editedData.roadmap, longTermVision: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={3}
              placeholder="Define 2-5 year product evolution goals..."
            />
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Version Planning</h5>
            <p className="text-gray-300 text-xs">{productData.roadmap.versionPlanning || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Feature Release Timeline</h5>
            <p className="text-gray-300 text-xs">{productData.roadmap.featureReleaseTimeline || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Market Feedback Integration</h5>
            <p className="text-gray-300 text-xs">{productData.roadmap.marketFeedbackIntegration || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Competitive Response Plan</h5>
            <p className="text-gray-300 text-xs">{productData.roadmap.competitiveResponsePlan || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Long-term Vision</h5>
            <p className="text-gray-300 text-xs">{productData.roadmap.longTermVision || "Not defined yet."}</p>
          </div>
        </div>
      )}
    </div>
  );

  const renderMethodologySection = () => (
    <div className="space-y-4">
      <h4 className="text-white font-medium text-sm mb-3">Development Methodology</h4>
      
      {isEditing ? (
        <div className="space-y-3">
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Project Management Framework</label>
            <textarea
              value={editedData.developmentMethodology.projectManagementFramework}
              onChange={(e) => setEditedData({
                ...editedData,
                developmentMethodology: { ...editedData.developmentMethodology, projectManagementFramework: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={2}
              placeholder="Define Agile/Scrum/Kanban approach..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Development Phases</label>
            <textarea
              value={editedData.developmentMethodology.developmentPhases}
              onChange={(e) => setEditedData({
                ...editedData,
                developmentMethodology: { ...editedData.developmentMethodology, developmentPhases: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={2}
              placeholder="Define sprint planning, milestones, deliverables..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Team Structure & Roles</label>
            <textarea
              value={editedData.developmentMethodology.teamStructure}
              onChange={(e) => setEditedData({
                ...editedData,
                developmentMethodology: { ...editedData.developmentMethodology, teamStructure: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={2}
              placeholder="Define developer assignments and responsibilities..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Timeline & Scheduling</label>
            <textarea
              value={editedData.developmentMethodology.timelineScheduling}
              onChange={(e) => setEditedData({
                ...editedData,
                developmentMethodology: { ...editedData.developmentMethodology, timelineScheduling: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={2}
              placeholder="Define development calendar and dependencies..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Risk Management</label>
            <textarea
              value={editedData.developmentMethodology.riskManagement}
              onChange={(e) => setEditedData({
                ...editedData,
                developmentMethodology: { ...editedData.developmentMethodology, riskManagement: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={2}
              placeholder="Define potential blockers and mitigation strategies..."
            />
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Project Management Framework</h5>
            <p className="text-gray-300 text-xs">{productData.developmentMethodology.projectManagementFramework || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Development Phases</h5>
            <p className="text-gray-300 text-xs">{productData.developmentMethodology.developmentPhases || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Team Structure & Roles</h5>
            <p className="text-gray-300 text-xs">{productData.developmentMethodology.teamStructure || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Timeline & Scheduling</h5>
            <p className="text-gray-300 text-xs">{productData.developmentMethodology.timelineScheduling || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Risk Management</h5>
            <p className="text-gray-300 text-xs">{productData.developmentMethodology.riskManagement || "Not defined yet."}</p>
          </div>
        </div>
      )}
    </div>
  );

  const renderTechnologySection = () => (
    <div className="space-y-4">
      <h4 className="text-white font-medium text-sm mb-3">Technology Stack & Architecture</h4>
      
      {isEditing ? (
        <div className="space-y-3">
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Frontend Technologies</label>
            <textarea
              value={editedData.technologyStack.frontendTechnologies}
              onChange={(e) => setEditedData({
                ...editedData,
                technologyStack: { ...editedData.technologyStack, frontendTechnologies: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={2}
              placeholder="Define user interface development tools..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Backend Systems</label>
            <textarea
              value={editedData.technologyStack.backendSystems}
              onChange={(e) => setEditedData({
                ...editedData,
                technologyStack: { ...editedData.technologyStack, backendSystems: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={2}
              placeholder="Define server, database, and API technologies..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Infrastructure Requirements</label>
            <textarea
              value={editedData.technologyStack.infrastructureRequirements}
              onChange={(e) => setEditedData({
                ...editedData,
                technologyStack: { ...editedData.technologyStack, infrastructureRequirements: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={2}
              placeholder="Define hosting, cloud services, scalability needs..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Third-party Integrations</label>
            <textarea
              value={editedData.technologyStack.thirdPartyIntegrations}
              onChange={(e) => setEditedData({
                ...editedData,
                technologyStack: { ...editedData.technologyStack, thirdPartyIntegrations: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={2}
              placeholder="Define external APIs and services..."
            />
          </div>
          
          <div>
            <label className="block text-linkedin-light text-xs mb-1">Security Architecture</label>
            <textarea
              value={editedData.technologyStack.securityArchitecture}
              onChange={(e) => setEditedData({
                ...editedData,
                technologyStack: { ...editedData.technologyStack, securityArchitecture: e.target.value }
              })}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
              rows={2}
              placeholder="Define data protection and system security measures..."
            />
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Frontend Technologies</h5>
            <p className="text-gray-300 text-xs">{productData.technologyStack.frontendTechnologies || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Backend Systems</h5>
            <p className="text-gray-300 text-xs">{productData.technologyStack.backendSystems || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Infrastructure Requirements</h5>
            <p className="text-gray-300 text-xs">{productData.technologyStack.infrastructureRequirements || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Third-party Integrations</h5>
            <p className="text-gray-300 text-xs">{productData.technologyStack.thirdPartyIntegrations || "Not defined yet."}</p>
          </div>
          
          <div className="bg-linkedin-card/30 rounded-lg p-3">
            <h5 className="text-linkedin-light text-xs font-medium mb-1">Security Architecture</h5>
            <p className="text-gray-300 text-xs">{productData.technologyStack.securityArchitecture || "Not defined yet."}</p>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-white">Product Design</h3>
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
        Define your product's specifications, roadmap, development methodology, and technology stack. This will guide your product development process.
      </p>
      
      {/* Section Tabs */}
      <div className="flex items-center space-x-2 mb-4 overflow-x-auto">
        <button
          onClick={() => setActiveSection('specifications')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
            activeSection === 'specifications'
              ? 'bg-linkedin text-white'
              : 'bg-linkedin-card/50 text-gray-300 hover:text-white hover:bg-linkedin-card'
          }`}
        >
          Specifications & Features
        </button>
        <button
          onClick={() => setActiveSection('roadmap')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
            activeSection === 'roadmap'
              ? 'bg-linkedin text-white'
              : 'bg-linkedin-card/50 text-gray-300 hover:text-white hover:bg-linkedin-card'
          }`}
        >
          Product Roadmap
        </button>
        <button
          onClick={() => setActiveSection('methodology')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
            activeSection === 'methodology'
              ? 'bg-linkedin text-white'
              : 'bg-linkedin-card/50 text-gray-300 hover:text-white hover:bg-linkedin-card'
          }`}
        >
          Development Methodology
        </button>
        <button
          onClick={() => setActiveSection('technology')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
            activeSection === 'technology'
              ? 'bg-linkedin text-white'
              : 'bg-linkedin-card/50 text-gray-300 hover:text-white hover:bg-linkedin-card'
          }`}
        >
          Technology Stack
        </button>
      </div>
      
      {/* Active Section Content */}
      <div className="bg-linkedin-card/30 rounded-lg p-4">
        {activeSection === 'specifications' && renderSpecificationsSection()}
        {activeSection === 'roadmap' && renderRoadmapSection()}
        {activeSection === 'methodology' && renderMethodologySection()}
        {activeSection === 'technology' && renderTechnologySection()}
      </div>
      
      {/* Save Button (when editing) */}
      {isEditing && (
        <div className="flex items-center justify-end space-x-2 pt-2">
          <button
            onClick={() => {
              setIsEditing(false);
              setEditedData(productData);
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
  );
};

export default ProductDesignInputs;