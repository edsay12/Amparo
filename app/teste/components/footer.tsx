"use client";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function TesteViolenciaFooter() {
  const router = useRouter();

  return (
    <Footer
      title="Compartilhe este teste."
      description="Ajude outras pessoas a identificarem sinais de alerta em seus relacionamentos.
Compartilhar informação pode salvar vidas."
      buttons={
        <div className="flex items-center gap-4">
          <Button variant={"secondary"} className="text-purple-800 ">
            Compartilhar nas Redes Sociais
          </Button>
          <Button
            variant={"secondary"}
            className="text-purple-800 "
            onClick={() => router.push("/")}
          >
            Voltar para a página inicial
          </Button>
        </div>
      }
    ></Footer>
  );
}

export default TesteViolenciaFooter;
