import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Frown, Shield, Users } from "lucide-react";
import Link from "next/link";

function SectionTiposDeViolencia() {
  return (
    <Section
      description="A violência contra a mulher se manifesta de diversas formas, muitas vezes sutis e normalizadas pela sociedade."
      title="Reconheça os Tipos de Violência"
      className="bg-purple-50 "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-purple-700" />
              Violência Física
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Qualquer conduta que ofenda a integridade ou saúde corporal da
              mulher, como empurrões, tapas, socos e agressões com objetos.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Frown className="h-5 w-5 text-purple-700" />
              Violência Psicológica
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Condutas que causem dano emocional, diminuição da autoestima,
              humilhação, manipulação, isolamento ou qualquer outro meio que
              prejudique a saúde psicológica.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-700" />
              Violência Social
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Ações que visam isolar a mulher de sua rede de apoio, controlar
              amizades, monitorar celular e redes sociais, ou impedir o contato
              com familiares.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-center mt-12">
        <Link href="/tipos-de-violencia">
          <Button variant="outline" className="gap-2">
            Ver todos os tipos <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </Section>
  );
}

export default SectionTiposDeViolencia;
