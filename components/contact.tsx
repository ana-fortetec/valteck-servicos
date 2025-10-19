"use client";

import type React from "react";

import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
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
import { RiLoader4Fill } from "react-icons/ri";
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
    // Esta linha só será executada se a validação for bem-sucedida
    console.log("Validação OK! Enviando dados:", data);
    onSubmit(data);
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
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="p-4 bg-primary-yellow rounded-lg text-primary-black flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-black mb-1">
                  Telefone
                </h3>
                <p className="text-gray-600">(11) 9999-9999</p>
                <p className="text-gray-600">(11) 3333-3333</p>
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
                    <FormLabel>Telefone</FormLabel>
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
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Selecione seu serviço</FormLabel>
                    <div className="flex flex-col lg:flex-row gap-2 lg:justify-start w-full lg:items-center">
                      {Object.values(ListService).map((servico) => (
                        <div key={servico} className="flex items-center gap-2">
                          <FormControl>
                            <Checkbox
                              className="text-xs"
                              checked={field.value.includes(servico)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.onChange([...field.value, servico]);
                                } else {
                                  field.onChange(
                                    field.value.filter((s) => s !== servico)
                                  );
                                }
                              }}
                            />
                          </FormControl>
                          <FormLabel>{servico}</FormLabel>
                        </div>
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

              <Button
                type="submit"
                onClick={() => console.log("O BOTÃO FOI CLICADO!")}
                disabled={isLoading}
                className="bg-primary w-40 hover:bg-blue-600 text-white"
              >
                {isLoading ? (
                  <>
                    <RiLoader4Fill className="h-6 w-6 animate-spin" /> Enviando
                  </>
                ) : (
                  <>
                    <Check className="text-success" size={16} />
                    {"Enviar"}
                  </>
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
