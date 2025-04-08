import { Frown, Shield, Users } from "lucide-react";

export const outrosTiposDeVeiolencia = [
  {
    icon: <Shield className="h-5 w-5 text-purple-700" />,
    title: "Violência Digital",
    text: `Inclui compartilhamento não consensual de imagens íntimas, perseguição online
(cyberstalking), ameaças por meios digitais, criação de perfis falsos, monitoramento
de dispositivos e invasão de privacidade digital.`,
    text2: `A Lei 13.772/2018 tipificou o registro não autorizado de conteúdo com cena de nudez
ou ato sexual como crime, e a Lei 14.192/2021 criminaliza a violência política contra a
mulher.`,
  },
  {
    icon: <Frown className="h-5 w-5 text-purple-700" />,
    title: "Violência Institucional",
    text: `Ocorre dentro de instituições públicas ou privadas, quando a mulher busca
atendimento e é maltratada, negligenciada ou revitimizada pelos próprios serviços
que deveriam acolhê-la.`,
    text2: `Exemplos incluem descrédito ao relato de violência, culpabilização da vítima, demora
injustificada no atendimento, negação de serviços e procedimentos sem
consentimento informado.`,
  },
  {
    icon: <Users className="h-5 w-5 text-purple-700" />,
    title: "Violência Obstétrica",
    text: `Caracteriza-se pelo tratamento desumanizado, abuso de medicalização e
patologização dos processos naturais durante a gestação, parto, pós-parto ou
situações de abortamento.`,
    text2: `Inclui procedimentos desnecessários ou sem consentimento, negação de alívio da
dor, impedimento de acompanhante, tratamento grosseiro, humilhações e negligência
durante o atendimento.`,
  },
  {
    icon: <Users className="h-5 w-5 text-purple-700" />,
    title: "Violência Política",
    text: `Ações, condutas ou omissões com a finalidade de impedir, obstaculizar ou restringir
os direitos políticos da mulher, ou induzi-la a tomar decisões contrárias à sua vontade.`,
    text2: `Manifesta-se através de assédio, ameaças, agressões físicas ou psicológicas,
discriminação e deslegitimação da atuação política de mulheres em cargos públicos
ou candidatas.`,
  },
];
