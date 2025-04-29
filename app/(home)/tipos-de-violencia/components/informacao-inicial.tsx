"use client";

import Aviso from "@/components/aviso";
import Section from "@/components/Section";
import { TriangleAlert } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animation/animations";

function InformacaoInicial() {
  return (
    <Section className="max-w-[900px] mx-auto">
      {[...Array(2)].map((_, i) => (
        <motion.p
          key={i}
          className="text-muted-foreground text-sm mb-5"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={i}
        >
          {i === 0
            ? "A Lei Maria da Penha (Lei nº 11.340/2006) define cinco formas de violência doméstica e familiar contra a mulher: física, psicológica, sexual, patrimonial e moral. Além dessas, existem outras formas de violência que afetam as mulheres em diferentes contextos sociais."
            : "Reconhecer esses tipos de violência é fundamental para que as mulheres possam identificar situações abusivas e buscar ajuda. Também é importante para que a sociedade como um todo possa combater essas práticas."}
        </motion.p>
      ))}

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        <Aviso
          title="Importante"
          icon={<TriangleAlert className="h-5 w-5 text-purple-800" />}
          description="Se você está em situação de perigo imediato, ligue para o 190 (Polícia Militar). Para orientações e denúncias, ligue para o 180 (Central de Atendimento à Mulher), um serviço gratuito e confidencial disponível 24 horas por dia."
        />
      </motion.div>
    </Section>
  );
}

export default InformacaoInicial;
