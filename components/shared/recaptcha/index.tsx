import ReCAPTCHA from "react-google-recaptcha";
import env from "utils/constants/env";
import RecaptchaProps from "./types";

export default function Recaptcha({ onChange, onExpired }: RecaptchaProps) {
    return <ReCAPTCHA onChange={onChange} onExpired={onExpired} sitekey={env.captchaKey} />;
}
