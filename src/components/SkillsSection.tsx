
import React from 'react';
import { Progress } from "@/components/ui/progress";

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number;
  }[];
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
  
  const technologies = [
    { name: "Flutter", image: "https://storage.googleapis.com/cms-storage-bucket/4fd5520fe28ebf839174.svg" },
    { name: "Dart", image: "https://dart.dev/assets/img/shared/dart/logo+text/horizontal/white.svg" },
    { name: "Firebase", image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
    { name: "Git", image: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
    { name: "VS Code", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png" },
    { name: "Figma", image: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" }
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
                      indicatorClassName="bg-gradient-to-r from-primary-flutter to-primary-flutterLight"
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
              <div key={index} className="glass-morphism flex flex-col items-center py-6 px-4">
                <div className="w-16 h-16 flex items-center justify-center mb-3">
                  <img 
                    src={tech.image} 
                    alt={tech.name} 
                    className="max-w-full max-h-full"
                    style={tech.name === "Dart" ? { filter: "brightness(0) invert(0.5) sepia(1) saturate(5) hue-rotate(175deg)" } : {}}
                  />
                </div>
                <p className="text-gray-200 font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
