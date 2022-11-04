import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { Button } from 'antd';
import Image from "components/shared/image";
import ProductProps from "./types";

import styles from "./product.module.scss";

export default function Product({ src, href, description }: ProductProps) {
    const route = useRouter();
    const { t } = useTranslation('common');

    return (
        <section className={styles.product}>
            <Image className={styles.image} src={src} width={285} height={285} alt="" />
            <div className={styles.description}>
                <span>{description}</span>
            </div>
            <Button className={styles.viewProduct} onClick={() => { route.push(`${href}`); }}>{t("view_product")}</Button>
        </section>
    );
}
