"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  className?: string
  iconClassName?: string
}

const ServiceCard = React.forwardRef<HTMLDivElement, ServiceCardProps>(
  ({ title, description, icon, className, iconClassName, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "group relative w-full rounded-lg border border-border bg-background p-6 transition-all hover:shadow-md",
          className
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        {...props}
      >
        <div
          className="absolute inset-0 rounded-lg"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            zIndex: 0,
            opacity: 0.5,
          }}
        />

        {icon && (
          <div className={cn(
            "mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary",
            iconClassName
          )}>
            {icon}
          </div>
        )}

        <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        
        <div className="mt-auto flex items-center text-sm font-medium text-primary">
          <span className="mr-2">Learn more</span>
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </div>
      </motion.div>
    )
  }
)
ServiceCard.displayName = "ServiceCard"

interface ServicesGridProps {
  title?: string
  description?: string
  children: React.ReactNode
  className?: string
}

const ServicesGrid = React.forwardRef<HTMLDivElement, ServicesGridProps>(
  ({ title, description, children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("w-full py-12", className)}
        {...props}
      >
        {(title || description) && (
          <motion.div 
            className="mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {title && <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground">{title}</h2>}
            {description && <p className="mx-auto max-w-2xl text-muted-foreground">{description}</p>}
          </motion.div>
        )}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {children}
        </div>
      </div>
    )
  }
)
ServicesGrid.displayName = "ServicesGrid"

export { ServiceCard, ServicesGrid } 