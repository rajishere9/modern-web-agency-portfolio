import { Button } from '@/components/ui/button';
import { Code2, Palette, Rocket, BarChart, ShoppingCart, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ServiceCard, ServicesGrid } from '@/components/ui/service-card';
import { StatsSection } from '@/components/ui/stats-section';
import { CTASection } from '@/components/ui/cta-section';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom web applications built with cutting-edge technologies. We create scalable, secure, and high-performance solutions tailored to your business needs.',
    features: ['Custom Web Applications', 'E-commerce Solutions', 'API Development', 'Progressive Web Apps'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that combine aesthetics with functionality. We create intuitive interfaces that engage and delight your users.',
    features: ['User Interface Design', 'User Experience Design', 'Wireframing & Prototyping', 'Design Systems'],
  },
  {
    icon: Rocket,
    title: 'Digital Marketing',
    description: 'Strategic digital marketing solutions to boost your online presence. We help you reach your target audience and achieve your business goals.',
    features: ['SEO Optimization', 'Content Strategy', 'Social Media Marketing', 'Analytics & Reporting'],
  },
  {
    icon: BarChart,
    title: 'Analytics & Optimization',
    description: 'Data-driven insights to improve your digital performance. We help you understand your users and optimize for better results.',
    features: ['Performance Monitoring', 'User Behavior Analysis', 'Conversion Optimization', 'A/B Testing'],
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description: 'End-to-end e-commerce solutions to grow your online business. We build secure and scalable platforms that drive sales.',
    features: ['Custom E-commerce Platforms', 'Payment Integration', 'Inventory Management', 'Mobile Commerce'],
  },
  {
    icon: Globe,
    title: 'Cloud Services',
    description: 'Cloud infrastructure and deployment solutions. We ensure your applications are scalable, secure, and always available.',
    features: ['Cloud Architecture', 'DevOps Services', 'Security Implementation', 'Performance Optimization'],
  },
];

// Stats data
const stats = [
  { value: "100+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "10+", label: "Team Members" }
];

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-background py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent drop-shadow-sm">
              Our Services
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive range of digital services to help your business succeed online.
              From web development to digital marketing, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-muted/50">
        <div className="container mx-auto px-4">
          <ServicesGrid
            title="What We Offer"
            description="Explore our range of services designed to elevate your digital presence and drive business growth."
          >
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={<service.icon className="h-6 w-6" />}
              />
            ))}
          </ServicesGrid>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Approach</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology to deliver exceptional results for our clients.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service, index) => (
              <div key={index} className="bg-background rounded-lg border p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* CTA Section */}
      <CTASection
        heading="Ready to Transform Your Business?"
        description="Let's discuss how we can help you achieve your digital goals with our comprehensive service offerings."
        badgeText="Expert Solutions"
        primaryButton={{
          text: "Get in Touch",
          url: "/contact",
          icon: <ArrowRight className="h-4 w-4" />,
        }}
        secondaryButton={{
          text: "View Our Work",
          url: "/portfolio",
        }}
      />
    </div>
  );
}