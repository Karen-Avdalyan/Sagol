import { HTMLProps } from "react";

export default interface CardProjectProps extends HTMLProps<HTMLDivElement> {
  image: string;
  title: string;
  width?: number;
  height?: number;
};
