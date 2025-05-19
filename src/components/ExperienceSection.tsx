
import React from 'react';

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string[];
}

const ExperienceSection: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      period: '2021 - Present',
      role: 'Senior Flutter Developer',
      company: 'TechInnovate Solutions',
      description: [
        'Lead a team of 5 Flutter developers building a suite of fintech applications',
        'Implemented complex animations and custom UI components for a seamless user experience',
        'Optimized app performance, reducing load times by 40%',
        'Introduced BLoC pattern and clean architecture principles'
      ]
    },
    {
      period: '2019 - 2021',
      role: 'Flutter Developer',
      company: 'MobileVision Studios',
      description: [
        'Developed and launched 6 production Flutter applications for both iOS and Android',
        'Created reusable widget libraries and custom animations',
        'Integrated RESTful APIs and implemented real-time data synchronization',
        'Collaborated with designers to implement pixel-perfect UIs'
      ]
    },
    {
      period: '2017 - 2019',
      role: 'Mobile Developer',
      company: 'AppCraft Technologies',
      description: [
        'Started with native Android development and transitioned to Flutter',
        'Built UI components library that improved team efficiency by 30%',
        'Implemented state management solutions using Provider and Riverpod',
        'Maintained CI/CD pipelines for automated testing and deployment'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900/50 relative">
      <div className="absolute inset-0 bg-grid-white/[0.03] -z-10"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-primary-flutter/10 blur-3xl -z-10"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary-flutterLight/10 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="section-header text-center mx-auto mb-12 text-primary-flutterLight brightness-125">Professional Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary-flutter"></div>
            
            {/* Experience items */}
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative mb-12 opacity-0 animate-slide-up animate-delay-${index * 100}`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:pr-8'}`}>
                  <div className="hidden md:block absolute top-0 md:top-6 w-3 h-3 rounded-full bg-primary-flutter border-4 border-gray-900 shadow-md" 
                       style={{ left: '50%', transform: 'translateX(-50%)' }}></div>
                  
                  <div className="glass-morphism p-8 transition-all duration-300 hover:bg-primary-flutter/15 hover:shadow-lg hover:shadow-primary-flutter/30 hover:border-primary-flutterLight/30">
                    <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-white bg-primary-flutter rounded-full">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-gray-100 brightness-110">{exp.role}</h3>
                    <p className="text-primary-flutterLight font-medium mb-3">{exp.company}</p>
                    <ul className="text-gray-300 space-y-3 pl-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary-flutter mr-2 text-lg">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
