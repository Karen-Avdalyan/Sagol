import { storiesOf } from "@storybook/react";
import ProductCard from ".";

storiesOf("Card", module).add("Card without description", () => {
    return <ProductCard title="Software development" icon="/icons/blockchain.svg" />;
});

storiesOf("Card", module).add("Card with description", () => {
    return (
        <ProductCard
            title="Speed"
            icon="/icons/blockchain.svg"
            description="Due to our working high speed, our team of professionals 
                  provides the best and most innovative solutions in the 
                  shortest amount of time possible"
        />
    );
});
