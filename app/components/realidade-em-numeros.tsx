"use client";

import Section from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fadeUp } from "@/lib/animation/animations";
import { realidadeEmNumeros } from "@/lib/constants/realidade-em-numeros";
import { motion } from "framer-motion";

function SectionRealidadeEmNumeros() {
  

  return (
    <Section title="A Realidade em Números" className="">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {realidadeEmNumeros.map((card, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="border-purple-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold text-purple-700">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{card.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export default SectionRealidadeEmNumeros;
