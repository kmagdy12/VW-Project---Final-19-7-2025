import React, { useState } from 'react';
import { 
  MessageSquare, 
  Save, 
  ArrowRight,
  Brain,
  ChevronDown,
  ChevronUp,
  Play,
  BarChart3,
  Target,
  CheckCircle,
  AlertTriangle,
  ArrowLeft
} from 'lucide-react';

interface AIPersona {
  id: number;
  name: string;
  age: number;
  profilePicture: string;
  professionalRole: string;
}

interface Question {
  id: number;
  text: string;
  category: 'problem' | 'solution' | 'behavioral';
}

interface PersonaAnswer {
  personaId: number;
  questionId: number;
  answer: string;
}

interface PersonaAnalysis {
  personaId: number;
  problemScore: number;
  solutionSatisfaction: number;
  willingnessToPay: string;
  interestLevel: number;
  mustHaveFeatures: string[];
  mainObjection: string;
  bestMessaging: string;
  salesApproach: string;
  dealBreaker: string;
}

interface OverallAnalysis {
  problemConsensus: number;
  solutionDemand: number;
  priceValidation: string;
  primaryTarget: string;
  coreMessage: string;
  keyFeatures: string[];
  fitScore: number;
  redFlags: string[];
  greenLights: string[];
  immediateAction: string;
  productChanges: string;
  furtherTesting: string;
}

interface AISimulationInputsProps {
  personas: AIPersona[];
  questions: Question[];
  personaAnswers: PersonaAnswer[];
  personaAnalyses: PersonaAnalysis[];
  overallAnalysis: OverallAnalysis | null;
  onUpdatePersonaAnswers: (answers: PersonaAnswer[]) => void;
  onUpdatePersonaAnalyses: (analyses: PersonaAnalysis[]) => void;
  onUpdateOverallAnalysis: (analysis: OverallAnalysis) => void;
  onRunSimulation: () => void;
  simulationComplete: boolean;
  onContinue: () => void;
  onBack: () => void;
  onSkip: () => void;
  onSaveDraft: () => void;
}

const AISimulationInputs: React.FC<AISimulationInputsProps> = ({ 
  personas, 
  questions, 
  personaAnswers, 
  personaAnalyses, 
  overallAnalysis,
  onUpdatePersonaAnswers, 
  onUpdatePersonaAnalyses, 
  onUpdateOverallAnalysis,
  onRunSimulation,
  simulationComplete,
  onContinue, 
  onBack,
  onSkip, 
  onSaveDraft 
}) => {
  const [selectedPersonaId, setSelectedPersonaId] = useState<number | null>(personas.length > 0 ? personas[0].id : null);
  const [expandedSection, setExpandedSection] = useState<string | null>('individual-analysis');

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  const getAnswersForPersona = (personaId: number) => {
    return personaAnswers.filter(a => a.personaId === personaId);
  };

  const getAnalysisForPersona = (personaId: number) => {
    return personaAnalyses.find(a => a.personaId === personaId);
  };

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-green-400';
    if (score >= 5) return 'text-yellow-400';
    return 'text-red-400';
  };

  const selectedPersona = personas.find(p => p.id === selectedPersonaId);
  const selectedPersonaAnalysis = selectedPersona ? getAnalysisForPersona(selectedPersona.id) : null;

  return (
    <div className="p-6 h-full overflow-y-auto space-y-4 text-sm">
      <h3 className="text-base font-semibold text-white mb-3 flex items-center">
        <Brain className="w-5 h-5 text-linkedin-light mr-2" />
        AI Simulation
      </h3>
      
      <p className="text-gray-300 text-xs mb-4">
        The AI will simulate interviews with each persona using your questionnaire. This will provide valuable insights about how your target audience perceives your solution.
      </p>
      
      {!simulationComplete ? (
        <div className="bg-linkedin-card/30 rounded-lg p-6 text-center">
          <Brain className="w-12 h-12 text-linkedin-light mx-auto mb-4" />
          <h4 className="text-white font-medium text-sm mb-2">Ready to Run Simulation</h4>
          <p className="text-gray-300 text-xs mb-4">
            The AI will simulate interviews with {personas.length} personas using {questions.length} questions from your questionnaire.
          </p>
          <button
            onClick={onRunSimulation}
            className="flex items-center space-x-2 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-6 py-3 rounded-lg font-medium transition-all mx-auto"
          >
            <Play className="w-4 h-4" />
            <span>Run Simulation</span>
          </button>
        </div>
      ) : (
        <>
          {/* Persona Selector */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {personas.map((persona) => (
              <div 
                key={persona.id} 
                onClick={() => setSelectedPersonaId(persona.id)}
                className={`bg-linkedin-card/30 rounded-lg p-4 cursor-pointer transition-all hover:bg-linkedin-card/50 ${
                  selectedPersonaId === persona.id ? 'border border-linkedin-light' : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  <img 
                    src={persona.profilePicture} 
                    alt={persona.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-medium text-xs">{persona.name}</h4>
                    <p className="text-gray-400 text-xs">{persona.professionalRole}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Selected Persona Analysis */}
          {selectedPersona && selectedPersonaAnalysis && (
            <div className="bg-linkedin-card/30 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img 
                    src={selectedPersona.profilePicture} 
                    alt={selectedPersona.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-medium text-xs">{selectedPersona.name}</h4>
                    <p className="text-linkedin-light text-xs">{selectedPersona.professionalRole}</p>
                  </div>
                </div>
              </div>
              
              {/* Individual Analysis */}
              <div className="mb-3">
                <div 
                  className="flex items-center justify-between p-3 bg-linkedin-card/50 rounded-lg cursor-pointer"
                  onClick={() => toggleSection('individual-analysis')}
                >
                  <h5 className="text-white font-medium text-xs">Individual Analysis</h5>
                  {expandedSection === 'individual-analysis' ? (
                    <ChevronUp className="w-4 h-4 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  )}
                </div>
                
                {expandedSection === 'individual-analysis' && (
                  <div className="p-3 border border-linkedin-border/30 rounded-lg mt-2 space-y-4">
                    {/* Problem Validation */}
                    <div>
                      <h6 className="text-linkedin-light text-xs mb-2">Problem Validation</h6>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="bg-linkedin-card/50 rounded-lg p-3">
                          <p className="text-gray-400 text-xs mb-1">Problem Score</p>
                          <p className={`text-sm font-medium ${getScoreColor(selectedPersonaAnalysis.problemScore)}`}>
                            {selectedPersonaAnalysis.problemScore}/10
                          </p>
                        </div>
                        <div className="bg-linkedin-card/50 rounded-lg p-3">
                          <p className="text-gray-400 text-xs mb-1">Current Solution Satisfaction</p>
                          <p className={`text-sm font-medium ${getScoreColor(10 - selectedPersonaAnalysis.solutionSatisfaction)}`}>
                            {selectedPersonaAnalysis.solutionSatisfaction}/10
                          </p>
                        </div>
                        <div className="bg-linkedin-card/50 rounded-lg p-3">
                          <p className="text-gray-400 text-xs mb-1">Willingness to Pay</p>
                          <p className="text-sm font-medium text-white">
                            {selectedPersonaAnalysis.willingnessToPay}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Solution Validation */}
                    <div>
                      <h6 className="text-linkedin-light text-xs mb-2">Solution Validation</h6>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="bg-linkedin-card/50 rounded-lg p-3">
                          <p className="text-gray-400 text-xs mb-1">Interest Level</p>
                          <p className={`text-sm font-medium ${getScoreColor(selectedPersonaAnalysis.interestLevel)}`}>
                            {selectedPersonaAnalysis.interestLevel}/10
                          </p>
                        </div>
                        <div className="bg-linkedin-card/50 rounded-lg p-3">
                          <p className="text-gray-400 text-xs mb-1">Must-Have Features</p>
                          <ul className="list-disc pl-4 text-white text-xs space-y-1">
                            {selectedPersonaAnalysis.mustHaveFeatures.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-linkedin-card/50 rounded-lg p-3">
                          <p className="text-gray-400 text-xs mb-1">Main Objection</p>
                          <p className="text-sm font-medium text-white">
                            {selectedPersonaAnalysis.mainObjection}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Actionable Insights */}
                    <div>
                      <h6 className="text-linkedin-light text-xs mb-2">Actionable Insights</h6>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="bg-linkedin-card/50 rounded-lg p-3">
                          <p className="text-gray-400 text-xs mb-1">Best Messaging</p>
                          <p className="text-sm font-medium text-white">
                            {selectedPersonaAnalysis.bestMessaging}
                          </p>
                        </div>
                        <div className="bg-linkedin-card/50 rounded-lg p-3">
                          <p className="text-gray-400 text-xs mb-1">Sales Approach</p>
                          <p className="text-sm font-medium text-white">
                            {selectedPersonaAnalysis.salesApproach}
                          </p>
                        </div>
                        <div className="bg-linkedin-card/50 rounded-lg p-3">
                          <p className="text-gray-400 text-xs mb-1">Deal Breaker</p>
                          <p className="text-sm font-medium text-white">
                            {selectedPersonaAnalysis.dealBreaker}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Interview Responses */}
              <div className="mb-3">
                <div 
                  className="flex items-center justify-between p-3 bg-linkedin-card/50 rounded-lg cursor-pointer"
                  onClick={() => toggleSection('interview-responses')}
                >
                  <h5 className="text-white font-medium text-xs">Interview Responses</h5>
                  {expandedSection === 'interview-responses' ? (
                    <ChevronUp className="w-4 h-4 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  )}
                </div>
                
                {expandedSection === 'interview-responses' && (
                  <div className="p-3 border border-linkedin-border/30 rounded-lg mt-2 space-y-3">
                    {getAnswersForPersona(selectedPersona.id).map((answer) => {
                      const question = questions.find(q => q.id === answer.questionId);
                      return (
                        <div key={answer.questionId} className="bg-linkedin-card/50 rounded-lg p-3">
                          <p className="text-linkedin-light text-xs mb-1">Q: {question?.text}</p>
                          <p className="text-gray-300 text-xs">A: {answer.answer}</p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}
          
          {/* Overall Analysis */}
          {overallAnalysis && (
            <div className="bg-linkedin-card/30 rounded-lg p-4 mb-4">
              <div 
                className="flex items-center justify-between p-3 bg-linkedin-card/50 rounded-lg cursor-pointer mb-3"
                onClick={() => toggleSection('overall-analysis')}
              >
                <h5 className="text-white font-medium text-xs flex items-center">
                  <BarChart3 className="w-4 h-4 text-linkedin-light mr-1" />
                  Overall Simulation Analysis
                </h5>
                {expandedSection === 'overall-analysis' ? (
                  <ChevronUp className="w-4 h-4 text-gray-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                )}
              </div>
              
              {expandedSection === 'overall-analysis' && (
                <div className="space-y-4">
                  {/* Market Validation */}
                  <div>
                    <h6 className="text-linkedin-light text-xs mb-2">Market Validation</h6>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="bg-linkedin-card/50 rounded-lg p-3">
                        <p className="text-gray-400 text-xs mb-1">Problem Consensus</p>
                        <p className={`text-sm font-medium ${getScoreColor(overallAnalysis.problemConsensus)}`}>
                          {overallAnalysis.problemConsensus}%
                        </p>
                      </div>
                      <div className="bg-linkedin-card/50 rounded-lg p-3">
                        <p className="text-gray-400 text-xs mb-1">Solution Demand</p>
                        <p className={`text-sm font-medium ${getScoreColor(overallAnalysis.solutionDemand)}`}>
                          {overallAnalysis.solutionDemand}/10
                        </p>
                      </div>
                      <div className="bg-linkedin-card/50 rounded-lg p-3">
                        <p className="text-gray-400 text-xs mb-1">Price Validation</p>
                        <p className="text-sm font-medium text-white">
                          {overallAnalysis.priceValidation}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Go-to-Market Strategy */}
                  <div>
                    <h6 className="text-linkedin-light text-xs mb-2">Go-to-Market Strategy</h6>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="bg-linkedin-card/50 rounded-lg p-3">
                        <p className="text-gray-400 text-xs mb-1">Primary Target</p>
                        <p className="text-sm font-medium text-white">
                          {overallAnalysis.primaryTarget}
                        </p>
                      </div>
                      <div className="bg-linkedin-card/50 rounded-lg p-3">
                        <p className="text-gray-400 text-xs mb-1">Core Message</p>
                        <p className="text-sm font-medium text-white">
                          {overallAnalysis.coreMessage}
                        </p>
                      </div>
                      <div className="bg-linkedin-card/50 rounded-lg p-3">
                        <p className="text-gray-400 text-xs mb-1">Key Features</p>
                        <ul className="list-disc pl-4 text-white text-xs space-y-1">
                          {overallAnalysis.keyFeatures.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Product-Market Fit Indicators */}
                  <div>
                    <h6 className="text-linkedin-light text-xs mb-2">Product-Market Fit Indicators</h6>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="bg-linkedin-card/50 rounded-lg p-3">
                        <p className="text-gray-400 text-xs mb-1">Fit Score</p>
                        <div className="flex items-center space-x-2">
                          <p className={`text-lg font-bold ${getScoreColor(overallAnalysis.fitScore)}`}>
                            {overallAnalysis.fitScore}/10
                          </p>
                          {overallAnalysis.fitScore >= 7 ? (
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          ) : (
                            <AlertTriangle className="w-4 h-4 text-yellow-400" />
                          )}
                        </div>
                      </div>
                      <div className="bg-linkedin-card/50 rounded-lg p-3">
                        <p className="text-gray-400 text-xs mb-1">Red Flags</p>
                        <ul className="list-disc pl-4 text-red-400 text-xs space-y-1">
                          {overallAnalysis.redFlags.map((flag, index) => (
                            <li key={index}>{flag}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-linkedin-card/50 rounded-lg p-3">
                        <p className="text-gray-400 text-xs mb-1">Green Lights</p>
                        <ul className="list-disc pl-4 text-green-400 text-xs space-y-1">
                          {overallAnalysis.greenLights.map((light, index) => (
                            <li key={index}>{light}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Next Steps */}
                  <div>
                    <h6 className="text-linkedin-light text-xs mb-2">Next Steps</h6>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="bg-linkedin-card/50 rounded-lg p-3">
                        <p className="text-gray-400 text-xs mb-1">Immediate Action</p>
                        <p className="text-sm font-medium text-white">
                          {overallAnalysis.immediateAction}
                        </p>
                      </div>
                      <div className="bg-linkedin-card/50 rounded-lg p-3">
                        <p className="text-gray-400 text-xs mb-1">Product Changes</p>
                        <p className="text-sm font-medium text-white">
                          {overallAnalysis.productChanges}
                        </p>
                      </div>
                      <div className="bg-linkedin-card/50 rounded-lg p-3">
                        <p className="text-gray-400 text-xs mb-1">Further Testing</p>
                        <p className="text-sm font-medium text-white">
                          {overallAnalysis.furtherTesting}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )}
      
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
            onClick={onSaveDraft}
            className="flex items-center space-x-2 bg-linkedin-card hover:bg-linkedin-card/70 text-white px-3 py-1.5 rounded-lg transition-colors text-xs"
          >
            <Save className="w-3 h-3" />
            <span>Save draft</span>
          </button>
        </div>
        <button
          onClick={onContinue}
          className="flex items-center space-x-2 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-4 py-1.5 rounded-lg transition-all text-xs"
        >
          <span>Continue to Business Plan</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default AISimulationInputs;