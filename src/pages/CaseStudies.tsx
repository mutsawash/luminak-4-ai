
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CaseStudyCard from '@/components/ui/CaseStudyCard';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const CaseStudiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const caseStudies = [
    {
      title: 'Financial Forecasting Transformation',
      industry: 'Banking & Finance',
      description: 'Implemented AI-powered predictive analytics to revolutionize financial forecasting for a leading bank.',
      results: [
        '42% improvement in forecast accuracy',
        '25% reduction in analysis time',
        'Saved $1.2M in operational costs'
      ],
      imageSrc: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'
    },
    {
      title: 'Customer Support Automation',
      industry: 'E-commerce',
      description: 'Developed an intelligent chatbot solution that transformed customer service operations for an online retailer.',
      results: [
        '24/7 instant customer support',
        '72% reduction in response time',
        '35% increase in customer satisfaction'
      ],
      imageSrc: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
    },
    {
      title: 'Manufacturing Process Optimization',
      industry: 'Manufacturing',
      description: 'Created a comprehensive AI system to optimize production processes and reduce waste.',
      results: [
        '31% increase in productivity',
        '22% reduction in material waste',
        '$3.5M annual cost savings'
      ],
      imageSrc: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
    },
    {
      title: 'Healthcare Predictive Diagnostics',
      industry: 'Healthcare',
      description: 'Developed an AI-driven diagnostic system that helps healthcare providers identify potential health issues earlier.',
      results: [
        '68% faster diagnosis for critical conditions',
        '41% reduction in unnecessary tests',
        'Improved patient outcomes by 27%'
      ],
      imageSrc: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef'
    },
    {
      title: 'Retail Inventory Management',
      industry: 'Retail',
      description: 'Implemented an intelligent inventory forecasting system to optimize stock levels and reduce waste.',
      results: [
        '52% reduction in overstock situations',
        '37% decrease in stockouts',
        '$2.8M annual savings in inventory costs'
      ],
      imageSrc: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8'
    },
    {
      title: 'Logistics Route Optimization',
      industry: 'Transportation',
      description: 'Created an AI-powered route optimization system that transformed delivery efficiency for a logistics company.',
      results: [
        '28% reduction in fuel consumption',
        '34% increase in on-time deliveries',
        '22% more deliveries completed per day'
      ],
      imageSrc: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c1'
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>Case Studies - AutomateAI</title>
        <meta 
          name="description" 
          content="Explore real-world examples of how our AI automation solutions have transformed businesses across various industries."
        />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <section className="pt-32 pb-12">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Our Success <span className="gradient-text">Stories</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Discover how our AI solutions have helped organizations across various 
                  industries achieve remarkable results and transform their operations.
                </p>
              </div>
            </div>
          </section>
          
          <section className="py-12">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {caseStudies.map((study, index) => (
                  <CaseStudyCard
                    key={index}
                    title={study.title}
                    industry={study.industry}
                    description={study.description}
                    results={study.results}
                    imageSrc={study.imageSrc}
                  />
                ))}
              </div>
            </div>
          </section>
          
          <section className="py-20 bg-secondary/50">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="section-title">Ready to Be Our Next Success Story?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Contact us today to discuss how our AI solutions can transform your business 
                  operations and drive meaningful results.
                </p>
                <Button size="lg">Contact Us Today</Button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default CaseStudiesPage;
