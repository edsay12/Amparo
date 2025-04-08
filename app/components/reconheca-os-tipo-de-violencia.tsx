"use client";

import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { tiposDeVeiolencia } from "@/lib/constants/tiposDeViolencia";
import { fadeUp } from "@/lib/animation/animations";


function SectionTiposDeViolencia() {
  

  return (
    <Section
      description="A violência contra a mulher se manifesta de diversas formas, muitas vezes sutis e normalizadas pela sociedade."
      title="Reconheça os Tipos de Violência"
      className="bg-purple-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {tiposDeVeiolencia && tiposDeVeiolencia.map((card, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {card.icon}
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{card.text}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="flex justify-center mt-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={tiposDeVeiolencia.length}
      >
        <Link href="/tipos-de-violencia">
          <Button variant="outline" className="gap-2">
            Ver todos os tipos <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </motion.div>
    </Section>
  );
}

export default SectionTiposDeViolencia;
