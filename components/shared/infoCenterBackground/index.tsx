import MainBackgroundProps from "./types";

import styles from "./infoCenterBackground.module.scss";

export default function InfoCenterBackground({ title, description, background }: MainBackgroundProps) {
    return (
        <section className={styles.infoCenterBackground} style={{ backgroundImage: `url(${background?.src})` }}>
            <div>
                <span className={styles.InfoCenterTitle}>{title}</span>
                <p className={styles.InfoCenterText}>{description}</p>
            </div>
        </section >
    );
}
