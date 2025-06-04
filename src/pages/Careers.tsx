
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Calculator, 
  Brain, 
  Code, 
  BarChart3, 
  Headphones,
  MapPin,
  Clock,
  DollarSign
} from 'lucide-react';

const Careers = () => {
  const openPositions = [
    {
      title: 'AI Strategy Advisor',
      department: 'Strategy',
      type: 'Full-time',
      location: 'Harare, Zimbabwe',
      salary: '$2,000 - $3,000/month',
      icon: Brain,
      description: 'Lead AI strategy development and guide clients through digital transformation journeys.',
      requirements: [
        '5+ years in AI/ML strategy',
        'Strong business acumen',
        'Client-facing experience',
        'Advanced degree preferred'
      ]
    },
    {
      title: 'Senior Accountant',
      department: 'Finance',
      type: 'Full-time',
      location: 'Harare, Zimbabwe',
      salary: '$1,200 - $1,800/month',
      icon: Calculator,
      description: 'Manage financial operations, reporting, and ensure compliance with local and international standards.',
      requirements: [
        'CPA or equivalent certification',
        '3+ years accounting experience',
        'Knowledge of IFRS',
        'Advanced Excel skills'
      ]
    },
    {
      title: 'AI/ML Engineer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Remote/Harare',
      salary: '$1,800 - $2,500/month',
      icon: Code,
      description: 'Develop and implement machine learning models and AI solutions for our clients.',
      requirements: [
        'Strong Python/R programming',
        'Experience with TensorFlow/PyTorch',
        'ML/DL model development',
        'Cloud platform experience (AWS/Azure)'
      ]
    },
    {
      title: 'Data Analytics Specialist',
      department: 'Analytics',
      type: 'Full-time',
      location: 'Harare, Zimbabwe',
      salary: '$1,500 - $2,200/month',
      icon: BarChart3,
      description: 'Transform complex data into actionable insights and create compelling visualizations.',
      requirements: [
        'Expertise in SQL, Python, R',
        'Data visualization tools (Tableau, Power BI)',
        'Statistical analysis experience',
        'Business intelligence background'
      ]
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Success',
      type: 'Full-time',
      location: 'Harare, Zimbabwe',
      salary: '$1,000 - $1,600/month',
      icon: Headphones,
      description: 'Ensure client satisfaction and drive adoption of our AI solutions.',
      requirements: [
        'Customer relationship management',
        'Technical communication skills',
        '2+ years in customer success',
        'Problem-solving abilities'
      ]
    },
    {
      title: 'Business Development Representative',
      department: 'Sales',
      type: 'Full-time',
      location: 'Harare, Zimbabwe',
      salary: '$800 - $1,400/month + Commission',
      icon: Users,
      description: 'Identify new business opportunities and build relationships with potential clients.',
      requirements: [
        'Sales experience preferred',
        'Excellent communication skills',
        'CRM software familiarity',
        'Goal-oriented mindset'
      ]
    }
  ];

  const benefits = [
    'Competitive salary packages',
    'Professional development opportunities',
    'Flexible working arrangements',
    'Health insurance coverage',
    'Performance-based bonuses',
    'Cutting-edge technology access',
    'Collaborative work environment',
    'Career advancement pathways'
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Luminak 4 AI | Join Our AI Innovation Team</title>
        <meta 
          name="description" 
          content="Join the future of AI innovation. Explore career opportunities at Luminak 4 AI including roles for advisors, accountants, engineers, and more."
        />
      </Helmet>
      
      <div className="flex flex-col min-h-screen bg-slate-900">
        <Header />
        
        <main className="flex-grow">
          <section className="pt-24 sm:pt-32 pb-16 sm:pb-20">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12 sm:mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
                  Join Our <span className="text-yellow-400">AI Innovation</span> Team
                </h1>
                <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Be part of the AI revolution. We're looking for passionate individuals who want to shape the future 
                  of artificial intelligence and help businesses transform through innovative technology.
                </p>
              </motion.div>

              {/* Company Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-12 sm:mb-16"
              >
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white text-center">Why Work With Us?</CardTitle>
                    <CardDescription className="text-gray-300 text-center">
                      Join a team that's passionate about AI innovation and making a real impact
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Open Positions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">Open Positions</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  {openPositions.map((position, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <Card className="h-full bg-slate-800/50 border-slate-700 hover:border-yellow-500/50 transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-center gap-4">
                            <position.icon className="w-12 h-12 text-yellow-400" />
                            <div className="flex-1">
                              <CardTitle className="text-xl text-white">{position.title}</CardTitle>
                              <div className="flex flex-wrap gap-2 mt-2">
                                <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">
                                  {position.department}
                                </span>
                                <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">
                                  {position.type}
                                </span>
                              </div>
                            </div>
                          </div>
                          <CardDescription className="text-gray-300 mt-4">
                            {position.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-300">{position.location}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <DollarSign className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-300">{position.salary}</span>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-white mb-2">Key Requirements:</h4>
                              <ul className="space-y-1">
                                {position.requirements.map((req, idx) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                                    <span className="text-gray-300 text-sm">{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="pt-4 border-t border-slate-700">
                              <Link to="/contact-form">
                                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900">
                                  Apply for {position.title}
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div 
                className="text-center mt-12 sm:mt-16 bg-slate-800/30 rounded-lg p-6 sm:p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Don't See Your Role?</h2>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                  We're always looking for talented individuals to join our team. Send us your resume and tell us how you can contribute to our AI mission.
                </p>
                <Link to="/contact-form">
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold text-sm sm:text-base px-6 sm:px-8 py-3">
                    Submit General Application
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Careers;
