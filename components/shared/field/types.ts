import { navBarPaths } from "utils/constants/navBarPaths";
import { images } from "utils/constants/images";

export interface CardProps {
    cardTitle: string;
    imgSrc: string;
    cardDiscription: string;
    buttonText: string;
    link: string;
    bigImg: boolean;
}

export const fieldCards = [
    {
        title: "home_card_title0",
        discription: "home_card_desc0",
        imgSrc: images.homeFields1,
        buttonText: "home_card_button",
        link: navBarPaths.medical,
        bigImg: true,
    },
    {
        title: "home_card_title1",
        discription: "home_card_desc1",
        imgSrc: images.homeFields2,
        buttonText: "home_card_button",
        link: navBarPaths.cannabis,
        bigImg: true,
    },
    {
        title: "home_card_title2",
        discription: "home_card_desc2",
        imgSrc: images.homeFields3,
        buttonText: "home_card_button",
        link: navBarPaths.cold,
        bigImg: false,
    },
    {
        title: "home_card_title3",
        discription: "home_card_desc3",
        imgSrc: images.homeFields4,
        buttonText: "home_card_button",
        link: navBarPaths.public,
        bigImg: false,
    },
    {
        title: "home_card_title4",
        discription: "home_card_desc4",
        imgSrc: images.homeFields5,
        buttonText: "home_card_button",
        link: navBarPaths.home,
        bigImg: false,
    },
];
