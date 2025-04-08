"use client";
import Section from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, Users } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "@/lib/animation/animations";

function OndeBuscarAjuda() {
  return (
    <Section
      title="Onde Buscar Ajuda"
      description="Se você está passando por qualquer tipo de violência, saiba que não está sozinha e que existem serviços
especializados para te apoiar."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <motion.div
          className="h-full"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Card className="bg-purple-700 text-white">
            <CardHeader>
              <CardTitle>Serviços de Emergência</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-white p-2 rounded-full">
                  <Shield className="h-5 w-5 text-purple-700" />
                </div>
                <div>
                  <h3 className="font-medium">Polícia Militar - 190</h3>
                  <p className="text-sm text-purple-100">
                    Em caso de violência em andamento ou risco imediato.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-white p-2 rounded-full">
                  <Shield className="h-5 w-5 text-purple-700" />
                </div>
                <div>
                  <h3 className="font-medium">
                    Central de Atendimento à Mulher - 180
                  </h3>
                  <p className="text-sm text-purple-100">
                    Orientações, informações sobre direitos e serviços. Funciona
                    24h, todos os dias.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-white p-2 rounded-full">
                  <Shield className="h-5 w-5 text-purple-700" />
                </div>
                <div>
                  <h3 className="font-medium">Disque Direitos Humanos - 100</h3>
                  <p className="text-sm text-purple-100">
                    Para denúncias de violações de direitos humanos.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="h-full"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Rede de Atendimento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Shield className="h-5 w-5 text-purple-700" />
                </div>
                <div>
                  <h3 className="font-medium">
                    Delegacias Especializadas de Atendimento à Mulher
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Para registrar ocorrências e solicitar medidas protetivas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Heart className="h-5 w-5 text-purple-700" />
                </div>
                <div>
                  <h3 className="font-medium">
                    Centros de Referência de Atendimento à Mulher
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Oferecem apoio psicológico, social e jurídico.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Users className="h-5 w-5 text-purple-700" />
                </div>
                <div>
                  <h3 className="font-medium">Casas-Abrigo</h3>
                  <p className="text-sm text-muted-foreground">
                    Oferecem moradia protegida e atendimento integral em casos
                    de risco de morte.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}

export default OndeBuscarAjuda;
