
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
      price: '$2,999',
      period: 'one-time',
      description: 'Perfect for small businesses getting started with AI',
      icon: Zap,
      features: [
        'Basic AI consultation (2 hours)',
        'Simple automation setup',
        'Email support',
        'Basic analytics dashboard',
        '1 month implementation',
        'Training for 2 team members'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: 'one-time',
      description: 'Comprehensive AI solutions for growing businesses',
      icon: Star,
      features: [
        'Advanced AI consultation (8 hours)',
        'Multiple automation workflows',
        'Priority support',
        'Advanced analytics & reporting',
        '3 month implementation',
        'Training for up to 10 team members',
        'Custom integrations',
        'Performance monitoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$19,999',
      period: 'one-time',
      description: 'Full-scale AI transformation for large organizations',
      icon: Crown,
      features: [
        'Unlimited AI consultation',
        'Enterprise-grade automation',
        '24/7 dedicated support',
        'Custom AI model development',
        '6 month implementation',
        'Unlimited team training',
        'Full system integration',
        'Ongoing optimization',
        'Dedicated project manager'
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
        'Long-term partnership'
      ],
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'Ongoing Maintenance',
      price: '$999/month',
      description: 'Continuous monitoring and optimization of your AI systems'
    },
    {
      name: 'Additional Training',
      price: '$499/session',
      description: 'Extra training sessions for your team members'
    },
    {
      name: 'Priority Support',
      price: '$299/month',
      description: '24/7 priority support with guaranteed response times'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Luminak 4 AI</title>
        <meta 
          name="description" 
          content="Choose the perfect AI automation plan for your business. Transparent pricing with no hidden fees."
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
                  Simple, <span className="text-yellow-400">Transparent</span> Pricing
                </h1>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Choose the perfect plan for your business. All plans include implementation, 
                  training, and ongoing support to ensure your success.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {plans.map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-yellow-500 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <Card className={`h-full bg-slate-800/50 border-slate-700 hover:border-yellow-500/50 transition-all duration-300 ${
                      plan.popular ? 'border-yellow-500 shadow-lg shadow-yellow-500/10' : ''
                    }`}>
                      <CardHeader className="text-center">
                        <plan.icon className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                        <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                        <CardDescription className="text-gray-400 mb-4">
                          {plan.description}
                        </CardDescription>
                        <div className="text-center">
                          <span className="text-3xl font-bold text-white">{plan.price}</span>
                          {plan.period && <span className="text-gray-400">/{plan.period}</span>}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3 mb-6">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Link to="/contact-form" className="block">
                          <Button 
                            className={`w-full ${
                              plan.popular 
                                ? 'bg-yellow-500 hover:bg-yellow-600 text-slate-900' 
                                : 'bg-slate-700 hover:bg-slate-600 text-white'
                            }`}
                          >
                            {plan.name === 'Custom' ? 'Contact Sales' : 'Get Started'}
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold text-white text-center mb-8">Add-On Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {addOns.map((addOn, index) => (
                    <Card key={index} className="bg-slate-800/30 border-slate-700">
                      <CardHeader>
                        <CardTitle className="text-white">{addOn.name}</CardTitle>
                        <CardDescription className="text-yellow-400 text-lg font-semibold">
                          {addOn.price}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300">{addOn.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="text-center bg-slate-800/30 rounded-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
                <p className="text-gray-300 mb-6">
                  Schedule a free consultation to discuss your specific needs and get a custom quote.
                </p>
                <Link to="/contact-form">
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold">
                    Schedule Free Consultation
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

export default Pricing;
