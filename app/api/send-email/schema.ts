import { z } from "zod";

export const sendEmailSchema = z.object({
  name: z
    .string()
    .min(1, { message: "O Campo nome é Obrigatório." })
    .max(30, { message: "O Nome não pode ter mais de 50 caracteres." }),
  email: z
    .string()
    .min(1, { message: "O Campo email é Obrigatório." })
    .email({ message: "O Email é inválido." }),
  phone: z
    .string()
    .min(10, { message: "O Campo telefone é Obrigatório." })
    .max(15, { message: "O Telefone não pode ter mais de 15 caracteres." }),
  service: z
    .array(z.string())
    .min(1, { message: "Selecione pelo menos um serviço." }),
  message: z
    .string()
    .min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." }),
});

export type SendEmailSchemaType = z.infer<typeof sendEmailSchema>;
