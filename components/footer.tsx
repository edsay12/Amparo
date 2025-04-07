import Link from "next/link";
import { Button } from "./ui/button";

export type FooterProps = {
  title: string;
  description?: string;
  buttons?: JSX.Element;
};

function Footer({ title, description, buttons }: FooterProps) {
  return (
    <footer className=" bg-purple-950 text-purple-200">
      <section className="py-16  bg-purple-900 text-white" id="contato">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">{title}</h2>
          <p className="text-lg max-w-[800px] mx-auto mb-8 text-purple-100">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {buttons}
          </div>
        </div>
      </section>
      <section className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © 2024 Campanha Contra a Violência à Mulher. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-sm hover:text-white">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-sm hover:text-white">
              Termos de Uso
            </Link>
            <Link href="#" className="text-sm hover:text-white">
              Contato
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
