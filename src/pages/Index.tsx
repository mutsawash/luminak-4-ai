
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import CaseStudies from '@/components/sections/CaseStudies';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Add preload hints for critical resources
    const addPreloadLinks = () => {
      const preloads = [
        { href: '/fonts/your-main-font.woff2', as: 'font', type: 'font/woff2', crossorigin: true },
        { href: '/critical-images/hero-image.webp', as: 'image' }
      ];
      
      preloads.forEach(({ href, as, type, crossorigin }) => {
        if (!document.querySelector(`link[href="${href}"]`)) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = href;
          link.as = as;
          if (type) link.type = type;
          if (crossorigin) link.crossOrigin = 'anonymous';
          document.head.appendChild(link);
        }
      });
    };
    
    // Only add preload in production to avoid console warnings during development
    if (process.env.NODE_ENV === 'production') {
      addPreloadLinks();
    }
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Luminak 4 AI - Advanced Intelligence Solutions</title>
        <meta 
          name="description" 
          content="Transform your business with our cutting-edge AI automation solutions. Streamline operations, enhance efficiency, and drive growth."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="canonical" href="https://luminak4ai.com/" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Luminak 4 AI - Advanced Intelligence Solutions" />
        <meta property="og:description" content="Transform your business with our cutting-edge AI automation solutions." />
        <meta property="og:url" content="https://luminak4ai.com/" />
        <meta property="og:image" content="https://luminak4ai.com/og-image.jpg" />
        
        {/* Performance optimizations */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <style>
          {`
            body {
              background-color: #0f172a;
              color: #f1f5f9;
            }
            
            /* Critical CSS for above-the-fold content */
            .hero-section {
              min-height: 100vh;
              display: flex;
              flex-direction: column;
              justify-content: center;
              background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            }
            
            @media (prefers-reduced-motion: reduce) {
              * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
                scroll-behavior: auto !important;
              }
            }
          `}
        </style>
      </Helmet>
      
      <div className="flex flex-col min-h-screen bg-slate-900 overflow-hidden">
        <Header />
        
        <main className="flex-grow relative z-10">
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
