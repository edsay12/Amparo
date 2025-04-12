"use client";

import { fadeUp } from "@/lib/animation/animations";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type SectionProps = {
  title?: string;
  description?: string;
  className?: string;
  descriptionClassName?: string;
  children: React.ReactNode;
  props?: React.HTMLAttributes<HTMLDivElement>;
} & React.HTMLAttributes<HTMLDivElement>;

function Section({
  children,
  title,
  description,
  className,
  descriptionClassName,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("py-16 md:py-24 bg-background", className)}
      {...props}
    >
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {title && (
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-5"
            variants={fadeUp}
            custom={0}
          >
            {title}
          </motion.h2>
        )}

        {description && (
          <motion.p
            className={cn(
              "text-muted-foreground text-center",
              descriptionClassName
            )}
            variants={fadeUp}
            custom={1}
          >
            {description}
          </motion.p>
        )}

        {children}
      </motion.div>
    </section>
  );
}

export default Section;
