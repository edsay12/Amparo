import { AlertTriangle, Heart, HelpCircle } from "lucide-react";

export const resultados = [
    {
      min: 0,
      max: 20,
      title: "Relacionamento com Sinais de Abuso",
      description:
        "Seu relacionamento apresenta vários sinais preocupantes que podem indicar um padrão de abuso. É importante buscar ajuda e considerar sua segurança.",
      icon: <AlertTriangle className="h-12 w-12 text-red-600" />,
      color: "bg-red-100 border-red-300 text-red-800",
      recommendations: [
        "Sua segurança é prioridade. Se estiver em perigo imediato, ligue para o 190.",
        "Busque apoio profissional com psicólogos especializados em violência doméstica.",
        "Entre em contato com o Ligue 180 para orientações específicas.",
        "Considere criar um plano de segurança caso precise sair rapidamente da relação.",
        "Não enfrente esta situação sozinho(a) - conte com pessoas de confiança.",
      ],
    },
    {
      min: 21,
      max: 35,
      title: "Relacionamento com Sinais de Alerta",
      description:
        "Seu relacionamento apresenta alguns comportamentos preocupantes que podem evoluir para situações mais graves. É importante estar atento(a) e buscar ajuda.",
      icon: <AlertTriangle className="h-12 w-12 text-yellow-600" />,
      color: "bg-yellow-100 border-yellow-300 text-yellow-800",
      recommendations: [
        "Converse com amigos próximos ou familiares sobre o que você está vivenciando.",
        "Considere buscar terapia individual para fortalecer sua autoestima e clareza.",
        "Estabeleça limites claros sobre comportamentos inaceitáveis.",
        "Esteja atento(a) se os comportamentos problemáticos aumentam em frequência ou intensidade.",
        "Informe-se sobre recursos disponíveis caso a situação piore.",
      ],
    },
    {
      min: 36,
      max: 45,
      title: "Relacionamento com Aspectos a Melhorar",
      description:
        "Seu relacionamento tem uma base positiva, mas existem áreas que precisam de atenção e melhorias para se tornar mais saudável e equilibrado.",
      icon: <HelpCircle className="h-12 w-12 text-blue-600" />,
      color: "bg-blue-100 border-blue-300 text-blue-800",
      recommendations: [
        "Invista em melhorar a comunicação sobre sentimentos e necessidades.",
        "Considere terapia de casal para trabalhar os pontos de conflito.",
        "Estabeleça tempo de qualidade juntos, sem distrações.",
        "Pratique a escuta ativa e valide os sentimentos um do outro.",
        "Trabalhem juntos para estabelecer limites saudáveis e respeitá-los.",
      ],
    },
    {
      min: 46,
      max: 60,
      title: "Relacionamento Saudável",
      description:
        "Parabéns! Seu relacionamento apresenta características saudáveis como respeito mútuo, comunicação aberta e apoio. Continue cultivando esses aspectos positivos.",
      icon: <Heart className="h-12 w-12 text-green-600" />,
      color: "bg-green-100 border-green-300 text-green-800",
      recommendations: [
        "Continue investindo na comunicação aberta e honesta.",
        "Celebre as conquistas individuais e como casal.",
        "Mantenham o respeito pela individualidade e espaço um do outro.",
        "Revisitem regularmente as expectativas e objetivos do relacionamento.",
        "Compartilhem o que funciona bem na relação de vocês com amigos que possam estar enfrentando dificuldades.",
      ],
    },
  ]
  