"use client";

import { useMutation } from "@tanstack/react-query";
import { SendEmailSchemaType } from "../send-email/schema";
import { sendEmailApi } from "@/api/services/send-email";
import { useToast } from "@/hooks/use-toast";
import ContactForm from "@/components/contact";

export function ActionSendEmail() {
  const { toast } = useToast();

  const {
    status,
    mutateAsync: mutateUpdatePurchaseRequest,
    isPending: isLoading,
  } = useMutation({
    mutationFn: (payload: SendEmailSchemaType) =>
      sendEmailApi({ data: payload }),
    onSuccess: () => {
      toast({
        title:
          "Email enviado com sucesso, em breve nosso time entrará em contato.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Erro ao enviar o email, tente novamente.",
        variant: "destructive",
      });
    },
  });

  return (
    <>
      <ContactForm
        statusRequest={status}
        isLoading={isLoading}
        onSubmit={mutateUpdatePurchaseRequest}
      />
    </>
  );
}
