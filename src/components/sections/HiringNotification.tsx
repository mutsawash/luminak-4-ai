
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, X, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';

const HiringNotification = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showAvatar, setShowAvatar] = useState(false);
  const [avatarMessage, setAvatarMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messages = [
    "Hello! I'm Lumi, your AI assistant. Need help navigating our site?",
    "We're hiring talented AI professionals. Want to join our team?",
    "Our dream is to make your dream come true with innovative AI solutions.",
    "Try our voice navigation! Click the microphone icon in the bottom-left corner.",
    "Looking for AI solutions? I can help you find the right service for your needs."
  ];
  
  useEffect(() => {
    if (showAvatar) {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      typeMessage(randomMessage);
    }
  }, [showAvatar]);
  
  const typeMessage = (message: string) => {
    setIsTyping(true);
    setAvatarMessage('');
    
    let i = 0;
    const typing = setInterval(() => {
      if (i < message.length) {
        setAvatarMessage(prev => prev + message.charAt(i));
        i++;
      } else {
        clearInterval(typing);
        setIsTyping(false);
      }
    }, 30);
    
    return () => clearInterval(typing);
  };
  
  const toggleAvatar = () => {
    setShowAvatar(!showAvatar);
    if (!showAvatar) {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      typeMessage(randomMessage);
    }
  };
  
  if (!isVisible) return null;
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed bottom-4 right-4 z-50 max-w-sm"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-brand-600 rounded-lg shadow-lg p-4 text-white border border-brand-400">
            <div className="flex items-start">
              <div className="bg-white/20 p-2 rounded-full mr-3 cursor-pointer" onClick={toggleAvatar}>
                <Briefcase className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">We're Hiring!</h3>
                <p className="text-sm mb-3">Join Luminak 4 AI and help shape the future of artificial intelligence.</p>
                <div className="flex space-x-2">
                  <Button 
                    asChild 
                    size="sm" 
                    variant="secondary"
                    className="bg-white text-brand-700 hover:bg-gray-100"
                  >
                    <Link to="/careers">View Openings</Link>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="ghost"
                    className="text-white hover:bg-brand-500"
                    onClick={() => setIsVisible(false)}
                  >
                    Dismiss
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-white hover:bg-brand-500 ml-auto"
                    onClick={toggleAvatar}
                  >
                    {showAvatar ? <ChevronDown size={16} /> : <MessageSquare size={16} />}
                  </Button>
                </div>
              </div>
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:bg-brand-500 -mt-1 -mr-2"
                onClick={() => setIsVisible(false)}
              >
                <X size={16} />
              </Button>
            </div>
            
            {/* AI Avatar Assistant */}
            <AnimatePresence>
              {showAvatar && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 pt-3 border-t border-brand-400"
                >
                  <div className="flex items-start">
                    <div className="bg-white/20 p-2 rounded-full mr-3 h-10 w-10 flex items-center justify-center overflow-hidden">
                      {/* AI Avatar Image - Using a placeholder gradient */}
                      <div className="h-full w-full rounded-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">Lumi - AI Assistant</h4>
                      <div className="mt-1 p-2 bg-white/10 rounded-lg">
                        <p className="text-sm">
                          {avatarMessage}
                          {isTyping && <span className="animate-pulse">|</span>}
                        </p>
                      </div>
                      {!isTyping && (
                        <div className="flex mt-2 space-x-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-white text-xs px-2 py-0 h-6 hover:bg-brand-500"
                            onClick={() => typeMessage("You can use voice commands to navigate our site. Try saying 'go to services' or 'about us'.")}
                          >
                            Voice Navigation Help
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-white text-xs px-2 py-0 h-6 hover:bg-brand-500"
                            onClick={() => typeMessage("We're experts in AI automation, machine learning, and innovative digital solutions. How can we help you today?")}
                          >
                            Tell Me More
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HiringNotification;
