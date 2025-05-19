
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Contact from '@/components/sections/Contact';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useEffect } from 'react';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const faqs = [
    {
      question: 'What industries do you specialize in?',
      answer: 'We have experience across various industries including finance, healthcare, manufacturing, retail, logistics, and more. Our AI solutions are adaptable and can be customized to meet the specific needs of your industry.'
    },
    {
      question: 'How long does implementation typically take?',
      answer: 'Implementation timelines vary based on the complexity of the solution and your organization\'s infrastructure. Simple automation projects can be deployed in a few weeks, while more comprehensive AI implementations may take 2-3 months. We provide detailed timelines during our initial consultation.'
    },
    {
      question: 'Do you offer support after implementation?',
      answer: 'Yes, we provide ongoing support and maintenance for all our solutions. We offer various support packages tailored to your needs, including 24/7 technical support, regular updates, performance monitoring, and user training.'
    },
    {
      question: 'How do you measure the success of AI implementations?',
      answer: 'We establish clear KPIs at the beginning of each project in collaboration with your team. These typically include metrics like efficiency gains, cost savings, revenue growth, error reduction, and customer satisfaction. We provide regular reports to track progress against these benchmarks.'
    },
    {
      question: 'What data security measures do you implement?',
      answer: 'We take data security very seriously. Our solutions comply with industry standards (GDPR, HIPAA, etc.) and implement robust security measures such as data encryption, secure authentication, access controls, and regular security audits. We can work with your IT team to ensure all security requirements are met.'
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>Contact Us - AutomateAI</title>
        <meta 
          name="description" 
          content="Get in touch with our AI automation experts to discuss how we can help transform your business operations."
        />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <section className="pt-32 pb-12">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Get In <span className="gradient-text">Touch</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Have questions about our AI solutions? Contact us today to learn how 
                  we can help transform your business operations.
                </p>
              </div>
            </div>
          </section>
          
          <Contact className="pt-0" />
          
          <section className="py-24 bg-secondary/50">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="section-title">Frequently Asked Questions</h2>
                <p className="section-subtitle">
                  Find answers to common questions about our AI automation solutions and implementation process.
                </p>
              </div>
              
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
