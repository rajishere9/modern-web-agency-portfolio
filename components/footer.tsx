'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="border-t bg-background">
      <div className="container py-16">
        {/* Newsletter Section */}
        <motion.div 
          className="mb-16 rounded-xl bg-muted/30 p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight mb-2">Stay up to date</h3>
              <p className="text-muted-foreground">
                Subscribe to our newsletter to receive updates and insights on web development, design trends, and more.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1" 
              />
              <Button className="group">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </motion.div>
        
        {/* Main Footer Content */}
        <motion.div 
          className="grid grid-cols-1 gap-10 md:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">SRweb</h3>
            <p className="mt-4 text-muted-foreground">
              Transforming ideas into exceptional digital experiences.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>contact@srweb.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Web Street, Digital City, TC 12345</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group">
                  <span className="w-1 h-1 rounded-full bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Web Development</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group">
                  <span className="w-1 h-1 rounded-full bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>UI/UX Design</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group">
                  <span className="w-1 h-1 rounded-full bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>E-commerce Solutions</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group">
                  <span className="w-1 h-1 rounded-full bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Digital Marketing</span>
                </Link>
              </li>
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group">
                  <span className="w-1 h-1 rounded-full bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group">
                  <span className="w-1 h-1 rounded-full bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Portfolio</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group">
                  <span className="w-1 h-1 rounded-full bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="mt-4 flex gap-3">
              <Link href="#" className="flex items-center justify-center w-9 h-9 rounded-full bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="#" className="flex items-center justify-center w-9 h-9 rounded-full bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="#" className="flex items-center justify-center w-9 h-9 rounded-full bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" className="flex items-center justify-center w-9 h-9 rounded-full bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors">
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Copyright */}
        <div className="mt-16 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} SRweb. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}