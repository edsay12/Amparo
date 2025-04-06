import { cn } from "@/lib/utils";

type sectionProps = {
  title: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
};

function Section({ children, title, description,className }: sectionProps) {
  return (
    <section className={cn('py-16 md:py-24 bg-background', className )}>
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-5">
          {title}
        </h2>
        {description && (
          <p className="text-muted-foreground text-center">{description}</p>
        )}

        {children}
      </div>
    </section>
  );
}

export default Section;
