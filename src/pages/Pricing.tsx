
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Star, Zap, Crown, Rocket } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$1,499',
      period: 'one-time',
      description: 'Perfect for small businesses getting started with AI',
      icon: Zap,
      features: [
        'Basic AI consultation (4 hours)',
        'Simple automation setup (2 workflows)',
        'Email & chat support',
        'Basic analytics dashboard',
        '2 month implementation',
        'Training for 3 team members',
        '3 months post-launch support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,499',
      period: 'one-time',
      description: 'Comprehensive AI solutions for growing businesses',
      icon: Star,
      features: [
        'Advanced AI consultation (12 hours)',
        'Multiple automation workflows (5-8)',
        'Priority support',
        'Advanced analytics & reporting',
        '4 month implementation',
        'Training for up to 15 team members',
        'Custom integrations (3-5)',
        'Performance monitoring (6 months)',
        'Monthly optimization reviews'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,999',
      period: 'one-time',
      description: 'Full-scale AI transformation for large organizations',
      icon: Crown,
      features: [
        'Unlimited AI consultation',
        'Enterprise-grade automation (10+ workflows)',
        '24/7 dedicated support',
        'Custom AI model development',
        '8 month implementation',
        'Unlimited team training',
        'Full system integration',
        'Ongoing optimization (12 months)',
        'Dedicated project manager',
        'White-label solutions available'
      ],
      popular: false
    },
    {
      name: 'Custom',
      price: 'Contact Us',
      period: '',
      description: 'Tailored solutions for unique business requirements',
      icon: Rocket,
      features: [
        'Fully customized AI solutions',
        'Bespoke automation workflows',
        'White-glove service',
        'Custom development',
        'Flexible timeline',
        'Comprehensive training program',
        'Full ownership of IP',
        'Long-term partnership',
        'Industry-specific solutions'
      ],
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'Ongoing Maintenance',
      price: '$299/month',
      description: 'Continuous monitoring and optimization of your AI systems'
    },
    {
      name: 'Additional Training',
      price: '$199/session',
      description: 'Extra training sessions for your team members (4-hour sessions)'
    },
    {
      name: 'Priority Support',
      price: '$149/month',
      description: '24/7 priority support with guaranteed 2-hour response times'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing Plans - Luminak 4 AI | Transparent AI Automation Pricing</title>
        <meta 
          name="description" 
          content="Choose the perfect AI automation plan for your business. Transparent pricing with no hidden fees. From $1,499 to custom enterprise solutions."
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
                  Simple, <span className="text-yellow-400">Transparent</span> Pricing
                </h1>
                <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Choose the perfect plan for your business. All plans include implementation, 
                  training, and ongoing support to ensure your success.
                </p>
                
                {/* Charity Discount Information */}
                <div className="mt-6 sm:mt-8 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg backdrop-blur-sm max-w-2xl mx-auto">
                  <p className="text-sm sm:text-base text-yellow-100 mb-2">
                    <span className="font-semibold text-yellow-400">🎁 Special Offer:</span> Organizations that donate to charity receive a 
                    <span className="font-bold text-yellow-400"> free consultation</span> and 
                    <span className="font-bold text-yellow-400"> 10% discount</span> on all services.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-300">
                    Proof of charitable giving required. Contact us to learn more about this program.
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
                {plans.map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-10">
                        <span className="bg-yellow-500 text-slate-900 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <Card className={`h-full bg-slate-800/50 border-slate-700 hover:border-yellow-500/50 transition-all duration-300 ${
                      plan.popular ? 'border-yellow-500 shadow-lg shadow-yellow-500/10 scale-105' : ''
                    }`}>
                      <CardHeader className="text-center p-4 sm:p-6">
                        <plan.icon className="w-10 sm:w-12 h-10 sm:h-12 mx-auto mb-3 sm:mb-4 text-yellow-400" />
                        <CardTitle className="text-xl sm:text-2xl text-white">{plan.name}</CardTitle>
                        <CardDescription className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
                          {plan.description}
                        </CardDescription>
                        <div className="text-center">
                          <span className="text-2xl sm:text-3xl font-bold text-white">{plan.price}</span>
                          {plan.period && <span className="text-gray-400 text-sm">/{plan.period}</span>}
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 sm:p-6 pt-0">
                        <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2 sm:gap-3">
                              <Check className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-xs sm:text-sm leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="space-y-2">
                          <Link to="/contact-form" className="block">
                            <Button 
                              className={`w-full text-sm sm:text-base py-2 sm:py-3 ${
                                plan.popular 
                                  ? 'bg-yellow-500 hover:bg-yellow-600 text-slate-900' 
                                  : 'bg-slate-700 hover:bg-slate-600 text-white'
                              }`}
                            >
                              {plan.name === 'Custom' ? 'Contact Sales' : 'Get Started'}
                            </Button>
                          </Link>
                          <Link to="/consultation" className="block">
                            <Button 
                              variant="outline"
                              className="w-full text-sm sm:text-base py-2 sm:py-3 border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10"
                            >
                              Book Consultation
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mb-12 sm:mb-16"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-8">Add-On Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  {addOns.map((addOn, index) => (
                    <Card key={index} className="bg-slate-800/30 border-slate-700 hover:border-yellow-500/30 transition-all duration-300">
                      <CardHeader className="p-4 sm:p-6">
                        <CardTitle className="text-white text-lg sm:text-xl">{addOn.name}</CardTitle>
                        <CardDescription className="text-yellow-400 text-base sm:text-lg font-semibold">
                          {addOn.price}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 sm:p-6 pt-0">
                        <p className="text-gray-300 text-sm sm:text-base">{addOn.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="text-center bg-slate-800/30 rounded-lg p-6 sm:p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Ready to Transform Your Business?</h2>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                  Schedule a free consultation to discuss your specific needs and get a custom quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                  <Link to="/consultation">
                    <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold text-sm sm:text-base px-6 sm:px-8 py-3">
                      Schedule Free Consultation
                    </Button>
                  </Link>
                  <Link to="/contact-form">
                    <Button size="lg" variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 text-sm sm:text-base px-6 sm:px-8 py-3">
                      Contact Sales
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

export default Pricing;
