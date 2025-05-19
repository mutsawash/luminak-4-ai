
import { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}

const ServiceCard = ({ title, description, icon, className }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn('h-full', className)}
    >
      <Card className="h-full border border-border/50 bg-card/50 backdrop-blur transition-all hover:border-brand-500/50 hover:shadow-md overflow-hidden group">
        <CardContent className="p-6 h-full flex flex-col">
          <div className="w-12 h-12 bg-brand-100 dark:bg-brand-950/50 rounded-lg flex items-center justify-center text-brand-600 mb-5 transition-all group-hover:bg-brand-500 group-hover:text-white">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-muted-foreground flex-grow">{description}</p>
          <div className="mt-4 flex items-center text-brand-600 font-medium">
            <span>Learn more</span>
            <svg 
              className="ml-1 w-5 h-5 transition-transform transform group-hover:translate-x-1" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
