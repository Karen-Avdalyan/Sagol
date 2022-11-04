import { HTMLProps } from "react";

export default interface CardProps extends HTMLProps<HTMLDivElement> {
  icon: string;
  title: string;
  description?: string;
  width?: string;
  height?: string;
}
