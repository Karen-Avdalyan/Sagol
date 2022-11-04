import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { images } from "utils/constants/images";
import { navBarPaths } from "utils/constants/navBarPaths";
import CardProject from "components/shared/cardForProjects";
import Link from "next/link";
import { Languages } from "utils/enum/languageEnum";
import Image from "components/shared/image";

import styles from "./ourServices.module.scss";

export default function OurServices() {
  const { t } = useTranslation('common');
  const route = useRouter();

  const cards = [
    { img: images.project2, title: "home_recent_title0" },
    { img: images.project8, title: "home_recent_title1" },
    { img: images.project3, title: "home_recent_title2" },
    { img: images.project6, title: "home_recent_title3" },
    { img: images.project4, title: "home_recent_title4" },
    { img: images.project5, title: "home_recent_title5" },
    { img: images.project7, title: "home_recent_title6" },
    { img: images.project1, title: "home_recent_title7" },
  ];

  return (
    <div id="ourServices" className={styles.container}>
      <div className={styles.ourServices}>
        <h1>{t('recent_projects')}</h1>
        <div className={styles.cards}>
          {cards.map((card) => {
            return (
              <CardProject image={card.img} title={t(card.title)} width={345} key={card.title} />
            );
          })}
        </div>
        <div className={`${route.locale === Languages.HEBREW && styles.allproductsHe} ${styles.allproducts}`}>
          {route.locale === Languages.HEBREW && <div className={`${route.locale === Languages.HEBREW && styles.arrowHe} ${styles.arrow}`}>
            <Link href={navBarPaths.products} passHref >
              <Image width={12} height={12} alt="" src="/icons/sagol-arrow.svg" />
            </Link>
          </div>}
          <Link href="/projects" passHref >
            <p>
              {t("view_all_projects")}
            </p>
          </Link>
          {route.locale !== Languages.HEBREW &&
            <div className={`${route.locale === Languages.HEBREW && styles.arrowHe} ${styles.arrow}`}>
              <Link href={navBarPaths.products} passHref >
                <Image width={12} height={12} alt="" src="/icons/sagol-arrow.svg" />
              </Link>
            </div>
          }
        </div>
      </div>
    </div>

  );
}
