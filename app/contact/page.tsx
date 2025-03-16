'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

// FAQ items
const faqItems = [
  {
    question: "What services do you offer?",
    answer: "We offer a wide range of digital services including web development, UI/UX design, mobile app development, and e-commerce solutions. Check our Services page for more details."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer: "Yes, we offer various maintenance packages to keep your website secure, up-to-date, and performing optimally. We can customize a maintenance plan based on your specific needs."
  },
  {
    question: "How do we get started on a project?",
    answer: "Fill out the contact form on this page, and our team will reach out to schedule an initial consultation. We'll discuss your requirements, timeline, and budget to create a tailored proposal."
  }
];

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-background py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent drop-shadow-sm">
              Contact Us
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Get in touch with us to discuss how we can help
              bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
                <p className="mt-2 text-lg text-muted-foreground">
                  We'd love to hear from you. Our friendly team is always here to help.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 border bg-background/50 backdrop-blur-sm hover:shadow-md transition-all">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="mt-1 text-muted-foreground">contact@srweb.com</p>
                      <a href="mailto:contact@srweb.com" className="text-primary text-sm mt-2 inline-block hover:underline">
                        Send an email →
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border bg-background/50 backdrop-blur-sm hover:shadow-md transition-all">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="mt-1 text-muted-foreground">+1 (555) 123-4567</p>
                      <a href="tel:+15551234567" className="text-primary text-sm mt-2 inline-block hover:underline">
                        Call us →
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border bg-background/50 backdrop-blur-sm hover:shadow-md transition-all">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Office</h3>
                      <p className="mt-1 text-muted-foreground">
                        123 Web Street, Digital City, TC 12345
                      </p>
                      <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-primary text-sm mt-2 inline-block hover:underline">
                        Get directions →
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border bg-background/50 backdrop-blur-sm hover:shadow-md transition-all">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mr-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Business Hours</h3>
                      <p className="mt-1 text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </p>
                      <p className="text-muted-foreground">
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 border shadow-sm bg-background">
                {!isSubmitted ? (
                  <>
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold tracking-tight">Send us a message</h3>
                      <p className="text-muted-foreground mt-2">Fill out the form below and we'll get back to you as soon as possible.</p>
                    </div>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid gap-6 sm:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input placeholder="your@email.com" type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone</FormLabel>
                              <FormControl>
                                <Input placeholder="Your phone number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell us about your project"
                                  className="min-h-[150px]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button type="submit" className="w-full">
                          <Send className="mr-2 h-4 w-4" /> Send Message
                        </Button>
                      </form>
                    </Form>
                  </>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-10 text-center"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground max-w-md">
                      Thank you for reaching out. We've received your message and will get back to you within 24 hours.
                    </p>
                    <Button 
                      variant="outline" 
                      className="mt-6"
                      onClick={() => {
                        setIsSubmitted(false);
                        form.reset();
                      }}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our services and process.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full border bg-background/50 backdrop-blur-sm hover:shadow-md transition-all">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <MessageSquare className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{item.question}</h3>
                      <p className="text-muted-foreground text-sm">{item.answer}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Find Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visit our office or get in touch with us online.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden border shadow-sm h-[400px] relative">
            {/* This would be replaced with an actual map component in production */}
            <div className="absolute inset-0 bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Map placeholder - would integrate Google Maps or similar here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}