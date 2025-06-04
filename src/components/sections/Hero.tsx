
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface HeroProps {
  className?: string;
}

const Hero = ({ className = '' }: HeroProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    '/lovable-uploads/0983164f-acdb-4905-95cb-26b442359b78.png',
    '/lovable-uploads/252682c5-c972-4e42-a593-bb2a7394bc28.png',
    '/lovable-uploads/4474302e-e5e5-4ba3-9192-67391533e750.png',
    '/lovable-uploads/3ccdbeec-fd35-495b-812c-08cd01ccce6c.png',
    '/lovable-uploads/e7ba6e3c-19db-4dab-aab5-c09627e1805b.png',
    '/lovable-uploads/8697ab9f-f74f-44fb-902b-c7fe8e6fb9a3.png',
    '/lovable-uploads/e36713f2-eb04-4b7b-9223-eec02ab693ef.png',
    '/lovable-uploads/a55b1108-8b62-4b82-af77-1059a49ac59c.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className={`relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden ${className}`}>
      {/* Slideshow Background */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        ))}
      </div>

      {/* Enhanced background overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-0"></div>
      
      {/* Animated particles overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Transform Your Business With <span className="text-yellow-400 animate-pulse">Intelligent Automation</span>
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Streamline operations, enhance efficiency, and drive growth with our cutting-edge AI-powered automation solutions.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/get-started" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25 px-6 py-3 text-base">
                  Get Started
                </Button>
              </Link>
              <Link to="/services" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 transform hover:scale-105 transition-all duration-300 shadow-lg px-6 py-3 text-base">
                  View Services
                </Button>
              </Link>
            </motion.div>

            {/* Charity Discount Information */}
            <motion.div 
              className="mt-6 sm:mt-8 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-sm sm:text-base text-yellow-100 mb-2">
                <span className="font-semibold text-yellow-400">Special Offer:</span> Organizations that donate to charity receive a 
                <span className="font-bold text-yellow-400"> free consultation</span> and 
                <span className="font-bold text-yellow-400"> 10% discount</span> on all services.
              </p>
              <p className="text-xs sm:text-sm text-gray-300">
                Proof of charitable giving required. Contact us to learn more about this program.
              </p>
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="relative z-10 p-4 sm:p-6 backdrop-blur-sm bg-slate-900/60 border border-yellow-500/30 rounded-lg shadow-2xl">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">Artificial <span className="text-yellow-400">Intelligence</span></h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">Leverage our advanced AI solutions to transform your business operations and drive innovation.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <motion.div 
                    className="bg-slate-800/80 p-3 sm:p-4 rounded-lg border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="h-2 sm:h-3 w-3/4 bg-blue-400/30 rounded mb-2 animate-pulse"></div>
                    <div className="h-1.5 sm:h-2 w-1/2 bg-blue-400/20 rounded mb-2"></div>
                    <div className="h-6 sm:h-8 w-full bg-blue-400/10 rounded mt-3 sm:mt-4"></div>
                  </motion.div>
                  <motion.div 
                    className="bg-slate-800/80 p-3 sm:p-4 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="h-2 sm:h-3 w-3/4 bg-yellow-400/30 rounded mb-2 animate-pulse"></div>
                    <div className="h-1.5 sm:h-2 w-1/2 bg-yellow-400/20 rounded mb-2"></div>
                    <div className="h-6 sm:h-8 w-full bg-yellow-400/10 rounded mt-3 sm:mt-4"></div>
                  </motion.div>
                </div>
              </div>
              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-16 sm:w-24 h-16 sm:h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-20 sm:w-32 h-20 sm:h-32 bg-yellow-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
