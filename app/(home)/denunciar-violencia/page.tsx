import DenunciarViolenciaBanner from "./components/denunciar-violencia-banner";
import DenunciaVIolenciaFooter from "./components/footer";
import SeccaoDeDenuncia from "./components/seccao-de-denuncia";

function DenunciarViolencia() {
  return (
    <>
      <DenunciarViolenciaBanner />
      <SeccaoDeDenuncia />
      <DenunciaVIolenciaFooter />
    </>
  );
}

export default DenunciarViolencia;
