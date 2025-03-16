"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface MockupFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
}

export function MockupFrame({
  size = "medium",
  className,
  children,
  ...props
}: MockupFrameProps) {
  const sizeClasses = {
    small: "max-w-3xl",
    medium: "max-w-4xl",
    large: "max-w-5xl",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border bg-background shadow-xl",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      <div className="flex h-8 items-center border-b bg-muted/40 px-4">
        <div className="flex space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
      </div>
      {children}
    </div>
  );
}

interface MockupProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "browser" | "responsive" | "window";
  children: React.ReactNode;
}

export function Mockup({
  type = "browser",
  className,
  children,
  ...props
}: MockupProps) {
  return (
    <div
      className={cn(
        "overflow-hidden",
        {
          "rounded-b-lg": type === "browser" || type === "window",
        },
        className
      )}
      {...props}
    >
      {type === "browser" && (
        <div className="flex items-center border-b bg-muted/20 px-4 py-2">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <div className="h-4 w-4 rounded-full bg-primary/20" />
            <div className="h-4 w-40 rounded-full bg-muted" />
          </div>
        </div>
      )}
      <div className="relative">{children}</div>
    </div>
  );
} 