
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    // Company Details
    companyName: '',
    industry: '',
    companySize: '',
    website: '',
    
    // Contact Information
    fullName: '',
    position: '',
    email: '',
    phone: '',
    
    // Services
    selectedServices: [] as string[],
    paymentPlan: '',
    budget: '',
    
    // Additional Information
    charitableGiving: '',
    charityDetails: '',
    howDidYouHear: '',
    projectDescription: '',
    timeline: ''
  });

  const services = [
    'Process Automation',
    'Predictive Analytics',
    'AI Chatbot Implementation',
    'Data Analysis & Insights',
    'Machine Learning Solutions',
    'Natural Language Processing',
    'Computer Vision',
    'Robotic Process Automation',
    'AI Strategy Consulting',
    'Custom AI Development'
  ];

  const paymentPlans = [
    'Starter - $2,999',
    'Professional - $7,999', 
    'Enterprise - $19,999',
    'Custom Quote Required'
  ];

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: checked 
        ? [...prev.selectedServices, service]
        : prev.selectedServices.filter(s => s !== service)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.companyName) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (formData.selectedServices.length === 0) {
      toast({
        title: "Error", 
        description: "Please select at least one service.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', formData);
    
    toast({
      title: "Thank you for your submission!",
      description: "We'll contact you within 24 hours to discuss your project.",
    });

    // Reset form
    setFormData({
      companyName: '',
      industry: '',
      companySize: '',
      website: '',
      fullName: '',
      position: '',
      email: '',
      phone: '',
      selectedServices: [],
      paymentPlan: '',
      budget: '',
      charitableGiving: '',
      charityDetails: '',
      howDidYouHear: '',
      projectDescription: '',
      timeline: ''
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Luminak 4 AI</title>
        <meta 
          name="description" 
          content="Get in touch with our AI experts. Tell us about your project and we'll create a custom solution for your business."
        />
      </Helmet>
      
      <div className="flex flex-col min-h-screen bg-slate-900">
        <Header />
        
        <main className="flex-grow">
          <section className="pt-32 pb-20">
            <div className="container max-w-4xl mx-auto px-4">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Let's Build Something <span className="text-yellow-400">Amazing</span> Together
                </h1>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Tell us about your project and we'll create a custom AI solution tailored to your business needs.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Project Information</CardTitle>
                    <CardDescription className="text-gray-400">
                      Please provide details about your company and project requirements.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-8">
                      {/* Company Details */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-yellow-400">Company Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="companyName" className="text-white">Company Name *</Label>
                            <Input
                              id="companyName"
                              value={formData.companyName}
                              onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                              className="bg-slate-700 border-slate-600 text-white"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="industry" className="text-white">Industry</Label>
                            <Select onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}>
                              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                                <SelectValue placeholder="Select industry" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="healthcare">Healthcare</SelectItem>
                                <SelectItem value="retail">Retail & E-commerce</SelectItem>
                                <SelectItem value="finance">Finance & Banking</SelectItem>
                                <SelectItem value="education">Education</SelectItem>
                                <SelectItem value="manufacturing">Manufacturing</SelectItem>
                                <SelectItem value="automotive">Automotive</SelectItem>
                                <SelectItem value="hospitality">Hospitality</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="companySize" className="text-white">Company Size</Label>
                            <Select onValueChange={(value) => setFormData(prev => ({ ...prev, companySize: value }))}>
                              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                                <SelectValue placeholder="Select company size" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1-10">1-10 employees</SelectItem>
                                <SelectItem value="11-50">11-50 employees</SelectItem>
                                <SelectItem value="51-200">51-200 employees</SelectItem>
                                <SelectItem value="201-1000">201-1000 employees</SelectItem>
                                <SelectItem value="1000+">1000+ employees</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="website" className="text-white">Website</Label>
                            <Input
                              id="website"
                              value={formData.website}
                              onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                              className="bg-slate-700 border-slate-600 text-white"
                              placeholder="https://yourcompany.com"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-yellow-400">Contact Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="fullName" className="text-white">Full Name *</Label>
                            <Input
                              id="fullName"
                              value={formData.fullName}
                              onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                              className="bg-slate-700 border-slate-600 text-white"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="position" className="text-white">Position/Title</Label>
                            <Input
                              id="position"
                              value={formData.position}
                              onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
                              className="bg-slate-700 border-slate-600 text-white"
                            />
                          </div>
                          <div>
                            <Label htmlFor="email" className="text-white">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                              className="bg-slate-700 border-slate-600 text-white"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone" className="text-white">Phone Number</Label>
                            <Input
                              id="phone"
                              value={formData.phone}
                              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                              className="bg-slate-700 border-slate-600 text-white"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Services Selection */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-yellow-400">Services Required *</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {services.map((service) => (
                            <div key={service} className="flex items-center space-x-2">
                              <Checkbox
                                id={service}
                                checked={formData.selectedServices.includes(service)}
                                onCheckedChange={(checked) => handleServiceChange(service, !!checked)}
                              />
                              <Label htmlFor={service} className="text-white text-sm">{service}</Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Payment Plan */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-yellow-400">Payment Plan</h3>
                        <RadioGroup 
                          value={formData.paymentPlan} 
                          onValueChange={(value) => setFormData(prev => ({ ...prev, paymentPlan: value }))}
                        >
                          {paymentPlans.map((plan) => (
                            <div key={plan} className="flex items-center space-x-2">
                              <RadioGroupItem value={plan} id={plan} />
                              <Label htmlFor={plan} className="text-white">{plan}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>

                      {/* Charitable Giving */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-yellow-400">Charitable Giving</h3>
                        <div>
                          <Label className="text-white">Does your company engage in charitable giving?</Label>
                          <RadioGroup 
                            value={formData.charitableGiving} 
                            onValueChange={(value) => setFormData(prev => ({ ...prev, charitableGiving: value }))}
                            className="mt-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="yes" id="charity-yes" />
                              <Label htmlFor="charity-yes" className="text-white">Yes</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="no" id="charity-no" />
                              <Label htmlFor="charity-no" className="text-white">No</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        {formData.charitableGiving === 'yes' && (
                          <div>
                            <Label htmlFor="charityDetails" className="text-white">Please provide details about your charitable activities</Label>
                            <Textarea
                              id="charityDetails"
                              value={formData.charityDetails}
                              onChange={(e) => setFormData(prev => ({ ...prev, charityDetails: e.target.value }))}
                              className="bg-slate-700 border-slate-600 text-white mt-2"
                              rows={3}
                            />
                          </div>
                        )}
                      </div>

                      {/* How did you hear about us */}
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="howDidYouHear" className="text-white">How did you hear about us?</Label>
                          <Select onValueChange={(value) => setFormData(prev => ({ ...prev, howDidYouHear: value }))}>
                            <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="google">Google Search</SelectItem>
                              <SelectItem value="social-media">Social Media</SelectItem>
                              <SelectItem value="referral">Referral</SelectItem>
                              <SelectItem value="linkedin">LinkedIn</SelectItem>
                              <SelectItem value="conference">Conference/Event</SelectItem>
                              <SelectItem value="partner">Partner/Vendor</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Project Description */}
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="projectDescription" className="text-white">Project Description</Label>
                          <Textarea
                            id="projectDescription"
                            value={formData.projectDescription}
                            onChange={(e) => setFormData(prev => ({ ...prev, projectDescription: e.target.value }))}
                            className="bg-slate-700 border-slate-600 text-white"
                            rows={4}
                            placeholder="Tell us about your project goals, challenges, and specific requirements..."
                          />
                        </div>
                        <div>
                          <Label htmlFor="timeline" className="text-white">Desired Timeline</Label>
                          <Select onValueChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}>
                            <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="asap">ASAP</SelectItem>
                              <SelectItem value="1-month">Within 1 month</SelectItem>
                              <SelectItem value="3-months">Within 3 months</SelectItem>
                              <SelectItem value="6-months">Within 6 months</SelectItem>
                              <SelectItem value="flexible">Flexible</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold"
                      >
                        Submit Project Request
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ContactForm;
