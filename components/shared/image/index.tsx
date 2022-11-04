import NextImage from "next/image";
import ImageProps from "./types";

export default function Image({ className, href, width, height, src, ...rest }: ImageProps) {
  return (
    <a href={href} rel="noreferrer" target="_blank" >
      <NextImage className={className} width={width} height={height} src={src} draggable="false" {...rest} />
    </a>
  );

}
