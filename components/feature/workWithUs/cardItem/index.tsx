import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { Languages } from "utils/enum/languageEnum";
import { useRouter } from "next/router";
import { CardItemProps } from '../types';

import styles from "./cardItem.module.scss";

export default function CardItem({ item }: CardItemProps) {
    const { t } = useTranslation('common');
    const route = useRouter();

    return (
        <div className={`${route.locale === Languages.HEBREW && styles.cardItemHe} ${styles.cardItem}`}>
            <div className={styles.cardIcon}>
                <Image src={item.iconSrc} alt="image" width={item.width} height={item.height} />
            </div>
            <div className={styles.cardText}>
                <div className={`${route.locale === Languages.HEBREW && styles.cardTitleHe} ${styles.cardTitle}`}>
                    <span>{t(item.title)}</span>
                </div>
                <div className={`${route.locale === Languages.HEBREW && styles.cardDescriptionHe} ${styles.cardDescription}`}>
                    <span>{t(item.description)}</span>
                </div>
            </div>
        </div>
    );
}
