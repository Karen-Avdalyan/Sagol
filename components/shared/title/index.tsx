import TitleProps from "./types";

import styles from "./title.module.scss";

export default function Title({ titleText, alignBorder }: TitleProps) {
  return (
    <div className={styles.titleContainer}>
      <div className={styles.title}>{titleText}</div>
      <div
        className={styles.borderContainer}
        style={{ justifyContent: alignBorder ?? "center" }}
      >
        <div className={styles.border} />
      </div>
    </div>
  );
}
