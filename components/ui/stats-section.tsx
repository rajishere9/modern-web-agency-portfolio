"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

type StatItemProps = {
  value: string;
  label: string;
  className?: string;
  index: number;
};

const StatItem = ({ value, label, className, index }: StatItemProps) => {
  return (
    <motion.div 
      className={cn("flex flex-col items-center justify-center p-6 text-center", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <motion.div 
        className="text-5xl font-bold tracking-tight mb-3"
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
      >
        {value}
      </motion.div>
      <div className="text-sm font-medium">{label}</div>
    </motion.div>
  );
};

interface StatsProps {
  className?: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
}

export function StatsSection({ className, stats }: StatsProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  
  // After mounting, we have access to the theme
  React.useEffect(() => {
    setMounted(true);
  }, []);
  
  // Determine background and text colors based on theme
  const isDarkMode = mounted && resolvedTheme === "dark";
  
  return (
    <section 
      className={cn(
        "w-full py-16 relative overflow-hidden",
        isDarkMode 
          ? "bg-zinc-900 text-white" 
          : "bg-primary text-primary-foreground",
        className
      )}
    >
      {/* Background pattern for added visual interest */}
      <div 
        className={cn(
          "absolute inset-0",
          isDarkMode ? "opacity-20" : "opacity-10"
        )}
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      />
      
      {/* Gradient overlay */}
      <div 
        className={cn(
          "absolute inset-0",
          isDarkMode 
            ? "bg-gradient-to-r from-blue-900/30 to-purple-900/30" 
            : "bg-gradient-to-r from-primary to-primary/90"
        )}
      />
      
      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 