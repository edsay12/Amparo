import { PredicoesResultados } from "@/@types";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import { AlertTriangle, Heart } from "lucide-react";

import { ShieldAlert } from "lucide-react";

// Funções auxiliares para determinar o nível de risco e mensagens

const getNivelRisco = (percentual: number) => {
  if (percentual <= 30) return "baixo";
  if (percentual <= 60) return "moderado";
  return "alto";
};

const mensagemFisica = (percentual: number) => {
  const nivel = getNivelRisco(percentual);
  if (nivel === "baixo") return "Seu risco de violência física é considerado baixo. Entretanto, continue cuidando da sua segurança. Se necessário, procure ajuda.";
  if (nivel === "moderado") return "Há sinais moderados de risco de violência física. Busque apoio e mantenha-se segura. Sua segurança é muito importante. Procure ajuda se necessário.";
  return "Foi identificado que você possui altos riscos de sofrer alguma violência física. Busque proteção imediatamente e mantenha-se segura. Você não está sozinha.";
};

const mensagemPsicologica = (percentual: number) => {
  const nivel = getNivelRisco(percentual);
  if (nivel === "baixo") return "Neste momento, seus sinais de risco de sofrimento psicológico são baixos. Continue cuidando de sua saúde mental.";
  if (nivel === "moderado") return "Existem indícios moderados de que você pode sofrer de alguma violência psicológica. Sua saúde mental importa muito. Procure apoio se necessário.";
  return "Alto risco de violência psicológica identificada. Você possui altas chances de sofrer alguma violência psicológica. Você merece apoio e respeito, busque ajuda e apoio psicológico e emocional.";
};

const mensagemOutros = (percentual: number) => {
  const nivel = getNivelRisco(percentual);
  if (nivel === "baixo") return "Nenhum risco relevante de outros tipos de violência foi identificado. Entretanto, continue atenta ao seu redor e cuide de si mesma.";
  if (nivel === "moderado") return "Alguns sinais moderados detectados de que você corre riscos de sofrer de outros tipos de violência. Atenção é importante.";
  return "Foram identificados altos riscos de que você pode sofrer de outros tipos de violência. Cuide-se e procure apoio. Busque se informar sobre seus direitos, como se proteger e a identificar possíveis problemas.";
};

const mensagemNenhuma = (percentual: number) => {
  const nivel = getNivelRisco(percentual);
  if (nivel === "alto") return "Suas respostas mostram um ambiente saudável neste momento. Você possui uma alta probabilidade de não sofrer de violência. Continue priorizando relações saudáveis e mantenha-se segura.";
  if (nivel === "moderado") return "Baixo risco geral identificado, mas é importante manter a atenção. Há uma possibilidade moderada de que você possa sofrer de violência. Continue cuidando de si mesma e fique atenta ao seu redor.";
  return "Alguns sinais de risco surgiram. Foi demonstrado que existem poucas chances de você não sofrer alguma violência. Portanto, sua atenção e cuidado são fundamentais, mantenha-se informada e proteja-se.";
};

const mensagemRiscoGeral = (percentual: number) => {
  const nivel = getNivelRisco(percentual);
  if (nivel === "baixo") return "Seu risco geral é considerado baixo. Continue valorizando relações seguras e saudáveis.";
  if (nivel === "moderado") return "Seu risco geral é moderado. Atenção e apoio podem ser importantes para seu bem-estar.";
  return "Seu risco geral é alto. Busque apoio e proteção imediatamente. Você merece viver com segurança e respeito.";
};

const gerarMensagemGeral = (results: {
  fisica: number;
  psicológica: number;
  outros: number;
  nenhuma: number;
}) => {
  const { fisica, psicológica, outros, nenhuma } = results;

  const maiorValor = Math.max(fisica, psicológica, outros, nenhuma);

  // Verificar se física e psicológica estão muito próximas (empate)
  if (Math.abs(fisica - psicológica) <= 5 && fisica > outros && fisica > nenhuma) {
    return "Tanto o risco de sofrimento psicológico quanto o risco físico aparecem de forma significativa. Atenção integral é necessária para sua proteção completa.";
  }

  if (maiorValor === fisica) {
    return "As respostas indicam que, caso haja violência, ela tende a ser predominantemente física. Sua segurança física merece atenção máxima.";
  }

  if (maiorValor === psicológica) {
    return "As respostas sugerem que o sofrimento emocional é o risco mais presente. Sua saúde mental merece todo cuidado.";
  }

  if (maiorValor === outros) {
    return "Identificamos que, caso haja violência, ela pode se manifestar de formas diversas (financeira, sexual, social). Atenção em diferentes áreas é importante.";
  }

  if (maiorValor === nenhuma) {
    return "Suas respostas indicam um ambiente com poucos sinais de violência. Continue priorizando relações saudáveis.";
  }

  return "As respostas indicam sinais variados de risco. Busque apoio se sentir necessidade. Você merece viver em segurança e respeito.";
};

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
    <Card className="w-full mx-auto mb-8">
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
            <p className="text-xs text-gray-600 mt-2">
  {mensagemFisica(results?.fisica || 0)}
</p>
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
            <p className="text-xs text-gray-600 mt-2">
  {mensagemPsicologica(results?.psicológica || 0)}
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
            <p className="text-xs text-gray-600 mt-2">
  {mensagemOutros(results?.outros || 0)}
</p>
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
            <p className="text-xs text-gray-600 mt-2">
  {mensagemNenhuma(results?.nenhuma || 0)}
</p>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-lg border border-purple-200 bg-white">

        <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-100">
  <h4 className="font-bold text-lg mb-2">Resumo Geral</h4>
  <p className="text-sm text-gray-700">
    {gerarMensagemGeral({
      fisica: results?.fisica || 0,
      psicológica: results?.psicológica || 0,
      outros: results?.outros || 0,
      nenhuma: results?.nenhuma || 0
    })}
  </p>
</div>

        <h4 className="mt-4 font-bold text-lg mb-2">
          Nível de Risco Geral:{" "}
          <span className="text-purple-700">
            {(
              ((results?.fisica || 0) +
              (results?.psicológica || 0) +
              (results?.outros || 0) +
              (results?.nenhuma || 0)) / 4
            ).toFixed(1)}%
          </span>
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
          <p className="text-sm text-gray-600 mt-2">
  {mensagemRiscoGeral(
    ((results?.fisica || 0) +
    (results?.psicológica || 0) +
    (results?.outros || 0) +
    (results?.nenhuma || 0)) / 4
  )}
</p>

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
