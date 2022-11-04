import { HTMLProps } from "react";

export default interface ProductCardProps extends HTMLProps<HTMLDivElement> {
  icon: string;
  title: string;
  description?: string;
  width?: string;
  height?: string;
}
