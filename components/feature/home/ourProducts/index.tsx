import useTranslation from "next-translate/useTranslation";
import { navBarPaths } from "utils/constants/navBarPaths";
import { useRouter } from "next/router";
import { images } from "utils/constants/images";
import ProductCard from "components/shared/productCard";
import Link from "next/link";
import { Languages } from "utils/enum/languageEnum";
import Image from "components/shared/image";

import styles from "./ourProducts.module.scss";

export default function OurProducts() {
  const { t } = useTranslation('common');
  const route = useRouter();

  const cards = [
    { img: images.our_products1, title: "home_product0", link: navBarPaths.disinfection },
    { img: images.our_products2, title: "home_product1", link: navBarPaths.p900gx },
    { img: images.our_products3, title: "home_product2", link: navBarPaths.deodorization },
    { img: images.our_products4, title: "home_product3", link: navBarPaths.litvalamps },
  ];

  return (
    <div id="ourServices" className={styles.container}>
      <div className={styles.ourServices}>
        <h1>{t('our_products')}</h1>
        <div className={styles.cards}>
          {cards.map((card) => {
            return (
              <Link href={card.link} key={card.link} passHref>
                <div>
                  <ProductCard className={`${styles.cardBox} ${""}`} title={t(card.title)} icon={card.img} />
                </div>
              </Link>
            );
          })}
        </div>
        <div className={`${route.locale === Languages.HEBREW && styles.allproductsHe} ${styles.allproducts}`}>
          {route.locale === Languages.HEBREW &&
            <div className={`${route.locale === Languages.HEBREW && styles.arrowHe} ${styles.arrow}`}>
              <Link href={cards[0].link} passHref >
                <Image width={12} height={12} alt="" src="/icons/sagol-arrow.svg" />
              </Link>
            </div>
          }
          <Link href={navBarPaths.products} passHref >
            <p>
              {t('view_all')}
            </p>
          </Link>
          {route.locale !== Languages.HEBREW &&
            <div className={`${route.locale === Languages.HEBREW && styles.arrowHe} ${styles.arrow}`}>
              <Link href={cards[0].link} passHref >
                <Image width={12} height={12} alt="" src="/icons/sagol-arrow.svg" />
              </Link>
            </div>
          }
        </div>
      </div>
    </div>

  );
}
