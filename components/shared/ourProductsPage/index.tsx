import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { Languages } from "utils/enum/languageEnum";
import Product from "../product";
import ProductPageProps, { ProductDataType, SecondTextDataType } from "./types";
import Image from "../image";
import Link from "../link";

import styles from "./ourProductPage.module.scss";

export default function ProductPage({ headerImage,
    headerTitle,
    firstTitle,
    firstText,
    secondTitle,
    secondTextData,
    image,
    productData, }: ProductPageProps) {
    const { t } = useTranslation('common');
    const route = useRouter();

    return (
        <div className={styles.pagecontainer}>
            <div className={styles.headimage}>
                <h1>{t(headerTitle)} </h1>
                <img src={headerImage} alt="" />
            </div>
            <div className={`${route.locale === Languages.HEBREW && styles.pagecontentHe} ${styles.pagecontent}`}>
                <div className={styles.textsection}>
                    <div className={styles.firstsection}>
                        <p className={styles.title}>
                            {t(firstTitle)}
                        </p>
                        <text>
                            {t(firstText)}
                        </text>
                    </div>
                    <div className={styles.secondsection}>
                        <p className={styles.title}>
                            {t(secondTitle)}
                        </p>
                        <div className={`${route.locale === Languages.HEBREW && styles.itemsGroupHe} ${styles.itemsGroup}`}>
                            {secondTextData?.map((text: SecondTextDataType) => (
                                <ul key={null}>
                                    <li>{t(text.text)}</li>
                                </ul>
                            ))}
                        </div>
                    </div>
                    <div className={`${route.locale === Languages.HEBREW && styles.buttonConatinerHe} ${styles.buttonConatiner}`}>
                        {!productData && headerTitle === "home_card_title1" &&
                            <div className={styles.buttonHref}>
                                <Link href="/growsave" text={t("growsaver_website")} />
                            </div>
                        }
                    </div>
                </div>
                <div>
                    <Image alt="" className={styles.contentimg} width={708} height={708} src={image ?? ''} />
                </div>
            </div>
            {productData && <div className={styles.products}>
                <h1>{t('products')}</h1>
                <div className={`${route.locale === Languages.HEBREW && styles.productSectionHe} ${styles.productSection}`}>
                    {productData?.map((e: ProductDataType) => (
                        <div key={null} className={styles.product}>
                            <Product href={e.href} description={t(e.description)} src={e.img} />
                        </div>
                    ))}
                </div>
            </div>}

        </div>
    );
}
