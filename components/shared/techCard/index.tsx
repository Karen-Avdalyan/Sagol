import Image from "components/shared/image";
import ImageProps from "components/shared/image/types";

import styles from "./techCard.module.scss";

export default function TechCard({ href, ...props }: ImageProps) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <div className={styles.box}>
        <Image {...props} alt=""/>
      </div>
    </a>
  );
}
