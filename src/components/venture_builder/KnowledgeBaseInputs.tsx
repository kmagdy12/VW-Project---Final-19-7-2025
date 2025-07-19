import React, { useState } from 'react';
import { 
  Upload, 
  FileText, 
  Trash2, 
  ArrowRight,
  Save,
  Database,
  File
} from 'lucide-react';

interface KnowledgeBaseInputsProps {
  capacityUsed: number;
  uploadedDocuments: {id: number, name: string, type: string, size: string}[];
  onUploadDocument: () => void;
  onRemoveDocument: (id: number) => void;
  onContinue: () => void;
  onSkip: () => void;
  onSaveDraft: () => void;
}

const KnowledgeBaseInputs: React.FC<KnowledgeBaseInputsProps> = ({ 
  capacityUsed, 
  uploadedDocuments, 
  onUploadDocument, 
  onRemoveDocument,
  onContinue,
  onSkip,
  onSaveDraft
}) => {
  return (
    <div className="p-6 h-full overflow-y-auto">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
        <Database className="w-5 h-5 text-linkedin-light mr-2" />
        Knowledge Base
      </h3>
      
      {/* Capacity Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-300 text-xs">Project Capacity</span>
          <span className="text-linkedin-light text-xs font-medium">{capacityUsed}% used</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all ${
              capacityUsed > 80 ? 'bg-red-500' : 'bg-gradient-to-r from-linkedin to-linkedin-light'
            }`}
            style={{ width: `${capacityUsed}%` }}
          ></div>
        </div>
        <p className="text-gray-400 text-xs mt-1">
          {100 - capacityUsed}% remaining (Max 100MB total)
        </p>
      </div>
      {/* Upload Button */}
      <div className="mb-6">
        <button
          onClick={onUploadDocument}
          className="w-full border-2 border-dashed border-linkedin-border rounded-lg p-6 flex flex-col items-center justify-center hover:border-linkedin transition-colors"
        >
          <Upload className="w-10 h-10 text-linkedin-light mb-3" />
          <p className="text-white font-medium mb-1">Upload Documents</p>
          <p className="text-gray-400 text-sm">Drag & drop files or click to browse</p>
        </button>
      </div>
      
      {/* Uploaded Documents */}
      {uploadedDocuments.length > 0 && (
        <div className="mb-6">
          <h4 className="text-white font-medium mb-3">Uploaded Documents</h4>
          <div className="space-y-3">
            {uploadedDocuments.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between bg-linkedin-card/50 rounded-lg p-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-linkedin/20 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-linkedin-light" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{doc.name}</p>
                    <p className="text-gray-400 text-xs">{doc.type} • {doc.size}</p>
                  </div>
                </div>
                <button
                  onClick={() => onRemoveDocument(doc.id)}
                  className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Guidelines */}
      <div className="mb-6">
        <h4 className="text-white font-medium mb-3">Knowledge Base Guidelines</h4>
        <div className="space-y-3">
          <div className="bg-linkedin-card/50 rounded-lg p-3">
            <h5 className="text-white font-medium text-sm mb-1">Market Data</h5>
            <p className="text-gray-400 text-xs">
              Include market research reports, industry analyses, competitor information, and market sizing data.
            </p>
          </div>
          <div className="bg-linkedin-card/50 rounded-lg p-3">
            <h5 className="text-white font-medium text-sm mb-1">Venture Data</h5>
            <p className="text-gray-400 text-xs">
              Include business plans, pitch decks, financial models, product specifications, and team information.
            </p>
          </div>
          <div className="bg-linkedin-card/50 rounded-lg p-3">
            <h5 className="text-white font-medium text-sm mb-1">Supported Formats</h5>
            <p className="text-gray-400 text-xs">
              PDF, DOCX, XLSX, PPTX, CSV, TXT (Max 10MB per file)
            </p>
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-linkedin-border">
        <div className="flex items-center space-x-3">
          <button
            onClick={onSkip}
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            Skip for now
          </button>
          <button
            onClick={onSaveDraft}
            className="flex items-center space-x-2 bg-linkedin-card hover:bg-linkedin-card/70 text-white px-4 py-2 rounded-lg transition-colors text-sm"
          >
            <Save className="w-4 h-4" />
            <span>Save draft</span>
          </button>
        </div>
        <button
          onClick={onContinue}
          className="flex items-center space-x-2 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-6 py-2 rounded-lg transition-all text-sm"
        >
          <span>Continue to Idea Stage</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default KnowledgeBaseInputs;