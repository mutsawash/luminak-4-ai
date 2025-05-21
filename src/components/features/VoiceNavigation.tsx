
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';
import { Mic, MicOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const VoiceNavigation = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [supported, setSupported] = useState(true);
  const navigate = useNavigate();

  // Routes and their corresponding voice command keywords
  const routes = [
    { path: '/', keywords: ['home', 'main', 'landing', 'front'] },
    { path: '/services', keywords: ['services', 'offerings', 'solutions'] },
    { path: '/about', keywords: ['about', 'company', 'information', 'team'] },
    { path: '/case-studies', keywords: ['case studies', 'projects', 'work', 'portfolio'] },
    { path: '/blog', keywords: ['blog', 'articles', 'posts', 'news'] },
    { path: '/contact', keywords: ['contact', 'reach', 'message', 'connect'] },
    { path: '/careers', keywords: ['careers', 'jobs', 'hiring', 'positions', 'apply'] },
  ];

  useEffect(() => {
    // Check if the SpeechRecognition API is available
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      setSupported(false);
      return;
    }

    // Initialize speech recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setTranscript('Listening...');
    };

    recognition.onresult = (event: any) => {
      const transcript = Array.from(event.results)
        .map((result: any) => result[0])
        .map((result) => result.transcript)
        .join('');
      
      setTranscript(transcript);
      
      // Process voice commands
      processCommand(transcript.toLowerCase());
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error', event.error);
      setIsListening(false);
      toast.error("Voice recognition error", {
        description: event.error === 'not-allowed' ? 'Microphone access denied' : 'Could not recognize speech',
      });
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    // Start or stop recognition based on isListening state
    if (isListening) {
      recognition.start();
    }

    // Cleanup
    return () => {
      recognition.abort();
    };
  }, [isListening]);

  // Process voice commands and navigate accordingly
  const processCommand = (command: string) => {
    console.log("Processing command:", command);
    
    // Navigation commands
    for (const route of routes) {
      if (route.keywords.some(keyword => command.includes(keyword))) {
        toast.success(`Navigating to ${route.path.replace('/', '') || 'Home'}`);
        navigate(route.path);
        setIsListening(false);
        return;
      }
    }

    // Scrolling commands
    if (command.includes('scroll down')) {
      window.scrollBy({ top: window.innerHeight / 2, behavior: 'smooth' });
      setIsListening(false);
      return;
    }
    
    if (command.includes('scroll up')) {
      window.scrollBy({ top: -window.innerHeight / 2, behavior: 'smooth' });
      setIsListening(false);
      return;
    }
    
    if (command.includes('top') || command.includes('beginning')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsListening(false);
      return;
    }
    
    if (command.includes('bottom') || command.includes('end')) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      setIsListening(false);
      return;
    }
    
    // Dark mode command
    if (command.includes('dark mode') || command.includes('light mode')) {
      toast.info("Dark mode toggle command recognized!", {
        description: "This functionality requires connecting to the theme controller.",
      });
      setIsListening(false);
      return;
    }

    // No command matched
    if (!isListening) {
      toast.info("I didn't understand that command", {
        description: "Try saying 'go to home', 'about', 'services', etc."
      });
    }
  };

  const toggleListening = () => {
    if (!supported) {
      toast.error("Voice navigation not supported", {
        description: "Your browser doesn't support the Speech Recognition API."
      });
      return;
    }
    
    if (!isListening) {
      toast.info("Voice navigation activated", {
        description: "Try saying 'go to home', 'services', 'about', etc."
      });
    }
    
    setIsListening(!isListening);
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <Button
        variant="outline"
        size="icon"
        onClick={toggleListening}
        className={`rounded-full shadow-lg ${
          isListening ? 'bg-brand-600 text-white animate-pulse' : 'bg-white text-gray-700'
        }`}
      >
        {isListening ? <Mic /> : <MicOff />}
      </Button>
      
      <AnimatePresence>
        {isListening && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.9 }}
            className="absolute bottom-12 left-0 bg-white dark:bg-slate-800 p-3 rounded-lg shadow-lg min-w-[200px]"
          >
            <p className="text-xs font-medium opacity-70">I heard:</p>
            <p className="text-sm font-medium">{transcript || "Listening..."}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VoiceNavigation;

// TypeScript type augmentation for Window
declare global {
  interface Window {
    SpeechRecognition?: any;
    webkitSpeechRecognition?: any;
  }
}
