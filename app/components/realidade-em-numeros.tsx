import Section from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function SectionRealidadeEmNumeros() {
  return (
    <Section title="A Realidade em Números" className="">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <Card className="border-purple-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-4xl font-bold text-purple-700">
              1 em 3
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Mulheres em todo o mundo já sofreram violência física ou sexual em
              algum momento de suas vidas.
            </p>
          </CardContent>
        </Card>
        <Card className="border-purple-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-4xl font-bold text-purple-700">
              5 por dia
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Em média, cinco mulheres são assassinadas por dia no Brasil em
              contextos de violência doméstica.
            </p>
          </CardContent>
        </Card>
        <Card className="border-purple-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-4xl font-bold text-purple-700">
              70%
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Das mulheres vítimas de violência não denunciam seus agressores
              por medo ou falta de informação.
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

export default SectionRealidadeEmNumeros;
