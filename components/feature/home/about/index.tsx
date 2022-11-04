import { useRouter } from "next/router";
import Image from "components/shared/image";
import { images } from "utils/constants/images";
import { Languages } from "utils/enum/languageEnum";
import SubTitleText from "components/shared/subTitleText";
import useTranslation from "next-translate/useTranslation";

import styles from "./about.module.scss";

export default function About() {
  const route = useRouter();
  const { t } = useTranslation('common');

  return (
    <div className={`${route.locale === Languages.HEBREW && styles.aboutContainerHe} ${styles.aboutContainer}`}>
      <div className={styles.textBox}>
        <SubTitleText
          subTitleClassName={styles.title}
          descriptionClassName={styles.description}
          subTitle={t("air_cleaner")}
          description={t('air_cleaner_desc')}
        />
        <p className={`${route.locale === Languages.HEBREW && styles.moreButtonHe} ${styles.moreButton}`}>{t('read_more')}</p>
      </div>
      <div className={styles.gifBoxDark} >
        <Image src={images.air_cleaner} width={586} height={450} alt="airCleaner" />
      </div>
    </div>
  );
}
