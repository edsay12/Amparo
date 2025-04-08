"use client";
import Section from "@/components/Section";

import ViolenciaCard from "@/components/violencia-card";
import { fadeUp } from "@/lib/animation/animations";
import { formasDeViolencia } from "@/lib/constants/formasDeViolencia";
import { motion } from "framer-motion";

function FormasDeViolencia() {
  return (
    <Section
      title="Formas de Violência Reconhecidas pela Lei Maria da Penha"
      className="md:py-0"
    >
      <div className="flex flex-col gap-5 mt-12">
        {formasDeViolencia.map((forma, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
          >
            <ViolenciaCard {...forma} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export default FormasDeViolencia;
