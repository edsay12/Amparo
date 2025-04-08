import Section from "@/components/Section";

import ViolenciaCard from "@/components/violencia-card";
import { formasDeViolencia } from "@/lib/constants/formasDeViolencia";

function FormasDeViolencia() {
  return (
    <Section
      title="Formas de Violência Reconhecidas pela Lei Maria da Penha"
      className="md:py-0"
    >
      <div className="flex flex-col gap-5 mt-12">
        {formasDeViolencia.map((forma, i) => (
          <ViolenciaCard key={i} {...forma} />
        ))}
      </div>
    </Section>
  );
}

export default FormasDeViolencia;
