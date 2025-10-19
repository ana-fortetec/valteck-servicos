import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-primary-black text-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Pronto para Transformar Seu Espaço?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Entre em contato conosco hoje e receba um orçamento personalizado para
          suas necessidades
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contato"
            className="px-8 py-4 bg-primary-yellow text-primary-black rounded-lg hover:bg-primary-red hover:text-white transition-colors font-semibold"
          >
            Solicitar Orçamento
          </Link>
          <Link
            href="/servicos"
            className="px-8 py-4 border-2 border-primary-yellow text-primary-yellow rounded-lg hover:bg-primary-yellow hover:text-primary-black transition-colors font-semibold"
          >
            Conhecer Mais
          </Link>
        </div>
      </div>
    </section>
  );
}
