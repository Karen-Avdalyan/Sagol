import env from "./env";

export interface ContactValues {
  twitter: string;
  linkedin: string;
  discord: string;
  github: string;
  instagram: string;
  youtube: string;
  tiktok: string;
  facebook: string;
  phoneNumber: string;
  emailAddress: string;
  phoneNumberForSend: string;
  addressForSend: string;
  emailAddressForSend: string;
  address: string;
}

const contacts: ContactValues = {
  twitter: "https://twitter.com/sanuvox",
  linkedin: "https://www.linkedin.com/company/sanuvox-technologies/",
  discord: "https://discord.gg/E6MyNMrMCu",
  github: "https://github.com/Sagol-App",
  instagram: "https://www.instagram.com/growsaverbysanuvox/",
  youtube: "https://www.youtube.com/channel/UC6Zr3CgVMOu1nmp1YEsafHA",
  tiktok: "https://www.tiktok.com/@sagol",
  facebook: "https://www.facebook.com/growsaver",
  phoneNumber: `+${env.phoneContact}`,
  emailAddress: env.emailAddress,
  phoneNumberForSend: `tel:+${env.phoneContact}`,
  addressForSend: `${env.address}`,
  emailAddressForSend: `mailto:${env.emailAddress}`,
  address: "30/1 Sevan St.,Yerevan",
};

export interface SocialIconsProps {
  id: number;
  url: string;
  width: number;
  height: number;
  href: string;
}

export default contacts;
