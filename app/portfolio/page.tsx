"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { ProjectCard } from '@/components/ui/project-card';
import { StatsSection } from '@/components/ui/stats-section';
import { CTASection } from '@/components/ui/cta-section';
import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'Web Development',
    description: 'A full-featured e-commerce platform built with Next.js and Stripe integration.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=800',
    tags: ['Next.js', 'Stripe', 'TypeScript', 'Tailwind CSS'],
    demoUrl: '#',
  },
  {
    title: 'Healthcare Dashboard',
    category: 'UI/UX Design',
    description: 'An intuitive dashboard for healthcare professionals to manage patient data.',
    image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=800',
    tags: ['React', 'D3.js', 'Material-UI', 'Firebase'],
    demoUrl: '#',
  },
  {
    title: 'Real Estate Platform',
    category: 'Web Development',
    description: 'A modern real estate platform with virtual tours and booking system.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800',
    tags: ['Vue.js', 'Node.js', 'MongoDB', 'WebGL'],
    demoUrl: '#',
  },
  {
    title: 'Fitness App',
    category: 'Mobile Development',
    description: 'A cross-platform fitness application with workout tracking and social features.',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800',
    tags: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
    demoUrl: '#',
  },
  {
    title: 'Restaurant Ordering System',
    category: 'Web Development',
    description: 'An online ordering system for restaurants with real-time order tracking.',
    image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=800',
    tags: ['Next.js', 'Socket.io', 'PostgreSQL', 'Redis'],
    demoUrl: '#',
  },
  {
    title: 'Educational Platform',
    category: 'Web Development',
    description: 'An interactive learning platform with video courses and live sessions.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800',
    tags: ['React', 'WebRTC', 'Node.js', 'MongoDB'],
    demoUrl: '#',
  },
];

// Stats data
const stats = [
  { value: "60+", label: "Projects Delivered" },
  { value: "15+", label: "Industries Served" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "40+", label: "Awards Won" }
];

// Project categories
const categories = [
  "All",
  "Web Development",
  "UI/UX Design",
  "Mobile Development",
  "E-commerce"
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-background py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent drop-shadow-sm">
              Our Work
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of successful projects and see how we've helped businesses
              achieve their digital goals.
            </p>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Button 
                key={index} 
                variant={category === activeCategory ? "default" : "outline"} 
                className="rounded-full"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight">Featured Projects</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Browse through our most successful projects across various industries and technologies.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  demoUrl={project.demoUrl}
                />
              </motion.div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology to deliver exceptional results for every project.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {['Discovery', 'Design', 'Development', 'Delivery'].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-background rounded-lg border p-6 shadow-sm relative z-10">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-4">
                    <span className="font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step}</h3>
                  <p className="text-sm text-muted-foreground">
                    {index === 0 && "We understand your business goals, target audience, and project requirements."}
                    {index === 1 && "We create wireframes and designs that align with your brand and user needs."}
                    {index === 2 && "We build your solution using the latest technologies and best practices."}
                    {index === 3 && "We launch your project and provide ongoing support and maintenance."}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-8 h-0.5 bg-border z-0 -translate-y-1/2 -ml-4 -mr-4" style={{ width: 'calc(100% - 3rem)' }}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* CTA Section */}
      <CTASection
        heading="Have a Project in Mind?"
        description="Let's discuss how we can help you achieve your digital goals with our expertise and proven track record."
        badgeText="Start Collaborating"
        icon={<Sparkles className="h-12 w-12 text-primary" />}
        primaryButton={{
          text: "Start a Project",
          url: "/contact",
          icon: <ArrowRight className="h-4 w-4" />,
        }}
        secondaryButton={{
          text: "View Services",
          url: "/services",
        }}
      />
    </div>
  );
}