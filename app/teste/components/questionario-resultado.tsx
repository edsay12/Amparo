import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { resultados } from "@/lib/constants/resultados";
import { CheckCircle2, Link } from "lucide-react";

type resultadoDoQuestionarioProps = {
  score: number;
  resultCategory: typeof resultados[0];
  restartTest: () => void;
};


function ResultadoDoQuestionario({restartTest,resultCategory,score}: resultadoDoQuestionarioProps) {
  return (
    <div className="space-y-8">
      <Card className={`border ${resultCategory.color}`}>
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">{resultCategory.icon}</div>
          <CardTitle className="text-2xl">{resultCategory.title}</CardTitle>
          <CardDescription className="text-base">
            {resultCategory.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <h3 className="font-medium mb-3">
              Pontuação: {score} de 60 pontos
            </h3>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className={`h-4 rounded-full ${
                  score <= 20
                    ? "bg-red-500"
                    : score <= 35
                    ? "bg-yellow-500"
                    : score <= 45
                    ? "bg-blue-500"
                    : "bg-green-500"
                }`}
                style={{ width: `${(score / 60) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-lg">Recomendações:</h3>
            <ul className="space-y-2">
              {resultCategory.recommendations.map((rec, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-700 mt-0.5 flex-shrink-0" />
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
        <CardFooter
         className="flex flex-col space-y-4">
          <Button onClick={restartTest} variant="outline" className="w-full">
            Refazer o teste
          </Button>

          {score <= 35 && (
            <Link href="/denunciar" className="w-full">
              <Button className="w-full bg-purple-700 hover:bg-purple-800">
                Buscar ajuda
              </Button>
            </Link>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}

export default ResultadoDoQuestionario;
