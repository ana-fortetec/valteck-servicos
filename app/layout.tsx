import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ClientProviders } from "./providers";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valteck Serviços - Soluções Elétricas e Automação",
  description:
    "Serviços especializados em elétrica, câmera, automação de portões, cerca elétrica, refrigeração e conserto de eletrônicos.",
  generator: "BRQ Soluções Tecnológicas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased bg-white text-gray-900`}>
        <ClientProviders>
          <Navigation />
          {children}
          <Footer />
          <Analytics />
        </ClientProviders>
      </body>
    </html>
  );
}
