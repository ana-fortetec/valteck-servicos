import { Award, Users, Zap } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary-black mb-4">
            Sobre a Valteck Serviços
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mais de uma década de excelência em soluções técnicas
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-primary-yellow text-primary-black p-8 rounded-2xl">
            <Award size={40} className="mb-4" />
            <h3 className="text-2xl font-bold mb-3">Nossa Missão</h3>
            <p className="text-sm leading-relaxed">
              Fornecer soluções técnicas de qualidade superior, com
              profissionalismo e comprometimento com a satisfação do cliente.
            </p>
          </div>
          <div className="bg-primary-blue text-white p-8 rounded-2xl">
            <Zap size={40} className="mb-4" />
            <h3 className="text-2xl font-bold mb-3">Nossa Visão</h3>
            <p className="text-sm leading-relaxed">
              Ser referência em serviços técnicos especializados, reconhecida
              pela qualidade, inovação e confiabilidade.
            </p>
          </div>
          <div className="bg-primary-gray text-primary-black p-8 rounded-2xl">
            <Users size={40} className="mb-4" />
            <h3 className="text-2xl font-bold mb-3">Nossos Valores</h3>
            <p className="text-sm leading-relaxed">
              Integridade, excelência, inovação e compromisso com o cliente são
              os pilares que guiam nossas ações.
            </p>
          </div>
        </div>

        {/* Story */}
        <div className="bg-gray-50 p-12 rounded-2xl mb-16">
          <h2 className="text-3xl font-bold text-primary-black mb-6">
            Nossa História
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            A Valteck Serviços nasceu da paixão por tecnologia e da necessidade
            de oferecer soluções técnicas confiáveis e de qualidade. Ao longo
            dos anos, construímos uma reputação sólida através do trabalho
            dedicado, inovação constante e satisfação dos nossos clientes.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Hoje, somos uma empresa consolidada no mercado, com uma equipe de
            profissionais altamente qualificados, prontos para atender suas
            necessidades em elétrica, automação, refrigeração e conserto de
            eletrônicos.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-blue mb-2">10+</div>
            <p className="text-gray-600">Anos de Experiência</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-yellow mb-2">
              500+
            </div>
            <p className="text-gray-600">Clientes Satisfeitos</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-red mb-2">
              1000+
            </div>
            <p className="text-gray-600">Projetos Realizados</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-black mb-2">
              24/7
            </div>
            <p className="text-gray-600">Suporte Disponível</p>
          </div>
        </div>
      </div>
    </section>
  );
}
