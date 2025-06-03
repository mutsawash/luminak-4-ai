
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface HeroProps {
  className?: string;
}

const Hero = ({ className = '' }: HeroProps) => {
  return (
    <section className={`relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden ${className}`} 
      style={{
        backgroundImage: `url('/lovable-uploads/19c9299a-9656-496d-b9ea-77844423452a.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Enhanced background overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-0"></div>
      
      {/* Animated particles overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Transform Your Business With <span className="text-yellow-400 animate-pulse">Intelligent Automation</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Streamline operations, enhance efficiency, and drive growth with our cutting-edge AI-powered automation solutions.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/get-started">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25">
                  Get Started
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  View Services
                </Button>
              </Link>
            </motion.div>
          </div>
          <div className="lg:w-1/2">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative z-10 p-6 backdrop-blur-sm bg-slate-900/60 border border-yellow-500/30 rounded-lg shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 text-white">Artificial <span className="text-yellow-400">Intelligence</span></h3>
                <p className="text-gray-300 mb-4">Leverage our advanced AI solutions to transform your business operations and drive innovation.</p>
                <div className="grid grid-cols-2 gap-4">
                  <motion.div 
                    className="bg-slate-800/80 p-4 rounded-lg border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="h-3 w-3/4 bg-blue-400/30 rounded mb-2 animate-pulse"></div>
                    <div className="h-2 w-1/2 bg-blue-400/20 rounded mb-2"></div>
                    <div className="h-8 w-full bg-blue-400/10 rounded mt-4"></div>
                  </motion.div>
                  <motion.div 
                    className="bg-slate-800/80 p-4 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="h-3 w-3/4 bg-yellow-400/30 rounded mb-2 animate-pulse"></div>
                    <div className="h-2 w-1/2 bg-yellow-400/20 rounded mb-2"></div>
                    <div className="h-8 w-full bg-yellow-400/10 rounded mt-4"></div>
                  </motion.div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-yellow-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
