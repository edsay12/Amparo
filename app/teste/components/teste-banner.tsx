import { Banner } from "@/components/banner";

function TesteViolenciaBanner() {
  return (
    <Banner
      title={<> Teste:Voce sofre algum tipo violencia ?</>}
      className="py-16"
      titleClassName="text-3xl md:text-5xl"
      description="Avalie a saúde do seu relacionamento com este teste e descubra se voce esta sofrendo algum tipo de violencia."
      descriptionSize="text-sm md:text-lg"
      descriptionClassName="max-w-[900px]"
      voltarParaHome={true}
    />
  );
}

export default TesteViolenciaBanner;
