import { ButtonProps } from "antd/lib/button";

export default interface SecondaryButtonProps extends ButtonProps {
  text?: string;
  icon?: string;
  iconWidth?: number;
  iconHeight?: number;
  alignIconRight?: boolean;
  width?: number;
}
