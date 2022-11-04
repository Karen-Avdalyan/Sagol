import React from 'react';
import ProductSection from 'components/feature/litvaLampsProduct';
import { useRouter } from 'next/router';

export default function ProductPage() {
    const router = useRouter();
    const { name } = router.query;
    return (
        <ProductSection name={name} />
    );
};
