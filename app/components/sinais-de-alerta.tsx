import Section from "@/components/Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function SinaisDeAlerta() {
  return (
    <Section
      title="Sinais de Alerta"
      className="bg-purple-50"
      description={
        "Reconhecer os sinais de um relacionamento abusivo é o primeiro passo para buscar ajuda. Fique atenta a estes comportamentos:"
      }
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-12 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex flex-col gap-5">
              <div className="flex justify-center w-12 h-12 text-center items-center bg-red-100 rounded-full">
                <span className="text-red-700 ">1</span>
              </div>
              <CardDescription className=" text-black text-lg">
                Controle excessivo
              </CardDescription>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            Monitoramento constante de onde você está, com quem fala, exigência
            de &quot; provas &quot; e justificativas para suas atividades.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex flex-col gap-5">
              <div className="flex justify-center w-12 h-12 text-center items-center bg-red-100 rounded-full">
                <span className="text-red-600 ">2</span>
              </div>
              <CardDescription className="text-black text-lg">
                Isolamento social
              </CardDescription>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            Tentativas de afastar você de amigos e familiares, criticar suas
            relações ou criar conflitos com pessoas próximas.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex flex-col gap-5">
              <div className="flex justify-center w-12 h-12 text-center items-center bg-red-100 rounded-full">
                <span className="text-red-600 ">3</span>
              </div>
              <CardDescription className="text-black text-lg">
                Ciúme patológico
              </CardDescription>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            Ciúme extremo e irracional, acusações frequentes de traição sem
            qualquer evidência.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex flex-col gap-5">
              <div className="flex justify-center w-12 h-12 text-center items-center bg-red-100 rounded-full">
                <span className="text-red-600 ">4</span>
              </div>
              <CardDescription className="text-black text-lg">
                Humilhação e críticas
              </CardDescription>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            Comentários depreciativos sobre sua aparência, inteligência ou
            capacidades, especialmente na frente de outras pessoas.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex flex-col gap-5">
              <div className="flex justify-center w-12 h-12 text-center items-center bg-red-100 rounded-full">
                <span className="text-red-600 ">5</span>
              </div>
              <CardDescription className="text-black text-lg">
                Intimidação
              </CardDescription>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            Comportamentos que causam medo, como gritar, quebrar objetos,
            ameaçar ou intimidar fisicamente.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex flex-col gap-5">
              <div className="flex justify-center w-12 h-12 text-center items-center bg-red-100 rounded-full">
                <span className="text-red-600 ">6</span>
              </div>
              <CardDescription className="text-black text-lg">
                Culpabilização
              </CardDescription>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            Responsabilizar você por seus problemas ou comportamentos abusivos:
            &quot;Você me faz agir assim&quot;.
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

export default SinaisDeAlerta;
