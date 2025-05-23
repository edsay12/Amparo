"use client";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function Ligue180Footer() {
  const router = useRouter();

  return (
    <Footer
      title="Não se cale. Você não está sozinha."
      description="A violência contra a mulher é crime e pode ser denunciada. Conhecer seus direitos é o
primeiro passo para se proteger."
      buttons={
        <div className="flex items-center gap-4">
          <Button variant={"secondary"} className="text-purple-800 ">
            <a href="tel:180">Ligue 180</a>
          </Button>
          <Button
            variant={"secondary"}
            className="text-purple-800 "
            onClick={() => router.push("/")}
          >
            Voltar a pagina principal
          </Button>
        </div>
      }
    ></Footer>
  );
}

export default Ligue180Footer;
