export interface navItems {
    name: string;
    href?: string | undefined;
    dropdown: boolean;
    menu?: JSX.Element;
    menuMobile?: { name: string }[] | undefined;
}

export interface HeaderAccordionProps {
    text: string;
    desc: string;
}
