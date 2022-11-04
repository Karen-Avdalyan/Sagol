import Breadcrumbs from "components/shared/breadcrumb";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { secondProducts } from "utils/constants/secondProduct";
import { Languages } from "utils/enum/languageEnum";
import ProductNavItem from "./productNavItem";

import styles from "./products.module.scss";

export default function ProductsPage() {
    const { t } = useTranslation('common');
    const route = useRouter();

    return (
        <div className={`${route.locale === Languages.HEBREW && styles.productsContainerHe} ${styles.productsContainer}`}>
            <div className={`${route.locale === Languages.HEBREW && styles.breadcrumbHe} ${styles.breadcrumb}`}>
                <Breadcrumbs />
            </div>
            <span className={styles.pageTitle}>{t('our_products')}</span>
            <div className={`${route.locale === Languages.HEBREW && styles.productsSectionHe} ${styles.productsSection}`}>
                {secondProducts.map((item) => (
                    <div className={styles.cards} key={item.title}>
                        <ProductNavItem src={item.imageSrc} title={item.title} link={route.locale === Languages.HEBREW ? `${Languages.HEBREWLINK}${item.link}` : item.link} />
                    </div>
                ))}
            </div>
        </div>
    );
};
