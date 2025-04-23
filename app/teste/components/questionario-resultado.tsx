import { PredicoesResultados } from "@/@types";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import { AlertTriangle, Heart } from "lucide-react";

import { ShieldAlert } from "lucide-react";

type resultadoDoQuestionarioProps = {
  results: null | PredicoesResultados;

  restartTest: () => void;
};

function ResultadoDoQuestionario({
  results,

  restartTest,
}: resultadoDoQuestionarioProps) {
  console.log("Resultados:", results);
  return (
    <Card className="max-h-[800px] w-full mx-auto">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">Seus Resultados</h3>
          <p className="text-gray-600">
            Baseado nas suas respostas, identificamos os seguintes níveis de
            risco:
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="text-red-500" />
              <h4 className="font-semibold">Violência Física</h4>
            </div>
            <Progress
              value={results?.fisica}
              className="h-3 mb-1 [&>div]:bg-red-500"
            />
            <p className="text-sm font-medium">{results?.fisica}% de risco</p>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
            <div className="flex items-center gap-2 mb-2">
              <Heart className="text-pink-500" />
              <h4 className="font-semibold">Violência Psicológica</h4>
            </div>
            <Progress
              value={results?.psicológica}
              className="h-3 mb-1 [&>div]:bg-fuchsia-500"
            />
            <p className="text-sm font-medium">
              {results?.psicológica}% de risco
            </p>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
            <div className="flex items-center gap-2 mb-2">
              <ShieldAlert className="text-orange-500" />
              <h4 className="font-semibold">Outros Tipos</h4>
            </div>
            <Progress
              value={results?.outros}
              className="h-3 mb-1 [&>div]:bg-orange-500"
            />
            <p className="text-sm font-medium">{results?.outros}% de risco</p>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
            <div className="flex items-center gap-2 mb-2">
              <ShieldAlert className="text-yellow-500" />
              <h4 className="font-semibold">Nenhum tipo de Violencia</h4>
            </div>
            <Progress
              value={results?.nenhuma}
              className="h-3 mb-1 [&>div]:bg-yellow-500"
            />
            <p className="text-sm font-medium">{results?.nenhuma}% de risco</p>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-lg border border-purple-200 bg-white">
          <h4 className="font-bold text-lg mb-2">
            Nível de Risco Geral:{" "}
            <span className="text-purple-700">{results?.fisica}%</span>
          </h4>
          <Progress
            value={
              ((results?.fisica || 0) +
                (results?.psicológica || 0) +
                (results?.outros || 0) +
                (results?.nenhuma || 0)) /
              4
            }
            className="h-4 mb-3"
          />

          <div className="mt-4 bg-purple-50 p-4 rounded-lg border border-purple-100">
            <h5 className="font-semibold mb-2">O que fazer agora?</h5>
            <p className="text-sm mb-2">
              Se você identificou sinais de violência, é importante buscar
              ajuda. Você não está sozinha.
            </p>
            <ul className="text-sm list-disc pl-5 space-y-1">
              <li>
                Ligue para o <strong>180</strong> - Central de Atendimento à
                Mulher
              </li>
              <li>Procure uma Delegacia da Mulher mais próxima</li>
              <li>Busque apoio de amigos e familiares de confiança</li>
              <li>Considere procurar ajuda psicológica especializada</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Button
            onClick={() => {
              restartTest();
            }}
            className="bg-purple-700 hover:bg-purple-800"
          >
            Refazer o Quiz
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default ResultadoDoQuestionario;
