import React, { useState } from 'react';
import { Image, Video, Link, Send, Smile } from 'lucide-react';

const CreatePost: React.FC = () => {
  const [postContent, setPostContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle post submission
    console.log('Post submitted:', postContent);
    setPostContent('');
  };

  return (
    <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
      <form onSubmit={handleSubmit}>
        <div className="flex items-start space-x-4">
          {/* Small Profile Picture */}
          <img 
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100" 
            alt="Your profile" 
            className="w-12 h-12 rounded-full object-cover border-2 border-linkedin"
          />
          
          <div className="flex-1">
            {/* Text Area */}
            <textarea
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              placeholder="What's on your mind? Share insights, ask questions, or start a discussion..."
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg p-4 text-white placeholder-gray-400 resize-none focus:outline-none focus:border-linkedin focus:ring-1 focus:ring-linkedin"
              rows={3}
            />
            
            {/* Actions Row */}
            <div className="flex items-center justify-between mt-4">
              {/* Add Media Buttons */}
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                 className="flex items-center space-x-2 text-gray-400 hover:text-linkedin-light transition-colors"
                >
                  <Image className="w-5 h-5" />
                  <span className="text-sm">Image</span>
                </button>
                
                <button
                  type="button"
                 className="flex items-center space-x-2 text-gray-400 hover:text-linkedin transition-colors"
                >
                  <Video className="w-5 h-5" />
                  <span className="text-sm">Video</span>
                </button>
                
                <button
                  type="button"
                 className="flex items-center space-x-2 text-gray-400 hover:text-linkedin-light transition-colors"
                >
                  <Link className="w-5 h-5" />
                  <span className="text-sm">Link</span>
                </button>
                
                <button
                  type="button"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  <Smile className="w-5 h-5" />
                </button>
              </div>
              
              {/* Share Button */}
              <button
                type="submit"
                disabled={!postContent.trim()}
               className="flex items-center space-x-2 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-medium transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;