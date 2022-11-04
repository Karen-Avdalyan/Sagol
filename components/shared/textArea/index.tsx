import Area from "antd/lib/input/TextArea";
import TextAreaProps from "./types";

import styles from "./textArea.module.scss";

export default function TextArea({ label, ...rest }: TextAreaProps) {
  return (
    <div>
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>
      <Area className={`${styles.textArea} ${rest.className}`} {...rest} />
    </div>
  );
}
