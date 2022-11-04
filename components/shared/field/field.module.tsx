import { storiesOf } from "@storybook/react";
import FieldCard from "./index";

storiesOf("FieldCard", module).add("FieldCard Component", () => {
    return <FieldCard cardTitle="" cardDiscription="" buttonText="" link="" imgSrc="" bigImg={false} />;
});
