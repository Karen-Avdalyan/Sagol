import image2 from "public/image/litvaLampsImages/smallImg.png";
import image3 from "public/image/litvaLampsImages/smallImg2.png";
import image1 from "public/image/litvaLampsImages/bigImg.png";
import { StaticImageData } from "next/image";

export interface ButtonProps {
    leftButtonText?: string;
    rightButtonText?: string;
    leftButtonValue?: boolean;
    rightButtonValue?: boolean;
}
export interface ImagesTypes {
    src: StaticImageData | string;
    bigImage: StaticImageData | string;
}

export interface smallImagesTypes {
    src?: string;
    bigImage?: string;
}

export interface ProductDescription {
    description?: string[];
}
export interface ProductItemTypes {
    rightButtonText?: string | undefined;
    leftButtonText?: string | undefined;
    leftButtonValue?: boolean;
    rightButtonValue?: boolean;
    smallImages?: smallImagesTypes[];
    title?: string;
    description?: ProductDescription[];
    name: any;
}

export interface ImagesProps {
    src: any;
    bigImage: any;
}

export const smallImages: ImagesProps[] = [
    {
        src: image2,
        bigImage: image1,
    },
    {
        src: image3,
        bigImage: image3,
    },
];

export enum PagesNames {
    LITVALAMPS = "litvalamps",
    AIR = "air",
    DEODORIZATION = "deodorization",
    DISINFECTION = "disinfection",
    SYSTEM = "system",
}
