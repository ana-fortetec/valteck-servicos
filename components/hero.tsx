import Link from "next/link";
import Image from "next/image";
import { Cog, Snowflake, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white pt-20 pb-32">
      {/* Decorative elements */}
      <div className="absolute top-10 md:right-10 w-72 h-72 bg-primary-yellow opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-primary-blue opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-primary-yellow text-primary-black rounded-full font-semibold text-sm">
              ⚡ Soluções Inteligentes
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-black mb-6 leading-tight">
              Tecnologia e Confiabilidade em Cada Serviço
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A Valteck Serviços oferece soluções completas em elétrica,
              automação, refrigeração e conserto de eletrônicos. Mais de uma
              década de experiência ao seu serviço.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contato"
                className="px-8 py-4 bg-primary-blue text-white rounded-lg hover:bg-primary-red transition-colors font-semibold text-center"
              >
                Solicitar Orçamento
              </Link>
              <Link
                href="/servicos"
                className="px-8 py-4 border-2 border-primary-black text-primary-black rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center"
              >
                Conhecer Serviços
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 md:h-full flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Hexagon shapes representing services */}
              <div className="absolute w-48 h-48 bg-primary-yellow rounded-3xl transform rotate-45 opacity-10"></div>
              <div className="absolute w-40 h-40 bg-primary-blue rounded-3xl transform -rotate-12 opacity-10"></div>
              <div className="absolute w-36 h-36 bg-primary-gray rounded-3xl transform rotate-12 opacity-10"></div>

              {/* Icons */}
              <div className="relative z-10 flex md:flex-col items-center gap-8">
                <div className="p-6 bg-primary-yellow rounded-2xl text-primary-black">
                  <Zap size={48} />
                </div>
                <div className="p-6 bg-primary-blue rounded-2xl text-white">
                  <Snowflake size={48} />
                </div>
                <div className="p-6 bg-primary-gray rounded-2xl text-primary-black">
                  <Cog size={48} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
