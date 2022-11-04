import { useRouter } from "next/router";
import { Languages } from "utils/enum/languageEnum";
import useTranslation from "next-translate/useTranslation";
import Image from "components/shared/image";

import styles from "./ourPartners.module.scss";

export default function OurTechnology() {
    const { t } = useTranslation('common');
    const route = useRouter();

    return (
        <section className={styles.aboutUsContainer}>
            <div className={`${route.locale === Languages.HEBREW && styles.aboutUsBoxHe} ${styles.aboutUsBox}`}>
                <div className={styles.imageBox}>
                    <Image src='/image/aboutTech.svg' width={565} height={67} alt="" />
                </div>
                <div className={styles.textBox}>
                    <div><h1>{t("our_technology")}</h1></div>
                    <div><p>
                        {t("our_technology_desc")}
                    </p></div>
                </div>
            </div>
        </section>
    );
}
