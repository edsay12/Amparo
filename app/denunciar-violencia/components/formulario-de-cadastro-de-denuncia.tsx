"use client";

import Aviso from "@/components/aviso";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { fadeInRight } from "@/lib/animation/animations";

import { AlertTriangle, Info } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

function FormularioDeCadastroDeDenuncia() {
  const [formStep, setFormStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio do formulário
    setSubmitted(true);
  };

  const nextStep = () => {
    setFormStep(formStep + 1);
  };

  const prevStep = () => {
    setFormStep(formStep - 1);
  };

  return (
    <div className="lg:col-span-2">
      <Tabs defaultValue="formulario" className="w-full">
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="formulario">Formulário de Denúncia</TabsTrigger>
            <TabsTrigger value="informacoes">Como Denunciar</TabsTrigger>
          </TabsList>
        </motion.div>

        {/* Formulário Tab */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <TabsContent value="formulario">
            {!submitted ? (
              <Card>
                <CardHeader>
                  <CardTitle>Formulário de Denúncia</CardTitle>
                  <CardDescription>
                    Preencha as informações abaixo para registrar sua denúncia.
                    Todos os campos marcados com * são obrigatórios.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {formStep === 1 && (
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <h3 className="text-lg font-medium">
                            Informações da Denunciante
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Você pode fazer uma denúncia anônima ou se
                            identificar.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="nome">Nome completo</Label>
                            <Input id="nome" placeholder="Seu nome completo" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">E-mail</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="seu.email@exemplo.com"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="telefone">Telefone *</Label>
                            <Input
                              id="telefone"
                              placeholder="(00) 00000-0000"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cidade">Cidade/Estado</Label>
                            <Input
                              id="cidade"
                              placeholder="Sua cidade e estado"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="contato" />
                            <Label htmlFor="contato" className="text-sm">
                              Autorizo ser contatada para mais informações sobre
                              esta denúncia
                            </Label>
                          </div>
                        </div>

                        <div className="flex justify-end">
                          <Button type="button" onClick={nextStep}>
                            Próximo
                          </Button>
                        </div>
                      </div>
                    )}

                    {formStep === 2 && (
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <h3 className="text-lg font-medium">
                            Informações da Ocorrência
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Forneça detalhes sobre o ocorrido para que possamos
                            encaminhar sua denúncia adequadamente.
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="tipo-violencia">
                              Tipo de violência*
                            </Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione o tipo de violência" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="fisica">
                                  Violência Física
                                </SelectItem>
                                <SelectItem value="psicologica">
                                  Violência Psicológica
                                </SelectItem>
                                <SelectItem value="sexual">
                                  Violência Sexual
                                </SelectItem>
                                <SelectItem value="patrimonial">
                                  Violência Patrimonial
                                </SelectItem>
                                <SelectItem value="moral">
                                  Violência Moral
                                </SelectItem>
                                <SelectItem value="digital">
                                  Violência Digital
                                </SelectItem>
                                <SelectItem value="institucional">
                                  Violência Institucional
                                </SelectItem>
                                <SelectItem value="outra">
                                  Outro tipo
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="local">Local da ocorrência*</Label>
                            <Input
                              id="local"
                              placeholder="Endereço ou referência do local"
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="data">Data da ocorrência</Label>
                              <Input id="data" type="date" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="hora">Hora aproximada</Label>
                              <Input id="hora" type="time" />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="frequencia">Frequência</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione a frequência" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="unica">
                                  Ocorrência única
                                </SelectItem>
                                <SelectItem value="ocasional">
                                  Ocasional
                                </SelectItem>
                                <SelectItem value="frequente">
                                  Frequente
                                </SelectItem>
                                <SelectItem value="diaria">Diária</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="flex justify-between">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={prevStep}
                          >
                            Voltar
                          </Button>
                          <Button type="button" onClick={nextStep}>
                            Próximo
                          </Button>
                        </div>
                      </div>
                    )}

                    {formStep === 3 && (
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <h3 className="text-lg font-medium">
                            Detalhes da Denúncia
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Descreva o ocorrido com o máximo de detalhes
                            possível. Estas informações são essenciais para a
                            investigação.
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="descricao">
                              Descrição detalhada do ocorrido*
                            </Label>
                            <Textarea
                              id="descricao"
                              placeholder="Descreva o que aconteceu, incluindo detalhes relevantes"
                              className="min-h-[150px]"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="agressor">
                              Informações sobre o(a) agressor(a) (se souber)
                            </Label>
                            <Textarea
                              id="agressor"
                              placeholder="Nome, características físicas, relação com a vítima, etc."
                              className="min-h-[100px]"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="testemunhas">
                              Testemunhas (se houver)
                            </Label>
                            <Textarea
                              id="testemunhas"
                              placeholder="Nomes e contatos de possíveis testemunhas"
                              className="min-h-[80px]"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="evidencias">Evidências</Label>
                            <p className="text-xs text-muted-foreground mb-2">
                              Descreva se existem evidências como fotos, vídeos,
                              mensagens, laudos médicos, etc.
                            </p>
                            <Textarea
                              id="evidencias"
                              placeholder="Descreva as evidências disponíveis"
                              className="min-h-[80px]"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="veracidade" required />
                            <Label htmlFor="veracidade" className="text-sm">
                              Declaro que as informações fornecidas são
                              verdadeiras*
                            </Label>
                          </div>
                        </div>

                        <div className="flex justify-between">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={prevStep}
                          >
                            Voltar
                          </Button>
                          <Button type="submit">Enviar Denúncia</Button>
                        </div>
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-green-700">
                    Denúncia Enviada com Sucesso
                  </CardTitle>
                  <CardDescription>
                    Sua denúncia foi registrada e será analisada pelas
                    autoridades competentes.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <p>
                      Obrigado por contribuir para o combate à violência contra
                      a mulher. Sua denúncia é um passo importante para a
                      proteção das vítimas e a responsabilização dos agressores.
                    </p>
                    <p>
                      <strong>Número de protocolo:</strong> #DN2024-
                      {Math.floor(Math.random() * 100000)}
                    </p>
                    <p>
                      Guarde este número para acompanhar o andamento da sua
                      denúncia. Caso tenha optado por se identificar, você
                      poderá ser contatada para fornecer informações adicionais.
                    </p>

                    <Aviso
                      icon={<Info className="h-4 w-4 text-purple-700" />}
                      title="Próximos passos"
                      description="Sua denúncia será encaminhada para o órgão competente, que tomará as providências necessárias. Em caso de emergência, lembre-se de ligar para o 190."
                    />

                    <div className="flex justify-center pt-4">
                      <Link href="/">
                        <Button>Voltar para a página inicial</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </motion.div>

        {/* Informações Tab */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          custom={0}
        >
          <TabsContent value="informacoes">
            <Card>
              <CardHeader>
                <CardTitle>Como Denunciar Violência Contra a Mulher</CardTitle>
                <CardDescription>
                  Guia prático sobre os canais de denúncia e o que esperar após
                  denunciar
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Canais de Denúncia</h3>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">
                      Ligue 180 - Central de Atendimento à Mulher
                    </h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                      <li>Serviço gratuito e confidencial</li>
                      <li>Funciona 24 horas por dia, todos os dias</li>
                      <li>
                        Recebe denúncias, orienta e encaminha para serviços de
                        proteção
                      </li>
                      <li>Pode ser acessado de qualquer lugar do Brasil</li>
                      <li>Aceita denúncias anônimas</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">
                      Delegacias Especializadas de Atendimento à Mulher (DEAMs)
                    </h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                      <li>Unidades especializadas da Polícia Civil</li>
                      <li>
                        Realizam ações de prevenção, proteção e investigação
                      </li>
                      <li>Registram Boletins de Ocorrência</li>
                      <li>Solicitam medidas protetivas de urgência</li>
                      <li>Realizam investigações e inquéritos policiais</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Outros canais</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                      <li>Disque 100 - Disque Direitos Humanos</li>
                      <li>Delegacias comuns (na ausência de DEAMs)</li>
                      <li>Ministério Público</li>
                      <li>Defensoria Pública</li>
                      <li>Aplicativo Direitos Humanos Brasil</li>
                      <li>Site da Ouvidoria Nacional de Direitos Humanos</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">
                    O que acontece após a denúncia?
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-purple-100 w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-700 font-medium">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Registro</h4>
                        <p className="text-sm text-muted-foreground">
                          Sua denúncia é registrada e recebe um número de
                          protocolo para acompanhamento.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-purple-100 w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-700 font-medium">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Análise</h4>
                        <p className="text-sm text-muted-foreground">
                          As informações são analisadas para determinar a
                          gravidade e urgência do caso.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-purple-100 w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-700 font-medium">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Encaminhamento</h4>
                        <p className="text-sm text-muted-foreground">
                          A denúncia é encaminhada para o órgão competente
                          (Delegacia, Ministério Público, etc.).
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-purple-100 w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-700 font-medium">4</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Investigação</h4>
                        <p className="text-sm text-muted-foreground">
                          É aberto um procedimento investigativo para apurar os
                          fatos relatados.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-purple-100 w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-700 font-medium">5</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Medidas de proteção</h4>
                        <p className="text-sm text-muted-foreground">
                          Em casos de risco, podem ser solicitadas medidas
                          protetivas de urgência para garantir a segurança da
                          vítima.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Dicas importantes</h3>

                  <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
                    <li>
                      <strong>Segurança primeiro:</strong> Se você está em
                      situação de perigo imediato, priorize sua segurança e
                      ligue para o 190.
                    </li>
                    <li>
                      <strong>Evidências:</strong> Sempre que possível, guarde
                      evidências como mensagens, e-mails, fotos de lesões,
                      gravações de áudio ou vídeo que possam comprovar a
                      violência.
                    </li>
                    <li>
                      <strong>Detalhes:</strong> Forneça o máximo de detalhes
                      possível na sua denúncia, como data, hora, local e
                      descrição do ocorrido.
                    </li>
                    <li>
                      <strong>Testemunhas:</strong> Se houver testemunhas,
                      mencione seus nomes e contatos, se possível.
                    </li>
                    <li>
                      <strong>Acompanhamento:</strong> Guarde o número de
                      protocolo da sua denúncia para acompanhar o andamento.
                    </li>
                    <li>
                      <strong>Rede de apoio:</strong> Busque apoio de
                      familiares, amigos ou serviços especializados durante todo
                      o processo.
                    </li>
                  </ul>
                </div>

                <Aviso
                  icon={<AlertTriangle className="h-4 w-4 text-yellow-600" />}
                  title="Importante"
                  description="Mesmo que você não tenha todas as informações ou evidências,
                    não deixe de denunciar. Sua denúncia pode ser o primeiro
                    passo para interromper um ciclo de violência."
                ></Aviso>
              </CardContent>
            </Card>
          </TabsContent>
        </motion.div>
      </Tabs>
    </div>
  );
}

export default FormularioDeCadastroDeDenuncia;
