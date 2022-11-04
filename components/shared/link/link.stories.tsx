import { storiesOf } from "@storybook/react";
import Link from "./index";

storiesOf("Link", module).add("Link Component", () => {
    return <Link text="Sagol" href="/about" />;
});
