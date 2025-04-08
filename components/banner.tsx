"use client";

import { fadeUp } from "@/lib/animation/animations";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export type BannerProps = {
  title: JSX.Element;
  description?: string;
  buttons?: JSX.Element;
  height?: string;
  titleSize?: string;
  descriptionSize?: string;
  containerClassName?: string;
  voltarParaHome?: boolean;
  titleClassName?: string;
  descriptionClassName?: string;
  buttonsWrapperClassName?: string;
  className?: string;
};

export function Banner({
  title,
  description,
  buttons,
  height = "py-24",
  titleSize = "text-4xl md:text-6xl",
  descriptionSize = "text-xl md:text-xl",
  voltarParaHome = false,
  containerClassName,
  titleClassName,
  descriptionClassName,
  buttonsWrapperClassName,
  className,
}: BannerProps) {
  return (
    <section
      className={cn(
        "w-full bg-purple-900/90 text-white shadow-inner",
        height,
        className
      )}
    >
      <div
        className={cn(
          "container px-4 md:px-6 mx-auto relative z-10",
          containerClassName
        )}
      >
        <motion.div
          className="flex flex-col items-center text-center space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {voltarParaHome && (
            <motion.div variants={fadeUp}>
              <Link href="/" className="flex items-center gap-3 hover:opacity-90">
                <ArrowLeft width={20} />
                Voltar para a página inicial
              </Link>
            </motion.div>
          )}

          <motion.h1
            className={cn(
              titleSize,
              "font-bold tracking-tighter",
              titleClassName
            )}
            variants={fadeUp}
            custom={0}
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              className={cn(
                descriptionSize,
                "max-w-[700px] text-purple-100",
                descriptionClassName
              )}
              variants={fadeUp}
              custom={1}
            >
              {description}
            </motion.p>
          )}

          {buttons && (
            <motion.div
              variants={fadeUp}
              custom={2}
              className={buttonsWrapperClassName}
            >
              {buttons}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
