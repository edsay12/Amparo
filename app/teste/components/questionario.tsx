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
  const [predictedResults, setPredictedResults] = useState<any>(null);
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
      const totalScore = Object.values(answers).reduce(
        (sum, value) => sum + Number.parseInt(value),
        0
      );
      setScore(totalScore);

      fetchPrediction(answers);
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
    setScore(0);
    setResultCategory(null);
    setPredictedResults(null);
  };

  const fetchPrediction = async (answers: Record<number, string>) => {
    const data = {
      ANO: 2023,  
      NU_IDADE_N: 25, 
      AUTOR_SEXO: 1, 
      OUT_VEZES: 3,  
      UF: 'SP',  
      CS_RACA: 'Branca', 
      CS_ESCOL_N: 'Superior', 
      LOCAL_OCOR: 'Rua', 
      TIPO_RELACAO: 'Familiar', 
    };

    try {
      const response = await fetch("/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setPredictedResults(result); 
      setShowResult(true);
    } catch (error) {
      console.error("Erro ao fazer a requisição para a API:", error);
    }
  };

  return (
    <Section className="max-w-[800px] mx-auto md:py-5">
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

      {showResult && predictedResults && (
        <ResultadoDoQuestionario
          predictedResults={predictedResults}
          score={score}
          resultCategory={resultCategory}
          restartTest={restartTest}
        />
      )}
    </Section>
  );
}

export default Questionario;
