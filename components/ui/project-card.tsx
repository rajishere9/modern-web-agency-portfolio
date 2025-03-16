"use client"

import React from "react";
import { ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  demoUrl?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  demoUrl,
  className,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Card className={cn("w-full overflow-hidden transition-all duration-300 hover:shadow-lg", className)}>
        <CardHeader className="p-0">
          {image && (
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          )}
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-2 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <h3 className="mb-2 text-xl font-semibold tracking-tight">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter className="flex justify-end border-t bg-muted/50 px-6 py-3">
          {demoUrl && (
            <Button size="sm" variant="outline" className="gap-2" asChild>
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                View Details
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
} 