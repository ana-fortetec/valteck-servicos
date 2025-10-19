import { SendEmailSchemaType } from "@/app/api/send-email/schema";

type sendEmailProps = {
  data: SendEmailSchemaType;
};

export interface ISendEmailResponse {
  status: number;
  message: string;
}
export const sendEmailApi = async ({
  data,
}: sendEmailProps): Promise<ISendEmailResponse> => {
  const url = `/api/send-email`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const formattedResponse = await response.json();
  return formattedResponse;
};
