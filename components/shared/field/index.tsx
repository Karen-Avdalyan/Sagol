import Image from "next/image";
import { useRouter } from "next/router";
import { Languages } from "utils/enum/languageEnum";
import { CardProps } from "./types";

import styles from "./field.module.scss";

export default function FieldCard({ cardTitle, imgSrc, cardDiscription, buttonText, link, bigImg }: CardProps) {
    const route = useRouter();

    return (
        <div className={styles.fieldCard}>
            <div className={styles.cardBackgroundImg}>
                <Image src={imgSrc ?? ''} alt='image' width={bigImg ? 710 : 470} height={bigImg ? 370 : 430} />
                <span className={styles.cardTitle}>{cardTitle}</span>
            </div>
            <div className={`${route.locale === Languages.HEBREW && styles.cardDiscriptionHe} ${styles.cardDiscription}`}>
                <span>{cardDiscription}</span>
            </div>
            <div className={`${route.locale === Languages.HEBREW && styles.cardButtonHe} ${styles.cardButton}`} onClick={() => route.push(link)}>{buttonText}</div>
        </div>
    );
}
