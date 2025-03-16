import { Button } from '@/components/ui/button';
import { Code2, Palette, Rocket, Trophy, ArrowRight, Globe, Database, LineChart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { HeroSection } from '@/components/hero-section';
import { ServiceCard, ServicesGrid } from '@/components/ui/service-card';
import { ProjectCard } from '@/components/ui/project-card';
import { StatsSection } from '@/components/ui/stats-section';
import { CTASection } from '@/components/ui/cta-section';

export default function Home() {
  // Services data
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices for optimal performance.",
      icon: <Code2 className="h-6 w-6" />
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that deliver exceptional user experiences and engage your audience.",
      icon: <Palette className="h-6 w-6" />
    },
    {
      title: "Digital Marketing",
      description: "Strategic marketing solutions to grow your online presence and reach your target audience.",
      icon: <Rocket className="h-6 w-6" />
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and deployment solutions for reliable and secure applications.",
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: "Database Solutions",
      description: "Efficient database design and management to ensure your data is organized and accessible.",
      icon: <Database className="h-6 w-6" />
    },
    {
      title: "Analytics & Reporting",
      description: "Comprehensive analytics and reporting tools to track performance and make data-driven decisions.",
      icon: <LineChart className="h-6 w-6" />
    }
  ];

  // Stats data
  const stats = [
    { value: "100+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "5+", label: "Years Experience" },
    { value: "10+", label: "Team Members" }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection
        badge={{
          text: "Modern web solutions",
          action: {
            text: "Learn more",
            href: "/about",
          },
        }}
        title="Transform Your Digital Presence with SRweb"
        description="We create stunning, high-performance websites and applications that help businesses thrive in the digital age."
        actions={[
          {
            text: "Get Started",
            href: "/contact",
            variant: "default",
          },
          {
            text: "View Our Work",
            href: "/portfolio",
            variant: "outline",
            icon: <ArrowRight className="h-4 w-4" />,
          },
        ]}
        image={{
          light: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1248",
          dark: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1248",
          alt: "SRweb Dashboard Preview",
        }}
      />

      {/* Services Section */}
      <section className="bg-muted/50">
        <div className="container mx-auto px-4">
          <ServicesGrid
            title="Our Services"
            description="We provide comprehensive digital solutions to help your business succeed online."
          >
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </ServicesGrid>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight">Featured Projects</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Explore some of our most successful projects and see how we've helped businesses achieve their digital goals.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="E-commerce Website"
              description="A modern e-commerce platform with seamless checkout experience."
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800"
              tags={["React", "Node.js", "Stripe"]}
              demoUrl="/portfolio"
            />
            <ProjectCard
              title="Mobile App"
              description="A cross-platform mobile application for a fitness brand."
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800"
              tags={["React Native", "Firebase", "UI/UX"]}
              demoUrl="/portfolio"
            />
            <ProjectCard
              title="Corporate Website"
              description="A professional website for a financial services company."
              image="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800"
              tags={["Next.js", "Tailwind CSS", "CMS"]}
              demoUrl="/portfolio"
            />
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* CTA Section */}
      <CTASection
        icon={<Trophy className="h-12 w-12 text-primary" />}
        heading="Ready to Start Your Project?"
        description="Let's work together to bring your vision to life. Our team of experts is ready to help you achieve your digital goals."
        primaryButton={{
          text: "Contact Us",
          url: "/contact",
          icon: <ArrowRight className="h-4 w-4" />,
        }}
        secondaryButton={{
          text: "View Our Services",
          url: "/services",
        }}
      />
    </div>
  );
}