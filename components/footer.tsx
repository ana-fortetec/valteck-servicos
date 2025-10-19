import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary-black text-white py-12">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-10  rounded-lg flex items-center justify-center">
                <Image
                  src="/logo-valteck.png"
                  alt="Valteck Serviços"
                  width={40}
                  height={40}
                  className="w-12 h-10"
                />
                <span className="font-bold text-lg text-gray-900 hidden sm:inline">
                  Valteck
                </span>
              </div>
              <span className="font-bold text-lg">Valteck</span>
            </div>
            <p className="text-gray-400 text-sm">
              Soluções técnicas especializadas para sua confiança
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-primary-yellow">
              Links Rápidos
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary-yellow transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="hover:text-primary-yellow transition-colors"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="hover:text-primary-yellow transition-colors"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="hover:text-primary-yellow transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-primary-blue">Serviços</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Serviços Elétricos</li>
              <li>Sistemas de Câmera</li>
              <li>Automação de Portões</li>
              <li>Cerca Elétrica</li>
              <li>Refrigeração</li>
              <li>Conserto de Eletrônicos</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-primary-red">Contato</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                (11) 9999-9999
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                contato@valteck.com.br
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                Imperatriz, MA
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2025 Valteck Serviços. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="hover:text-primary-yellow transition-colors"
              >
                Privacidade
              </Link>
              <Link
                href="#"
                className="hover:text-primary-yellow transition-colors"
              >
                Termos
              </Link>
              <Link
                href="#"
                className="hover:text-primary-yellow transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
