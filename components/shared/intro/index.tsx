import useTranslation from 'next-translate/useTranslation';
import FieldCard from "../field";
import { fieldCards } from "../field/types";

import styles from "./intro.module.scss";

export default function Intro() {
    const { t } = useTranslation('common');

    return (
        <section className={styles.homeContainer}>
            <span className={styles.sectionTitle}>{t('our_fields')}</span>
            <div className={styles.cardsSection}>
                {fieldCards.map((el) => (
                    <FieldCard cardTitle={t(el.title)} imgSrc={el.imgSrc} cardDiscription={t(el.discription)} buttonText={t(el.buttonText)} key={el.title} link={el.link} bigImg={el.bigImg} />
                ))}
            </div>
        </section>
    );
}