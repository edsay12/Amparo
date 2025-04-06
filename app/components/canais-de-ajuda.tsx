import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Handshake, Info, PhoneCall, Shield } from "lucide-react";
import Link from "next/link";

function CanaisDeAjuda() {
  return (
    <Section title="Canais de Ajuda">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mt-12">
        <Card className="bg-purple-700 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PhoneCall className="h-5 w-5" />
              Ligue 180
            </CardTitle>
            <CardDescription className="text-purple-100">
              Central de Atendimento à Mulher
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Serviço gratuito e confidencial que funciona 24h por dia, todos os
              dias. Oferece orientação sobre direitos e serviços para mulheres
              em situação de violência.
            </p>
            <Link href="/saiba-mais">
              <Button variant="secondary" className="w-full text-purple-900">
                Saiba mais sobre o serviço
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-purple-700" />
              Outros Recursos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-purple-100 p-2 rounded-full">
                <Shield className="h-5 w-5 text-purple-700" />
              </div>
              <div>
                <h3 className="font-medium">Delegacias da Mulher</h3>
                <p className="text-sm text-muted-foreground">
                  Unidades especializadas no atendimento às mulheres vítimas de
                  violência.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-purple-100 p-2 rounded-full">
                <Handshake className="h-5 w-5 text-purple-700" />
              </div>
              <div>
                <h3 className="font-medium">Centros de Referência</h3>
                <p className="text-sm text-muted-foreground">
                  Oferecem apoio psicológico, social e jurídico às mulheres em
                  situação de violência.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

export default CanaisDeAjuda;
