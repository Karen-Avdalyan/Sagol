export interface Card {
    img: string
    title: string | TemplateStringsArray | undefined;
    contentFirst: string | TemplateStringsArray | undefined;
    contentSecond: string | TemplateStringsArray | undefined;
};
