
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import CaseStudies from '@/components/sections/CaseStudies';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Helmet>
        <title>AutomateAI - Intelligent Business Automation Solutions</title>
        <meta 
          name="description" 
          content="Transform your business with our cutting-edge AI automation solutions. Streamline operations, enhance efficiency, and drive growth."
        />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Hero />
          <Services />
          <About />
          <CaseStudies />
          <Blog />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
