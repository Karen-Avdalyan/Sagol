import { ImageProps as NextImageProps } from "next/image";

export default interface ImageProps extends NextImageProps {
    width?: number;
    height?: number;
    href?: string;
    className?: string;
}
