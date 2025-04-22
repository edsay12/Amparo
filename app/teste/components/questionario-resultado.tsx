import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { resultados } from "@/lib/constants/resultados";
import { Heart, Link } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import { ShieldAlert } from "lucide-react";
import { MessageCircleWarning } from "lucide-react";

type resultadoDoQuestionarioProps = {
  score: number;
  resultCategory: (typeof resultados)[0];
  restartTest: () => void;
};

function ResultadoDoQuestionario({
  restartTest,
  predictedResults,
  score,
}: resultadoDoQuestionarioProps) {
  console.log("Resultados:", predictedResults);
  return (
    <div className="space-y-8">
      <Card className={`border `}>
        <CardHeader className="text-center">
          {/* <div className="flex justify-center mb-4">
            <TriangleAlert color="#ed333b" />
          </div> */}
          {/* <div className="flex justify-center mb-4"><Heart/></div> */}
          <CardTitle className="text-2xl">Seus resultados</CardTitle>
          <CardDescription className="text-base">
            Baseado nas suas respostas, identificamos os seguintes niveis de
            riscos:
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Container 1 - Violência Física */}
          <div className="bg-white rounded-2xl shadow p-4 w-full mb-6">
            <div className="flex items-center mb-2">
              <span className="text-xl mr-2">
                <TriangleAlert color="#ed333b" />
              </span>
              <h2 className="text-lg font-semibold">Violência Física</h2>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-red-500 h-3 rounded-full"
                style={{ width: `${predictedResults.fisica}%` }}
              ></div>
            </div>
          </div>
          {/* Container 2 - Violência Psicológica */}
          <div className="bg-white rounded-2xl shadow p-4 w-full mb-6">
            <div className="flex items-center mb-2">
              <span className="text-xl mr-2">
                {" "}
                <MessageCircleWarning color="#e66100" />{" "}
              </span>
              <h2 className="text-lg font-semibold">Violência Psicológica</h2>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-orange-500 h-3 rounded-full"
                style={{ width: `${predictedResults.psicologica}%` }}
              ></div>
            </div>
          </div>
          {/* Container 3 - Violência Sexual */}
          <div className="bg-white rounded-2xl shadow p-4 w-full mb-6">
            <div className="flex items-center mb-2">
              <span className="text-xl mr-2">
                <ShieldAlert color="#f6d32d" />
              </span>
              <h2 className="text-lg font-semibold">Violência Sexual</h2>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-amber-300 h-3 rounded-full"
                style={{ width: `${predictedResults.outros}%` }}
              ></div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col space-y-4">
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
