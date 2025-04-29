import { Banner } from "@/components/banner";

export function AjudaProfissionalBanner() {
  return (
    <Banner
      title={<> Encontre Ajuda Profissional</>}
      className="py-16"
      titleClassName="text-3xl md:text-5xl"
      description="Buscar ajuda profissional é um passo importante para lidar com situações de violência. Encontre psicólogos e outros profissionais especializados que podem te ajudar."
      descriptionSize="text-sm md:text-lg"
      descriptionClassName="max-w-[900px]"
      voltarParaHome={true}
    />
  );
}
