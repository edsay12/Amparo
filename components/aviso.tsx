import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export type AvisoProps = {
  title: string;
  description: string;
  icon?: JSX.Element;
  children?: React.ReactNode;
  className?: string;
};

function Aviso({ description, title, icon,children,className }: AvisoProps) {
  return (
    <Card className={cn("bg-red-50 ", className)}>
      <CardHeader>
        <CardTitle className="flex gap-2 items-center">
          {icon && icon}
          <span className="font-semibold">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p className="text-muted-foreground text-sm leading-relaxed border-purple-100 border">
          {description}
        </p>
        {children}
      </CardContent>
    </Card>
  );
}

export default Aviso;
