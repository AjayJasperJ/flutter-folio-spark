
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-grid-white/[0.03] -z-10"></div>
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="section-header text-center mx-auto mb-12">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 opacity-0 animate-slide-up">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Flutter Developer with over 5 years of experience building 
              beautiful, high-performance mobile applications for iOS and Android.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in mobile development began with native Android, but I quickly 
              fell in love with Flutter's ability to create stunning UIs with a single 
              codebase. I specialize in building complex, feature-rich applications 
              with clean architecture and pixel-perfect designs.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring the latest in mobile design trends,
              contributing to open-source projects, or sharing my knowledge through technical articles
              and community meetups.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg opacity-0 animate-slide-up animate-delay-100">
            <div className="glass-morphism relative pb-[56.25%]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary-flutterLight">Expertise Highlights</h3>
                  <ul className="space-y-2 text-left list-disc list-inside">
                    <li>UI/UX focused mobile development</li>
                    <li>Complex state management solutions</li>
                    <li>Firebase integration specialist</li>
                    <li>Third-party API integrations</li>
                    <li>Performance optimization</li>
                    <li>Cross-platform development</li>
                  </ul>
                </div>
              </div>
              <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-primary-flutter/30 blur-3xl -z-10"></div>
              <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-primary-flutterLight/20 blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
