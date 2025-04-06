"use client";
import Link from "next/link";
import Logo from "../ui/logo";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const menuItens = [
  {
    name: "Início",
    href: "/",
  },
  {
    name: "Sobre",
    href: "#sobre",
  },
  {
    name: "Tipos de Violência",
    href: "#tipos",
  },
  {
    name: "Buscar Ajuda",
    href: "#ajuda",
  },
  {
    name: "Legislação",
    href: "#legislacao",
  },
  {
    name: "Contato",
    href: "#contato",
  },
];

function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="mr-4 flex">
          <Logo />
        </div>
        <nav className="hidden md:flex flex-1 items-center justify-center">
          <ul className="flex space-x-6">
            {menuItens.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-purple-700"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button className="hidden md:flex bg-purple-600 hover:bg-purple-700">
          <Link href="/denunciar">Denunciar</Link>
        </Button>

        <div className="flex items-center gap-5 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Menu className="h-6 w-6 cursor-pointer" />
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-4 items-start">
              <nav>
                <ul className="flex flex-col gap-4">
                  {menuItens.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm font-medium transition-colors hover:text-purple-700"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <Button className=" bg-purple-600 hover:bg-purple-700">
                <Link href="/denunciar">Denunciar</Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
