
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface HeroProps {
  className?: string;
}

const Hero = ({ className = '' }: HeroProps) => {
  return (
    <section className={`relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden ${className}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 w-1/2 h-1/2 bg-gradient-to-br from-accent1-400/20 to-brand-400/20 rounded-full blur-3xl"></div>
        <div className="absolute left-0 bottom-0 translate-y-1/4 -translate-x-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-accent2-400/20 to-brand-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Transform Your Business With <span className="gradient-text">Intelligent Automation</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
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
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">View Services</Button>
            </motion.div>
          </div>
          <div className="lg:w-1/2">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-full h-[400px] rounded-xl bg-gradient-to-br from-brand-500 to-accent1-500 flex items-center justify-center p-1">
                <div className="bg-white dark:bg-slate-900 rounded-lg w-full h-full flex items-center justify-center p-6">
                  <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                    <div className="bg-secondary p-4 rounded-lg">
                      <div className="h-3 w-3/4 bg-brand-200 rounded mb-2"></div>
                      <div className="h-2 w-1/2 bg-brand-200 rounded mb-2"></div>
                      <div className="h-2 w-5/6 bg-brand-200 rounded mb-2"></div>
                      <div className="h-8 w-full bg-brand-100 rounded mt-4"></div>
                    </div>
                    <div className="bg-secondary p-4 rounded-lg">
                      <div className="h-3 w-3/4 bg-accent1-200 rounded mb-2"></div>
                      <div className="h-2 w-1/2 bg-accent1-200 rounded mb-2"></div>
                      <div className="h-2 w-5/6 bg-accent1-200 rounded mb-2"></div>
                      <div className="h-8 w-full bg-accent1-100 rounded mt-4"></div>
                    </div>
                    <div className="bg-secondary p-4 rounded-lg">
                      <div className="h-3 w-3/4 bg-accent2-200 rounded mb-2"></div>
                      <div className="h-2 w-1/2 bg-accent2-200 rounded mb-2"></div>
                      <div className="h-2 w-5/6 bg-accent2-200 rounded mb-2"></div>
                      <div className="h-8 w-full bg-accent2-100 rounded mt-4"></div>
                    </div>
                    <div className="bg-secondary p-4 rounded-lg">
                      <div className="h-3 w-3/4 bg-brand-200 rounded mb-2"></div>
                      <div className="h-2 w-1/2 bg-brand-200 rounded mb-2"></div>
                      <div className="h-2 w-5/6 bg-brand-200 rounded mb-2"></div>
                      <div className="h-8 w-full bg-brand-100 rounded mt-4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent2-500/20 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-brand-500/20 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
