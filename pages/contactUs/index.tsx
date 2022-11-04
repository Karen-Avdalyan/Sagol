import ContactUsForm from "components/feature/contactUsForm";
import GoogleMaps from "components/shared/googleMap";
import useTranslation from "next-translate/useTranslation";

import styles from "./contact-us.module.scss";

export default function ContactUs() {
  const { t } = useTranslation('common');
  return (
    <div className={styles.contactUs}>
      <div className={styles.backgroundImage}><h1>{t("contact_us")}</h1></div>
      <ContactUsForm />
      <GoogleMaps/>
    </div>
  );
}
