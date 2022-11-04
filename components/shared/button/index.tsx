import { useState } from "react";
import { Button as AntdButton, Spin } from "antd";
import Icon from "components/shared/icon";
import { returnsPromise } from "utils";
import ButtonProps from "./type";

import styles from "./button.module.scss";

export default function Button({
  text,
  icon,
  iconAtRight = true,
  width = 20,
  height = 15,
  children,
  isLink = false,
  loading = false,
  onClick,
  className,
  ...rest
}: ButtonProps) {
  const [spinLoading, setSpinLoading] = useState(false);

  const handleButton = async () => {
    if (!onClick || isLink) { return; }

    if (loading) {
      try {
        setSpinLoading(true);
        if (returnsPromise(onClick)) {
          await onClick();
        } else {
          onClick();
        }
      } catch (err) {
        console.error(err);
      } finally {
        setSpinLoading(false);
      }
    } else {
      onClick();
    }
  };

  return (
    <AntdButton
      className={`${styles.btn} ${styles.light} ${className}`}
      style={{ flexDirection: iconAtRight ? "row" : "row-reverse" }}
      {...rest}
      onClick={() => handleButton()}
    >
      {spinLoading ?
        <Spin /> :
        text && <p className={styles.text}>{text}</p>
      }
      {!!children && children}
      {icon && (
        <div className={styles.img}>
          <Icon width={width} height={height} name={icon} />
        </div>
      )}
    </AntdButton>
  );
}
