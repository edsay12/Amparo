"use client";
import Section from "@/components/Section";
import { motion } from "framer-motion";
import Image from "next/image";
import { apoiadores } from "@/lib/constants/partners";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function SectionParceitosEApoiadores() {
  return (
    <Section
      title="Parceiros e Apoiadores"
      description="Organizações que trabalham no combate à violência contra a mulher"
    >
      <div className="grid grid-cols-2 md:grid-cols-4  gap-8 mt-12">
        {apoiadores.map((apoio, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
              <Image
                src={apoio.logo}
                alt={`Logo de ${apoio.nome}`}
                className="w-16 h-16 object-contain"
              />
            </div>
            <h3 className="font-medium text-sm text-center">{apoio.nome}</h3>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export default SectionParceitosEApoiadores;
