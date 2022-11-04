import CardProjectProps from "./types";
import Image from "../image";

import styles from "./cardForProjects.module.scss";

export default function CardProject({
    image,
    title,
    width,
    height,
    ...rest
}: CardProjectProps) {
    return (
        <div className={styles.container} style={{ width, height }} {...rest}>
            <div className={styles.cardParts}>
                <Image src={image} alt="Card Icon" className={styles.cardIcon} width={345} height={230} />
            </div>
            <div className={styles.cardParts}>
                <div className={styles.title}>{title}</div>
            </div>
        </div>
    );
}
