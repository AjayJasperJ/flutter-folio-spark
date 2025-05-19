
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "FinTrack Pro",
      description: "A comprehensive financial tracking application with beautiful charts, real-time currency conversion, and budget planning features.",
      image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=800&h=500",
      tags: ["Flutter", "Firebase", "Bloc", "Charts"],
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Fitness Companion",
      description: "A fitness tracking app with custom workout plans, progress visualization, and social sharing features.",
      image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&h=500",
      tags: ["Flutter", "Provider", "Health API", "Animations"],
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Smart Home Control",
      description: "IoT control center app with real-time device monitoring, automation rules, and voice control integration.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&h=500",
      tags: ["Flutter", "Riverpod", "WebSockets", "Animations"],
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Travel Planner",
      description: "All-in-one travel planning app with itinerary creation, expense tracking, and offline maps.",
      image: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?auto=format&fit=crop&w=800&h=500",
      tags: ["Flutter", "Maps API", "GetX", "Localization"],
      demoUrl: "#",
      repoUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="section-header text-center mx-auto mb-4">Featured Projects</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          A selection of my recent Flutter applications showcasing beautiful UI design, 
          performance optimization, and complex feature implementation.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 opacity-0 animate-slide-up animate-delay-200"
            >
              <div className="overflow-hidden">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  />
                </AspectRatio>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="bg-blue-50 text-primary-flutter hover:bg-blue-100">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.demoUrl && (
                    <Button variant="default" size="sm" className="bg-primary-flutter hover:bg-primary-flutterLight">
                      <Eye className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  {project.repoUrl && (
                    <Button variant="outline" size="sm" className="border-primary-flutter text-primary-flutter hover:bg-primary-flutter/10">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
