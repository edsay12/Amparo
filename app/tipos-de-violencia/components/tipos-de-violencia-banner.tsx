import { Banner } from "@/components/banner";

function TiposDeViolenciaBanner() {
  return (
    <Banner
      title={<> Tipos de Violência Contra a Mulher</>}
      className="py-16"
      titleClassName="text-3xl md:text-5xl"
      description="Conheça as diferentes formas de violência para poder identificá-las e combatê-las."
      descriptionSize="text-sm md:text-lg"
      descriptionClassName="max-w-[900px]"
      voltarParaHome={true}
    />
  )
}

export default TiposDeViolenciaBanner;
