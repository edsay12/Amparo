import type { Metadata } from "next";

import NavBar from "@/components/shared/navBar";

export const metadata: Metadata = {
  title: "Todos contra a violencia",
  description:
    "Uma plataforma intertiva que busca ajudar no combate à violência contra a mulher.",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}
