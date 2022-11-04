import { ButtonProps as AntdButtonProps } from "antd/lib/button";

export default interface ButtonProps extends AntdButtonProps {
  text?: string;
  icon?: string;
  name?: string;
  width?: number;
  height?: number;
  isLink?: boolean;
  loading?: boolean;
  iconAtRight?: boolean;
  onClick?: (() => Promise<void>) | (() => void) | undefined;
}
