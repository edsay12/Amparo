import CanaisDeAjuda from "./components/canais-de-ajuda";
import HomeBanner from "./components/home-banner";
import SectionMitosEVerdades from "./components/mitos-e-verdades";
import SectionRealidadeEmNumeros from "./components/realidade-em-numeros";
import SectionTiposDeViolencia from "./components/reconheca-os-tipo-de-violencia";
import SinaisDeAlerta from "./components/sinais-de-alerta";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <SectionRealidadeEmNumeros />
      <SectionTiposDeViolencia />
      <CanaisDeAjuda />
      <SectionMitosEVerdades />
      <SinaisDeAlerta />
    </>
  );
}
