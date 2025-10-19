import {
  Zap,
  Camera,
  Gauge as Gate,
  Wifi,
  Snowflake,
  Wrench,
  CheckCircle,
} from "lucide-react";

const serviceDetails = [
  {
    icon: Zap,
    title: "Serviços Elétricos",
    color: "bg-primary-yellow",
    textColor: "text-primary-black",
    description: "Soluções elétricas completas para residências e empresas",
    features: [
      "Instalação de painéis elétricos",
      "Fiação e cabeamento estruturado",
      "Manutenção preventiva",
      "Reparos de emergência 24/7",
      "Certificação e conformidade normativa",
    ],
  },
  {
    icon: Camera,
    title: "Sistemas de Câmera",
    color: "bg-primary-blue",
    textColor: "text-white",
    description: "Segurança visual com tecnologia de ponta",
    features: [
      "Câmeras 4K e Full HD",
      "Monitoramento remoto via app",
      "Gravação em nuvem",
      "Análise inteligente de movimento",
      "Suporte técnico contínuo",
    ],
  },
  {
    icon: Gate,
    title: "Automação de Portões",
    color: "bg-primary-gray",
    textColor: "text-primary-black",
    description: "Portões inteligentes e seguros",
    features: [
      "Motores de alta performance",
      "Controle remoto e smartphone",
      "Sensor de segurança integrado",
      "Backup de bateria",
      "Instalação profissional",
    ],
  },
  {
    icon: Wifi,
    title: "Cerca Elétrica",
    color: "bg-primary-red",
    textColor: "text-white",
    description: "Proteção máxima para sua propriedade",
    features: [
      "Isoladores de alta qualidade",
      "Tensão regulável",
      "Resistente a intempéries",
      "Fácil manutenção",
      "Certificação de segurança",
    ],
  },
  {
    icon: Snowflake,
    title: "Refrigeração",
    color: "bg-primary-blue",
    textColor: "text-white",
    description: "Conforto térmico garantido",
    features: [
      "Ar condicionado residencial e comercial",
      "Sistemas de refrigeração industrial",
      "Manutenção preventiva",
      "Limpeza de filtros",
      "Eficiência energética",
    ],
  },
  {
    icon: Wrench,
    title: "Conserto de Eletrônicos",
    color: "bg-primary-black",
    textColor: "text-primary-yellow",
    description: "Reparo especializado de componentes",
    features: [
      "Diagnóstico completo",
      "Reparo de placas inversoras",
      "Substituição de componentes",
      "Testes de qualidade",
      "Garantia de 6 meses",
    ],
  },
];

export default function ServiceDetail() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-2">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary-black mb-4">
            Detalhes dos Serviços
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça em detalhes cada um dos serviços especializados que
            oferecemos
          </p>
        </div>

        {/* 👇 ALTERAÇÃO AQUI 👇 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {serviceDetails.map((service, index) => {
            const Icon = service.icon;
            return (
              // A estrutura interna de cada serviço permanece a mesma
              <div
                key={index}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div
                  className={`${service.color} ${service.textColor} p-12 rounded-2xl flex items-center justify-center h-80`}
                >
                  <Icon size={120} />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-primary-black mb-3">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle
                          size={20}
                          className="text-primary-blue flex-shrink-0"
                        />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
