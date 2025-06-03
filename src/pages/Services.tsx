
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Services from '@/components/sections/Services';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Helmet>
        <title>AI Services - Luminak 4 AI | Professional AI Automation Solutions</title>
        <meta 
          name="description" 
          content="Explore our range of AI automation services designed to streamline your business operations and drive efficiency. From $4,999 to custom enterprise solutions."
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
          
          <Services className="pt-0" />
          
          <section className="py-16 sm:py-20 bg-secondary/50">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="section-title text-2xl sm:text-3xl lg:text-4xl">Ready to Transform Your Business?</h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                  Connect with our team of AI experts to discuss how our solutions 
                  can address your specific business challenges. Starting from $4,999.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                  <Link to="/contact-form" className="w-full sm:w-auto">
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
