"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CTASectionProps {
  className?: string;
  heading?: string;
  description?: string;
  badgeText?: string;
  icon?: React.ReactNode;
  primaryButton?: {
    text: string;
    url: string;
    icon?: React.ReactNode;
  };
  secondaryButton?: {
    text: string;
    url: string;
    icon?: React.ReactNode;
  };
}

export function CTASection({
  className,
  heading = "Ready to Start Your Project?",
  description = "Let's work together to bring your vision to life.",
  badgeText,
  icon = <Sparkles className="h-12 w-12 text-primary" />,
  primaryButton = {
    text: "Contact Us",
    url: "/contact",
    icon: <ArrowRight className="w-4 h-4" />,
  },
  secondaryButton,
}: CTASectionProps) {
  return (
    <section className={cn("w-full py-16", className)}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col rounded-xl border border-border bg-card p-8 shadow-sm md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            {badgeText && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Badge className="mb-6 px-3 py-1 text-xs font-medium">
                  <Sparkles className="mr-1 h-3.5 w-3.5" />
                  {badgeText}
                </Badge>
              </motion.div>
            )}
            
            {icon && (
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {icon}
              </motion.div>
            )}
            
            <motion.h2 
              className="mb-4 text-3xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              {heading}
            </motion.h2>
            
            <motion.p 
              className="mb-8 max-w-2xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              {description}
            </motion.p>
            
            <motion.div 
              className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              {primaryButton && (
                <Button size="lg" className="gap-2" asChild>
                  <a href={primaryButton.url}>
                    {primaryButton.text}
                    {primaryButton.icon}
                  </a>
                </Button>
              )}
              
              {secondaryButton && (
                <Button size="lg" variant="outline" asChild>
                  <a href={secondaryButton.url}>
                    {secondaryButton.text}
                    {secondaryButton.icon}
                  </a>
                </Button>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 