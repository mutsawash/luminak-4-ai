
import ServiceCard from '@/components/ui/ServiceCard';
import { Bot, BarChart3, MessageSquare, Database, Code, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServicesProps {
  className?: string;
}

const Services = ({ className = '' }: ServicesProps) => {
  const services = [
    {
      title: 'Process Automation',
      description: 'Streamline workflows, eliminate repetitive tasks, and optimize business processes with intelligent automation solutions.',
      icon: Bot,
    },
    {
      title: 'Predictive Analytics',
      description: 'Leverage AI-powered analytics to forecast trends, identify opportunities, and make data-driven decisions.',
      icon: BarChart3,
    },
    {
      title: 'Chatbot Integration',
      description: 'Enhance customer experience with intelligent chatbots that provide instant support and personalized interactions.',
      icon: MessageSquare,
    },
    {
      title: 'Data Management',
      description: 'Organize, analyze, and extract insights from your data with our comprehensive data management solutions.',
      icon: Database,
    },
    {
      title: 'Custom AI Development',
      description: 'Tailor-made AI solutions designed to address your specific business challenges and requirements.',
      icon: Code,
    },
    {
      title: 'AI Security & Compliance',
      description: 'Implement AI solutions with robust security measures that adhere to industry standards and regulations.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className={`py-24 bg-slate-900 ${className}`}>
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">Our AI Automation Services</h2>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            We provide end-to-end AI solutions that help businesses streamline operations, boost efficiency, and drive innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
              className="bg-slate-800 border-yellow-500/20 hover:border-yellow-500/50"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
