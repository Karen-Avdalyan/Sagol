import { images } from "utils/constants/images";

export interface CardTypes {
    title: string;
    description: string;
    iconSrc: string;
    width: number;
    height: number;
}

export interface CardItemProps {
    item: CardTypes;
}

export const workWithUsCards: CardTypes[] = [
    {
        title: "home_works_title0",
        description: "home_works_desc0",
        iconSrc: images.work_with_us1,
        width: 14,
        height: 20,
    },
    {
        title: "home_works_title1",
        description: "home_works_desc1",
        iconSrc: images.work_with_us2,
        width: 21,
        height: 21,
    },
    {
        title: "home_works_title2",
        description: "home_works_desc2",
        iconSrc: images.work_with_us3,
        width: 24,
        height: 18,
    },
    {
        title: "home_works_title3",
        description: "home_works_desc3",
        iconSrc: images.work_with_us4,
        width: 20,
        height: 6,
    },
];
