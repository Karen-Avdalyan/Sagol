import ProductCardProps from "./types";

import styles from "./productCard.module.scss";
import Image from "../image";

export default function ProductCard({
  icon,
  title,
  description,
  width,
  height,
  ...rest
}: ProductCardProps) {
  return (
    <div className={styles.container} style={{ width, height }} {...rest}>
      <div className={styles.cardParts}>
        <Image src={icon} alt="Card Icon" className={styles.cardIcon} width={345} height={345} />
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