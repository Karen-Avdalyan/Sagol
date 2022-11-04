import { TemplateParams } from "./types";

export interface ContactUsTemplate extends TemplateParams {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
  // TO DO remove this fields from emailjs
  // from_name: string;
  // ip_address: string;
  // phone_number: string;
  // company: string;
  // subject: string;
}

export interface JobTemplate extends TemplateParams {
  job_title: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  linkedin: string;
  portfolio: string;
  cv: string | ArrayBuffer | null;
}
