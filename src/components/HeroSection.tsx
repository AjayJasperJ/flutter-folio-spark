
import React from 'react';
import { Button } from "@/components/ui/button";
import { Smartphone, Laptop, Code } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00TTYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTEyLTI0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNE0xOCA0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0wIDYwYzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0xMiAwYzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0xMiAwYzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0xMiAwYzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0wLTEyYzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0tMTItMTJjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTEyLTEyYzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0wIDEyYzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0wIDEyYzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0wLTM2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0tMTIgMGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTEyIDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAtMTJjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTEyIDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTEyIDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTEyIDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00TTYgMjJjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAtMTJjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTEyIDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10 -z-10"></div>

      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6 opacity-0 animate-fade-in">
              <div>
                <p className="text-primary-flutterLight text-lg font-medium mb-2">Hello, I'm</p>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-100 leading-tight">
                  John Doe
                </h1>
                <h2 className="text-2xl md:text-4xl font-bold text-primary-flutter mt-2 bg-clip-text text-transparent bg-gradient-to-r from-primary-flutterLight to-blue-400">
                  Flutter Developer
                </h2>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                Crafting beautiful cross-platform experiences with Flutter.
                Passionate about creating pixel-perfect, high-performance mobile applications
                that users love.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="glass-morphism bg-primary-flutter/60 hover:bg-primary-flutterLight text-white px-8 py-6 border-primary-flutter/40"
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
                  className="neo-blur text-primary-flutterLight hover:bg-primary-flutter/20 px-8 py-6 border-primary-flutter/40"
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
              <div className="absolute top-0 right-0 glass-morphism p-4 rounded-full shadow-lg opacity-0 animate-fade-in animate-delay-200">
                <Smartphone className="w-8 h-8 text-primary-flutterLight" />
              </div>
              <div className="absolute bottom-0 left-0 glass-morphism p-4 rounded-full shadow-lg opacity-0 animate-fade-in animate-delay-300">
                <Laptop className="w-8 h-8 text-primary-flutterLight" />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 glass-morphism p-6 rounded-full shadow-lg opacity-0 animate-fade-in animate-delay-100">
                <Code className="w-12 h-12 text-primary-flutterLight" />
              </div>
              <div className="absolute inset-0 border-2 border-dashed border-primary-flutterLight/40 rounded-full animate-spin" style={{ animationDuration: '30s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
