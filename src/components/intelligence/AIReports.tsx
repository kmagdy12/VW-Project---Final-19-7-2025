import React, { useState } from 'react';
import { 
  FileText, 
  Plus, 
  Download, 
  Calendar, 
  Brain,
  Search,
  Filter,
  Eye,
  Edit,
  Copy,
  Trash2,
  Building2
} from 'lucide-react';

interface AIReportsProps {
  onSectionChange: (section: string) => void;
}

const AIReports: React.FC<AIReportsProps> = ({ onSectionChange }) => {
  const [activeSubSection, setActiveSubSection] = useState('generate');
  const [reportParameters, setReportParameters] = useState({
    industry: 'fintech',
    market: 'mena',
    topic: 'market-analysis',
    purpose: 'investment-decision',
    researchElements: ''
  });
  const [generatedReport, setGeneratedReport] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const subSections = [
    { id: 'generate', label: 'Generate AI Report' },
    { id: 'history', label: 'Reports History' }
  ];

  const reportHistory = [
    {
      id: 1,
      title: 'MENA Fintech Market Analysis Q4 2024',
      date: '2024-12-10',
      industry: 'Fintech',
      market: 'MENA',
      pages: 45,
      status: 'completed'
    },
    {
      id: 2,
      title: 'UAE HealthTech Competitive Landscape',
      date: '2024-12-08',
      industry: 'HealthTech',
      market: 'UAE',
      pages: 32,
      status: 'completed'
    },
    {
      id: 3,
      title: 'Saudi Arabia E-commerce Growth Forecast',
      date: '2024-12-05',
      industry: 'E-commerce',
      market: 'Saudi Arabia',
      pages: 28,
      status: 'completed'
    },
    {
      id: 4,
      title: 'Egypt EdTech Investment Opportunities',
      date: '2024-12-02',
      industry: 'EdTech',
      market: 'Egypt',
      pages: 38,
      status: 'completed'
    }
  ];

  const handleGenerateReport = async () => {
    setIsGenerating(true);
    
    // Simulate AI report generation
    setTimeout(() => {
      const sampleReport = `# ${reportParameters.industry.charAt(0).toUpperCase() + reportParameters.industry.slice(1)} Market Analysis Report

## Executive Summary

The ${reportParameters.market.toUpperCase()} ${reportParameters.industry} market demonstrates strong growth potential with favorable regulatory developments and increasing digital adoption. This comprehensive analysis provides strategic insights for ${reportParameters.purpose.replace('-', ' ')}.

## Market Overview

### Market Size and Growth
- Total Addressable Market (TAM): $45.2B
- Serviceable Addressable Market (SAM): $12.8B
- Serviceable Obtainable Market (SOM): $2.1B
- Projected CAGR (2024-2029): 22.1%

### Key Market Drivers
1. **Digital Transformation Acceleration**: Government initiatives driving digital adoption across sectors
2. **Regulatory Support**: Progressive regulatory frameworks enabling innovation
3. **Consumer Behavior Shift**: Increasing acceptance of digital financial services
4. **Infrastructure Development**: Improved digital and financial infrastructure

## Competitive Landscape

### Market Leaders
- **Company A**: 25% market share, strong in digital payments
- **Company B**: 18% market share, focus on SME lending
- **Company C**: 15% market share, wealth management solutions

### Emerging Players
- 12 new entrants in the past 18 months
- Average funding round size: $8.5M
- Key focus areas: cross-border payments, embedded finance

## Strategic Opportunities

### High-Impact Opportunities
1. **SME Digital Banking**: $8.2B opportunity with limited competition
2. **Cross-Border Payments**: 25% cost reduction potential
3. **Embedded Finance**: Growing demand from e-commerce platforms

### Market Entry Strategies
- Partnership with local financial institutions
- Regulatory sandbox participation
- Strategic acquisitions of local players

## Risk Assessment

### Regulatory Risks
- Compliance complexity: Medium-High
- Regulatory changes: 3 major updates expected in 2025
- Licensing requirements: Varies by jurisdiction

### Market Risks
- Competition intensity: High in payments, Medium in lending
- Talent acquisition: Challenging in technical roles
- Customer acquisition costs: Increasing 15% annually

## Financial Projections

### Revenue Forecasts (5-Year)
- Year 1: $2.5M
- Year 2: $8.1M
- Year 3: $18.7M
- Year 4: $35.2M
- Year 5: $58.9M

### Key Metrics
- Customer Acquisition Cost: $45
- Lifetime Value: $380
- Gross Margin: 68%
- Break-even: Month 18

## Recommendations

### Immediate Actions (0-6 months)
1. Secure regulatory approvals in target markets
2. Establish strategic partnerships with local banks
3. Build core product MVP with essential features
4. Recruit key technical and regulatory talent

### Medium-term Strategy (6-18 months)
1. Launch pilot programs in 2-3 key markets
2. Iterate product based on customer feedback
3. Expand team and operational capabilities
4. Prepare for Series A funding round

### Long-term Vision (18+ months)
1. Scale operations across MENA region
2. Explore adjacent market opportunities
3. Consider strategic acquisitions
4. Prepare for potential exit strategies

## Conclusion

The ${reportParameters.market.toUpperCase()} ${reportParameters.industry} market presents significant opportunities for well-positioned players. Success will depend on regulatory navigation, strategic partnerships, and execution excellence.

---

*This report was generated using AI-powered market intelligence and should be supplemented with additional due diligence for investment decisions.*`;

      setGeneratedReport(sampleReport);
      setIsGenerating(false);
    }, 3000);
  };

  const handleExportReport = () => {
    // Create a blob with the report content
    const blob = new Blob([generatedReport], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${reportParameters.industry}-market-analysis-${new Date().toISOString().split('T')[0]}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">AI Report Development</h1>
        <p className="text-gray-300">Generate comprehensive market analysis and strategic intelligence reports</p>
      </div>

      {/* Sub-navigation */}
      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
        <div className="flex items-center space-x-2">
          {subSections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSubSection(section.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeSubSection === section.id
                  ? 'bg-gradient-to-r from-linkedin to-linkedin-light text-white'
                  : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>

      {/* Generate Report Section */}
      {activeSubSection === 'generate' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Report Parameters */}
          <div className="lg:col-span-1">
            <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
                <Brain className="w-5 h-5" />
                <span>Report Parameters</span>
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 text-sm mb-2">Industry</label>
                  <select
                    value={reportParameters.industry}
                    onChange={(e) => setReportParameters({...reportParameters, industry: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin"
                  >
                    <option value="fintech" className="bg-slate-800">Fintech</option>
                    <option value="healthtech" className="bg-slate-800">HealthTech</option>
                    <option value="ecommerce" className="bg-slate-800">E-commerce</option>
                    <option value="edtech" className="bg-slate-800">EdTech</option>
                    <option value="proptech" className="bg-slate-800">PropTech</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm mb-2">Market</label>
                  <select
                    value={reportParameters.market}
                    onChange={(e) => setReportParameters({...reportParameters, market: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin"
                  >
                    <option value="mena" className="bg-slate-800">MENA Region</option>
                    <option value="gcc" className="bg-slate-800">GCC Countries</option>
                    <option value="uae" className="bg-slate-800">UAE</option>
                    <option value="saudi-arabia" className="bg-slate-800">Saudi Arabia</option>
                    <option value="egypt" className="bg-slate-800">Egypt</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm mb-2">Topic</label>
                  <select
                    value={reportParameters.topic}
                    onChange={(e) => setReportParameters({...reportParameters, topic: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin"
                  >
                    <option value="market-analysis" className="bg-slate-800">Market Analysis</option>
                    <option value="competitive-landscape" className="bg-slate-800">Competitive Landscape</option>
                    <option value="regulatory-analysis" className="bg-slate-800">Regulatory Analysis</option>
                    <option value="investment-opportunities" className="bg-slate-800">Investment Opportunities</option>
                    <option value="growth-forecast" className="bg-slate-800">Growth Forecast</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm mb-2">Purpose</label>
                  <select
                    value={reportParameters.purpose}
                    onChange={(e) => setReportParameters({...reportParameters, purpose: e.target.value})}
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-linkedin"
                  >
                    <option value="investment-decision" className="bg-slate-800">Investment Decision</option>
                    <option value="market-entry" className="bg-slate-800">Market Entry</option>
                    <option value="strategic-planning" className="bg-slate-800">Strategic Planning</option>
                    <option value="due-diligence" className="bg-slate-800">Due Diligence</option>
                    <option value="competitive-analysis" className="bg-slate-800">Competitive Analysis</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm mb-2">Research Elements</label>
                  <textarea
                    value={reportParameters.researchElements}
                    onChange={(e) => setReportParameters({...reportParameters, researchElements: e.target.value})}
                    placeholder="Specify additional research elements, focus areas, or specific questions to address..."
                    className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none"
                    rows={4}
                  />
                </div>

                <button
                  onClick={handleGenerateReport}
                  disabled={isGenerating}
                  className="w-full bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-all"
                >
                  {isGenerating ? 'Generating Report...' : 'Generate Report'}
                </button>
              </div>
            </div>
          </div>

          {/* Generated Report */}
          <div className="lg:col-span-2">
            <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>Generated Report</span>
                </h3>
                {generatedReport && (
                  <button
                    onClick={handleExportReport}
                    className="flex items-center space-x-2 bg-linkedin hover:bg-linkedin-dark text-white px-4 py-2 rounded-lg font-medium transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Export Report</span>
                  </button>
                )}
              </div>
              
              <div className="min-h-[600px] bg-linkedin-card/50 rounded-lg p-4 border border-linkedin-border">
                {isGenerating ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-linkedin to-linkedin-light rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-white font-semibold mb-2">Generating AI Report...</p>
                      <p className="text-gray-400 text-sm">Analyzing market data and generating insights</p>
                    </div>
                  </div>
                ) : generatedReport ? (
                  <div className="prose prose-invert max-w-none">
                    <pre className="whitespace-pre-wrap text-gray-300 text-sm leading-relaxed font-sans">
                      {generatedReport}
                    </pre>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-white font-semibold mb-2">No Report Generated</p>
                      <p className="text-gray-400 text-sm">Configure parameters and click "Generate Report" to create your custom market analysis</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reports History Section */}
      {activeSubSection === 'history' && (
        <div className="space-y-6">
          {/* Search and Filter */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search reports..."
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin"
                />
              </div>
              <button className="flex items-center space-x-2 bg-linkedin hover:bg-linkedin-dark text-white px-6 py-3 rounded-lg transition-colors">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
            </div>
          </div>

          {/* Reports Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reportHistory.map((report) => (
              <div key={report.id} className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6 hover:border-linkedin/50 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">{report.title}</h3>
                    <div className="space-y-1 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(report.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Building2 className="w-4 h-4" />
                        <span>{report.industry} • {report.market}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FileText className="w-4 h-4" />
                        <span>{report.pages} pages</span>
                      </div>
                    </div>
                  </div>
                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-semibold">
                    {report.status}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <button className="flex-1 flex items-center justify-center space-x-2 bg-linkedin hover:bg-linkedin-dark text-white px-3 py-2 rounded-lg text-sm transition-colors">
                    <Eye className="w-4 h-4" />
                    <span>View</span>
                  </button>
                  <button className="p-2 bg-linkedin-card hover:bg-linkedin-card/70 text-gray-400 hover:text-white rounded-lg transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-linkedin-card hover:bg-linkedin-card/70 text-gray-400 hover:text-white rounded-lg transition-colors">
                    <Copy className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-linkedin-card hover:bg-linkedin-card/70 text-gray-400 hover:text-red-400 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AIReports;