import { Frown, Shield, Users } from "lucide-react";

export const tiposDeVeiolencia = [
  {
    icon: <Shield className="h-5 w-5 text-purple-700" />,
    title: "Violência Física",
    text: "Qualquer conduta que ofenda a integridade ou saúde corporal da mulher, como empurrões, tapas, socos e agressões com objetos.",
  },
  {
    icon: <Frown className="h-5 w-5 text-purple-700" />,
    title: "Violência Psicológica",
    text: "Condutas que causem dano emocional, diminuição da autoestima, humilhação, manipulação, isolamento ou qualquer outro meio que prejudique a saúde psicológica.",
  },
  {
    icon: <Users className="h-5 w-5 text-purple-700" />,
    title: "Violência Social",
    text: "Ações que visam isolar a mulher de sua rede de apoio, controlar amizades, monitorar celular e redes sociais, ou impedir o contato com familiares.",
  },
];
