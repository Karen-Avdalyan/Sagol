import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ProductPage from 'components/shared/ourProductsPage';
import { data } from 'utils/constants/domains';

export default function Domains() {
    const [product, setProduct] = useState<any>();
    const router = useRouter();
    const { name } = router.query;

    const getProduct = (e: any) => {
        const productInfo = data.find((prod) => prod.urlName === e);
        setProduct(productInfo);
    };

    useEffect(() => {
        if (name) getProduct(name);
    }, [name]);

    return <ProductPage headerImage={product?.headerImage}
        headerTitle={product?.headerTitle}
        firstTitle={product?.firsTitle}
        firstText={product?.firstText}
        secondTitle={product?.secondTitle}
        secondTextData={product?.data}
        image={product?.image}
        isProducts
        productData={product?.productData} />;
};
