import {
  TransactionalEmailsApi,
  TransactionalEmailsApiApiKeys,
} from "@getbrevo/brevo";

let apiInstance = new TransactionalEmailsApi();

apiInstance.setApiKey(
  TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY!
);

type SendEmailParams = Parameters<typeof apiInstance.sendTransacEmail>;

export const sendEmail = (
  email: SendEmailParams[0],
  options?: SendEmailParams[1]
) => apiInstance.sendTransacEmail(email, options);
