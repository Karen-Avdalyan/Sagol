import CardProps from "./types";

import styles from "./card.module.scss";
import Image from "../image";

export default function Card({
  icon,
  title,
  description,
  width,
  height,
  ...rest
}: CardProps) {
  return (
    <div className={styles.container} style={{ width, height }} {...rest}>
      <div className={styles.cardParts}>
        <Image src={icon} alt="Card Icon" className={styles.cardIcon} width={135} height={135} />
      </div>
      <div className={styles.cardParts}>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.cardParts}>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
}
