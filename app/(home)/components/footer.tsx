import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function HomeFooter() {
  return (
    <Footer
      title={"Junte-se à Nossa Causa"}
      description={`A conscientização é o primeiro passo para a mudança. Compartilhe informações, apoie
as vítimas e ajude a construir uma sociedade livre de violência contra a mulher.`}
      buttons={
        <>
          <Link href="/denunciar-violencia">
            <Button variant={"secondary"} className="text-purple-800 ">
              Denuncie
            </Button>
          </Link>
        </>
      }
    ></Footer>
  );
}

export default HomeFooter;
