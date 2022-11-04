import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import constants, { templates } from "./constants";
import { EmailParams, EmailType, TemplateParams } from "./types";

const getEmailTemplateId = (type: EmailType) => templates[type];

export const sendEmail = (
  params: EmailParams
): Promise<EmailJSResponseStatus> => {
  const { serviceId, userId, templateId, templateParams } = params;
  return emailjs.send(serviceId, templateId, templateParams, userId);
};

export const sendEmailByType = (
  type: EmailType,
  templateParams: TemplateParams
): Promise<EmailJSResponseStatus> => {
  const params: EmailParams = {
    serviceId: constants.serviceId,
    userId: constants.userId,
    templateId: getEmailTemplateId(type),
    templateParams,
  };

  return sendEmail(params);
};

export * from "./constants";
export * from "./types";
export * from "./templates";
