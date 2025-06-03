
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Cog, 
  BarChart3, 
  Users, 
  Clock, 
  DollarSign,
  CheckCircle,
  ArrowRight,
  Bot,
  Workflow,
  Database,
  MessageSquare
} from 'lucide-react';

const AutomationServices = () => {
  const automationTypes = [
    {
      title: 'Process Automation',
      icon: Workflow,
      description: 'Streamline repetitive tasks and eliminate manual bottlenecks',
      features: [
        'Document processing automation',
        'Data entry elimination',
        'Workflow orchestration',
        'Task scheduling',
        'Error reduction'
      ],
      benefits: [
        '80% reduction in processing time',
        '95% accuracy improvement',
        '60% cost savings',
        '24/7 operation capability'
      ]
    },
    {
      title: 'Intelligent Chatbots',
      icon: MessageSquare,
      description: 'AI-powered customer service and internal communication bots',
      features: [
        'Natural language processing',
        'Multi-channel deployment',
        'Sentiment analysis',
        'Escalation management',
        'Knowledge base integration'
      ],
      benefits: [
        '70% reduction in support tickets',
        '24/7 customer availability',
        '50% faster response times',
        'Improved customer satisfaction'
      ]
    },
    {
      title: 'Data Analytics Automation',
      icon: BarChart3,
      description: 'Automated data collection, processing, and insight generation',
      features: [
        'Real-time data processing',
        'Automated reporting',
        'Predictive analytics',
        'Data visualization',
        'Alert systems'
      ],
      benefits: [
        'Real-time business insights',
        '90% faster reporting',
        'Predictive decision making',
        'Data-driven strategies'
      ]
    },
    {
      title: 'Robotic Process Automation',
      icon: Bot,
      description: 'Software robots that mimic human actions across systems',
      features: [
        'Screen scraping',
        'System integration',
        'Rule-based processing',
        'Exception handling',
        'Audit trails'
      ],
      benefits: [
        '100% accuracy in rule-based tasks',
        'Scalable workforce',
        'Compliance assurance',
        'ROI within 6 months'
      ]
    }
  ];

  const implementationProcess = [
    {
      step: 1,
      title: 'Discovery & Assessment',
      description: 'We analyze your current processes to identify automation opportunities',
      duration: '1-2 weeks'
    },
    {
      step: 2,
      title: 'Solution Design',
      description: 'Custom automation solutions tailored to your specific needs',
      duration: '2-3 weeks'
    },
    {
      step: 3,
      title: 'Development & Testing',
      description: 'Build and rigorously test the automation systems',
      duration: '4-8 weeks'
    },
    {
      step: 4,
      title: 'Deployment & Training',
      description: 'Roll out the solution and train your team',
      duration: '1-2 weeks'
    },
    {
      step: 5,
      title: 'Optimization',
      description: 'Ongoing monitoring and optimization for maximum efficiency',
      duration: 'Ongoing'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Automation Services - Luminak 4 AI</title>
        <meta 
          name="description" 
          content="Comprehensive AI automation services to streamline your business processes, reduce costs, and improve efficiency."
        />
      </Helmet>
      
      <div className="flex flex-col min-h-screen bg-slate-900">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="container max-w-7xl mx-auto px-4">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                  Intelligent <span className="text-yellow-400">Automation</span> Services
                </h1>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                  Transform your business operations with our comprehensive automation solutions. 
                  Reduce costs, eliminate errors, and free your team to focus on strategic initiatives.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact-form">
                    <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold">
                      Start Your Automation Journey
                    </Button>
                  </Link>
                  <Link to="/pricing">
                    <Button size="lg" variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10">
                      View Pricing
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Key Benefits */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {[
                  { icon: Clock, title: '80% Time Savings', description: 'Automate repetitive tasks' },
                  { icon: DollarSign, title: '60% Cost Reduction', description: 'Eliminate manual overhead' },
                  { icon: CheckCircle, title: '99% Accuracy', description: 'Eliminate human error' },
                  { icon: Users, title: '24/7 Operation', description: 'Never stop working' }
                ].map((benefit, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700 text-center">
                    <CardContent className="pt-6">
                      <benefit.icon className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                      <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                      <p className="text-gray-400 text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Automation Types */}
          <section className="py-20 bg-slate-800/30">
            <div className="container max-w-7xl mx-auto px-4">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Our Automation <span className="text-yellow-400">Solutions</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Comprehensive automation services designed to transform every aspect of your business operations.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {automationTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-slate-800/50 border-slate-700 h-full">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-4">
                          <type.icon className="w-8 h-8 text-yellow-400" />
                          <CardTitle className="text-xl text-white">{type.title}</CardTitle>
                        </div>
                        <CardDescription className="text-gray-300">
                          {type.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-yellow-400 font-semibold mb-3">Features</h4>
                            <ul className="space-y-2">
                              {type.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start gap-2">
                                  <Zap className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-300 text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-yellow-400 font-semibold mb-3">Benefits</h4>
                            <ul className="space-y-2">
                              {type.benefits.map((benefit, benefitIndex) => (
                                <li key={benefitIndex} className="flex items-start gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-300 text-sm">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Implementation Process */}
          <section className="py-20">
            <div className="container max-w-7xl mx-auto px-4">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Our Implementation <span className="text-yellow-400">Process</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  A proven methodology that ensures successful automation deployment and maximum ROI.
                </p>
              </motion.div>

              <div className="space-y-8">
                {implementationProcess.map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-6"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-slate-900 font-bold text-lg">
                        {phase.step}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <Card className="bg-slate-800/30 border-slate-700">
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-semibold text-white">{phase.title}</h3>
                            <span className="text-yellow-400 text-sm font-medium">{phase.duration}</span>
                          </div>
                          <p className="text-gray-300">{phase.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    {index < implementationProcess.length - 1 && (
                      <div className="flex-shrink-0 mt-6">
                        <ArrowRight className="w-6 h-6 text-yellow-400" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-slate-800/30">
            <div className="container max-w-4xl mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Ready to <span className="text-yellow-400">Automate</span> Your Business?
                </h2>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join hundreds of companies that have transformed their operations with our automation solutions. 
                  Get started with a free consultation today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact-form">
                    <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold">
                      Schedule Free Consultation
                    </Button>
                  </Link>
                  <Link to="/case-studies">
                    <Button size="lg" variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10">
                      View Success Stories
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

export default AutomationServices;
