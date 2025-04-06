"use client";
import { cn } from "@/lib/utils";
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
        <div className="flex flex-col items-center text-center space-y-6">
          {voltarParaHome && (
            <Link href="/" className="flex itens-center gap-3 hover:underline">
              {" "}
              <span>
                <ArrowLeft width={20} />
              </span>
              Voltar para a página inicial
            </Link>
          )}
          <h1
            className={cn(
              titleSize,
              "font-bold tracking-tighter",
              titleClassName
            )}
          >
            {title}
          </h1>

          {description && (
            <p
              className={cn(
                descriptionSize,
                "max-w-[700px] text-purple-100",
                descriptionClassName
              )}
            >
              {description}
            </p>
          )}

          {buttons && <div>{buttons}</div>}
        </div>
      </div>
    </section>
  );
}
