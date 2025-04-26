"use client";
import Section from "@/components/Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import psicologo from "../assets/psicologo.jpg";
import juridico from "../assets/juridico.jpg";
import assistenteSocial from "../assets/assitenteSocial.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInLeft, fadeUp } from "@/lib/animation/animations";
import Link from "next/link";
function BusqueAjudaProfissional() {
  return (
    <Section
      title="Busque Ajuda Profissional"
      id="busque-ajuda-profissional"
      description="Profissionais especializados vão te oferecer o suporte necessário para te manter em segurança"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {/* card psiciologo */}
        <motion.div
          className="h-full"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Card className=" w-full overflow-hidden min-h-[100%]">
            <CardHeader className="p-0 relative  ">
              <Image
                src={psicologo}
                alt="psicologo"
                className="max-w-[500px] max-h-[300px] w-full object-cover brightness-75"
                width={800}
                height={800}
              />
              <h3 className="absolute bottom-4  left-4 text-white text-xl font-bold">
                Apoio Psicologico
              </h3>
            </CardHeader>
            <CardContent className="mt-4">
              <CardDescription>
                <p className="text-base text-muted-foreground">
                  Psicólogos especializados em trauma e violência podem te
                  ajudar no processo de recuperação emocional e fortalecimento
                  do seu bem-estar.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <div className="flex -space-x-2">
                    <Image
                      src={psicologo}
                      alt="Advogada"
                      className="w-8 h-8 rounded-full border-2 border-white"
                      width={50}
                      height={50}
                    />
                    <Image
                      src={psicologo}
                      alt="Advogado"
                      className="w-8 h-8 rounded-full border-2 border-white"
                      width={50}
                      height={50}
                    />
                    <Image
                      src={psicologo}
                      alt="Advogada"
                      className="w-8 h-8 rounded-full border-2 border-white"
                      width={50}
                      height={50}
                    />
                  </div>
                  <span className="text-sm text-gray-500">
                    +85 profissionais
                  </span>
                </div>
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>
        {/* card Advogado */}
        <motion.div
          className="h-full"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Card className=" w-full overflow-hidden min-h-[100%]">
            <CardHeader className="p-0 relative  ">
              <Image
                src={juridico}
                alt="psicologo"
                className="max-w-[500px] max-h-[300px] w-full object-cover brightness-75"
                width={800}
                height={800}
              />
              <h3 className="absolute bottom-4  left-4 text-white text-xl font-bold">
                Orientação Jurídica
              </h3>
            </CardHeader>
            <CardContent className="mt-4">
              <CardDescription>
                <p className="text-base text-muted-foreground">
                  Advogados podem te auxiliar com medidas protetivas, processos
                  e garantia dos seus direitos legais em situações de violência.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <div className="flex -space-x-2">
                    <Image
                      src={juridico}
                      alt="Advogada"
                      className="w-8 h-8 rounded-full border-2 border-white"
                      width={50}
                      height={50}
                    />
                    <Image
                      src={juridico}
                      alt="Advogado"
                      className="w-8 h-8 rounded-full border-2 border-white"
                      width={50}
                      height={50}
                    />
                    <Image
                      src={juridico}
                      alt="Advogada"
                      className="w-8 h-8 rounded-full border-2 border-white"
                      width={50}
                      height={50}
                    />
                  </div>
                  <span className="text-sm text-gray-500">
                    +85 profissionais
                  </span>
                </div>
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>
        {/* card assitencia social */}
        <motion.div
          className="h-full"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Card className=" w-full overflow-hidden min-h-[100%]">
            <CardHeader className="p-0 relative  ">
              <Image
                src={assistenteSocial}
                alt="psicologo"
                className="max-w-[500px] max-h-[300px] w-full object-cover brightness-75"
                width={800}
                height={800}
              />
              <h3 className="absolute bottom-4  left-4 text-white text-xl font-bold">
                Assistência Social
              </h3>
            </CardHeader>
            <CardContent className="mt-4">
              <CardDescription>
                <p className="text-base text-muted-foreground">
                  Assistentes sociais podem te ajudar com recursos, moradia,
                  planos de segurança e acesso a alguns serviços públicos.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <div className="flex -space-x-2">
                    <Image
                      src={assistenteSocial}
                      alt="Advogada"
                      className="w-8 h-8 rounded-full border-2 border-white"
                      width={50}
                      height={50}
                    />
                    <Image
                      src={assistenteSocial}
                      alt="Advogado"
                      className="w-8 h-8 rounded-full border-2 border-white"
                      width={50}
                      height={50}
                    />
                    <Image
                      src={assistenteSocial}
                      alt="Advogada"
                      className="w-8 h-8 rounded-full border-2 border-white"
                      width={50}
                      height={50}
                    />
                  </div>
                  <span className="text-sm text-gray-500">
                    +85 profissionais
                  </span>
                </div>
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <motion.div
        className="flex itens-center justify-center mt-12"
        variants={fadeUp}
      >
        <Link href="/ajuda-profissional">
          <Button
            variant={"secondary"}
            className="text-white bg-purple-800 hover:bg-purple-900"
          >
            Encontrar Profissionais
            <ArrowRight width={24} height={24} className=" text-white" />
          </Button>
        </Link>
      </motion.div>
    </Section>
  );
}

export default BusqueAjudaProfissional;
