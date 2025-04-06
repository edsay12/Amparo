import maria from "../../app/assets/testimonial/maria.jpg";
import ana from "../../app/assets/testimonial/ana.png";
import juliana from "../../app/assets/testimonial/juliana.png";
import rosangela from "../../app/assets/testimonial/rosangela.png";
import carla from "../../app/assets/testimonial/carla.png";
import { StaticImageData } from "next/image";


export type Testimonial = {
    name: string;
    location: string;
    image: StaticImageData; 
    quote: string;
    description: string;
  };

export const testimonials = [
    {
      name: "Maria, 34 anos",
      location: "Recife",
      image: maria,
      quote:
        "Depois de 8 anos em um relacionamento abusivo, encontrei forças para denunciar e buscar ajuda. No começo foi assustador, eu não sabia por onde começar, mas a rede de apoio me acolheu com carinho. Hoje tenho minha independência financeira, voltei a estudar e estou reconstruindo minha autoestima. Nunca imaginei que poderia ser tão forte. A ajuda que recebi foi fundamental para essa nova fase da minha vida.",
      description:
        "Maria recebeu apoio psicológico e jurídico de um Centro de Referência e hoje participa de grupos de apoio para outras mulheres.",
    },
    {
      name: "Ana, 28 anos",
      location: "Paulista",
      image: ana,
      quote:
        "Durante muito tempo achei que o que eu vivia era normal. As agressões verbais, o controle sobre tudo que eu fazia... achava que era amor. Só quando conheci outras histórias em uma palestra no CRAS percebi que eu também era vítima. A orientação que recebi foi essencial. Pela primeira vez, alguém me ouviu sem julgamento, e isso fez toda a diferença. Hoje, estou recomeçando com mais segurança e esperança.",
      description:
        "Ana foi acolhida em uma Casa Abrigo e hoje trabalha com artesanato, vendendo suas peças em feiras locais.",
    },
    {
      name: "Juliana, 41 anos",
      location: "Olinda",
      image: juliana,
      quote:
        "Achei que denunciar não ia adiantar, que tudo ia piorar. Mas fui surpreendida pela rede de proteção da minha cidade, que me acolheu com dignidade e empatia. Tive apoio psicológico, orientação jurídica e, o mais importante, escuta ativa. Hoje, olho pra trás e vejo o quanto evoluí como mulher e mãe. Minha filha cresceu vendo minha coragem, e isso me dá forças para continuar lutando todos os dias.",
      description:
        "Juliana fez acompanhamento psicológico e recebeu orientação sobre seus direitos. Hoje atua como voluntária em uma ONG.",
    },
    {
      name: "Rosângela, 50 anos",
      location: "Jaboatão dos Guararapes",
      image: rosangela,
      quote:
        "A violência não era só física, era no olhar, nas palavras, nas humilhações diárias. Eu não percebia, achava que merecia. Até que meu filho me disse: ‘Mãe, isso não é amor’. Foi aí que busquei ajuda, com medo, mas também com esperança. Encontrei um coletivo de mulheres incríveis que me ajudou a me reerguer. Hoje, ajudo outras mulheres a identificarem sinais de abuso e a acreditarem que a liberdade é possível.",
      description:
        "Rosângela foi acolhida por um coletivo de mulheres da sua comunidade e hoje dá palestras sobre empoderamento feminino.",
    },
    {
      name: "Carla, 36 anos",
      location: "Abreu e Lima",
      image: carla,
      quote:
        "Recomeçar foi difícil, mas necessário. Durante anos, fui silenciada, desacreditada, e tive medo de pedir ajuda. Achei que não ia conseguir sozinha, mas a verdade é que eu não estava sozinha. Conheci mulheres incríveis, assistentes sociais e psicólogas que me ajudaram a sair daquele ciclo. Hoje, sou prova viva de que é possível viver sem medo, com dignidade e com amor próprio.",
      description:
        "Carla recebeu ajuda jurídica gratuita e conseguiu a guarda dos filhos. Hoje, mora com eles em segurança.",
    },
  ];