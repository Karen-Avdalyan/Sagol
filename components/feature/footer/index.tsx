import useTranslation from "next-translate/useTranslation";
import Image from "components/shared/image";
import contacts from "utils/constants/contactValues";
import { images } from "utils/constants/images";

import styles from "./footer.module.scss";

const contactInfo = [
  { href: contacts.facebook, src: images.facebook },
  { href: contacts.linkedin, src: images.linkedin },
  { href: contacts.instagram, src: images.instagram },
  { href: contacts.twitter, src: images.twitter },
];

export default function Footer() {
  const { t } = useTranslation('common');

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerBox}>
        <div className={styles.contactInfo}>
          {contactInfo?.map((contact) => (
            <div className={styles.footerInfoText} key={null}>
              <Image alt='' className={styles.icons} href={contact.href} src={contact.src} width={24} height={24} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className={styles.footerText}>
          {t("footer_text2")}
        </p>
      </div>
    </div>
  );
}
