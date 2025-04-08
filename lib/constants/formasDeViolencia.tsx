import {
  TriangleAlert,
  Brain,
  HeartOff,
  Volume2,
  DollarSign,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

interface FormaDeViolencia {
  titulo: string;
  descricao: string;
  comoSeManifesta: string[];
  sinaisDeAlerta: string[];
  medidasDeProtecao?: string;
  icone?: LucideIcon;
  textoBotao?: string;
}

export const formasDeViolencia: FormaDeViolencia[] = [
  {
    titulo: "Violência Física",
    descricao:
      "Qualquer conduta que ofenda a integridade ou saúde corporal da mulher.",
    comoSeManifesta: [
      "Tapas, socos, empurrões",
      "Chutes, beliscões, mordidas",
      "Puxões de cabelo",
      "Queimaduras",
      "Cortes ou perfurações",
      "Arremesso de objetos contra o corpo",
      "Lesões com armas ou instrumentos",
      "Tentativas de asfixia ou estrangulamento",
      "Impedimento de sair de casa (cárcere privado)",
    ],
    sinaisDeAlerta: [
      "Marcas inexplicáveis no corpo (hematomas, cortes, queimaduras)",
      "Lesões simétricas (em ambos os braços, por exemplo)",
      "Marcas de dedos ou objetos",
      "Lesões em diferentes estágios de cicatrização",
      "Fraturas frequentes",
      "Uso de roupas inadequadas para a estação para esconder marcas",
      "Explicações inconsistentes para os ferimentos",
    ],
    medidasDeProtecao:
      "Em caso de violência física, a mulher pode solicitar medidas protetivas de urgência, como o afastamento do agressor do lar e a proibição de aproximação e contato. É importanteprocurar atendimento médico para documentar as lesões e fazer um Boletim de Ocorrência.",
    icone: TriangleAlert,
    textoBotao: "Como denunciar",
  },
  {
    titulo: "Violência Psicológica",
    descricao:
      "Qualquer conduta que cause dano emocional e diminuição da autoestima, que prejudique o desenvolvimento da mulher ou vise degradar ou controlar suas ações, comportamentos,crenças e decisões.",
    comoSeManifesta: [
      "Ameaças (de morte, de agressão, de tirar os filhos)",
      "Humilhação e ridicularização",
      "Insultos e xingamentos constantes",
      "Desvalorização da aparência, opiniões e ações",
      "Manipulação e chantagem emocional",
      "Isolamento de amigos e familiares",
      "Perseguição constante (stalking)",
      "Limitação do direito de ir e vir",
      "Distorção e omissão de fatos para confundir (gaslighting)",
    ],
    sinaisDeAlerta: [
      "Mudanças significativas de comportamento",
      "Ansiedade, depressão, insônia",
      "Baixa autoestima e autoconfiança",
      "Sentimentos de culpa e vergonha constantes",
      "Isolamento social progressivo",
      "Medo de expressar opiniõess",
      "Necessidade constante de aprovação",
      "Dificuldade para tomar decisões simples",
    ],
    medidasDeProtecao:
      "A violência psicológica também é crime e pode ser denunciada. É importante buscar apoio psicológico e, se possível, documentar as agressões verbais (por mensagens, e-mails,gravações). Centros de Referência da Mulher oferecem atendimento especializado.",
    icone: Brain,
    textoBotao: "Buscar apoio psicológico",
  },
  {
    titulo: "Violência Sexual",
    descricao:
      "Qualquer conduta que constranja a mulher a presenciar, manter ou participar de relação sexual não desejada, mediante intimidação, ameaça, coação ou uso da força.",
    comoSeManifesta: [
      "Estupro (inclusive marital - dentro do casamento)",
      "Obrigar a práticas sexuais indesejadas",
      "Impedir o uso de métodos contraceptivos",
      "Forçar a gravidez, aborto ou esterilização",
      "Exploração sexual",
      "Exposição a material pornográfico sem consentimento",
      "Chantagem para obter favores sexuais",
      "Toques indesejados",
      "Assédio sexual",
    ],
    sinaisDeAlerta: [
      "Traumas físicos nas áreas genitais, seios ou boca",
      "Infecções urinárias ou DSTs recorrentes",
      "Medo ou aversão a contato físico",
      "Ansiedade extrema ao falar sobre sexualidade",
      "Comportamento sexual inapropriado",
      "Distúrbios alimentares ou do sono",
    ],
    medidasDeProtecao:
      "Em caso de violência sexual, é importante buscar atendimento médico imediato (até 72h) para prevenção de gravidez e DSTs. Não se deve tomar banho antes do exame médico.O atendimento é realizado em hospitais de referência e a denúncia pode ser feita em Delegacias da Mulher.",
    icone: HeartOff,
    textoBotao: "Buscar ajuda",
  },
  {
    titulo: "Violência Patrimonial",
    descricao:
      "Condutas que visam controlar ou destruir bens, recursos ou documentos da mulher.",
    comoSeManifesta: [
      "Destruição de documentos pessoais",
      "Controle do dinheiro ou cartão",
      "Impedir que a mulher trabalhe ou estude",
      "Não pagamento de pensão alimentícia",
      "Estelionato ou fraudes financeiras",
      "Ocultação de patrimônio",
    ],
    sinaisDeAlerta: [
      "Falta de acesso ao próprio dinheiro",
      "Desorganização financeira forçada",
      "Impossibilidade de guardar documentos",
      "Necessidade de prestar contas de todos os gastos",
      "Não ter acesso a informações financeiras da família",
      "Ter que pedir dinheiro para necessidades básicas",
    ],
    medidasDeProtecao:
      "Denuncie na delegacia da mulher. A justiça pode exigir devolução de bens e ressarcimento de prejuízos.",
    icone: DollarSign,
    textoBotao: "Saiba seus direitos",
  },

  {
    titulo: "Violência Moral",
    descricao:
      "Condutas que ferem a reputação da mulher por calúnia, difamação ou injúria.",
    comoSeManifesta: [
      "Acusar falsamente de traição",
      "Espalhar boatos",
      "Acusações falsas publicamente",
      "Xingamentos ofensivos",
      "Fazer críticas mentirosas",
      "Publicar ou compartilhar imagens ou informações sem autorização",
    ],
    sinaisDeAlerta: [
      "Vergonha ao sair de casa",
      "Receio de se expressar em público",
      "Medo da exposição",
      "Comentários de terceiros sobre informações privadas",
      "Isolamento social por vergonha",
      "Perda de amizades e contatos profissionais",
    ],
    medidasDeProtecao:
      "A mulher pode processar o agressor por danos morais e solicitar medidas protetivas.",
    icone: Volume2,
    textoBotao: "Proteger reputação",
  },
];
