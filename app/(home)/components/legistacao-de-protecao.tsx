"use client";

import Section from "@/components/Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { leis } from "@/lib/constants/leis";
import { cardVariants, container } from "@/lib/animation/animations";

function LegistacaoDeProtecao() {
 

  return (
    <Section
      className="bg-purple-900 text-white"
      title="Legislação de Proteção"
      description="Conheça as leis que protegem as mulheres contra a violência no Brasil"
      descriptionClassName="text-sm text-white font-light"
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 mt-12 gap-8 perspective-1000"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {leis.map((lei, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="bg-purple-800 text-white border-none shadow-lg rounded-2xl min-h-[100%]">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  {lei.titulo}
                </CardTitle>
                <CardDescription className="text-xs text-purple-100 font-light">
                  {lei.numero}
                </CardDescription>
              </CardHeader>
              <CardContent className="-mt-3">
                <p className="text-sm text-white font-light">{lei.texto}</p>
                <div className="space-y-2 mt-3">
                  {lei.itens.map((item, idx) => (
                    <div key={idx} className="flex gap-3 items-center">
                      <div className="bg-purple-100/20 h-5 w-5 rounded-full flex items-center justify-center">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-xs font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

export default LegistacaoDeProtecao;
