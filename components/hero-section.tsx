"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface HeroAction {
  text: string;
  href: string;
  icon?: React.ReactNode;
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
}

interface HeroProps {
  badge?: {
    text: string;
    action: {
      text: string;
      href: string;
    };
  };
  title: string;
  description: string;
  actions: HeroAction[];
  image: {
    light: string;
    dark: string;
    alt: string;
  };
}

export function HeroSection({
  badge,
  title,
  description,
  actions,
  image,
}: HeroProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  
  // Default to light theme image during server-side rendering to avoid hydration mismatch
  const imageSrc = mounted && resolvedTheme === "dark" ? image.dark : image.light;
  
  // After mounting, we have access to the theme
  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className={cn(
        "bg-background text-foreground",
        "py-8 sm:py-12 md:py-16 px-4",
        "overflow-hidden"
      )}
    >
      <div className="mx-auto max-w-7xl flex flex-col gap-8 pt-4 sm:gap-12">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-8">
          {/* Badge */}
          {badge && (
            <Badge variant="outline" className="gap-2">
              <span className="text-muted-foreground">{badge.text}</span>
              <a href={badge.action.href} className="flex items-center gap-1">
                {badge.action.text}
                <ArrowRight className="h-3 w-3" />
              </a>
            </Badge>
          )}

          {/* Title */}
          <h1 className="relative z-10 inline-block bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-7xl md:leading-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="text-md relative z-10 max-w-[600px] font-medium text-muted-foreground sm:text-xl">
            {description}
          </p>

          {/* Actions */}
          <div className="relative z-10 flex flex-wrap justify-center gap-4">
            {actions.map((action, index) => (
              <Button key={index} variant={action.variant} size="lg" asChild>
                <a href={action.href} className="flex items-center gap-2">
                  {action.icon}
                  {action.text}
                </a>
              </Button>
            ))}
          </div>

          {/* Image */}
          <div className="relative w-full pt-8">
            <div className="mx-auto max-w-3xl overflow-hidden rounded-lg border bg-background shadow-xl">
              <div className="flex h-8 items-center border-b bg-muted/40 px-4">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="relative">
                  <Image
                    src={imageSrc}
                    alt={image.alt}
                    width={1248}
                    height={765}
                    priority
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
