import { useRouter } from "next/router";
import leftButtonIcon from "public/image/litvaLampsImages/leftButtonIcon.png";
import rightButtonIcon from "public/image/litvaLampsImages/rightButtonIcon.png";
import Image from "next/image";
import { Languages } from "utils/enum/languageEnum";
import { ButtonProps } from "../types";

import styles from "./productButton.module.scss";

export default function ProductButton({
  leftButtonText,
  rightButtonText,
  leftButtonValue,
  rightButtonValue,
}: ButtonProps) {
    const route = useRouter();

  return (
    <div className={`${route.locale === Languages.HEBREW && styles.productButtonsHe} ${styles.productButtons}`}>
      {leftButtonValue && (
        <div className={styles.leftButton}>
          <Image src={leftButtonIcon} alt="" /> <span>{leftButtonText}</span>
        </div>
      )}
      {rightButtonValue && (
        <div className={styles.rightButton}>
          <Image src={rightButtonIcon} alt="" /> <span>{rightButtonText}</span>
        </div>
      )}
    </div>
  );
}
