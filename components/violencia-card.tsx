// components/violencia/ViolenciaCard.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Aviso from "@/components/aviso";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ViolenciaCardProps {
  titulo: string;
  descricao: string;
  comoSeManifesta: string[];
  sinaisDeAlerta: string[];
  medidasDeProtecao?: string;
  icone?: LucideIcon; // novo: ícone customizável
  textoBotao?: string; // novo: botão customizável
  className?: string;
}

export default function ViolenciaCard({
  titulo,
  descricao,
  comoSeManifesta,
  sinaisDeAlerta,
  medidasDeProtecao,
  icone: Icon ,
  textoBotao = "Como denunciar",
  className,
}: ViolenciaCardProps) {
  return (
    <Card
      className={cn("border-t-8 border-t-purple-800 bg-purple-50", className)}
    >
      <CardHeader>
        <CardTitle className="flex gap-2 items-center">
          {Icon && <Icon className="text-purple-800" />}
          <span className="font-semibold text-xl">{titulo}</span>
        </CardTitle>
        <CardDescription className="font-medium text-muted-foreground">
          {descricao}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div>
          <span className="font-medium text-lg">Como se manifestar:</span>
          <ul className="text-muted-foreground text-sm list-disc ml-6 mt-3 space-y-3">
            {comoSeManifesta.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardContent>
        <div>
          <span className="font-medium text-lg">Sinais de Alerta:</span>
          <ul className="text-muted-foreground text-sm list-disc ml-6 mt-3 space-y-3">
            {sinaisDeAlerta.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {medidasDeProtecao && (
          <Aviso
            className="mt-5"
            title="Medidas de proteção:"
            description={medidasDeProtecao}
          >
            <div>
              <Button
                variant="outline"
                size="lg"
                className="bg-purple-800 text-white hover:bg-purple-900 hover:text-white"
              >
                {textoBotao}
              </Button>
            </div>
          </Aviso>
        )}
      </CardContent>
    </Card>
  );
}
