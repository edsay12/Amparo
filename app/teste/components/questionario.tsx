"use client";
import Section from "@/components/Section";
import SobreoQuestionario from "./sobre-o-questionario";

import { useEffect, useState } from "react";
import { perguntas } from "@/lib/constants/perguntas";
import { resultados } from "@/lib/constants/resultados";

import ResultadoDoQuestionario from "./questionario-resultado";
import Questoes from "./questoes";

function Questionario() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [resultCategory, setResultCategory] = useState<
    (typeof resultados)[0] | null
  >(null);
  // Calcular progresso do teste
  const progress = ((currentQuestion + 1) / perguntas.length) * 100;
  // para adicioanr efeito de scroll na pagina quando a pergunta é alterada
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

  // Lidar com a seleção de resposta
  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [perguntas[currentQuestion].id]: value };
    setAnswers(newAnswers);
  };

  // Avançar para a próxima pergunta
  const nextQuestion = () => {
    if (currentQuestion < perguntas.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      console.log(answers);
      // Calcular pontuação final
      const totalScore = Object.values(answers).reduce(
        (sum, value) => sum + Number.parseInt(value),
        0
      );
      setScore(totalScore);

      // Determinar categoria do resultado
      const category =
        resultados.find(
          (cat) => totalScore >= cat.min && totalScore <= cat.max
        ) || resultados[0];
      setResultCategory(category);
      console.log(showResult);
      setShowResult(true);
    }
  };

  // Voltar para a pergunta anterior
  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Reiniciar o teste
  const restartTest = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setScore(0);
    setResultCategory(null);
  };
  return (
    <Section className="max-w-[800px]  mx-auto md:py-5">
      <SobreoQuestionario showResult={showResult || currentQuestion > 0} />

      {!showResult && !resultCategory && (
        <Questoes
          currentQuestion={currentQuestion}
          progress={progress}
          answers={answers}
          handleAnswer={handleAnswer}
          nextQuestion={nextQuestion}
          prevQuestion={prevQuestion}
        />
      )}

      {showResult && resultCategory && (
        <ResultadoDoQuestionario
          score={score}
          resultCategory={resultCategory}
          restartTest={restartTest}
        />
      )}
    </Section>
  );
}

export default Questionario;
