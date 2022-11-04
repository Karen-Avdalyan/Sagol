import { useRouter } from "next/router";
import { Languages } from "utils/enum/languageEnum";
import SubTitleTextProps from "./types";

import styles from "./subTitleText.module.scss";

export default function SubTitleText({
  subTitle,
  description,
  titleSize,
  titleColor
}: SubTitleTextProps) {
  const route = useRouter();

  return (
    <>
      <div className={`${route.locale === Languages.HEBREW && styles.subTitleHe} ${styles.subTitle}`} style={{ fontSize: titleSize, color: titleColor }} >
        {subTitle}
      </div>
      <div className={`${route.locale === Languages.HEBREW && styles.descriptionHe} ${styles.description}`}>
        {description}
      </div>
    </>
  );
}
