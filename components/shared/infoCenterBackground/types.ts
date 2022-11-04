interface BackgroundImage {
    src: string;
};

export default interface MainBackgroundProps {
    title: string;
    description: string;
    background?: BackgroundImage;
};
