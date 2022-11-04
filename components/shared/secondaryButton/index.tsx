import { Button } from 'antd';
import Icon from '../icon';
import SecondaryButtonProps from './types';

import styles from "./secondaryButton.module.scss";

export default function SecondaryButton({ text, icon = "upload-cv.svg", iconWidth = 12, iconHeight = 24, alignIconRight = false, width, ...rest }: SecondaryButtonProps) {
    return (
        <Button className={`${styles.secondaryButton} ${rest.className}`} style={{ flexDirection: alignIconRight ? 'row-reverse' : 'row', width}} {...rest} >
            <Icon name={icon} width={iconWidth} height={iconHeight} />
            <span className={styles.text}>
                {text}
            </span>
        </Button>
    );
}
