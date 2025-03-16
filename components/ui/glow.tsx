"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GlowProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "top" | "bottom" | "left" | "right" | "center";
  size?: "sm" | "md" | "lg" | "xl";
  color?: "primary" | "secondary" | "accent" | "blue" | "green" | "purple" | "pink";
}

export function Glow({
  variant = "center",
  size = "lg",
  color = "primary",
  className,
  ...props
}: GlowProps) {
  const variantClasses = {
    top: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
    bottom: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
    left: "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
    right: "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  const sizeClasses = {
    sm: "w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]",
    md: "w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]",
    lg: "w-[400px] h-[400px] sm:w-[600px] sm:h-[600px]",
    xl: "w-[600px] h-[600px] sm:w-[800px] sm:h-[800px]",
  };

  const colorClasses = {
    primary: "bg-primary/20",
    secondary: "bg-secondary/20",
    accent: "bg-accent/20",
    blue: "bg-blue-500/20",
    green: "bg-green-500/20",
    purple: "bg-purple-500/20",
    pink: "bg-pink-500/20",
  };

  return (
    <div
      className={cn(
        "absolute z-0 rounded-full blur-[100px] opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        colorClasses[color],
        className
      )}
      {...props}
    />
  );
} 