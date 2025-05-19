
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CaseStudyCardProps {
  title: string;
  industry: string;
  description: string;
  results: string[];
  imageSrc: string;
  className?: string;
}

const CaseStudyCard = ({ 
  title, 
  industry, 
  description, 
  results, 
  imageSrc, 
  className 
}: CaseStudyCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn('h-full', className)}
    >
      <Card className="h-full overflow-hidden group">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <p className="text-sm font-medium text-brand-300">{industry}</p>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
        </div>
        <CardContent className="p-6">
          <p className="text-muted-foreground mb-4">{description}</p>
          
          <div className="mb-6">
            <h4 className="font-medium mb-2">Key Results:</h4>
            <ul className="space-y-1">
              {results.map((result, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-brand-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">{result}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Button variant="outline" size="sm" className="w-full">Read Full Case Study</Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CaseStudyCard;
