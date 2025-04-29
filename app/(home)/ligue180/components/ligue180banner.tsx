import { Banner } from "@/components/banner";

function Ligue180Banner() {
  return (
    <Banner
      title={<> Denunciar Violência</>}
      className="py-16"
      titleClassName="text-3xl md:text-5xl"
      description="Sua denúncia é importante para combater a violência contra a mulher e pode salvar
vidas."
      descriptionSize="text-sm md:text-lg"
      descriptionClassName="max-w-[900px]"
      voltarParaHome={true}
    />
  );
}

export default Ligue180Banner;
