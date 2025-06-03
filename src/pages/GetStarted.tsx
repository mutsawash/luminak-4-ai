
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

  return (
    <>
      <Helmet>
        <title>Get Started - Luminak 4 AI</title>
        <meta 
          name="description" 
          content="Discover how AI can transform your business. Explore industry-specific solutions and get started with intelligent automation."
        />
      </Helmet>
      
      <div className="flex flex-col min-h-screen bg-slate-900">
        <Header />
        
        <main className="flex-grow">
          <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="container max-w-7xl mx-auto px-4">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                  How Can <span className="text-yellow-400">AI Transform</span> Your Business?
                </h1>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Select your industry to discover tailored AI solutions that can revolutionize your operations, 
                  increase efficiency, and drive unprecedented growth.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {industries.map((industry, index) => (
                  <motion.div
                    key={industry.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card 
                      className={`cursor-pointer transition-all duration-300 bg-slate-800/50 border-slate-700 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10 ${
                        selectedIndustry === industry.id ? 'border-yellow-500 bg-slate-800' : ''
                      }`}
                      onClick={() => setSelectedIndustry(industry.id)}
                    >
                      <CardHeader className="text-center">
                        <industry.icon className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                        <CardTitle className="text-white">{industry.name}</CardTitle>
                        <CardDescription className="text-gray-400">
                          {industry.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {selectedIndustry && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-12"
                >
                  <Card className="bg-slate-800/70 border-yellow-500/30">
                    <CardHeader>
                      <CardTitle className="text-2xl text-white flex items-center gap-3">
                        {industries.find(i => i.id === selectedIndustry)?.icon && (
                          <industries.find(i => i.id === selectedIndustry)!.icon className="w-8 h-8 text-yellow-400" />
                        )}
                        AI Solutions for {industries.find(i => i.id === selectedIndustry)?.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <h3 className="text-lg font-semibold text-yellow-400 mb-4">Key Benefits:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {industries.find(i => i.id === selectedIndustry)?.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <Zap className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/pricing">
                    <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold">
                      View Plans & Pricing
                    </Button>
                  </Link>
                  <Link to="/contact-form">
                    <Button size="lg" variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10">
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
    </>
  );
};

export default GetStarted;
