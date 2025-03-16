"use client";

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Users, Clock, Globe, ArrowRight, Sparkles, Building, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { StatsSection } from '@/components/ui/stats-section';
import { CTASection } from '@/components/ui/cta-section';

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400',
    bio: 'With over 15 years of experience in web development and digital strategy.',
  },
  {
    name: 'Michael Chen',
    role: 'Technical Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400',
    bio: 'Passionate about creating scalable and efficient web solutions.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Design Lead',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400',
    bio: 'Expert in creating beautiful and user-friendly interfaces.',
  },
  {
    name: 'David Kim',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400',
    bio: 'Specializes in digital marketing and growth strategies.',
  },
];

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from code quality to client service.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in working closely with our clients to achieve the best results.',
  },
  {
    icon: Clock,
    title: 'Efficiency',
    description: 'We optimize our processes to deliver high-quality solutions on time.',
  },
  {
    icon: Globe,
    title: 'Innovation',
    description: 'We stay at the forefront of technology to provide cutting-edge solutions.',
  },
];

// Stats data
const stats = [
  { value: "2015", label: "Founded" },
  { value: "30+", label: "Team Members" },
  { value: "4", label: "Global Offices" },
  { value: "200+", label: "Happy Clients" }
];

// Company timeline
const timeline = [
  {
    year: "2015",
    title: "Company Founded",
    description: "SRweb was founded with a mission to create exceptional digital experiences."
  },
  {
    year: "2017",
    title: "Expanded Services",
    description: "Added UI/UX design and mobile development to our service offerings."
  },
  {
    year: "2019",
    title: "International Expansion",
    description: "Opened our first international office and expanded our team globally."
  },
  {
    year: "2022",
    title: "Award Recognition",
    description: "Received multiple industry awards for our innovative digital solutions."
  }
];

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-background py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent drop-shadow-sm">
              About SRweb
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              We're a team of passionate developers, designers, and digital strategists
              dedicated to creating exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
                  alt="Our team collaborating"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[400px]"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                Founded in 2015, SRweb has grown from a small team of passionate developers to a full-service digital agency with a global presence. We specialize in creating innovative web solutions that help businesses thrive in the digital landscape.
              </p>
              <p className="text-muted-foreground mb-6">
                Our approach combines technical expertise with creative thinking to deliver results that exceed our clients' expectations. We believe in building long-term partnerships with our clients, understanding their unique challenges, and crafting tailored solutions.
              </p>
              <div className="flex gap-4 mt-8">
                <Button asChild>
                  <Link href="/services">Our Services</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and shape how we work with our clients.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 text-center h-full border bg-background/50 backdrop-blur-sm hover:shadow-md transition-all">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold">{value.title}</h3>
                    <p className="mt-2 text-muted-foreground">{value.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A look at how we've grown and evolved over the years.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                    <div className="w-1/2"></div>
                    <div className="flex items-center justify-center z-10">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                  
                  <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 p-4 ${index % 2 === 0 ? 'text-right pr-12' : 'pl-12'}`}>
                      <div className="bg-background rounded-lg border p-6 shadow-sm">
                        <div className="text-primary font-bold text-xl mb-2">{item.year}</div>
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the talented individuals who make our company great.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden bg-background hover:shadow-md transition-all">
                  <div className="aspect-square relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <div className="mt-1 text-sm text-primary font-medium">{member.role}</div>
                    <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
                    <div className="mt-4 flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        heading="Join Our Team"
        description="We're always looking for talented individuals to join our growing team. If you're passionate about digital innovation, we'd love to hear from you."
        badgeText="Careers"
        icon={<Building className="h-12 w-12 text-primary" />}
        primaryButton={{
          text: "View Open Positions",
          url: "/careers",
          icon: <ArrowRight className="h-4 w-4" />,
        }}
        secondaryButton={{
          text: "Contact Us",
          url: "/contact",
        }}
      />
    </div>
  );
}