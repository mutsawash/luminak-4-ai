
import React from 'react';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ShoppingCart, 
  Stethoscope, 
  GraduationCap, 
  Car, 
  Utensils,
  TrendingUp,
  Users,
  Zap,
  Shield,
  Brain,
  Rocket
} from 'lucide-react';

const GetStarted = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  const industries = [
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: Stethoscope,
      description: 'AI-powered diagnostics, patient management, and treatment optimization',
      benefits: [
        'Automated patient scheduling and reminders',
        'AI-powered diagnostic assistance',
        'Predictive analytics for patient outcomes',
        'Medical imaging analysis',
        'Drug discovery acceleration'
      ]
    },
    {
      id: 'retail',
      name: 'Retail & E-commerce',
      icon: ShoppingCart,
      description: 'Personalized shopping experiences and inventory optimization',
      benefits: [
        'Personalized product recommendations',
        'Dynamic pricing optimization',
        'Inventory management automation',
        'Customer behavior analytics',
        'Chatbot customer support'
      ]
    },
    {
      id: 'finance',
      name: 'Finance & Banking',
      icon: TrendingUp,
      description: 'Risk assessment, fraud detection, and automated trading',
      benefits: [
        'Fraud detection and prevention',
        'Credit risk assessment',
        'Algorithmic trading strategies',
        'Regulatory compliance automation',
        'Customer service chatbots'
      ]
    },
    {
      id: 'education',
      name: 'Education',
      icon: GraduationCap,
      description: 'Personalized learning and administrative automation',
      benefits: [
        'Personalized learning paths',
        'Automated grading and feedback',
        'Student performance analytics',
        'Administrative task automation',
        'Virtual tutoring systems'
      ]
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      icon: Building2,
      description: 'Predictive maintenance and quality control automation',
      benefits: [
        'Predictive maintenance systems',
        'Quality control automation',
        'Supply chain optimization',
        'Production planning AI',
        'Safety monitoring systems'
      ]
    },
    {
      id: 'automotive',
      name: 'Automotive',
      icon: Car,
      description: 'Autonomous systems and smart manufacturing',
      benefits: [
        'Autonomous driving systems',
        'Predictive vehicle maintenance',
        'Smart manufacturing processes',
        'Supply chain optimization',
        'Customer experience enhancement'
      ]
    },
    {
      id: 'hospitality',
      name: 'Hospitality',
      icon: Utensils,
      description: 'Guest experience optimization and operational efficiency',
      benefits: [
        'Personalized guest experiences',
        'Revenue management optimization',
        'Automated booking systems',
        'Operational efficiency improvements',
        'Predictive demand forecasting'
      ]
    },
    {
      id: 'general',
      name: 'General Business',
      icon: Rocket,
      description: 'Universal AI solutions for any business type',
      benefits: [
        'Process automation',
        'Data analytics and insights',
        'Customer relationship management',
        'Marketing optimization',
        'Operational efficiency improvements'
      ]
    }
  ];

  const selectedIndustryData = industries.find(i => i.id === selectedIndustry);

  return (
    <React.Fragment>
      <Helmet>
        <title>Get Started - Luminak 4 AI | Discover AI Solutions for Your Industry</title>
        <meta 
          name="description" 
          content="Discover how AI can transform your business. Explore industry-specific solutions and get started with intelligent automation from $1,499."
        />
      </Helmet>
      
      <div className="flex flex-col min-h-screen bg-slate-900">
        <Header />
        
        <main className="flex-grow">
          <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12 sm:mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
                  How Can <span className="text-yellow-400">AI Transform</span> Your Business?
                </h1>
                <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Select your industry to discover tailored AI solutions that can revolutionize your operations, 
                  increase efficiency, and drive unprecedented growth.
                </p>

                {/* Vision and Goals Section */}
                <div className="mt-8 p-6 bg-slate-800/50 border border-yellow-500/30 rounded-lg backdrop-blur-sm max-w-4xl mx-auto">
                  <h2 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-4">Our Vision & Long-Term Goals</h2>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    At Luminak 4 AI, we envision a future where artificial intelligence seamlessly integrates into every aspect of business operations, 
                    creating unprecedented opportunities for growth and innovation. Our long-term goal is to democratize AI technology, making it accessible 
                    to businesses of all sizes while ensuring ethical implementation and sustainable impact. We strive to be the leading catalyst in the 
                    global AI transformation, helping organizations not just adopt technology, but truly thrive in the digital age.
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
                {industries.map((industry, index) => {
                  const IconComponent = industry.icon;
                  const isSelected = selectedIndustry === industry.id;
                  const cardClasses = `cursor-pointer transition-all duration-300 bg-slate-800/50 border-slate-700 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10 ${isSelected ? 'border-yellow-500 bg-slate-800 scale-105' : ''}`;
                  
                  return (
                    <motion.div
                      key={industry.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card 
                        className={cardClasses}
                        onClick={() => setSelectedIndustry(industry.id)}
                      >
                        <CardHeader className="text-center p-4 sm:p-6">
                          <IconComponent className="w-10 sm:w-12 h-10 sm:h-12 mx-auto mb-3 sm:mb-4 text-yellow-400" />
                          <CardTitle className="text-white text-base sm:text-lg">{industry.name}</CardTitle>
                          <CardDescription className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                            {industry.description}
                          </CardDescription>
                        </CardHeader>
                      </Card>

                      {/* Show benefits directly underneath when selected */}
                      {selectedIndustry === industry.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                          className="mt-4"
                        >
                          <Card className="bg-slate-800/70 border-yellow-500/50">
                            <CardContent className="p-4">
                              <h4 className="text-yellow-400 font-semibold mb-3 text-sm">Key Benefits:</h4>
                              <div className="space-y-2">
                                {industry.benefits.map((benefit, idx) => (
                                  <div key={idx} className="flex items-start gap-2">
                                    <Zap className="w-3 h-3 text-yellow-400 mt-1 flex-shrink-0" />
                                    <span className="text-gray-300 text-xs">{benefit}</span>
                                  </div>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Ready to Get Started?</h2>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                  <Link to="/pricing" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold text-sm sm:text-base px-6 sm:px-8">
                      View Plans & Pricing
                    </Button>
                  </Link>
                  <Link to="/consultation" className="w-full sm:w-auto">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 text-sm sm:text-base px-6 sm:px-8">
                      Book Consultation
                    </Button>
                  </Link>
                  <Link to="/contact-form" className="w-full sm:w-auto">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 text-sm sm:text-base px-6 sm:px-8">
                      Request Consultation
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default GetStarted;
