
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { motion } from 'framer-motion';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: Date;
  author: string;
  category: string;
  imageSrc: string;
  className?: string;
}

const BlogCard = ({ 
  title, 
  excerpt, 
  date, 
  author, 
  category, 
  imageSrc, 
  className 
}: BlogCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn('h-full', className)}
    >
      <Card className="h-full overflow-hidden border border-border/50 hover:border-brand-500/50 hover:shadow-md transition-all">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-all duration-500 hover:scale-105" 
          />
          <div className="absolute top-0 left-0 m-4">
            <span className="px-3 py-1 bg-brand-500 text-white text-xs font-medium rounded-full">
              {category}
            </span>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex items-center text-sm text-muted-foreground mb-3">
            <span>{format(date, 'MMM d, yyyy')}</span>
            <span className="mx-2">•</span>
            <span>{author}</span>
          </div>
          <h3 className="text-xl font-semibold mb-3 line-clamp-2">{title}</h3>
          <p className="text-muted-foreground line-clamp-3 mb-4">{excerpt}</p>
          <div className="flex items-center text-brand-600 font-medium">
            <span>Read Article</span>
            <svg 
              className="ml-1 w-5 h-5 transition-transform hover:translate-x-1" 
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

export default BlogCard;
