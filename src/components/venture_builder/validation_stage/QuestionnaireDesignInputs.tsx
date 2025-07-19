import React, { useState } from 'react';
import { 
  MessageSquare, 
  Save, 
  ArrowRight,
  Plus,
  Trash2,
  Edit2,
  Check,
  X
} from 'lucide-react';

interface Question {
  id: number;
  text: string;
  category: 'problem' | 'solution' | 'behavioral';
}

interface QuestionnaireDesignInputsProps {
  questions: Question[];
  onUpdateQuestions: (questions: Question[]) => void;
  onContinue: () => void;
  onSkip: () => void;
  onSaveDraft: () => void;
}

const QuestionnaireDesignInputs: React.FC<QuestionnaireDesignInputsProps> = ({ 
  questions, 
  onUpdateQuestions, 
  onContinue, 
  onSkip, 
  onSaveDraft 
}) => {
  const [activeCategory, setActiveCategory] = useState<'problem' | 'solution' | 'behavioral'>('problem');
  const [editingQuestionId, setEditingQuestionId] = useState<number | null>(null);
  const [newQuestionText, setNewQuestionText] = useState('');
  const [isAddingQuestion, setIsAddingQuestion] = useState(false);

  const categories = [
    { id: 'problem', label: 'Problem Discovery' },
    { id: 'solution', label: 'Solution Validation' },
    { id: 'behavioral', label: 'Behavioral & Contextual' }
  ];

  const filteredQuestions = questions.filter(q => q.category === activeCategory);

  const handleAddQuestion = () => {
    if (newQuestionText.trim()) {
      const newQuestion: Question = {
        id: Date.now(),
        text: newQuestionText.trim(),
        category: activeCategory
      };
      
      onUpdateQuestions([...questions, newQuestion]);
      setNewQuestionText('');
      setIsAddingQuestion(false);
    }
  };

  const handleUpdateQuestion = (id: number, text: string) => {
    const updatedQuestions = questions.map(q => 
      q.id === id ? { ...q, text } : q
    );
    onUpdateQuestions(updatedQuestions);
    setEditingQuestionId(null);
    setNewQuestionText('');
  };

  const handleRemoveQuestion = (id: number) => {
    onUpdateQuestions(questions.filter(q => q.id !== id));
  };

  return (
    <div className="p-6 h-full overflow-y-auto space-y-4 text-sm">
      <h3 className="text-base font-semibold text-white mb-3 flex items-center">
        <MessageSquare className="w-5 h-5 text-linkedin-light mr-2" />
        Questionnaire Design
      </h3>
      
      <p className="text-gray-300 text-xs mb-4">
        Design the interview questionnaire to be used with the AI personas to validate your idea. The AI has pre-filled some recommended questions, but you can add, edit, or remove questions to customize your validation approach.
      </p>
      
      {/* Category Tabs */}
      <div className="flex items-center space-x-2 mb-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id as 'problem' | 'solution' | 'behavioral')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeCategory === category.id
                ? 'bg-linkedin text-white'
                : 'bg-linkedin-card/50 text-gray-300 hover:text-white hover:bg-linkedin-card'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
      
      {/* Questions List */}
      <div className="space-y-3 mb-4">
        {filteredQuestions.map((question) => (
          <div key={question.id} className="bg-linkedin-card/30 rounded-lg p-3">
            {editingQuestionId === question.id ? (
              <div className="space-y-2">
                <textarea
                  value={newQuestionText}
                  onChange={(e) => setNewQuestionText(e.target.value)}
                  className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                  rows={2}
                  placeholder="Enter your question..."
                />
                <div className="flex items-center justify-end space-x-2">
                  <button
                    onClick={() => {
                      setEditingQuestionId(null);
                      setNewQuestionText('');
                    }}
                    className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => handleUpdateQuestion(question.id, newQuestionText)}
                    className="p-1 text-gray-400 hover:text-green-400 transition-colors"
                  >
                    <Check className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-start justify-between">
                <p className="text-gray-300 text-xs flex-1">{question.text}</p>
                <div className="flex items-center space-x-1 ml-2">
                  <button
                    onClick={() => {
                      setEditingQuestionId(question.id);
                      setNewQuestionText(question.text);
                    }}
                    className="p-1 text-gray-400 hover:text-white transition-colors"
                  >
                    <Edit2 className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => handleRemoveQuestion(question.id)}
                    className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
        
        {filteredQuestions.length === 0 && !isAddingQuestion && (
          <div className="bg-linkedin-card/30 rounded-lg p-4 text-center">
            <p className="text-gray-400 text-xs">No questions in this category yet. Add a question to get started.</p>
          </div>
        )}
        
        {/* Add New Question Form */}
        {isAddingQuestion && (
          <div className="bg-linkedin-card/30 rounded-lg p-3 border border-linkedin-light">
            <div className="space-y-2">
              <textarea
                value={newQuestionText}
                onChange={(e) => setNewQuestionText(e.target.value)}
                className="w-full bg-linkedin-card border border-linkedin-border rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin resize-none text-xs"
                rows={2}
                placeholder="Enter your question..."
              />
              <div className="flex items-center justify-end space-x-2">
                <button
                  onClick={() => {
                    setIsAddingQuestion(false);
                    setNewQuestionText('');
                  }}
                  className="bg-linkedin-card hover:bg-linkedin-card/70 text-white px-2 py-1 rounded-lg transition-colors text-xs"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddQuestion}
                  className="bg-linkedin hover:bg-linkedin-dark text-white px-2 py-1 rounded-lg transition-colors text-xs flex items-center space-x-1"
                >
                  <Plus className="w-3 h-3" />
                  <span>Add</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Add Question Button */}
      {!isAddingQuestion && (
        <button
          onClick={() => setIsAddingQuestion(true)}
          className="w-full flex items-center justify-center space-x-2 bg-linkedin-card/30 hover:bg-linkedin-card/50 border border-dashed border-linkedin-border hover:border-linkedin text-white px-4 py-3 rounded-lg transition-all text-xs"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Question</span>
        </button>
      )}
      
      {/* Question Examples */}
      <div className="bg-linkedin-card/30 rounded-lg p-4 mt-4">
        <h4 className="text-white font-medium text-xs mb-3">Recommended Questions</h4>
        <div className="space-y-2">
          {activeCategory === 'problem' && (
            <>
              <p className="text-gray-300 text-xs cursor-pointer hover:text-linkedin-light transition-colors">
                Describe your current process for handling digital payments.
              </p>
              <p className="text-gray-300 text-xs cursor-pointer hover:text-linkedin-light transition-colors">
                What's the most frustrating part of processing cross-border transactions?
              </p>
              <p className="text-gray-300 text-xs cursor-pointer hover:text-linkedin-light transition-colors">
                How much time do you spend on payment reconciliation weekly?
              </p>
            </>
          )}
          
          {activeCategory === 'solution' && (
            <>
              <p className="text-gray-300 text-xs cursor-pointer hover:text-linkedin-light transition-colors">
                How would you solve the high transaction fee problem today?
              </p>
              <p className="text-gray-300 text-xs cursor-pointer hover:text-linkedin-light transition-colors">
                What would make our payment solution irresistible to you?
              </p>
              <p className="text-gray-300 text-xs cursor-pointer hover:text-linkedin-light transition-colors">
                How much would you pay for a solution that reduces fees by 60%?
              </p>
            </>
          )}
          
          {activeCategory === 'behavioral' && (
            <>
              <p className="text-gray-300 text-xs cursor-pointer hover:text-linkedin-light transition-colors">
                Walk me through your last experience with implementing a new payment system.
              </p>
              <p className="text-gray-300 text-xs cursor-pointer hover:text-linkedin-light transition-colors">
                Who influences your decisions when adopting new financial technology?
              </p>
              <p className="text-gray-300 text-xs cursor-pointer hover:text-linkedin-light transition-colors">
                How do you typically discover new business solutions?
              </p>
            </>
          )}
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-linkedin-border mt-4">
        <div className="flex items-center space-x-3">
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
        <button
          onClick={onContinue}
          className="flex items-center space-x-2 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-4 py-1.5 rounded-lg transition-all text-xs"
        >
          <span>Continue to AI Simulation</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default QuestionnaireDesignInputs;