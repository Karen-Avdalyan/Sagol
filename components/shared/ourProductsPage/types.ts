export type SecondTextDataType = {
    text: string;
};

export type ProductDataType = {
    img: string;
    description: string;
    href: string;
};

export default interface ProductPageProps {
    headerImage: string;
    headerTitle: string;
    firstTitle: string;
    firstText: string;
    secondTitle: string;
    secondTextData: SecondTextDataType[];
    image: string;
    isProducts: boolean;
    productData?: ProductDataType[];
}
