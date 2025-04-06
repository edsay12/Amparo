import Section from "@/components/Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function SectionMitosEVerdades() {
  return (
    <Section
      title="Mitos e Verdades"
      description="Muitas concepções errôneas sobre a violência contra a mulher dificultam o combate ao problema. Conheça a realidade."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <Card className="border-l-4 border-l-red-500">
          <CardHeader>
            <CardTitle className="text-red-500 text-lg">MITO</CardTitle>
            <CardDescription className="font-medium  text-gray-800">
              &quot;A violência doméstica só acontece em famílias de baixa
              renda&quot;
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              A violência contra a mulher ocorre em todas as classes sociais,
              níveis educacionais e contextos culturais. Mulheres de todas as
              origens podem ser vítimas, independentemente de sua condição
              socioeconômica.
            </p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="text-green-500 text-lg">VERDADE</CardTitle>
            <CardDescription className="font-medium  text-gray-800">
              &quot;A violência psicológica pode ser tão prejudicial quanto a
              física&quot;
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Embora não deixe marcas visíveis, a violência psicológica causa
              danos profundos à saúde mental e emocional das vítimas, podendo
              levar a depressão, ansiedade, transtorno de estresse
              pós-traumático e até mesmo pensamentos suicidas.
            </p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-red-500">
          <CardHeader>
            <CardTitle className="text-red-500 text-lg">MITO</CardTitle>
            <CardDescription className="font-medium  text-gray-800">
              &quot;Se a situação fosse tão grave, ela simplesmente iria
              embora&quot;
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Existem muitas barreiras que impedem uma mulher de deixar um
              relacionamento abusivo: dependência financeira, medo de
              represálias, preocupação com os filhos, falta de apoio social,
              manipulação psicológica e até mesmo ameaças de morte.
            </p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="text-green-500 text-lg">VERDADE</CardTitle>
            <CardDescription className="font-medium  text-gray-800">
              &quot;A Lei Maria da Penha é um importante mecanismo de
              proteção&quot;
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              A Lei 11.340/2006 (Lei Maria da Penha) criou mecanismos para
              coibir a violência doméstica e familiar contra a mulher, incluindo
              medidas protetivas de urgência, que podem determinar o afastamento
              do agressor e a proibição de contato com a vítima.
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

export default SectionMitosEVerdades;
