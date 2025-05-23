
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
        backgroundImage: `url('/lovable-uploads/ff26c424-90cd-48b0-a5da-06dc0d7497a5.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-0"></div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Transform Your Business With <span className="text-yellow-400">Intelligent Automation</span>
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
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold">Get Started</Button>
              <Button size="lg" variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10">View Services</Button>
            </motion.div>
          </div>
          <div className="lg:w-1/2">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative z-10 p-6 backdrop-blur-sm bg-slate-900/50 border border-yellow-500/30 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-white">Advancial <span className="text-yellow-400">Intelligence</span></h3>
                <p className="text-gray-300 mb-4">Leverage our advanced AI solutions to transform your business operations and drive innovation.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/80 p-4 rounded-lg border border-blue-400/20">
                    <div className="h-3 w-3/4 bg-blue-400/30 rounded mb-2"></div>
                    <div className="h-2 w-1/2 bg-blue-400/20 rounded mb-2"></div>
                    <div className="h-8 w-full bg-blue-400/10 rounded mt-4"></div>
                  </div>
                  <div className="bg-slate-800/80 p-4 rounded-lg border border-yellow-400/20">
                    <div className="h-3 w-3/4 bg-yellow-400/30 rounded mb-2"></div>
                    <div className="h-2 w-1/2 bg-yellow-400/20 rounded mb-2"></div>
                    <div className="h-8 w-full bg-yellow-400/10 rounded mt-4"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-yellow-500/20 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
