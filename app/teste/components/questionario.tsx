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
    setScore(0);
    setResultCategory(null);
    setPredictedResults(null);
  };

  const prepararDadosParaAPI = () => {
    const dataNascimento = new Date(answers[1]);
    const anoAtual = 2023;

    const idade = anoAtual - dataNascimento.getFullYear();

    const dadosAPI = {
      ANO: 2023,
      NU_IDADE_N: idade,
      CS_RACA: answers[2],
      LOCAL_OCOR: answers[3],
      TIPO_RELACAO: answers[4],
      AUTOR_SEXO: Number(answers[5]),
      OUT_VEZES: Number(answers[6]),
      CS_ESCOL_N: answers[7],
      UF: "PE",
    };

    return dadosAPI;
  };

  const fetchPrediction = async (answers: Record<number, string>) => {
    const dados = prepararDadosParaAPI();
    console.log("Dados para API:", dados);

    try {
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });

      const resultado = await response.json();
      console.log("Resultado da API:", resultado);
      setPredictedResults(resultado);
    } catch (error) {
      console.error("Erro ao enviar para API:", error);
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

      {/* Tem que mudar a logica desse componente */}
      {showResult && predictedResults && (
        <ResultadoDoQuestionario
          score={score}
          predictedResults={predictedResults}
          restartTest={restartTest}
        />
      )}
    </Section>
  );
}

export default Questionario;
