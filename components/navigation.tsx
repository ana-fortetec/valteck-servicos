"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo-valteck.png" alt="Valteck Serviços" width={40} height={40} className="w-10 h-10" />
            <span className="font-bold text-lg text-gray-900 hidden sm:inline">Valteck</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-gray-700 hover:text-primary-blue transition-colors font-medium">
              Início
            </Link>
            <Link href="/servicos" className="text-gray-700 hover:text-primary-blue transition-colors font-medium">
              Serviços
            </Link>
            <Link href="/sobre" className="text-gray-700 hover:text-primary-blue transition-colors font-medium">
              Sobre
            </Link>
            <Link href="/contato" className="text-gray-700 hover:text-primary-blue transition-colors font-medium">
              Contato
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="/contato"
            className="hidden md:inline-block px-6 py-2 bg-primary-blue text-white rounded-lg hover:shadow-lg transition-all font-medium"
          >
            Solicitar Orçamento
          </Link>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-900">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              Início
            </Link>
            <Link href="/servicos" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              Serviços
            </Link>
            <Link href="/sobre" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              Sobre
            </Link>
            <Link href="/contato" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              Contato
            </Link>
            <Link
              href="/contato"
              className="block px-4 py-2 bg-primary-blue text-white rounded-lg text-center font-medium"
            >
              Solicitar Orçamento
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
