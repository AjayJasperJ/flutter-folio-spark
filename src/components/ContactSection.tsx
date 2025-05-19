
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Smartphone, MapPin, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "john.doe@example.com"
    },
    {
      icon: Smartphone,
      label: "Phone",
      value: "+1 (555) 123-4567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900/90 relative">
      <div className="absolute inset-0 bg-grid-white/[0.03] -z-10"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-primary-flutter/10 blur-3xl -z-10"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary-flutterLight/10 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="section-header text-center mx-auto mb-4 text-primary-flutterLight brightness-125">Get In Touch</h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Have a project in mind or want to discuss potential opportunities?
          Feel free to reach out. I'm always open to new and exciting projects.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 opacity-0 animate-slide-up">
            <div className="glass-morphism h-full p-8 transition-all duration-300 hover:bg-primary-flutter/10 hover:shadow-lg hover:shadow-primary-flutter/30 hover:border-primary-flutterLight/30">
              <h3 className="text-xl font-bold text-gray-100 brightness-110 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start group transition-all duration-300 p-2 rounded-lg hover:bg-primary-flutter/10">
                    <div className="w-10 h-10 rounded-full bg-primary-flutter/20 flex items-center justify-center flex-shrink-0 mr-4 group-hover:bg-primary-flutter/40 transition-all duration-300">
                      <info.icon className="w-5 h-5 text-primary-flutterLight" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="text-gray-100 font-medium group-hover:text-primary-flutterLight transition-colors">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-800">
                <h4 className="text-gray-100 font-medium mb-4 brightness-110">Connect with me</h4>
                <div className="flex space-x-4">
                  {['github', 'linkedin', 'twitter'].map((social) => (
                    <a 
                      key={social}
                      href="#" 
                      className="w-10 h-10 rounded-full bg-primary-flutter/20 flex items-center justify-center hover:bg-primary-flutter hover:text-white hover:scale-110 transition-all"
                    >
                      <span className="sr-only">{social}</span>
                      <i className={`fab fa-${social}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 opacity-0 animate-slide-up animate-delay-100">
            <div className="glass-morphism p-8">
              <h3 className="text-xl font-bold text-gray-100 brightness-110 mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-gray-800/50 border-gray-700 text-gray-100 focus:border-primary-flutterLight"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john.doe@example.com"
                      className="w-full bg-gray-800/50 border-gray-700 text-gray-100 focus:border-primary-flutterLight"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry"
                    className="w-full bg-gray-800/50 border-gray-700 text-gray-100 focus:border-primary-flutterLight"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Hello, I'm interested in working with you on..."
                    className="w-full min-h-[150px] bg-gray-800/50 border-gray-700 text-gray-100 focus:border-primary-flutterLight"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full glass-morphism bg-primary-flutter/80 hover:bg-primary-flutter text-white border border-primary-flutter/50 hover:shadow-lg hover:shadow-primary-flutter/30 transition-all duration-300 transform hover:-translate-y-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" /> 
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
