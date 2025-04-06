type sectionProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

function Section({ children, title, description }: sectionProps) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
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
