import React, { useState } from 'react';
import {
  DollarSign,
  Calendar,
  Users,
  MessageSquare,
  FileText,
  CheckCircle,
  XCircle,
  Eye,
  Send,
  Plus
} from 'lucide-react';

interface VentureInvestorRelationsProps {
  ventureData: any; // Replace 'any' with a more specific type if available
}

const VentureInvestorRelations: React.FC<VentureInvestorRelationsProps> = ({ ventureData }) => {
  const [activeTab, setActiveTab] = useState('funding-history');

  // Mock Data for demonstration
  const fundingOverview = {
    totalRaised: '$3.8M',
    currentValuation: '$15M',
    numberOfRounds: 3,
    lastRound: 'Series A',
    fundraisingStage: 'Growth',
    fundraisingStatus: 'Active',
    currentRound: 'Series B - $5M Target'
  };

  const fundingHistory = [
    {
      date: '2024-01-15',
      investor: 'MENA Ventures',
      leadInvestor: true,
      round: 'Series A',
      amount: '$2.5M'
    },
    {
      date: '2023-06-15',
      investor: 'Angel Investor Group',
      leadInvestor: true,
      round: 'Seed',
      amount: '$1.2M'
    },
    {
      date: '2022-12-01',
      investor: 'Founders',
      leadInvestor: false,
      round: 'Pre-Seed',
      amount: '$100K'
    }
  ];

  const capTable = [
    {
      investorName: 'MENA Ventures',
      investmentAmount: '$2.5M',
      investmentDate: '2024-01-15',
      round: 'Series A',
      shareClass: 'Preferred A',
      ownership: '18.75%',
      pricePerShare: '$2.50',
      boardSeat: true
    },
    {
      investorName: 'Angel Investor Group',
      investmentAmount: '$1.2M',
      investmentDate: '2023-06-15',
      round: 'Seed',
      shareClass: 'Preferred Seed',
      ownership: '12.5%',
      pricePerShare: '$1.20',
      boardSeat: false
    },
    {
      investorName: 'You',
      investmentAmount: '$250K',
      investmentDate: '2023-06-15',
      round: 'Seed',
      shareClass: 'Preferred Seed',
      ownership: '3.1%',
      pricePerShare: '$1.20',
      boardSeat: false
    },
    {
      investorName: 'Founders',
      investmentAmount: '$500K',
      investmentDate: '2022-12-01',
      round: 'Pre-Seed',
      shareClass: 'Common',
      ownership: '65.65%',
      pricePerShare: '$0.50',
      boardSeat: true
    }
  ];

  const investorDirectory = [
    {
      id: 1,
      name: 'Sarah Khalil',
      contact: 'sarah.khalil@menaventures.com',
      lastCommunication: '2 days ago',
      profileLink: '#'
    },
    {
      id: 2,
      name: 'Omar Benali',
      contact: 'omar.benali@gulfcapital.com',
      lastCommunication: '1 week ago',
      profileLink: '#'
    },
    {
      id: 3,
      name: 'Layla Al-Mansouri',
      contact: 'layla.mansouri@angelinvest.com',
      lastCommunication: '3 weeks ago',
      profileLink: '#'
    }
  ];

  const ddRequests = [
    {
      id: 1,
      requestor: 'Global Growth Fund',
      type: 'Financial Statements',
      date: '2024-06-01',
      status: 'Pending',
      profileLink: '#'
    },
    {
      id: 2,
      requestor: 'Tech VC Partners',
      type: 'Product Roadmap',
      date: '2024-05-20',
      status: 'Approved',
      profileLink: '#'
    },
    {
      id: 3,
      requestor: 'Strategic Investor X',
      type: 'Legal Due Diligence',
      date: '2024-05-10',
      status: 'Rejected',
      profileLink: '#'
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-4">Venture Investor Relations</h2>
      <p className="text-gray-300 mb-6">Investor communication and relationship management interface for stakeholder engagement.</p>

      {/* Screen Tabs */}
      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-4">
        <div className="flex items-center space-x-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('funding-history')}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'funding-history'
                ? 'bg-gradient-to-r from-linkedin to-linkedin-light text-white'
                : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
            }`}
          >
            Funding History
          </button>
          <button
            onClick={() => setActiveTab('cap-table')}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'cap-table'
                ? 'bg-gradient-to-r from-linkedin to-linkedin-light text-white'
                : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
            }`}
          >
            Cap Table
          </button>
          <button
            onClick={() => setActiveTab('investor-communication')}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'investor-communication'
                ? 'bg-gradient-to-r from-linkedin to-linkedin-light text-white'
                : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
            }`}
          >
            Investor Communication
          </button>
          <button
            onClick={() => setActiveTab('dd-requests')}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'dd-requests'
                ? 'bg-gradient-to-r from-linkedin to-linkedin-light text-white'
                : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
            }`}
          >
            DD Requests
          </button>
        </div>
      </div>

      {activeTab === 'funding-history' && (
        <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
            <DollarSign className="w-5 h-5 text-linkedin-light" />
            <span>Funding History</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div className="bg-linkedin-card/50 rounded-lg p-4">
                <p className="text-gray-400 text-sm">Total Raised</p>
                <p className="text-white font-semibold text-lg">{fundingOverview.totalRaised}</p>
              </div>
              <div className="bg-linkedin-card/50 rounded-lg p-4">
                <p className="text-gray-400 text-sm">Current Valuation</p>
                <p className="text-white font-semibold text-lg">{fundingOverview.currentValuation}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-linkedin-card/50 rounded-lg p-4">
                <p className="text-gray-400 text-sm">Number of Rounds</p>
                <p className="text-white font-semibold text-lg">{fundingOverview.numberOfRounds}</p>
              </div>
              <div className="bg-linkedin-card/50 rounded-lg p-4">
                <p className="text-gray-400 text-sm">Last Round</p>
                <p className="text-white font-semibold text-lg">{fundingOverview.lastRound}</p>
              </div>
            </div>
          </div>

          <h4 className="text-lg font-bold text-white mb-4">Funding Timeline</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-linkedin-border">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Investor</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Lead Investor</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Round</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-linkedin-border">
                {fundingHistory.map((entry, index) => (
                  <tr key={index} className="hover:bg-linkedin-card/50">
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">{entry.date}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-white font-medium">{entry.investor}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      {entry.leadInvestor ? <CheckCircle className="w-5 h-5 text-green-400" /> : <XCircle className="w-5 h-5 text-red-400" />}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-linkedin-light">{entry.round}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-white font-semibold">{entry.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'cap-table' && (
        <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
            <Users className="w-5 h-5 text-linkedin-light" />
            <span>Cap Table</span>
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-linkedin-border">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Investor Name</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Investment Amount</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Investment Date</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Round</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Share Class</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Ownership %</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Price per Share</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Board Seat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-linkedin-border">
                {capTable.map((entry, index) => (
                  <tr key={index} className="hover:bg-linkedin-card/50">
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-white font-medium">{entry.investorName}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-linkedin-light">{entry.investmentAmount}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">{entry.investmentDate}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">{entry.round}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">{entry.shareClass}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-white font-semibold">{entry.ownership}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">{entry.pricePerShare}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      {entry.boardSeat ? <CheckCircle className="w-5 h-5 text-green-400" /> : <XCircle className="w-5 h-5 text-red-400" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'investor-communication' && (
        <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
            <MessageSquare className="w-5 h-5 text-linkedin-light" />
            <span>Investor Communication</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-bold text-white mb-3">Investor Directory</h4>
              <div className="space-y-4">
                {investorDirectory.map((investor) => (
                  <div key={investor.id} className="bg-linkedin-card/50 rounded-lg p-4">
                    <h5 className="text-white font-medium text-sm">{investor.name}</h5>
                    <p className="text-gray-400 text-xs mb-2">{investor.contact}</p>
                    <p className="text-gray-500 text-xs">Last communication: {investor.lastCommunication}</p>
                    <button className="mt-3 bg-linkedin hover:bg-linkedin-dark text-white px-4 py-2 rounded-lg text-sm">
                      Message
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-3">Quick Communication Actions</h4>
              <div className="space-y-4">
                <button className="w-full flex items-center space-x-2 bg-linkedin hover:bg-linkedin-dark text-white px-4 py-3 rounded-lg font-medium transition-all">
                  <Send className="w-4 h-4" />
                  <span>Send Update to All Investors</span>
                </button>
                <button className="w-full flex items-center space-x-2 bg-linkedin-card hover:bg-linkedin-card/70 text-white px-4 py-3 rounded-lg font-medium transition-all">
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Targeted Message (Select Recipients)</span>
                </button>
                <button className="w-full flex items-center space-x-2 bg-linkedin-card hover:bg-linkedin-card/70 text-white px-4 py-3 rounded-lg font-medium transition-all">
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Board Meeting</span>
                </button>
                <button className="w-full flex items-center space-x-2 bg-linkedin-card hover:bg-linkedin-card/70 text-white px-4 py-3 rounded-lg font-medium transition-all">
                  <Plus className="w-4 h-4" />
                  <span>Request Strategic Support</span>
                </button>
              </div>
              <h4 className="text-lg font-bold text-white mt-6 mb-3">Automated Communication Settings</h4>
              <div className="space-y-3">
                <div className="bg-linkedin-card/50 rounded-lg p-4">
                  <p className="text-gray-400 text-sm">Monthly Performance Updates: <span className="text-white font-semibold">Enabled</span></p>
                </div>
                <div className="bg-linkedin-card/50 rounded-lg p-4">
                  <p className="text-gray-400 text-sm">Milestone Notifications: <span className="text-white font-semibold">All Investors</span></p>
                </div>
                <div className="bg-linkedin-card/50 rounded-lg p-4">
                  <p className="text-gray-400 text-sm">Quarterly Reports: <span className="text-white font-semibold">Board Members Only</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'dd-requests' && (
        <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
            <FileText className="w-5 h-5 text-linkedin-light" />
            <span>DD Requests</span>
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-linkedin-border">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Requestor</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Type of Request</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Request Date</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-linkedin-border">
                {ddRequests.map((request) => (
                  <tr key={request.id} className="hover:bg-linkedin-card/50">
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-white font-medium">
                      <a href={request.profileLink} className="text-linkedin-light hover:underline">{request.requestor}</a>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">{request.type}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">{request.date}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        request.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' :
                        request.status === 'Approved' ? 'bg-green-500/20 text-green-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {request.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      <div className="flex space-x-2">
                        <button className="bg-green-500/20 text-green-400 px-3 py-1.5 rounded-lg text-xs">Grant</button>
                        <button className="bg-red-500/20 text-red-400 px-3 py-1.5 rounded-lg text-xs">Reject</button>
                        <button className="bg-linkedin-card/50 text-white px-3 py-1.5 rounded-lg text-xs">Meeting</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default VentureInvestorRelations;