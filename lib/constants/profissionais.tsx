import { Profissional } from "@/@types";

import  psicologa2  from "../../app/assets/profissionais/psicologa2.jpg";
import  psicologa1  from "../../app/assets/profissionais/psicologa3.jpg";
import  psicologo1  from "../../app/assets/profissionais/psicologo1.jpg";
import assistenteSocial1 from "../../app/assets/profissionais/assistenteSocial.png";
import advogada from "../../app/assets/profissionais/advogado1.jpg";
import medico1 from "../../app/assets/profissionais/medica1.jpg";
import advogada1 from "../../app/assets/profissionais/advogada1.jpg";


export const Profissionais: Profissional[] = [
  {
    id: 1,
    nome: "Psicóloga - Dra. Ana Silva",
    image: psicologa1,
    titulo: "Psicóloga - CRP 06/12345",
    tipo: "psicologos",
    badge: "Psicóloga",
    badgeColor: "bg-purple-100 text-purple-800 hover:bg-purple-200",
    rating: 4,
    descricao:
      "Especialista em trauma e violência doméstica. Atendimento humanizado e acolhedor para mulheres em situação de vulnerabilidade.",
    local: "Recife, PE",
    tipoDeAtendimento: ["presencial", "online"],
    telefone: "(11) 98765-4321",
    email: "ana.silva@exemplo.com",
    notaEspecial: {
      texto: "Oferece primeiras consultas gratuitas",
      bgColor: "bg-purple-50",
      corDoTexto: "text-purple-800",
    },
  },
  {
    id: 2,
    nome: "Psicólogo - Dr. Carlos Mendes",
    titulo: "Psicólogo - CRP 05/54321",
    tipo: "psicologos",
    image: psicologo1,
    badge: "Psicólogo",
    badgeColor: "bg-purple-100 text-purple-800 hover:bg-purple-200",
    rating: 5,
    descricao:
      "Especializado em terapia cognitivo-comportamental para vítimas de violência. Experiência de 15 anos no atendimento a mulheres.",
    local: "Recife, PE",
    tipoDeAtendimento: ["online"],
    telefone: "(21) 99876-5432",
    email: "carlos.mendes@exemplo.com",
    notaEspecial: {
      texto: "Disponibilidade para atendimentos de emergência",
      bgColor: "bg-green-50",
      corDoTexto: "text-green-800",
    },
  },
  {
    id: 3,
    nome: "Psicóloga - Dra. Juliana Costa",
    titulo: "Psicóloga - CRP 08/98765",
    tipo: "psicologos",
    image: psicologa2,
    badge: "Psicóloga",
    badgeColor: "bg-purple-100 text-purple-800 hover:bg-purple-200",
    rating: 4,
    descricao:
      "Especialista em trauma psicológico e EMDR. Abordagem sensível e acolhedora para mulheres que sofreram violência.",
    local: "Olinda, PE",
    tipoDeAtendimento: ["presencial", "online"],
    telefone: "(41) 98765-1234",
    email: "juliana.costa@exemplo.com",
    notaEspecial: {
      texto: "Convênio com planos de saúde",
      bgColor: "bg-blue-50",
      corDoTexto: "text-blue-800",
    },
  },
  {
    id: 5,
    nome: "Assistente Social - Mariana Oliveira",
    titulo: "Assistente Social - CRESS 9876",
    tipo: "assistentes",
    image: assistenteSocial1,
    badge: "Assistente Social",
    badgeColor: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    rating: 5,
    descricao:
      "Especialista em atendimento a mulheres em situação de violência. Auxílio na obtenção de medidas protetivas e acesso a serviços públicos.",
    local: "Paulista, PE",
    tipoDeAtendimento: ["presencial", "gratuito"],
    telefone: "(71) 98888-7777",
    email: "mariana.oliveira@exemplo.com",
    notaEspecial: {
      texto: "Atendimento gratuito no CREAS",
      bgColor: "bg-purple-50",
      corDoTexto: "text-purple-800",
    },
  },
  {
    id: 7,
    nome: "Advogada - Dra. Patrícia Santos",
    titulo: "Advogada - OAB 123456",
    tipo: "advogados",
    badge: "Advogada",
    image: advogada,
    badgeColor: "bg-green-100 text-green-800 hover:bg-green-200",
    rating: 5,
    descricao:
      "Especialista em Direito da Mulher e Lei Maria da Penha. Auxílio na obtenção de medidas protetivas e processos de família.",
    local: "Cabo de Santo Agostinho, PE",
    tipoDeAtendimento: ["presencial", "online"],
    telefone: "(61) 99999-8888",
    email: "patricia.santos@exemplo.com",
    notaEspecial: {
      texto: "Primeira consulta gratuita",
      bgColor: "bg-purple-50",
      corDoTexto: "text-purple-800",
    },
  },
  {
    id: 9,
    nome: "Psiquiatra - Dra. Fernanda Lima",
    titulo: "Psiquiatra - CRM 54321",
    tipo: "medicos",
    badge: "Médica",
    image: medico1,
    badgeColor: "bg-red-100 text-red-800 hover:bg-red-200",
    rating: 4,
    descricao:
      "Especialista em trauma e transtornos relacionados à violência. Abordagem sensível e humanizada.",
    local: "Recife, PE",
    tipoDeAtendimento: ["presencial", "online"],
    telefone: "(51) 98765-4321",
    email: "fernanda.lima@exemplo.com",
    notaEspecial: {
      texto: "Atende por convênios médicos",
      bgColor: "bg-blue-50",
      corDoTexto: "text-blue-800",
    },
  },
  {
    id: 11,
    nome: "Psicólogo - Dr. Roberto Almeida",
    titulo: "Psicólogo - CRP 07/7654",
    tipo: "psicologos",
    badge: "Psicólogo",
    image: psicologo1,
    badgeColor: "bg-purple-100 text-purple-800 hover:bg-purple-200",
    rating: 4,
    descricao:
      "Especialista em terapia para vítimas de violência doméstica. Atendimento humanizado e focado na recuperação da autoestima.",
    local: "Olinda, PE",
    tipoDeAtendimento: ["presencial", "online"],
    telefone: "(48) 99887-6655",
    email: "roberto.almeida@exemplo.com",
    notaEspecial: {
      texto: "Atendimento em horários flexíveis",
      bgColor: "bg-purple-50",
      corDoTexto: "text-purple-800",
    },
  },
  {
    id: 12,
    nome: "Advogada - Dra. Camila Rocha",
    titulo: "Advogada - OAB 87654",
    tipo: "advogados",
    badge: "Advogada",
    image: advogada1,
    badgeColor: "bg-green-100 text-green-800 hover:bg-green-200",
    rating: 5,
    descricao:
      "Especializada em casos de violência contra a mulher e direito de família. Atendimento personalizado e acolhedor.",
    local: "Recife, PE",
    tipoDeAtendimento: ["presencial", "online"],
    telefone: "(31) 98765-4321",
    email: "camila.rocha@exemplo.com",
    notaEspecial: {
      texto: "Parcelamento de honorários",
      bgColor: "bg-blue-50",
      corDoTexto: "text-blue-800",
    },
  },
];
