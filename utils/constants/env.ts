export interface EnvVariables {
    captchaKey: string;
    emailAddress: string;
    address: string;
    publicNode: string;
    analyze: boolean | string;
    phoneContact: string | number;
    googleAppId: string;
}

const env: EnvVariables = {
    address:
        process.env.NEXT_RUBLIC_GOOGLE_MAP_ADDRESS ??
        "https://www.google.com/maps/place/Sagol/@40.1584813,44.5066998,15z/data=!4m5!3m4!1s0x0:0xe9e555bb709dae86!8m2!3d40.1584813!4d44.5066998",
    captchaKey:
        process.env.NEXT_PUBLIC_RE_CAPTCHA_KEY ?? "6LeU0pseAAAAAHCfZdMR-wUNrzAkdpYiApCbbPxV",
    emailAddress: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@sagol.net",
    phoneContact: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "12025550121",
    publicNode: process.env.NEXT_PUBLIC_NODE_ENV ?? "development",
    analyze: process.env.NEXT_PUBLIC_ANALYZE ?? false,
    googleAppId:
        process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_ID ??
        "848216577942-13rurtahbpqh9sjefnre5i97ssk1r8mu.apps.googleusercontent.com",
};

export default env;
