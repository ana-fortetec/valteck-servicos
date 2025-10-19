"use client";

import type React from "react";

import { Mail, Phone, MapPin, Check } from "lucide-react";
import { RiLoader4Fill, RiWhatsappLine } from "react-icons/ri";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import {
  sendEmailSchema,
  SendEmailSchemaType,
} from "@/app/api/send-email/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

interface IContactForm {
  isLoading: boolean;
  onSubmit: (payload: SendEmailSchemaType) => void;
  statusRequest: string;
}

export default function ContactForm({
  isLoading,
  onSubmit,
  statusRequest,
}: IContactForm) {
  const whatsappNumber = "559991320172";
  const whatsappNumberFormatted = "(99) 9132-0172";

  const form = useForm<z.infer<typeof sendEmailSchema>>({
    resolver: zodResolver(sendEmailSchema),
    defaultValues: {
      name: "",
      email: "",
      service: [],
      message: "",
      phone: "",
    },
  });

  enum ListService {
    ServicoEletronico = "Serviços Elétricos",
    SistemaDeCamera = "Sistemas de Câmera",
    AutomacaoDePortao = "Automação de Portões",
    CercaEletrica = "Cerca Elétrica",
    Refrigeracao = "Refrigeração",
    ConsertoDeEletronico = "Conserto de Eletrônicos",
  }

  const handleFormSubmit = (data: SendEmailSchemaType) => {
    console.log("Validação OK! Enviando dados para o email:", data);
    onSubmit(data);
  };

  const handleWhatsAppRedirect = () => {
    const { name, service, message } = form.getValues();

    let whatsappMessage = `Olá! Meu nome é ${name || "Cliente"}.`;

    if (service && service.length > 0) {
      whatsappMessage += `\n\nGostaria de um orçamento para o(s) serviço(s) de: ${service.join(
        ", "
      )}.`;
    }

    if (message) {
      whatsappMessage += `\n\nMensagem: ${message}`;
    }

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary-black mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Solicite um orçamento ou tire suas dúvidas com nossos especialistas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="p-4 bg-primary-yellow rounded-lg text-primary-black flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-black mb-1">
                  Telefone / WhatsApp
                </h3>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-blue transition-colors"
                >
                  {whatsappNumberFormatted}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-4 bg-primary-blue rounded-lg text-white flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-black mb-1">
                  Email
                </h3>
                <p className="text-gray-600">contato@valteck.com.br</p>
                <p className="text-gray-600">orcamento@valteck.com.br</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-4 bg-primary-red rounded-lg text-white flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-black mb-1">
                  Endereço
                </h3>
                <p className="text-gray-600">Imperatriz, MA</p>
                <p className="text-gray-600">Atendimento em toda a região</p>
              </div>
            </div>

            <div className="bg-primary-gray p-6 rounded-2xl text-primary-black">
              <h3 className="text-lg font-bold mb-2">Horário de Atendimento</h3>
              <p className="text-sm">Segunda a Sexta: 08:00 - 18:00</p>
              <p className="text-sm">Sábado: 08:00 - 13:00</p>
              <p className="text-sm">Emergências: 24/7</p>
            </div>
          </div>

          {/* Contact Form */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleFormSubmit)}
              className="space-y-6"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input
                        className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Seu nome"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="name@email.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefone (Opcional)</FormLabel>
                    <FormControl>
                      <Input
                        className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="(99) 99999-9999"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="service"
                render={() => (
                  <FormItem>
                    <FormLabel>Selecione seu serviço</FormLabel>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                      {Object.values(ListService).map((servico) => (
                        <FormField
                          key={servico}
                          control={form.control}
                          name="service"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value.includes(servico)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          servico,
                                        ])
                                      : field.onChange(
                                          field.value.filter(
                                            (value) => value !== servico
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">
                                {servico}
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Como podemos te ajudar?</FormLabel>
                    <FormControl>
                      <Textarea
                        className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#617181] focus:border-blue-500"
                        placeholder="Descreva como podemos te ajudar..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* GRUPO DE BOTÕES */}
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-primary hover:bg-blue-600 text-white flex-grow sm:flex-grow-0"
                >
                  {isLoading ? (
                    <>
                      <RiLoader4Fill className="mr-2 h-4 w-4 animate-spin" />{" "}
                      Enviando...
                    </>
                  ) : (
                    <>Enviar por Email</>
                  )}
                </Button>

                {/* NOVO BOTÃO PARA WHATSAPP */}
                <Button
                  type="button" // Importante: type="button" para não submeter o formulário
                  onClick={handleWhatsAppRedirect}
                  className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 flex-grow sm:flex-grow-0"
                >
                  <RiWhatsappLine className="h-5 w-5" />
                  Enviar por WhatsApp
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
