import { NextRequest, NextResponse } from "next/server";
import { sendEmailSchema, SendEmailSchemaType } from "./schema";
import { sendEmail } from "@/lib/messaging/email";

export async function POST(req: NextRequest) {
  const body: SendEmailSchemaType = await req.json();
  const { success: successBody, data: bodyData } =
    sendEmailSchema.safeParse(body);

  if (!successBody) {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  const emailData = {
    to: [
      {
        email: "anajuliabrq2@gmail.com",
        name: "BRQ Soluções Tecnológicas",
      },
    ],
    sender: {
      email: process.env.BREVO_SENDER_EMAIL,
      name: process.env.BREVO_SENDER_NAME,
    },
    replyTo: { email: bodyData.email, name: bodyData.name },
    subject: "Nova Solicitação de Contato",
    htmlContent: `
      <h1>Nova mensagem de contato</h1>
      <p><strong>Nome:</strong> ${bodyData.name}</p>
      <p><strong>Email:</strong> ${bodyData.email}</p>
      <p><strong>Serviços selecionados:</strong></p>
      <ul>
        ${bodyData.service.map((service) => `<li>${service}</li>`).join("")}
      </ul>
      <p><strong>Mensagem:</strong></p>
      <p>${bodyData.message}</p>
      <p><strong>Telefone:</strong> ${bodyData.phone}</p>
    `,
  };

  const response = await sendEmail(emailData);

  if (response.response.statusCode === 201) {
    return NextResponse.json({
      status: 201,
      message:
        "Email enviado com sucesso, em breve nossa equipe entrará em contato",
    });
  }
  return NextResponse.json({
    status: 400,
    message: "Erro ao enviar o email, tente novamente",
  });
}
