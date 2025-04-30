import { Banner } from "@/components/banner";

function TesteViolenciaBanner() {
  return (
    <Banner
      title={<> Teste: Você sofre algum tipo violência?</>}
      className="py-16"
      titleClassName="text-3xl md:text-5xl"
      description="Responda ao teste e entenda seu perfil de risco frente a possíveis situações de violência."
      descriptionSize="text-sm md:text-lg"
      descriptionClassName="max-w-[900px]"
      voltarParaHome={true}
    />
  );
}

export default TesteViolenciaBanner;
