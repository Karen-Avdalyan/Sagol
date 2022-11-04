import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { Languages } from "utils/enum/languageEnum";
import CardItem from "./cardItem";
import { CardTypes, workWithUsCards } from "./types";

import styles from "./workWithUs.module.scss";

export default function WorkWithUs() {
    const { t } = useTranslation('common');
    const route = useRouter();

    return (
        <div className={styles.workWithUsContainer}>
            <div className={`${route.locale === Languages.HEBREW && styles.workWithUsSectionHe} ${styles.workWithUsSection}`}>
                <div className={styles.sectionText}>
                    <div className={`${route.locale === Languages.HEBREW && styles.sectionTitleHe} ${styles.sectionTitle}`}>
                        <span>{t("work_with_us")}</span>
                    </div>
                    <div className={`${route.locale === Languages.HEBREW && styles.sectionDescriptionHe} ${styles.sectionDescription}`}>
                        <span>{t("work_desc")}</span>
                    </div>
                </div>
                <div className={`${route.locale === Languages.HEBREW && styles.sectionCardsHe} ${styles.sectionCards}`}>
                    {workWithUsCards.map((item: CardTypes) =>
                        <CardItem item={item} key={item.title} />
                    )}
                </div>
            </div>
        </div>
    );
}
