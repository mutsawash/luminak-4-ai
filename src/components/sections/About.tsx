
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface AboutProps {
  className?: string;
}

const About = ({ className = '' }: AboutProps) => {
  const values = [
    {
      title: 'Innovation',
      description: "We constantly push the boundaries of what's possible with AI technology.",
    },
    {
      title: 'Excellence',
      description: "We're committed to delivering high-quality solutions that exceed expectations.",
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their unique challenges.',
    },
    {
      title: 'Integrity',
      description: 'We adhere to the highest ethical standards in all our business practices.',
    },
  ];

  return (
    <section className={`py-24 bg-secondary/50 ${className}`}>
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">About AutomateAI</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2019, AutomateAI has been at the forefront of the artificial intelligence revolution, 
              helping businesses of all sizes leverage AI to transform their operations and achieve 
              unprecedented levels of efficiency and growth.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our team of AI experts, data scientists, and developers are passionate about creating 
              intelligent solutions that solve real-world business problems. With expertise across 
              multiple industries and technologies, we deliver customized AI implementation strategies 
              that align with your business goals.
            </p>
            <Button className="mt-4">Learn More About Us</Button>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-card p-6 rounded-lg border border-border/50 hover:border-brand-500/30 hover:shadow-md transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-brand-600 text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 bg-accent1-500/10 rounded-full blur-xl"></div>
            <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-brand-500/10 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
