import { storiesOf } from "@storybook/react";
import SecondaryButton from ".";

storiesOf("Secondary Button", module).add("Secondary Button component", () => {
    return <SecondaryButton text="Upload your CV" />;
});
