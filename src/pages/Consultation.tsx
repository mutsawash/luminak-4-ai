
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { motion } from 'framer-motion';
import { Calendar, Clock, Phone, Video, MessageSquare, MapPin, DollarSign } from 'lucide-react';

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    consultationType: '',
    preferredTime: '',
    date: '',
    service: '',
    budget: '',
    message: '',
    isCharity: false
  });

  const consultationTypes = [
    { id: 'physical', label: 'Physical Meeting', icon: MapPin, description: 'In-person consultation at our office or your location' },
    { id: 'call', label: 'Phone Call', icon: Phone, description: 'Traditional phone consultation' },
    { id: 'whatsapp', label: 'WhatsApp Chat', icon: MessageSquare, description: 'WhatsApp voice/video call or chat' },
    { id: 'video', label: 'Video Call', icon: Video, description: 'Zoom, Teams, or Google Meet' }
  ];

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM'
  ];

  const services = [
    'Process Automation',
    'Predictive Analytics',
    'Chatbot Integration',
    'Data Management',
    'Custom AI Development',
    'AI Security & Compliance'
  ];

  const budgetRanges = [
    'Under $1,500',
    '$1,500 - $2,000',
    '$2,000 - $2,500',
    '$2,500 - $3,000',
    'Custom Solution'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form submission logic will be implemented when Supabase is connected
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Helmet>
        <title>Book Consultation - Luminak 4 AI | Schedule Your AI Strategy Session</title>
        <meta 
          name="description" 
          content="Schedule a consultation with our AI experts. Choose from physical meetings, calls, video conferences, or WhatsApp chat. Free consultation for charity organizations."
        />
      </Helmet>
      
      <div className="flex flex-col min-h-screen bg-slate-900">
        <Header />
        
        <main className="flex-grow">
          <section className="pt-24 sm:pt-32 pb-16 sm:pb-20">
            <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
                  Book Your <span className="text-yellow-400">AI Consultation</span>
                </h1>
                <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Schedule a personalized consultation with our AI experts to discuss your business needs and explore how our solutions can transform your operations.
                </p>
                
                {/* Charity Discount Information */}
                <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg backdrop-blur-sm">
                  <p className="text-sm sm:text-base text-yellow-100 mb-2">
                    <span className="font-semibold text-yellow-400">🎁 Special Offer:</span> Organizations that donate to charity receive a 
                    <span className="font-bold text-yellow-400"> free consultation</span> and 
                    <span className="font-bold text-yellow-400"> 10% discount</span> on all services.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Consultation Details</CardTitle>
                    <CardDescription className="text-gray-300">
                      Fill out the form below to schedule your consultation. We'll contact you within 24 hours to confirm your appointment.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-white">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className="mt-1 bg-slate-700 border-slate-600 text-white"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-white">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="mt-1 bg-slate-700 border-slate-600 text-white"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="company" className="text-white">Company Name *</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            className="mt-1 bg-slate-700 border-slate-600 text-white"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-white">Phone Number</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="mt-1 bg-slate-700 border-slate-600 text-white"
                          />
                        </div>
                      </div>

                      {/* Consultation Type */}
                      <div>
                        <Label className="text-white mb-3 block">Consultation Type *</Label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {consultationTypes.map((type) => (
                            <Card 
                              key={type.id}
                              className={`cursor-pointer transition-all duration-300 ${
                                formData.consultationType === type.id
                                  ? 'bg-yellow-500/20 border-yellow-500'
                                  : 'bg-slate-700/50 border-slate-600 hover:border-yellow-500/50'
                              }`}
                              onClick={() => handleInputChange('consultationType', type.id)}
                            >
                              <CardContent className="p-4">
                                <div className="flex items-center gap-3">
                                  <type.icon className="w-5 h-5 text-yellow-400" />
                                  <div>
                                    <h4 className="font-semibold text-white">{type.label}</h4>
                                    <p className="text-xs text-gray-300">{type.description}</p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>

                      {/* Scheduling */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="date" className="text-white">Preferred Date *</Label>
                          <Input
                            id="date"
                            type="date"
                            value={formData.date}
                            onChange={(e) => handleInputChange('date', e.target.value)}
                            className="mt-1 bg-slate-700 border-slate-600 text-white"
                            min={new Date().toISOString().split('T')[0]}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="time" className="text-white">Preferred Time *</Label>
                          <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                            <SelectTrigger className="mt-1 bg-slate-700 border-slate-600 text-white">
                              <SelectValue placeholder="Select time slot" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((slot) => (
                                <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Service Interest */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="service" className="text-white">Service of Interest</Label>
                          <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                            <SelectTrigger className="mt-1 bg-slate-700 border-slate-600 text-white">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service} value={service}>{service}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="budget" className="text-white">Budget Range</Label>
                          <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                            <SelectTrigger className="mt-1 bg-slate-700 border-slate-600 text-white">
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              {budgetRanges.map((range) => (
                                <SelectItem key={range} value={range}>{range}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Charity Checkbox */}
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="charity"
                          checked={formData.isCharity}
                          onCheckedChange={(checked) => handleInputChange('isCharity', checked as boolean)}
                        />
                        <Label htmlFor="charity" className="text-white">
                          Our organization donates to charity (provides 10% discount and free consultation)
                        </Label>
                      </div>

                      {/* Message */}
                      <div>
                        <Label htmlFor="message" className="text-white">Additional Information</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          placeholder="Tell us about your business challenges, goals, or any specific questions you have..."
                          className="mt-1 bg-slate-700 border-slate-600 text-white"
                          rows={4}
                        />
                      </div>

                      <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold">
                        Schedule Consultation
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

export default Consultation;
