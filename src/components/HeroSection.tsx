
import React from 'react';
import { Button } from "@/components/ui/button";
import { Smartphone, Laptop, Code } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6 opacity-0 animate-fade-in">
              <div>
                <p className="text-primary-flutterLight text-lg font-medium mb-2">Hello, I'm</p>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                  John Doe
                </h1>
                <h2 className="text-2xl md:text-4xl font-bold text-primary-flutter mt-2">
                  Flutter Developer
                </h2>
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                Crafting beautiful cross-platform experiences with Flutter.
                Passionate about creating pixel-perfect, high-performance mobile applications
                that users love.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-primary-flutter hover:bg-primary-flutterLight text-white px-8 py-6"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }}
                >
                  Get In Touch
                </Button>
                <Button 
                  variant="outline"
                  className="border-primary-flutter text-primary-flutter hover:bg-primary-flutter/10 px-8 py-6"
                  onClick={() => {
                    document.getElementById('projects')?.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }}
                >
                  View Projects
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 opacity-0 animate-fade-in">
              <div className="absolute inset-0 bg-primary-flutterLight/20 rounded-full animate-pulse"></div>
              <div className="absolute top-0 right-0 bg-primary-flutter p-4 rounded-full shadow-lg opacity-0 animate-fade-in animate-delay-200">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <div className="absolute bottom-0 left-0 bg-secondary-flutter p-4 rounded-full shadow-lg opacity-0 animate-fade-in animate-delay-300">
                <Laptop className="w-8 h-8 text-white" />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent-flutter p-4 rounded-full shadow-lg opacity-0 animate-fade-in animate-delay-100">
                <Code className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
