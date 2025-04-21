import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { perguntas } from "@/lib/constants/perguntas";

type questoesProps = {
  currentQuestion: number;
  progress: number;
  answers: Record<number, string>;
  handleAnswer: (value: string) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
};

function Questoes({
  answers,
  currentQuestion,
  progress,
  handleAnswer,
  nextQuestion,
  prevQuestion,
}: questoesProps) {
  const perguntaAtual = perguntas[currentQuestion];

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

  const enviarParaAPI = async () => {
    const dados = prepararDadosParaAPI();

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

    } catch (error) {
      console.error("Erro ao enviar para API:", error);
    }
  };

  return (
    <Card id="question-card">
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">
            Pergunta {currentQuestion + 1} de {perguntas.length}
          </span>
          <span className="text-sm font-medium">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </CardHeader>

      <CardContent>
        <h2 className="text-xl font-semibold mb-6">{perguntaAtual.question}</h2>

        {perguntaAtual.type === "radio" && (
          <RadioGroup
            value={answers[perguntaAtual.id] || ""}
            onValueChange={handleAnswer}
            className="space-y-3"
          >
            {perguntaAtual.options.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={`option-${option.value}`} />
                <Label htmlFor={`option-${option.value}`} className="cursor-pointer">
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        )}

        {perguntaAtual.type === "date" && (
          <div className="flex flex-col gap-2">
            <Label htmlFor="date-input">Selecione sua data de nascimento</Label>
            <Input
              id="date-input"
              type="date"
              value={answers[perguntaAtual.id] || ""}
              onChange={(e) => handleAnswer(e.target.value)}
            />
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={prevQuestion} disabled={currentQuestion === 0}>
          Anterior
        </Button>
        <Button
          onClick={() => {
            if (currentQuestion === perguntas.length - 1) {
              enviarParaAPI();
            } else {
              nextQuestion();
            }
          }}
          disabled={!answers[perguntaAtual.id]}
          className="bg-purple-700 hover:bg-purple-800"
        >
          {currentQuestion === perguntas.length - 1 ? "Ver resultado" : "Próxima"}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Questoes;
