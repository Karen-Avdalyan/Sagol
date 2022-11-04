import useTranslation from 'next-translate/useTranslation';
import styles from './intro.module.scss';

export default function AboutIntro() {
    const { t } = useTranslation('common');

    return (
        <div className={styles.introConatiner}>
            <h2>{t("about_us")}</h2>
            <h1>{t("about_desc")}</h1>
        </div>
    );
}
