import { Banner } from "@/components/banner";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <Banner
        title={<>Juntos Contra a Violência</>}
        description="Toda mulher tem direito a uma vida livre de violência. Informação
        é o primeiro passo para a mudança."
        descriptionClassName="text-sm"
        buttons={
          <>
            <div className="flex flex-col sm:flex-row gap-4 ">
              <Button
                size="lg"
                className="bg-white text-purple-900 hover:bg-purple-100"
              >
                Preciso de Ajuda
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white bg-transparent hover:bg-purple-800 hover:text-white"
              >
                Como Apoiar
              </Button>
            </div>
          </>
        }
      />

      <Section title="A Realidade em Números">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-purple-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-4xl font-bold text-purple-700">
                1 em 3
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Mulheres em todo o mundo já sofreram violência física ou sexual
                em algum momento de suas vidas.
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
    </>
  );
}
