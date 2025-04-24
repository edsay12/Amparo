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
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertTriangle, Info } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { denunciarViolenciaSchema } from "@/lib/schemas";
import { z } from "zod";

const stepsSchema = [
  {
    fields: ["nome", "email", "telefone", "cidade", "aceitoSerContactado"],
  },
  {
    fields: ["tipoViolencia", "local", "data", "hora", "frequencia"],
  },
  {
    fields: [
      "descricao",
      "agressor",
      "testemunhas",
      "evidencias",
      "veracidade",
    ],
  },
];

type FielName = keyof z.infer<typeof denunciarViolenciaSchema>;
function FormularioDeCadastroDeDenuncia() {
  const [formStep, setFormStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm({
    resolver: zodResolver(denunciarViolenciaSchema),
    mode: "onChange",
  });
  const processForm = (data: z.infer<typeof denunciarViolenciaSchema>) => {
    console.log(data);
    setSubmitted(true);
  };

  const nextStep = async () => {
    const fields = stepsSchema[formStep].fields;
    const output = await form.trigger(fields as FielName[], {
      shouldFocus: true,
    });
    if (!output) return;

    if (formStep == 2) {
      {
        await form.handleSubmit(processForm)();
      }
    }
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
                  <Form {...form}>
                    <form className="space-y-6">
                      {formStep === 0 && (
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
                            <FormField
                              control={form.control}
                              name="nome"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Nome Completo</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="telefone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Telefone *</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="cidade"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Cidade</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <FormField
                                control={form.control}
                                name="aceitoSerContactado"
                                render={({ field }) => (
                                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                      />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                      <FormLabel>
                                        Aceito ser contactado para mais
                                        informações
                                      </FormLabel>
                                    </div>
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>

                          <div className="flex justify-end">
                            <Button type="button" onClick={nextStep}>
                              Próximo
                            </Button>
                          </div>
                        </div>
                      )}

                      {formStep === 1 && (
                        <div className="space-y-6">
                          <div className="space-y-2">
                            <h3 className="text-lg font-medium">
                              Informações da Ocorrência
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              Forneça detalhes sobre o ocorrido para que
                              possamos encaminhar sua denúncia adequadamente.
                            </p>
                          </div>

                          <div className="space-y-4">
                            <FormField
                              control={form.control}
                              name="tipoViolencia"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Tipo de Violência *</FormLabel>
                                  <FormControl>
                                    <Select
                                      onValueChange={field.onChange}
                                      value={field.value}
                                      defaultValue={field.value}
                                    >
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
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="local"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Local da ocorrência *</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <FormField
                                control={form.control}
                                name="data"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Data da ocorrência *</FormLabel>
                                    <FormControl>
                                      <Input {...field} type="date" />
                                    </FormControl>

                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="hora"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Hora aproximada</FormLabel>
                                    <FormControl>
                                      <Input {...field} type="time" />
                                    </FormControl>

                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>

                            <FormField
                              control={form.control}
                              name="frequencia"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Frequencia</FormLabel>
                                  <FormControl>
                                    <Select
                                      onValueChange={field.onChange}
                                      value={field.value}
                                      defaultValue={field.value}
                                    >
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
                                        <SelectItem value="diaria">
                                          Diária
                                        </SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
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

                      {formStep === 2 && (
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
                            <FormField
                              control={form.control}
                              name="descricao"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>
                                    Descrição detalhada do ocorrido *
                                  </FormLabel>
                                  <FormControl>
                                    <Textarea
                                      {...field}
                                      className="min-h-[100px]"
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="agressor"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>
                                    Informações sobre o(a) agressor(a) (se
                                    souber)
                                  </FormLabel>
                                  <FormControl>
                                    <Textarea
                                      {...field}
                                      className="min-h-[100px]"
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="testemunhas"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Testemunhas (se houver)</FormLabel>
                                  <FormControl>
                                    <Textarea
                                      {...field}
                                      className="min-h-[100px]"
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="evidencias"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Evidencias</FormLabel>
                                  <FormControl>
                                    <Textarea
                                      {...field}
                                      className="min-h-[100px]"
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="veracidade"
                            render={({ field }) => (
                              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                  <FormLabel>
                                    Confirmo que as informações fornecidas
                                    são verdadeiras
                                  </FormLabel>
                                </div>
                              </FormItem>
                            )}
                          />

                          <div className="flex justify-between">
                            <Button
                              type="button"
                              variant="outline"
                              onClick={prevStep}
                            >
                              Voltar
                            </Button>
                            <Button type="button" onClick={nextStep}>
                              {formStep && formStep == 2
                                ? "Enviar denúncia"
                                : "Proximo"}
                            </Button>
                          </div>
                        </div>
                      )}
                    </form>
                  </Form>
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
