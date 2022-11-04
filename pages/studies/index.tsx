import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import CardProject from 'components/shared/cardForProjects';
import { studies } from 'utils/constants/studies';

import styles from "./studies.module.scss";

export default function Studies() {
    const { t } = useTranslation('common');

    return (
        <div>
            <div className={styles.bgImage}><h1>{t("studies_and_articles")}</h1></div>
            <div className={styles.cardContainer}>
                {studies.map((card) =>
                    <CardProject image={card.img} title={t(card.title)} width={345} height={390} className={styles.oneCard} key={card.title} />
                )}
            </div>
        </div>
    );
}
