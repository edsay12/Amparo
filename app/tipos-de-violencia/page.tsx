import FormasDeViolencia from "./components/formas-de-violencia";
import InformacaoInicial from "./components/informacao-inicial";
import TiposDeViolenciaBanner from "./components/Tipos-de-violencia-banner";

function TiposDeViolencia() {
  return (
    <>
      <TiposDeViolenciaBanner />
      <InformacaoInicial/>
      <FormasDeViolencia/>
    </>
  );
}

export default TiposDeViolencia;
