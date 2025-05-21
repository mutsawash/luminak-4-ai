
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HiringForm from '@/components/sections/HiringForm';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

const HiringPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check for user preference from localStorage or system preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true' || 
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setDarkMode(isDarkMode);
    updateTheme(isDarkMode);
  }, []);
  
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', String(newMode));
    updateTheme(newMode);
  };
  
  const updateTheme = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  
  return (
    <>
      <Helmet>
        <title>Careers at Luminak 4 AI - Join Our Team</title>
        <meta 
          name="description" 
          content="Join Luminak 4 AI and help shape the future of artificial intelligence. Browse open positions and apply today."
        />
      </Helmet>
      
      <div className={`flex flex-col min-h-screen ${darkMode ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-900'}`}>
        <Header />
        
        <main className="flex-grow">
          {/* Dark mode toggle */}
          <div className="fixed top-24 right-4 z-50">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={toggleDarkMode}
              className={`rounded-full ${darkMode ? 'bg-slate-800 text-yellow-400' : 'bg-white text-slate-900'}`}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle dark mode</span>
            </Button>
          </div>
          
          {/* Hero section */}
          <section className={`py-20 ${darkMode ? 'bg-slate-800' : 'bg-brand-50'}`}>
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto">
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Join Our Team at <span className="gradient-text">Luminak 4 AI</span>
                </motion.h1>
                <motion.p 
                  className="text-lg md:text-xl text-muted-foreground mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Help us make dreams come true by pushing the boundaries of AI innovation
                </motion.p>
              </div>
            </div>
          </section>
          
          {/* Application form */}
          <HiringForm darkMode={darkMode} />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default HiringPage;
