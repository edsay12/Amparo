import Aviso from "@/components/aviso";
import Section from "@/components/Section";
import { TriangleAlert } from "lucide-react";

function InformacaoInicial() {
  return (
    <Section className="max-w-[900px] mx-auto ">
      <p className=" text-muted-foreground text-sm mb-5">
        A Lei Maria da Penha (Lei nº 11.340/2006) define cinco formas de
        violência doméstica e familiar contra a mulher: física, psicológica,
        sexual, patrimonial e moral. Além dessas, existem outras formas de
        violência que afetam as mulheres em diferentes contextos sociais.
      </p>
      <p className="text-muted-foreground text-sm mb-5">
        Reconhecer esses tipos de violência é fundamental para que as mulheres
        possam identificar situações abusivas e buscar ajuda. Também é
        importante para que a sociedade como um todo possa combater essas
        práticas.
      </p>
      <Aviso
        title="Importante"
        icon={<TriangleAlert className="h-5 w-5 text-purple-800" />}
        description="Se você está em situação de perigo imediato, ligue para o 190 (Polícia Militar). Para orientações e denúncias, ligue para o 180 (Central de Atendimento à Mulher), um serviço gratuito e confidencial disponível 24 horas por dia."
      />
    </Section>
  );
}

export default InformacaoInicial;
