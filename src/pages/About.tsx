
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import About from '@/components/sections/About';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Helmet>
        <title>About Us - Luminak 4 AI</title>
        <meta 
          name="description" 
          content="Learn about Luminak 4 AI, our mission, values, and the expert team behind our AI automation solutions."
        />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <section className="pt-32 pb-12">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  About <span className="gradient-text">Luminak 4 AI</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  We're on a mission to transform businesses through intelligent automation and 
                  pioneering AI solutions that drive real, measurable results.
                </p>
              </div>
            </div>
          </section>
          
          <About className="pt-0" />
          
          <section className="py-20 bg-secondary/50">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="section-title">Join Our Team</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We're always looking for talented individuals passionate about AI and innovation 
                  to join our growing team.
                </p>
                <Button size="lg">View Open Positions</Button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
