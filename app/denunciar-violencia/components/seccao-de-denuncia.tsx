import Section from "@/components/Section";
import FormularioDeCadastroDeDenuncia from "./formulario-de-cadastro-de-denuncia";
import Informacoes from "./informacoes";

function SeccaoDeDenuncia() {
  return (
    <Section className="md:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Informacoes />
        <FormularioDeCadastroDeDenuncia />
      </div>
    </Section>
  );
}

export default SeccaoDeDenuncia;
