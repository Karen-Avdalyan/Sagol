import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import SubTitleText from "components/shared/subTitleText";
import Image from "components/shared/image";
import { Languages } from "utils/enum/languageEnum";

import styles from "./aboutUs.module.scss";

export default function AboutUs() {
    const { t } = useTranslation('common');
    const route = useRouter();

    return (
        <section className={styles.aboutUsContainer}>
            <div className={`${route.locale === Languages.HEBREW && styles.aboutUsBoxHe} ${styles.aboutUsBox}`}>
                <div className={styles.textBox}>
                    <SubTitleText
                        subTitleClassName={styles.title}
                        descriptionClassName={styles.description}
                        subTitle={t("about_sagol")}
                        description={t("about_description")}
                    />
                </div>
                <div className={styles.imageBox}>
                    <Image src='/image/aboutSection.svg' width={710} height={535} alt="" />
                </div>
            </div>
        </section>
    );
}
