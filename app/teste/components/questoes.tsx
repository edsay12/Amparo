import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { perguntas } from "@/lib/constants/perguntas";


type questoesProps = {
  currentQuestion: number;

  progress: number;
  answers: Record<number, string>;
  handleAnswer: (value: string) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
};

function Questoes({answers,currentQuestion,progress,handleAnswer,nextQuestion,prevQuestion}: questoesProps) {

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
        <h2 className="text-xl font-semibold mb-6">
          {perguntas[currentQuestion].question}
        </h2>
        <RadioGroup
          value={answers[perguntas[currentQuestion].id] || ""}
          onValueChange={handleAnswer}
          className="space-y-3"
        >
          {perguntas[currentQuestion].options.map((option) => (
            <div key={option.value} className="flex items-center space-x-2">
              <RadioGroupItem
                value={option.value}
                id={`option-${option.value}`}
              />
              <Label
                htmlFor={`option-${option.value}`}
                className="cursor-pointer"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
        >
          Anterior
        </Button>
        <Button
          onClick={nextQuestion}
          disabled={!answers[perguntas[currentQuestion].id]}
          className="bg-purple-700 hover:bg-purple-800"
        >
          {currentQuestion === perguntas.length - 1
            ? "Ver resultado"
            : "Próxima"}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Questoes;
