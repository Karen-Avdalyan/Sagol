import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

import styles from "./productNavItem.module.scss";

interface ItemProps {
    src: any,
    title: string,
    link: any
}

export default function ProductNavItem({ src, title, link }: ItemProps) {
    const { t } = useTranslation('common');

    return (
        <div className={styles.navItem}>
            <Image src={src} alt="" width={285} height={285} />
            <div className={styles.itemTitle}>
                <span>{t(title)}</span>
            </div>
            <div className={styles.itemButton}>
                <a href={link}>{t('view_product')}</a>
            </div>
        </div>
    );
};
