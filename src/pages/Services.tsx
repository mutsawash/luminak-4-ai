
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Services from '@/components/sections/Services';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bot, BarChart3, MessageSquare, Database, Code, ShieldCheck, AlertTriangle, Clock, DollarSign } from 'lucide-react';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const detailedServices = [
    {
      title: 'Process Automation',
      icon: Bot,
      price: '$1,499 - $2,999',
      description: 'Streamline workflows, eliminate repetitive tasks, and optimize business processes with intelligent automation solutions.',
      painPoints: [
        'Manual data entry consuming hours daily',
        'Repetitive tasks reducing productivity',
        'Human errors in routine processes',
        'Inconsistent workflow execution'
      ],
      solutions: [
        'Automated data processing and entry',
        'Intelligent workflow orchestration',
        'Error-free process execution',
        'Real-time monitoring and alerts',
        'Custom automation for your specific needs'
      ]
    },
    {
      title: 'Predictive Analytics',
      icon: BarChart3,
      price: '$1,999 - $2,999',
      description: 'Leverage AI-powered analytics to forecast trends, identify opportunities, and make data-driven decisions.',
      painPoints: [
        'Difficulty predicting market trends',
        'Reactive rather than proactive decisions',
        'Limited insights from existing data',
        'Missed business opportunities'
      ],
      solutions: [
        'Advanced forecasting models',
        'Real-time trend analysis',
        'Actionable business insights',
        'Risk assessment and mitigation',
        'Performance prediction and optimization'
      ]
    },
    {
      title: 'Chatbot Integration',
      icon: MessageSquare,
      price: '$999 - $2,499',
      description: 'Enhance customer experience with intelligent chatbots that provide instant support and personalized interactions.',
      painPoints: [
        'Long customer response times',
        'High customer service costs',
        'Limited availability outside business hours',
        'Inconsistent customer experience'
      ],
      solutions: [
        '24/7 instant customer support',
        'Personalized customer interactions',
        'Multi-language support capability',
        'Seamless human handoff when needed',
        'Integration with existing systems'
      ]
    },
    {
      title: 'Data Management',
      icon: Database,
      price: '$1,299 - $2,799',
      description: 'Organize, analyze, and extract insights from your data with our comprehensive data management solutions.',
      painPoints: [
        'Scattered data across multiple systems',
        'Difficulty accessing relevant information',
        'Poor data quality and consistency',
        'Limited data analysis capabilities'
      ],
      solutions: [
        'Centralized data integration',
        'Automated data cleaning and validation',
        'Advanced analytics and reporting',
        'Real-time data visualization',
        'Secure data storage and backup'
      ]
    },
    {
      title: 'Custom AI Development',
      icon: Code,
      price: '$2,499 - $2,999',
      description: 'Tailor-made AI solutions designed to address your specific business challenges and requirements.',
      painPoints: [
        'Unique business challenges with no off-the-shelf solutions',
        'Complex industry-specific requirements',
        'Integration challenges with legacy systems',
        'Need for competitive differentiation'
      ],
      solutions: [
        'Bespoke AI model development',
        'Custom algorithm creation',
        'Legacy system integration',
        'Proprietary solution development',
        'Ongoing optimization and updates'
      ]
    },
    {
      title: 'AI Security & Compliance',
      icon: ShieldCheck,
      price: '$1,799 - $2,999',
      description: 'Implement AI solutions with robust security measures that adhere to industry standards and regulations.',
      painPoints: [
        'Data security and privacy concerns',
        'Regulatory compliance requirements',
        'Risk of AI bias and discrimination',
        'Lack of AI governance frameworks'
      ],
      solutions: [
        'GDPR and industry compliance',
        'Advanced encryption and security',
        'Bias detection and mitigation',
        'AI governance framework implementation',
        'Regular security audits and updates'
      ]
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>AI Services - Luminak 4 AI | Professional AI Automation Solutions</title>
        <meta 
          name="description" 
          content="Explore our range of AI automation services designed to streamline your business operations and drive efficiency. From $999 to custom enterprise solutions."
        />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <section className="pt-24 sm:pt-32 pb-8 sm:pb-12">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-16">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                  Our <span className="gradient-text">AI Services</span>
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Comprehensive AI solutions tailored to your business needs. Optimize processes, 
                  enhance customer experiences, and make data-driven decisions with our expertise.
                </p>
              </div>
            </div>
          </section>
          
          {/* Detailed Services Section */}
          <section className="py-16 sm:py-20">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                {detailedServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full bg-slate-800/50 border-slate-700 hover:border-yellow-500/50 transition-all duration-300">
                      <CardHeader className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <service.icon className="w-12 h-12 text-yellow-400" />
                          <div>
                            <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                            <div className="flex items-center gap-2 text-yellow-400 font-semibold">
                              <DollarSign className="w-4 h-4" />
                              <span>{service.price}</span>
                            </div>
                          </div>
                        </div>
                        <CardDescription className="text-gray-300 text-base">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-6 pt-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <AlertTriangle className="w-5 h-5 text-red-400" />
                              <h4 className="font-semibold text-red-400">Pain Points We Solve</h4>
                            </div>
                            <ul className="space-y-2">
                              {service.painPoints.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                                  <span className="text-gray-300 text-sm">{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <ShieldCheck className="w-5 h-5 text-green-400" />
                              <h4 className="font-semibold text-green-400">Our Solutions</h4>
                            </div>
                            <ul className="space-y-2">
                              {service.solutions.map((solution, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                                  <span className="text-gray-300 text-sm">{solution}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="mt-6 pt-6 border-t border-slate-700">
                          <Link to="/contact-form">
                            <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900">
                              Get Started with {service.title}
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          <Services className="pt-0" />
          
          <section className="py-16 sm:py-20 bg-secondary/50">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="section-title text-2xl sm:text-3xl lg:text-4xl">Ready to Transform Your Business?</h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                  Connect with our team of AI experts to discuss how our solutions 
                  can address your specific business challenges. Starting from $999.
                </p>
                
                {/* Charity Discount Information */}
                <div className="mb-6 sm:mb-8 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg backdrop-blur-sm">
                  <p className="text-sm sm:text-base text-yellow-100 mb-2">
                    <span className="font-semibold text-yellow-400">🎁 Special Offer:</span> Organizations that donate to charity receive a 
                    <span className="font-bold text-yellow-400"> free consultation</span> and 
                    <span className="font-bold text-yellow-400"> 10% discount</span> on all services.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-300">
                    Proof of charitable giving required.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                  <Link to="/consultation" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8">
                      Schedule a Consultation
                    </Button>
                  </Link>
                  <Link to="/pricing" className="w-full sm:w-auto">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8">
                      View Pricing Plans
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
