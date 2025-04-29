import Aviso from "@/components/aviso";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, X } from "lucide-react";
import Link from "next/link";

type sobreoQuestionarioProps = {
  showResult: boolean;
};

function SobreoQuestionario({ showResult }: sobreoQuestionarioProps) {
  return (
    <>
    
      <div className="max-w-[800px] mx-auto" >
        {/* Botão de saída rápida */}
        <div className="flex justify-end mb-4">
          <Link href={"https://www.youtube.com/watch?v=G28BSLYk4Bk"}>
            <Button variant="destructive" size="sm" className="gap-2">
              <X className="h-4 w-4" /> Saída Rápida
            </Button>
          </Link>
        </div>
        {!showResult && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Sobre este teste</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Este teste foi desenvolvido para ajudar você a identificar se
                seu relacionamento apresenta características saudáveis ou sinais
                de alerta que podem indicar um padrão abusivo.
              </p>
              <p>
                Responda às perguntas com sinceridade, pensando em como seu
                relacionamento tem sido nos últimos meses. Não existem respostas
                certas ou erradas.
              </p>
              <Aviso
                icon={<Info className="h-4 w-4 text-purple-700" />}
                title="Privacidade"
                description="Suas respostas são confidenciais e não são armazenadas. Este teste é apenas uma ferramenta de autoavaliação e não substitui o aconselhamento profissional."
              />
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
}

export default SobreoQuestionario;
