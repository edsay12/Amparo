import CanaisDeAjuda from "./components/canais-de-ajuda";
import HomeFooter from "./components/footer";
import HistoriasDeSuperacao from "./components/historias-de-superacao";
import HomeBanner from "./components/home-banner";
import LegistacaoDeProtecao from "./components/legistacao-de-protecao";
import SectionMitosEVerdades from "./components/mitos-e-verdades";
import SectionOndeBuscarAjuda from "./components/onde-buscar-ajuda";
import SectionParceitosEApoiadores from "./components/parceiros-e-apoiadores";

import SectionTiposDeViolencia from "./components/reconheca-os-tipo-de-violencia";
import SinaisDeAlerta from "./components/sinais-de-alerta";
import BusqueAjudaProfissional from "./components/busque-ajuda-profissional";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <SinaisDeAlerta />
      <BusqueAjudaProfissional/>
      <SectionTiposDeViolencia />
      <CanaisDeAjuda />
      <SectionMitosEVerdades />
      <HistoriasDeSuperacao />
      <LegistacaoDeProtecao />
      <SectionOndeBuscarAjuda />
      <SectionParceitosEApoiadores />
      <HomeFooter />
    </>
  );
}
