"use client";
import Section from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fadeUp } from "@/lib/animation/animations";
import { outrosTiposDeVeiolencia } from "@/lib/constants/outrosTiposDeViolencia";

import { motion } from "framer-motion";

function OutrasFormasDeViolencia() {
  return (
    <Section title="Outras Formas de Violencia" className="bg-purple-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {outrosTiposDeVeiolencia &&
          outrosTiposDeVeiolencia.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.4}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="min-h-[100%] max-h-[300px]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {card.icon}
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 text-sm">
                  <p className="text-muted-foreground">{card.text}</p>
                  <p className="text-muted-foreground">{card.text2}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
      </div>
    </Section>
  );
}

export default OutrasFormasDeViolencia;
