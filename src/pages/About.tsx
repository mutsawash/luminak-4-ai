
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
  
  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CEO & Founder',
      bio: 'Ph.D. in Artificial Intelligence with over 15 years of experience in developing AI solutions for enterprise.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      bio: 'Former Head of AI at TechGiant, specializing in machine learning and predictive analytics implementation.',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Jennifer Park',
      role: 'Head of Product',
      bio: 'Product innovation expert with a focus on creating user-friendly AI solutions for complex business challenges.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'David Kumar',
      role: 'Lead Data Scientist',
      bio: 'Specializes in developing advanced algorithms for business intelligence and operational optimization.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>About Us - AutomateAI</title>
        <meta 
          name="description" 
          content="Learn about AutomateAI, our mission, values, and the expert team behind our AI automation solutions."
        />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <section className="pt-32 pb-12">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  About <span className="gradient-text">AutomateAI</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  We're on a mission to transform businesses through intelligent automation and 
                  pioneering AI solutions that drive real, measurable results.
                </p>
              </div>
            </div>
          </section>
          
          <About className="pt-0" />
          
          <section className="py-24">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="section-title">Our Expert Team</h2>
                <p className="section-subtitle">
                  Meet the talented individuals behind our innovative AI solutions.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                  <div key={index} className="bg-card border border-border rounded-xl overflow-hidden text-center group hover:shadow-md transition-all">
                    <div className="relative overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-brand-600 font-medium mb-2">{member.role}</p>
                      <p className="text-muted-foreground text-sm">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
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
