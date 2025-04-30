"use client";

import Aviso from "@/components/aviso";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertTriangle,
  ExternalLink,
  Info,
  Lock,
  PhoneCall,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInLeft } from "@/lib/animation/animations";

function Informacoes() {
  return (
    <div className="lg:col-span-1">
      <div className="space-y-6 sticky top-24">
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <Card>
            <CardHeader className="bg-purple-50">
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-purple-700" />
                Canais de Denúncia
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <PhoneCall className="h-5 w-5 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-medium">Ligue 180</h3>
                    <p className="text-sm text-muted-foreground">
                      Central de Atendimento à Mulher, funciona 24h por dia,
                      todos os dias.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Shield className="h-5 w-5 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-medium">Delegacias da Mulher</h3>
                    <p className="text-sm text-muted-foreground">
                      Unidades especializadas no atendimento às mulheres vítimas
                      de violência.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <ExternalLink className="h-5 w-5 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-medium">
                      Aplicativo Direitos Humanos Brasil
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Disponível para Android e iOS, permite fazer denúncias de
                      forma anônima.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t">
                <Aviso
                  icon={<AlertTriangle className="h-4 w-4 text-red-600" />}
                  title="Emergência"
                  description="Em caso de violência em andamento ou risco imediato, ligue para a Polícia Militar: 190"
                ></Aviso>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          <Card>
            <CardHeader className="bg-purple-50">
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-purple-700" />
                Sua Segurança
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>
                  <strong>Navegação segura:</strong> Se você está em uma
                  situação de risco, considere usar o modo anônimo do navegador
                  e limpar seu histórico após usar este site.
                </p>
                <p>
                  <strong>Botão de saída rápida:</strong> Use o botão vermelho
                  abaixo para sair rapidamente desta página
                  caso alguém se aproxime.
                </p>
                <p>
                  <strong>Privacidade:</strong> Suas informações são protegidas
                  e tratadas com confidencialidade.
                </p>
              </div>
              <div className="mt-6">
                <Link href="https://www.youtube.com/watch?v=hOKw9liExaQ">
                  <Button variant="destructive" className="w-full">
                    Saída Rápida
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

export default Informacoes;
