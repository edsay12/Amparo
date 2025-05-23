import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todos contra a violencia",
  description:
    "Uma plataforma intertiva que busca ajudar no combate à violência contra a mulher.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className}  antialiased`}>
        <Toaster position="bottom-right" richColors />
        <main>{children}</main>
      </body>
    </html>
  );
}
