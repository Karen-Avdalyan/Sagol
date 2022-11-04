import { storiesOf } from "@storybook/react";
import ProductPage from "./index";

storiesOf("ProductPage", module).add("ProductPage Component", () => {
    return <ProductPage headerImage="" headerTitle="" firstTitle="" firstText="" secondTitle="" secondTextData={[]} image="" isProducts={false} />;
});
