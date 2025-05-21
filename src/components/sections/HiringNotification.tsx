
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const HiringNotification = () => {
  const [isVisible, setIsVisible] = useState(true);
  
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
              <div className="bg-white/20 p-2 rounded-full mr-3">
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
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HiringNotification;
