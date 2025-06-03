
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactProps {
  className?: string;
}

const Contact = ({ className = '' }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    address: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    // In a real application, you would send this data to luminak4@gmail.com
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({ name: '', email: '', company: '', address: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl">Get In Touch</h2>
          <p className="section-subtitle text-base sm:text-lg">
            Have questions about our AI solutions? Contact us today to learn how we can help transform your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="h-10 sm:h-12"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-10 sm:h-12"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  Company Name
                </label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Acme Inc."
                  value={formData.company}
                  onChange={handleChange}
                  className="h-10 sm:h-12"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="address" className="text-sm font-medium">
                  Physical Address
                </label>
                <Input
                  id="address"
                  name="address"
                  placeholder="123 Main Street, City, Country"
                  value={formData.address}
                  onChange={handleChange}
                  className="h-10 sm:h-12"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="How can we help you?"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[120px] resize-none"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full h-10 sm:h-12 text-sm sm:text-base" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-card border border-border rounded-xl overflow-hidden h-full">
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.538290300406!2d31.00178657556241!3d-17.691157983609017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4ed5c0ed8f1%3A0x7adbd1040a8d0c75!2sWestgate%20Shopping%20Centre%2C%20Harare!5e0!3m2!1sen!2szw!4v1716578691320!5m2!1sen!2szw"
                  className="w-full h-48 sm:h-64 border-0" 
                  allowFullScreen 
                  loading="lazy"
                  title="Office Location"
                  aria-hidden="false"
                ></iframe>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Contact Information</h3>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-brand-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">10 Good Hope, Westgate, Harare</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-brand-500 flex-shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-sm sm:text-base">Call: +263 788 448 538</span>
                      <span className="text-sm sm:text-base">WhatsApp: +263 712 521 739</span>
                    </div>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-brand-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base">info@luminak4ai.com</span>
                  </li>
                </ul>
                <div className="mt-6 sm:mt-8">
                  <h4 className="font-medium mb-2">Business Hours</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
                <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-yellow-50/10 border border-yellow-500/20 rounded-lg">
                  <h4 className="font-medium mb-2 text-yellow-400 text-sm sm:text-base">Special Offers</h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    We offer <strong>free consulting</strong> sessions and <strong>discounted rates</strong> for companies that donate to charity and can provide evidence of their contributions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
