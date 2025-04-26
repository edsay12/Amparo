import { Banner } from "@/components/banner";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function HomeBanner() {
  return (
    <Banner
      title={<>Juntos Contra a Violência</>}
      description="Toda mulher tem direito a uma vida livre de violência. Informação
        é o primeiro passo para a mudança."
      descriptionClassName="text-sm"
      buttons={
        <>
          <div className="flex flex-col sm:flex-row gap-4 ">
            <Link href={"/ajuda-profissional"}>
              <Button
                size="lg"
                className="bg-white text-purple-900 hover:bg-purple-100"
              >
                Preciso de Ajuda Profissional
              </Button>
            </Link>
            <Link href={"/teste"}>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white bg-transparent hover:bg-purple-800 hover:text-white"
              >
                Faça o teste: Você se sente uma situação de abuso?
              </Button>
            </Link>
          </div>
        </>
      }
    />
  );
}

export default HomeBanner;
