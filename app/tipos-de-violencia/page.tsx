import FormasDeViolencia from "./components/formas-de-violencia";
import InformacaoInicial from "./components/informacao-inicial";
import OutrasFormasDeViolencia from "./components/outras-formas-de-violencia";
import TiposDeViolenciaBanner from "./components/Tipos-de-violencia-banner";

function TiposDeViolencia() {
  return (
    <>
      <TiposDeViolenciaBanner />
      <InformacaoInicial/>
      <FormasDeViolencia/>
      <OutrasFormasDeViolencia />
    </>
  );
}

export default TiposDeViolencia;
