"use client";
import Section from "@/components/Section";
import SobreoQuestionario from "./sobre-o-questionario";
import { useEffect, useState } from "react";
import { perguntas } from "@/lib/constants/perguntas";
import { useTransition } from "react";
import ResultadoDoQuestionario from "./questionario-resultado";
import Questoes from "./questoes";
import { Card, CardContent } from "@/components/ui/card";
import getPredicoes from "@/lib/actions/getPredicoes";
import { PredicoesResultados } from "@/@types";
import { toast } from "sonner";
import Loading from "@/components/loading";

function Questionario() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isLoading, startTransition] = useTransition();
  const [showResult, setShowResult] = useState(false);
  const [predictedResults, setPredictedResults] =
    useState<null | PredicoesResultados>(null);
  const progress = ((currentQuestion + 1) / perguntas.length) * 100;

  useEffect(() => {
    const element = document.getElementById("question-card");
    if (element && currentQuestion > 0) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const windowHeight = window.innerHeight;
      const elementHeight = element.offsetHeight;

      const offset = elementPosition - windowHeight / 2 + elementHeight / 2;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  }, [currentQuestion]);

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [perguntas[currentQuestion].id]: value };
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < perguntas.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      fetchPrediction();
      setShowResult(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const restartTest = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setPredictedResults(null);
  };

  const fetchPrediction = async () => {
    startTransition(async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // um loadig pra dar animação
      const resultado = await getPredicoes(answers);

      if (!resultado) {
        toast.error(
          "Devido a um erro do sistema, não foi possível calcular os níveis de risco."
        );
        setPredictedResults(null);
        restartTest();
      }
      setPredictedResults(resultado);
    });
  };
  return (
    <Section className="max-w-[800px] mx-auto md:py-5">
      <SobreoQuestionario showResult={showResult || currentQuestion > 0} />

      {!predictedResults && !isLoading && (
        <Questoes
          currentQuestion={currentQuestion}
          progress={progress}
          answers={answers}
          handleAnswer={handleAnswer}
          nextQuestion={nextQuestion}
          prevQuestion={prevQuestion}
        />
      )}

      {isLoading && (
        <Card className="max-h-[800px] w-full mx-auto">
          <CardContent className="p-8 flex flex-col items-center justify-center min-h-[400px]">
            <Loading />
            <h3 className="text-xl font-bold text-purple-800 mb-3 animate-pulse">
              Analisando suas respostas
            </h3>
            <p className="text-gray-600 text-center max-w-md">
              Estamos processando suas respostas e calculando os níveis de risco
              para cada categoria de violência.
            </p>

            <div className="mt-8 w-full max-w-md">
              <div className="h-2 bg-purple-100 rounded-full overflow-hidden">
                <div className="h-full bg-purple-900 animate-[loading_2.5s_ease-in-out]"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      {true && (
        <ResultadoDoQuestionario
          results={predictedResults}
          restartTest={restartTest}
        />
      )}
    </Section>
  );
}

export default Questionario;
