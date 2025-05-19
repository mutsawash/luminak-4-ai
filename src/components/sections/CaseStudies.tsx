
import CaseStudyCard from '@/components/ui/CaseStudyCard';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface CaseStudiesProps {
  className?: string;
}

const CaseStudies = ({ className = '' }: CaseStudiesProps) => {
  const caseStudies = [
    {
      title: 'Financial Forecasting Transformation',
      industry: 'Banking & Finance',
      description: 'Implemented AI-powered predictive analytics to revolutionize financial forecasting for a leading bank.',
      results: [
        '42% improvement in forecast accuracy',
        '25% reduction in analysis time',
        'Saved $1.2M in operational costs'
      ],
      imageSrc: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'
    },
    {
      title: 'Customer Support Automation',
      industry: 'E-commerce',
      description: 'Developed an intelligent chatbot solution that transformed customer service operations for an online retailer.',
      results: [
        '24/7 instant customer support',
        '72% reduction in response time',
        '35% increase in customer satisfaction'
      ],
      imageSrc: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
    },
    {
      title: 'Manufacturing Process Optimization',
      industry: 'Manufacturing',
      description: 'Created a comprehensive AI system to optimize production processes and reduce waste.',
      results: [
        '31% increase in productivity',
        '22% reduction in material waste',
        '$3.5M annual cost savings'
      ],
      imageSrc: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
    }
  ];

  return (
    <section className={`py-24 ${className}`}>
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Success Stories</h2>
          <p className="section-subtitle">
            See how our AI solutions have helped businesses across various industries achieve their goals and drive meaningful results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CaseStudyCard
                title={study.title}
                industry={study.industry}
                description={study.description}
                results={study.results}
                imageSrc={study.imageSrc}
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button>View All Case Studies</Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
