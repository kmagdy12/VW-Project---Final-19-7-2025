import React, { useState } from 'react';
import { 
  DollarSign, 
  TrendingUp, 
  Calendar, 
  Users,
  Building2,
  ArrowLeft,
  Shield,
  FileText,
  Target,
  ArrowRight
} from 'lucide-react';

interface VentureFundingProps {
  onSectionChange: (section: string) => void;
  selectedVentureId?: number; // Passed from PortfolioManagement
  venturesData?: any[];
}

const VentureFunding: React.FC<VentureFundingProps> = ({ 
  onSectionChange, 
  selectedVentureId,
  venturesData = []
}) => {
  
  // Find the selected venture from venturesData
  const selectedVenture = venturesData.find(v => v.id === selectedVentureId) || venturesData[0] || {
    id: 1,
    companyName: 'Default Company',
    fundingDetails: {
      totalRaised: '$0',
      currentValuation: '$0',
      fundraisingStage: 'N/A',
      lastRound: 'N/A',
      fundraisingStatus: 'Inactive',
      currentRound: 'N/A',
      myInvestment: {
        investmentAmount: '$0',
        round: 'N/A',
        investmentDate: 'N/A',
        currentOwnership: '0%',
        currentValue: '$0'
      },
      fundingHistory: []
    }
  };

  const fundingOverview = selectedVenture.fundingDetails || {};
  const myInvestment = selectedVenture.fundingDetails?.myInvestment || {};
  const fundingHistory = selectedVenture.fundingDetails?.fundingHistory || [];

  const capTable = [
    {
      investorName: 'MENA Ventures',
      investmentAmount: '$2.5M',
      investmentDate: '2024-01-15',
      round: 'Series A',
      shareClass: 'Preferred A',
      ownership: '18.75%',
      pricePerShare: '$2.50'
    },
    {
      investorName: 'Angel Investor Group',
      investmentAmount: '$1.2M',
      investmentDate: '2023-06-15',
      round: 'Seed',
      shareClass: 'Preferred Seed',
      ownership: '12.5%',
      pricePerShare: '$1.20'
    },
    {
      investorName: 'You',
      investmentAmount: '$250K',
      investmentDate: '2023-06-15',
      round: 'Seed',
      shareClass: 'Preferred Seed',
      ownership: '3.1%',
      pricePerShare: '$1.20'
    },
    {
      investorName: 'Founders',
      investmentAmount: '$500K',
      investmentDate: '2022-12-01',
      round: 'Pre-Seed',
      shareClass: 'Common',
      ownership: '65.65%',
      pricePerShare: '$0.50'
    }
  ];

  const investmentTerms = [
    {
      category: 'Investment Structure',
      details: [
        'Preferred Stock Series A',
        'Liquidation Preference: 1x Non-Participating',
        'Anti-Dilution: Weighted Average Broad-Based'
      ]
    },
    {
      category: 'Valuation Terms',
      details: [
        'Pre-Money Valuation: $12.5M',
        'Post-Money Valuation: $15M',
        'Price Per Share: $1.20'
      ]
    },
    {
      category: 'Economic Rights & Returns',
      details: [
        'Dividend Rights: 8% Cumulative',
        'Participation Rights: Non-Participating',
        'Tag-Along Rights: Yes'
      ]
    },
    {
      category: 'Control & Governance',
      details: [
        'Board Seats: 1 of 5',
        'Voting Rights: As-Converted Basis',
        'Protective Provisions: Standard'
      ]
    },
    {
      category: 'Transfer & Liquidity Rights',
      details: [
        'Right of First Refusal: Yes',
        'Co-Sale Rights: Yes',
        'Drag-Along Rights: Yes'
      ]
    },
    {
      category: 'Legal & Administrative',
      details: [
        'Information Rights: Standard',
        'Registration Rights: Piggyback',
        'Legal Fees: Company Pays'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Venture Funding</h1>
        <p className="text-gray-300">Funding details for {selectedVenture.companyName}</p>
      </div>
        
      {/* Funding Overview */}
      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
              <DollarSign className="w-5 h-5" />
              <span>Funding Overview</span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-linkedin-light mb-2">{fundingOverview.totalRaised}</div>
                <div className="text-gray-400 text-sm">Total Raised</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">{fundingOverview.currentValuation}</div>
                <div className="text-gray-400 text-sm">Current Valuation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">{fundingOverview.fundraisingStage}</div>
                <div className="text-gray-400 text-sm">Fundraising Stage</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-white mb-2">{fundingOverview.lastRound}</div>
                <div className="text-gray-400 text-sm">Last Round</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-green-400 mb-2">{fundingOverview.fundraisingStatus}</div>
                <div className="text-gray-400 text-sm">Fundraising Status</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-linkedin-light mb-2">{fundingOverview.currentRound}</div>
                <div className="text-gray-400 text-sm">Current Round</div>
              </div>
            </div>
          </div>

          {/* My Investment Details */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
              <Target className="w-5 h-5" />
              <span>My Investment Details</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-linkedin-light mb-2">{myInvestment.investmentAmount}</div>
                <div className="text-gray-400 text-sm">Investment Amount</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">{myInvestment.round}</div>
                <div className="text-gray-400 text-sm">Round</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-white mb-2">{myInvestment.investmentDate}</div>
                <div className="text-gray-400 text-sm">Investment Date</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-linkedin-light mb-2">{myInvestment.currentOwnership}</div>
                <div className="text-gray-400 text-sm">Current Ownership</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">{myInvestment.currentValue}</div>
                <div className="text-gray-400 text-sm">Current Value</div>
              </div>
            </div>
          </div>

          {/* Funding History */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Funding History</span>
            </h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-linkedin-border">
                    <th className="text-left text-gray-400 text-sm font-medium py-3">Date</th>
                    <th className="text-left text-gray-400 text-sm font-medium py-3">Investor</th>
                    <th className="text-left text-gray-400 text-sm font-medium py-3">Lead Investor</th>
                    <th className="text-left text-gray-400 text-sm font-medium py-3">Funding Round</th>
                    <th className="text-left text-gray-400 text-sm font-medium py-3">Amount Raised</th>
                  </tr>
                </thead>
                <tbody>
                  {fundingHistory.map((entry, index) => (
                    <tr key={index} className="border-b border-linkedin-border/50">
                      <td className="text-gray-300 text-sm py-3">{entry.date}</td>
                      <td className="text-white text-sm py-3 font-medium">{entry.investor}</td>
                      <td className="text-sm py-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          entry.leadInvestor ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                        }`}>
                          {entry.leadInvestor ? 'Yes' : 'No'}
                        </span>
                      </td>
                      <td className="text-linkedin-light text-sm py-3">{entry.round}</td>
                      <td className="text-white text-sm py-3 font-semibold">{entry.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cap Table */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Cap Table</span>
            </h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-linkedin-border">
                    <th className="text-left text-gray-400 text-sm font-medium py-3">Investor Name</th>
                    <th className="text-left text-gray-400 text-sm font-medium py-3">Investment Amount</th>
                    <th className="text-left text-gray-400 text-sm font-medium py-3">Investment Date</th>
                    <th className="text-left text-gray-400 text-sm font-medium py-3">Investment Round</th>
                    <th className="text-left text-gray-400 text-sm font-medium py-3">Share Class</th>
                    <th className="text-left text-gray-400 text-sm font-medium py-3">Ownership %</th>
                    <th className="text-left text-gray-400 text-sm font-medium py-3">Price per Share</th>
                  </tr>
                </thead>
                <tbody>
                  {capTable.map((entry, index) => (
                    <tr key={index} className="border-b border-linkedin-border/50">
                      <td className="text-white text-sm py-3 font-medium">{entry.investorName}</td>
                      <td className="text-linkedin-light text-sm py-3">{entry.investmentAmount}</td>
                      <td className="text-gray-300 text-sm py-3">{entry.investmentDate}</td>
                      <td className="text-gray-300 text-sm py-3">{entry.round}</td>
                      <td className="text-gray-300 text-sm py-3">{entry.shareClass}</td>
                      <td className="text-white text-sm py-3 font-semibold">{entry.ownership}</td>
                      <td className="text-gray-300 text-sm py-3">{entry.pricePerShare}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* My Investment Terms */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
              <FileText className="w-5 h-5" />
              <span>My Investment Terms</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {investmentTerms.map((term, index) => (
                <div key={index} className="bg-linkedin-card/50 rounded-lg p-4">
                  <h4 className="text-linkedin-light font-semibold mb-3">{term.category}</h4>
                  <div className="space-y-2">
                    {term.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-linkedin-light rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  );
};

export default VentureFunding;