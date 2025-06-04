
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

      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Transform Your Business With <span className="text-yellow-400 animate-pulse">Intelligent Automation</span>
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Streamline operations, enhance efficiency, and drive growth with our cutting-edge AI-powered automation solutions.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
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
            className="mt-8 sm:mt-12 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg backdrop-blur-sm max-w-2xl mx-auto"
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
      </div>
    </section>
  );
};

export default Hero;
