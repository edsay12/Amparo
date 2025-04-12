"use client";

import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { container, stifiness } from "@/lib/animation/animations";
import { sinais } from "@/lib/constants/sinais";
import { motion } from "framer-motion";
import Link from "next/link";

function SinaisDeAlerta() {
  return (
    <Section
      title="Sinais de Alerta"
      className="bg-purple-50"
      description="Reconhecer os sinais de um relacionamento abusivo é o primeiro passo para buscar ajuda. Fique atenta a estes comportamentos:"
    >
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 mt-12 gap-8"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {sinais.map((itemData, index) => (
          <motion.div
            key={index}
            variants={stifiness}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="transition-all duration-300 shadow-sm hover:shadow-lg bg-white rounded-2xl min-h-[100%]">
              <CardHeader>
                <CardTitle className="flex flex-col gap-5">
                  <div className="flex justify-center w-12 h-12 items-center bg-red-100 rounded-full">
                    <span className="text-red-600 font-bold text-md">
                      {index + 1}
                    </span>
                  </div>
                  <CardDescription className="text-black text-lg">
                    {itemData.titulo}
                  </CardDescription>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                {itemData.descricao}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex itens-center justify-center mt-12">
        <Link href="/teste" className="">
          <Button
            variant="secondary"
            className=" bg-purple-800 text-white hover:bg-purple-900"
          >
            Faça o teste: Você se sente uma situação de abuso?
          </Button>
        </Link>
      </div>
    </Section>
  );
}

export default SinaisDeAlerta;
