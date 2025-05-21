
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface AboutProps {
  className?: string;
}

const About = ({ className = '' }: AboutProps) => {
  const values = [
    {
      title: 'Innovation',
      description: "We constantly push the boundaries of what is possible with AI technology.",
    },
    {
      title: 'Excellence',
      description: "We are committed to delivering high-quality solutions that exceed expectations.",
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
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold italic mb-4">
            "Our dream is to make your dream come true."
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">About Luminak 4 AI</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in November 2024 by Mutsa Malcom and Nyasha Chinyere, Luminak 4 AI has been at the forefront of the artificial intelligence revolution, 
              helping businesses of all sizes leverage AI to transform their operations and achieve 
              unprecedented levels of efficiency and growth.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Under the leadership of CEO Nyasha Chinyere, who is currently enrolled in a Mechatronics and Electrical Engineering program at Chinhoyi University, our team of AI experts, data scientists, and developers 
              are passionate about creating intelligent solutions that solve real-world business problems. Our co-founder Mutsa Malcom, an AI specialist, brings extensive expertise across 
              multiple industries and technologies to deliver customized AI implementation strategies 
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
        
        {/* Team Section */}
        <div className="mt-24">
          <h2 className="section-title text-center mb-12">Our Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* CEO */}
            <motion.div 
              className="flex flex-col md:flex-row items-center bg-card p-6 rounded-lg border border-border/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6 md:mb-0 md:mr-6 flex-shrink-0">
                <img 
                  src="/lovable-uploads/19036257-4522-4a4a-a6d0-6063bb43babd.png" 
                  alt="Nyasha Chinyere, CEO" 
                  className="w-48 h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Nyasha Chinyere</h3>
                <p className="text-brand-600 mb-4">Chief Executive Officer</p>
                <p className="text-muted-foreground mb-4">
                  Currently enrolled in a Mechatronics and Electrical Engineering program at Chinhoyi University, 
                  Nyasha leads Luminak 4 AI with a vision to transform businesses through innovative AI solutions.
                </p>
              </div>
            </motion.div>
            
            {/* Co-founder */}
            <motion.div 
              className="flex flex-col md:flex-row items-center bg-card p-6 rounded-lg border border-border/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="mb-6 md:mb-0 md:mr-6 flex-shrink-0">
                <Avatar className="w-48 h-48 rounded-lg border-2 border-yellow-500">
                  <AvatarFallback className="text-4xl bg-slate-800">MM</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Mutsa Malcom</h3>
                <p className="text-brand-600 mb-4">Co-founder & AI Specialist</p>
                <p className="text-muted-foreground mb-4">
                  As an AI specialist, Malcom brings deep expertise in artificial intelligence and 
                  machine learning technologies that help our clients achieve groundbreaking results.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
