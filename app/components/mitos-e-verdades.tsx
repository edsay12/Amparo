"use client";

import Section from "@/components/Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cardVariants } from "@/lib/animation/animations";
import { motion } from "framer-motion";

const MitoCard = ({ description, content }: any) => (
  <motion.div
    className="h-full"
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    style={{ originX: 0.5, originY: 0.5 }}
  >
    <Card className="border-l-4 border-l-red-500 shadow-md bg-white min-h-[100%]">
      <CardHeader>
        <CardTitle className="text-red-500 text-lg ">MITO</CardTitle>
        <CardDescription className="font-medium text-gray-800">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {content}
        </p>
      </CardContent>
    </Card>
  </motion.div>
);

const VerdadeCard = ({ description, content }: any) => (
  <motion.div
    className="h-full"
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    style={{ originX: 0.5, originY: 0.5 }}
  >
    <Card className="border-l-4 border-l-green-500 shadow-md bg-white min-h-[100%]">
      <CardHeader>
        <CardTitle className="text-green-500 text-lg ">VERDADE</CardTitle>
        <CardDescription className="font-medium text-gray-800">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {content}
        </p>
      </CardContent>
    </Card>
  </motion.div>
);

function SectionMitosEVerdades() {
  return (
    <Section
      title="Mitos e Verdades"
      description="Muitas concepções errôneas sobre a violência contra a mulher dificultam o combate ao problema. Conheça a realidade."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <MitoCard
          description="“A violência doméstica só acontece em famílias de baixa renda”"
          content="A violência contra a mulher ocorre em todas as classes sociais, níveis educacionais e contextos culturais. Mulheres de todas as origens podem ser vítimas, independentemente de sua condição socioeconômica."
        />
        <VerdadeCard
          description="“A violência psicológica pode ser tão prejudicial quanto a física”"
          content="Embora não deixe marcas visíveis, a violência psicológica causa danos profundos à saúde mental e emocional das vítimas, podendo levar a depressão, ansiedade, transtorno de estresse pós-traumático e até mesmo pensamentos suicidas."
        />
        <MitoCard
          description="“Se a situação fosse tão grave, ela simplesmente iria embora”"
          content="Existem muitas barreiras que impedem uma mulher de deixar um relacionamento abusivo: dependência financeira, medo de represálias, preocupação com os filhos, falta de apoio social, manipulação psicológica e até mesmo ameaças de morte."
        />
        <VerdadeCard
          description="“A Lei Maria da Penha é um importante mecanismo de proteção”"
          content="A Lei 11.340/2006 (Lei Maria da Penha) criou mecanismos para coibir a violência doméstica e familiar contra a mulher, incluindo medidas protetivas de urgência, que podem determinar o afastamento do agressor e a proibição de contato com a vítima."
        />
      </div>
    </Section>
  );
}

export default SectionMitosEVerdades;
