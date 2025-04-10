import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  PhoneCall,
  Info,
  Clock,
  Users,
  Globe,
  MessageSquare,
  FileText,
  HelpCircle,
  BarChart,
  CheckCircle2,
} from "lucide-react";
import Aviso from "@/components/aviso";
import Section from "@/components/Section";

function SeccaoDeInformacao() {
  return (
    <Section className="md:py-10">
      <div className="max-w-[900px] mx-auto">
        <Tabs defaultValue="sobre" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="sobre">Sobre o Serviço</TabsTrigger>
            <TabsTrigger value="como-funciona">Como Funciona</TabsTrigger>
            <TabsTrigger value="estatisticas">Estatísticas</TabsTrigger>
            <TabsTrigger value="faq">Perguntas Frequentes</TabsTrigger>
          </TabsList>

          {/* Sobre o Serviço */}
          <TabsContent value="sobre" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>O que é o Ligue 180</CardTitle>
                <CardDescription>
                  Conheça a história e a importância deste serviço no
                  enfrentamento à violência contra a mulher
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <p>
                    A Central de Atendimento à Mulher – Ligue 180 é um serviço
                    público gratuito e confidencial criado em 2005 pela
                    Secretaria de Políticas para as Mulheres da Presidência da
                    República (SPM-PR). Desde 2014, o serviço é caracterizado
                    como disque-denúncia, com capacidade de envio de denúncias
                    para a Segurança Pública com cópia para o Ministério Público
                    de cada estado.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                    <Card className="bg-purple-50">
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-purple-100 p-3 rounded-full mb-4">
                            <Clock className="h-6 w-6 text-purple-700" />
                          </div>
                          <h3 className="font-medium mb-2">Disponibilidade</h3>
                          <p className="text-sm text-muted-foreground">
                            Funciona 24 horas por dia, todos os dias da semana,
                            inclusive feriados
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-purple-50">
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-purple-100 p-3 rounded-full mb-4">
                            <Globe className="h-6 w-6 text-purple-700" />
                          </div>
                          <h3 className="font-medium mb-2">Abrangência</h3>
                          <p className="text-sm text-muted-foreground">
                            Atende todo o território nacional e também
                            brasileiras no exterior
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-purple-50">
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-purple-100 p-3 rounded-full mb-4">
                            <Users className="h-6 w-6 text-purple-700" />
                          </div>
                          <h3 className="font-medium mb-2">Acessibilidade</h3>
                          <p className="text-sm text-muted-foreground">
                            Atendimento em português, espanhol, inglês e em
                            Libras (por videochamada)
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <h3 className="text-xl font-medium">
                    Objetivos do Ligue 180
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Receber denúncias de violência contra a mulher</li>
                    <li>Orientar mulheres em situação de violência</li>
                    <li>Encaminhar as denúncias aos órgãos competentes</li>
                    <li>
                      Informar sobre os direitos da mulher e a legislação
                      vigente
                    </li>
                    <li>
                      Prestar informações sobre os serviços da rede de
                      atendimento à mulher
                    </li>
                    <li>
                      Monitorar o funcionamento dos serviços da rede de
                      atendimento
                    </li>
                  </ul>

                  <h3 className="text-xl font-medium">Marco Legal</h3>
                  <p className="text-muted-foreground">
                    O Ligue 180 está previsto na Lei Maria da Penha (Lei nº
                    11.340/2006) como um dos instrumentos de implementação da
                    Política Nacional de Enfrentamento à Violência contra as
                    Mulheres. Em 2018, a Lei 13.772 ampliou suas atribuições,
                    incluindo o recebimento de denúncias de violações contra
                    mulheres com deficiência.
                  </p>

                  <Aviso
                    icon={<Info className="h-4 w-4 text-purple-700" />}
                    title="Importante"
                    description="O Ligue 180 não substitui os serviços de emergência. Em
                      casos de violência em andamento ou risco imediato à vida,
                      ligue para o 190 (Polícia Militar)."
                  ></Aviso>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Como Funciona */}
          <TabsContent value="como-funciona" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Como Funciona o Atendimento</CardTitle>
                <CardDescription>
                  Entenda o passo a passo do atendimento e os serviços
                  oferecidos pelo Ligue 180
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-8">
                  <h3 className="text-xl font-medium">Fluxo de Atendimento</h3>

                  <div className="relative">
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-200"></div>

                    <div className="flex items-start gap-4 mb-8 relative">
                      <div className="rounded-full bg-purple-700 text-white w-16 h-16 flex items-center justify-center flex-shrink-0 z-10">
                        <span className="text-xl font-bold">1</span>
                      </div>
                      <div className="pt-3">
                        <h4 className="text-lg font-medium mb-2">
                          Recepção da Chamada
                        </h4>
                        <p className="text-muted-foreground">
                          Ao ligar para o 180, a pessoa é atendida por uma
                          telefonista que fará o primeiro acolhimento. A ligação
                          é gratuita e pode ser feita de qualquer telefone fixo,
                          público ou celular.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 mb-8 relative">
                      <div className="rounded-full bg-purple-700 text-white w-16 h-16 flex items-center justify-center flex-shrink-0 z-10">
                        <span className="text-xl font-bold">2</span>
                      </div>
                      <div className="pt-3">
                        <h4 className="text-lg font-medium mb-2">Triagem</h4>
                        <p className="text-muted-foreground">
                          A telefonista identifica o tipo de demanda: denúncia,
                          informação, orientação ou reclamação. Casos de
                          emergência são imediatamente encaminhados para o 190.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 mb-8 relative">
                      <div className="rounded-full bg-purple-700 text-white w-16 h-16 flex items-center justify-center flex-shrink-0 z-10">
                        <span className="text-xl font-bold">3</span>
                      </div>
                      <div className="pt-3">
                        <h4 className="text-lg font-medium mb-2">
                          Atendimento Especializado
                        </h4>
                        <p className="text-muted-foreground">
                          A chamada é transferida para uma atendente
                          especializada que coletará informações mais
                          detalhadas. O atendimento é realizado por
                          profissionais capacitadas em questões de gênero e
                          violência contra a mulher.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 mb-8 relative">
                      <div className="rounded-full bg-purple-700 text-white w-16 h-16 flex items-center justify-center flex-shrink-0 z-10">
                        <span className="text-xl font-bold">4</span>
                      </div>
                      <div className="pt-3">
                        <h4 className="text-lg font-medium mb-2">
                          Registro e Encaminhamento
                        </h4>
                        <p className="text-muted-foreground">
                          As informações são registradas em um sistema
                          informatizado. No caso de denúncias, estas são
                          encaminhadas aos órgãos competentes (Delegacias
                          Especializadas, Ministério Público, Defensoria
                          Pública, etc.) em até 24 horas.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 relative">
                      <div className="rounded-full bg-purple-700 text-white w-16 h-16 flex items-center justify-center flex-shrink-0 z-10">
                        <span className="text-xl font-bold">5</span>
                      </div>
                      <div className="pt-3">
                        <h4 className="text-lg font-medium mb-2">
                          Acompanhamento
                        </h4>
                        <p className="text-muted-foreground">
                          Cada denúncia recebe um número de protocolo que
                          permite o acompanhamento do caso. O Ligue 180 também
                          realiza o monitoramento dos encaminhamentos junto aos
                          órgãos responsáveis.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-medium mt-12">
                    Serviços Oferecidos
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <MessageSquare className="h-5 w-5 text-purple-700" />
                          Orientação
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                          <li>Informações sobre direitos da mulher</li>
                          <li>Orientação sobre a Lei Maria da Penha</li>
                          <li>Esclarecimentos sobre tipos de violência</li>
                          <li>Orientação sobre medidas protetivas</li>
                          <li>Apoio emocional inicial</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <FileText className="h-5 w-5 text-purple-700" />
                          Denúncia
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                          <li>Registro de denúncias de violência</li>
                          <li>Encaminhamento para órgãos competentes</li>
                          <li>Possibilidade de denúncia anônima</li>
                          <li>Denúncias de tráfico de mulheres</li>
                          <li>Denúncias de cárcere privado</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <Info className="h-5 w-5 text-purple-700" />
                          Informação
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                          <li>
                            Localização de serviços da rede de atendimento
                          </li>
                          <li>Informações sobre campanhas e programas</li>
                          <li>Dados sobre legislação específica</li>
                          <li>Informações sobre direitos trabalhistas</li>
                          <li>Esclarecimentos sobre políticas públicas</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <HelpCircle className="h-5 w-5 text-purple-700" />
                          Reclamação
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                          <li>
                            Registro de reclamações sobre atendimento na rede
                          </li>
                          <li>Denúncias de violência institucional</li>
                          <li>Sugestões para melhoria dos serviços</li>
                          <li>Monitoramento da qualidade do atendimento</li>
                          <li>Feedback sobre políticas públicas</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-100 mt-6">
                    <h3 className="text-lg font-medium mb-4">
                      Canais de Acesso
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <PhoneCall className="h-5 w-5 text-purple-700" />
                        </div>
                        <div>
                          <h4 className="font-medium">Telefone: 180</h4>
                          <p className="text-sm text-muted-foreground">
                            Ligação gratuita de qualquer telefone fixo, público
                            ou celular
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <Globe className="h-5 w-5 text-purple-700" />
                        </div>
                        <div>
                          <h4 className="font-medium">
                            Aplicativo Direitos Humanos Brasil
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Disponível para Android e iOS, permite fazer
                            denúncias e acessar informações
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <MessageSquare className="h-5 w-5 text-purple-700" />
                        </div>
                        <div>
                          <h4 className="font-medium">
                            WhatsApp: (61) 99656-5885
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Canal alternativo para denúncias e orientações
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Estatísticas */}
          <TabsContent value="estatisticas" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Estatísticas e Impacto</CardTitle>
                <CardDescription>
                  Dados sobre o atendimento e a importância do Ligue 180 no
                  combate à violência contra a mulher
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <p>
                    O Ligue 180 é uma importante ferramenta de coleta de dados
                    sobre a violência contra a mulher no Brasil. As estatísticas
                    geradas a partir dos atendimentos ajudam a compreender o
                    fenômeno e a orientar políticas públicas mais eficazes.
                  </p>

                  <h3 className="text-xl font-medium">
                    Números de Atendimento
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                    <Card className="bg-gradient-to-br from-purple-50 to-white">
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-purple-100 p-3 rounded-full mb-4">
                            <BarChart className="h-6 w-6 text-purple-700" />
                          </div>
                          <h3 className="text-3xl font-bold text-purple-700 mb-2">
                            + 2 milhões
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Atendimentos realizados anualmente pelo Ligue 180
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-purple-50 to-white">
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-purple-100 p-3 rounded-full mb-4">
                            <BarChart className="h-6 w-6 text-purple-700" />
                          </div>
                          <h3 className="text-3xl font-bold text-purple-700 mb-2">
                            + 300 mil
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Denúncias de violência registradas por ano
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-purple-50 to-white">
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-purple-100 p-3 rounded-full mb-4">
                            <BarChart className="h-6 w-6 text-purple-700" />
                          </div>
                          <h3 className="text-3xl font-bold text-purple-700 mb-2">
                            + 5 mil
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Atendimentos diários em média
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <h3 className="text-xl font-medium">Perfil das Denúncias</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">
                          Tipos de Violência Mais Denunciados
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span>Violência Psicológica</span>
                              <span className="font-medium">38%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-purple-700 h-2 rounded-full"
                                style={{ width: "38%" }}
                              ></div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span>Violência Física</span>
                              <span className="font-medium">33%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-purple-700 h-2 rounded-full"
                                style={{ width: "33%" }}
                              ></div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span>Violência Moral</span>
                              <span className="font-medium">15%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-purple-700 h-2 rounded-full"
                                style={{ width: "15%" }}
                              ></div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span>Violência Patrimonial</span>
                              <span className="font-medium">8%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-purple-700 h-2 rounded-full"
                                style={{ width: "8%" }}
                              ></div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span>Violência Sexual</span>
                              <span className="font-medium">6%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-purple-700 h-2 rounded-full"
                                style={{ width: "6%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">
                          Relação Vítima-Agressor
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span>Companheiro/Ex-companheiro</span>
                              <span className="font-medium">72%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-purple-700 h-2 rounded-full"
                                style={{ width: "72%" }}
                              ></div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span>Familiares</span>
                              <span className="font-medium">15%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-purple-700 h-2 rounded-full"
                                style={{ width: "15%" }}
                              ></div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span>Conhecidos</span>
                              <span className="font-medium">8%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-purple-700 h-2 rounded-full"
                                style={{ width: "8%" }}
                              ></div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span>Desconhecidos</span>
                              <span className="font-medium">5%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-purple-700 h-2 rounded-full"
                                style={{ width: "5%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <h3 className="text-xl font-medium">Impacto do Serviço</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="font-medium mb-4 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-700" />
                        Aumento das Denúncias
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Desde sua criação, o Ligue 180 contribuiu para um
                        aumento significativo no número de denúncias de
                        violência contra a mulher, indicando maior
                        conscientização e confiança no sistema de proteção.
                      </p>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="font-medium mb-4 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-700" />
                        Mapeamento da Violência
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Os dados coletados pelo serviço permitem mapear a
                        incidência da violência contra a mulher no país,
                        identificando regiões prioritárias para ações de
                        prevenção e combate.
                      </p>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="font-medium mb-4 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-700" />
                        Aprimoramento de Políticas Públicas
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        As estatísticas geradas pelo Ligue 180 são utilizadas
                        para o desenvolvimento e aprimoramento de políticas
                        públicas de enfrentamento à violência contra a mulher.
                      </p>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="font-medium mb-4 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-700" />
                        Acesso à Justiça
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        O serviço facilita o acesso das mulheres à justiça e aos
                        serviços de proteção, especialmente para aquelas que
                        vivem em regiões remotas ou com poucos recursos.
                      </p>
                    </div>
                  </div>

                  <Aviso
                    icon={<Info className="h-4 w-4 text-purple-700" />}
                    title="Nota sobre os dados"
                    description="Os dados apresentados são baseados em relatórios oficiais
                      e podem variar anualmente. Para estatísticas mais
                      recentes, consulte o site oficial do Ministério da Mulher,
                      da Família e dos Direitos Humanos."
                  ></Aviso>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Perguntas Frequentes */}
          <TabsContent value="faq" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Perguntas Frequentes</CardTitle>
                <CardDescription>
                  Respostas para as dúvidas mais comuns sobre o Ligue 180
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      É preciso se identificar para fazer uma denúncia?
                    </AccordionTrigger>
                    <AccordionContent>
                      Não, o Ligue 180 aceita denúncias anônimas. No entanto,
                      quanto mais informações forem fornecidas, mais eficaz será
                      o encaminhamento e a apuração da denúncia. Todas as
                      informações são tratadas com sigilo e confidencialidade.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      Quem pode ligar para o 180?
                    </AccordionTrigger>
                    <AccordionContent>
                      Qualquer pessoa pode ligar para o 180, seja a própria
                      vítima, familiares, vizinhos, amigos ou testemunhas de
                      situações de violência contra a mulher. O serviço também
                      atende homens que buscam informações sobre a Lei Maria da
                      Penha ou outros assuntos relacionados.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      O que acontece após a denúncia?
                    </AccordionTrigger>
                    <AccordionContent>
                      Após o registro da denúncia, ela é encaminhada para os
                      órgãos competentes, como Delegacias Especializadas de
                      Atendimento à Mulher, Ministério Público, Defensoria
                      Pública, entre outros. O prazo para encaminhamento é de
                      até 24 horas. Cada denúncia recebe um número de protocolo
                      que permite o acompanhamento do caso.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>
                      O Ligue 180 atende emergências?
                    </AccordionTrigger>
                    <AccordionContent>
                      O Ligue 180 não é um serviço de emergência. Em casos de
                      violência em andamento ou risco imediato à vida, deve-se
                      ligar para o 190 (Polícia Militar). No entanto, se uma
                      situação de emergência for identificada durante o
                      atendimento do 180, a própria central pode acionar a
                      polícia.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>
                      Posso denunciar outros tipos de violação de direitos?
                    </AccordionTrigger>
                    <AccordionContent>
                      O Ligue 180 é especializado em violência contra a mulher.
                      Para denúncias de violações de direitos humanos em geral,
                      o canal adequado é o Disque 100. No entanto, caso uma
                      denúncia de outro tipo seja recebida pelo 180, ela será
                      devidamente encaminhada para o órgão competente.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6">
                    <AccordionTrigger>
                      Como denunciar violência contra mulheres brasileiras no
                      exterior?
                    </AccordionTrigger>
                    <AccordionContent>
                      O Ligue 180 possui uma versão internacional que atende
                      brasileiras em situação de violência em mais de 16 países.
                      Para acessar o serviço do exterior, é necessário verificar
                      o número específico para cada país, disponível no site do
                      Ministério da Mulher, da Família e dos Direitos Humanos.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7">
                    <AccordionTrigger>
                      O agressor saberá que fui eu quem fez a denúncia?
                    </AccordionTrigger>
                    <AccordionContent>
                      O Ligue 180 garante o sigilo da identidade da denunciante.
                      No entanto, em alguns casos, durante o processo de
                      investigação, pode ser necessário que a vítima preste
                      depoimento ou forneça mais informações. Nesses casos, a
                      mulher será orientada sobre seus direitos e as medidas de
                      proteção disponíveis.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8">
                    <AccordionTrigger>
                      Posso obter medidas protetivas através do Ligue 180?
                    </AccordionTrigger>
                    <AccordionContent>
                      O Ligue 180 não concede medidas protetivas diretamente,
                      mas pode orientar sobre como solicitá-las. As medidas
                      protetivas de urgência são concedidas por um juiz e podem
                      ser solicitadas na Delegacia de Polícia, no Ministério
                      Público ou na Defensoria Pública.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-9">
                    <AccordionTrigger>
                      O Ligue 180 atende pessoas com deficiência?
                    </AccordionTrigger>
                    <AccordionContent>
                      Sim, o Ligue 180 oferece atendimento em Libras (Língua
                      Brasileira de Sinais) por meio de videochamada. Além
                      disso, o aplicativo Direitos Humanos Brasil possui
                      recursos de acessibilidade para pessoas com diferentes
                      tipos de deficiência.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-10">
                    <AccordionTrigger>
                      Quais informações devo ter em mãos para fazer uma
                      denúncia?
                    </AccordionTrigger>
                    <AccordionContent>
                      Embora não seja obrigatório ter todas as informações,
                      quanto mais detalhes forem fornecidos, mais eficaz será o
                      encaminhamento da denúncia. É útil informar: nome da
                      vítima, endereço ou referência do local da ocorrência,
                      tipo de violência, frequência, nome do agressor (se
                      souber), relação com a vítima e se há crianças ou
                      adolescentes envolvidos.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-6">
            Ligue 180 - Sua ligação pode salvar vidas
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-purple-700 hover:bg-purple-800 gap-2"
            >
              <PhoneCall className="h-5 w-5" /> Ligue 180
            </Button>
            <Link href="/denunciar-violencia">
              <Button
                size="lg"
                variant="outline"
                className="border-purple-300 text-purple-700 hover:bg-purple-100"
              >
                Fazer Denúncia Online
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default SeccaoDeInformacao;
