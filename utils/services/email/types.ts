// eslint-disable-next-line no-shadow
export enum EmailType {
  ContactUs = 0,
  Job = 1,
}

export interface TemplateParams {
  [key: string]: string | ArrayBuffer | null;
}

export interface EmailParams {
  serviceId: string;
  userId: string;
  templateId: string;
  templateParams?: TemplateParams;
}

export interface EmailConstants {
  serviceId: string;
  userId: string;
}

export interface TemplateConstants {
  [EmailType.ContactUs]: string;
  [EmailType.Job]: string;
}
