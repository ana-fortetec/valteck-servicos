import { Zap, Camera, Gauge as Gate, Wifi, Snowflake, Wrench } from "lucide-react"

const services = [
  {
    icon: Zap,
    title: "Serviços Elétricos",
    description:
      "Instalação, manutenção e reparo de sistemas elétricos residenciais e comerciais com segurança e eficiência.",
    accentColor: "bg-primary-yellow",
  },
  {
    icon: Camera,
    title: "Sistemas de Câmera",
    description: "Instalação de câmeras de segurança de alta definição com monitoramento 24/7 para sua tranquilidade.",
    accentColor: "bg-primary-blue",
  },
  {
    icon: Gate,
    title: "Automação de Portões",
    description: "Sistemas automáticos modernos para portões com controle remoto e segurança integrada.",
    accentColor: "bg-primary-gray",
  },
  {
    icon: Wifi,
    title: "Cerca Elétrica",
    description: "Instalação de cercas elétricas de alta performance para proteção máxima de sua propriedade.",
    accentColor: "bg-primary-red",
  },
  {
    icon: Snowflake,
    title: "Refrigeração",
    description: "Instalação, manutenção e reparo de sistemas de ar condicionado e refrigeração industrial.",
    accentColor: "bg-primary-blue",
  },
  {
    icon: Wrench,
    title: "Conserto de Eletrônicos",
    description: "Reparo especializado de placas inversoras e outros componentes eletrônicos com garantia.",
    accentColor: "bg-primary-yellow",
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluções completas e especializadas para todas as suas necessidades técnicas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white p-4 md:p-8 rounded-lg md:rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all"
              >
                <div
                  className={`${service.accentColor} w-10 h-10 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-3 md:mb-4 text-gray-900`}
                >
                  <Icon size={20} className="md:w-7 md:h-7" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
