
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  index?: number;
  link?: string;
  className?: string;
}

const ServiceCard = ({ icon: Icon, title, description, features = [], index = 0, link, className }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className={`h-full transition-all duration-300 ${className}`}>
        <CardHeader>
          {Icon && <Icon className="w-12 h-12 text-yellow-400 mb-4" />}
          <CardTitle className="text-xl text-white">{title}</CardTitle>
          <CardDescription className="text-gray-300">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          {features.length > 0 && (
            <ul className="space-y-2 mb-6">
              {features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          )}
          {link ? (
            <Link to={link}>
              <Button variant="outline" className="w-full hover:bg-yellow-50/10 border-yellow-500/30 text-yellow-400">
                Learn More
              </Button>
            </Link>
          ) : (
            <Button variant="outline" className="w-full hover:bg-yellow-50/10 border-yellow-500/30 text-yellow-400">
              Learn More
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
