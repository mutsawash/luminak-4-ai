
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Services from '@/components/sections/Services';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Services - Luminak 4 AI</title>
        <meta 
          name="description" 
          content="Explore our range of AI automation services designed to streamline your business operations and drive efficiency."
        />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <section className="pt-32 pb-12">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Our <span className="gradient-text">AI Services</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Comprehensive AI solutions tailored to your business needs. Optimize processes, 
                  enhance customer experiences, and make data-driven decisions with our expertise.
                </p>
              </div>
            </div>
          </section>
          
          <Services className="pt-0" />
          
          <section className="py-20 bg-secondary/50">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="section-title">Ready to Transform Your Business?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Connect with our team of AI experts to discuss how our solutions 
                  can address your specific business challenges.
                </p>
                <Button size="lg">Schedule a Consultation</Button>
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
