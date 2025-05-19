
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number;
  }[];
}

interface Technology {
  name: string;
  image: string;
  description?: string;
}

const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Flutter Development",
      skills: [
        { name: "UI/UX Implementation", level: 95 },
        { name: "State Management", level: 90 },
        { name: "Animations", level: 85 },
        { name: "Custom Widgets", level: 95 },
        { name: "Performance Optimization", level: 90 }
      ]
    },
    {
      name: "Related Technologies",
      skills: [
        { name: "Firebase", level: 85 },
        { name: "RESTful APIs", level: 90 },
        { name: "GraphQL", level: 80 },
        { name: "CI/CD", level: 75 },
        { name: "App Store Deployment", level: 85 }
      ]
    }
  ];
  
  const technologies: Technology[] = [
    { 
      name: "Flutter", 
      image: "https://storage.googleapis.com/cms-storage-bucket/4fd5520fe28ebf839174.svg",
      description: "Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase."
    },
    { 
      name: "Dart", 
      image: "https://dart.dev/assets/img/shared/dart/logo+text/horizontal/white.svg",
      description: "A client-optimized language for fast apps on any platform."
    },
    { 
      name: "Firebase", 
      image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      description: "Google's platform that helps you quickly develop high-quality apps, grow your user base, and earn more money."
    },
    { 
      name: "Git", 
      image: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      description: "Free and open source distributed version control system designed to handle everything from small to very large projects."
    },
    { 
      name: "VS Code", 
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png",
      description: "A lightweight but powerful source code editor which runs on your desktop."
    },
    { 
      name: "Figma", 
      image: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
      description: "A cloud-based design tool that's similar to Sketch in functionality and features."
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900/70 relative">
      <div className="absolute inset-0 bg-grid-white/[0.03] -z-10"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-primary-flutter/10 blur-3xl -z-10"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary-flutterLight/10 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="section-header text-center mx-auto mb-12">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="opacity-0 animate-slide-up glass-morphism p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-flutterLight mb-6">{category.name}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-200 font-medium">{skill.name}</span>
                      <span className="text-primary-flutterLight font-medium">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-gray-700"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 opacity-0 animate-slide-up animate-delay-100">
          <h3 className="text-xl font-bold text-primary-flutterLight mb-6 text-center">Technologies I Work With</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <div className="glass-morphism flex flex-col items-center py-6 px-4 cursor-pointer transition-all duration-300 hover:bg-primary-flutter/20 hover:shadow-lg hover:scale-105 hover:border-primary-flutterLight/30 group">
                    <div className="w-16 h-16 flex items-center justify-center mb-3 transition-transform group-hover:scale-110">
                      <img 
                        src={tech.image} 
                        alt={tech.name} 
                        className="max-w-full max-h-full"
                        style={tech.name === "Dart" ? { filter: "brightness(0) invert(0.5) sepia(1) saturate(5) hue-rotate(175deg)" } : {}}
                      />
                    </div>
                    <p className="text-gray-200 font-medium group-hover:text-primary-flutterLight">{tech.name}</p>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="neo-blur border-primary-flutter/20">
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-primary-flutterLight">{tech.name}</h4>
                    <p className="text-sm text-gray-300">{tech.description || `A technology used in Flutter development.`}</p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
