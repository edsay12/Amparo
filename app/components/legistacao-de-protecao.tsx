import Section from "@/components/Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

function LegistacaoDeProtecao() {
  return (
    <Section
      className="bg-purple-900 text-white"
      title="Legislação de Proteção"
      description="Conheça as leis que protegem as mulheres contra a violência no Brasil"
      descriptionClassName="text-sm text-white font-light"
    >
      <div className="grid grid-cols-1 md:grid-cols-3  mt-12 gap-8">
        <Card className="bg-purple-800 text-white border-none">
          <CardHeader>
            <CardTitle className="text-xl font-bold">
              Lei Maria da Penha
            </CardTitle>
            <CardDescription className="text-xs text-purple-100 font-light">
              Lei nº 11.340/2006
            </CardDescription>
          </CardHeader>
          <CardContent className="-mt-3">
            <p className="text-muted-foreground text-sm text-white font-light">
              Cria mecanismos para coibir a violência doméstica e familiar
              contra a mulher e estabelece medidas de assistência e proteção às
              mulheres em situação de violência.
            </p>
            <div className="space-y-2 mt-3">
              <div className="flex gap-3 items-center">
                <div className="bg-purple-100/20 h-5 w-5 rounded-full flex items-center justify-center text-purple-900">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-xs font-light">
                  Medidas protetivas de urgência
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <div className="bg-purple-100/20 h-5 w-5 rounded-full flex items-center justify-center text-purple-900">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-xs font-light">
                  Criação de juizados especializados
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <div className="bg-purple-100/20 h-5 w-5 rounded-full flex items-center justify-center text-purple-900">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-xs font-light">
                  Assistência jurídica gratuitaa
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-purple-800 text-white border-none">
          <CardHeader>
            <CardTitle className="text-xl font-bold">
              Lei do Feminicídio
            </CardTitle>
            <CardDescription className="text-xs text-purple-100 font-light">
              Lei nº 13.104/2015
            </CardDescription>
          </CardHeader>
          <CardContent className="-mt-3">
            <p className="text-muted-foreground text-sm text-white font-light">
              Classifica o feminicídio como homicídio qualificado e o inclui no
              rol dos crimes hediondos, quando o crime for praticado contra a
              mulher por razões da condição do sexo feminino.
            </p>
            <div className="space-y-2 mt-3">
              <div className="flex gap-3 items-center">
                <div className="bg-purple-100/20 h-5 w-5 rounded-full flex items-center justify-center text-purple-900">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-xs font-light">Penas mais severas</span>
              </div>
              <div className="flex gap-3 items-center">
                <div className="bg-purple-100/20 h-5 w-5 rounded-full flex items-center justify-center text-purple-900">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-xs font-light">
                  Reconhecimento da violência de gênero
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <div className="bg-purple-100/20 h-5 w-5 rounded-full flex items-center justify-center text-purple-900">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-xs font-light">
                  Visibilidade estatística
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-purple-800 text-white border-none">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Lei do Stalking</CardTitle>
            <CardDescription className="text-xs text-purple-100 font-light">
              Lei nº 14.132/2021
            </CardDescription>
          </CardHeader>
          <CardContent className="-mt-3">
            <p className="text-muted-foreground text-sm text-white font-light">
              Tipifica o crime de perseguição (stalking), que consiste em
              perseguir alguém, por qualquer meio, ameaçando sua integridade
              física ou psicológica, restringindo sua liberdade de locomoção ou
              invadindo sua privacidade.
            </p>
            <div className="space-y-2 mt-3">
              <div className="flex gap-3 items-center">
                <div className="bg-purple-100/20 h-5 w-5 rounded-full flex items-center justify-center text-purple-900">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-xs font-light">
                  Proteção contra perseguição física e virtual
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <div className="bg-purple-100/20 h-5 w-5 rounded-full flex items-center justify-center text-purple-900">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-xs font-light">
                  Pena de reclusão de 6 meses a 2 anos
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <div className="bg-purple-100/20 h-5 w-5 rounded-full flex items-center justify-center text-purple-900">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-xs font-light">
                  Aumento de pena em casos específicos
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

export default LegistacaoDeProtecao;
