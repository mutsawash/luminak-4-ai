
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  index: number;
  link?: string;
}

const ServiceCard = ({ icon: Icon, title, description, features, index, link }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full bg-card border-border/50 hover:border-brand-500/30 hover:shadow-lg hover:shadow-brand-500/10 transition-all duration-300">
        <CardHeader>
          <Icon className="w-12 h-12 text-brand-600 mb-4" />
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 mb-6">
            {features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start">
                <span className="w-2 h-2 bg-brand-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
          {link ? (
            <Link to={link}>
              <Button variant="outline" className="w-full hover:bg-brand-50">
                Learn More
              </Button>
            </Link>
          ) : (
            <Button variant="outline" className="w-full hover:bg-brand-50">
              Learn More
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
